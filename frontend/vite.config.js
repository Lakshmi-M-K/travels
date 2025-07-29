import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 👈 This ensures proper routing & build path
  plugins: [react()],
})
