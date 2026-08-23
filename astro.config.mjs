// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.villaquet.com',
  base: '/',
  trailingSlash: 'ignore',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en-GB', 'de-DE', 'fr-FR', 'zh-CN', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],
});