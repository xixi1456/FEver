// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://attention-code.github.io',
  base: '/fever',
  vite: {
    plugins: [tailwindcss()]
  }
});