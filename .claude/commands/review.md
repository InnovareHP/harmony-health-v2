---
description: Review the current working diff against repo conventions
---

1. Run `git status`, `git diff`, and `git diff --staged` to get the actual change set.
2. Read `.claude/rules/*.md`.
3. Apply the checklist in `.claude/agents/code-reviewer.md`.
4. If the diff touches `netlify/`, `src/lib/contact-validation.ts`,
   `src/components/book/`, `src/components/contact/`, or `.env.example`, also
   apply `.claude/agents/security-auditor.md`.
5. If the diff touches `src/layouts/main.astro`, `astro.config.mjs`,
   `public/robots.txt`, page titles/descriptions or JSON-LD, also apply the
   on-site checklist in `.claude/agents/seo-specialist.md`.
6. Run `pnpm build`.
7. Verify each finding against the file. Drop what you cannot reproduce.
8. Report severity-ordered `path:line — problem — fix`, quote the build
   result, and give a verdict. Fix nothing unless asked.

$ARGUMENTS
