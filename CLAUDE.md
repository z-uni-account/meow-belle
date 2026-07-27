# CLAUDE.md — Meow Belle

Guidance for Claude Code working in this repo. **Index, not catalog.** Detail lives in the
linked docs.

---

## ⛔ This is NOT Mindframe Media

**Meow Belle is Z's own private DTC cat-food business.** It shares nothing with Mindframe
Media: different repo, different hosting, different money, different customers, different
GitHub account.

- **Never** cross-link, cross-commit, or copy anything between this repo and the Mindframe
  workspace (`Desktop/Work/Claude Code/Work Space/MindFrame Ops`).
- **Never** treat Meow Belle as a Mindframe client. It is not in `clients.json`, not on the
  Mindframe dashboard, and has nothing to do with Jonathan or tattoo artists.
- **This repo is not covered by Mindframe's auto-sync hook.** Nothing here commits or
  deploys on its own. If work needs to ship, commit and push deliberately.
- **GitHub account is `z-uni-account`** (personal), *not* `Zmoney4life` (Mindframe).
- Mindframe tooling, reports, memory and conventions do not apply here. If a rule came from
  the Mindframe CLAUDE.md, it does not govern this business.

---

## The business

Electric-blue, playful DTC cat-food brand for Bangladesh. We **resell Reflex Plus and
Prostar** — we do not manufacture. Prices in Bangladeshi Taka (৳).

| | |
|---|---|
| **Storefront** | Shopify — `meow-belle.myshopify.com`, live theme **"Meow Belle Port"** `#141067386942` |
| **Domain** | `meowbellle.shop` (⚠️ **three L's** — a typo of `meowbelle.shop`, which was still available) |
| **Launch scope** | **Dhaka city only.** See `PRICING.md`. |
| **Catalogue** | 14 products. Source of truth: `assets/js/products.js` |
| **Instagram** | `@meowbelle.bd` |
| **Static site** | `https://z-uni-account.github.io/meow-belle/` — design reference **and image host** for Shopify |

---

## Read these before acting

| Doc | When |
|---|---|
| **`PRICING.md`** | 💰 **Anything involving money.** Cost vs price, the offer, delivery, margin, break-even ROAS. Read it before changing a single number. |
| **`ICP-RESEARCH.md`** | 🎯 **Anything involving copy, ads, or positioning.** Who buys, why, objections, voice, competitor ad landscape, and which angles are dead. Feed it to any copy or creative job alongside `PRODUCTS.md` + `PRICING.md`. [Google Doc mirror](https://docs.google.com/document/d/18t8dNxN22Q2gb6opEnJg98HTwD353o1XTTKvAk5Tj94/edit) (markdown is the source of truth). |
| **`PRODUCTS.md`** | The catalogue mirror. Human-readable view of `products.js`. |
| **`STATIC-ADS-BRIEF.md`** | Ad creative direction + the hard rules on what may and may not be claimed. |
| **`CHANGELOG.md`** | What changed, when, and why. Append to it. |
| **`README.md`** | Shopify/theme/domain ops, open todos, gotchas. |
| **`images/README.md`** | Photo swap + image pipeline. |

---

## Hard rules

- **Cost is not price.** `৳840` is what we PAY the supplier for a 1.5 kg bag; `৳1,190` is
  what we charge. An early analysis confused the two and produced nonsense. Always check
  which one a number is.
- **Two margin numbers exist and are not interchangeable.** Gross (price − cost) and
  contribution (after courier, packaging, returns). **Quote contribution.** Gross overstates
  the business by roughly a third.
- **One flat price per pack size.** All nine 1.5 kg recipes are ৳1,190. Do not let per-recipe
  prices drift apart — the last time that happened it was a data artefact, not demand.
- **The compare-at price is OUR regular price.** Never attribute it to a competitor by name.
- **Never advertise the 400 g, the Prostar 1.2 kg, or the 15 kg.** The first two are checkout
  add-ons; the 15 kg is listed but not promoted. Lead with the 3-pack or the 1.5 kg.
- **No Subscribe & Save, no promo codes.** Both removed on purpose. Do not reintroduce them
  without redoing the margin maths in `PRICING.md`.
- **`assets/js/products.js` is the source of truth.** `PRODUCTS.md` and the Shopify import
  CSV are downstream of it. **Never hand-edit the import CSV** — run
  `/usr/bin/python3 build_shopify_import.py`.
- **The 3-pack is three bags of ONE recipe, never a mixed pack.** Switching a cat's food
  upsets it. Its nutrition is read from the matching 1.5 kg product via each variant's
  `recipe` key, so it can never quote a figure the single does not. Do not copy the
  nutrition across.
- **Nutrition data is real and sourced.** Never invent an analytical value. If there is no
  published figure, leave the field empty (two Prostar SKUs are deliberately blank).

---

## Shopify

Theme work runs through the Shopify CLI (already authenticated).

```bash
cd shopify-theme
# push to the LIVE theme — the --allow-live flag is REQUIRED
shopify theme push --theme 141067386942 --store meow-belle.myshopify.com --allow-live
```

**⚠️ Pushing to the live theme without `--allow-live` silently aborts** — it triggers a
confirmation prompt that auto-declines in a non-interactive run and shows a harmless-looking
error. For safe iteration push to an unpublished preview first, screenshot it, then push
live and delete the preview.

**What the CLI cannot do:** products, prices, shipping rates, discounts and settings. Those
are Shopify admin work. Current live config is recorded in `README.md`.

**Product data** changes flow: edit `products.js` → `/usr/bin/python3 build_shopify_import.py`
→ import in admin with *"Overwrite existing products with the same handle"* ticked.

**Build scripts** (all want `/usr/bin/python3`):

| Script | Makes |
|---|---|
| `build_shopify_import.py` | the Shopify import CSV, from `products.js`. `--check` compares against the newest CSV on disk without writing. **The filename is date-stamped, so a run on a new day writes a NEW file — newest wins, import that one.** |
| `build_3pack_images.py` | the four 3-Month Supply images, composited from the catalogue photos. |
| `build_icp_doc.py` | renders `ICP-RESEARCH.md` to styled HTML for the **Google Doc**. Rebuild recipe + the fixed `DOC_ID` are in the comment at the bottom of the script. **Update in place, never `files.copy`** — a copy mints a new URL. |

---

## Gotchas

- **Live theme push** → always `--allow-live`.
- **Shopify's CDN caches theme assets.** A pushed CSS change can serve stale for a while even
  though the theme file is correct. Verify with `shopify theme pull --only <file>`, not curl.
- **`<script>` tags do NOT run inside `custom_liquid` block settings.** This theme wires its
  PDP add-ons (`mb-pdp-*`) in through `custom_liquid` blocks in `templates/product.json`. A
  snippet containing a script tag renders as **nothing at all**, silently — no error, no
  markup. Put behaviour in an `assets/*.js` file loaded from a section, and prefer CSS
  (`:has()`) over a JS-set class. Cost us a debugging round on 2026-07-27.
- **Check the SERVER render, not the browser.** `curl -sL https://meowbellle.shop/... | grep`
  is how the two problems above get told apart: theme file right + markup missing = Liquid
  problem; markup present + wrong look = CDN cache.
- **Shopify cannot geo-restrict below country level.** There is no Dhaka region — only
  "Bangladesh". Dhaka-only is a marketing and ops rule, not a technical one.
- **System Python 3.14 has a broken `expat`** → use `/usr/bin/python3` for XML/xlsx/PIL work.
- **Two SKUs share a slug if you strip the decimal** — `1.5 kg` and `15 kg` both became
  `15kg` once and merged their inventory. Slugify as `1p5kg`.
- **☠️ Never import anything from `archive/`.** The two `DANGER-cost-prices-*` CSVs in there
  hold **supplier cost** in the price column — importing one sells a 15 kg bag for ৳6,100
  against a ৳7,600 retail. Kept as a record only. See `archive/README.md`.
- **Currency is `Tk`, not `৳` — settled 2026-07-28.** Shopify formatting is
  `Tk {{amount_no_decimals}}` (and `Tk {{amount_no_decimals}} BDT` for the with-currency
  variants), so prices render **`Tk 3,390`**, no trailing `.00`. The earlier plan to switch
  to `৳` was dropped. ⚠️ Our written copy still uses `৳`, so the two are mixed on the same
  page — see `README.md` for the size of that sweep before starting it.

---

## Maintenance

When something changes, update in this order:

1. `assets/js/products.js` if it is product or price data.
2. The doc that owns the decision — `PRICING.md` for money, `ICP-RESEARCH.md` for audience,
   `README.md` for ops.
3. `PRODUCTS.md` (regenerate, do not hand-write).
4. `CHANGELOG.md` — always. Date it and say why, not just what.
5. The Shopify import CSV, then import it.
