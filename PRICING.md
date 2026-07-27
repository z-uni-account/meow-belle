# 💰 Meow Belle — pricing, offer & unit economics

> **Separate private business.** Meow Belle only — never mix with Mindframe. See `CLAUDE.md`.


> **Canonical source of truth for anything money.** Prices, the discount, delivery
> and margin all live here. `assets/js/products.js` holds the machine-readable
> version; this file explains *why*. Last set **2026-07-27**.
>
> History of how these numbers were arrived at (and what was wrong before): `CHANGELOG.md`.
>
> Competitor research behind these numbers:
> [Google Sheet](https://docs.google.com/spreadsheets/d/1kIRTEs1shx3eyMrspgb5EhHGqAS8uJjUwts108gd_S0/edit)
> · snapshots in `Pricing Workshopping/` (1-4, newest wins) and
> `2026-07-27-all-competitor-listings.csv`.

---

## The one thing to remember

**৳840 is what we PAY the supplier. ৳1,190 is what we CHARGE.** Every early version of
this analysis confused the two. Cost is not price.

There are also **two different margin numbers** and they are not interchangeable:

| | What it is | On a ৳1,190 bag |
|---|---|---|
| **Gross margin** | Price minus supplier cost | ৳350 · 29% |
| **Contribution margin** | Gross minus COD fee, packaging, returns, net courier | **৳246 · 21%** |

**Use contribution.** It is the money that actually arrives and the money ad spend
comes out of. Quoting 29% to anyone will overstate the business by a third.

---

## The offer

**"Founding customer price — first 500 cat parents."**

Not a launch sale, not a seasonal discount. It is a founding cohort with a hard cap,
which is why it can run indefinitely without training people to wait for a sale.

⚠️ **One deliberate exception: the 3-pack page pushes urgency.** It carries a red sale
badge, a red sale price and a **"Limited time"** pill, because it is the page cold traffic
lands on. That pulls against the framing above, and it is only honest while the founding
price really is going to end — which is why the line under the pill names the thing that
actually ends it (*"for the first 500 cat parents only"*) instead of implying a deadline we
have not set. **If the founding price is going to run indefinitely, pull the pill.** Every
other product page keeps the calm treatment. Built in `snippets/mb-pdp-urgency.liquid`.

- **Flat 18% off** our own regular price, sitewide, every SKU. One number for ads,
  one rule for ops.
- The compare-at price is **our own regular price**. It is *not* a claim about what
  any competitor charges, and nothing on the site should attribute it to one.
  An earlier draft cited SB Pet Shop by name — that specific false attribution was
  the risk, not the discount itself.
- Show a **counter** of remaining founding slots if the theme supports it.

---

## Price list

| Product | Size | Cost | Was | **Price** | Off | Gross | Contribution | BE ROAS |
|---|---|---|---|---|---|---|---|---|
| Reflex Plus Kitten, Chicken | 1.5 kg | ৳840 | ~~৳1,450~~ | **৳1,190** | 17.9% | ৳350 | ৳246 (20.7%) | 4.8x |
| Reflex Plus Kitten, Chicken | 8 kg | ৳3,800 | ~~৳5,900~~ | **৳4,850** | 17.8% | ৳1,050 | ৳687 (14.2%) | 7.1x |
| Reflex Plus Kitten, Chicken | 15 kg | ৳6,100 | ~~৳9,250~~ | **৳7,600** | 17.8% | ৳1,500 | ৳895 (11.8%) | 8.5x |
| Reflex Plus Adult, Chicken | 400 g | ৳240 | ~~৳390~~ | **৳320** | 17.9% | ৳80 | add-on | n/a |
| Reflex Plus Adult, Chicken | 1.5 kg | ৳840 | ~~৳1,450~~ | **৳1,190** | 17.9% | ৳350 | ৳246 (20.7%) | 4.8x |
| Reflex Plus Adult, Chicken | 15 kg | ৳6,100 | ~~৳9,250~~ | **৳7,600** | 17.8% | ৳1,500 | ৳895 (11.8%) | 8.5x |
| Reflex Plus Adult, Urinary Chicken | 1.5 kg | ৳840 | ~~৳1,450~~ | **৳1,190** | 17.9% | ৳350 | ৳246 (20.7%) | 4.8x |
| Reflex Plus Adult, Urinary Chicken | 15 kg | ৳6,100 | ~~৳9,250~~ | **৳7,600** | 17.8% | ৳1,500 | ৳895 (11.8%) | 8.5x |
| Reflex Plus Adult, Hairball Salmon | 1.5 kg | ৳840 | ~~৳1,450~~ | **৳1,190** | 17.9% | ৳350 | ৳246 (20.7%) | 4.8x |
| Reflex Plus Adult, Hairball Salmon | 15 kg | ৳6,100 | ~~৳9,250~~ | **৳7,600** | 17.8% | ৳1,500 | ৳895 (11.8%) | 8.5x |
| Reflex Plus Kitten, Salmon | 1.5 kg | ৳840 | ~~৳1,450~~ | **৳1,190** | 17.9% | ৳350 | ৳246 (20.7%) | 4.8x |
| Reflex Plus Mother & Baby | 1.5 kg | ৳840 | ~~৳1,450~~ | **৳1,190** | 17.9% | ৳350 | ৳246 (20.7%) | 4.8x |
| Reflex Plus Mother & Baby | 8 kg | ৳3,800 | ~~৳6,340~~ | **৳5,200** | 18.0% | ৳1,400 | ৳981 (18.9%) | 5.3x |
| Reflex Plus Sterilised, Chicken | 1.5 kg | ৳840 | ~~৳1,450~~ | **৳1,190** | 17.9% | ৳350 | ৳246 (20.7%) | 4.8x |
| Reflex Plus Sterilised, Chicken | 15 kg | ৳6,100 | ~~৳9,900~~ | **৳8,200** | 17.2% | ৳2,100 | ৳1,400 (17.1%) | 5.9x |
| Reflex Plus Adult, Skin & Coat Salmon | 1.5 kg | ৳840 | ~~৳1,450~~ | **৳1,190** | 17.9% | ৳350 | ৳246 (20.7%) | 4.8x |
| Reflex Plus Adult, Choosy Salmon | 1.5 kg | ৳840 | ~~৳1,450~~ | **৳1,190** | 17.9% | ৳350 | ৳246 (20.7%) | 4.8x |
| Prostar Adult, Chicken | 15 kg | ৳4,100 | ~~৳6,580~~ | **৳5,400** | 17.9% | ৳1,300 | ৳744 (13.8%) | 7.3x |
| Prostar Kitten, Chicken | 15 kg | ৳4,100 | ~~৳6,580~~ | **৳5,400** | 17.9% | ৳1,300 | ৳744 (13.8%) | 7.3x |
| Prostar Sterilised, Salmon (Adult & Kitten) | 1.2 kg | ৳370 | ~~৳610~~ | **৳500** | 18.0% | ৳130 | add-on | n/a |
| Prostar Adult Sterilised, Salmon | 1.2 kg | ৳370 | ~~৳610~~ | **৳500** | 18.0% | ৳130 | add-on | n/a |

**Flat pricing.** All nine 1.5 kg recipes are ৳1,190. Same cost, same weight, same
brand, so the same price. An earlier pass priced Kitten ৳90 below Adult purely
because twelve shops list Adult and only nine list Kitten, so the median moved.
That was a gap in the data, not a difference in demand — and it priced our
highest-lifetime-value customer cheapest.

**Add-on SKUs.** The 400 g and both Prostar 1.2 kg bags are **never advertised** and
never an entry offer. At ৳80 and ৳130 of gross they cannot carry a parcel on their
own. Their job is to lift a basket over the free-delivery line at checkout.

**Monopoly SKUs.** Nobody in Bangladesh sells a Mother & Baby 8 kg or a Reflex Plus
Sterilised Chicken 15 kg, so both carry a premium instead of a market average.
(Nearest thing that exists: BD Pet Mart lists a *Reflex* — not Reflex Plus —
Sterilised **Salmon** 15 kg at ৳7,200, out of stock.)


### The 3-pack is the hero SKU

**"Meow Belle 3-Month Supply — 3 × 1.5 kg" at ৳3,390 (was ৳4,140).** Built as **one
product with its own page**, not three units in a cart.

**It exists to have a reason to exist.** Three singles cost ৳3,570, so the pack saves
**৳180**. Without that gap it is just a bigger basket with extra steps. ৳3,390 against
a ৳4,140 compare-at is 18.1% off, in line with the sitewide 18%.

**Five recipe variants, three identical bags in each.** Adult Chicken, Kitten Chicken,
Urinary Chicken, Hairball Salmon, Sterilised Chicken. Same price across all five.
**Never a mixed selection** — cats have sensitive stomachs and switching food causes
upset, so a variety pack would work against the product. It is also what makes the
symptom-first ad angles land: an ad about urinary trouble now has a 3-pack to point at.

It is the **primary advertised product alongside the 1.5 kg single**. At 4.5 kg it
still ships RedX (৳125).

**The 15 kg is not advertised.** It stays listed for people who go looking for it.

**Three months, and why that is defensible.** An adult cat of about 4 kg eats in the
region of 50 g of dry food a day, so 4,500 g is roughly 90 days. Two cats, about six
weeks. Reflex Plus does not publish its gram chart online — it is printed on the pack —
so every claim is worded as "roughly" and points the customer at the pack.
⚠️ **Confirm the printed chart before this goes into paid claims.**

**Inventory is manual.** The pack is a bundle of existing 1.5 kg stock, but Shopify has
no inventory tracker on it, so it can never show as sold out and it does not decrement
the singles. At launch volume that is fine. Wire it to decrement three units of the
matching 1.5 kg SKU per sale before volume makes hand-counting unsafe.

**Free delivery, and what that cost.** The pack is one line item, so the "2+ items"
rule missed it. Rather than reword the offer, it gets a **second automatic free-shipping
discount scoped to that product** — the site says free delivery, so the cart has to
agree. That is the ৳588 line in the contribution table, not the ৳648 one.

---

## Launch scope: Dhaka city only

Meta targets Dhaka city. **Shipping zones are Dhaka only and checkout is blocked for
every other district** — no exceptions. Orders from outside Dhaka go to a waitlist
capture instead of a cart. **Revisit after 60 days or 200 orders.**

---

## Delivery

Two methods, split by parcel weight. Real RedX rates, not estimates.

| | Under 5 kg | Over 5 kg |
|---|---|---|
| **Carrier** | RedX | Our own rider, Dhaka only |
| **Customer pays** | **৳70 flat** | **৳150** |
| **Free delivery** | **On 2+ items, or the 3-pack alone** | Never |
| **Our cost** | ৳65 at 1 kg, +৳15/kg | ~৳250 |
| **COD fee** | 0% inside Dhaka | none, we collect cash directly |
| **RTO** | 15% | ~5%, because every heavy order gets a phone call first |

**Live Shopify config (set 2026-07-27):** zone *Domestic (Bangladesh)* has two
weight-banded options — *Standard delivery* 0–5.0 kg at ৳70, and *Large bag - delivered by
our own team* 5.01 kg+ at ৳150. The automatic discount *"Free delivery on 2 bags or more"*
requires a minimum **quantity of 2 items** and **excludes shipping rates over ৳100**, so the
rider rate can never be discounted to free. A second automatic discount, *"Free delivery on
the 3-Month Supply"*, catches the 3-pack at a **minimum purchase of ৳3,000** and carries the
**same ৳100 rate exclusion**. (Shopify free-shipping discounts cannot be scoped to a product
— ৳3,000 is the equivalent, because the 3-pack is the only single item that reaches it. See
`README.md`.) Both exclusions protect the heavy-bag margin. **Do not remove either.**

⚠️ **Shopify cannot geo-restrict to Dhaka.** Its region list offers Bangladesh as a whole
country only, so checkout is technically open nationwide. Dhaka-only is enforced by Meta
targeting and ops until a checkout-rules app is added. See README.

**RedX will not carry a parcel over 5 kg.** That rules out every 8 kg and 15 kg SKU on
their network, which is why heavy bags exist as a separate delivery method at all.
**Heavy SKUs must be blocked from checkout entirely outside Dhaka.**

Product-page wording for heavy bags, as agreed:
> "Large bags delivered by our own team inside Dhaka, ৳150, 2 working days."

### RedX rate card (rounded up to the whole kg)

| Parcel | Billed at | Cost |
|---|---|---|
| 400 g / 1.2 kg / 1.5 kg | 1–2 kg | ৳65–80 |
| 2 × 1.5 kg = 3 kg | 3 kg | ৳95 |
| 3-pack = 4.5 kg | 5 kg | ৳125 |
| 8 kg, 15 kg | — | **not carried** |

---

## Contribution, Dhaka only

**Light SKUs** — RedX, customer pays ৳70, COD 0%, RTO 15%, packaging ৳20:

| Order | Revenue | Contribution | Margin | Break-even ROAS |
|---|---|---|---|---|
| 1 × 1.5 kg | ৳1,190 | ৳254 | 21.3% | 4.7x |
| 2 × 1.5 kg, charging delivery | ৳2,380 | ৳535 | 22.5% | 4.4x |
| 2 × 1.5 kg, free delivery | ৳2,380 | ৳476 | 20.0% | 5.0x |
| 3-pack, charging delivery | ৳3,390 | ৳648 | 19.1% | 5.2x |
| **3-pack, free delivery (live)** | ৳3,390 | **৳588** | 17.3% | **5.8x** |

⚠️ **The brief quoted ৳598 and ৳657 for the 3-pack, and the difference is not an error
in either.** Those figures value a returned parcel at **1×** the courier fee; every row
in this table and in the sheet values it at **1.5×**, on the basis that the return leg
costs more than the delivery. That is ৳10 an order, so it changes nothing — but the
table has to use one model or the rows stop being comparable, and 1.5× is the
conservative one already applied to the other twenty-one rows.

⚠️ **Read the 3-pack on contribution, not on break-even ROAS.** Dropping the price
৳3,570 → ৳3,390 to create the ৳180 saving cost ৳153 of contribution, and pushed
break-even from 4.8x to **5.8x — worse than a single bag's 4.7x**. That ratio is the
wrong lens here. Advertising costs roughly the same per order either way, and the 3-pack
returns **2.3× the contribution of a single bag** (৳588 against ৳254), so it can absorb
a CAC more than twice as large. Judge it on taka per acquired order.

**Heavy SKUs** — own rider ৳250, customer pays ৳150, no COD fee, RTO 5%:

| Order | Revenue | Contribution | Margin | Break-even ROAS |
|---|---|---|---|---|
| 8 kg | ৳4,850 | ৳871 | 18.0% | 5.6x |
| Mother & Baby 8 kg | ৳5,200 | ৳1,204 | 23.2% | 4.3x |
| 15 kg Reflex | ৳7,600 | ৳1,298 | 17.1% | 5.9x |
| Sterilised 15 kg | ৳8,200 | ৳1,868 | 22.8% | 4.4x |
| Prostar 15 kg | ৳5,400 | ৳1,108 | 20.5% | 4.9x |

**Heavy bags got much better.** The 15 kg went from ৳895 to ৳1,298 contribution,
because our own rider plus a confirmation call cuts RTO from 15% to 5% and the
customer covers ৳150 of a ৳250 run.

### The free-delivery test

Free delivery on 2+ items costs about **৳60** versus charging (৳535 → ৳476).

⚠️ **The break-even threshold in the brief was ~40%. On the new numbers it is ~21%.**
An induced upgrade from one bag to two gains ৳222 (৳476 − ৳254) and a non-induced
order loses ৳60, so break-even is 60 ÷ (222 + 60) = 21%. The 40% figure was correct
under the old cost assumptions, when the offer cost ৳111 rather than ৳60.

**The offer is now much more likely to pay for itself than the brief assumed.** Still
worth testing: **disable it for two weeks after month one and compare units per order.**

---

## Subscribe & Save — removed

Deleted from the site on 2026-07-27. It was set to 15% off, which:

- gave away ৳179 of a ৳246 contribution, **61% of the margin**;
- **stacked** with the 18% founding badge to display 33% off;
- barely functions anyway, since Shopify subscriptions need a card on file and this
  market is cash on delivery.

**Replacement:** a WhatsApp reorder nudge on **day 24** with a one-tap repeat-order
link. No discount attached. *(Not built yet — see README todos.)*

**Revisit later** as a paid subscription on the **15 kg only**, where there is ৳895 of
contribution to work with.

### Promo codes are gone too

`MEOW20` (20%), `WELCOME10` (10%) and `PURR15` (15%) stacked on top of the founding
18%. `MEOW20` took a ৳1,190 bag to ৳952 and left roughly ৳62 of contribution against
৳246 — three quarters of the margin. The offer is one flat 18%, so there is nothing
left for a code to discount.

---

## Where we sit in the market

৳1,190 is a **premium position**, not mid-market. Every well-stocked shop in the
country is cheaper on the 1.5 kg bag:

| | 1.5 kg |
|---|---|
| Pet Zone BD, Pet Elements BD, AmarPet, Mew Mew Shop | ৳1,050 |
| Miki Pet Store | ৳1,090 |
| **Meow Belle** | **৳1,190** |
| SB Pet Shop | ৳1,150 – ৳1,250 |
| Pet Town BD, Pure Pets Food | ৳1,300 |
| Rokomari | ৳1,399 |
| Daraz third-party sellers | ৳1,450 – ৳1,999 |

We are ৳100–140 above the shops a customer will actually compare us against. The
founding-customer framing is what carries that gap. The site, the photography and
the delivery promise have to earn it — nobody pays a premium for a bag of food they
can buy cheaper elsewhere in two clicks.

**Prostar is the exception.** Only two shops in the country stock it and one is fully
out of stock, so there is no real comparison — but its ceiling is low, which is why
Prostar's discount is the thinnest in the range.

---

## Two numbers still to reconcile

Both are small and both are flagged in the sheet. Neither blocks anything.

1. **1.5 kg contribution.** We use **৳246**. The stated assumptions (courier ৳100 +
   ৳20/kg over 1 kg, customer pays ৳130, COD 1% of order value, packaging ৳20,
   RTO 15% at 1.5x outbound) actually produce **৳263** — because the customer's ৳130
   more than covers a ৳110 courier on a light parcel. We kept the lower number as the
   conservative one. It moves the free-delivery break-even test from 41% to 43%.
2. **Sterilised 15 kg compare-at.** ৳9,900 against ৳8,200 is **17.2% off, not 18%**.
   ৳10,000 would be exactly 18% and is a rounder number.

---

## Changing a price

1. Edit `assets/js/products.js` — `price` and `compareAt` on every variant. It is the
   machine-readable source of truth.
2. Update this file and `PRODUCTS.md`.
3. Regenerate the Shopify import CSV (see README) and import it with **"Overwrite
   existing products with the same handle"** ticked.
4. Never hand-edit the import CSV. It is downstream of `products.js`, not beside it.
