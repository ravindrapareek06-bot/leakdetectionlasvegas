import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://leakdetectionlasvegas.com',
  title: 'Leak Detection Las Vegas',
  description: 'Leak detection service in las vegas',
  integrations: [tailwind()],
});
