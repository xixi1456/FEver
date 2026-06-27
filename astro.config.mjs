// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://attention-code.github.io',
  // When deploying to Vercel (root domain), use '/' by default.
  // For GitHub Pages set the env var BASE_PATH='/fever' when building.
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()]
  }
});