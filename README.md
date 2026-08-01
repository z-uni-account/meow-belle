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
competitor intel — read first for anything ads or copy**;
[Google Doc](https://docs.google.com/document/d/18t8dNxN22Q2gb6opEnJg98HTwD353o1XTTKvAk5Tj94/edit))
· **`PRODUCTS.md`** (full catalogue) ·
**`STATIC-ADS-BRIEF.md`** (creative direction + ad-prompt JSON schema) ·
**`static-ad-prompts.json`** (current 8-ad static creative set, all angles) ·
**`images/README.md`** (photo swap guide + image-update pipeline).

---

## Live state (2026-08-02)

| | |
|---|---|
| **Storefront** | **Shopify** — store `meow-belle.myshopify.com`. 14 products / 26 variants, BDT pricing. |
| **Pricing** | Flat **৳1,190** on every 1.5 kg recipe; bulk ৳4,850–৳8,200; Prostar 15 kg ৳5,400. Full list + margin: **`PRICING.md`**. |
| **Offer** | **"Founding customer price — first 500 cat parents."** Flat **18% off** sitewide against our own regular price. Not a launch sale. |
| **Launch scope** | **DHAKA CITY ONLY — as a marketing and ops rule, not a technical one.** ⚠️ Shopify cannot geo-restrict below country level, so the zone is all of Bangladesh and **anyone in the country can check out.** Nothing is blocked and there is no waitlist capture. Rely on Meta targeting Dhaka and cancel the rare stray order by hand. Revisit after 60 days or 200 orders. |
| **Delivery** | Weight-split. **Under 5 kg:** RedX, **৳70** flat, free on **2+ items** or on the 3-pack alone. **Over 5 kg:** our own rider, **৳150**, 2 working days, phone-confirmed. RedX will not carry over 5 kg. |
| **Hero SKU** | **3-Month Supply, ৳3,390** (was ৳4,140) — **five recipe variants**, three identical bags in each, ৳180 under three singles. Primary advertised product with the 1.5 kg single. The 15 kg is listed but never advertised. |
| **Subscribe & Save** | **Removed 2026-07-27** — gave away 61% of contribution and needs a card on file in a COD market. Promo codes removed with it. |
| **Live theme** | **"Meow Belle Port"** `#141067386942` — Dawn-based, fully custom-branded (see Theme below). |
| **Domain** | `meowbellle.shop` (⚠️ **3 L's — a typo of `meowbelle.shop`**, which is still available). Connected in Shopify; DNS on GoDaddy. **Confirmed serving Shopify on 2026-08-02** — the old GoDaddy parked-page problem is resolved, no DNS work outstanding. |
| **Instagram** | **@meowbelle.bd** · Name field: `Meow Belle \| Cat Food Bangladesh` · bio set · feed art in `Instagram Feed/`. |
| **Design source / image host** | Static site at https://z-uni-account.github.io/meow-belle/ (GitHub Pages). Shopify pulls product images from these URLs. Repo: https://github.com/z-uni-account/meow-belle |

### Payments (2026-08-01)

| | |
|---|---|
| **Cash on Delivery** | **Active.** The default. Whole margin model in `PRICING.md` assumes it. |
| **bKash** | **Active**, manual. **No number is published** — we text it after the order, customer Send Moneys and replies with the TrxID. Number lives nowhere on the site; add it in Settings → Payments → bKash → Edit if that changes. |
| **Nagad / card** | **Not offered** until SSLCommerz is approved. Site copy says `bKash · Cash on Delivery` and must not claim more. |
| **Shopify Payments** | Not available in Bangladesh. Shopify's built-in provider list has **no** BD gateway either — bKash, Nagad and SSLCommerz all return nothing. A real gateway has to come from a Shopify **app** plus a merchant account (trade licence + bank + KYC). |
| **VAT** | **0%.** Was Shopify's default 15% tax-exclusive, which charged Tk 3,898.50 on a Tk 3,390 3-pack. Do not re-enable without redoing every contribution figure in `PRICING.md`. |

⚠️ **Manual methods do not auto-capture.** Every COD and bKash order lands as *Payment
pending* and must be marked paid by hand in Orders before it counts as revenue.

---

## ▶️ RESUME HERE — the launch checklist

> Paused 2026-08-02. The store **can take orders** (COD + bKash, both tested end to end) and
> prices at checkout now match what is advertised. What is left before spending money on ads:

**1. Write the four missing policies — the only true blocker.**
Return and refund, terms of service, shipping, and contact information are all unset
(Settings → Policies). Shopify marks **contact information Required**. The site meanwhile
promises a **"30-day guarantee · Full refund"** on the homepage and on every product page
with no refund policy behind it, which is the part that will actually cause an argument with
a customer.

Claude can draft all four in one pass. **It needs exactly three things from Z first:**
- the **business address** to publish,
- a **contact phone number** (and whether that is the same number used for bKash),
- the **real return terms** — what comes back, in what condition, within how many days, and
  who pays the return delivery.

Until the refund policy exists, either write it or pull the "30-day guarantee" claim. Do not
launch with the claim and no policy.

**2. Put the 3-Month Supply on the homepage.**
It is the hero SKU and the primary advertised product, and it is not on the homepage at all.
`mb-featured` takes a comma-separated `handles` setting — add `meow-belle-3-month-supply`.
Do this before pointing ad spend at it.

**3. Catalog grid still reads "From Tk 320" on Reflex Adult Chicken.**
The homepage card and the PDP were fixed on 2026-08-01, but Dawn's own collection card uses
`product.price`, which is always the cheapest variant. Unpublishing the 400 g, or splitting
it into its own product, clears it. Cosmetic compared to the two above.

**Decided, do not re-open:**
- **Fabricated ratings, review counts and "Only N left" bars stay.** Raised with Z on
  2026-08-01 with the ad-rejection and trust risk spelled out; **his call is to leave them.**
  Do not remove them or re-litigate it.
- **Nagad and card stay off** until SSLCommerz is approved.
- **VAT stays at 0%.**

**Loose in the working tree:** `Ads/Meow Belle Ads #1.pdf` is untracked and therefore **not
backed up** — this repo has no auto-sync. Commit it or move it out deliberately.

---

### Open todos

**✅ Configured in the Shopify admin on 2026-07-27:**
- **Products imported.** Latest import 2026-07-27 (later): 14 products / 26 SKUs / 17 images,
  overwrite ticked. All 3-pack variants live at ৳3,390 against a ৳4,140 compare-at.
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

- **Second free-delivery discount** — *"Free delivery on the 3-Month Supply"*, automatic,
  free shipping, **Bangladesh only**, **minimum purchase ৳3,000**, **excludes shipping
  rates over ৳100**. Active.

  **Why a ৳3,000 minimum and not "specific products".** Shopify's free-shipping discount
  has no product scoping at all — the only conditions available are country, minimum
  purchase amount and minimum quantity. ৳3,000 is equivalent in practice: the 3-pack at
  ৳3,390 is the **only single item on the store that reaches it** (the next-dearest light
  item is a ৳1,190 bag), and any multi-item basket over ৳3,000 already qualified under the
  2-item rule. Two 3-packs come to 9 kg, which is a ৳150 rider rate, and the ৳100
  exclusion blocks that. **Do not remove the ৳100 exclusion.**

  ⚠️ If a light SKU above ৳3,000 is ever added, this rule catches it too. Re-check then.

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

**Everything else:**
- ⚠️ **Two currency symbols on the same page.** Shopify prices render **`Tk 3,390`** while our
  own copy is written with **`৳`** (`৳70`, `৳150`, `৳180`). Z's call is **Tk**, so the copy is
  the side that is out of step. Not swept yet, because it also means rebuilding
  `meow-belle-3-month-supply-2-value.png`, which has `৳4,140 / ৳3,390` baked into the artwork.
  Roughly 8 strings across `products.js`, `mb-pdp-trust.liquid`, `mb-values.liquid`, plus one
  image rebuild. Do it in one pass or not at all — half-swept is worse than either.
- **WhatsApp reorder nudge (day 24)** — replaces Subscribe & Save. Not built yet.
- **3-pack photography** — the four images are **composited** from the single-bag photos
  by `build_3pack_images.py`, not shot. Good enough to launch on; a real three-bag
  photograph and a real bowl-and-scoop shot would both beat them. There is deliberately no
  cat in any of them — we have no rights to a cat photo and will not use stock.
- **3-pack inventory** — no Shopify tracker on it, so it never shows sold out and never
  decrements the 1.5 kg singles. Fine at launch volume; wire it to decrement three units
  of the matching SKU before hand-counting gets unsafe.
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
