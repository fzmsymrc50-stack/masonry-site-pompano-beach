// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real production domain
export default defineConfig({
  site: 'https://www.example-masonry.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
