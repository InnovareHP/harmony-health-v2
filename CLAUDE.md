# Harmony Health — harmonyfortworth.com

Public site for Harmony Health, a senior (older-adult) psychiatric hospital at
7001 Bryant Irvin Rd, Fort Worth, TX 76132. Astro 5 + React 19 islands +
Tailwind 4 + shadcn/ui, hosted on Netlify. One Netlify Function
(`netlify/functions/inquiry.mts`) handles the `/book` appointment form via Resend.

Remote: `github.com/InnovareHP/harmony-health-v2`. Package manager: **pnpm**.

## Commands

- `pnpm dev` — Astro dev server (port 4321). Does **not** serve functions.
- `pnpm dev:netlify` — `netlify dev` (port 8888), serves `/api/inquiry` too.
- `pnpm build` — static build to `dist/`. This is the only verification step:
  there is no test suite, no linter, no typecheck script.
- `pnpm preview` — serve the built `dist/`.

## Principles

- Healthcare / YMYL site. Never invent clinical claims, outcomes, phone
  numbers, insurance accepted, prices, accreditations or staff. If copy needs
  a fact the repo doesn't have, ask.
- Phone numbers are duplicated across `Header.tsx`, `Footer.tsx`,
  `contact/contact.tsx`, `referrals/*`, `price-transparency.tsx` and
  `netlify/lib/email-template.ts`. When one changes, grep and change all.
- Don't send health context (form contents, program interest) to GA or any
  third-party script.
- Smallest change that matches the surrounding code. No drive-by refactors.

## Version control

- Never push, force-push or deploy. The user does that.
- Commit only when asked, on a branch off `main`.

## Restrictions

- Don't read or print `.env*`. Env var names are in `.env.example`.
- Don't edit `dist/`, `.astro/`, `.netlify/`, `node_modules/`.
- `public/file/*` are client-supplied (brochures, CMS price-transparency
  files). Replace only with files the user provides; keep the filenames that
  pages link to.

## Rules

@.claude/rules/code-style.md
@.claude/rules/pages-and-routing.md
@.claude/rules/seo.md
