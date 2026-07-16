# Meow Belle — static ad brief + prompt JSON schema

> Purpose: creative direction + a consistent JSON format for generating **static ad
> creatives** (image-gen prompts) for Meow Belle. Read this + `PRODUCTS.md` before writing ads.
> Separate private business — cat food for Bangladesh. Never mix with Mindframe.

## Brand snapshot
- **What:** premium cat food (Reflex Plus + Prostar), delivered across Bangladesh.
- **Audience:** BD cat parents — young, urban (Dhaka/Chattogram), IG-active, care about quality.
- **Tone:** playful, confident, warm. Cat-forward humour. Plain English, **no jargon**.
- **Selling points:** real meat first · up to **37% protein** · no fillers · hypoallergenic ·
  vet-formulated · from **৳240** · COD · bKash · Nagad · free delivery over ৳2,000.

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

## Messaging angles (rotate these)
launch ("Now in Bangladesh") · high-protein · value/price (from ৳240) · fussy-eater
("she finally ate it") · kitten/growth · delivery + COD · brand trust (vet-formulated, no
fillers) · specific recipe spotlight (pull from `PRODUCTS.md`).

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
