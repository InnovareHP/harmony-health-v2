# SEO and analytics

## Analytics IDs

- The only GA4 ID that belongs to this client is **`G-5Z6NL2RG62`**
  (GA4 property `properties/557415911`, "Harmony Health", created
  2026-10-05). It's in `src/layouts/main.astro`.
- Don't add any other GA, GTM or UA ID. After a build, check:
  `grep -rhoE "G-[A-Z0-9]{6,}|GTM-[A-Z0-9]+|UA-[0-9-]+" dist | sort -u`.
- Search Console: `sc-domain:harmonyfortworth.com`. Claude reads both through
  the `seo-reader` service account (see `.claude/agents/seo-specialist.md`).
- Don't put form contents, conditions or program interest into GA events.
  Plain event names like `phone_call_click` are fine.

## Current state (2026-10-12)

- Per-route title/description live in `src/lib/seo.ts` (`PAGE_META`, keyed
  by path without trailing slash). A new page needs an entry there, or it
  falls back to the homepage meta.
- `main.astro` emits canonical, OG/Twitter (absolute URLs), and a
  Hospital + WebPage JSON-LD `@graph`. NAP in the JSON-LD must match the
  footer.
- `site` + `@astrojs/sitemap` in `astro.config.mjs`; `public/robots.txt`
  points to `/sitemap-index.xml`.
- GA only configures on `harmonyfortworth.com` / `www.`; tel: clicks send
  `phone_call_click` (href only).
- Live URLs end with a trailing slash (`/about-us/`). Canonicals, sitemap
  entries and internal hrefs must match that.

## When changing `<head>`

- Title ≤ ~60 chars, description 120–160, both with local terms
  (Fort Worth, TX; senior / older-adult psychiatric care).
- OG/Twitter image paths must exist under `public/` and be absolute URLs on
  `https://harmonyfortworth.com`.
- Structured data must match visible content. Never add ratings or reviews.
