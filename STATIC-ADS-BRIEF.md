# Meow Belle — static ad brief + prompt JSON schema

> Purpose: creative direction + a consistent JSON format for generating **static ad
> creatives** (image-gen prompts) for Meow Belle. Read this + `PRODUCTS.md` before writing ads.
> Separate private business — cat food for Bangladesh. Never mix with Mindframe.

> **Current set:** `static-ad-prompts.json` (repo root) — 8 ads, 1:1, all angles rotated. Each
> leads with a **Real protein · No fillers · Vet formulated** feature strip, and `image_prompt`
> composites a **provided product image + logo** (real pack art) rather than asking the model to
> draw the bag. Two added fields beyond the schema below: `features` and `provided_assets`.

> 🎯 **Read `ICP-RESEARCH.md` before writing any ad.** It is the foundational research doc:
> who buys, why, the exact objections, the competitor ad landscape, and which angles are dead.
> It supersedes the one-line audience note that used to sit here. Short version: lead with a
> named cat problem or the 3-pack, never with "premium" or "37% protein" on their own, and
> never with a plain bag of food.

## Brand snapshot
- **What:** premium cat food (Reflex Plus + Prostar). **Dhaka city only.**
- **Audience:** see `ICP-RESEARCH.md` Part 3. Two targets: the **anxious new cat parent**
  (21-30, first cat, usually a rescue, terrified of doing it wrong) and the **problem solver**
  (cat has a visible symptom or a vet just said change the food, price sensitivity near zero).
  **Not** the multi-cat rescuer buying 15 kg sacks; we lose that one on price every time.
- **Tone:** playful, confident, warm. Cat-forward humour. Plain English, **no jargon**.
- **Selling points:** real meat first · up to **37% protein** · no fillers · hypoallergenic ·
  vet-formulated · from **৳500** · COD · bKash · Nagad · free delivery on 2+ bags.

## Visual identity
- **Colours:** electric blue `#012BF8` (hero background), amber `#FFC24B` (accent/CTA),
  ink `#0A0E1A`, white `#FFFFFF`. Occasional coral `#FF5436` for urgency.
- **Type:** **Fredoka** (heavy, rounded, chunky display) for headlines; clean sans for body.
  Headlines are big, tight, mostly white with **one word in amber**.
- **Logo:** black fluffy cat peeking out of a "Meow Belle" bag (`Logo.png`). Usually
  bottom-left or on a prop (e.g. a cap).
- **Signature layout (the Meow Belle formula):** ONE hero (a real cat, or the product bag)
  on a **flat electric-blue background**, big rounded headline up top, the tagline
  **"Now in Bangladesh."** near it, logo small. Poster-clean, high-contrast, uncluttered.
- **Reference art:** see `Instagram Feed/` — e.g. hand+paw high-five "Join the Pet Club",
  cool cat in a green Meow Belle cap "High protein. Real cat food." Match that energy.

## Formats
- IG feed portrait **4:5** → `1080x1350` (default)
- IG feed square **1:1** → `1080x1080`
- Story / Reel **9:16** → `1080x1920`

## Messaging angles

⚠️ **Revised 2026-07-27 after `ICP-RESEARCH.md`.** The old rotation led with claims that 26 of
58 live competitor ads already make. Dead angles: **"Now in Bangladesh"** (nobody cares, and
Reflex Plus has been here for years), **"37% protein / zero filler" as a headline**, and
**price-led value ads** (they invite the ৳1,050 comparison we lose).

**Test these three concepts instead** (1 CBO, 3 ad sets, one concept per set):
1. **Symptom-first** — name the problem in the first three words. Straining in the litter box
   (Urinary) · daily hairballs (Hairball) · won't touch the bowl (Choosy) · shedding everywhere
   (Skin & Coat). Land on that product page, not the homepage.
2. **The stock-out** — "the food she eats is the one you can't find." Lead the 3-Month Supply.
   The one promise 12 resellers structurally cannot make.
3. **New kitten** — 37% protein belongs here, answering "is she growing properly," not floating
   free as a premium claim.

Support lines (never headlines): COD · free delivery on 2+ bags · sealed, never repacked ·
Turkish import.

## Ad-prompt JSON schema
Each ad = one JSON object. Produce arrays of these.

```json
{
  "id": "mb-ad-001",
  "concept": "one-line big idea",
  "angle": "launch | high-protein | value | fussy-eater | kitten | delivery-cod | trust | recipe-spotlight",
  "format": "4:5",
  "dimensions": "1080x1350",
  "headline": "Short, punchy. Front-loaded.",
  "subhead": "Optional one-line support (or null).",
  "tagline": "Now in Bangladesh.",
  "cta": "Order at @meowbelle.bd",
  "product_handle": "reflex-kitten-chicken | null",
  "visual": {
    "subject": "the hero — a specific cat and/or the product bag",
    "action": "what it's doing",
    "background": "flat electric-blue (#012BF8)",
    "props": ["optional props, e.g. a green Meow Belle cap"],
    "mood": "playful, bold, premium",
    "composition": "hero centered/low; headline top; logo bottom-left",
    "logo_placement": "bottom-left"
  },
  "palette": ["#012BF8", "#FFC24B", "#FFFFFF", "#0A0E1A"],
  "typography": "Fredoka heavy rounded; white headline with one amber word",
  "image_prompt": "Full text prompt for the image model. Describe the scene, subject, lighting, style (photoreal cat vs flat illustration), background colour, and where text/logo sit. Be specific and self-contained.",
  "text_overlay": "EXACT copy to render on the image, spelled correctly (headline + tagline + cta). Proofread — a launch typo gets screenshotted.",
  "negative": "no clutter, no competitor brands/logos, no watermarks, no gibberish text"
}
```

## Worked example
```json
{
  "id": "mb-ad-001",
  "concept": "Cool cat endorses the food — high-protein flex",
  "angle": "high-protein",
  "format": "4:5",
  "dimensions": "1080x1350",
  "headline": "37% protein. Zero filler.",
  "subhead": "Real meat your cat will actually vibe with.",
  "tagline": "Now in Bangladesh.",
  "cta": "Order at @meowbelle.bd",
  "product_handle": "reflex-kitten-chicken",
  "visual": {
    "subject": "a fluffy ginger cat wearing tiny white earphones, looking cool and content",
    "action": "sitting upright, slight head tilt, tongue peeking",
    "background": "flat electric-blue (#012BF8), no gradient",
    "props": ["green Meow Belle cap tilted low"],
    "mood": "playful, premium, effortlessly cool",
    "composition": "cat centered lower-two-thirds; bold headline across the top; small logo bottom-left",
    "logo_placement": "bottom-left"
  },
  "palette": ["#012BF8", "#FFC24B", "#FFFFFF", "#0A0E1A"],
  "typography": "Fredoka heavy rounded; white headline, the word 'protein' in amber",
  "image_prompt": "Studio portrait of one fluffy ginger cat on a perfectly flat electric-blue (#012BF8) background, wearing tiny white wired earphones and a green baseball cap embroidered 'Meow Belle', calm confident expression, soft even lighting, sharp focus, poster/advertising style, generous empty space at top for a headline. No other objects.",
  "text_overlay": "37% protein. Zero filler. / Now in Bangladesh. / Order at @meowbelle.bd",
  "negative": "no clutter, no competitor brands, no watermarks, no distorted text, no extra animals"
}
```

## Do / don't
- ✅ Keep prices in **৳**. ✅ Cat-forward, one hero, lots of blue space. ✅ Proofread overlay text.
- ❌ **No em dashes** in any copy. ❌ No competitor logos/watermarks. ❌ No cluttered collages.
- ❌ Don't invent product claims — pull real specs from `PRODUCTS.md`.

---

## Offer & price claims (2026-07-27)

**Every ad must match `PRICING.md`.** Read it before writing a price into creative.

- **The offer is "Founding customer price — first 500 cat parents."** Not a launch sale,
  not a seasonal discount. Flat **18% off** our own regular price, sitewide.
- **Never advertise the 400 g (৳320) or Prostar 1.2 kg (৳500).** They are checkout add-ons.
  A "from ৳320" hook buys us the customer who orders one light bag and never returns.
  If a price hook is needed, use the 1.5 kg at **৳1,190 (was ৳1,450)**.
- **Delivery claim:** "Dhaka city, ৳70 flat, free on 2 bags or more." Large bags (8 kg and
  15 kg) are "delivered by our own team inside Dhaka, ৳150, 2 working days."
  Do **not** write "free delivery over ৳X" or "৳130 nationwide" — both rules are dead.
- **No Subscribe & Save, no promo codes.** Both removed. `MEOW20`, `WELCOME10` and
  `PURR15` no longer exist and must not appear in creative.
- **Never attribute the was-price to a competitor.** ৳1,450 is *our* regular price.
- **Dhaka city only.** Never claim nationwide delivery. Target Dhaka city in Meta.
  ⚠️ Checkout is **not** technically blocked outside Dhaka — Shopify cannot geo-restrict
  below country level — so sloppy targeting produces orders we cannot fulfil. See README.
- **Lead with the 3-pack** (৳3,570, was ৳4,350) or the 1.5 kg single (৳1,190, was ৳1,450).
  **Never advertise the 15 kg** — it stays listed for people who go looking for it.
