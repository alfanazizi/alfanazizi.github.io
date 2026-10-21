import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alfanazizi.github.io',
  base: '/',
  server: {
    host: true,
    port: 4321,
  },
});