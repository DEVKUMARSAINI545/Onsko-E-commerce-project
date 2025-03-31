import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   server:{
    proxy: {
      "/api": {
        target: "https://onsko-e-commerce-project.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/v1/onsko"),
      },
    },
 
   },
  plugins: [react()],
})
