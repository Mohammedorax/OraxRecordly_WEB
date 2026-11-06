#!/usr/bin/env python3
"""Subset and convert the site's four SA Hazm weights to WOFF2.

The site ships TTF today: four cuts at ~40 KB each, all preloaded, so a visitor
downloads 156 KB of uncompressed font before the first text paints even though the
page only ever renders a small slice of the Unicode range.

This script:
  * collects every character the site can actually render (all source text, plus
    the whole Arabic block with its presentation forms, Latin letters, both digit
    systems and the punctuation the design uses) so no glyph is ever missing;
  * subsets each weight to exactly that set and writes WOFF2.

Run from the project root:  python scripts/subset-fonts.py
"""

from __future__ import annotations

import pathlib
import re
import sys

from fontTools import subset

ROOT = pathlib.Path(__file__).resolve().parent.parent
FONT_DIR = ROOT / "src" / "fonts"
SOURCE_DIRS = [ROOT / "src"]

WEIGHTS = ["Regular", "Medium", "SemiBold", "Bold"]

# Ranges the design can render even when a particular string is not in the source
# yet: the full Arabic block, its presentation forms, basic Latin, both digit
# systems, and general punctuation. Subsetting must never decide that a glyph the
# site already ships is unreachable.
SAFETY_RANGES = [
    (0x0000, 0x00FF),  # Latin-1 supplement
    (0x0600, 0x06FF),  # Arabic
    (0x0750, 0x077F),  # Arabic supplement
    (0x08A0, 0x08FF),  # Arabic extended-A
    (0x2000, 0x206F),  # general punctuation
    (0x20A0, 0x20CF),  # currency
    (0x2190, 0x21FF),  # arrows
    (0x2600, 0x26FF),  # misc symbols
    (0xFB50, 0xFDFF),  # Arabic presentation forms-A
    (0xFE70, 0xFEFF),  # Arabic presentation forms-B
]

TEXT_FILE_SUFFIXES = {".ts", ".tsx", ".css", ".md"}


def collect_characters() -> set[int]:
    characters: set[int] = set()
    for directory in SOURCE_DIRS:
        for path in directory.rglob("*"):
            if path.suffix not in TEXT_FILE_SUFFIXES or not path.is_file():
                continue
            try:
                characters.update(ord(char) for char in path.read_text(encoding="utf-8"))
            except UnicodeDecodeError:
                continue

    for start, end in SAFETY_RANGES:
        characters.update(range(start, end + 1))

    return characters


def subset_weight(source: pathlib.Path, characters: set[int]) -> pathlib.Path:
    target = source.with_suffix(".woff2")
    font = subset.load_font(str(source), subset.Options())
    options = subset.Options()
    options.flavor = "woff2"
    options.desubroutinize = False
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.notdef_outline = True
    options.recalc_bounds = True
    options.drop_tables = []
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=characters)
    subsetter.subset(font)
    subset.save_font(font, str(target), options)
    font.close()
    return target


def main() -> int:
    missing = [name for name in WEIGHTS if not (FONT_DIR / f"SAHazm-{name}.ttf").is_file()]
    if missing:
        print(f"Missing font sources: {missing}", file=sys.stderr)
        return 1

    characters = collect_characters()
    print(f"Subsetting to {len(characters)} code points")

    total_before = 0
    total_after = 0
    for name in WEIGHTS:
        source = FONT_DIR / f"SAHazm-{name}.ttf"
        target = subset_weight(source, characters)
        before = source.stat().st_size
        after = target.stat().st_size
        total_before += before
        total_after += after
        print(f"  {name:<9} {before / 1024:6.1f} KB -> {after / 1024:6.1f} KB  ({target.name})")

    print(
        f"Total {total_before / 1024:.1f} KB -> {total_after / 1024:.1f} KB "
        f"({100 - total_after * 100 / max(total_before, 1):.0f}% smaller)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
