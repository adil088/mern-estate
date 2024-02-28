import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {  // everytime it sees /api, add the target before it
        target:'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
