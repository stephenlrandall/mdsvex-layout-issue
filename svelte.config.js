import { resolve } from "path";
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: { adapter: adapter() },
	preprocess: [mdsvex({
		layout: resolve(import.meta.dirname, './src/mdsvex/layout.svelte')
	})],
	extensions: ['.svelte', '.svx']
};

export default config;
