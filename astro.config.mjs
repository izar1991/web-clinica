// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://izar1991.github.io',
  base: '/web-clinica',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en-GB', 'de-DE', 'fr-FR', 'zh-CN', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
