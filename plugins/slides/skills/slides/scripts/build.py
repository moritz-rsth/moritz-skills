"""Inline every {{asset}} placeholder in a deck as a base64 data URI.

    python build.py <deck-source.html> <assets-dir> <out.html>

The source deck references media as src="{{name.jpg}}" / data-src="{{name.mp4}}";
each token is replaced with the base64 data URI of <assets-dir>/<name>. The
result is one self-contained HTML file: no external files besides the Google
Fonts stylesheet, which falls back to system fonts offline.

Keep the source deck and the assets folder next to the output so the deck can
be edited and rebuilt; the output is what gets shared.
"""

import base64
import mimetypes
import re
import sys
from pathlib import Path

if len(sys.argv) != 4:
    sys.exit(__doc__)

src, assets, out = (Path(a) for a in sys.argv[1:])
TOKEN = re.compile(r"\{\{([\w.\-]+)\}\}")


def data_uri(name: str) -> str:
    path = assets / name
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    return f"data:{mime};base64,{base64.b64encode(path.read_bytes()).decode()}"


html = src.read_text()
used = sorted(set(TOKEN.findall(html)))
missing = [n for n in used if not (assets / n).exists()]
if missing:
    sys.exit(f"missing assets in {assets}: {missing}")
html = TOKEN.sub(lambda m: data_uri(m.group(1)), html)
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(html)
print(f"wrote {out} ({out.stat().st_size / 1e6:.2f} MB, {len(used)} assets inlined)")
