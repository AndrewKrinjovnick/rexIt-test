import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	resolve: {
		alias: {
			assets: '/src/assets',
			components: '/src/components',
			config: '/src/config',
			hooks: '/src/hooks',
			pages: '/src/pages',
			services: '/src/services',
			store: '/src/store',
			stylesheets: '/src/stylesheets',
			types: '/src/types',
			utils: '/src/utils',
		},
	},
});
