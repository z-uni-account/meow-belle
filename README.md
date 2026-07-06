# 🐾 Meow Belle — cat food store

> **⚠️ SEPARATE PRIVATE BUSINESS.** Meow Belle is Z's own private venture. It is **NOT**
> part of Mindframe Media and shares nothing with it — different repo, different hosting,
> different money, different customers. Never cross-link, cross-commit, or mix Meow Belle
> with Mindframe client work, the Mindframe dashboard, or the Mindframe git repo.

A polished, clickable DTC cat-food storefront. Electric-blue playful brand. Prices in
Bangladeshi Taka (BDT). Built as a self-contained static site — no backend, no install.

---

## Status (as of 2026-07-07)

| | |
|---|---|
| **Stage** | Design + copy build complete, hosted for preview. Not taking real orders yet. |
| **Live preview** | https://z-uni-account.github.io/meow-belle/ (GitHub Pages) |
| **GitHub repo** | https://github.com/z-uni-account/meow-belle (public, so free Pages works) |
| **Hosting** | GitHub Pages, `main` branch root. Push to `main` → auto-redeploys in ~15–60s. |

### Pending (Z is gathering these)
- **Real product list + pricing** — current 6 products and Taka prices are placeholders
  Z chose to demo the layout. Swap the real catalogue in when ready (see below).
- **Real product photos** — site shows branded placeholder tiles until photos are added.
- **Shopify port** — take the look + sales mechanics live on a real Shopify store so it
  accepts orders. Not started; do when the product/pricing list is final.

---

## Open it
Double-click **`index.html`** (or use the live link). Cart, countdown, promo codes and
everything else run right in the browser — no server needed.

## Where to edit products & prices
**One file: `assets/js/products.js`.** It holds every product — name, Taka price,
compare-at price, stock, rating, variants (bag sizes), descriptions, ingredients, feeding
guide. Edit there; nothing else to touch. When Z's final product/pricing list lands, this
is the only file that changes.

Store-wide settings (currency, free-shipping threshold ৳2,000, promo codes, subscribe
discount) are at the top of the same file in the `window.MEOW` object.

## Add product photos
Drop photos into `images/products/` using the exact filenames in `images/README.md`.
Placeholders swap for the real photos automatically. The homepage hero (`hero.png`) and
logo (`Logo.png`) are already wired in.

---

## Pages
- `index.html` — home
- `shop.html` — all products
- `product.html?id=<id>` — product page (works for every product)
- `about.html`, `contact.html`, `cart.html`

## Structure
```
Meow Belle - Cat food store/
├── index / shop / product / cart / about / contact .html
├── hero.png            homepage hero (already wired)
├── Logo.png            brand mark / favicon
├── assets/
│   ├── css/styles.css  all styling + responsive/mobile rules
│   └── js/
│       ├── products.js CATALOGUE — edit prices/products here
│       └── app.js      storefront engine (cart, timer, drawer, pages)
└── images/products/    drop real photos here (see images/README.md)
```

## Conversion mechanics built in
Launch-sale announcement bar · countdown timer · compare-at pricing + % off badges ·
Subscribe & Save 15% · buy-more-save-more tiers · free-shipping progress bar · low-stock
scarcity · star ratings + reviews · live "just bought" popups · trust badges · sticky
add-to-cart · cart drawer with promo codes · bundle upsell. Fully responsive (verified on
real mobile).

## Going live on Shopify (when ready)
This repo is the design + copy source. To launch: create the final products in Shopify
admin, pick a clean theme (Dawn), and port this look + the sales mechanics into it. Do
this pass once Z's product/pricing list is final.
