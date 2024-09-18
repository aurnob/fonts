import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: 'public/dist',  // Output build files to public directory
  },
  server: {
    proxy: {
      // Proxy backend API calls to the PHP server
      '/api': {
        target: 'http://localhost:8000', // PHP server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/public/api'),
      },
    },
  },
})
