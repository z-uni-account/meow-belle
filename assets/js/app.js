/* ============================================================
   MEOW BELLE — storefront engine
   Chrome injection · cart · drawer · countdown · toasts · pages
   No backend required — cart persists in the browser.
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const C = window.MEOW;
  const PRODUCTS = window.MEOW_PRODUCTS;

  // paw-print mask for placeholder tiles
  const PAW = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cellipse cx='32' cy='44' rx='15' ry='12'/%3E%3Cellipse cx='14' cy='28' rx='6' ry='8'/%3E%3Cellipse cx='27' cy='19' rx='6' ry='8'/%3E%3Cellipse cx='42' cy='19' rx='6' ry='8'/%3E%3Cellipse cx='52' cy='28' rx='6' ry='8'/%3E%3C/svg%3E\")";
  document.documentElement.style.setProperty("--paw", PAW);

  const PAWS_BG = `<svg class="hero__paws" aria-hidden="true"><defs><pattern id="pw" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(18)"><path d="M20 44a10 8 0 1 0 20 0a10 8 0 1 0-20 0M8 28a4 5 0 1 0 8 0a4 5 0 1 0-8 0M18 20a4 5 0 1 0 8 0a4 5 0 1 0-8 0M34 20a4 5 0 1 0 8 0a4 5 0 1 0-8 0M44 28a4 5 0 1 0 8 0a4 5 0 1 0-8 0" fill="#fff"/></pattern></defs><rect width="100%" height="100%" fill="url(%23pw)"/></svg>`;

  /* ---------- money & format ---------- */
  const money = (n) => C.currency + Math.round(n).toLocaleString("en-US");
  const stars = (r) => {
    const full = Math.floor(r), half = r - full >= 0.5;
    return "★".repeat(full) + (half ? "½" : "") ;
  };
  const rand = (a) => a[Math.floor(Math.random() * a.length)];

  /* nutrition rendering (real, sourced data only) */
  function nutriHighlights(p) {
    if (!p.analytical || !p.analytical.length) return "";
    const pick = (k) => p.analytical.find((a) => a.name.toLowerCase().includes(k));
    const cells = [["Protein", "protein"], ["Fat", "fat"], ["Fibre", "fibre"]]
      .map(([label, key]) => { const a = pick(key); return a ? `<div class="nutri-pill"><b>${a.value}</b><span>${label}</span></div>` : ""; }).join("");
    return cells ? `<div class="nutri-pills" title="Guaranteed analysis">${cells}</div>` : "";
  }
  function nutriTable(rows) {
    return `<table class="nutri-table"><tbody>${rows.map((r) => `<tr><td>${r.name}</td><td>${r.value}</td></tr>`).join("")}</tbody></table>`;
  }

  /* ---------- media (photo or intentional placeholder) ---------- */
  function media(imgPath, label, cls = "") {
    return `<div class="media-wrap ${cls}" style="position:absolute;inset:0">
      <img class="media-img" src="${imgPath}" alt="${label}" loading="lazy" onerror="this.style.display='none'">
      <div class="ph"><b>${label}</b><small>Your photo here</small></div>
    </div>`;
  }

  /* ============================================================
     CART (localStorage)
     ============================================================ */
  const CART_KEY = "meow_cart_v1", PROMO_KEY = "meow_promo_v1";
  const readCart = () => { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } };
  const writeCart = (c) => { localStorage.setItem(CART_KEY, JSON.stringify(c)); renderChrome(); };
  const getPromo = () => localStorage.getItem(PROMO_KEY) || "";
  const setPromo = (code) => { code ? localStorage.setItem(PROMO_KEY, code) : localStorage.removeItem(PROMO_KEY); };

  function lineKey(id, variant, sub) { return `${id}::${variant || ""}::${sub ? "sub" : "one"}`; }

  function addToCart(id, { variant = "", sub = false, qty = 1 } = {}) {
    const cart = readCart();
    const key = lineKey(id, variant, sub);
    const found = cart.find((l) => lineKey(l.id, l.variant, l.sub) === key);
    if (found) found.qty += qty; else cart.push({ id, variant, sub, qty });
    writeCart(cart);
    openDrawer();
    burstCart();
  }
  function setQty(key, delta) {
    let cart = readCart();
    const l = cart.find((x) => lineKey(x.id, x.variant, x.sub) === key);
    if (!l) return;
    l.qty += delta;
    if (l.qty <= 0) cart = cart.filter((x) => x !== l);
    writeCart(cart);
  }
  function removeLine(key) { writeCart(readCart().filter((l) => lineKey(l.id, l.variant, l.sub) !== key)); }

  // pricing: base -> subscribe 15% -> qty tier (2:=10%, 3+:=15%)
  function tierRate(qty) { return qty >= 3 ? 0.15 : qty >= 2 ? 0.10 : 0; }
  function unitPrice(l) {
    const p = getProduct(l.id);
    let base = p.price, wasBase = p.compareAt;
    if (l.variant) { const v = p.variants.find((v) => v.label === l.variant); if (v) { base = v.price; wasBase = v.compareAt; } }
    let unit = base;
    if (l.sub) unit *= (1 - C.subscribeSave);
    unit *= (1 - tierRate(l.qty));
    return { unit, base, wasBase };
  }
  function cartTotals() {
    const cart = readCart();
    let subtotal = 0, compareTotal = 0;
    cart.forEach((l) => { const { unit, wasBase } = unitPrice(l); subtotal += unit * l.qty; compareTotal += wasBase * l.qty; });
    let promoRate = C.promos[getPromo()] || 0;
    const promoOff = subtotal * promoRate;
    const afterPromo = subtotal - promoOff;
    const ship = afterPromo >= C.freeShipThreshold || afterPromo === 0 ? 0 : C.shipFlat;
    const total = afterPromo + ship;
    const saved = (compareTotal - subtotal) + promoOff;
    const count = cart.reduce((s, l) => s + l.qty, 0);
    return { cart, subtotal, compareTotal, promoRate, promoOff, ship, total, saved, count, afterPromo };
  }

  /* ============================================================
     CHROME (announcement · header · footer · drawer · toasts)
     ============================================================ */
  const NAV = [["index.html", "Home"], ["shop.html", "Shop"], ["about.html", "About"], ["contact.html", "Contact"]];
  const here = location.pathname.split("/").pop() || "index.html";

  const ANNOUNCE = [
    `🐾 Launch sale — <b>20% off</b> your first order with code <span class="code">MEOW20</span>`,
    `🚚 Free delivery on orders over <b>${money(C.freeShipThreshold)}</b>`,
    `💙 Subscribe & save <b>15%</b> on every bag, forever`,
  ];
  let announceIdx = 0;

  function chromeShell() {
    if ($("#meow-chrome")) return; // once
    const shell = document.createElement("div");
    shell.id = "meow-chrome";
    shell.innerHTML = `
      <div class="announce"><div class="announce__track" id="announceTrack">${ANNOUNCE[0]}</div></div>
      <header class="site-header"><div class="wrap nav">
        <a class="brand" href="index.html" aria-label="Meow Belle home">
          <img class="brand__mark" src="Logo.png" alt="">
          <span class="brand__name">Meow<span> Belle</span></span>
        </a>
        <nav class="nav__links">${NAV.map(([h, t]) => `<a href="${h}" ${h === here ? 'aria-current="page"' : ""}>${t}</a>`).join("")}</nav>
        <div class="nav__actions">
          <button class="icon-btn" id="openCart" aria-label="Open cart">
            🛒<span class="cart-count" id="cartCount">0</span>
          </button>
          <a class="btn btn-blue" href="shop.html" style="padding:11px 22px">Shop now</a>
        </div>
      </div></header>`;
    document.body.prepend(shell);

    // drawer + scrim + toasts appended once
    const extra = document.createElement("div");
    extra.innerHTML = `
      <div class="scrim" id="scrim"></div>
      <aside class="drawer" id="drawer" aria-label="Shopping cart" aria-hidden="true"><div id="drawerInner"></div></aside>
      <div class="toasts" id="toasts" aria-live="polite"></div>`;
    document.body.appendChild(extra);

    $("#openCart").addEventListener("click", openDrawer);
    $("#scrim").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

    // announcement rotator
    setInterval(() => {
      const t = $("#announceTrack"); if (!t) return;
      t.style.opacity = 0;
      setTimeout(() => { announceIdx = (announceIdx + 1) % ANNOUNCE.length; t.innerHTML = ANNOUNCE[announceIdx]; t.style.opacity = 1; }, 380);
    }, 4200);
  }

  function footerShell() {
    if ($("#meow-footer")) return;
    const f = document.createElement("footer");
    f.id = "meow-footer"; f.className = "site-footer";
    f.innerHTML = `<div class="wrap">
      <div class="footer__grid">
        <div class="footer__brand">
          <a class="brand" href="index.html"><img class="brand__mark" src="Logo.png" alt=""><span class="brand__name">Meow Belle</span></a>
          <p>Real food for real happy cats. Vet-formulated, made with ingredients you can actually pronounce — delivered to your door across Bangladesh.</p>
        </div>
        <div class="footer__col"><h4>Shop</h4>
          ${PRODUCTS.map((p) => `<a href="product.html?id=${p.id}">${p.name}</a>`).join("")}
        </div>
        <div class="footer__col"><h4>Company</h4>
          <a href="about.html">Our story</a><a href="contact.html">Contact</a><a href="shop.html">All products</a><a href="#">Subscriptions</a>
        </div>
        <div class="footer__col"><h4>Help</h4>
          <a href="#">Shipping & delivery</a><a href="#">Returns</a><a href="#">Feeding guide</a><a href="contact.html">FAQ</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© ${yearNow()} Meow Belle. Made with 🐾 in Bangladesh.</span>
        <div class="footer__pay"><span>bKash</span><span>Nagad</span><span>VISA</span><span>Mastercard</span><span>COD</span></div>
      </div></div>`;
    document.body.appendChild(f);
  }
  function yearNow() { return new Date().getFullYear(); }

  /* ---------- cart count badge ---------- */
  function burstCart() {
    const el = $("#cartCount"); if (!el) return;
    el.classList.remove("show"); void el.offsetWidth; el.classList.add("show");
  }
  function renderChrome() {
    const { count } = cartTotals();
    const el = $("#cartCount");
    if (el) { el.textContent = count; el.classList.toggle("show", count > 0); }
    renderDrawer();
    if (here === "cart.html") renderCartPage();
  }

  /* ============================================================
     DRAWER
     ============================================================ */
  function openDrawer() { renderDrawer(); $("#drawer")?.classList.add("open"); $("#scrim")?.classList.add("open"); $("#drawer")?.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
  function closeDrawer() { $("#drawer")?.classList.remove("open"); $("#scrim")?.classList.remove("open"); $("#drawer")?.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }

  function renderDrawer() {
    const inner = $("#drawerInner"); if (!inner) return;
    const t = cartTotals();
    if (!t.cart.length) {
      inner.innerHTML = `
        <div class="drawer__head"><h3>Your cart</h3><button class="icon-btn" id="closeCart" aria-label="Close">✕</button></div>
        <div class="drawer__empty"><div class="big">🐈‍⬛</div><p><b>Your bowl is empty.</b><br>Let's fix that.</p><a class="btn btn-amber" href="shop.html">Start shopping</a></div>`;
      $("#closeCart").addEventListener("click", closeDrawer);
      return;
    }
    const remaining = Math.max(0, C.freeShipThreshold - t.afterPromo);
    const pct = Math.min(100, (t.afterPromo / C.freeShipThreshold) * 100);
    inner.innerHTML = `
      <div class="drawer__head"><h3>Your cart · ${t.count}</h3><button class="icon-btn" id="closeCart" aria-label="Close">✕</button></div>
      <div class="drawer__ship">
        <p>${remaining > 0 ? `You're <b>${money(remaining)}</b> away from free delivery 🚚` : `🎉 <b>You've unlocked free delivery!</b>`}</p>
        <div class="ship-bar"><i style="width:${pct}%"></i></div>
      </div>
      <div class="drawer__items">${t.cart.map(lineHTML).join("")}</div>
      <div class="drawer__foot">
        <div class="drawer__promo">
          <input id="promoInput" placeholder="Promo code" value="${getPromo()}" aria-label="Promo code">
          <button id="applyPromo">Apply</button>
        </div>
        ${t.saved > 0 ? `<div class="drawer__save">🎉 You're saving ${money(t.saved)} on this order</div>` : ""}
        <div class="drawer__row"><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
        ${t.promoOff > 0 ? `<div class="drawer__row"><span class="disc">Promo (${getPromo()})</span><span class="disc">−${money(t.promoOff)}</span></div>` : ""}
        <div class="drawer__row"><span>Delivery</span><span>${t.ship === 0 ? "FREE" : money(t.ship)}</span></div>
        <div class="drawer__row total"><span>Total</span><span>${money(t.total)}</span></div>
        <a class="btn btn-amber btn-block btn-lg" href="cart.html" style="margin-top:14px">Checkout →</a>
      </div>`;
    $("#closeCart").addEventListener("click", closeDrawer);
    wireLineControls(inner);
    $("#applyPromo").addEventListener("click", () => applyPromoFromInput($("#promoInput").value));
    $("#promoInput").addEventListener("keydown", (e) => { if (e.key === "Enter") applyPromoFromInput(e.target.value); });
  }

  function lineHTML(l) {
    const p = getProduct(l.id);
    const { unit } = unitPrice(l);
    const key = lineKey(l.id, l.variant, l.sub);
    return `<div class="line" data-key="${key}">
      <div class="line__media">${media(p.image, p.name)}</div>
      <div>
        <div class="line__title">${p.name}</div>
        <div class="line__meta">${l.variant ? l.variant + " · " : ""}${l.sub ? '<span class="sub">Subscribe & Save</span>' : "One-time"}</div>
        <div class="qty"><button data-act="dec" aria-label="Decrease">−</button><span>${l.qty}</span><button data-act="inc" aria-label="Increase">+</button></div>
      </div>
      <div style="text-align:right">
        <div class="line__price">${money(unit * l.qty)}</div>
        <button class="line__rm" data-act="rm">Remove</button>
      </div>
    </div>`;
  }
  function wireLineControls(root) {
    $$(".line", root).forEach((row) => {
      const key = row.dataset.key;
      row.querySelector('[data-act="dec"]')?.addEventListener("click", () => setQty(key, -1));
      row.querySelector('[data-act="inc"]')?.addEventListener("click", () => setQty(key, 1));
      row.querySelector('[data-act="rm"]')?.addEventListener("click", () => removeLine(key));
    });
    $$(".cart-row", root).forEach((row) => {
      const key = row.dataset.key;
      row.querySelector('[data-act="dec"]')?.addEventListener("click", () => setQty(key, -1));
      row.querySelector('[data-act="inc"]')?.addEventListener("click", () => setQty(key, 1));
      row.querySelector('[data-act="rm"]')?.addEventListener("click", () => removeLine(key));
    });
  }
  function applyPromoFromInput(val) {
    const code = (val || "").trim().toUpperCase();
    if (!code) { setPromo(""); renderChrome(); return; }
    if (C.promos[code]) { setPromo(code); toast("✅", "Promo applied", `${Math.round(C.promos[code] * 100)}% off your order`); }
    else { setPromo(""); toast("🤔", "Hmm, that code didn't work", "Try MEOW20 for 20% off"); }
    renderChrome();
  }

  /* ============================================================
     TOASTS — social proof + system messages
     ============================================================ */
  function toast(icon, title, sub, verified) {
    const box = $("#toasts"); if (!box) return;
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `<div class="toast__ic">${icon}</div><div><b>${title}</b><small>${sub}${verified ? ' · <span class="verified">✓ Verified</span>' : ""}</small></div>`;
    box.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
    setTimeout(() => { el.classList.remove("show"); setTimeout(() => el.remove(), 450); }, 4600);
  }
  function startSocialProof() {
    const names = ["Ayesha", "Rahim", "Sadia", "Tanvir", "Nabila", "Fahim", "Mira", "Zayan", "Ruma", "Arif"];
    const purchases = PRODUCTS.filter((p) => !p.bundleOf || true);
    let first = true;
    const ping = () => {
      const p = rand(purchases);
      toast("🐾", `${rand(names)} in ${rand(C.cities)}`, `just grabbed <b>${p.name}</b>`, true);
    };
    setTimeout(ping, first ? 3500 : 0);
    setInterval(ping, 12000);
  }

  /* ============================================================
     COUNTDOWN (evergreen launch sale)
     ============================================================ */
  const SALE_KEY = "meow_saleEnd_v1";
  function saleEnd() {
    let end = parseInt(localStorage.getItem(SALE_KEY) || "0", 10);
    if (!end || end < Date.now()) { end = Date.now() + (2 * 24 * 60 * 60 + 8 * 3600) * 1000; localStorage.setItem(SALE_KEY, end); }
    return end;
  }
  function tickCountdown() {
    const els = $$("[data-cd]"); if (!els.length) return;
    const update = () => {
      let diff = Math.max(0, saleEnd() - Date.now());
      const d = Math.floor(diff / 86400000); diff -= d * 86400000;
      const h = Math.floor(diff / 3600000); diff -= h * 3600000;
      const m = Math.floor(diff / 60000); diff -= m * 60000;
      const s = Math.floor(diff / 1000);
      const pad = (n) => String(n).padStart(2, "0");
      els.forEach((el) => {
        el.querySelector('[data-u="d"]') && (el.querySelector('[data-u="d"]').textContent = pad(d));
        el.querySelector('[data-u="h"]').textContent = pad(h);
        el.querySelector('[data-u="m"]').textContent = pad(m);
        el.querySelector('[data-u="s"]').textContent = pad(s);
      });
    };
    update(); setInterval(update, 1000);
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((el) => io.observe(el));
  }

  /* ============================================================
     REUSABLE PRODUCT CARD
     ============================================================ */
  function badgeHTML(p) {
    const out = [];
    if (p.badges?.includes("bestseller")) out.push('<span class="pill pill-best">★ Bestseller</span>');
    if (p.compareAt > p.price) out.push(`<span class="pill pill-sale">−${Math.round((1 - p.price / p.compareAt) * 100)}%</span>`);
    if (p.badges?.includes("save") && p.id === "full-bowl-bundle") out.push('<span class="pill pill-save">Save ৳801</span>');
    return out.join("");
  }
  function cardHTML(p) {
    const low = p.stock <= 10;
    return `<article class="card reveal">
      <a class="card__media" href="product.html?id=${p.id}" aria-label="${p.name}">
        ${media(p.image, p.name)}
        <div class="card__badges">${badgeHTML(p)}</div>
      </a>
      <button class="card__fav" aria-label="Save ${p.name}">♡</button>
      <div class="card__body">
        <span class="card__cat">${p.category}</span>
        <a href="product.html?id=${p.id}"><h3 class="card__title">${p.name}</h3></a>
        <div class="card__rating"><span class="stars">${stars(p.rating)}</span> ${p.rating} · ${p.reviews.toLocaleString()} reviews</div>
        <div class="card__price"><span class="price-now">${money(p.price)}</span>${p.compareAt > p.price ? `<span class="price-was">${money(p.compareAt)}</span>` : ""}</div>
        ${low ? `<div class="card__stock">🔥 Only ${p.stock} left<div class="bar"><i style="width:${(p.stock / p.stockMax) * 100}%"></i></div></div>` : ""}
        <div class="card__cta"><button class="btn btn-blue btn-block" data-add="${p.id}">Add to cart</button></div>
      </div>
    </article>`;
  }
  function wireCardAdds(root = document) {
    $$("[data-add]", root).forEach((b) => b.addEventListener("click", (e) => { e.preventDefault(); addToCart(b.dataset.add, { variant: getProduct(b.dataset.add).variants?.[0]?.label || "" }); }));
    $$(".card__fav", root).forEach((b) => b.addEventListener("click", () => { b.textContent = b.textContent === "♡" ? "♥" : "♡"; b.style.color = b.textContent === "♥" ? "var(--coral)" : ""; }));
  }

  /* ============================================================
     PAGE: HOME
     ============================================================ */
  function renderHome(main) {
    const hero = PRODUCTS.find((p) => p.hero);
    const feat = PRODUCTS.slice(0, 3);
    main.innerHTML = `
    <section class="hero">${PAWS_BG}
      <div class="wrap hero__grid">
        <div class="hero__copy">
          <span class="eyebrow hero__eyebrow">🐾 Fresh · Vet-formulated · <b>Now in Bangladesh</b></span>
          <div class="hero__salepill"><span class="pill pill-sale">🔥 Launch sale · 20% OFF</span><span class="hero__code">with code <b>MEOW20</b></span></div>
          <h1>Real food.<br>Real <span class="accent">happy</span> cats.</h1>
          <p class="hero__sub">Premium cat food cats actually crave — Reflex Plus & Prostar, real meat first, delivered across Bangladesh.</p>
          <div class="hero__cta">
            <a class="btn btn-amber btn-lg" href="product.html?id=${hero.id}">Shop the bestseller →</a>
            <a class="btn btn-ghost btn-lg" href="shop.html" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.5)">See the menu</a>
          </div>
          <div class="hero__trust">
            <div><span class="hero__stars">★★★★★</span><small>4.9 from 3,600+ cat parents</small></div>
            <div><b style="font-size:1.4rem">13K+</b><small>bowls served</small></div>
          </div>
        </div>
        <div class="hero__stage hero__stage--img">
          <img class="hero__img" src="hero.png" alt="Meow Belle — a black cat peeking out of a food bag on a mountain of kibble" fetchpriority="high">
        </div>
      </div>
    </section>

    <div class="marquee"><div class="marquee__track">
      <span>🐾 REAL MEAT FIRST 🐾 <b>NO FILLERS</b> 🐾 VET-FORMULATED 🐾 <b>FREE DELIVERY OVER ৳2,000</b> 🐾 SUBSCRIBE & SAVE 15% 🐾 <b>MADE FOR BANGLADESH'S CATS</b> </span>
      <span>🐾 REAL MEAT FIRST 🐾 <b>NO FILLERS</b> 🐾 VET-FORMULATED 🐾 <b>FREE DELIVERY OVER ৳2,000</b> 🐾 SUBSCRIBE & SAVE 15% 🐾 <b>MADE FOR BANGLADESH'S CATS</b> </span>
    </div></div>

    <section class="section">
      <div class="wrap">
        <div class="section__head center reveal">
          <span class="eyebrow">The menu</span>
          <h2>Fan favourites, flying off the shelf</h2>
          <p>Every recipe is built on real, named proteins — never mystery "animal derivatives." Pick your cat's new obsession.</p>
        </div>
        <div class="grid-products" id="homeGrid">${feat.map(cardHTML).join("")}</div>
        <div style="text-align:center;margin-top:36px" class="reveal"><a class="btn btn-ink btn-lg" href="shop.html">Shop all products →</a></div>
      </div>
    </section>

    <section class="section section--tint">
      <div class="wrap">
        <div class="section__head center reveal"><span class="eyebrow">Why Meow Belle</span><h2>Food you'd feel good eating<br>(if you were a cat)</h2></div>
        <div class="values">
          <div class="value reveal" data-delay="0"><div class="value__ic">🍗</div><h3>Real meat first</h3><p>Deboned chicken, salmon and whitefish lead every recipe — not corn or "meal."</p></div>
          <div class="value reveal" data-delay="1"><div class="value__ic">🚫</div><h3>Zero nasties</h3><p>No corn, wheat, soy, artificial colours, flavours or preservatives. Ever.</p></div>
          <div class="value reveal" data-delay="2"><div class="value__ic">🩺</div><h3>Vet-formulated</h3><p>Complete & balanced nutrition, developed with feline vets for every life stage.</p></div>
          <div class="value reveal" data-delay="3"><div class="value__ic">🚚</div><h3>To your door</h3><p>Fast delivery across Bangladesh, and free over ৳2,000. Subscribe and never run out.</p></div>
        </div>
      </div>
    </section>

    <section class="section"><div class="wrap"><div class="bundle reveal">${PAWS_BG}
      <div class="bundle__media" style="background:#fff">${media(hero.image, hero.name)}</div>
      <div class="bundle__body">
        <span class="pill pill-best">★ #1 Bestseller</span>
        <h2>${hero.name}</h2>
        <p style="color:rgba(255,255,255,.9);font-size:1.1rem">${hero.short}</p>
        <ul>${hero.features.slice(0, 3).map((f) => `<li>${f}</li>`).join("")}</ul>
        <div class="bundle__price"><span class="now">${money(hero.price)}</span><span class="was">${money(hero.compareAt)}</span><span style="font-weight:600;color:#fff">/ ${hero.variants[0].label}</span></div>
        <a class="btn btn-amber btn-lg" href="product.html?id=${hero.id}">Shop now →</a>
      </div>
    </div></div></section>

    <section class="section section--tint">
      <div class="wrap">
        <div class="section__head center reveal"><span class="eyebrow">Loved by cats & their humans</span><h2>3,600+ five-star bowls</h2></div>
        <div class="reviews">${window.MEOW_REVIEWS.slice(0, 3).map(reviewHTML).join("")}</div>
      </div>
    </section>

    <section class="section"><div class="wrap"><div class="guarantee reveal">
      <div><div class="g-ic">🩺</div><b>Vet-approved</b><small>Formulated with feline vets</small></div>
      <div><div class="g-ic">↩️</div><b>Happy-cat guarantee</b><small>Not loved? Full refund, 30 days</small></div>
      <div><div class="g-ic">🇧🇩</div><b>Made for BD</b><small>Priced & delivered locally</small></div>
      <div><div class="g-ic">🔒</div><b>Secure checkout</b><small>bKash, Nagad, card & COD</small></div>
    </div></div></section>

    <section class="section"><div class="wrap"><div class="news reveal">${PAWS_BG.replace('hero__paws','hero__paws').replace('fill="#fff"','fill="%23000"')}
      <span class="eyebrow" style="color:var(--blue-deep)">Join the clowder</span>
      <h2>Get 10% off your first bowl</h2>
      <p>Sign up for feeding tips, restock reminders and subscriber-only deals. Your cat will thank you (eventually).</p>
      <form class="news__form" id="newsForm"><input type="email" placeholder="you@email.com" required aria-label="Email"><button class="btn btn-ink" type="submit">Get my 10%</button></form>
    </div></div></section>`;

    wireCardAdds(main);
    $("#newsForm")?.addEventListener("submit", (e) => { e.preventDefault(); e.target.reset(); toast("💌", "You're in!", "Check your inbox for 10% off"); });
  }

  function reviewHTML(r) {
    return `<div class="review reveal"><span class="stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</span>
      <p>"${r.text}"</p>
      <div class="review__who"><div class="review__av">${r.name[0]}</div><div><b>${r.name}</b><small>✓ Verified · ${r.product}</small></div></div>
    </div>`;
  }

  /* ============================================================
     PAGE: SHOP
     ============================================================ */
  function renderShop(main) {
    main.innerHTML = `
    <section class="page-hero">${PAWS_BG}<div class="wrap"><span class="eyebrow" style="color:#fff">The full menu</span><h1>Shop Meow Belle</h1><p>Premium Reflex Plus & Prostar cat food — every bag on launch sale, delivered across Bangladesh.</p></div></section>
    <section class="section"><div class="wrap">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;margin-bottom:28px">
        <p style="margin:0;font-weight:700">${PRODUCTS.length} products</p>
        <span class="pill pill-sale" style="font-size:.9rem">🔥 Launch sale — up to 21% off</span>
      </div>
      <div class="grid-products">${PRODUCTS.map(cardHTML).join("")}</div>
    </div></section>
    <section class="section section--tint"><div class="wrap"><div class="guarantee reveal">
      <div><div class="g-ic">🩺</div><b>Vet-approved</b><small>Formulated with feline vets</small></div>
      <div><div class="g-ic">↩️</div><b>30-day guarantee</b><small>Not loved? Full refund</small></div>
      <div><div class="g-ic">🚚</div><b>Free over ৳2,000</b><small>Fast BD-wide delivery</small></div>
      <div><div class="g-ic">💙</div><b>Subscribe & save</b><small>15% off every order</small></div>
    </div></div></section>`;
    wireCardAdds(main);
  }

  /* ============================================================
     PAGE: PRODUCT DETAIL
     ============================================================ */
  const PDP_STATE = { variant: 0, sub: false, qty: 1 };
  function renderProduct(main) {
    const id = new URLSearchParams(location.search).get("id") || PRODUCTS[0].id;
    const p = getProduct(id);
    if (!p) { main.innerHTML = `<section class="section"><div class="wrap"><h1>Product not found</h1><a class="btn btn-blue" href="shop.html">Back to shop</a></div></section>`; return; }
    document.title = `${p.name} — Meow Belle`;
    PDP_STATE.variant = 0; PDP_STATE.sub = false; PDP_STATE.qty = 1;

    const hasVariants = !!p.variants;
    const related = PRODUCTS.filter((x) => x.id !== p.id && x.id !== "full-bowl-bundle").slice(0, 3);

    main.innerHTML = `
    <section class="wrap pdp">
      <div class="crumbs"><a href="index.html">Home</a> / <a href="shop.html">Shop</a> / <span>${p.name}</span></div>
      <div class="pdp__grid">
        <div class="gallery">
          <div class="gallery__main">${media(p.image, p.name)}<div class="gallery__badges">${badgeHTML(p)}</div></div>
          <div class="gallery__thumbs">
            ${[0, 1, 2, 3].map((i) => `<div class="thumb" ${i === 0 ? 'aria-selected="true"' : ""}>${media(p.image, p.name)}</div>`).join("")}
          </div>
        </div>

        <div class="pdp__info">
          <span class="pdp__cat">${p.category}</span>
          <h1>${p.name}</h1>
          <p style="color:var(--ink-soft);margin:-4px 0 14px;font-size:1.15rem">${p.tagline}</p>
          <div class="pdp__rate"><span class="stars">${stars(p.rating)}</span> ${p.rating} <a href="#reviews">${p.reviews.toLocaleString()} reviews</a></div>

          <div class="pdp__pricing" id="pdpPricing"></div>
          <p class="pdp__tax">Tax included. Free delivery over ${money(C.freeShipThreshold)}.</p>

          <div class="countdown" data-cd>
            <div class="countdown__label">⏰ Launch sale ends in<br>Don't miss the drop</div>
            <div class="countdown__clock">
              <div class="cd-unit"><b data-u="d">00</b><span>days</span></div>
              <div class="cd-unit"><b data-u="h">00</b><span>hrs</span></div>
              <div class="cd-unit"><b data-u="m">00</b><span>min</span></div>
              <div class="cd-unit"><b data-u="s">00</b><span>sec</span></div>
            </div>
          </div>

          <p>${p.short}</p>
          ${nutriHighlights(p)}

          ${hasVariants ? `<div class="opt"><div class="opt__label">Size <span>Pick your bag</span></div><div class="chips" id="variantChips">
            ${p.variants.map((v, i) => `<button class="chip" data-vi="${i}" aria-pressed="${i === 0}">${v.label}<small>${money(v.price)} · ${v.sub}</small></button>`).join("")}
          </div></div>` : ""}

          <div class="buymode" id="buymode">
            <button class="buymode__opt" data-sub="false" aria-pressed="true">
              <span class="buymode__radio"></span>
              <span class="buymode__main"><b>One-time purchase</b><small>Ships once, no commitment</small></span>
              <span class="buymode__price" id="priceOne"></span>
            </button>
            <button class="buymode__opt" data-sub="true" aria-pressed="false">
              <span class="buymode__tag">SAVE 15%</span>
              <span class="buymode__radio"></span>
              <span class="buymode__main"><b>Subscribe & Save</b><small>Delivered monthly · skip or cancel anytime</small></span>
              <span class="buymode__price" id="priceSub"></span>
            </button>
          </div>

          <div class="tiers">
            <b>🎁 Stock up & save more</b>
            <div class="row"><span>Buy 2 bags</span><span><b>10% off</b> this item</span></div>
            <div class="row"><span>Buy 3+ bags</span><span><b>15% off</b> this item</span></div>
          </div>

          <div class="pdp__qtyadd">
            <div class="qty"><button data-q="dec" aria-label="Decrease">−</button><span id="qtyVal">1</span><button data-q="inc" aria-label="Increase">+</button></div>
            <button class="btn btn-amber btn-lg" style="flex:1" id="addBtn">Add to cart · <span id="addPrice"></span></button>
          </div>
          <div class="pdp__stockline">🔥 Selling fast — only ${p.stock} left<div class="bar"><i style="width:${(p.stock / p.stockMax) * 100}%"></i></div></div>

          <div class="pdp__trust">
            <div><span class="t-ic">🚚</span> Free delivery over ৳2,000</div>
            <div><span class="t-ic">↩️</span> 30-day happy-cat guarantee</div>
            <div><span class="t-ic">🩺</span> Vet-formulated recipe</div>
            <div><span class="t-ic">🔒</span> bKash · Nagad · Card · COD</div>
          </div>

          <div class="pdp__acc">
            <details class="acc-item" open><summary>Why cats love it</summary><div class="acc-item__body"><ul>${p.features.map((f) => `<li>${f}</li>`).join("")}</ul></div></details>
            <details class="acc-item"><summary>Ingredients</summary><div class="acc-item__body">${p.ingredients || "Full ingredient list coming soon — message us and we'll share the pack details."}</div></details>
            ${p.analytical && p.analytical.length ? `<details class="acc-item"><summary>Guaranteed analysis</summary><div class="acc-item__body">${nutriTable(p.analytical)}</div></details>` : ""}
            ${p.additives && p.additives.length ? `<details class="acc-item"><summary>Added vitamins & minerals</summary><div class="acc-item__body">${nutriTable(p.additives)}</div></details>` : ""}
            <details class="acc-item"><summary>Feeding guide</summary><div class="acc-item__body">${p.feeding}</div></details>
            <details class="acc-item"><summary>Delivery & returns</summary><div class="acc-item__body">Delivered across Bangladesh in 1–3 days. Free over ৳2,000, otherwise a flat ৳120. Not the right fit? Return within 30 days for a full refund — even if the bag is open.</div></details>
          </div>
        </div>
      </div>

      <div id="reviews" class="related">
        <div class="section__head"><span class="eyebrow">Reviews</span><h2>What cat parents say</h2></div>
        <div class="reviews">${window.MEOW_REVIEWS.slice(0, 3).map(reviewHTML).join("")}</div>
      </div>

      <div class="related">
        <div class="section__head"><span class="eyebrow">Pairs well with</span><h2>Complete the bowl</h2></div>
        <div class="grid-products">${related.map(cardHTML).join("")}</div>
      </div>
    </section>

    <div class="sticky-atc" id="stickyAtc"><div class="wrap sticky-atc__in">
      <div class="sticky-atc__info"><div class="sticky-atc__thumb">${media(p.image, p.name)}</div><div><b>${p.name}</b><br><span class="now" id="stickyPrice"></span></div></div>
      <button class="btn btn-amber btn-lg" id="stickyAdd">Add to cart</button>
    </div></div>`;

    // ----- pricing helpers for this product -----
    const curVariant = () => hasVariants ? p.variants[PDP_STATE.variant] : { price: p.price, compareAt: p.compareAt };
    function computeUnit() {
      const v = curVariant();
      let unit = v.price;
      if (PDP_STATE.sub) unit *= (1 - C.subscribeSave);
      unit *= (1 - tierRate(PDP_STATE.qty));
      return { unit, base: v.price, was: v.compareAt };
    }
    function paintPrices() {
      const v = curVariant();
      const pct = Math.round((1 - v.price / v.compareAt) * 100);
      $("#pdpPricing").innerHTML = `<span class="now">${money(v.price)}</span>${v.compareAt > v.price ? `<span class="was">${money(v.compareAt)}</span><span class="pdp__save">Save ${pct}%</span>` : ""}`;
      $("#priceOne").textContent = money(v.price);
      $("#priceSub").innerHTML = `${money(v.price * (1 - C.subscribeSave))}<br><span style="font-weight:400;font-size:.8rem;color:#9aa0b8;text-decoration:line-through">${money(v.price)}</span>`;
      const { unit } = computeUnit();
      $("#addPrice").textContent = money(unit * PDP_STATE.qty);
      $("#stickyPrice").textContent = money(unit * PDP_STATE.qty);
    }
    paintPrices();

    // variants
    $$("#variantChips .chip").forEach((c) => c.addEventListener("click", () => {
      PDP_STATE.variant = +c.dataset.vi;
      $$("#variantChips .chip").forEach((x) => x.setAttribute("aria-pressed", x === c));
      paintPrices();
    }));
    // buy mode
    $$("#buymode .buymode__opt").forEach((b) => b.addEventListener("click", () => {
      PDP_STATE.sub = b.dataset.sub === "true";
      $$("#buymode .buymode__opt").forEach((x) => x.setAttribute("aria-pressed", x === b));
      paintPrices();
    }));
    // qty
    $('[data-q="inc"]').addEventListener("click", () => { PDP_STATE.qty++; $("#qtyVal").textContent = PDP_STATE.qty; paintPrices(); });
    $('[data-q="dec"]').addEventListener("click", () => { if (PDP_STATE.qty > 1) { PDP_STATE.qty--; $("#qtyVal").textContent = PDP_STATE.qty; paintPrices(); } });
    // add
    const doAdd = () => addToCart(p.id, { variant: hasVariants ? p.variants[PDP_STATE.variant].label : "", sub: PDP_STATE.sub, qty: PDP_STATE.qty });
    $("#addBtn").addEventListener("click", doAdd);
    $("#stickyAdd").addEventListener("click", doAdd);
    // thumbs
    $$(".thumb").forEach((t) => t.addEventListener("click", () => { $$(".thumb").forEach((x) => x.removeAttribute("aria-selected")); t.setAttribute("aria-selected", "true"); }));
    // sticky bar visibility
    const atc = $("#stickyAtc"), addRow = $(".pdp__qtyadd");
    const io = new IntersectionObserver(([e]) => atc.classList.toggle("show", !e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    io.observe(addRow);

    wireCardAdds(main);
  }

  /* ============================================================
     PAGE: CART
     ============================================================ */
  function renderCartPage() {
    const wrap = $("#cartMount"); if (!wrap) return;
    const t = cartTotals();
    if (!t.cart.length) {
      wrap.innerHTML = `<div style="text-align:center;padding:60px 0"><div style="font-size:4rem">🐈‍⬛</div><h2 style="font-size:2rem;margin:10px 0">Your bowl is empty</h2><p style="color:var(--ink-soft)">Let's put something delicious in it.</p><a class="btn btn-amber btn-lg" href="shop.html">Shop the menu →</a></div>`;
      return;
    }
    const remaining = Math.max(0, C.freeShipThreshold - t.afterPromo);
    const pct = Math.min(100, (t.afterPromo / C.freeShipThreshold) * 100);
    wrap.innerHTML = `<div class="cart-layout">
      <div>
        <div class="drawer__ship" style="border:2px solid var(--line);border-radius:var(--r);margin-bottom:18px">
          <p>${remaining > 0 ? `Add <b>${money(remaining)}</b> more for free delivery 🚚` : `🎉 <b>You've unlocked free delivery!</b>`}</p>
          <div class="ship-bar"><i style="width:${pct}%"></i></div>
        </div>
        <div class="cart-list">${t.cart.map(cartRowHTML).join("")}</div>
      </div>
      <aside class="summary">
        <h3>Order summary</h3>
        <div class="drawer__promo" style="margin-bottom:16px"><input id="promoInput2" placeholder="Promo code" value="${getPromo()}"><button id="applyPromo2">Apply</button></div>
        <div class="row"><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
        ${t.promoOff > 0 ? `<div class="row"><span class="disc">Promo (${getPromo()})</span><span class="disc">−${money(t.promoOff)}</span></div>` : ""}
        <div class="row"><span>Delivery</span><span>${t.ship === 0 ? "FREE" : money(t.ship)}</span></div>
        ${t.saved > 0 ? `<div class="row disc"><span>You save</span><span>${money(t.saved)}</span></div>` : ""}
        <div class="row total"><span>Total</span><span>${money(t.total)}</span></div>
        <button class="btn btn-amber btn-block btn-lg" style="margin-top:16px" id="checkoutBtn">Secure checkout →</button>
        <div style="text-align:center;margin-top:12px;font-size:.82rem;color:var(--ink-soft)">🔒 bKash · Nagad · Card · Cash on delivery</div>
      </aside>
    </div>`;
    wireLineControls(wrap);
    $("#applyPromo2").addEventListener("click", () => applyPromoFromInput($("#promoInput2").value));
    $("#checkoutBtn").addEventListener("click", () => toast("🎉", "This is a demo store", "Hook up Shopify checkout to go live"));
  }
  function cartRowHTML(l) {
    const p = getProduct(l.id); const { unit, wasBase } = unitPrice(l);
    const key = lineKey(l.id, l.variant, l.sub);
    return `<div class="cart-row" data-key="${key}">
      <div class="cart-row__media">${media(p.image, p.name)}</div>
      <div>
        <div class="line__title" style="font-size:1.15rem">${p.name}</div>
        <div class="line__meta">${l.variant ? l.variant + " · " : ""}${l.sub ? '<span class="sub">Subscribe & Save 15%</span>' : "One-time"}</div>
        <div class="qty" style="margin-top:10px"><button data-act="dec">−</button><span>${l.qty}</span><button data-act="inc">+</button></div>
        <button class="line__rm" data-act="rm">Remove</button>
      </div>
      <div style="text-align:right"><div class="line__price" style="font-size:1.2rem">${money(unit * l.qty)}</div>${wasBase > unit ? `<div class="price-was" style="font-family:var(--data)">${money(wasBase * l.qty)}</div>` : ""}</div>
    </div>`;
  }

  /* ============================================================
     BOOT
     ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    chromeShell();
    const main = $("#app");
    const page = main?.dataset.page;
    if (page === "home") renderHome(main);
    else if (page === "shop") renderShop(main);
    else if (page === "product") renderProduct(main);
    else if (page === "cart") renderCartPage();
    footerShell();
    renderChrome();
    initReveal();
    tickCountdown();
    startSocialProof();
  });
})();
