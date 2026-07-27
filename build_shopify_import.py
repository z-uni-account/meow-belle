#!/usr/bin/env python3
"""
Build the Shopify product import CSV from assets/js/products.js.

products.js is the single source of truth for the catalogue. This script is the
only thing that should ever write the import CSV, so the two can never drift.
Never hand-edit the CSV.

    /usr/bin/python3 build_shopify_import.py            # write the file
    /usr/bin/python3 build_shopify_import.py --check    # compare, write nothing

Run with /usr/bin/python3, not the system 3.14 (broken expat, see CLAUDE.md).

Bundles
-------
A product whose variants carry a `recipe` key (today: the 3-Month Supply) has no
nutrition of its own. Each variant is three bags of a different 1.5 kg product, so
ingredients and guaranteed analysis are pulled from those products and rendered as
one block per recipe. That is what keeps the bundle page honest: it is physically
impossible for it to quote a figure the single does not.

Image cache-busting
-------------------
`?v=YYYYMMDD` comes from the image file's own modification date, so re-exporting a
photo automatically busts Shopify's cache on the next import and nothing else moves.

Separate private business. Nothing here is shared with Mindframe Media (see CLAUDE.md).
"""

import csv
import json
import subprocess
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PRODUCTS_JS = ROOT / "assets/js/products.js"
OUT = ROOT / f"meowbelle-shopify-import-{date.today():%Y-%m-%d}.csv"
IMAGE_BASE = "https://z-uni-account.github.io/meow-belle/"
CATEGORY = "Animals & Pet Supplies > Pet Supplies > Cat Supplies > Cat Food"

COLUMNS = [
    "Handle", "Title", "Body (HTML)", "Vendor", "Product Category", "Type", "Tags",
    "Published", "Option1 Name", "Option1 Value", "Variant SKU", "Variant Grams",
    "Variant Inventory Tracker", "Variant Inventory Qty", "Variant Inventory Policy",
    "Variant Fulfillment Service", "Variant Price", "Variant Compare At Price",
    "Variant Requires Shipping", "Variant Taxable", "Image Src", "Image Position",
    "Image Alt Text", "Status",
]


def load_products():
    """Evaluate products.js in node and hand back the catalogue as plain data."""
    js = """
        global.window = {};
        eval(require('fs').readFileSync(process.argv[1], 'utf8'));
        process.stdout.write(JSON.stringify({
            products: global.window.MEOW_PRODUCTS,
            config: global.window.MEOW,
        }));
    """
    out = subprocess.run(
        ["node", "-e", js, str(PRODUCTS_JS)],
        capture_output=True, text=True, check=True,
    ).stdout
    return json.loads(out)


def esc(text):
    return (text or "").replace("&", "&amp;")


def slug(label):
    """Variant SKU suffix. The '.'->'p' matters: without it '1.5 kg' and '15 kg'
    both collapse to '15kg' and Shopify silently merges their inventory."""
    return label.lower().replace(" ", "").replace(".", "p")


def nutri_table(rows):
    body = "".join(
        f"<tr><td>{esc(r['name'])}</td><td><strong>{esc(r['value'])}</strong></td></tr>"
        for r in rows
    )
    return f"<table><tbody>{body}</tbody></table>"


def image_url(relative_path):
    """Absolute URL plus a ?v= tag from the file's own mtime, so re-exporting a
    photo busts Shopify's CDN cache on the next import and nothing else moves."""
    path = ROOT / relative_path
    version = f"?v={date.fromtimestamp(path.stat().st_mtime):%Y%m%d}" if path.exists() else ""
    return IMAGE_BASE + relative_path + version


def body_html(product, by_id):
    parts = [f"<p>{esc(product['short'])}</p>"]

    if product.get("features"):
        items = "".join(f"<li>{esc(f)}</li>" for f in product["features"])
        parts.append(f"<h4>Why cats love it</h4><ul>{items}</ul>")

    recipes = [(v, by_id[v["recipe"]]) for v in product["variants"] if v.get("recipe")]
    if recipes:
        # Bundle: one nutrition block per recipe, lifted from the matching single. Each
        # block is tagged with its variant name so the theme can show only the recipe the
        # customer has selected (snippets/mb-pdp-recipe.liquid). With JS off they all
        # show, which is wordy but never wrong.
        parts.append("<h4>What is in this recipe</h4>")
        parts.append('<div class="mb-recipes">')
        for variant, source in recipes:
            parts.append(f'<div class="mb-recipe" data-recipe="{esc(variant["label"])}">')
            parts.append(f"<h5>{esc(variant['label'])}</h5>")
            parts.append(f"<p>{esc(source['ingredients'])}</p>")
            if source.get("analytical"):
                parts.append(nutri_table(source["analytical"]))
            parts.append("</div>")
        parts.append("</div>")
    else:
        if product.get("ingredients"):
            parts.append(f"<h4>Ingredients</h4><p>{esc(product['ingredients'])}</p>")
        if product.get("analytical"):
            parts.append("<h4>Guaranteed analysis</h4>" + nutri_table(product["analytical"]))
        if product.get("additives"):
            parts.append("<h4>Added vitamins &amp; minerals</h4>" + nutri_table(product["additives"]))

    parts.append(f"<h4>Feeding guide</h4><p>{esc(product['feeding'])}</p>")
    return "".join(parts)


def rows_for(product, by_id):
    title = product["name"].replace(", ", " ")
    tags = [product["brand"], product["category"], "Cat Food"]
    if "bestseller" in product.get("badges", []):
        tags.append("Bestseller")

    out = []
    for index, variant in enumerate(product["variants"]):
        first = index == 0
        grams = round(
            variant["kg"] * 1000 if "kg" in variant else _label_grams(variant["label"])
        )
        row = {c: "" for c in COLUMNS}
        row.update({
            "Handle": product["id"],
            "Option1 Name": product.get("optionName", "Size"),
            "Option1 Value": variant["label"],
            "Variant SKU": variant.get("sku") or f"{product['id']}-{slug(variant['label'])}",
            "Variant Grams": grams,
            "Variant Inventory Qty": 0,
            "Variant Inventory Policy": "deny",
            "Variant Fulfillment Service": "manual",
            "Variant Price": variant["price"],
            "Variant Compare At Price": variant["compareAt"],
            "Variant Requires Shipping": "TRUE",
            "Variant Taxable": "TRUE",
        })
        if first:
            row.update({
                "Title": title,
                "Body (HTML)": body_html(product, by_id),
                "Vendor": product["brand"],
                "Product Category": CATEGORY,
                "Type": product["category"],
                "Tags": ", ".join(tags),
                "Published": "TRUE",
                "Image Src": image_url(product["image"]),
                "Image Position": 1,
                "Image Alt Text": title,
                "Status": "active",
            })
        out.append(row)

    # Gallery shots ride on their own rows: handle + image columns, nothing else.
    for position, path in enumerate(product.get("gallery", []), start=2):
        row = {c: "" for c in COLUMNS}
        row.update({
            "Handle": product["id"],
            "Image Src": image_url(path),
            "Image Position": position,
            "Image Alt Text": title,
        })
        out.append(row)
    return out


def _label_grams(label):
    number, unit = label.split()[0], label.split()[1]
    grams = float(number) * (1000 if unit.lower().startswith("kg") else 1)
    return grams


def main():
    data = load_products()
    products = data["products"]
    by_id = {p["id"]: p for p in products}

    rows = []
    for product in products:
        rows.extend(rows_for(product, by_id))

    buffer = []
    writer = csv.DictWriter(_Sink(buffer), fieldnames=COLUMNS)
    writer.writeheader()
    writer.writerows(rows)
    text = "".join(buffer)

    if "--check" in sys.argv:
        existing = OUT.open(newline="").read() if OUT.exists() else ""
        print("IDENTICAL" if existing == text else "DIFFERS")
        return

    with OUT.open("w", newline="") as handle:
        handle.write(text)
    variants = sum(len(p["variants"]) for p in products)
    print(f"wrote {OUT.name}: {len(products)} products, {variants} variants")


class _Sink:
    def __init__(self, buffer):
        self.buffer = buffer

    def write(self, text):
        self.buffer.append(text)


if __name__ == "__main__":
    main()
