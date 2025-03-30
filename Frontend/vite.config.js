import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   server:{
     proxy:{
      "/api/v1/onsko":"https://onsko-e-commerce-project.onrender.com"
      // "/api/v1/onsko":"http://localhost:3000"
     }
   },
  plugins: [react()],
})
