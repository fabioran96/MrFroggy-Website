import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "./", // Imposta la base relativa per il deploy su Vercel
  build: {
    outDir: "dist", // Assicura che la build venga salvata nella cartella giusta
    rollupOptions: {
      external: mode === "production" ? ["bootstrap/dist/css/bootstrap.min.css"] : [], // Evita di cercare il CSS durante il bundle
    },
  },
  server: {
    port: 3000, // Porta per l'ambiente di sviluppo
    open: true, // Apre automaticamente il browser
  },
  resolve: {
    alias: {
      "@": "/src", // Shortcut per importazioni dalla cartella src
    },
  },
}))