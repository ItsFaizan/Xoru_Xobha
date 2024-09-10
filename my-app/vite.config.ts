import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
		  // Add the directory where your font file is located
		  allow: ['C:/Users/hp/Downloads/ambos-finance-main/ambos-finance-main/my-app'],
		},
	  },
});
