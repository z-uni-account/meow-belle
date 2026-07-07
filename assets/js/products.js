/* ============================================================
   MEOW BELLE — product catalogue (single source of truth)
   Real range: Reflex Plus + Prostar. Prices in Bangladeshi Taka.
   Each `price` is the live selling price (from Z's catalogue);
   `compareAt` is the "regular" price the sale is shown against.
   Sizes are variants. Photos live in images/products/<id>.png.
   ============================================================ */

window.MEOW = {
  currency: "৳",
  freeShipThreshold: 2000,
  shipFlat: 120,
  subscribeSave: 0.15,
  promos: { MEOW20: 0.20, WELCOME10: 0.10, PURR15: 0.15 },
  cities: ["Dhaka", "Chattogram", "Sylhet", "Khulna", "Rajshahi", "Gulshan", "Banani", "Uttara", "Mirpur", "Cumilla", "Bogura", "Narayanganj"],
};

const REFLEX_ING = "Super-premium recipe: named meat as the #1 ingredient, XOS prebiotics for gut health, omega-3 & omega-6 for skin and coat, taurine, yucca, and a full vitamin & chelated-mineral blend. Hypoallergenic — no artificial colours, flavours or preservatives.";
const FEED = "Feed to your cat's weight and activity, split across two meals, with fresh water always available. See the back of the pack for the exact daily gram chart.";

window.MEOW_PRODUCTS = [
  {
    id: "reflex-kitten-chicken", name: "Reflex Plus Kitten — Chicken", tagline: "Super-premium kitten dry food · Chicken",
    brand: "Reflex Plus", category: "Kitten food", image: "images/products/reflex-kitten-chicken.png",
    price: 840, compareAt: 990, rating: 4.9, reviews: 312, stock: 8, stockMax: 40,
    badges: ["bestseller", "sale"], hero: true,
    variants: [
      { label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 },
      { label: "8 kg", sub: "value", price: 3800, compareAt: 4500 },
      { label: "15 kg", sub: "best value", price: 6100, compareAt: 7200 },
    ],
    short: "Our #1 seller. High-protein chicken recipe built for growing kittens — hypoallergenic, gentle on tummies, and irresistible from the very first bowl.",
    features: ["Real chicken as the #1 ingredient", "Extra protein for healthy growth", "Hypoallergenic — no artificial anything", "XOS prebiotics for easy digestion", "Omega-3 & 6 for a soft, shiny coat"],
    ingredients: REFLEX_ING, feeding: "Kittens can be fed freely up to 12 months. " + FEED,
  },
  {
    id: "reflex-adult-chicken", name: "Reflex Plus Adult — Chicken", tagline: "Super-premium adult dry food · Chicken",
    brand: "Reflex Plus", category: "Adult food", image: "images/products/reflex-adult-chicken.png",
    price: 240, compareAt: 290, rating: 4.8, reviews: 274, stock: 12, stockMax: 40,
    badges: ["bestseller", "sale"],
    variants: [
      { label: "400 g", sub: "trial", price: 240, compareAt: 290 },
      { label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 },
      { label: "15 kg", sub: "best value", price: 6100, compareAt: 7200 },
    ],
    short: "The everyday bowl for adult cats. Real chicken, complete and balanced nutrition, and a crunch they come running for — now from a ৳240 trial pack.",
    features: ["Real chicken as the #1 ingredient", "Complete & balanced for adult cats", "Hypoallergenic recipe", "Supports lean muscle & energy", "No corn, wheat or soy"],
    ingredients: REFLEX_ING, feeding: FEED,
  },
  {
    id: "reflex-adult-urinary-chicken", name: "Reflex Plus Adult — Urinary Chicken", tagline: "Urinary-care adult dry food · Chicken",
    brand: "Reflex Plus", category: "Urinary care", image: "images/products/reflex-adult-urinary-chicken.png",
    price: 840, compareAt: 990, rating: 4.7, reviews: 96, stock: 9, stockMax: 40, badges: ["sale"],
    variants: [
      { label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 },
      { label: "15 kg", sub: "best value", price: 6100, compareAt: 7200 },
    ],
    short: "Formulated to support a healthy urinary tract with balanced minerals and controlled pH — for cats prone to urinary trouble.",
    features: ["Supports urinary-tract health", "Balanced minerals & controlled pH", "Real chicken, hypoallergenic", "Encourages healthy hydration", "Omega-3 & 6 for skin and coat"],
    ingredients: REFLEX_ING, feeding: FEED,
  },
  {
    id: "reflex-adult-hairball-salmon", name: "Reflex Plus Adult — Hairball Salmon", tagline: "Hairball & indoor dry food · Salmon",
    brand: "Reflex Plus", category: "Hairball control", image: "images/products/reflex-adult-hairball-salmon.png",
    price: 840, compareAt: 990, rating: 4.8, reviews: 88, stock: 7, stockMax: 40, badges: ["sale"],
    variants: [
      { label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 },
      { label: "15 kg", sub: "best value", price: 6100, compareAt: 7200 },
    ],
    short: "Made for indoor cats — natural fibres help move hairballs through, while real salmon keeps the coat glossy.",
    features: ["Natural fibre to reduce hairballs", "Real salmon for a glossy coat", "Perfect for indoor cats", "Hypoallergenic recipe", "Rich in omega-3"],
    ingredients: REFLEX_ING, feeding: FEED,
  },
  {
    id: "reflex-kitten-salmon", name: "Reflex Plus Kitten — Salmon", tagline: "Super-premium kitten dry food · Salmon",
    brand: "Reflex Plus", category: "Kitten food", image: "images/products/reflex-kitten-salmon.png",
    price: 840, compareAt: 990, rating: 4.9, reviews: 64, stock: 11, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 }],
    short: "A salmon-first kitten recipe for the seafood lovers — packed with DHA and protein for bright eyes and fast, healthy growth.",
    features: ["Real salmon, rich in DHA", "High protein for growing kittens", "Extra-small kibble", "Hypoallergenic recipe", "Immune-support blend"],
    ingredients: REFLEX_ING, feeding: "Kittens can be fed freely up to 12 months. " + FEED,
  },
  {
    id: "reflex-mother-baby", name: "Reflex Plus Mother & Baby", tagline: "Mother & baby dry food · Lamb & Rice",
    brand: "Reflex Plus", category: "Mother & baby", image: "images/products/reflex-mother-baby.png",
    price: 840, compareAt: 990, rating: 4.9, reviews: 57, stock: 6, stockMax: 40, badges: ["sale"],
    variants: [
      { label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 },
      { label: "8 kg", sub: "value", price: 3800, compareAt: 4500 },
    ],
    short: "Extra-nourishing lamb & rice recipe for pregnant and nursing mums and their newborns — energy-dense and easy to digest.",
    features: ["Energy-dense for mums & kittens", "Gentle lamb & rice recipe", "Supports pregnancy & nursing", "Easy to digest", "Immune-support blend"],
    ingredients: REFLEX_ING, feeding: "Ideal for queens through pregnancy and nursing, and for weaning kittens. " + FEED,
  },
  {
    id: "reflex-sterilized-chicken", name: "Reflex Plus Sterilised — Chicken", tagline: "Sterilised adult & kitten dry food · Chicken",
    brand: "Reflex Plus", category: "Sterilised", image: "images/products/reflex-sterilized-chicken.png",
    price: 840, compareAt: 990, rating: 4.7, reviews: 73, stock: 10, stockMax: 40, badges: ["sale"],
    variants: [
      { label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 },
      { label: "15 kg", sub: "best value", price: 6100, compareAt: 7200 },
    ],
    short: "Lower-calorie chicken recipe made for spayed and neutered cats — keeps weight in check without cutting the flavour.",
    features: ["Calorie-controlled for sterilised cats", "Helps maintain a healthy weight", "Real chicken, hypoallergenic", "Supports urinary health", "L-carnitine for fat metabolism"],
    ingredients: REFLEX_ING, feeding: "Ideal after spaying/neutering. " + FEED,
  },
  {
    id: "reflex-adult-skincare-salmon", name: "Reflex Plus Adult — Skin & Coat Salmon", tagline: "Skin-care adult dry food · Salmon",
    brand: "Reflex Plus", category: "Skin & coat", image: "images/products/reflex-adult-skincare-salmon.png",
    price: 840, compareAt: 990, rating: 4.8, reviews: 61, stock: 9, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 }],
    short: "A salmon-rich recipe loaded with omega oils for cats with sensitive skin — for a coat that actually shines.",
    features: ["Omega-rich salmon for skin & coat", "Great for sensitive skin", "Reduces shedding & dullness", "Hypoallergenic recipe", "Complete & balanced"],
    ingredients: REFLEX_ING, feeding: FEED,
  },
  {
    id: "reflex-adult-choosy-salmon", name: "Reflex Plus Adult — Choosy Salmon", tagline: "For fussy eaters · Salmon",
    brand: "Reflex Plus", category: "Fussy eaters", image: "images/products/reflex-adult-choosy-salmon.png",
    price: 840, compareAt: 990, rating: 4.7, reviews: 45, stock: 8, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 }],
    short: "Built for the pickiest palate. An aroma-boosted salmon recipe that wins over even the fussiest cat — the 'she finally ate it' bag.",
    features: ["Made for fussy, choosy cats", "Aroma-boosted salmon", "High palatability", "Hypoallergenic recipe", "Complete & balanced"],
    ingredients: REFLEX_ING, feeding: FEED,
  },
  {
    id: "prostar-adult-chicken", name: "Prostar Adult — Chicken", tagline: "Adult cat dry food · Chicken",
    brand: "Prostar", category: "Adult food", image: "images/products/prostar-adult-chicken.png",
    price: 4100, compareAt: 4800, rating: 4.6, reviews: 120, stock: 14, stockMax: 40, badges: ["sale"],
    variants: [{ label: "15 kg", sub: "best value", price: 4100, compareAt: 4800 }],
    short: "Great everyday nutrition at a friendly price. A hearty chicken recipe in a big 15 kg value bag — smart choice for multi-cat homes.",
    features: ["Real chicken protein", "Complete & balanced for adults", "Big 15 kg value bag", "Great for multi-cat homes", "Supports energy & coat"],
    ingredients: "Complete and balanced adult recipe with real chicken, essential vitamins, minerals and taurine for heart and eye health.", feeding: FEED,
  },
  {
    id: "prostar-kitten-chicken", name: "Prostar Kitten — Chicken", tagline: "Kitten cat dry food · Chicken",
    brand: "Prostar", category: "Kitten food", image: "images/products/prostar-kitten-chicken.png",
    price: 4100, compareAt: 4800, rating: 4.7, reviews: 83, stock: 10, stockMax: 40, badges: ["sale"],
    variants: [{ label: "15 kg", sub: "best value", price: 4100, compareAt: 4800 }],
    short: "High-protein chicken nutrition for growing kittens in a value 15 kg bag — everything little ones need to grow up strong.",
    features: ["High protein for growth", "Real chicken recipe", "Big 15 kg value bag", "Supports healthy development", "Taurine for heart & eyes"],
    ingredients: "Complete and balanced kitten recipe with real chicken, extra protein, vitamins, minerals and taurine.", feeding: "Feed kittens freely up to 12 months. " + FEED,
  },
  {
    id: "prostar-sterilised-salmon-ak", name: "Prostar Sterilised — Salmon (Adult & Kitten)", tagline: "Sterilised adult & kitten · Salmon",
    brand: "Prostar", category: "Sterilised", image: "images/products/prostar-sterilised-salmon-ak.png",
    price: 370, compareAt: 440, rating: 4.6, reviews: 52, stock: 13, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.2 kg", sub: "starter", price: 370, compareAt: 440 }],
    short: "Salmon recipe for sterilised cats of any age — light on calories, big on flavour, and easy on the wallet.",
    features: ["For sterilised cats, any age", "Real salmon flavour", "Calorie-controlled", "Budget-friendly starter size", "Supports urinary health"],
    ingredients: "Complete and balanced sterilised recipe with real salmon, controlled calories, vitamins, minerals and taurine.", feeding: FEED,
  },
  {
    id: "prostar-adult-sterilised-salmon", name: "Prostar Adult Sterilised — Salmon", tagline: "Sterilised adult cat dry food · Salmon",
    brand: "Prostar", category: "Sterilised", image: "images/products/prostar-adult-sterilised-salmon.png",
    price: 370, compareAt: 440, rating: 4.6, reviews: 39, stock: 12, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.2 kg", sub: "starter", price: 370, compareAt: 440 }],
    short: "A light salmon recipe for spayed and neutered adult cats — keeps weight in check without skimping on taste.",
    features: ["For sterilised adult cats", "Real salmon flavour", "Helps manage weight", "Budget-friendly size", "Complete & balanced"],
    ingredients: "Complete and balanced sterilised adult recipe with real salmon, controlled calories, vitamins, minerals and taurine.", feeding: FEED,
  },
];

window.MEOW_REVIEWS = [
  { name: "Farhana R.", city: "Dhaka", stars: 5, text: "My Persian is the fussiest eater alive and she cleared the Reflex Plus Kitten bowl in one sitting. Coat looks glossier after three weeks too.", product: "Reflex Plus Kitten" },
  { name: "Tanvir A.", city: "Chattogram", stars: 5, text: "Switched both cats to the Reflex Plus Adult 15 kg bag. They prefer it, and it's cheaper delivered than what I paid at the shop.", product: "Reflex Plus Adult" },
  { name: "Nusrat J.", city: "Sylhet", stars: 5, text: "The Choosy Salmon is magic. My cat rejected everything for a week and demolished this. Genuinely the 'she finally ate it' bag.", product: "Reflex Plus Choosy" },
  { name: "Rakib H.", city: "Gulshan", stars: 5, text: "Ordered the Prostar 15 kg for my three cats. Great value, fast delivery, and they're thriving on it.", product: "Prostar Adult" },
  { name: "Sadia K.", city: "Uttara", stars: 4, text: "The Urinary Chicken sorted out my boy's recurring urinary issues. Vet was happy at the last checkup.", product: "Reflex Plus Urinary" },
  { name: "Imran S.", city: "Mirpur", stars: 5, text: "Hairball Salmon has cut the hairballs right down for my indoor cat, and his coat is shinier than ever.", product: "Reflex Plus Hairball" },
];

window.getProduct = (id) => window.MEOW_PRODUCTS.find((p) => p.id === id);
