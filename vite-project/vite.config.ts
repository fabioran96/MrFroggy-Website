import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Imposta la base relativa per il deploy su Vercel
  build: {
    outDir: "dist", // Assicura che la build venga salvata nella cartella giusta
  }
})
