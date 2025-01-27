import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/modern_portfolio_website_eszipy/',
  server: {
    hmr: true
  }
})
