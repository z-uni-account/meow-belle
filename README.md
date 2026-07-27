# 🐾 Meow Belle — cat food store

> **⚠️ SEPARATE PRIVATE BUSINESS.** Meow Belle is Z's own private venture. It is **NOT**
> part of Mindframe Media and shares nothing with it — different repo, different hosting,
> different money, different customers. Never cross-link, cross-commit, or mix Meow Belle
> with Mindframe client work, the Mindframe dashboard, or the Mindframe git repo.

Electric-blue, playful DTC cat-food brand for Bangladesh. Reselling **Reflex Plus** +
**Prostar**. Prices in Bangladeshi Taka (৳). **Now live on Shopify.**

**Start here: `CLAUDE.md`** (repo rules + Mindframe separation) and **`CHANGELOG.md`**
(what changed and why).

Docs in this repo: **`PRICING.md`** (💰 **prices, offer, delivery, margin — read first for
anything money**) · **`ICP-RESEARCH.md`** (🎯 **who we sell to, why they buy, objections,
competitor intel — read first for anything ads or copy**) · **`PRODUCTS.md`** (full catalogue) ·
**`STATIC-ADS-BRIEF.md`** (creative direction + ad-prompt JSON schema) ·
**`static-ad-prompts.json`** (current 8-ad static creative set, all angles) ·
**`images/README.md`** (photo swap guide + image-update pipeline).

---

## Live state (2026-07-27)

| | |
|---|---|
| **Storefront** | **Shopify** — store `meow-belle.myshopify.com`. 13 products live, BDT pricing. |
| **Pricing** | Flat **৳1,190** on every 1.5 kg recipe; bulk ৳4,850–৳8,200; Prostar 15 kg ৳5,400. Full list + margin: **`PRICING.md`**. |
| **Offer** | **"Founding customer price — first 500 cat parents."** Flat **18% off** sitewide against our own regular price. Not a launch sale. |
| **Launch scope** | **DHAKA CITY ONLY.** Shipping zones Dhaka only, checkout blocked everywhere else, waitlist capture instead. Revisit after 60 days or 200 orders. |
| **Delivery** | Weight-split. **Under 5 kg:** RedX, **৳70** flat, free on **2+ items**. **Over 5 kg:** our own rider, **৳150**, 2 working days, phone-confirmed. RedX will not carry over 5 kg. |
| **Hero SKU** | **3-Month Supply, 3 × 1.5 kg, ৳3,570** (was ৳4,350). Primary advertised product with the 1.5 kg single. The 15 kg is listed but never advertised. |
| **Subscribe & Save** | **Removed 2026-07-27** — gave away 61% of contribution and needs a card on file in a COD market. Promo codes removed with it. |
| **Live theme** | **"Meow Belle Port"** `#141067386942` — Dawn-based, fully custom-branded (see Theme below). |
| **Domain** | `meowbellle.shop` (⚠️ **3 L's — a typo of `meowbelle.shop`**, which is still available). Connected in Shopify; DNS on GoDaddy. Last check it was showing GoDaddy's parked page — if so the `A @` record needs to point to Shopify (below). |
| **Instagram** | **@meowbelle.bd** · Name field: `Meow Belle \| Cat Food Bangladesh` · bio set · feed art in `Instagram Feed/`. |
| **Design source / image host** | Static site at https://z-uni-account.github.io/meow-belle/ (GitHub Pages). Shopify pulls product images from these URLs. Repo: https://github.com/z-uni-account/meow-belle |

### Open todos

**✅ Configured in the Shopify admin on 2026-07-27:**
- **Products imported** by Z. Live prices confirmed (৳1,190 / ৳1,450 etc.).
- **Shipping rates** — profile *General profile* → zone *Domestic (Bangladesh)*:
  | Option | Weight | Price | Transit |
  |---|---|---|---|
  | Standard delivery | 0 – 5.0 kg | ৳70 | 3–5 business days |
  | Large bag - delivered by our own team | 5.01 kg and up | ৳150 | 1–2 business days |
  Non-overlapping bands, so exactly one shows at checkout. Weight-driven, which works
  because every variant carries correct `Variant Grams`.
- **Free-delivery discount** — the old *"Free shipping over 2000Tk"* automatic discount was
  **repurposed**, not duplicated. It is now **"Free delivery on 2 bags or more"**:
  minimum **quantity of 2 items** (not order value), and **"exclude shipping rates over
  ৳100"** so the ৳150 rider rate can never become free. That exclusion is what protects
  the heavy-bag margin — do not remove it.

**⚠️ STILL NEEDS A DECISION — Shopify cannot restrict to Dhaka city:**
Shopify's region picker offers **Bangladesh as a whole country only**; there are no
divisions, districts or postcode ranges to select. So the shipping zone is nationwide and
**a customer in Chattogram can still check out.** Options, cheapest first:
1. Rely on Meta targeting Dhaka + manually cancel/refund the rare stray order. Fine at
   launch volume.
2. Install a checkout-rules app to block by city/postcode (a few dollars a month).
3. Shopify Functions delivery customisation (needs a dev, or Plus).
Until one of these is in place, "Dhaka city only" is a marketing and ops rule, not a
technical one.

**⚠️ Also open — the 3-pack and the 2-item rule conflict:**
The 3-Month Supply is **one line item**, so it does **not** meet "minimum 2 items" and a
lone 3-pack pays ৳70 (contribution ৳801). But the site says "free delivery on 2 bags or
more" and the 3-pack *is* three bags. Either add a second automatic free-shipping discount
scoped to that product (contribution drops to ৳741), or reword the offer. Z's call.

**Everything else:**
- **Currency format** → Settings → General → Currency formatting → `৳{{amount_no_decimals}}`
  so prices read `৳1,190` not `Tk 1190.00 BDT`. Still outstanding.
- **WhatsApp reorder nudge (day 24)** — replaces Subscribe & Save. Not built yet.
- **3-pack photography** — it currently reuses the Adult Chicken shot. Wants a real
  three-bag hero image.
- **3-pack recipe choice** — it is Adult Chicken only today. If customers should pick a
  recipe, that is a variant list on the same product, not a new product.
- **Founding-customer counter** — the PDP shows a static "first 500" line. Wiring it to a
  real order count needs an app or a metafield; see `snippets/mb-pdp-trust.liquid`.
- **Domain**: if `meowbellle.shop` still shows GoDaddy's parked page, set GoDaddy DNS
  `A @ → 23.227.38.65` and `CNAME www → shops.myshopify.com`, and turn **Forwarding off**.
  Consider grabbing the correct-spelling `meowbelle.shop` (2 L's) and redirecting.
- **2 Prostar Sterilised Salmon** SKUs have no published nutrition anywhere — fields left
  empty on purpose until a real label is photographed.

### Done
- **2026-07-27 (later) — Dhaka-only launch, real courier rates, 3-pack, bigger type.**
  RedX rates replaced our estimates (৳65 at 1 kg, +৳15/kg, COD 0% in Dhaka) and RedX
  will not carry over 5 kg, so heavy bags moved to our own rider at ৳150 with a
  confirmation call, which cut their RTO from 15% to 5% and *raised* 15 kg contribution
  from ৳895 to ৳1,298. Added the **3-Month Supply** hero SKU. Bumped Dawn's type scale
  (body 120%, heading 110%) plus a phone-first size block in `meowbelle.css` — the site
  was too small to read on a phone. Also cleared the long-standing `buttons_radius: 50`
  push error (schema max is 40).
- **2026-07-27 — repriced, re-offered, delivery model replaced.** ৳840-type numbers turned
  out to be SUPPLIER COST, not retail; the whole catalogue was reset to real selling prices
  (see `PRICING.md`). Subscribe & Save and all promo codes removed. Static site + Shopify
  theme copy updated. **Two bugs found in the old import files:** they carried the supplier
  cost prices (a 15 kg bag would have sold for ৳6,100), and five products gave their 1.5 kg
  and 15 kg variants the *same* `Variant SKU` because the slug dropped the decimal point,
  which would have merged their inventory in Shopify. Both fixed in
  `meowbelle-shopify-import-2026-07-27.csv`. **Do not import either older file.**
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

**Import file to use: `meowbelle-shopify-import-2026-07-27.csv`.** The two older files
(`meowbelle-shopify-import.csv`, `-refresh.csv`) are kept for history only and carry
supplier cost prices plus duplicate SKUs — **never import them.**

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
