import sveltePreprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			prependData: `@import './src/scss/_global.scss';`
		}
	}),
	kit: {
		adapter: vercel()
	}
};

export default config;
