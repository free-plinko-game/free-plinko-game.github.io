import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true, // Gzip/Brotli compression
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/free-plinko-game.github.io' : ''
		}
	}
};

export default config;
