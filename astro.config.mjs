// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// The site stays fully static. The appointment inquiry form posts to
// /api/inquiry, which is a Netlify Function (see netlify/functions/inquiry.mts).
// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [react()],
});
