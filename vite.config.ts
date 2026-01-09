import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/cv-page/' : '/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  resolve: {
    alias: {
      models: path.resolve(__dirname, 'public/models'),
      shared: path.resolve(__dirname, 'src/shared'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
}));