# archive — do not import anything in here

> **Separate private business.** Meow Belle only — never mix with Mindframe. See `../CLAUDE.md`.

## ☠️ The two `DANGER-cost-prices-*` CSVs

These are the pre-2026-07-27 Shopify import files. **They contain supplier COST prices in
the `Variant Price` column, not retail.** Importing either one would put the whole catalogue
on sale at or below what we pay for it:

| SKU | In these files | What we actually charge |
|---|---|---|
| Reflex Plus 15 kg | **৳6,100** | ৳7,600 |
| Prostar 15 kg | **৳4,100** | ৳5,400 |
| Sterilised Chicken 15 kg | **৳6,100** | ৳8,200 |

They also give the 1.5 kg and 15 kg variants of five products the **same `Variant SKU`**,
because the slug dropped the decimal point and both became `…-15kg`. Shopify merges the
inventory of variants that share a SKU.

They are kept only because they are the record of what the store looked like before the
repricing. Read them, never import them.

**The live file is `../meowbelle-shopify-import-<newest date>.csv`**, and it is generated —
run `/usr/bin/python3 ../build_shopify_import.py` rather than editing any CSV by hand.

Background: `../CHANGELOG.md`, entry *2026-07-27 — Repricing, offer, Dhaka-only launch, 3-pack*.
