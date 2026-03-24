import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aic-web-page/',
  plugins: [react()],
  server: {
    port: 5173
  }
})
