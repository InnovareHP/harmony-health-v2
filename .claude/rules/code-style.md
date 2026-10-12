# Code style

- Formatting: `.prettierrc.json` — 2 spaces, double quotes, semicolons,
  trailing commas `es5`, print width 80.
- TypeScript strict (`astro/tsconfigs/strict`). Path alias `@/*` → repo root,
  so imports look like `@/src/components/...` and `@/components/ui/...`.
- UI primitives are shadcn/ui (new-york) in the **root** `components/ui/`
  (not `src/components/`). Reuse `Button`, `Card`, `Badge`, `Dialog`,
  `Accordion`, `Alert`, `Input`, `Separator` before writing new ones.
- Class merging: `cn()` from `@/lib/utils` (root `lib/utils.ts`).
- Icons: `lucide-react`. Animation: `framer-motion`.
- Colors come from CSS variables in `src/styles/global.css` (brand
  `--primary: #71af85`). Use Tailwind tokens like `text-primary`,
  `bg-primary`; don't hard-code hex.
- Contact form validation is shared between the browser and the function:
  `src/lib/contact-validation.ts`. Server-side sanitising lives in
  `netlify/lib/sanitize.ts`. Reuse both; don't re-inline regexes.
- `src/lib/constant.ts` holds a stale `phone`/`email` pair that nothing
  imports. Don't use it as a source of truth.
