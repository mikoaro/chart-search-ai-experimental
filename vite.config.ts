import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // This fixes the "legacy-js-api" warning
        silenceDeprecations: ['import'], // This hides the "@import" warnings
      },
    },
  },
})
