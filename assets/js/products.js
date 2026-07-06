/* ============================================================
   MEOW BELLE — product catalog (single source of truth)
   Prices in Bangladeshi Taka (BDT), whole numbers.
   To swap a real photo: drop a file into images/products/
   matching the `image` path below (any of .jpg/.png/.webp works
   if you keep the same base name — see images/README.md).
   ============================================================ */

window.MEOW = {
  currency: "৳",
  freeShipThreshold: 2000,
  shipFlat: 80,
  subscribeSave: 0.15,          // 15% off on subscription
  promos: { MEOW20: 0.20, WELCOME10: 0.10, PURR15: 0.15 },
  cities: ["Dhaka", "Chattogram", "Sylhet", "Khulna", "Rajshahi", "Gulshan", "Banani", "Uttara", "Mirpur", "Cumilla", "Bogura", "Narayanganj"],
};

window.MEOW_PRODUCTS = [
  {
    id: "belles-daily",
    name: "Belle's Daily",
    tagline: "Chicken & Salmon Dry Food",
    category: "Dry food",
    image: "images/products/belles-daily.jpg",
    price: 1199, compareAt: 1499,
    rating: 4.9, reviews: 1284, stock: 7, stockMax: 40,
    badges: ["bestseller", "sale"],
    hero: true,
    short: "Our flagship everyday bowl — real deboned chicken and wild salmon, zero fillers, and the crunch cats come running for.",
    variants: [
      { label: "1 kg", sub: "1–2 weeks", price: 1199, compareAt: 1499 },
      { label: "3 kg", sub: "best value", price: 2999, compareAt: 3799 },
      { label: "7 kg", sub: "family pack", price: 5999, compareAt: 7499 },
    ],
    features: ["Real deboned chicken is the #1 ingredient", "Wild-caught salmon for a shiny coat", "No corn, wheat, soy or artificial anything", "Omega-3 & 6 for skin and coat", "Taurine for a healthy heart"],
    ingredients: "Deboned chicken, chicken meal, salmon, brown rice, peas, chicken fat (preserved with mixed tocopherols), salmon oil, dried egg, taurine, cranberries, blueberries, vitamins & chelated minerals.",
    feeding: "Under 3 kg cat: 30–45 g/day. 3–5 kg: 45–70 g/day. Over 5 kg: 70–90 g/day. Split across 2 meals and keep fresh water available.",
  },
  {
    id: "ocean-catch",
    name: "Ocean Catch",
    tagline: "Whitefish & Tuna Dry Food",
    category: "Dry food",
    image: "images/products/ocean-catch.jpg",
    price: 1299, compareAt: 1599,
    rating: 4.8, reviews: 642, stock: 12, stockMax: 40,
    badges: ["sale"],
    short: "A protein-rich catch of the day — ocean whitefish and tuna for the seafood-obsessed cat.",
    features: ["Ocean whitefish + tuna as top proteins", "Grain-friendly, gentle on tummies", "Boosted with omega oils", "Small kibble, easy to chew"],
    ingredients: "Whitefish, tuna, whitefish meal, sweet potato, peas, herring oil, dried egg, taurine, seaweed, vitamins & chelated minerals.",
    feeding: "Under 3 kg cat: 30–45 g/day. 3–5 kg: 45–70 g/day. Over 5 kg: 70–90 g/day.",
  },
  {
    id: "little-belle",
    name: "Little Belle",
    tagline: "Kitten Formula",
    category: "Kitten",
    image: "images/products/little-belle.jpg",
    price: 1149, compareAt: 1399,
    rating: 4.9, reviews: 411, stock: 9, stockMax: 40,
    badges: ["sale"],
    short: "Everything a growing kitten needs — extra protein, DHA for bright little brains, and tiny kibble made for tiny mouths.",
    features: ["High protein for fast growth", "DHA for brain & eye development", "Extra-small kibble", "Immune-support blend"],
    ingredients: "Deboned chicken, chicken meal, salmon, egg, brown rice, salmon oil (DHA), colostrum, taurine, prebiotics, vitamins & chelated minerals.",
    feeding: "Feed kittens freely (leave food out) up to 12 months, then transition to Belle's Daily over 7 days.",
  },
  {
    id: "purr-wet-pack",
    name: "Purr Wet Pack",
    tagline: "24 Gravy Pouches · Variety",
    category: "Wet food",
    image: "images/products/purr-wet-pack.jpg",
    price: 1680, compareAt: 2100,
    rating: 4.7, reviews: 388, stock: 15, stockMax: 40,
    badges: ["sale"],
    short: "Twenty-four juicy gravy pouches across four flavours. Hydration and flavour your cat will sprint for.",
    features: ["4 flavours: chicken, salmon, tuna, duck", "Extra moisture for urinary health", "Complete & balanced", "No artificial colours or flavours"],
    ingredients: "Meat & animal derivatives, fish & fish derivatives, minerals, vitamins, taurine. Flavours vary by pouch.",
    feeding: "One 85 g pouch per 2 kg of body weight per day, adjusted to activity. Serve at room temperature.",
  },
  {
    id: "belle-bites",
    name: "Belle Bites",
    tagline: "Freeze-Dried Chicken Treats",
    category: "Treats",
    image: "images/products/belle-bites.jpg",
    price: 449, compareAt: 599,
    rating: 4.9, reviews: 930, stock: 21, stockMax: 40,
    badges: ["sale"],
    short: "One ingredient. Pure freeze-dried chicken breast. The treat that turns 'no' into 'anything you want, human.'",
    features: ["100% single-ingredient chicken", "Freeze-dried to lock in flavour", "Grain & filler free", "Perfect for training & bonding"],
    ingredients: "100% chicken breast. That's the whole list.",
    feeding: "Give as a treat or topper — a few pieces a day. Not a complete meal.",
  },
  {
    id: "full-bowl-bundle",
    name: "The Full Bowl Bundle",
    tagline: "Dry Food + Wet Pack + Treats",
    category: "Bundle",
    image: "images/products/full-bowl-bundle.jpg",
    price: 2999, compareAt: 3800,
    rating: 5.0, reviews: 176, stock: 5, stockMax: 20,
    badges: ["save", "sale"],
    short: "The whole happy-cat starter kit — a bag of Belle's Daily, a 24-pouch wet variety pack, and a tub of Belle Bites. Everything a bowl needs, bundled to save ৳801.",
    bundleOf: ["belles-daily", "purr-wet-pack", "belle-bites"],
    features: ["1 kg Belle's Daily dry food", "24 Purr Wet Pack gravy pouches", "1 tub Belle Bites treats", "Save ৳801 vs buying separately"],
    ingredients: "See each included product for full ingredient lists.",
    feeding: "Combine dry and wet across the day; use treats for training and bonding.",
  },
];

window.MEOW_REVIEWS = [
  { name: "Farhana R.", city: "Dhaka", stars: 5, text: "My Persian is the fussiest eater alive and she cleared the bowl in one sitting. Coat looks glossier after three weeks too.", product: "Belle's Daily" },
  { name: "Tanvir A.", city: "Chattogram", stars: 5, text: "Switched both my cats over from an imported brand and honestly they prefer this — and it's cheaper delivered to my door.", product: "Ocean Catch" },
  { name: "Nusrat J.", city: "Sylhet", stars: 5, text: "Belle Bites are basically cat crack. My kitten does a backflip when she hears the tub open.", product: "Belle Bites" },
  { name: "Rakib H.", city: "Gulshan", stars: 5, text: "The subscription is the move. Shows up every month, I never run out, and the 15% off adds up.", product: "Full Bowl Bundle" },
  { name: "Sadia K.", city: "Uttara", stars: 4, text: "Little Belle helped my rescue kitten put on healthy weight fast. Vet was impressed at the checkup.", product: "Little Belle" },
  { name: "Imran S.", city: "Mirpur", stars: 5, text: "Wet pouches are a lifesaver in this heat — keeps them hydrated and they act like it's a five-star meal.", product: "Purr Wet Pack" },
];

window.getProduct = (id) => window.MEOW_PRODUCTS.find((p) => p.id === id);
