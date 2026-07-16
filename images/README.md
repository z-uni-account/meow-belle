# Meow Belle — product photos

The 13 product photos in `images/products/` are the **high-quality single-bag shots** used
across the site. Each is one product bag, normalised to a square ~1000×1000 frame on
white/transparent for a consistent catalog look.

**Current set (updated 2026-07-16):** upgraded from the low-res Excel extracts to HQ single-bag
shots sourced from the shared Google Drive folder
`https://drive.google.com/drive/folders/16fOZCY-s4hpblLlSOOeghvwUnj4r5yZG` (owner
`hello.meowbelle@gmail.com`, set to "anyone with the link"). Full-resolution **masters
(2400–3200px)** are archived on Z's Desktop at `~/Desktop/Meow Belle Product Images/`; the copies
in `images/products/` are web-optimized (see pipeline below).

- 11 of 13 are 2400–3200px masters. **`reflex-adult-chicken`** and **`reflex-adult-choosy-salmon`**
  are the correct black *Reflex Plus* design but only exist at 1080px — that's the best available
  and is plenty for the resized site (see gotcha on why we did NOT swap to reflexmama.com's higher-res).

## Fast-load pipeline (masters → site)
The masters are 5–15 MB — far too heavy for a storefront (BD mobile). Each site image is:
1. resized to **1000px** longest side (Lanczos), then
2. compressed with **256-color octree quantization**, alpha-safe
   (`im.quantize(colors=256, method=Image.FASTOCTREE, dither=Image.FLOYDSTEINBERG)`), saved as
   optimized PNG.

Result: all 13 ≈ **50–210 KB each** (~1.2 MB total, down from ~12 MB unoptimized). Regenerate with
`/usr/bin/python3` + Pillow. **Keep the `.png` filename** — the theme and Shopify import reference
these exact names.

## Replace / refresh a photo end to end
1. Drop the new square bag shot in `images/products/<handle>.png` (web-optimized as above).
2. `git commit` + `git push` → GitHub Pages serves it at
   `https://z-uni-account.github.io/meow-belle/images/products/<handle>.png` (redeploy ~1–2 min).
3. **Update Shopify** (it keeps its own copy of each image and dedupes by URL, so a plain re-import
   will NOT refresh it): use **`meowbelle-shopify-import-refresh.csv`** — the standard import CSV with
   a `?v=<date>` cache-buster appended to every `Image Src`, which forces Shopify to re-download.
   Admin → Products → Import (`https://admin.shopify.com/store/meow-belle/products`) → upload → tick
   **"Overwrite existing products with the same handle"** → Import. Storefront updates in ~1 min.
   (Alternative: create a custom-app Admin API token and update product media via the API directly.)

## Gotchas (learned 2026-07-16)
- **Drive filenames are unreliable — verify every image visually.** The file named "kitten 400gm"
  was actually an **adult** bag; using it would have put an adult bag on the kitten page. Build a
  labeled montage of the final picks and check each against its handle before pushing.
- **Match the pack design, not just resolution.** reflexmama.com serves a newer *white "Reflex"*
  design; our catalogue is the black *"Reflex Plus"* line. A higher-res image of the wrong design
  breaks shelf consistency — always pick the version that matches the rest of the catalogue.
- **`prostar-adult-sterilised-salmon` / `prostar-sterilised-salmon-ak`:** the only source was a
  lifestyle (kitchen counter) shot. Background removed with **`rembg`** (u2net) and composited on
  white to match the clean product-shot style. The same white-bg image is reused for both Sterilised
  Salmon SKUs (same product).
- Two competitor-watermarked Excel images ("JJPetShop", "meowmeowpawshopbd.com") were skipped.

| Filename | Product |
|---|---|
| `reflex-kitten-chicken.png` | Reflex Plus Kitten, Chicken |
| `reflex-adult-chicken.png` | Reflex Plus Adult, Chicken |
| `reflex-adult-urinary-chicken.png` | Reflex Plus Adult, Urinary Chicken |
| `reflex-adult-hairball-salmon.png` | Reflex Plus Adult, Hairball Salmon |
| `reflex-kitten-salmon.png` | Reflex Plus Kitten, Salmon |
| `reflex-mother-baby.png` | Reflex Plus Mother & Baby |
| `reflex-sterilized-chicken.png` | Reflex Plus Sterilised, Chicken |
| `reflex-adult-skincare-salmon.png` | Reflex Plus Adult, Skin & Coat Salmon |
| `reflex-adult-choosy-salmon.png` | Reflex Plus Adult, Choosy Salmon |
| `prostar-adult-chicken.png` | Prostar Adult, Chicken |
| `prostar-kitten-chicken.png` | Prostar Kitten, Chicken |
| `prostar-sterilised-salmon-ak.png` | Prostar Sterilised, Salmon (Adult & Kitten) |
| `prostar-adult-sterilised-salmon.png` | Prostar Adult Sterilised, Salmon |

The homepage hero (`hero.png`) and logo (`Logo.png`) live at the project root and are already wired in.
