import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/cv-page/',
  resolve: {
    alias: {
      models: path.resolve(__dirname, 'public/models'),
      shared: path.resolve(__dirname, 'src/shared'),
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
})
