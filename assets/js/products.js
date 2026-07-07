/* ============================================================
   MEOW BELLE — product catalogue (single source of truth)
   Real range: Reflex Plus + Prostar. Prices in Bangladeshi Taka.
   `price` = live selling price (Z's catalogue); `compareAt` = the
   "regular" price the sale shows against. Sizes are variants.

   NUTRITION DATA (ingredients / analytical / additives) is REAL and
   sourced from manufacturer + retailer listings (see `sources` per
   product). Nothing is invented. The two Prostar Sterilised Salmon
   SKUs have no published nutrition data anywhere, so those fields are
   intentionally left empty rather than filled with guesses.
   ============================================================ */

window.MEOW = {
  currency: "৳",
  freeShipThreshold: 2000,
  shipFlat: 120,
  subscribeSave: 0.15,
  promos: { MEOW20: 0.20, WELCOME10: 0.10, PURR15: 0.15 },
  cities: ["Dhaka", "Chattogram", "Sylhet", "Khulna", "Rajshahi", "Gulshan", "Banani", "Uttara", "Mirpur", "Cumilla", "Bogura", "Narayanganj"],
};

const FEED_GENERIC = "Feed to your cat's weight and activity level, split across two meals, with fresh water always available. See the back of the pack for the exact daily gram chart.";

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
    features: ["Real chicken protein is the #1 ingredient", "37% protein for healthy growth", "Hypoallergenic — no artificial colours or flavours", "Prebiotics (MOS) & yucca for easy digestion", "Taurine & full vitamin/mineral blend"],
    ingredients: "Processed Chicken Protein (40%), Corn, Rice, Chicken Fat, Corn Gluten, Dried Beet Pulp, Wheat Bran, Liver Aroma, Vitamins and Minerals, Salt, Flax Seed, Brewer's Yeast, Taurine, MOS (Mannan Oligosaccharides), Whey Powder, Yucca Schidigera, Preservatives - Antioxidants.",
    analytical: [{ name: "Crude Protein", value: "37%" }, { name: "Crude Fat", value: "20%" }, { name: "Crude Fibre", value: "3%" }, { name: "Crude Ash", value: "8%" }],
    additives: [{ name: "Vitamin A", value: "18,000 IU/kg" }, { name: "Vitamin D3", value: "1,500 IU/kg" }, { name: "Vitamin E", value: "200 mg/kg" }, { name: "Vitamin C", value: "400 mg/kg" }, { name: "Vitamin K3", value: "0.2 mg/kg" }, { name: "Taurine", value: "1,500 mg/kg" }, { name: "Choline", value: "2,500 mg/kg" }, { name: "Zinc", value: "140 mg/kg" }, { name: "Iron", value: "200 mg/kg" }, { name: "Manganese", value: "50 mg/kg" }, { name: "Copper", value: "13 mg/kg" }, { name: "Iodine", value: "1.5 mg/kg" }, { name: "Selenium", value: "0.3 mg/kg" }],
    feeding: FEED_GENERIC, sources: ["https://www.reflexmama.com/reflex-kitten-food-with-chicken"],
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
    features: ["Real chicken protein is the #1 ingredient", "33% protein, complete & balanced", "Hypoallergenic recipe", "XOS prebiotics & yucca for digestion", "Taurine for a healthy heart"],
    ingredients: "Processed Chicken Protein (38%), Corn, Chicken Fat, Rice, Hydrolyzed Animal Protein, Beet Pulp, Liver Aroma, Vitamins and Minerals, Flaxseed, Xylo-oligosaccharides (XOS), Brewer's Yeast, Salt, Yucca Schidigera, Taurine, Preservatives - Antioxidants.",
    analytical: [{ name: "Crude Protein", value: "33%" }, { name: "Crude Fat", value: "14%" }, { name: "Crude Fibre", value: "2%" }, { name: "Crude Ash", value: "8%" }],
    additives: [{ name: "Vitamin A", value: "18,000 IU/kg" }, { name: "Vitamin D3", value: "1,500 IU/kg" }, { name: "Vitamin E", value: "200 mg/kg" }, { name: "Vitamin C", value: "400 mg/kg" }, { name: "Taurine", value: "1,500 mg/kg" }],
    feeding: FEED_GENERIC, sources: ["https://www.reflexmama.com/reflex-plus-adult-cat-food-with-chicken-2"],
  },
  {
    id: "reflex-adult-urinary-chicken", name: "Reflex Plus Adult — Urinary Chicken", tagline: "Urinary-care adult dry food · Chicken",
    brand: "Reflex Plus", category: "Urinary care", image: "images/products/reflex-adult-urinary-chicken.png",
    price: 840, compareAt: 990, rating: 4.7, reviews: 96, stock: 9, stockMax: 40, badges: ["sale"],
    variants: [
      { label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 },
      { label: "15 kg", sub: "best value", price: 6100, compareAt: 7200 },
    ],
    short: "Formulated to support a healthy urinary tract with balanced minerals — for cats prone to urinary trouble.",
    features: ["Supports urinary-tract health", "34% protein, real chicken", "Balanced minerals", "Flaxseed & XOS for digestion", "Taurine for a healthy heart"],
    ingredients: "Processed Chicken Protein, Corn, Chicken Fat, Rice, Sugar Beet, Liver Flavor, Vitamins and Minerals, Flaxseed, Xylo-Oligosaccharide, Brewer's Yeast, Salt, Yucca Schidigera, Preservatives - Antioxidants.",
    analytical: [{ name: "Crude Protein", value: "34%" }, { name: "Crude Fat", value: "14%" }, { name: "Crude Fibre", value: "4%" }, { name: "Crude Ash", value: "7%" }],
    additives: [{ name: "Vitamin A", value: "18,000 IU/kg" }, { name: "Vitamin D3", value: "1,500 IU/kg" }, { name: "Vitamin E", value: "200 mg/kg" }, { name: "Vitamin C", value: "200 mg/kg" }, { name: "Taurine", value: "1,500 mg/kg" }],
    feeding: FEED_GENERIC, sources: ["https://reempetstore.pk/product/reflex-plus-urinary-chicken-adult-cat-food/"],
  },
  {
    id: "reflex-adult-hairball-salmon", name: "Reflex Plus Adult — Hairball Salmon", tagline: "Hairball & indoor dry food · Salmon",
    brand: "Reflex Plus", category: "Hairball control", image: "images/products/reflex-adult-hairball-salmon.png",
    price: 840, compareAt: 990, rating: 4.8, reviews: 88, stock: 7, stockMax: 40, badges: ["sale"],
    variants: [
      { label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 },
      { label: "15 kg", sub: "best value", price: 6100, compareAt: 7200 },
    ],
    short: "Made for indoor cats — natural fibres and psyllium help move hairballs through, while real salmon keeps the coat glossy.",
    features: ["Sugar-cane fibre & psyllium reduce hairballs", "Real salmon for a glossy coat", "Perfect for indoor cats", "34% protein", "L-carnitine to help manage weight"],
    ingredients: "Processed Salmon Protein, Processed Animal Protein, Corn, Chicken Fat, Rice, Sugar Cane Fiber, Sugar Beet, Fish Flavor, Vitamins and Minerals, Salmon Oil, Xylo-Oligosaccharide, Brewer's Yeast, Psyllium, Salt, Yucca Schidigera, L-Carnitine, Preservatives - Antioxidants.",
    analytical: [{ name: "Crude Protein", value: "34%" }, { name: "Crude Fat", value: "14%" }, { name: "Crude Fibre", value: "5%" }, { name: "Crude Ash", value: "8%" }],
    additives: [{ name: "Vitamin A", value: "18,000 IU/kg" }, { name: "Vitamin D3", value: "1,500 IU/kg" }, { name: "Vitamin E", value: "200 mg/kg" }, { name: "Vitamin C", value: "400 mg/kg" }, { name: "Taurine", value: "1,500 mg/kg" }],
    feeding: "By body weight (normal condition), roughly 29–32 g/day for a 2 kg cat up to 96–106 g/day for a 10 kg cat, split across two meals with fresh water always available.",
    sources: ["https://minipetsworld.com/product/reflex-plus-anti-hairball-adult-cat-food-with-salmon/"],
  },
  {
    id: "reflex-kitten-salmon", name: "Reflex Plus Kitten — Salmon", tagline: "Super-premium kitten dry food · Salmon",
    brand: "Reflex Plus", category: "Kitten food", image: "images/products/reflex-kitten-salmon.png",
    price: 840, compareAt: 990, rating: 4.9, reviews: 64, stock: 11, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 }],
    short: "A salmon-first kitten recipe for the seafood lovers — hydrolysed salmon and egg for bright eyes and fast, healthy growth.",
    features: ["Hydrolysed salmon protein", "36% protein for growing kittens", "Dried egg & salmon oil", "XOS prebiotics for digestion", "Taurine & L-carnitine"],
    ingredients: "Hydrolysed Salmon Proteins, Chicken Proteins (dehydrated), Corn, Chicken Fat, Rice, Fish Flavor, Processed Lignocellulosic, Dried Sugar Beet Fiber, Vitamins and Minerals, Salmon Oil, Dried Egg Powder, Xylo-oligosaccharides, Brewer's Yeast, Salt, Yucca Schidigera, L-Carnitine, Natural Preservatives - Antioxidants (E320 & E321).",
    analytical: [{ name: "Crude Protein", value: "36%" }, { name: "Crude Fat", value: "18%" }, { name: "Crude Fibre", value: "2% (min)" }, { name: "Crude Ash", value: "7%" }],
    additives: [{ name: "Vitamin A", value: "18,000 IU/kg" }, { name: "Vitamin D3", value: "1,500 IU/kg" }, { name: "Vitamin E", value: "200 mg/kg" }, { name: "Vitamin C", value: "400 mg/kg" }, { name: "Taurine", value: "1,500 mg/kg" }],
    feeding: FEED_GENERIC, sources: ["https://petsland-egy.com/products/reflex-plus-kitten-food-with-salmon-1-5kg"],
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
    features: ["Processed lamb protein", "32% protein & 22% fat, energy-dense", "Whey powder for easy digestion", "L-carnitine & XOS prebiotics", "Supports pregnancy, nursing & weaning"],
    ingredients: "Processed Lamb Protein (20%), Processed Animal Protein, Hydrolyzed Animal Protein, Corn, Rice, Chicken Fat, Brewer's Yeast, Hydrolyzed Fiber, Whey Powder, Liver Aroma, Xylo-Oligosaccharides, Yucca Schidigera, Salt, L-Carnitine, Vitamins & Minerals, Taurine, Preservatives & Antioxidants.",
    analytical: [{ name: "Crude Protein", value: "32%" }, { name: "Crude Fat", value: "22%" }, { name: "Crude Fibre", value: "2.5%" }, { name: "Crude Ash", value: "8%" }],
    additives: [{ name: "Vitamin A", value: "18,000 IU/kg" }, { name: "Vitamin D3", value: "1,500 IU/kg" }, { name: "Vitamin E", value: "200 mg/kg" }, { name: "Vitamin C", value: "400 mg/kg" }, { name: "Taurine", value: "1,500 mg/kg" }],
    feeding: "Ideal for queens through pregnancy and nursing, and for weaning kittens. " + FEED_GENERIC, sources: ["https://birdagents.pk/products/reflex-plus-mother-baby-cat-food-lamb"],
  },
  {
    id: "reflex-sterilized-chicken", name: "Reflex Plus Sterilised — Chicken", tagline: "Sterilised adult & kitten dry food · Chicken",
    brand: "Reflex Plus", category: "Sterilised", image: "images/products/reflex-sterilized-chicken.png",
    price: 840, compareAt: 990, rating: 4.7, reviews: 73, stock: 10, stockMax: 40, badges: ["sale"],
    variants: [
      { label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 },
      { label: "15 kg", sub: "best value", price: 6100, compareAt: 7200 },
    ],
    short: "Lower-fat chicken recipe made for spayed and neutered cats — keeps weight in check without cutting the flavour.",
    features: ["Calorie-conscious: 34% protein, 12% fat", "Real chicken, hypoallergenic", "L-carnitine to help burn fat", "Sugar-cane fibre for fullness", "Taurine for a healthy heart"],
    ingredients: "Processed Chicken Protein (38%), Corn, Chicken Fat, Rice, Hydrolyzed Animal Protein, Sugar Cane Fibre, Beet Pulp, Liver Flavour, Vitamins and Minerals, Flaxseed, Xylo-oligosaccharides, Brewer's Yeast, Salt, Yucca Schidigera, L-Carnitine, Taurine, Preservatives - Antioxidants.",
    analytical: [{ name: "Crude Protein", value: "34%" }, { name: "Crude Fat", value: "12%" }, { name: "Crude Fibre", value: "4%" }, { name: "Crude Ash", value: "7.5%" }],
    additives: [{ name: "Vitamin A", value: "18,000 IU/kg" }, { name: "Vitamin D3", value: "1,500 IU/kg" }, { name: "Vitamin E", value: "200 mg/kg" }, { name: "Vitamin C", value: "400 mg/kg" }, { name: "Taurine", value: "1,500 mg/kg" }],
    feeding: "Ideal after spaying/neutering. " + FEED_GENERIC, sources: ["https://www.reflexmama.com/sterilised-adult-cat-food-with-chicken"],
  },
  {
    id: "reflex-adult-skincare-salmon", name: "Reflex Plus Adult — Skin & Coat Salmon", tagline: "Skin-care adult dry food · Salmon",
    brand: "Reflex Plus", category: "Skin & coat", image: "images/products/reflex-adult-skincare-salmon.png",
    price: 840, compareAt: 990, rating: 4.8, reviews: 61, stock: 9, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 }],
    short: "A salmon-rich recipe loaded with salmon oil, anchovy oil and krill for cats with sensitive skin — for a coat that actually shines.",
    features: ["Salmon oil, anchovy oil & krill", "34% protein for skin & coat", "Aloe vera, cranberry & marigold", "Great for sensitive skin", "Taurine & full vitamin blend"],
    ingredients: "Processed Salmon Protein (20%), Processed Animal Protein, Corn, Chicken Fat, Rice, Hydrolyzed Animal Protein, Fish Flavor, Salmon Oil, Anchovy Oil, Krill, Vitamins & Minerals, Processed Lignocellulosic, Sugar Beet, Microalgae, Brewer's Yeast, Psyllium, Xylo-Oligosaccharides (XOS), Salt, Yucca Schidigera, DL-Methionine, Arginine, Phenylalanine, Tyrosine, Cranberry, Marigold Extract, Aloe Vera, Taurine, Preservatives & Antioxidants.",
    analytical: [{ name: "Crude Protein", value: "34%" }, { name: "Crude Fat", value: "16%" }, { name: "Crude Fibre", value: "3%" }, { name: "Crude Ash", value: "8%" }],
    additives: [{ name: "Vitamin A", value: "18,000 IU/kg" }, { name: "Vitamin D3", value: "1,500 IU/kg" }, { name: "Vitamin E", value: "200 mg/kg" }, { name: "Vitamin C", value: "400 mg/kg" }, { name: "Taurine", value: "1,500 mg/kg" }],
    feeding: FEED_GENERIC, sources: ["https://birdagents.pk/products/reflex-plus-skin-care-cat-food-salmon"],
  },
  {
    id: "reflex-adult-choosy-salmon", name: "Reflex Plus Adult — Choosy Salmon", tagline: "For fussy eaters · Salmon",
    brand: "Reflex Plus", category: "Fussy eaters", image: "images/products/reflex-adult-choosy-salmon.png",
    price: 840, compareAt: 990, rating: 4.7, reviews: 45, stock: 8, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.5 kg", sub: "starter", price: 840, compareAt: 990 }],
    short: "Built for the pickiest palate. An aroma-boosted salmon recipe that wins over even the fussiest cat — the 'she finally ate it' bag.",
    features: ["Dehydrated salmon (min. 27%)", "34% protein, high palatability", "Salmon oil, fish & liver flavour", "XOS prebiotics & yucca", "Taurine for a healthy heart"],
    ingredients: "Salmon Proteins (dehydrated, min. 27%), Dehydrated Chicken Protein, Rice, Corn, Chicken Fat, Beet Pulp, Fish Flavor, Liver Flavor, Salmon Oil, Vitamins and Minerals, Xylo-oligosaccharides, Brewer's Yeast, Salt, Yucca Schidigera, Antioxidants.",
    analytical: [{ name: "Crude Protein", value: "34% (min)" }, { name: "Crude Fat", value: "14% (min)" }, { name: "Crude Fibre", value: "4% (max)" }, { name: "Crude Ash", value: "7% (max)" }],
    additives: [{ name: "Vitamin A", value: "18,000 IU/kg" }, { name: "Vitamin D3", value: "1,500 IU/kg" }, { name: "Vitamin E", value: "200 mg/kg" }, { name: "Vitamin C", value: "200 mg/kg" }, { name: "Taurine", value: "1,500 mg/kg" }],
    feeding: FEED_GENERIC, sources: ["https://petmarket.bg/en/product/reflex-plus-adult-cat-choosy-with-salmon-15kg/"],
  },
  {
    id: "prostar-adult-chicken", name: "Prostar Adult — Chicken", tagline: "Adult cat dry food · Chicken",
    brand: "Prostar", category: "Adult food", image: "images/products/prostar-adult-chicken.png",
    price: 4100, compareAt: 4800, rating: 4.6, reviews: 120, stock: 14, stockMax: 40, badges: ["sale"],
    variants: [{ label: "15 kg", sub: "best value", price: 4100, compareAt: 4800 }],
    short: "Great everyday nutrition at a friendly price. A hearty chicken recipe in a big 15 kg value bag — a smart choice for multi-cat homes.",
    features: ["26% protein, real chicken", "With fish oil for omega-3 & 6", "Big 15 kg value bag", "Taurine for heart & eye health", "Brewer's yeast for digestion"],
    ingredients: "Dried Animal Protein and Chicken Meat (chicken min. 5%), Rice, Corn, Semolina Flour (or Wheat), Chicken Fat, Fish Oil, Brewer's Yeast, Vitamins and Minerals.",
    analytical: [{ name: "Crude Protein", value: "26%" }, { name: "Crude Fat", value: "14%" }, { name: "Crude Fibre", value: "6%" }, { name: "Crude Ash", value: "9%" }, { name: "Moisture", value: "8%" }, { name: "Calcium", value: "2%" }, { name: "Phosphorus", value: "1%" }],
    additives: [{ name: "Omega-3", value: "0.2 mg/kg" }, { name: "Omega-6", value: "0.4 mg/kg" }, { name: "Vitamin A", value: "2,500 IU/kg" }, { name: "Vitamin D", value: "1,000 IU/kg" }, { name: "Vitamin E", value: "80 mg/kg" }, { name: "Vitamin C", value: "120 mg/kg" }, { name: "Taurine", value: "1,000 mg/kg" }],
    feeding: FEED_GENERIC, sources: ["https://www.petelementsbd.com/product/prostar-adult-cat-food-with-chicken-1-2kg/"],
  },
  {
    id: "prostar-kitten-chicken", name: "Prostar Kitten — Chicken", tagline: "Kitten cat dry food · Chicken",
    brand: "Prostar", category: "Kitten food", image: "images/products/prostar-kitten-chicken.png",
    price: 4100, compareAt: 4800, rating: 4.7, reviews: 83, stock: 10, stockMax: 40, badges: ["sale"],
    variants: [{ label: "15 kg", sub: "best value", price: 4100, compareAt: 4800 }],
    short: "High-protein chicken nutrition for growing kittens in a value 15 kg bag — with prebiotics and yucca for easy digestion.",
    features: ["30% protein for growth", "Real chicken + hydrolysed fish", "Prebiotic, yucca & oligosaccharides", "Fish oil for omega-3 & 6", "Taurine for heart & eyes"],
    ingredients: "Dried Chicken Meat (min. 5%), Rice, Corn, Wheat, Chicken Fat, Fish Oil, Brewer's Yeast, Hydrolyzed Fish Derivatives, Carob Flour, Vitamins and Minerals, Prebiotic, Yucca, Oligosaccharides.",
    analytical: [{ name: "Crude Protein", value: "30%" }, { name: "Crude Fat", value: "16%" }, { name: "Crude Fibre", value: "3%" }, { name: "Crude Ash", value: "6%" }, { name: "Moisture", value: "8%" }, { name: "Calcium", value: "2%" }, { name: "Phosphorus", value: "1%" }],
    additives: [{ name: "Omega-3", value: "0.1 mg/kg" }, { name: "Omega-6", value: "0.4 mg/kg" }, { name: "Vitamin A", value: "15,000 IU/kg" }, { name: "Vitamin D", value: "1,250 IU/kg" }, { name: "Vitamin E", value: "100 mg/kg" }, { name: "Vitamin C", value: "150 mg/kg" }, { name: "Taurine", value: "1,200 mg/kg" }],
    feeding: "Feed kittens freely up to 12 months. " + FEED_GENERIC, sources: ["https://www.petelementsbd.com/product/prostar-kitten-food-with-chicken-1-2kg/"],
  },
  {
    id: "prostar-sterilised-salmon-ak", name: "Prostar Sterilised — Salmon (Adult & Kitten)", tagline: "Sterilised adult & kitten · Salmon",
    brand: "Prostar", category: "Sterilised", image: "images/products/prostar-sterilised-salmon-ak.png",
    price: 370, compareAt: 440, rating: 4.6, reviews: 52, stock: 13, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.2 kg", sub: "starter", price: 370, compareAt: 440 }],
    short: "Salmon recipe for sterilised cats of any age — light on calories, big on flavour, and easy on the wallet.",
    features: ["For sterilised cats, any age", "Real salmon flavour", "Budget-friendly starter size"],
    ingredients: "", analytical: [], additives: [], feeding: FEED_GENERIC, sources: ["https://petsone.pk/product/prostar-sterilised-adult-cat-food-salmon-1-2-kg/"],
  },
  {
    id: "prostar-adult-sterilised-salmon", name: "Prostar Adult Sterilised — Salmon", tagline: "Sterilised adult cat dry food · Salmon",
    brand: "Prostar", category: "Sterilised", image: "images/products/prostar-adult-sterilised-salmon.png",
    price: 370, compareAt: 440, rating: 4.6, reviews: 39, stock: 12, stockMax: 40, badges: ["sale"],
    variants: [{ label: "1.2 kg", sub: "starter", price: 370, compareAt: 440 }],
    short: "A light salmon recipe for spayed and neutered adult cats — keeps weight in check without skimping on taste.",
    features: ["For sterilised adult cats", "Real salmon flavour", "Budget-friendly size"],
    ingredients: "", analytical: [], additives: [], feeding: FEED_GENERIC, sources: ["https://petsone.pk/product/prostar-sterilised-adult-cat-food-salmon-1-2-kg/"],
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
