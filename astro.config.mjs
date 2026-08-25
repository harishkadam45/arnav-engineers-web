// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: switch back to https://www.arnavengineers.com once the custom domain is purchased & connected
  site: 'https://arnav-engineers.netlify.app',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
