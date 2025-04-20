import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    proxy:{
      '/api':{
        target: 'http://3.111.55.239:3000',
      },
      '/images':{
        target: 'http://3.111.55.239:3000'
      }
    }
  }
})
