---
description: Add a public page — top-level route, treatment program, or patient/visitor guide — with all wiring points
argument-hint: <route or slug> <what the page is about>
---

Add the page described in `$ARGUMENTS`.

1. Read `.claude/rules/pages-and-routing.md` and `.claude/rules/seo.md`.
2. Decide the kind: top-level (`/foo`), program
   (`/treatment-programs/<slug>`), or guide (`/patient-visitor-guide/<slug>`).
3. Write the content component in `src/components/<section>/<name>.tsx`.
   Reuse `components/ui/*` and Tailwind tokens. Ask for any clinical fact,
   phone or insurance detail you don't have; never invent one.
4. Wire it:
   - **Top-level:** `src/index-page/<name>.tsx` (thin wrapper) +
     `src/pages/<name>.astro` mounting it with `client:load` inside `Main`;
     add a link in `src/components/Header.tsx` (and `Footer.tsx` if needed).
   - **Program:** add the slug to `getStaticPaths()` in
     `src/pages/treatment-programs/[program].astro`, a branch in
     `src/index-page/treatment-programs/programs.tsx`, and a link in
     `src/components/layout/TreatmentProgramsLayout.tsx`.
   - **Guide:** same three points in
     `src/pages/patient-visitor-guide/[guide].astro`,
     `src/index-page/patient-visitor-guide/guides.tsx`, and
     `src/components/layout/PatientVisitorLayout.tsx`.
5. Verify: `pnpm build` and confirm `dist/<route>/index.html` exists and
   contains the page's heading.
6. Report: files touched, the build tail, and the new URL (with trailing
   slash). Remind the user to resubmit the sitemap once one exists.
