import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindVite from '@tailwindcss/vite' // if the plugin exists

export default defineConfig({
  plugins: [react(), tailwindVite()],
})