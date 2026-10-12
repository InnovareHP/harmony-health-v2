# Pages and routing

Every route follows the same three layers:

1. `src/pages/<route>.astro` — wraps content in `src/layouts/main.astro` and
   mounts one React component with `client:load`.
2. `src/index-page/<route>.tsx` — thin page component.
3. `src/components/<section>/*.tsx` — the actual copy and markup.

Put copy in layer 3. Keep layers 1 and 2 thin.

`main.astro` owns `<head>` (GA tag, title, description, OG/Twitter) and
renders `MainLayout` (Header, Footer, and the crisis banner on `/` only).

## Dynamic routes — two wiring points each

- `/treatment-programs/[program]`:
  - slug list in `getStaticPaths()` in
    `src/pages/treatment-programs/[program].astro`;
  - the `if (program === "...")` switch in
    `src/index-page/treatment-programs/programs.tsx`.
  - Nav links live in `src/components/layout/TreatmentProgramsLayout.tsx`.
- `/patient-visitor-guide/[guide]`:
  - `getStaticPaths()` in `src/pages/patient-visitor-guide/[guide].astro`;
  - the switch in `src/index-page/patient-visitor-guide/guides.tsx`.
  - Nav links live in `src/components/layout/PatientVisitorLayout.tsx`.

Miss the switch and the page builds but renders empty. Miss
`getStaticPaths` and the URL 404s.

## Forms

- `/book` posts to `/api/inquiry` (Netlify Function). Needs
  `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL`,
  `PUBLIC_SITE_URL`. Test with `pnpm dev:netlify`.
- `/contact` form (`src/components/contact/contact.tsx`) does **not** submit
  anywhere — `onSubmit` only flips state after a timeout. Don't tell users it
  sends mail.

## Site header nav

Top-level routes are linked from `src/components/Header.tsx`. A new
top-level page needs a link there and in `Footer.tsx` if it belongs in the
footer.
