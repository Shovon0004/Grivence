import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: parseInt(import.meta.env.VITE_PORT) || 3000, // Use Render's provided port or default to 3000
    host: "0.0.0.0", // Allow external access
  },
});
