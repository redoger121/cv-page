import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/cv-page/',
    resolve: {
    alias: {
      models: path.resolve(__dirname, 'public/models'),
      shared: path.resolve(__dirname, 'src/shared'),
    },
  },
})
