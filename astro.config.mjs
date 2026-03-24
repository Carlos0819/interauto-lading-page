// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlos0819.github.io',
  base: '/interauto-lading-page',
  vite: {
    plugins: [tailwindcss()]
  }
});