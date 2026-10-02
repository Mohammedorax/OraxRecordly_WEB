"""WCAG contrast audit + solver for the muted text tiers.

BEFORE  the muted tiers were alpha blends of --ink over --paper
        (text-ink/25 ... text-ink/70) plus the solid --ink-soft token.
AFTER   each tier is a solid "faint brand blue" token (text-mink-N) solved on
        the OraxRecordly brand hue (212deg) for a target contrast ratio.

Every tier keeps or improves its WCAG ratio; the ratios chosen form a strictly
monotone ramp so the design's faded-ness hierarchy survives the hue shift.
"""

from __future__ import annotations

import colorsys

PAPER_LIGHT = (0xFF, 0xFF, 0xFF)
INK_LIGHT = (0x0A, 0x0A, 0x0A)
PAPER_DARK = (0x10, 0x14, 0x1B)
INK_DARK = (0xF2, 0xF4, 0xF8)
FOOTER = (0x0A, 0x0A, 0x0A)

HUE = 212 / 360  # OraxRecordly brand blue
SAT = 0.42

# tier -> (alpha of --ink, target contrast ratio)
LIGHT_TIERS = {
    "70": (0.70, 7.60),
    "60": (0.60, 5.25),
    "50": (0.50, 4.50),
    "40": (0.40, 3.40),
    "35": (0.35, 3.00),
    "30": (0.30, 2.40),
    "25": (0.25, 2.00),
}


def _lin(c: float) -> float:
    c /= 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def luminance(rgb) -> float:
    r, g, b = (_lin(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def ratio(a, b) -> float:
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def blend(fg, bg, alpha: float):
    return tuple(round(alpha * f + (1 - alpha) * b) for f, b in zip(fg, bg))


def lum_for_ratio(target_ratio: float, bg, fg_darker: bool) -> float:
    """Luminance that yields `target_ratio` against `bg`."""
    lb = luminance(bg)
    if fg_darker:
        return (lb + 0.05) / target_ratio - 0.05
    return target_ratio * (lb + 0.05) - 0.05


def solve(target_lum: float, on_dark: bool, sat: float = SAT):
    """Colour of the brand hue whose luminance is the closest valid match.

    On light paper we need lum <= target (darker = more contrast), on the dark
    paper we need lum >= target. Walking from the paper end keeps the result as
    close to the target as the hue allows.
    """
    step = 1 / 2000
    rng = range(2000, 0, -1) if not on_dark else range(1, 2001)
    best = None
    for i in rng:
        l = i * step
        r, g, b = colorsys.hls_to_rgb(HUE, l, sat)
        rgb = (round(r * 255), round(g * 255), round(b * 255))
        lum = luminance(rgb)
        if (on_dark and lum >= target_lum) or (not on_dark and lum <= target_lum):
            best = rgb
            break
    if best is None:
        r, g, b = colorsys.hls_to_rgb(HUE, 0.5, sat)
        best = (round(r * 255), round(g * 255), round(b * 255))
    return best


def hexs(rgb) -> str:
    return "#%02x%02x%02x" % rgb


print("=" * 100)
print("LIGHT CANVAS  —  paper #ffffff  (before = alpha of #0a0a0a)")
print("=" * 100)
print(f"{'token':<16}{'before':<10}{'ratio':>7}   {'after':<10}{'ratio':>7}   {'delta':>7}")
light_vars: dict[str, str] = {}
baseline: dict[str, tuple[float, float]] = {}
for name, (alpha, target) in LIGHT_TIERS.items():
    before = blend(INK_LIGHT, PAPER_LIGHT, alpha)
    br = ratio(before, PAPER_LIGHT)
    target = max(target, br)
    after = solve(lum_for_ratio(target, PAPER_LIGHT, True), on_dark=False)
    ar = ratio(after, PAPER_LIGHT)
    baseline[name] = (br, ar)
    light_vars[name] = hexs(after)
    print(f"text-mink-{name:<11}{hexs(before):<10}{br:>7.2f}   {hexs(after):<10}{ar:>7.2f}   {ar - br:>+7.2f}")

before = (0x52, 0x52, 0x59)
br = ratio(before, PAPER_LIGHT)
ar_target = br + 0.05
after = solve(lum_for_ratio(ar_target, PAPER_LIGHT, True), on_dark=False, sat=0.34)
ar = ratio(after, PAPER_LIGHT)
print(f"{'text-ink-soft':<16}{hexs(before):<10}{br:>7.2f}   {hexs(after):<10}{ar:>7.2f}   {ar - br:>+7.2f}")
light_soft = hexs(after)

print()
print("=" * 100)
print("DARK CANVAS  —  paper #10141b  (before = alpha of #f2f4f8)")
print("=" * 100)
print(f"{'token':<16}{'before':<10}{'ratio':>7}   {'after':<10}{'ratio':>7}   {'delta':>7}")
dark_vars: dict[str, str] = {}
for name, (alpha, target) in LIGHT_TIERS.items():
    before = blend(INK_DARK, PAPER_DARK, alpha)
    br = ratio(before, PAPER_DARK)
    target = max(target, br)
    after = solve(lum_for_ratio(target, PAPER_DARK, False), on_dark=True, sat=0.40)
    ar = ratio(after, PAPER_DARK)
    dark_vars[name] = hexs(after)
    print(f"text-mink-{name:<11}{hexs(before):<10}{br:>7.2f}   {hexs(after):<10}{ar:>7.2f}   {ar - br:>+7.2f}")

before = (0xA9, 0xB0, 0xBD)
br = ratio(before, PAPER_DARK)
after = solve(lum_for_ratio(br + 0.05, PAPER_DARK, False), on_dark=True, sat=0.32)
ar = ratio(after, PAPER_DARK)
print(f"{'text-ink-soft':<16}{hexs(before):<10}{br:>7.2f}   {hexs(after):<10}{ar:>7.2f}   {ar - br:>+7.2f}")
dark_soft = hexs(after)

print()
print("=" * 100)
print("BLACK BANDS  —  footer/ticker #0a0a0a  (before = alpha of #ffffff)")
print("=" * 100)
print(f"{'token':<16}{'before':<10}{'ratio':>7}   {'after':<10}{'ratio':>7}   {'delta':>7}")
band_vars: dict[str, str] = {}
for name, alpha in [("60", 0.60), ("50", 0.50), ("40", 0.40), ("35", 0.35)]:
    before = blend((0xFF, 0xFF, 0xFF), FOOTER, alpha)
    br = ratio(before, FOOTER)
    after = solve(lum_for_ratio(br + 0.05, FOOTER, False), on_dark=True, sat=0.38)
    ar = ratio(after, FOOTER)
    band_vars[name] = hexs(after)
    print(f"text-mink-d{name:<10}{hexs(before):<10}{br:>7.2f}   {hexs(after):<10}{ar:>7.2f}   {ar - br:>+7.2f}")

print()
print("-" * 100)
print("CSS")
print("-" * 100)
print("  (light :root)")
for n in ["25", "30", "35", "40", "50", "60", "70"]:
    print(f"  --mink-{n}: {light_vars[n]};")
print(f"  --ink-soft: {light_soft};")
print("  (dark .dark)")
for n in ["25", "30", "35", "40", "50", "60", "70"]:
    print(f"  --mink-{n}: {dark_vars[n]};")
print(f"  --ink-soft: {dark_soft};")
print("  (:root, black bands)")
for n in ["60", "50", "40", "35"]:
    print(f"  --mink-d{n}: {band_vars[n]};")
