#!/usr/bin/env python3
"""Serve the static export the way GitHub Pages does, for measuring real transfer.

Pages serves this project under /OraxRecordly_WEB/ and gzips text responses, so the
local mirror does the same - otherwise a measurement would not mean anything.
"""

from __future__ import annotations

import gzip
import http.server
import pathlib
import socketserver
import sys

OUT = pathlib.Path(__file__).resolve().parent.parent / "out"
PREFIX = "/OraxRecordly_WEB"
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8123
GZIP_TYPES = {".html", ".css", ".js", ".json", ".txt", ".xml", ".svg"}


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(OUT), **kwargs)

    def log_message(self, *args):  # keep the console readable for the measurement
        pass

    def resolve(self) -> pathlib.Path | None:
        path = self.path.split("?", 1)[0].split("#", 1)[0]
        if not path.startswith(PREFIX):
            return None
        relative = path[len(PREFIX) :].lstrip("/")
        target = OUT / relative
        if target.is_dir():
            target = target / "index.html"
        return target

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        target = self.resolve()
        if target is None or not target.is_file():
            self.send_error(404)
            return

        body = target.read_bytes()
        suffix = target.suffix.lower()
        headers = {}
        if suffix in GZIP_TYPES and len(body) > 512:
            body = gzip.compress(body, 9)
            headers["Content-Encoding"] = "gzip"

        self.send_response(200)
        self.send_header("Content-Type", self.guess_type(str(target)))
        self.send_header("Content-Length", str(len(body)))
        for key, value in headers.items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    with Server(("127.0.0.1", PORT), Handler) as httpd:
        print(f"serving {OUT} at http://127.0.0.1:{PORT}{PREFIX}/")
        httpd.serve_forever()
