/* ============================================================
   Show only the selected recipe's details on a bundle PDP.

   The 3-Month Supply has one variant per recipe and Shopify has no per-variant
   description, so the description ships a block for every recipe:

     <div class="mb-recipe" data-recipe="Urinary Chicken"> ... </div>

   written by build_shopify_import.py from the matching 1.5 kg product. This hides
   the ones the customer has not picked. With JavaScript off they all stay visible:
   wordy, never wrong.

   Lives in assets/ and is loaded from sections/main-product.liquid rather than from
   a snippet, because Shopify does NOT execute <script> tags inside `custom_liquid`
   block settings - the block silently renders as nothing.
   ============================================================ */
(function () {
  function blocks() {
    return document.querySelectorAll('.mb-recipe[data-recipe]');
  }

  function show(name) {
    var all = blocks();
    if (!all.length) return;

    var matched = false;
    all.forEach(function (block) {
      var isMatch = !name || block.dataset.recipe === name;
      block.hidden = !isMatch;
      if (isMatch) matched = true;
    });
    // Never leave the section empty: an unrecognised option shows everything.
    if (!matched) all.forEach(function (block) { block.hidden = false; });
  }

  function selected() {
    var picker = document.querySelector('variant-selects');
    if (!picker) return '';
    var radio = picker.querySelector('input[type="radio"]:checked');
    if (radio) return radio.value;
    var select = picker.querySelector('select');
    return select ? select.value : '';
  }

  function sync() {
    show(selected());
  }

  function start() {
    if (!blocks().length) return;
    sync();

    // Fires immediately on click, before Dawn has finished re-fetching the section.
    document.addEventListener('change', function (event) {
      if (event.target.closest && event.target.closest('variant-selects')) sync();
    });

    // Dawn republishes the whole variant object once the section has re-rendered.
    if (window.subscribe && window.PUB_SUB_EVENTS && window.PUB_SUB_EVENTS.variantChange) {
      subscribe(window.PUB_SUB_EVENTS.variantChange, function (event) {
        var variant = event && event.data && event.data.variant;
        show(variant ? variant.option1 : selected());
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
