// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			envPrefix: {
				port: '4000'
			}
		}),
		vite: {
			server: {
				port: 4000
			}
		},
		prerender: {
			default: true
		}
	}
};

export default config;
