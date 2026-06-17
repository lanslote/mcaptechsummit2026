from pathlib import Path
import sys


def main():
    if len(sys.argv) != 2:
        raise SystemExit("Usage: python tools\\generate_qr.py <github-pages-url>")

    try:
        import qrcode
    except ImportError as exc:
        raise SystemExit("Install dependency first: python -m pip install \"qrcode[pil]\"") from exc

    url = sys.argv[1].strip()
    if not url.startswith(("https://", "http://")):
        raise SystemExit("URL must start with https:// or http://")

    output = Path(__file__).resolve().parents[1] / "assets" / "site-qr.png"
    output.parent.mkdir(parents=True, exist_ok=True)
    root = Path(__file__).resolve().parents[1]

    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=14,
        border=2,
    )
    qr.add_data(url)
    qr.make(fit=True)
    image = qr.make_image(fill_color="#061936", back_color="white")
    image.save(output)
    (root / "qr-config.js").write_text(
        f'window.MCAPS_QR_READY = true;\nwindow.MCAPS_SITE_URL = "{url}";\n',
        encoding="utf-8",
    )
    print(output)


if __name__ == "__main__":
    main()
