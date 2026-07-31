# Meow Belle — changelog

> Newest first. Record **why**, not just what. Separate private business — never mix with
> Mindframe (see `CLAUDE.md`).

---

## 2026-08-01 — Payments switched on, VAT killed, 400 g stops leading the price

### The store could not take a single order

A full pass over the live site found **no payment method of any kind enabled** — no provider
chosen, PayPal inactive, and no manual method. Every visitor reaching checkout hit a dead
end. Nothing had ever been configured.

**Cash on Delivery is now live** (Settings → Payments → Manual payment methods). Verified end
to end with a real cart: COD appears at checkout, and the 3-pack free-delivery discount fires
correctly against it. COD was the obvious and only choice available today — the entire margin
model in `PRICING.md` is built on it ("the market is cash on delivery", COD fee 0% inside
Dhaka), and it needs no bank account, trade licence or KYC.

Customer-facing text set on the method:
- *Choosing it:* "Pay in cash when your order arrives. Dhaka city only."
- *After ordering:* exact amount ready, 3–5 working days standard, 1–2 days plus a
  confirmation call for 8 kg and 15 kg bags.

**Shopify has no Bangladesh gateway in its built-in provider list.** Searched: bKash, Nagad,
SSLCommerz — all return nothing. The list is generic international processors only. bKash,
Nagad or card acceptance therefore has to come from a Shopify **app** (SSLCommerz, aamarPay,
ShurjoPay all publish one) plus a merchant account, and that needs Z's trade licence, bank
account and KYC. Days-to-weeks, not today.

### bKash added as a manual method, no number published

Z has a personal bKash that can receive payments, so **bKash is now a second checkout
option** — advertised, but settled by hand. The flow deliberately **publishes no number**:
the customer picks bKash, we text them the number, they Send Money and reply with the TrxID,
and the order is packed on confirmation. Putting a personal bKash number on a public
storefront invites spam and fraud, and this way it never appears on the site. If Z would
rather print the number, it goes in Settings → Payments → bKash → Edit.

**Nagad and card are off the table until SSLCommerz.** Z's call. The site copy no longer
claims them: `bKash · Nagad · Card · COD` became **`bKash · Cash on Delivery`** in all three
places it appeared (`sections/mb-guarantee.liquid`, `templates/index.json`,
`snippets/mb-pdp-trust.liquid`).

### The 15% VAT is gone

Bangladesh base tax was set to Shopify's default **15%**, tax-exclusive, so the Tk 3,390
3-pack was charging **Tk 3,898.50** at checkout — every advertised price understated by 15%,
on a cash-on-delivery model where the gap gets discovered at the door. `PRICING.md` has no
tax line at all, so this was never intended. **Rate set to 0%.** Verified: the same cart now
totals exactly Tk 3,390.

### The 400 g no longer leads the Adult Chicken price

`product.price` is the **cheapest** variant, so Reflex Adult Chicken led everywhere with its
400 g add-on at **Tk 320** against a Tk 1,190 bag — and because the 400 g was also the first
variant, the product page itself *opened* on Tk 320. That is where ad traffic lands.

Two fixes: the Size option values were reordered so **1.5 kg comes first** (Adult Chicken was
the only product affected — every other multi-variant product already led with 1.5 kg), and
`snippets/mb-card.liquid` now reads the 1.5 kg variant's price explicitly rather than
`product.price`, falling back for products with no 1.5 kg. Homepage card and PDP both now
show **Tk 1,190**.

⚠️ The **catalog grid still says "From Tk 320"** — that is Dawn's own card, which uses
`product.price`. Unpublishing the 400 g, or splitting it into its own product, would clear
it. Left alone for now.

### Still open

- **Four policies missing.** Return and refund, terms of service, shipping, and contact
  information are all unset; Shopify flags contact information as **Required**. Only the
  automated privacy policy exists. The site meanwhile promises a "30-day guarantee · Full
  refund" with no refund policy behind it. Needs Z's business address, phone and return terms.
- **Ratings, review counts and stock levels are fabricated** — "4.9 · 312 reviews",
  "🔥 Only 8 left", and three named testimonials carrying "✓ Verified" badges, on a store
  with zero orders. Hardcoded in `snippets/mb-card.liquid` and `sections/mb-reviews.liquid`.
  Raised with Z on 2026-08-01; **his call is to leave them as they are.**
- **The 3-Month Supply is absent from the homepage**, despite being the hero SKU and the
  primary advertised product.

### Confirmed healthy

Domain `meowbellle.shop` now serves Shopify (the old GoDaddy parked-page problem is gone).
14 products / 26 variants live, all in stock, prices and `Variant Grams` matching
`PRICING.md`. Both weight bands and both free-delivery discounts behave correctly at
checkout.

---

## 2026-07-28 — Currency settled on Tk

**Prices now render `Tk 3,390`, not `Tk 3,390.00`.** All four Shopify currency formats moved
from `{{amount}}` to `{{amount_no_decimals}}`; the symbol stays **Tk**. Nothing in this
market is priced in paisa, so the trailing `.00` was pure noise on every price on the site.

**The plan to switch everything to `৳` is dead.** It had been sitting in the open todos since
launch. Z's call is Tk.

⚠️ **That leaves two currency symbols on one page.** Shopify prices say `Tk 3,390`; our own
copy still says `৳70`, `৳150`, `৳180`. Copy is the side that is now out of step. Not swept,
because it also means rebuilding the value-proof image, which has `৳4,140 / ৳3,390` baked
into the artwork — about 8 strings plus one image rebuild. Sized in `README.md`. **Do it in
one pass or not at all**; half-swept looks worse than either symbol used consistently.

---

## 2026-07-27 (later still) — 3-pack page: per-recipe details, urgency, plainer copy

### Details now follow the recipe you pick

The page was showing all five recipes' ingredients and analysis at once, which read as a
data dump. Each block is now tagged `data-recipe` by `build_shopify_import.py`, and
`assets/mb-pdp-recipe.js` shows only the selected one. Picking *Urinary Chicken* swaps the
panel to 34% protein; *Adult Chicken* shows 33%. With JavaScript off all five stay visible —
wordy, never wrong.

### The intro copy got much shorter and much simpler

> Three bags of the same food, sent together. That is about three months for one cat. You
> save ৳180, and delivery in Dhaka is free. Best of all, you stop running out.

Four short sentences of plain words, down from a paragraph.

### Urgency, on this page only

Red sale badge, red sale price, and a **"Limited time"** pill. Cold traffic lands here, so it
is allowed to push harder than the rest of the catalogue.

⚠️ **This contradicts a decision made earlier the same day.** The 18% is deliberately framed
as a capped founding cohort *and not a sale*, so nobody learns to wait for the next discount
— that is why the countdown timer was deleted. "Limited time" pulls the other way and is only
honest while the founding price really is going to end. So the line under the pill names the
thing that actually ends it — *"for the first 500 cat parents only"* — instead of implying a
deadline that does not exist. **If the founding price is going to run forever, pull the
pill.** Recorded in `PRICING.md`.

### Housekeeping found three things worth fixing

- **The two old import CSVs were a live landmine.** Both hold **supplier cost** in the price
  column — importing either sells a 15 kg bag for ৳6,100 against ৳7,600 retail — and they sat
  in the repo root one tab-completion away from the real file. Moved to
  `archive/DANGER-cost-prices-*.csv` with a README explaining exactly what is wrong with them.
- **`build_shopify_import.py --check` was broken by the date rolling over.** It compared
  against *today's* filename, so it reported `DIFFERS` every morning purely because the new
  day's file did not exist yet. It now compares against the newest date-stamped CSV on disk
  and prints which one, and its glob deliberately excludes the archived files.
- **Dead code in `app.js`** referenced a `full-bowl-bundle` product that no longer exists,
  including a hardcoded "Save ৳801" badge — a figure that was already two repricings stale.
  Removed.

### The delivery badge was a paragraph

*"Large bags (8 kg & 15 kg) delivered by our own team inside Dhaka, ৳150, 2 working days"*
wrapped to **five lines on a phone** and threw the whole two-column badge grid out of
balance. Now **"Big bags (8 & 15 kg) · ৳150 · 2 days"**, matching the dot-separated style of
the badges beside it.

Nothing was lost — the full version, including the confirmation call, is still in the
*Delivery & returns* accordion. The snippet now carries a note: these are **badges, not
sentences**, so anything past about six words wraps badly.

### The bug that ate an hour

Both new snippets rendered as **absolutely nothing**. No error, no markup, correct files
confirmed on the live theme by `shopify theme pull`.

Cause: this theme wires its PDP add-ons in through **`custom_liquid` blocks** in
`templates/product.json`, and **Shopify does not execute `<script>` tags inside a
`custom_liquid` setting.** Both new snippets led with a script tag; the pre-existing ones
(`mb-pdp-pills`, `mb-pdp-trust`) are markup-only and had always worked.

Fixed by moving behaviour to `assets/mb-pdp-recipe.js`, loaded from `sections/main-product.liquid`,
and doing the red-price styling in pure CSS with `:has()` instead of a JS-set class — which is
better anyway, since Dawn rebuilds the price block on every variant change and would have
wiped it. Now in `CLAUDE.md`, along with the thing that actually diagnosed it: **curl the
storefront and grep the server render**, rather than trusting the browser.

---

## 2026-07-27 (later) — The 3-pack becomes a real product

The morning's 3-pack was a placeholder: one recipe, one borrowed photo, and a price with no
reason behind it. This is the build.

### Price: ৳3,570 → ৳3,390, was ৳4,140

At ৳3,570 the pack cost **exactly** three singles. There was no saving, so there was no
reason for it to exist. ৳3,390 puts **৳180** behind it, and ৳4,140 keeps the compare-at at
18.1% off, in line with the sitewide 18%.

⚠️ **That ৳180 is not free.** It cost **৳153 of contribution** (৳741 → ৳588) and pushed
break-even from 4.8x to 5.8x — worse, as a ratio, than a single bag's 4.7x. The ratio is the
wrong lens: ad cost is per *order*, and the pack still returns **2.3× a single bag's ৳254**.
Judge it on taka per acquired order. Flagged in `PRICING.md` and `ICP-RESEARCH.md`, because
the research leans on the old 4.8x figure in three places.

### Five recipes, three identical bags in each

Adult Chicken, Kitten Chicken, Urinary Chicken, Hairball Salmon, Sterilised Chicken. Same
price across all five.

**Never mixed.** Cats have sensitive stomachs and switching food causes upset, so a variety
pack would work against the product.

This closes the biggest hole the ICP research found: every symptom-first ad angle pointed at
a recipe the 3-pack could not fulfil. There was nowhere for the highest-intent traffic to
land. There is now.

Nutrition is **pulled from the matching 1.5 kg product** rather than copied — each variant
carries a `recipe` key, and both the PDP and the import CSV read through it. The bundle page
cannot quote a figure the single does not.

### The three-month claim, made defensible

An adult cat of about 4 kg eats around 50 g of dry food a day, so 4,500 g is roughly 90 days.
Two cats, about six weeks. **Reflex Plus does not publish its gram chart online** — it is
printed on the pack — so the copy says "roughly" and sends the customer to the pack.
⚠️ Confirm the printed chart before this goes into paid claims.

### Free delivery, and the ৳70 that nearly leaked

The pack is one line item, so the "minimum 2 items" discount missed it — the page promised
free delivery and the cart would have charged ৳70. Rather than reword the offer, it gets a
**second automatic discount scoped to that one product**, with the same "exclude rates over
৳100" clause that protects the heavy-bag margin. The static cart already behaves correctly
(`freeShipSolo`). **The Shopify-admin half is not done — recipe in `README.md`.**

### Four images, composited not shot

`build_3pack_images.py` builds all four from the catalogue photos: hero (three staggered
bags, flat "3 MONTHS" seal), value proof, scale (one bag against an illustrated bowl and
scoop), and a typographic stock-out card that doubles as ad creative. Warm off-white, soft
top-left key, one grounded contact shadow per bag.

**No cat appears in any of them,** because we have no rights to a cat photograph and will not
use stock. The bowl and scoop are our own flat line drawing, deliberately illustrative.

The stock-out card says *"We checked 90 cat food listings across Dhaka's pet shops. 47 were
out of stock"* rather than the rounder "half of Dhaka". That is the counted figure from
`ICP-RESEARCH.md`, and being specific is both more honest and harder to wave away.
⚠️ It is one snapshot on one day — re-count before it carries real spend.

### The import CSV is now generated, not written

`build_shopify_import.py` reads `products.js` and emits the CSV. Verified to reproduce all
21 pre-existing product rows **byte for byte** before the 3-pack rows were added, so the
change is provably isolated. Image `?v=` cache-busters now come from each file's own mtime
instead of a hand-typed date. **Never hand-edit the CSV again.**

### Sheet and theme

The [pricing sheet](https://docs.google.com/spreadsheets/d/1kIRTEs1shx3eyMrspgb5EhHGqAS8uJjUwts108gd_S0/edit)
is updated on both tabs — the hero row is now the **free-delivery** case (the live one) with
the ৳70 case kept below it as a comparison, and the row carries a hover note covering the
recipes, the ৳180, the RTO model and the manual stock. Snapshot exported as
`Pricing Workshopping/6.csv`.

The PDP trust block now shows *"Free delivery inside Dhaka, always"* on the bundle and the
normal ৳70 line everywhere else.

### Shipped to the live store the same day

All three admin steps are done and verified on the storefront:

1. **CSV imported** with overwrite — Shopify's own preview confirmed 14 products / 26 SKUs /
   17 images, matching the generator exactly. All five variants live at ৳3,390.
2. **Theme pushed** to *Meow Belle Port* `#141067386942`.
3. **Second free-delivery discount created** — and it could not be built the way the plan
   said. **Shopify's free-shipping discount has no product scoping**; the only conditions
   are country, minimum purchase amount and minimum quantity. So it runs on a **৳3,000
   minimum**, which is equivalent here: the 3-pack at ৳3,390 is the only single item on the
   store that reaches it, and any multi-item basket over ৳3,000 already qualified under the
   2-item rule. Two 3-packs weigh 9 kg, and the ৳100 rate exclusion blocks that from ever
   going free. ⚠️ Re-check this rule if a light SKU above ৳3,000 is ever added.

Storefront verified: hero with the seal, five recipe pills, ৳4,140 struck through against
৳3,390, and *"Free delivery inside Dhaka, always"* on the bundle only.

### A ৳10 disagreement, left visible on purpose

The brief quoted ৳598 / ৳657 for the 3-pack; the sheet and `PRICING.md` say ৳588 / ৳648.
Neither is wrong. The brief values a returned parcel at **1×** the courier fee, every other
row values it at **1.5×**. Ten taka an order changes nothing, but a table has to use one
model or its rows stop being comparable, so the conservative one already applied to the
other 21 rows wins. Both figures are noted on the sheet row.

---

## 2026-07-27 (after the repricing) — ICP research: we were selling into the wrong fight

New file **`ICP-RESEARCH.md`** plus a [Google Doc mirror](https://docs.google.com/document/d/18t8dNxN22Q2gb6opEnJg98HTwD353o1XTTKvAk5Tj94/edit).
Built on the Mark Builds Brands "Foundational Docs" process (deep research on who buys, why,
emotional buttons, how they talk, objections) and the Purple Ocean test. Until now the only
audience note we had was one line in `STATIC-ADS-BRIEF.md` — an assumption, not research.

### Why it was needed

We were advertising *"37% protein. Zero filler. Now in Bangladesh."* Of 58 live competitor
ads pulled from the Meta Ad Library, 26 claim premium and 21 claim 100% original. We were
saying the same thing as everyone else, on an identical bag that three shops stock at ৳1,050
against our ৳1,190, at ৳793/kg against Chonk and Oskies at ~৳330/kg with free delivery.
That fight is unwinnable and we were paying to have it.

### The finding that reframed everything

Re-read our own 90-row competitor sweep and **only 47 listings are in stock — 52%.** On the
problem recipes it collapses: Choosy 2 of 4, Hairball 3 of 8, Skin & Coat 3 of 7, Urinary
4 of 8. The cheapest listings are usually the dead ones. Independently confirmed three ways:
the Chonk founder on market syndication and vendor hoarding (TBS), a Bangladeshi owner
(*"One time you get one brand of food, and the next time it isn't there"*), and our own data.

**So the purple ocean is the problem recipes, not the brand.** Nine recipes, seven named
after a problem, chronically out of stock everywhere, and **zero hairball ads, three urinary
mentions and two skin-and-coat mentions across 58 live competitor ads.** Nobody in this
market sells the fix for a named cat problem. Chonk cannot follow us there at any price:
they make two recipes.

### Three things that changed the plan after Z supplied real Reddit quotes

1. **🚨 We look like a scam, and it outranks price.** r/Dhaka: *"the market has created this
   default mindset 'If I buy online, I will probably get scammed'"* and *"Even if I clearly
   mention a return or refund policy, they do not fully believe it."* Unknown brand, domain
   misspelled with three L's, no reviews, no phone number, and **star ratings hardcoded per
   product handle** — 4.9★ on 312 reviews we have not earned. That last one is not a missing
   signal, it is the exact "misleading descriptions" pattern this market is trained to spot.
   New **Part 7.5 trust checklist**, to be cleared before any ad spend.
2. **The affluent buyer is the Persian / pedigree owner.** Spends 5,000+/month, buys on
   vet-bill avoidance (*"cheaper brands cause kidney stones, chronic kidney disease, uti…
   they will only increase the amount you spend on vet bills"*), and needs Choosy, Hairball
   and Skin & Coat — three of our four scarcest SKUs. Added as Segment D. **It also
   repositions us:** in their hierarchy Royal Canin and Farmina are the top and Reflex sits
   below, so we are not the premium splurge, we are *vet-grade without Royal Canin money*.
   Compare upward to Royal Canin at ~৳2,500/kg, never sideways to the ৳1,050 shops.
3. **Convenience, not nutrition, is the wedge against homemade food.** A real share of this
   market cooks for the cat and believes it is healthier. The one owner who switched said
   why: *"Baar Baar Khabar gorom kora jhamela dekhe I switched to dry catfood."* Argue
   nutrition and we lose her. She went to Chonk.

Also logged: owners name **Reflex Plus Urinary by SKU** unprompted, one describes our exact
Urinary story (*"we were using fluffy but our cat got his bladder blocked and so we had to
change foods"*), **"stock up when you find them"** turns out to be a coping strategy
customers already describe (that is the 3-Month Supply), and **RedX is specifically
distrusted** *"when ordering from independent pages"* — which is exactly what we are.

### Consequences for creative

`STATIC-ADS-BRIEF.md` rewritten. Dead: "Now in Bangladesh", "37% protein" as a headline, and
price-led value ads. Replaced with three concepts to test: **symptom-first** (name the problem
in the first three words, land on that product page), **the stock-out** (lead the 3-pack), and
**new kitten**. Single 1.5 kg bag demoted to a remarketing and refill SKU — at 4.7x break-even
it is close to unwinnable on cold traffic, while the 3-pack earns ৳741 for the same ad cost.

### Second opinion

Jeremy AI (paid-ads advisor) agreed on both calls and supplied the framing line **"you're the
pharmacy, not the pet shop."** His pushback is recorded in Part 7B and should not be waved
away: at 21% contribution in a Dhaka-only audience, CPMs climb and creative burns out fast,
and if the first test cannot clear ~4.8x the problem is supplier cost, not the ads.

### Open, needs Z

1. ~~**The 3-pack is Adult Chicken only**~~ ✅ **Done later the same day** — five recipe
   variants, and repriced ৳3,570 → ৳3,390. See the two entries above.
2. **No risk reversal exists.** Chonk sells a ৳149 sampler against the category's biggest
   objection ("will she even eat it"). We have a ৳320 400g bag we never advertise. Suggested:
   a first-bag promise on the single 1.5 kg only, capping downside at ৳840 per claim.
3. **Renal and gastrointestinal are stated unmet needs** and we stock neither. Worth asking
   the supplier what a Reflex veterinary line costs.

### Honest gaps

First-party Bengali voice is still thin. Reddit skews male, English-fluent and internet-native,
its summariser silently mixes r/pakistan and r/indiasocial into "only r/bangladesh" requests
(every quote is now tagged 🇧🇩 or 🌏 for this reason), and the biggest Bangladeshi cat
communities are closed Facebook groups that cannot be scraped. **The 52% stock rate is one
snapshot — re-run the sweep monthly.** It is our best proprietary data and nobody else has it.

### Tooling

`build_icp_doc.py` — markdown to styled HTML for the Google Doc. Rebuild in place with
`gws drive files update` against the fixed `DOC_ID`; **never `files.copy`**, which mints a new
URL and loses sharing.

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
about the same ad cost. *(Superseded the same day — see the entry above.)*

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
