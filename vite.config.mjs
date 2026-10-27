import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: './web',
  plugins: [react(), tailwindcss()],
  base: './',
  server: { proxy: { '/api': 'http://127.0.0.1:3000', '/uploads': 'http://127.0.0.1:3000' } },
  build: { outDir: '../dist', emptyOutDir: true }
});
