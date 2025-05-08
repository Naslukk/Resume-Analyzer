import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
  ],
  server: {
    host: true, // allows access from external devices
    strictPort: true,
    cors: true,
    hmr: {
      clientPort: 443 // important for https ngrok tunnel
    },
    // allow any hostname
    allowedHosts: ['.ngrok-free.app'] // wildcard subdomain match
  }
})
