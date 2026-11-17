// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: productionHost ? `https://${productionHost}` : 'http://localhost:4321',
  integrations: [sitemap()],
});
