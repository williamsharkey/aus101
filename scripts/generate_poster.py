#!/usr/bin/env python3
"""Regenerate assets/poster/og.webp (400×400) + docs/fixtures/poster strips."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "poster"
FIX = ROOT / "docs" / "fixtures" / "poster"


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    FIX.mkdir(parents=True, exist_ok=True)
    W = H = 400
    img = Image.new("RGB", (W, H), "#0b1210")
    d = ImageDraw.Draw(img)

    for y in range(H):
        t = y / (H - 1)
        if t < 0.42:
            u = t / 0.42
            r = int(11 + (255 - 11) * (u**2) * 0.55)
            g = int(18 + (140 - 18) * u)
            b = int(16 + (90 - 16) * (1 - u) + 40)
        elif t < 0.55:
            u = (t - 0.42) / 0.13
            r = int(180 + 60 * u)
            g = int(90 + 40 * u)
            b = int(40 + 10 * u)
        else:
            u = (t - 0.55) / 0.45
            r = int(40 + 90 * u)
            g = int(50 + 70 * u)
            b = int(30 + 20 * u)
            r = int(r * (1 - 0.25 * u))
            g = int(g * (1 - 0.2 * u))
            b = int(b * (1 - 0.15 * u))
        d.line([(0, y), (W, y)], fill=(r, g, b))

    d.rectangle([0, 250, W, 268], fill="#3a2a18")
    for x in range(0, W, 18):
        d.line([(x, 250), (x, 268)], fill="#2a1c10", width=2)
    d.rectangle([0, 200, W, 250], fill="#0a3a48")
    for i in range(6):
        y = 205 + i * 7
        d.arc([20 - i * 10, y, W + i * 10, y + 18], 0, 180, fill="#7ec8c8", width=2)
    d.ellipse([280, 28, 360, 108], fill="#ffb040")
    d.ellipse([290, 38, 350, 98], fill="#ffe08a")

    def figure(cx, ground_y, kind):
        if kind == "aus101":
            body = "#c8d0d8"
            d.rounded_rectangle([cx - 22, ground_y - 110, cx + 22, ground_y - 20], radius=6, fill=body)
            d.ellipse([cx - 18, ground_y - 145, cx + 18, ground_y - 108], fill=body)
            d.rectangle([cx - 28, ground_y - 100, cx - 18, ground_y - 55], fill=body)
            d.rectangle([cx + 18, ground_y - 100, cx + 28, ground_y - 55], fill=body)
            d.rectangle([cx - 16, ground_y - 20, cx - 6, ground_y], fill=body)
            d.rectangle([cx + 6, ground_y - 20, cx + 16, ground_y], fill=body)
            d.ellipse([cx - 10, ground_y - 132, cx - 3, ground_y - 125], fill="#ff1010")
            d.ellipse([cx + 3, ground_y - 132, cx + 10, ground_y - 125], fill="#ff1010")
            d.rectangle([cx + 24, ground_y - 75, cx + 32, ground_y - 50], fill="#f5f5e6")
            d.rectangle([cx + 26, ground_y - 80, cx + 30, ground_y - 75], fill="#222")
        elif kind == "ken":
            skin, hair = "#e09050", "#f0d030"
            d.ellipse([cx - 14, ground_y - 138, cx + 14, ground_y - 108], fill=skin)
            d.ellipse([cx - 16, ground_y - 142, cx + 16, ground_y - 122], fill=hair)
            d.polygon(
                [(cx - 20, ground_y - 20), (cx - 18, ground_y - 105), (cx + 18, ground_y - 105), (cx + 22, ground_y - 20)],
                fill=skin,
            )
            d.polygon([(cx, ground_y - 100), (cx - 4, ground_y - 88), (cx + 4, ground_y - 88)], fill="#eee")
            d.rectangle([cx - 14, ground_y - 20, cx - 5, ground_y], fill="#204080")
            d.rectangle([cx + 5, ground_y - 20, cx + 14, ground_y], fill="#204080")
        elif kind == "babe":
            skin, bikini = "#d8a070", "#ff4d8a"
            d.ellipse([cx - 13, ground_y - 136, cx + 13, ground_y - 108], fill=skin)
            d.ellipse([cx - 18, ground_y - 140, cx + 18, ground_y - 118], fill="#2a1810")
            d.polygon(
                [(cx - 16, ground_y - 30), (cx - 14, ground_y - 100), (cx + 14, ground_y - 100), (cx + 18, ground_y - 30)],
                fill=skin,
            )
            d.rectangle([cx - 14, ground_y - 100, cx + 14, ground_y - 88], fill=bikini)
            d.rectangle([cx - 12, ground_y - 42, cx + 12, ground_y - 28], fill=bikini)
            d.rectangle([cx - 12, ground_y - 28, cx - 4, ground_y], fill=skin)
            d.rectangle([cx + 4, ground_y - 28, cx + 12, ground_y], fill=skin)
        elif kind == "sigma":
            skin, shirt = "#c4a882", "#1a1a1a"
            d.ellipse([cx - 12, ground_y - 138, cx + 12, ground_y - 112], fill=skin)
            d.rectangle([cx - 16, ground_y - 112, cx + 16, ground_y - 35], fill=shirt)
            d.rectangle([cx - 28, ground_y - 110, cx - 16, ground_y - 50], fill=shirt)
            d.rectangle([cx + 16, ground_y - 110, cx + 28, ground_y - 50], fill=shirt)
            d.rectangle([cx - 14, ground_y - 35, cx + 14, ground_y - 5], fill="#2c3340")
            d.rectangle([cx - 12, ground_y - 5, cx - 4, ground_y], fill="#3a3028")
            d.rectangle([cx + 4, ground_y - 5, cx + 12, ground_y], fill="#3a3028")
        elif kind == "gull":
            d.ellipse([cx - 10, ground_y - 20, cx + 10, ground_y - 8], fill="#eee")
            d.polygon([(cx - 22, ground_y - 14), (cx, ground_y - 18), (cx + 22, ground_y - 14)], fill="#ddd")
            d.polygon([(cx + 8, ground_y - 12), (cx + 18, ground_y - 8), (cx + 8, ground_y - 6)], fill="#f09020")

    ground = 360
    figure(55, ground, "ken")
    figure(125, ground, "sigma")
    figure(200, ground, "aus101")
    figure(320, ground, "babe")
    figure(250, 230, "gull")

    font = tag_font = None
    for fp in (
        "/System/Library/Fonts/Supplemental/Impact.ttf",
        "/System/Library/Fonts/Supplemental/Arial Black.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ):
        try:
            font = ImageFont.truetype(fp, 72)
            tag_font = ImageFont.truetype(fp, 18)
            break
        except Exception:
            pass
    if font is None:
        font = tag_font = ImageFont.load_default()

    logo = "AUS101"
    bbox = d.textbbox((0, 0), logo, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    lx, ly = (W - tw) // 2, 18
    for ox, oy in [(-2, 0), (2, 0), (0, -2), (0, 2)]:
        d.text((lx + ox, ly + oy), logo, font=font, fill="#0b1210")
    d.text((lx, ly), logo, font=font, fill="#f4f7fb")
    tag = "TERMINATE UV"
    tb = d.textbbox((0, 0), tag, font=tag_font)
    d.text(((W - (tb[2] - tb[0])) // 2, ly + th + 4), tag, font=tag_font, fill="#ffb040")

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    cx, cy = W // 2, 318
    od.polygon([(cx - 28, cy - 24), (cx - 28, cy + 24), (cx + 32, cy)], fill=(255, 255, 255, 110))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")

    og = OUT / "og.webp"
    img.save(og, "WEBP", quality=90, method=6)
    img.save(OUT / "og.png", "PNG")
    for w in (160, 240, 400):
        img.resize((w, w), Image.Resampling.LANCZOS).save(FIX / f"og-{w}x{w}.webp", "WEBP", quality=90, method=6)
    print("wrote", og)


if __name__ == "__main__":
    main()
