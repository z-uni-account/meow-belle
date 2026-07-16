# 🐾 Meow Belle — cat food store

> **⚠️ SEPARATE PRIVATE BUSINESS.** Meow Belle is Z's own private venture. It is **NOT**
> part of Mindframe Media and shares nothing with it — different repo, different hosting,
> different money, different customers. Never cross-link, cross-commit, or mix Meow Belle
> with Mindframe client work, the Mindframe dashboard, or the Mindframe git repo.

Electric-blue, playful DTC cat-food brand for Bangladesh. Reselling **Reflex Plus** +
**Prostar**. Prices in Bangladeshi Taka (৳). **Now live on Shopify.**

Docs in this repo: **`PRODUCTS.md`** (full catalogue) · **`STATIC-ADS-BRIEF.md`** (creative
direction + ad-prompt JSON schema) · **`static-ad-prompts.json`** (current 8-ad static creative
set, all angles) · **`images/README.md`** (photo swap guide + image-update pipeline).

---

## Live state (2026-07-16)

| | |
|---|---|
| **Storefront** | **Shopify** — store `meow-belle.myshopify.com`. 13 products live, BDT pricing. |
| **Live theme** | **"Meow Belle Port"** `#141067386942` — Dawn-based, fully custom-branded (see Theme below). |
| **Domain** | `meowbellle.shop` (⚠️ **3 L's — a typo of `meowbelle.shop`**, which is still available). Connected in Shopify; DNS on GoDaddy. Last check it was showing GoDaddy's parked page — if so the `A @` record needs to point to Shopify (below). |
| **Instagram** | **@meowbelle.bd** · Name field: `Meow Belle \| Cat Food Bangladesh` · bio set · feed art in `Instagram Feed/`. |
| **Design source / image host** | Static site at https://z-uni-account.github.io/meow-belle/ (GitHub Pages). Shopify pulls product images from these URLs. Repo: https://github.com/z-uni-account/meow-belle |

### Open todos
- **Re-import `meowbelle-shopify-import.csv`** (Products → Import → tick "Overwrite existing
  products with the same handle") to strip em dashes from product **titles + descriptions**
  (cards still read "Reflex Plus Kitten — Chicken" until then).
- **Currency format** → Settings → General → Currency formatting → use `৳{{amount_no_decimals}}`
  so prices read `৳990` not `Tk 990.00 BDT`.
- **Domain**: if `meowbellle.shop` still shows GoDaddy's parked page, set GoDaddy DNS
  `A @ → 23.227.38.65` and `CNAME www → shops.myshopify.com`, and turn **Forwarding off**.
  Consider grabbing the correct-spelling `meowbelle.shop` (2 L's) and redirecting.
- **Subscribe & Save** needs a Shopify subscriptions app (recurring billing can't be raw HTML).
- **2 Prostar Sterilised Salmon** SKUs have no published nutrition anywhere — fields left
  empty on purpose until a real label is photographed.

### Done
- **2026-07-16 — all 13 product photos upgraded to HQ** (single-bag, web-optimized ~50–210 KB;
  full masters archived at `~/Desktop/Meow Belle Product Images/`). Prostar Sterilised Salmon
  background removed to white. Shopify refreshed via cache-busted re-import. Full pipeline + gotchas:
  `images/README.md`. (Resolves the old "reflex-adult-chicken is a dark group shot" note.)

---

## Shopify — how to work on it

### Access
Theme editing runs through the **Shopify CLI** (`shopify`, already installed). It's
authenticated to this machine via a one-time device-code login (Z approved it). If auth
expires, run any `shopify theme ...` command and it prints a login link + code for Z.

### Editing the theme
Theme source lives in **`shopify-theme/`** (a Dawn base + our custom layer). Edit files
there, then push.

```bash
cd "shopify-theme"
# push to the LIVE theme (REQUIRED flag — see gotcha):
shopify theme push --theme 141067386942 --store meow-belle.myshopify.com --allow-live
```

**⚠️ GOTCHA (cost us an hour):** pushing to a *live* theme triggers a "Push to live theme?"
confirmation. In a non-interactive/background run that prompt auto-declines and the push
**silently aborts** (shows a harmless-looking "error" box). **Always pass `--allow-live`**
for the live theme. For safe iteration, push to an unpublished copy first:

```bash
shopify theme push --unpublished --theme "Preview" --store meow-belle.myshopify.com
# screenshot it: https://meow-belle.myshopify.com/?preview_theme_id=<new-id>
shopify theme publish --theme <id> --store meow-belle.myshopify.com --force
```

Other themes on the store: **Meow Belle** `#141065748542` (older Dawn-branded, unpublished
backup), **Horizon** / **Canyon** (Shopify stock, unpublished).

### What's custom in the theme
- **Brand layer:** `assets/meowbelle.css` (electric blue + amber, Fredoka/Nunito fonts,
  rounded cards/buttons). Google Fonts + this CSS are wired into `layout/theme.liquid` after
  `base.css`. Colour schemes, radii, currency-code-off in `config/settings_data.json`.
- **Custom sections** (`sections/mb-*.liquid`): `mb-hero`, `mb-marquee`, `mb-featured`
  (product grid — takes a comma-separated **`handles`** setting to pick exact products;
  homepage features the Reflex line), `mb-values`, `mb-spotlight`, `mb-reviews`,
  `mb-guarantee`. Wired up in `templates/index.json`.
- **Custom cards:** `snippets/mb-card.liquid` (sale badge, rating, scarcity bar, price).
- **Product page:** `templates/product.json` injects two `custom_liquid` blocks —
  `snippets/mb-pdp-pills.liquid` (protein/fat/fibre pills) and `snippets/mb-pdp-trust.liquid`
  (countdown + trust badges). Add-to-cart is styled amber via CSS.
- **⚠️ Ratings, scarcity, and nutrition pills are HARDCODED per product handle** inside
  `mb-card.liquid` and `mb-pdp-pills.liquid` (Shopify has no native star ratings). If you
  add/rename products, update those `case product.handle` maps.

### Catalogue
Products live in Shopify. The **source of truth for the data** is
`assets/js/products.js` (see also `PRODUCTS.md`). To (re)load Shopify, the import file
`meowbelle-shopify-import.csv` is generated from `products.js`; Shopify import matches by
**Handle** and updates existing products. **Store currency must be BDT** (it is) or prices
import as USD numbers.

To regenerate the CSV after editing `products.js`:
```bash
# uses /usr/bin/python3 or node; system python3.14 has a broken expat — use /usr/bin/python3
node -e "…"   # generator is committed in git history; ask Claude to regenerate
```

---

## Static site (design source + image host)
The original self-contained site (`index.html`, `assets/`, `images/`) still lives here and
deploys to GitHub Pages. It is **not** the storefront anymore — Shopify is — but it stays as:
1. the **design reference** the Shopify theme was ported from, and
2. the **image host**: product photos load from `…github.io/meow-belle/images/products/*.png`,
   which Shopify copied in at import.

Edit prices/products in `assets/js/products.js`; drop photos in `images/products/`.

---

## Gotchas seen during the build
- **Push to live theme** → always `--allow-live` (above).
- **System Python 3.14 has a broken `expat`** → use `/usr/bin/python3` for any XML/xlsx/PIL script.
- **Currency** shows `Tk … BDT` until the Settings currency format is changed to `৳`.
- **Domain is a typo** (`meowbellle`, 3 L's). Correct `meowbelle.shop` was available.
- **Competitor watermarks:** 2 of the Excel product images had competitor watermarks
  ("JJPetShop", "meowmeowpawshopbd.com") and were deliberately skipped.
- **Nutrition data is real + sourced** (manufacturer reflexmama.com + retailer listings);
  nothing invented. Sources per product in `products.js`.
