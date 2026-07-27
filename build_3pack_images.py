#!/usr/bin/env python3
"""
Build the four 3-Month Supply images from the existing catalogue photos.

    /usr/bin/python3 build_3pack_images.py

Run with /usr/bin/python3 (system 3.14 has a broken expat, see CLAUDE.md).

Everything is composited from photos we already own, in the same warm off-white,
soft-top-left-key look as the rest of the catalogue. No stock imagery and no cats:
we do not have rights to a cat photo, so there isn't one. The bowl and scoop in the
scale image are our own flat line drawing, deliberately illustrative rather than
pretending to be a photograph.

Outputs (2048 x 2048 each, images/products/):
    meow-belle-3-month-supply.png          hero, three staggered bags + "3 MONTHS" seal
    meow-belle-3-month-supply-2-value.png  the same bags with the price line
    meow-belle-3-month-supply-3-scale.png  one bag against a bowl and a daily scoop
    meow-belle-3-month-supply-4-hook.png   typographic stock-out card, doubles as ad creative

Separate private business. Nothing here is shared with Mindframe Media (see CLAUDE.md).
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent
PRODUCTS = ROOT / "images/products"
SIZE = 2048

# Brand palette, from assets/css/styles.css
BLUE = (1, 43, 248)
BLUE_DEEP = (0, 24, 168)
INK = (10, 14, 26)
INK_SOFT = (58, 63, 82)
PAPER = (255, 255, 255)
# Warm off-white, not clinical white
BG = (250, 247, 242)

AVENIR = "/System/Library/Fonts/Avenir Next.ttc"
BOLD, DEMI, MEDIUM = 0, 2, 5
BANGLA = "/System/Library/Fonts/Supplemental/KohinoorBangla.ttc"


def font(size, weight=DEMI):
    return ImageFont.truetype(AVENIR, size, index=weight)


def taka_font(size):
    """Avenir has no Taka sign (U+09F3). Kohinoor Bangla does, and its Latin
    digits sit happily next to it, so prices are set entirely in Kohinoor."""
    return ImageFont.truetype(BANGLA, size, index=2)


# ---------------------------------------------------------------- cutout


def cutout(name):
    """Lift a bag off its near-white studio background.

    Flood-fills inwards from the four corners rather than thresholding, so white
    areas *inside* the bag (label panels, highlights) stay opaque.
    """
    source = Image.open(PRODUCTS / name).convert("RGB")
    stencil = source.copy()
    sentinel = (255, 0, 255)
    for corner in [(0, 0), (source.width - 1, 0), (0, source.height - 1),
                   (source.width - 1, source.height - 1)]:
        ImageDraw.floodfill(stencil, corner, sentinel, thresh=18)

    alpha = Image.new("L", source.size, 255)
    alpha.putdata([0 if px == sentinel else 255 for px in stencil.getdata()])
    # A whisker of feathering kills the jaggies without eating the edge.
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.8))

    out = source.convert("RGBA")
    out.putalpha(alpha)
    return out.crop(alpha.getbbox())


def scaled(bag, height):
    ratio = height / bag.height
    return bag.resize((max(1, round(bag.width * ratio)), height), Image.LANCZOS)


def contact_shadow(canvas, cx, base_y, width):
    """One grounded ellipse per bag. Soft, low, and never a drop shadow."""
    pad = 220
    layer = Image.new("L", (width + pad * 2, 300), 0)
    ImageDraw.Draw(layer).ellipse(
        (pad, 90, pad + width, 230), fill=120
    )
    layer = layer.filter(ImageFilter.GaussianBlur(46))
    shadow = Image.new("RGBA", layer.size, (40, 38, 52, 0))
    shadow.putalpha(layer)
    canvas.alpha_composite(shadow, (round(cx - layer.width / 2), round(base_y - 150)))


def key_light(canvas):
    """Very soft top-left lift, so the background is lit rather than flat."""
    glow = Image.new("L", (SIZE, SIZE), 0)
    ImageDraw.Draw(glow).ellipse((-700, -900, 1500, 1100), fill=52)
    glow = glow.filter(ImageFilter.GaussianBlur(400))
    canvas.alpha_composite(Image.merge("RGBA", (
        Image.new("L", (SIZE, SIZE), 255),
        Image.new("L", (SIZE, SIZE), 255),
        Image.new("L", (SIZE, SIZE), 255),
        glow,
    )))


def canvas():
    base = Image.new("RGBA", (SIZE, SIZE), BG + (255,))
    key_light(base)
    return base


# ---------------------------------------------------------------- text


def centred(draw, y, text, fnt, fill):
    width = draw.textbbox((0, 0), text, font=fnt)[2]
    draw.text(((SIZE - width) / 2, y), text, font=fnt, fill=fill)
    return width


# ---------------------------------------------------------------- pieces


def stagger(base, bag, base_y, front_height):
    """Shallow staggered row: front bag whole, two behind at a third-width offset
    each, receding up and to the right. Overlap is what reads as 'a supply' -
    three bags in a flat line just reads as a product listing.

    Returns the width the row actually occupies."""
    layers = []
    for depth in (2, 1, 0):
        layers.append((depth, scaled(bag, round(front_height * (1 - 0.045 * depth)))))
    front = layers[-1][1]
    step = round(front.width / 3)
    span = step * 2 + front.width
    left = round((SIZE - span) / 2)

    # Back to front, so the nearest bag ends up whole.
    for depth, layer in layers:
        x = left + step * depth
        y = base_y - layer.height - round(26 * depth)
        contact_shadow(base, x + layer.width / 2, y + layer.height, layer.width)
        base.alpha_composite(layer, (x, y))
    return span


def seal(base):
    """Flat circular stamp, top right. No gradient, no shadow, no ribbon."""
    diameter = round(SIZE * 0.15)
    stamp = Image.new("RGBA", (diameter * 4, diameter * 4), (0, 0, 0, 0))
    draw = ImageDraw.Draw(stamp)
    draw.ellipse((0, 0, diameter * 4 - 1, diameter * 4 - 1), fill=BLUE_DEEP + (255,))
    draw.ellipse((36, 36, diameter * 4 - 37, diameter * 4 - 37),
                 outline=PAPER + (110,), width=7)
    stamp = stamp.resize((diameter, diameter), Image.LANCZOS)

    draw = ImageDraw.Draw(stamp)
    big, small = font(round(diameter * 0.155), BOLD), font(round(diameter * 0.088), MEDIUM)
    for text, fnt, dy in (("3 MONTHS", big, 0.40), ("for one cat", small, 0.575)):
        width = draw.textbbox((0, 0), text, font=fnt)[2]
        draw.text(((diameter - width) / 2, diameter * dy), text, font=fnt, fill=PAPER)

    base.alpha_composite(stamp, (SIZE - diameter - 150, 150))


def _vessel(draw, left, right, top, bottom, rim, line, colour):
    """A bowl seen from just above the rim: elliptical opening, tapered sides,
    rounded base. The scoop is the same shape, smaller, plus a handle."""
    draw.ellipse((left, top - rim, right, top + rim), outline=colour, width=line)
    inset = round((right - left) * 0.16)
    draw.line((left + line // 2, top, left + inset, bottom - rim), fill=colour, width=line)
    draw.line((right - line // 2, top, right - inset, bottom - rim), fill=colour, width=line)
    draw.arc((left + inset - rim, bottom - rim * 2, right - inset + rim, bottom),
             0, 180, fill=colour, width=line)


def bowl_and_scoop(base, cx, base_y, scale):
    """Flat brand-blue line drawing. Clearly an illustration, on purpose - we have
    no photograph of a bowl and will not use stock imagery for one."""
    draw = ImageDraw.Draw(base)
    line = max(6, round(10 * scale))

    bowl_w = round(560 * scale)
    left, right = cx - bowl_w // 2, cx + bowl_w // 2
    _vessel(draw, left, right, base_y - round(230 * scale), base_y,
            rim=round(46 * scale), line=line, colour=BLUE_DEEP)

    # Measuring scoop, resting to the right of the bowl.
    cup_w = round(210 * scale)
    sl = right + round(120 * scale)
    sr = sl + cup_w
    st = base_y - round(300 * scale)
    sb = st + round(120 * scale)
    rim = round(24 * scale)
    _vessel(draw, sl, sr, st, sb, rim=rim, line=line, colour=BLUE)
    # Handle, angled up and away from the bowl.
    draw.line((sr - line, st - round(6 * scale),
               sr + round(150 * scale), st - round(112 * scale)), fill=BLUE, width=line)
    draw.line((sr + round(150 * scale), st - round(112 * scale),
               sr + round(178 * scale), st - round(72 * scale)), fill=BLUE, width=line)


# ---------------------------------------------------------------- images


def hero(bag):
    base = canvas()
    # The bag photo is tall, so its height is what decides the breathing room; that
    # lands the row at roughly 70% of the frame width.
    stagger(base, bag, base_y=round(SIZE * 0.885), front_height=round(SIZE * 0.70))
    seal(base)
    return base


def value(bag):
    base = canvas()
    stagger(base, bag, base_y=round(SIZE * 0.635), front_height=round(SIZE * 0.50))

    draw = ImageDraw.Draw(base)
    was, now = taka_font(112), taka_font(190)
    was_text, now_text = "৳4,140", "৳3,390"
    was_w = draw.textbbox((0, 0), was_text, font=was)[2]
    now_w = draw.textbbox((0, 0), now_text, font=now)[2]
    gap = 70
    start = (SIZE - (was_w + gap + now_w)) / 2
    baseline = round(SIZE * 0.795)

    draw.text((start, baseline + 62), was_text, font=was, fill=INK_SOFT)
    strike_y = baseline + 62 + 78
    draw.line((start - 10, strike_y, start + was_w + 10, strike_y), fill=INK_SOFT, width=8)
    draw.text((start + was_w + gap, baseline), now_text, font=now, fill=BLUE_DEEP)

    centred(draw, round(SIZE * 0.905), "Free delivery in Dhaka", font(76, MEDIUM), INK_SOFT)
    return base


def scale_shot(bag):
    base = canvas()
    single = scaled(bag, round(SIZE * 0.50))
    x = round(SIZE * 0.29 - single.width / 2)
    base_y = round(SIZE * 0.705)
    contact_shadow(base, x + single.width / 2, base_y, single.width)
    base.alpha_composite(single, (x, base_y - single.height))

    bowl_and_scoop(base, cx=round(SIZE * 0.615), base_y=base_y, scale=0.86)

    draw = ImageDraw.Draw(base)
    centred(draw, round(SIZE * 0.800), "One 1.5 kg bag", font(96, BOLD), INK)
    centred(draw, round(SIZE * 0.865),
            "About 30 days for one adult cat, at roughly 50 g a day",
            font(58, MEDIUM), INK_SOFT)
    centred(draw, round(SIZE * 0.918), "The 3-pack is three of these", font(58, MEDIUM), BLUE_DEEP)
    return base


def hook_card():
    """Brand colours, no photography. Also runs as a cold ad on its own.

    The stock-out line is the counted figure from ICP-RESEARCH.md (47 of 90 logged
    competitor listings), not a rounded "half of Dhaka". Being specific is both more
    honest and a harder claim to wave away. It is one snapshot on one day, so if it
    ever goes into a big spend, re-count first.
    """
    base = Image.new("RGBA", (SIZE, SIZE), BLUE_DEEP + (255,))
    draw = ImageDraw.Draw(base)

    centred(draw, 470, "Ran out of your cat's", font(150, BOLD), PAPER)
    centred(draw, 650, "food again?", font(150, BOLD), PAPER)

    width = 900
    draw.line(((SIZE - width) / 2, 895, (SIZE + width) / 2, 895), fill=(120, 150, 255), width=8)

    centred(draw, 1000, "We checked 90 cat food listings", font(84, MEDIUM), (196, 208, 255))
    centred(draw, 1105, "across Dhaka's pet shops.", font(84, MEDIUM), (196, 208, 255))
    centred(draw, 1235, "47 were out of stock.", font(84, DEMI), PAPER)
    centred(draw, 1420, "We're not.", font(140, BOLD), PAPER)

    centred(draw, 1690, "MEOW BELLE", font(58, BOLD), (150, 170, 255))
    centred(draw, 1770, "3-Month Supply · three bags, one delivery",
            font(52, MEDIUM), (150, 170, 255))
    return base


def main():
    bag = cutout("reflex-adult-chicken.png")
    built = {
        "meow-belle-3-month-supply.png": hero(bag),
        "meow-belle-3-month-supply-2-value.png": value(bag),
        "meow-belle-3-month-supply-3-scale.png": scale_shot(bag),
        "meow-belle-3-month-supply-4-hook.png": hook_card(),
    }
    for name, image in built.items():
        path = PRODUCTS / name
        # Quantise to a 256-colour palette, same as the rest of the catalogue. A flat
        # background plus one photographed bag survives it, and it takes a 2 MB file
        # to roughly 250 KB, which is what the product photos already weigh.
        flat = image.convert("RGB")
        flat.quantize(colors=256, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG) \
            .save(path, "PNG", optimize=True)
        print(f"{name}  {path.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
