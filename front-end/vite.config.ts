import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import path from 'path';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [million.vite({ auto: true }), react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
} as UserConfig);
