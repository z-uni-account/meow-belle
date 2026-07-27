# Meow Belle — changelog

> Newest first. Record **why**, not just what. Separate private business — never mix with
> Mindframe (see `CLAUDE.md`).

---

## 2026-07-27 — Repricing, offer, Dhaka-only launch, 3-pack

The largest change since the store went live. Four rounds in one day, each correcting the
one before.

### The mistake that started it

Competitor research was commissioned to see where our prices sat against the market. It
concluded we were the cheapest shop in Bangladesh on every SKU, ~20% below everyone.

**That conclusion was wrong.** The `৳840`-type numbers in `products.js` were **supplier
cost**, not retail. The analysis had compared our cost against competitors' retail. Once
corrected, everything downstream had to be rebuilt.

**Lesson, now in `CLAUDE.md`:** always establish whether a number is cost or price first.

### Pricing

- **All nine 1.5 kg recipes flat at ৳1,190** (was ৳1,450). An earlier pass priced Kitten
  ৳90 below Adult because twelve shops list Adult and only nine list Kitten, so the median
  moved. That was a **gap in the data, not demand** — and it priced the highest-lifetime-value
  customer (new kitten owners) cheapest.
- Bulk: 8 kg ৳4,850 · 15 kg ৳7,600 · Prostar 15 kg ৳5,400.
- **Monopoly SKUs priced above market**, not at it: Mother & Baby 8 kg ৳5,200, Sterilised
  Chicken 15 kg ৳8,200. Nobody else in Bangladesh lists either.
- Add-ons: 400 g ৳320, Prostar 1.2 kg ৳500. **Never advertised** — too light to carry a
  parcel; their job is to lift a basket over the free-delivery line.

### Offer

- **"Founding customer price — first 500 cat parents."** Flat **18% off** sitewide.
- Deliberately *not* a launch sale — a capped cohort can run indefinitely without training
  people to wait for a discount. The PDP countdown timer was removed because it contradicted
  that (and it reset from `localStorage` on every visit, which was not honest).
- **The compare-at is our own regular price.** An earlier draft cited SB Pet Shop by name as
  the source of the ৳1,500 anchor. **That false attribution was the real risk, not the
  discount** — SB actually charge ৳1,250, and it also attributed anchors for two products no
  shop stocks. Removed entirely.

### Margin discipline

Three stacking discounts were found and removed, all of which would have compounded on the
18%:

| Removed | Why |
|---|---|
| **Subscribe & Save 15%** | Gave away ৳179 of a ৳246 contribution — **61% of the margin** — and stacked with the badge to show 33% off. Also needs a card on file in a cash-on-delivery market. |
| **Quantity tiers** (2 = 10%, 3+ = 15%) | Halved the contribution on a 2-bag basket. |
| **Promo codes** `MEOW20` / `WELCOME10` / `PURR15` | `MEOW20` took a ৳1,190 bag to ৳952, leaving ~৳62 against ৳246. |

Replacement for Subscribe & Save: a **WhatsApp reorder nudge on day 24**, no discount
attached. Not built yet.

### Delivery — replaced twice

1. **Was:** free over ৳2,000 (later ৳2,500). Broken because it triggered free delivery on
   *every* bulk bag automatically, subsidising a customer who had already decided to buy.
2. **Then:** ৳70 Dhaka / ৳130 outside, free on 2+ items.
3. **Now**, on real RedX rates: **Dhaka city only**, split by weight.

| | Under 5 kg | Over 5 kg |
|---|---|---|
| Carrier | RedX | Our own rider |
| Customer pays | ৳70 | ৳150 |
| Free delivery | On 2+ items | Never |
| Our cost | ৳65 at 1 kg, +৳15/kg | ~৳250 |
| RTO | 15% | ~5% — every heavy order gets a confirmation call |

**RedX will not carry a parcel over 5 kg**, which is the entire reason the second method
exists.

**Heavy bags got much better as a result.** The 15 kg went from ৳895 to **৳1,298**
contribution with no price change — the rider plus the confirmation call cuts RTO from 15%
to 5%, and the customer covers ৳150 of a ৳250 run.

### New hero SKU

**"Meow Belle 3-Month Supply" — 3 × 1.5 kg at ৳3,570** (was ৳4,350). Exactly three singles,
so the 18% holds. Built as one product with its own page. At 4.5 kg it still ships RedX
(৳125) and earns **৳741 at a 4.8x break-even** — nearly 3× a single bag's contribution for
about the same ad cost.

Now the primary advertised product alongside the 1.5 kg single. **The 15 kg is listed but
never advertised.**

### Site

- Static site (`app.js`, HTML) and Shopify theme both updated: offer, delivery, weight-split
  cart logic, Subscribe & Save UI removed, founding-customer block replacing the countdown.
- **Mobile type size increased** — Dawn body scale 100→120%, heading 100→110%, plus a
  phone-first size block in `meowbelle.css`. The site was too small to read on a phone.
- Six "delivered across Bangladesh" claims corrected to Dhaka city.

### Shopify admin config (done)

- **Shipping**, zone *Domestic (Bangladesh)*: *Standard delivery* 0–5.0 kg ৳70 (3–5 days);
  *Large bag - delivered by our own team* 5.01 kg+ ৳150 (1–2 days). Non-overlapping bands.
- **Discount**: the existing *"Free shipping over 2000Tk"* was **repurposed** (not
  duplicated) into *"Free delivery on 2 bags or more"* — minimum **quantity 2**, and
  **excludes shipping rates over ৳100** so the ৳150 rider rate can never become free.
  **That exclusion protects the entire heavy-bag margin. Do not remove it.**

### Bugs found and fixed

- **Both old Shopify import files carried supplier cost prices** — importing either would
  have sold a 15 kg bag for ৳6,100. (The brief believed they held ৳1,290/৳7,990/৳4,999
  prices; they did not. Worse than described.)
- **Five products gave their 1.5 kg and 15 kg variants the same `Variant SKU`**, because the
  slug dropped the decimal point (`…-15kg` for both). Shopify would have merged their
  inventory. Fixed; 11 SKUs corrected.
- **Product copy quoted a dead price** — Adult Chicken read "now from a ৳240 trial pack",
  both stale and advertising an add-on SKU.
- **`buttons_radius: 50`** exceeded the theme schema max of 40 and made every theme push
  report an error. Set to 40, which is what Shopify was clamping to anyway.
- **Contradictory delivery claims** in the ads brief (৳130 nationwide vs Dhaka-only).

### Numbers in the brief that did not reconcile

Each was checked against the stated assumptions and corrected:

- **A 2-bag basket contribution of ৳1,121 was arithmetically impossible** — two ৳1,190 bags
  carry ৳1,680 of cost, so total gross profit is ৳700. Correct figure: **৳407** (later ৳476
  on RedX rates).
- **The free-delivery break-even was ~40%** under the old ৳111 cost assumption. On RedX
  rates the offer costs ~৳60, so break-even is **~21%**. The offer is far more likely to pay
  for itself than assumed. Test by disabling it for two weeks after month one.
- **Sterilised 15 kg compare-at ৳9,900 is 17.2% off, not 18%.** ৳10,000 would be exact.
- **1.5 kg contribution:** we use ৳246 (conservative); the stated assumptions produce ৳263.

### Still open

- **Shopify cannot restrict to Dhaka city** — its region list offers Bangladesh only, with
  no divisions or postcodes. Checkout is technically open nationwide. Needs a checkout-rules
  app, or manual cancellation at launch volume.
- **The 3-pack is one line item**, so it does not meet "minimum 2 items" and a lone 3-pack
  pays ৳70. But the site says "free on 2 bags or more" and it *is* three bags. Decide:
  second discount scoped to that product (contribution ৳741) or reword the offer.
- 3-pack is Adult Chicken only and reuses that product's photo — wants a real 3-bag shot,
  and possibly recipe variants.
- Currency format still displays `Tk … BDT`.
- WhatsApp day-24 reorder nudge not built.

### Docs added

`CLAUDE.md` (repo-level instructions, Mindframe separation), `PRICING.md` (canonical money
doc), this changelog. `PRODUCTS.md`, `README.md` and `STATIC-ADS-BRIEF.md` rewritten.
Competitor research: `Pricing Workshopping/` (1–5, newest wins),
`2026-07-27-all-competitor-listings.csv`, and the
[Google Sheet](https://docs.google.com/spreadsheets/d/1kIRTEs1shx3eyMrspgb5EhHGqAS8uJjUwts108gd_S0/edit).

---

## 2026-07-16 — HQ product photography

All 13 product photos upgraded to high quality (single-bag, web-optimised ~50–210 KB).
Prostar Sterilised Salmon background removed to white. Shopify refreshed via a cache-busted
re-import. Pipeline and gotchas in `images/README.md`.

---

## Earlier — Shopify launch

Full custom port of the static site to Shopify (Dawn base, theme "Meow Belle Port"). Custom
`mb-*` sections and snippets, brand layer in `assets/meowbelle.css`, 13 products imported
with BDT pricing. Static site retained as design reference and image host.
