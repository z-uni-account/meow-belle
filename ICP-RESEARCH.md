# 🎯 Meow Belle — ICP & buyer research (foundational doc)

> **Separate private business.** Meow Belle only. Never mix with Mindframe.
>
> **What this is.** The foundational research document behind every ad, every headline,
> every product page. Built on the Mark Builds Brands "Foundational Docs" process
> (*Zero to $1K/day*, Section 6): before you write a word of copy, you build deep research
> on who you sell to, why they buy, what emotional buttons exist, how they talk, and what
> objections they raise. Everything downstream gets easier if this exists and harder if it
> does not.
>
> **How to use it.** Feed this file to Claude alongside `PRODUCTS.md` and `PRICING.md`
> before generating any ad copy, static-ad JSON, product description or landing page.
> Do not write creative from imagination when this file exists.
>
> Built **2026-07-27**. Sources at the bottom. Anything I could not verify is flagged
> **[UNVERIFIED]** rather than smoothed over.

---

## TL;DR — the five things that change what we do

1. **"Premium cat food in Dhaka" is a red ocean and we lose it.** We sell an identical bag
   that three shops have in stock right now at ৳1,050. We charge ৳1,190. Two local brands
   sell at roughly ৳330/kg against our ৳793/kg. We cannot win a price argument and we
   cannot win a "premium quality" argument, because every shop in the market already
   shouts "১০০% অরিজিনাল, প্রিমিয়াম."

2. **Half the market is out of stock.** Of the 90 competitor listings we logged, **47 are
   in stock. 52%.** On the problem-specific recipes it collapses: Choosy 2 of 4, Hairball
   3 of 8, Skin & Coat 3 of 7, Urinary 4 of 8. And the cheapest listings are usually the
   dead ones (BD Pet Mart's ৳850, Pet Zone's ৳1,050, AmarPet's ৳1,050 are all out of stock).

3. **That is the purple ocean.** We are not in the cat food business. We are in the
   *"my cat has a specific problem, the vet or the internet told me to change her food, and
   the food that fixes it is out of stock everywhere"* business. Our catalogue is already
   built for it: 9 recipes, 7 of them problem-specific. Nobody in Bangladesh advertises
   this way. Every competitor ad we pulled is a generic shop ad.

4. **Picky eating is the market's deepest fear, and it is a switching fear.** Cats refuse
   new brands. Supply is unreliable. So a stock-out forces a diet change, the diet change
   upsets the cat, and the owner blames the food. This one loop explains most of the
   anxiety in this market, and it is the emotional core of both our best angle (reliable
   supply) and our biggest objection (will she even eat it).

5. **The single bag is close to unwinnable on cold traffic.** ৳1,190 at 21% contribution
   is a 4.7x break-even ROAS. The 3-pack at ৳3,570 earns ৳741 for roughly the same ad cost.
   Every cold ad should be pointed at the 3-pack or at a problem, never at "a bag of food."

---

# PART 1 — The market, in numbers

## 1.1 Size and direction

| Fact | Number | Source |
|---|---|---|
| Total pet food + accessories market | ~Tk 200 crore/yr, growing **20%+/yr** | Daily Star, 2023 |
| Cat food specifically | **Tk 100–150 crore/yr** (industry estimate, no official data) | Chonk co-founder, TBS 2025 |
| Cats as share of pets | **~90%** of pet ownership | PetfoodIndustry |
| Projected pet food market | $308.5m by 2028 (+9.52%) | Statista via Daily Star |
| Import tax on cat food | **50%** — classed as a **luxury item** | TBS 2025 |

Two things follow. The category is growing fast enough that a new brand can enter. And the
50% luxury tax is *why* everything is expensive, which means price complaints are not really
about us. That is useful.

## 1.2 The price ladder (per kg)

| Tier | Brands | ৳/kg |
|---|---|---|
| Ultra premium | Royal Canin, Hill's | 950–1,500+ |
| **Premium import** | **Reflex Plus**, Bonacibo, Kaniva | **550–900** |
| Mid | SmartHeart, Whiskas, Me-O, Lara | 550–650 |
| Budget import | Drools, Kat Club | 400–450 |
| Loose / repacked | unbranded, mixed | 350–400 |
| **Local manufacture** | **Chonk ৳332, Oskies ৳320** | **320–350** |

**Meow Belle sits at ৳793/kg** (৳1,190 ÷ 1.5 kg). That is the **top of the premium-import
band**, just under Royal Canin territory, and **2.4x the local brands**.

⚠️ This is the number to internalise. We are not "a bit above the shops." On a per-kg basis
we are near the ceiling of the mainstream market. Nothing in our creative can pretend
otherwise. We either justify it or we lose.

## 1.3 Availability, the finding that reframes everything

From our own 90-row competitor sweep (`2026-07-27-all-competitor-listings.csv`):

| Product | Listings | In stock |
|---|---|---|
| Prostar Kitten 15 kg | 1 | **0** |
| Reflex Plus Choosy Salmon | 4 | **2** |
| Reflex Plus Sterilised Chicken | 3 | **2** |
| Reflex Plus Hairball Salmon | 8 | **3** |
| Reflex Plus Kitten Salmon | 5 | **3** |
| Reflex Plus Skin & Coat Salmon | 7 | **3** |
| Reflex Plus Urinary Chicken | 8 | **4** |
| Reflex Plus Mother & Baby | 7 | **5** |
| Reflex Plus Adult Chicken | 21 | 11 |
| Reflex Plus Kitten Chicken | 20 | 11 |
| **All** | **90** | **47 (52%)** |

And this is not random. It matches what the industry says about itself:

> "Another major concern with these products is the market's heavy syndication. Availability
> is unpredictable, you don't always get them when you need them. Pet food vendors often hoard
> stock and claim it's unavailable, creating artificial shortages."
> — Muhammed Asif Khan, Chonk co-founder, TBS

> "This becomes a big problem for cat owners since felines are extremely picky eaters and
> often refuse to switch brands. When supplies run out unexpectedly, finding the same product
> immediately can be a struggle. A sudden change in diet can disrupt a cat's digestion and
> overall well-being, so delays in getting their usual food can be quite stressful for both
> the pet and the owner."
> — same source

**On the flagship bag the discount gap is real** (Pet Elements, Miki and Mew Mew are genuinely
in stock at ৳1,050–1,090). **On the problem recipes, it mostly is not.** That split should
drive which SKUs we advertise.

## 1.4 What competitors actually run as ads

Pulled 120 live Meta ads targeting Bangladesh, keyword "cat food" and "বিড়ালের খাবার"
(2026-07-27, active only, sorted by impressions). 58 unique pet ads after cleaning.

Word frequency across those ads:

| Claim | Mentions |
|---|---|
| premium / প্রিমিয়াম | 26 |
| price / দাম | 23 |
| **original / অরিজিনাল / ১০০% / authentic** | **21** |
| health | 16 |
| free / free delivery | 17 |
| discount / offer / অফার | 22 |
| kitten | 7 |
| **urinary** | **3** |
| **vet** | **4** |
| **skin / coat** | **2** |
| **hairball** | **0** |

**Everyone is a shop, nobody is a brand.** Pet Zone BD (203k page likes), Miki Pet Store
(128k), Amarpet (106k), Decent Pet Shop (82k). Their ads all say the same four things:
we stock everything, it is 100% original, delivery is free or cheap, here is 5% off.

Real examples:

- **Pet Zone BD:** "১০০% অরিজিনাল ও কোয়ালিটি প্রোডাক্ট… এখন আর বাইরে যাওয়ার ঝামেলা নেই"
  (100% original and quality products… no more hassle of going outside)
- **Miki:** "💯 100% Original Products 🚚 Nationwide Home Delivery ❤️ Trusted Pet Store"
- **Amarpet:** "১০০ ভাগ অথেনটিক ও ইমপোর্টেড প্রোডাক্ট" (100% authentic and imported)
- **Petsmart BD** attacking on origin: "কেন আপনার বিড়ালকে সস্তা ও নিম্নমানের থাইল্যান্ড,
  মালয়েশিয়ার খাবার খাওয়াবেন?" (why feed your cat cheap low-quality Thai and Malaysian food?)
  — country of origin is used as a quality proxy in this market. **Reflex Plus is Turkish,
  European-standard. That is an asset we have not used.**
- **Oskies** (local brand, ৳320/kg) is the sharpest copy in the market:
  "বিড়ালরা একটা জিনিসে খুব এক্সপার্ট। যেটা পছন্দ না, সেটা দ্বিতীয়বার ছুঁয়েও দেখবে না।
  আর যেটা পছন্দ হয়ে যায়... তুমি বুঝে ওঠার আগেই বাটিটা খালি।"
  (Cats are expert at one thing. What they don't like, they won't touch twice. And what they
  do like, the bowl is empty before you notice.) Then: *"International Quality. Bangladeshi
  Price. প্রতিদিন ১০০+ Cat Parent Oskies-এ switch করছে।"*

**The gap:** not one advertiser in the pull sold a *solution to a named cat problem*. Zero
hairball ads. Three urinary mentions across 58 ads. That is the opening.

## 1.5 The two competitors that actually matter

Forget the pet shops. They are distribution, not brands, and their ads are wallpaper.

**Chonk** — Bangladesh's first locally manufactured cat food, launched Nov 2024.
- ৳499 for 1.5 kg (**৳332/kg**), ৳149 for a 300g sampler
- BSTI certified, German lab formulation, AAFCO/FEDIAF standards, factory inside Dhaka
- **Free shipping inside Dhaka**, 50 to 200+ retail outlets, expanding to ~300
- Press in Financial Express, TBS, Daily Star, Prothom Alo
- Positioning: anti-syndicate, anti-counterfeit, "Trusted by Vets. Loved by Cats"
- Enforces MRP at retailers so it "cannot be turned into loose or repacked cat food"
- Fixed their kibble shape and oil coating after customers reported odour and digestibility
  complaints, which tells you they listen and iterate

**Oskies** — local, ৳320/kg for 1 kg, free Dhaka delivery, 27k page likes, running the best
creative in the category.

⚠️ **We cannot beat either on price, delivery, or local-brand goodwill.** They are 2.4x
cheaper and ship free. Any ad of ours that argues "good food at a good price" walks straight
into them and loses. This is exactly Mark's red ocean.

## 1.6 Who owns cats in Bangladesh

- Cats are ~90% of pet ownership; import demand around $43m/yr *(PetfoodIndustry)*
- **University-educated young adults, skewing women aged 21–30, in Dhaka and other large
  cities, keeping cats indoors** *(PetfoodIndustry)*
- Monthly spend: **৳1,000–3,000 on food**, ৳500–1,000 litter and supplies, ৳5,000–10,000/yr
  vaccines and grooming *(Arogga)*. One owner quoted at "more than Tk 3,000 per month for
  two cats" *(Daily Star)*
- A large and growing **independent rescuer/adopter** population in Dhaka, driven by a decade
  of rescue and spay campaigns *(Daily Star)*. Dedicated cat infrastructure now exists:
  Biral Bari sanctuary in Bashundhara (~70 cats), MeowMatch BD and PetBhai adoption platforms
- **Pet humanisation** is explicitly the driver: owners treating cats as family members and
  buying to their own standard of living *(Daily Star)*
- Cat keeping is religiously encouraged, which matters in this market:
  "বিড়াল পালন বৈধ তবে তার সঠিক যত্ন নেয়া জরুরী" (keeping a cat is permitted, but proper
  care of it is obligatory) *(Arogga)*. **Care is framed as a duty, not a preference.** That
  is a much stronger emotional lever than "spoil your pet."

---

# PART 2 — Purple ocean: where Meow Belle actually competes

Mark's Purple Ocean rule: do not enter a market with no competition (no demand) and do not
fight in the saturated middle (no margin). Enter a proven market and **carve out a
hyper-specific slice.** "If you try to sell to everybody, you're really selling to nobody."

Applied here, this is the whole strategic call:

| | |
|---|---|
| ❌ **Red ocean (do not fight here)** | "Premium cat food in Bangladesh." Twelve shops sell our exact bag, three cheaper and in stock. Two local brands are 2.4x cheaper with free delivery. Every ad in the category already claims premium and original. |
| ❌ **Blue ocean (does not exist)** | No demand problem to invent. Cat food demand is proven and growing 20%/yr. |
| ✅ **Purple ocean (ours)** | **The specific problem recipes that half the market cannot keep in stock.** Urinary, hairball, fussy eater, skin and coat, sterilised weight gain, kitten growth, nursing mother. Proven demand (the SKUs exist and shops list them), thin competition (they are out of stock 50–75% of the time), zero advertising (0–3 mentions across 58 live ads). |

**Our catalogue was already built for this and we have been advertising it as if it were not.**
Nine 1.5 kg recipes, seven of them named after a problem. The current ad set leads with
"37% protein. Zero filler." That is a red-ocean claim. Every shop in Dhaka says it.

## 2.1 The sub-niches, ranked

Following the doc's format. Each one is a specific problem, a felt emotional pain, a
product we already stock, and a reason we can win it.

---

**1. The blocked or straining male cat** ⭐ strongest
- **Category:** urgent feline health
- **Specific problem:** cat goes to the litter box repeatedly, strains, produces nothing or
  produces blood. In male cats this is a life-threatening emergency within 24–48 hours.
- **Emotional pain:** pure fear. The owner has either just come back from a vet with a bill
  and an instruction to change the food permanently, or is watching it happen and panicking.
  Price sensitivity at this moment is close to zero.
- **Our product:** Reflex Plus Adult Urinary Chicken 1.5 kg, ৳1,190.
- **Why we win it:** 8 competitor listings, **4 in stock**. Zero advertisers in the category
  target this. Risk factors are exactly the profile of a Dhaka cat: indoor, less active,
  exclusively dry food *(AVMA)*. Male cats are anatomically predisposed *(veterinary
  consensus)*. It is also **repeat-forever demand**, because once a cat has blocked the vet
  puts it on urinary food for life. Highest lifetime value buyer in the entire catalogue.
- ⚠️ **Guardrail:** never claim we treat, cure or prevent a disease. Frame as "the food vets
  put urinary cats on" and point people to a vet. Medical overclaim is the one thing that can
  actually hurt us.

**2. The cat who will not eat** ⭐ strongest
- **Specific problem:** owner bought a bag, cat sniffed it and walked away. Or the usual brand
  vanished from every shop, the owner was forced to switch, and now the cat is refusing food
  and the owner is watching an expensive bag go stale.
- **Emotional pain:** helplessness plus guilt plus wasted money. This is the single most
  universally shared experience in this market, and both Chonk and Oskies build copy on it.
- **Our product:** Reflex Plus Adult Choosy Salmon 1.5 kg, ৳1,190.
- **Why we win it:** **2 of 4 listings in stock**, the scarcest recipe in the sweep. And it is
  the only product in the category whose *name is the objection.* The bag is literally called
  Choosy. That is a rare gift: the product answers the market's loudest fear on the packaging.
- **The catch:** this angle raises the "will she eat it" objection at the same time it solves
  it, so it needs a risk-reversal at the offer level (see 6.3).

**3. Hairballs and shedding all over the flat**
- **Specific problem:** cat retches up hairballs on the floor; fur is on every surface of a
  small Dhaka apartment; long-haired Persians (very common locally) are the worst.
- **Emotional pain:** it is disgusting, it is daily, it is embarrassing when guests come, and
  the owner half-suspects it means the cat is unwell.
- **Our product:** Reflex Plus Adult Hairball Salmon 1.5 kg (5% fibre), and Skin & Coat Salmon
  for the shedding side.
- **Why we win it:** Hairball **3 of 8 in stock**, Skin & Coat **3 of 7**. **Zero hairball ads
  in the market.** AmarPet has run two separate Bengali blog posts on cat shedding, which tells
  us the search demand is there and nobody is monetising it with ads.

**4. The new kitten, and the terror of doing it wrong**
- **Specific problem:** a first kitten arrives, usually rescued or gifted. The owner has no
  idea what to feed it and is being told conflicting things (rice and fish from family, dry
  food from the internet, something else from the shop).
- **Emotional pain:** anxiety about causing harm. Kittens are fragile and this owner knows it.
  The local guidance is blunt about it: insufficient protein causes disease, homemade food is
  either bacterially risky (raw) or nutritionally empty (boiled) *(Mew Mew Shop BD)*.
- **Our product:** Reflex Plus Kitten Chicken (37% protein, 20% fat) and Kitten Salmon.
- **Why we win it:** it is the **entry point to a 12 to 15 year customer**, and 37% protein is
  a genuinely strong number to put on a poster. Kitten Chicken is our most-listed competitor
  SKU (20 listings, 11 in stock) so competition is real here, but the buyer's willingness to
  pay for reassurance is higher than at any other life stage.
- **This is the highest-LTV acquisition, so never discount it hardest.** The flat ৳1,190 across
  all recipes already fixed the earlier mistake of pricing kittens cheapest.

**5. Post-spay weight gain**
- **Specific problem:** cat was spayed or neutered (Dhaka has had a decade of rescue-and-spay
  campaigns, so this population is large), and then got fat and lazy on the same food.
- **Emotional pain:** visible guilt, "I did this to her," plus real worry about diabetes and joints.
- **Our product:** Reflex Plus Sterilised Chicken (12% fat vs 14% adult), Prostar Sterilised Salmon.
- **Why we win it:** **2 of 3 listings in stock**, and **nobody in Bangladesh sells the
  Sterilised Chicken 15 kg at all** *(our own sweep)*. Spay/neuter is culturally normalised
  here in a way it is not in much of South Asia, so the addressable base is unusually large.

**6. The nursing mother and her litter**
- **Specific problem:** a pregnant or nursing cat, often a rescue, needs far more energy than
  adult food provides, and so do kittens weaning off her.
- **Emotional pain:** rescuer responsibility. Frequently an accidental litter the owner is
  now committed to keeping alive.
- **Our product:** Reflex Plus Mother & Baby (32% protein, 22% fat), 1.5 kg and 8 kg.
- **Why we win it:** **nobody in Bangladesh sells the Mother & Baby 8 kg.** Monopoly SKU.
  Small audience, but it converts on need, not price, and it ties directly into the rescue
  community which is the most connected, most word-of-mouth-driven segment in this market.

**7. "Is this even real food?"**
- **Specific problem:** the owner does not trust what is in the bag. Counterfeit and repacked
  food is an active, documented problem: mixed branded and unbranded food sold loose at
  ৳350–400/kg with no quality assurance, plus counterfeit incidents that caused vomiting and
  diarrhoea and directly triggered Chonk's founding in April 2024.
- **Emotional pain:** betrayal and suspicion. Every ad in the market screams "১০০% অরিজিনাল"
  precisely because nobody believes anybody.
- **Our product:** the whole catalogue, sourced and sealed.
- **Why this is a *support* angle, not a lead angle:** 21 of 58 competitor ads already make
  this exact claim. Leading with it makes us sound like everyone else. It belongs on the
  product page and in the second line of an ad, not in the headline.

**8. Reliable supply** ⭐ the brand-level position
- **Specific problem:** the food my cat eats disappears from every shop and I have to switch,
  which upsets her stomach, and then I have to switch again when it comes back.
- **Emotional pain:** low-grade dread, repeated monthly. Documented by the Chonk founder and
  visible in our own 52% stock rate.
- **Our product:** the 3-Month Supply (3 × 1.5 kg, ৳3,570) is *literally the solution to this
  problem* and we have been selling it as "a bulk discount."
- **Why this is the strongest brand-level position we have:** it justifies the ৳140 premium
  without arguing about quality, it converts our margin-best SKU, and it is the one thing
  a 12-shop reseller market structurally cannot promise.

## 2.2 The ranking, for ad-testing order

| Rank | Sub-niche | SKU | Competitor stock | Ads in market |
|---|---|---|---|---|
| 1 | Won't eat / fussy | Choosy Salmon | 2 of 4 | 0 |
| 2 | Straining to pee | Urinary Chicken | 4 of 8 | ~3 mentions |
| 3 | 3 months, no stock-outs | 3-Month Supply | n/a | 0 |
| 4 | Hairballs / shedding | Hairball + Skin & Coat | 3 of 8, 3 of 7 | 0 |
| 5 | New kitten | Kitten Chicken | 11 of 20 | 7 mentions |
| 6 | Post-spay weight | Sterilised Chicken | 2 of 3 | 0 |
| 7 | Nursing mother | Mother & Baby | 5 of 7 | 0 |

---

# PART 3 — Foundational Doc 1: WHO we are selling to

Three segments. Two we want. One is a trap.

## 🟢 Segment A — The Anxious New Cat Parent

**Roughly 21 to 30, university-educated, skewing female, Dhaka, indoor cat, 0 to 12 months in.**

Her first cat was usually rescued off the street or handed to her by a friend whose cat had
kittens. She did not plan this. She is now responsible for a life and she is treating it with
the seriousness of a new parent, because that is exactly what the culture tells her to do:
keeping the cat is permitted, caring for it properly is obligatory.

She researches constantly and trusts almost nobody. She reads the Bengali pet blogs, she asks
Facebook groups, she watches what other cat parents post. Her mother thinks rice and fish is
fine. The internet says that will hurt the cat. She does not know who is right and it worries her.

- **Spends:** ৳1,000–3,000/month on food. A ৳1,190 bag is a considered purchase, not a casual one.
- **Buys:** online, Facebook page inbox or a shop's site, cash on delivery.
- **Cares most about:** not doing damage. Growth, protein, "is this the right food for her age."
- **What she is scared of:** feeding something that turns out to be fake or bad; the cat getting
  sick and it being her fault.
- **Why she matters:** she is the **highest lifetime value buyer in the market.** A cat lives
  12 to 15 years. Capture her at kitten stage and you own a decade of ৳1,190 bags.

## 🟢 Segment B — The Problem Solver

**Any age, any income above middle, one to three cats, has just had a scare.**

Something is wrong. The cat is straining in the litter box. Or throwing up hairballs every
morning. Or has stopped eating for two days. Or the vet has just said the words "change her
food." This person was a normal cat owner a week ago and is now researching cat nutrition at
2am.

- **Price sensitivity:** temporarily near zero. She has just paid a vet bill. A ৳140 difference
  on the bag that fixes it is not a consideration.
- **Urgency:** extreme. She wants it today, not "in stock next week."
- **What she is scared of:** the cat getting worse; being the person who ignored the signs.
- **Why she matters:** **this is our buyer.** Highest intent, lowest competition, least price
  resistance, and on urinary and sterilised the prescription is permanent, so she becomes a
  repeat customer by medical necessity rather than by loyalty.
- **The catch:** she is small in number on any given day. This is a *targeting-by-creative*
  problem, not a targeting-by-audience problem. The ad has to name her exact symptom so she
  self-identifies out of a broad audience. That is precisely what Mark means by "creatives ARE
  your targeting in 2026."

## 🔴 Segment C — The Multi-Cat Rescuer (the trap)

**Feeds five to fifteen cats, buys 15 kg sacks, spends the most, and must not be our ad target.**

Real example from TBS: Tanisha Khan, A-level student, seven cats, needs 15 kg a month, was
spending nearly ৳15,000 and switched to a local brand to halve it.

This segment is the loudest voice in every Bangladeshi cat group, the most visible, and the
most emotionally sympathetic. It is also **the worst possible customer for us**:

- They buy on ৳/kg and we are the most expensive per kg in the mainstream market.
- They will always choose Chonk at ৳332/kg or repacked at ৳350/kg over us at ৳793/kg.
- The SKU they want is the 15 kg, which we deliberately do not advertise (thin contribution,
  heavy delivery, own-rider only).

**Do not build creative for them.** If they find the 15 kg listing on their own and buy it,
fine. Never pay to reach them. Serving this segment is what a charity does; we are not one.

---

# PART 4 — Foundational Doc 2: WHY they buy

Nobody in this market wakes up wanting to buy cat food. They buy because a trigger fires.

## 4.1 The buying triggers, ranked by intent

| Trigger | What just happened | Urgency | Price sensitivity |
|---|---|---|---|
| **Vet said change the food** | Diagnosis, usually urinary or weight | Today | None |
| **Visible symptom** | Straining, hairballs, hair fall, refusing food | 1–3 days | Very low |
| **Ran out and the usual is gone** | Stock-out at their regular shop | Today | Medium |
| **New kitten arrived** | Rescue or gift | 1–2 days | Low, reassurance-driven |
| **Cat got spayed** | Post-surgery, then gained weight | Weeks | Medium |
| **Monthly restock** | The bag is empty | Low | **High** |

**The last row is where we lose and where every competitor plays.** "Buy your monthly cat food"
is the offer with the most competition and the most price comparison. Everything above it is
where we win.

## 4.2 The job the customer is hiring us for

Not "feed my cat." The real jobs, in the customer's own frame:

1. **"Make this stop"** — the symptom is visible and distressing and I want it gone.
2. **"Tell me I'm not failing her"** — I need to believe I am doing this right.
3. **"Take one decision off my plate for three months"** — I do not want to hunt for this bag
   again next month.
4. **"Don't let me get cheated"** — I need to know what is in the bag is what it says.

Every ad should be doing one of these four jobs. If a headline is not doing one of them, it is
a "premium quality" ad and it will be ignored.

## 4.3 Why they would pay us ৳140 more

Only three reasons hold up. Anything else is wishful.

1. **It is actually in stock and it arrives.** Half the market is not. Their cheaper price is
   often a listing, not a product.
2. **It is the specific recipe their cat needs**, and the shops that stock it are out of it
   more often than not.
3. **The founding-customer price makes the premium feel like a floor, not a ceiling** — the
   ৳1,190 reads as a discount from ৳1,450 rather than a markup over ৳1,050.

**What will not carry the premium:** better quality (identical bag), better brand (we have no
brand yet), better nutrition (same numbers), or nicer photography (nobody pays ৳140 for photos).

---

# PART 5 — Foundational Doc 3: emotional buttons + how they talk

## 5.1 The emotional buttons, in order of force

1. **Fear of harming her.** The strongest button in the market. Not "your cat deserves better"
   but "the thing you are doing might be hurting her." Backed by culture: care is a duty.
2. **Guilt about money.** Every owner here is aware that good food is expensive because of a
   50% luxury tax, and quietly feels bad about buying cheaper. Relief from that guilt sells.
3. **Helplessness at a refusing cat.** She will not eat, I paid for it, and I cannot make her.
4. **Suspicion.** Is this even real. Everyone is lying to me.
5. **Pride in being a good cat parent.** The identity is real and publicly performed. "Cat parent"
   and "বিড়ালের বাপ-মা" are how people describe themselves, not just how brands describe them.
6. **Dread of the monthly hunt.** Low-grade, repetitive, and completely unaddressed by anyone.

## 5.2 Voice of customer — exact language seen in the wild

Use these. Do not invent Bengali; these are all observed.

**How they refer to themselves and the cat**
- `বিড়ালের বাপ-মায়েরা` — "cat's moms and dads," used as a direct address *(PAW Pet Shop ad)*
- `Cat Parent` — used untranslated, in English, inside Bengali copy *(Oskies ad)*
- `ফারবেবি` — "fur baby" *(Pet Zone BD ad)*
- `আপনার আদরের বিড়াল` — "your beloved cat" *(near-universal across ads)*
- `আপনার সখের বিড়াল` — "the cat you keep out of love/hobby" *(Amarpet ad)*

**How they talk about the problem**
- `পিকি ইটার` — "picky eater," used as an English loanword in Bengali copy *(Pet Zone BD ad)*
- `হুট করে খাবার পরিবর্তন করবেন না` — "don't change the food suddenly" *(Arogga)*, standard
  advice everyone has read
- `যেটা পছন্দ না, সেটা দ্বিতীয়বার ছুঁয়েও দেখবে না` — "what she doesn't like, she won't touch
  a second time" *(Oskies ad)*
- `সহজে হজম হয়` — "digests easily," a purchase criterion, not a nice-to-have *(Amarpet ad)*
- `লোম পড়া` — hair shedding, common enough that AmarPet runs two blog posts on it

**How the market signals trust**
- `১০০% অরিজিনাল` / `১০০ ভাগ অথেনটিক ও ইমপোর্টেড` — the market's standard trust claim
- `ক্যাশ অন ডেলিভারি` — COD is the default expectation, not a feature
- `স্টক আছে?` — "is it in stock?" is a normal opening question in this market

## 5.2B Real owner words (Reddit, added 2026-07-27)

First-party voice, finally. Pulled by Z from Reddit's own AI across r/bangladesh, r/dhaka,
r/pakistan and neighbouring pet subs. ⚠️ **Some of this is Pakistani and Indian, not
Bangladeshi.** Treat anything not obviously local as directional. Quotes with Bengali
transliteration or an explicit "Bangladesh" are safe.

**On homemade food, which is our real competitor**
> "We make our cat food at home. Chicken, chicken bones, rice, and a few other things that is
> good for the cat."

> "Boiled chicken boiled fish boiled mishti kumra and boil korar extra Pani jeta oitao aar bhaat."

**On distrust of dry kibble itself**
> "Catfood is bad in their health, especially kebbles."

**On cheap brands, and this one is a gift**
> "Anything but Fluffy. Fluffy's cheap for a reason. You'd hear so many complaints about
> Fluffy causing digestive and UTI problems in cats."

**On availability, independently confirming our 52% stock finding**
> "The issue mostly is the availability of the food. It's just rarely available."

> "I'd still recommend giving your cat a variety including homemade foods because if someday
> the imports become too expensive or imports stop for whatever reason, you'll be in trouble."

**On our actual brand, unprompted**
> "Reflex and Mera both recommended by vet."

> "Royal Canin, Josera or reflex. (First two are better)"

**On the gap in specialised diets**
> "But there's barely any renal cat food available Bangladesh."

**On why they have a cat at all**
> "Emotional support. Human beings might leave you one day, pets would never."

### What this changes

1. **Our biggest competitor is a pot of boiled chicken, not Chonk.** A meaningful share of
   this market does not buy commercial food at all, on cost *and* on a belief that it is
   healthier. No ad in the market speaks to that person. **[gap worth testing]**
2. **"Kibble is bad for them" is a live objection we had not logged.** It is tied to
   dehydration and kidney worry, and it is the same mechanism as urinary disease. Do not
   argue with it. Answer it: pair every dry-food ad with the water message, and let the
   Urinary recipe be the proof we take it seriously.
3. **Cheap food causing UTI is already believed in this market.** We never have to attack a
   competitor by name. The audience has already made the argument for us, and it points
   straight at our Urinary SKU. This is the strongest supporting belief we have found.
4. **Reflex is named as vet-recommended by owners, unprompted.** That upgrades "vet
   formulated" from a marketing claim to something the community already says. Use their
   framing, not ours.
5. **Availability is confirmed by owners in their own words**, not just by our stock sweep and
   not just by a competitor founder with an incentive to say it. The supply angle is now
   triple-sourced and is our safest bet.
6. **Renal is an open, stated, unmet need.** We do not stock a renal diet. Worth asking the
   supplier what a Reflex renal or veterinary line would cost, because the market is asking
   for it out loud and nobody answers.

## 5.3 Tone rules for this audience

- **Warm and plain.** Not clinical, not luxury. The Oskies voice is the benchmark.
- **Mixed Bengali and English is normal and correct.** "Cat Parent," "picky eater," "premium,"
  "free delivery" all sit inside Bengali sentences naturally. Do not over-translate.
- **Never talk down.** This buyer has read more about cat nutrition than most vets she can afford.
- **Address her as a parent, not a consumer.**
- ❌ No em dashes in any copy (house rule).

---

# PART 6 — Foundational Doc 4: objections

Every one of these will be raised. In a cash-on-delivery market, an unanswered objection is a
refused parcel, and a refused parcel costs us the full outbound courier.

## 6.1 The objections, with the answer

**1. "একই জিনিস ৳১০৫০ তে পাওয়া যায়। আপনার এত দাম কেন?"**
*(The same thing is ৳1,050 elsewhere. Why are you so expensive?)*
- **Force:** highest. It is true, verifiable in two clicks, and three shops genuinely have it.
- **Answer:** availability, not quality. Of 90 listings across 12 shops, 47 are in stock. The
  cheapest ones are usually the dead ones. Say it plainly: it is only cheaper if they have it.
- **Never:** claim ৳1,450 is a competitor price. It is our own regular price. *(`PRICING.md`)*

**2. "অরিজিনাল তো?"** *(Is it genuine?)*
- **Force:** very high. Counterfeit incidents are documented and repacked food is a real category.
- **Answer:** sealed manufacturer bags, never loose, never repacked, Turkish import, batch and
  expiry visible on delivery. Invite them to check the seal before paying, which costs us
  nothing in a COD market and is close to unanswerable.

**3. "আমার বিড়াল খাবে কিনা?"** *(Will my cat even eat it?)*
- **Force:** very high, and it scales with the price. Risking ৳1,190 on a cat who may refuse is
  the core hesitation, and it is worse on the ৳3,570 3-pack.
- **Answer:** this needs a mechanism, not a sentence. Options in order of cost:
  a) the 400g ৳320 bag as a **try-first add-on** at checkout (never as the ad),
  b) an explicit first-bag promise,
  c) the Choosy recipe as the answer to the objection.
  Chonk already solved this with a ৳149 300g sampler. We have the SKU and are not using it.
- ⚠️ **Open decision for Z.** A first-bag guarantee is the single highest-leverage offer change
  available and it is not in `PRICING.md`. See 7.4.

**4. "৩,৫৭০ টাকা একসাথে?"** *(৳3,570 all at once?)*
- **Force:** high on cold traffic. That is more than a month's food budget for most of this
  audience, paid in cash at the door.
- **Answer:** reframe from price to time. It is not a big purchase, it is three months of not
  worrying, at ৳1,190 a month. Show the per-month number next to the total.

**5. "Chonk তো ৳৪৯৯, আপনি ৳১,১৯০ কেন?"** *(Chonk is ৳499, why are you ৳1,190?)*
- **Force:** high and rising as Chonk expands to 300 outlets.
- **Answer:** do not attack Chonk. They are a local success story and attacking them is
  reputationally stupid in a community this connected. Compete on the ground they do not hold:
  **they make one adult recipe and one kitten recipe.** They do not make a urinary food, a
  hairball food, a sterilised food or a fussy-eater food. If a cat has a specific problem, Chonk
  is not an option at any price. **This is another reason the problem-first strategy is correct.**

**6. "কখনো নাম শুনিনি।"** *(Never heard of you.)*
- **Force:** high. Brand-new store, no reviews, no physical shop, a misspelled domain.
- **Answer:** the product brand is the trust anchor, not us. People know Reflex Plus. We are the
  people who reliably have it. Plus COD (they pay nothing until it is in their hands), a real
  phone number, and a visible Instagram.

**7. "ডেলিভারি চার্জ ৭০ টাকা কেন? অন্যরা ফ্রি দেয়।"**
*(Why ৳70 delivery? Others give it free.)*
- **Force:** medium, but it is real. Chonk, Oskies and Pet Zone all offer free Dhaka delivery.
- **Answer:** free on 2+ items, which we already do, and the maths says it likely pays for itself
  (break-even on induced upsell is ~21%, per `PRICING.md`). Push the free-delivery line hard in
  creative; it is one of our few genuine parity claims.

**8. "ঢাকার বাইরে দেন না?"** *(You don't deliver outside Dhaka?)*
- **Force:** medium, and it is a real revenue leak because our whole media buy is Dhaka-only.
- **Answer:** waitlist capture, already planned. Make sure it is actually built before spend
  scales, or those clicks are pure waste.

**9. "ঘরে রান্না করে দিলেই তো হয়।"** *(I just cook for her at home.)*
- **Force:** high, and it is the objection we had completely missed. A real share of this market
  buys no commercial food at all, on cost and on the belief it is healthier.
- **Answer:** never tell her home cooking is wrong; she will stop listening. The angle that works
  is the one the local blogs already make: boiled meat loses the vitamins and minerals, raw meat
  carries bacteria, and cats need taurine they cannot get from rice and fish. Position dry food
  as the **nutritional backstop alongside** home cooking, not the replacement for it.

**10. "শুকনো খাবার তো কিডনির জন্য খারাপ।"** *(Dry food is bad for their kidneys.)*
- **Force:** medium to high among the more researched owners. "Catfood is bad in their health,
  especially kebbles."
- **Answer:** it is half true and arguing loses. Dry-only diets genuinely are a risk factor for
  urinary disease *(AVMA)*. So agree, then solve: always pair a fresh water bowl in the creative,
  and let the **Urinary recipe exist as proof we take it seriously.** A brand that admits the
  risk and sells the fix is more credible than one that denies it.

## 6.2 The objection nobody says out loud

**"I feel bad that I can't afford the best for her."**

This is the quiet one and it drives a lot of behaviour, including the switch to cheap local
brands and the guilt that follows it. Copy that relieves it, rather than exploiting it, will
outperform copy that shames. Avoid every "your cat deserves better than what you're feeding
her" construction. It is the obvious angle and it is the wrong one for this audience.

## 6.3 Risk reversal is the gap in our offer

Right now our only offer is a price (18% off, first 500). We have no answer to the biggest
objection in the category, which is *"what if she won't eat it."* Chonk has a ৳149 sampler.
We have a ৳320 400g bag we have decided never to advertise.

The brief's reason for not advertising it is sound (a "from ৳320" hook buys a one-bag customer
who never returns). But **not advertising it and not offering it are different decisions.** As
a checkout add-on or a guarantee it costs us nothing in acquisition and removes the single
biggest reason not to buy.

---

# PART 7 — What this means for the ads

## 7.1 Kill these angles

From the current `STATIC-ADS-BRIEF.md` rotation:

| Angle | Verdict |
|---|---|
| "37% protein. Zero filler." | ❌ Red ocean. 26 competitor ads claim premium, 21 claim original. Ignored. |
| "Now in Bangladesh." | ❌ Nobody cares that a brand launched. Reflex Plus has been here for years, so it is also slightly untrue. |
| Generic value ("৳1,190 was ৳1,450") | ❌ On its own it invites the ৳1,050 comparison. Keep the price, kill the price-led ad. |
| Brand trust / vet-formulated | ⚠️ Support line only, never a headline. |

## 7.2 Test these instead

Three concepts, matching Mark's structure (1 CBO, 3 ad sets, one messaging concept per set,
2 to 6 creatives inside each):

**Concept 1 — Symptom-first (the purple ocean)**
One ad per symptom, each naming it in the first three words. She self-identifies or scrolls past.
- "আপনার বিড়াল কি বারবার লিটার বক্সে যাচ্ছে?" → Urinary
- "রোজ সকালে হেয়ারবল?" → Hairball
- "বাটি ভরা, বিড়াল উদাসীন।" → Choosy
- Landing: the specific product page, not the homepage.

**Concept 2 — The stock-out (the brand position)**
The one thing 12 resellers structurally cannot say.
- "যে খাবারটা ও খায়, সেটাই তো পাওয়া যায় না।" (The food she eats is the one you can't find.)
- Lead the 3-Month Supply. Three months, one order, no hunting. ৳3,570, ৳1,190 a month.
- This is our margin-best SKU and this is the honest reason to buy it.

**Concept 3 — New kitten**
Highest lifetime value, and the buyer most willing to pay for reassurance.
- 37% protein belongs *here*, where it answers "am I feeding her enough to grow properly,"
  rather than floating free as a premium claim.

## 7.3 Hard rules for creative

- **Lead the 3-pack or a problem. Never a plain bag of food.** A single ৳1,190 bag needs 4.7x
  ROAS on cold traffic. That is close to unwinnable. The 3-pack needs 4.8x for triple the money.
- **The single 1.5 kg bag is a remarketing and refill SKU, not a cold-traffic offer.** It is
  what you sell to someone who already bought, not what you buy a stranger with.
- **We are the pharmacy, not the pet shop.** Every competitor is a shop selling everything.
  Sell the fix for one named problem. Drop "premium," drop "100% original," drop discount-led
  language from the problem ads; those are pet-shop signals and they put us back in the price
  comparison we cannot win.
- **Never advertise the 400g, the Prostar 1.2 kg, or any 15 kg.** *(`PRICING.md`)*
- **Never claim we treat or cure anything.** "The food vets put urinary cats on," never "prevents
  urinary blockage." Point to a vet.
- **Never attack Chonk or any local brand by name.**
- **Never say nationwide.** Dhaka city only.
- **Free delivery on 2+ bags in every single ad.** It is our only parity claim against free-shipping
  competitors and it drives the basket size the margin needs.
- Keep the visual system as is (electric blue, one hero, Fredoka). Nothing in this research says
  change the look. It says change what the words are about.

## 7.4 Three decisions this research surfaces for Z

1. **The 3-pack is currently Adult Chicken only.** Every problem-first ad points at a recipe the
   3-pack cannot fulfil. Making it a recipe-choice variant is a ten-minute change *(`PRICING.md`)*
   and it unlocks the highest-margin SKU for the highest-intent traffic. **Recommend doing it.**
2. **No risk reversal exists.** A first-bag promise or a cheap try-first add-on answers the
   category's biggest objection. **Recommend a first-bag promise on the single 1.5 kg only**,
   not on the 3-pack, so the downside is capped at ৳840 of cost per claim.
3. **Segment C is a money pit.** Confirm we are not targeting multi-cat rescuers or advertising
   the 15 kg. Currently correct in `PRICING.md`. Keep it that way.

---

# PART 7B — Second opinion (Jeremy AI, paid-ads advisor)

Consulted 2026-07-27 on the two live questions: is problem-specific creative the right wedge at
a 4.7x break-even, and should cold traffic point at the 3-pack or the single bag. Verbatim
positions:

**Agrees on the wedge, and for a structural reason, not a creative one.**
> "If you run broad commodity ads, Meta's auction will serve you to price shoppers, and price
> shoppers in a COD market will pick the cheaper listing every time. You don't win that fight…
> The moment you run an ad that opens with 'Is your cat straining in the litter box?' you've got
> zero competition for that impression. That's not a creative preference, that's market
> structure. You're the only one who has the urinary care variant in stock AND the only one
> advertising to the person who needs it. That's a double moat."

**Agrees on leading the 3-pack, and kills the price-shock worry.**
> "The concern about ৳3,570 being a big first purchase in a COD market is real but overblown
> when you're selling to the problem-specific buyer… The urgency of the health problem collapses
> the price sensitivity. You're not asking someone to spend ৳3,570 on cat food. You're asking
> them to spend ৳3,570 to stop their cat from suffering."

Also: the single bag belongs in remarketing and refills, never cold traffic. And the framing
line worth stealing: **"You're the pharmacy, not the pet shop."**

## ⚠️ His pushback, which we should not wave away

> "Your break-even ROAS on both products is 4.7 to 4.8x. That's brutal for cold traffic in a
> single-city geo with a limited TAM. Even with perfect problem-specific creative and zero
> competition on the variant, Meta's auction in Dhaka-only targeting is going to give you a
> constrained audience pool, and constrained pools mean higher CPMs and faster frequency burn.
> You need to be honest about whether 21% contribution margin is sustainable for paid
> acquisition at all, or whether this is fundamentally a business model problem disguised as an
> ads problem."

This is the real risk and no amount of good creative fixes it. Two consequences:

1. **Dhaka-only plus a narrow problem angle is a small pool.** Frequency will climb fast and
   CPMs with it. Budget for creative refresh sooner than a normal launch would need, and treat
   rising frequency as the kill signal, not just ROAS.
2. **If the first ৳200–300 of spend per concept cannot clear ~4.8x, the answer is probably
   supplier cost, not creative.** At ৳840 cost on a ৳1,190 bag there is not much room. Better
   supplier terms, or a higher-margin own-label product later, is the structural fix. Worth
   knowing that going in rather than blaming the ads for three months.

*(Second opinion logged here in the Meow Belle repo on purpose. Mindframe's Jeremy consult log
is a different business and these two must never cross.)*

---

# PART 8 — Sources, and what I could not verify

## Sourced
- **Market size, tax, price ladder, syndication, repacked food, Chonk:**
  [TBS, *Chonk: Local innovation in the cat food industry*](https://www.tbsnews.net/features/panorama/chonk-local-innovation-cat-food-industry-1076186) (Feb 2025) ·
  [Daily Star, *Inside the making of a local cat food brand*](https://www.thedailystar.net/tech-startup/news/inside-the-making-local-cat-food-brand-3959521)
- **Market growth, owner spend, humanisation, rescuer surge:**
  [Daily Star, *Market for pet food, accessories growing*](https://www.thedailystar.net/business/economy/news/market-pet-food-accessories-growing-3422306)
- **Owner demographics, cats as 90% of pets, import demand:**
  [PetfoodIndustry, *Cat adoption surge drives Bangladesh pet food market growth*](https://www.petfoodindustry.com/pet-food-market/blog/15768310/cat-adoption-surge-drives-bangladesh-pet-food-market-growth)
- **Counterfeit goods in Dhaka:** [Dhaka Tribune](https://www.dhakatribune.com/bangladesh/dhaka/375155/dhaka-emerges-as-a-hub-for-counterfeit-products)
- **Chonk positioning, pricing, BSTI, sampler, retail footprint:** [chonkpetfood.com](https://chonkpetfood.com/)
- **Brand price bands and Reflex Plus positioning:**
  [Miki Pet Store brand comparison](https://mikipetstore.com/blogs/blogs/best-cat-food-brands-bangladesh) ·
  [Pet Zone BD Reflex Plus review](https://petzonebd.com/reflex-plus-cat-food-review-in-bangladesh/)
- **Owner costs, cultural framing, first-timer mistakes:** [Arogga blog](https://www.arogga.com/blog/general/74)
- **Nutrition anxiety, homemade-food risk:** [Mew Mew Shop BD](https://mewmewshopbd.com/blog/healthy-cat-food) ·
  [Pet Zone BD buying guide](https://petzonebd.com/where-can-i-get-cat-food/)
- **FLUTD risk factors (indoor, inactive, dry-food-only; male predisposition):** [AVMA](https://www.avma.org/resources-tools/pet-owners/petcare/feline-lower-urinary-tract-disease)
- **Rescue and adoption infrastructure:** [TBS, Biral Bari](https://www.tbsnews.net/features/habitat/biral-bari-purrfect-sanctuary-felines-960496) · MeowMatch BD · PetBhai
- **Competitor ad copy and claim frequencies:** 120 live Meta ads targeting BD, keywords
  "cat food" and "বিড়ালের খাবার", active only, pulled 2026-07-27 via Apify
  (`curious_coder/facebook-ads-library-scraper`, run `6FMF7cFDdXoBkHzkE`). 58 unique pet ads
  after cleaning.
- **Stock and price data:** our own `2026-07-27-all-competitor-listings.csv`, 90 listings across
  12 retailers.

## ⚠️ What I could NOT verify

Be honest about these. They are the weak points in this document.

1. **First-party voice: partially closed.** ✅ Z supplied real Reddit quotes on 2026-07-27,
   now in **5.2B**, which independently confirmed the availability problem and surfaced two
   things desk research missed (homemade food as the real competitor, and distrust of dry
   kibble). ⚠️ **Still thin:** some of those quotes come from Pakistani and Indian subs rather
   than Bangladesh, Reddit skews far more male, English-speaking and internet-native than our
   actual buyer, and the largest Bangladeshi cat communities are **closed Facebook groups** that
   cannot be scraped. The Bengali-language voice in 5.1 and 5.2 is still sourced from
   advertisers and blogs, not customers. Next best move: 30 real posts pasted from the big BD
   cat groups.
2. **No evidence on how big the problem-recipe demand actually is.** The logic is strong (the
   SKUs exist, shops list them, they are chronically out of stock) but I have no search-volume or
   sales data for Bangladesh. The 4-day, ৳200–300 spend test is what settles it, not more desk work.
3. **Reflex Plus reputation in Bangladesh is thin.** Retailer blogs are all positive and all
   selling. I found no independent complaints and no independent praise. Treat "Reflex Plus is
   loved here" as unproven.
4. **No stock-out frequency over time.** Our 52% figure is one snapshot on one day. If it holds
   across a second sweep in 30 days, the entire supply angle is bulletproof. **Re-run the sweep
   monthly.** It is our best proprietary data and nobody else has it.
5. **Chonk's actual scale is self-reported** (1,000+ customers, 50 to 200+ outlets, figures from
   their own founders and site).

---

## Changelog
- **2026-07-27** — created. First ICP research for Meow Belle. Supersedes the single-line
  audience note in `STATIC-ADS-BRIEF.md` ("BD cat parents, young, urban, IG-active, care about
  quality"), which was an assumption, not research.
