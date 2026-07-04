import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' para funcionar tanto no GitHub Pages (/portfolio/) quanto em domínio próprio
export default defineConfig({
  base: './',
  plugins: [react()],
})
