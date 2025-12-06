// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
	site: 'https://steveharrison.dev',
	integrations: [expressiveCode(), mdx(), sitemap()],
});
