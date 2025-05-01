import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import open from 'open'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'open-chrome',
      configureServer() {
        open('http://localhost:5173', { app: { name: 'chrome' } })
      }
    }
  ],
  server: {
    open: false, 
    port: 5173,
  },
})