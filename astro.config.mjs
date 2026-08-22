// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the final domain when it is purchased
  site: 'https://www.arnavengineers.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
