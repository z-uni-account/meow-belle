# Meow Belle — storefront

A polished, clickable cat-food store. No install, no server needed.

## Open it
Double-click **`index.html`**. That's it. The cart, countdown timer, promo codes and
everything else work right in the browser.

## Add your product photos
Drop photos into `images/products/` using the exact filenames listed in
`images/README.md`. Placeholders swap for your photos automatically. The homepage hero
(`hero.png`) is already wired in.

## Pages
- `index.html` — home
- `shop.html` — all products
- `product.html?id=belles-daily` — product page (works for every product)
- `about.html`, `contact.html`, `cart.html`

## Change prices / products
Everything lives in one file: `assets/js/products.js` (prices in Taka, stock, ratings,
variants, descriptions). Edit there — no other files to touch.

## Going live on Shopify
This is the design + copy source. To launch on Shopify: create the 6 products in Shopify
admin with these names/prices, pick a clean theme (Dawn), and we port this look + the
sales mechanics (countdown, subscribe & save, bundle, free-shipping bar) into it. Say the
word and I'll do that pass.

## What's built in (conversion mechanics)
Launch-sale announcement bar · countdown timer · compare-at pricing + % off badges ·
Subscribe & Save 15% · buy-more-save-more tiers · free-shipping progress bar · low-stock
scarcity · star ratings + reviews · live "just bought" popups · trust badges · sticky
add-to-cart · cart drawer with promo codes · bundle upsell.
