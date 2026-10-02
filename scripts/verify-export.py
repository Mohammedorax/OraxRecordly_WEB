"""Static-export verification.

Copies `out/` to <temp>/OraxRecordly_WEB, serves <temp> over HTTP, then fetches
the page and every URL it references (HTML href/src, CSS url(), and asset paths
embedded in the JS chunks) and reports a status table.
"""

from __future__ import annotations

import functools
import http.server
import os
import posixpath
import re
import shutil
import socketserver
import sys
import threading
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "out"
TEMP = Path(os.environ.get("TEMP", "/tmp")) / "orax-pages-verify"
DOCROOT = TEMP
PREFIX = "/OraxRecordly_WEB"
PORT = 8137
BASE = f"http://127.0.0.1:{PORT}"

REF_RE = re.compile(r'(?:href|src)="([^"#][^"]*)"')
CSS_URL_RE = re.compile(r'url\((?:"|\')?([^)"\']+)(?:"|\')?\)')
JS_PATH_RE = re.compile(rf'"{PREFIX}/[A-Za-z0-9._~!$&()*+,;=:@%/-]+"')
SUSPECT_RE = re.compile(r'(?<![\w/-])(/(?:_next|images|brand|icon\.png|fonts)[A-Za-z0-9._/-]*)')


def setup_docroot() -> None:
    target = DOCROOT / "OraxRecordly_WEB"
    if target.exists():
        shutil.rmtree(target)
    DOCROOT.mkdir(parents=True, exist_ok=True)
    shutil.copytree(OUT, target)
    # GitHub Pages runs Jekyll unless told otherwise; the workflow writes this.
    (target / ".nojekyll").write_text("", encoding="utf-8")
    print(f"docroot: {DOCROOT}  ({sum(1 for _ in target.rglob('*') if _.is_file())} files)")


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):  # noqa: D102
        pass


def serve() -> socketserver.TCPServer:
    handler = functools.partial(Quiet, directory=str(DOCROOT))
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", PORT), handler)
    httpd.daemon_threads = True
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def add_path(seen: dict[str, str], path: str, source: str) -> None:
    """Record a candidate path, ignoring bare directory prefixes."""
    if not path or path.endswith("/"):
        return
    seen.setdefault(path, source)


def get(url: str):
    req = urllib.request.Request(url, method="GET", headers={"User-Agent": "orax-verify"})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.status, r.read()
    except urllib.error.HTTPError as e:
        return e.code, b""
    except Exception as e:  # noqa: BLE001
        return f"ERR {type(e).__name__}: {e}", b""


def main() -> int:
    setup_docroot()
    serve()

    pages = [f"{PREFIX}/", f"{PREFIX}/404.html", f"{PREFIX}/sitemap.xml", f"{PREFIX}/robots.txt"]
    seen: dict[str, str] = {}  # path -> where it came from

    for p in pages:
        seen[p] = "entry page"

    # 1. HTML references
    for p in pages[:2]:
        status, body = get(BASE + p)
        if status != 200:
            print(f"!! {p} -> {status}")
            continue
        html = body.decode("utf-8", "replace")
        for m in REF_RE.finditer(html):
            u = m.group(1)
            if u.startswith(("http://", "https://", "mailto:", "data:", "#", "//")):
                continue
            seen.setdefault(u, f"html:{p}")
        # asset paths embedded in the RSC payload of the page
        for m in JS_PATH_RE.finditer(html):
            add_path(seen, m.group(0)[1:-1], f"rsc:{p}")

    # 2. CSS url() references (linked stylesheets)
    css_paths = [u for u in seen if u.endswith(".css")]
    for css in list(css_paths):
        status, body = get(BASE + css)
        if status != 200:
            continue
        css_dir = css.rsplit("/", 1)[0]
        text = body.decode("utf-8", "replace")
        # drop inline data: URIs (the paper-grain SVG contains its own url(#n))
        text = re.sub(r'url\(\s*["\']?data:[^\n]*?["\']\s*\)', "", text)
        for m in CSS_URL_RE.finditer(text):
            u = m.group(1)
            if u.startswith(("data:", "http://", "https://")):
                continue
            resolved = posixpath.normpath(posixpath.join(css_dir, u))
            if not resolved.startswith("/"):
                resolved = "/" + resolved
            seen.setdefault(resolved, f"css:{css}")

    # 3. asset paths embedded in the JS chunks
    js_paths = [u for u in seen if u.endswith(".js")]
    for js in js_paths:
        status, body = get(BASE + js)
        if status != 200:
            continue
        for m in JS_PATH_RE.finditer(body.decode("utf-8", "replace")):
            add_path(seen, m.group(0)[1:-1], f"js:{js}")

    # 4. anything the page references but does NOT go through the base path
    suspects: set[str] = set()
    for p in pages[:2]:
        _, body = get(BASE + p)
        for m in SUSPECT_RE.finditer(body.decode("utf-8", "replace")):
            suspects.add(m.group(1))

    rows = []
    for path in sorted(seen):
        status, body = get(BASE + path)
        rows.append((status, len(body), path, seen[path]))

    print()
    print(f"{'status':>7}  {'bytes':>9}  {'referenced by':<22} path")
    print("-" * 110)
    bad = 0
    for status, size, path, src in rows:
        flag = "" if status == 200 else "   <<<<< FAIL"
        if status != 200:
            bad += 1
        print(f"{str(status):>7}  {size:>9}  {src:<22} {path}{flag}")

    print()
    print(f"TOTAL CHECKED: {len(rows)}   NON-200: {bad}")
    if suspects:
        print("!! root-absolute paths WITHOUT the base prefix (would 404 on Pages):")
        for s in sorted(suspects):
            print("   ", s)
    else:
        print("OK: no base-path-less /_next, /images, /brand, /fonts or /icon.png reference found")

    print()
    print("EXTERNAL references (informational)")
    ext = set()
    for p in pages[:2]:
        _, body = get(BASE + p)
        for m in re.finditer(r'(?:href|src)="(https?://[^"]+)"', body.decode("utf-8", "replace")):
            ext.add(m.group(1))
    for u in sorted(ext):
        req = urllib.request.Request(u, method="HEAD", headers={"User-Agent": "Mozilla/5.0"})
        try:
            with urllib.request.urlopen(req, timeout=20) as r:
                print(f"{r.status:>7}  {u}")
        except urllib.error.HTTPError as e:
            print(f"{e.code:>7}  {u}")
        except Exception as e:  # noqa: BLE001
            print(f"{'ERR':>7}  {u}  ({type(e).__name__})")

    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
