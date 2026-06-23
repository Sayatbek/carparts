# carparts — context for Claude

Static catalog site for **AvtoChina.kz**, a shop selling Chinese car parts in Almaty, Kazakhstan.

## TL;DR

- **Live:** https://avtochina.kz (custom domain on GitHub Pages, HTTPS via Let's Encrypt)
- **Repo:** https://github.com/Sayatbek/carparts (branch `main`, root `/`)
- **Stack:** plain HTML/CSS/JS, no build step, no backend, no DB
- **Owner:** Sayatbek (shop at Авторынок «Кенже Хан», 9 ряд, бутик 26)
- **Contact on the site:** WhatsApp / phone `+7 777 163 47 47`
- **Hours:** Tue–Sun 09:00–18:00 (Monday closed)

## File map

| File | Purpose |
|---|---|
| `index.html` | Single page — hero, brand grid, catalog, about, FAQ, contact. JSON-LD schema (AutoPartsStore + FAQPage) lives in `<head>`. |
| `style.css` | Dark theme, yellow `#ffd23f` accent (matches the storefront banner). Responsive at 860px and 480px breakpoints. |
| `app.js` | i18n (RU/KK/EN, persisted in localStorage), search/filter logic, WhatsApp deep links per product, category-image rendering with SVG fallbacks. |
| `products.js` | `BRANDS`, `CATEGORIES`, `PRODUCTS` arrays. Data lives here — edit this to add/remove items. |
| `CNAME` | `avtochina.kz` — tells GitHub Pages the custom domain. |
| `robots.txt` + `sitemap.xml` | SEO basics. |
| `README.md` | User-facing setup/edit guide in Russian. |

## Brands (parsed from the storefront sign)

Changan, Zeekr, JAC, Haval, Hongqi, Chery, Dongfeng, Exeed, Geely, Jetour, Great Wall, Jaecoo, Tank, Li Auto, Jetta, Tenet, Livan. The IDs (lowercase, no spaces) are what `products.js` references — see `BRANDS` array.

## Categories

engine, brakes, suspension, body, electrical, filters, transmission, cooling, exhaust, interior. Each has a translated display name (RU/KK/EN), a colored SVG icon, and a default Unsplash CDN image used as the product card visual.

## How edits work

- **Add/change a product:** edit `products.js` → push. No build, GitHub Pages redeploys in ~30–60s.
- **Replace category image:** edit `CATEGORY_IMAGES` in `app.js`.
- **Per-product real photo:** add `image: "images/foo.jpg"` to a product object — it overrides the category default.
- **Translations:** edit `I18N` object in `app.js`. Three keys per phrase: `ru`, `kk`, `en`.

## Deployment + DNS facts

- **Hosting:** GitHub Pages, branch `main`, `/` root, custom domain `avtochina.kz`.
- **Registrar:** ps.kz. DNS A records point apex `avtochina.kz` to GitHub's 4 IPs (185.199.108–111.153). `www` CNAME → `sayatbek.github.io.`
- **TLS:** auto-issued Let's Encrypt cert (`CN=avtochina.kz`, issuer `Let's Encrypt YR1`). Auto-renews.
- **Email is independent:** `mail.avtochina.kz` A record + MX still point to ps.kz hosting (195.210.46.115). Don't touch unless email setup changes.

## SSH setup for this repo

The default SSH key (`~/.ssh/id_ed25519`) belongs to GitHub account `sayatbek-rased`. This repo lives under `Sayatbek` (a different account). A dedicated key was generated:

- Private key: `~/.ssh/id_ed25519_sayatbek`
- Public key: registered on `Sayatbek` account
- SSH alias: `github.com-sayatbek` (configured in `~/.ssh/config`)
- Remote URL uses the alias: `git@github.com-sayatbek:Sayatbek/carparts.git`

To push as `Sayatbek`, the alias-based remote handles it automatically — nothing special to do.

## SEO state

Already wired in:
- Keyword-rich title/description/keywords targeting *"автозапчасти на китайские авто алматы"* + brand-specific queries (RU/KK/EN versions in `I18N`).
- JSON-LD `AutoPartsStore` schema with geo (43.322032, 76.904013), hours, address, currency (KZT), brands array.
- JSON-LD `FAQPage` schema covering 4 common questions (brands, delivery, VIN, location).
- Visible FAQ section with 6 questions — biggest source of long-tail keyword matches in body copy.
- hreflang + canonical + Open Graph + Twitter Card meta.
- `robots.txt` allowing all + sitemap link; `sitemap.xml` with hreflang variants.

Not yet done (suggest when relevant):
- Google Search Console verification (recommended via DNS TXT at ps.kz)
- Google Business Profile setup
- 2GIS listing claim (firm ID `70000001030531946`)
- Real product photos in `images/` (currently using Unsplash CDN per category)
- Favicon / og-image.jpg (referenced in meta but file not yet present)

## Quirks / decisions worth remembering

- The `og:image` meta references `https://avtochina.kz/og-image.jpg` — the file doesn't exist yet. Add a 1200×630 social-preview image before sharing on Slack/WhatsApp/Telegram.
- Product images use the Unsplash CDN with `?w=600&auto=format&fit=crop`. If any URL ever 404s, the SVG icon fallback kicks in automatically (`img.onerror` handler in `renderProducts`).
- The `brand.name` string is `АвтоБөлшектер` (Kazakh for "auto parts") on the site logo, but the brand the customer sees in titles is `AvtoChina.kz`.
- 17 brands × ~2–4 sample SKUs each. SKUs and prices in `products.js` are placeholders generated from real OEM part-number patterns — replace with actual catalog when available.
- `kk` locale strings exist for every UI element. If you add new text, add all three (`ru`/`kk`/`en`) or it'll fall through to `ru`.

## Useful commands

```bash
# Local preview (no server needed)
open /Users/sorazbekov/Projects/carparts/index.html

# Or with a real server (better — matches GitHub Pages behavior)
cd /Users/sorazbekov/Projects/carparts && python3 -m http.server 8000

# Deploy a change
git add . && git commit -m "..." && git push   # auto-deploys in ~1 min

# Verify after pushing
curl -sI https://avtochina.kz/ | head -5
dig +short avtochina.kz

# Inspect TLS cert
echo | openssl s_client -servername avtochina.kz -connect avtochina.kz:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates
```
