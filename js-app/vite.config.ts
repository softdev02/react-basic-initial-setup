import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    process.env.VITE_USE_MOCK === 'true' && mockDevServerPlugin({
      log: 'debug',
      include: ['mock/**/*.ts'],
    })
  ],
  server: {
    port:3000,
    proxy: {
      '/api-dev': {
        target: 'https://api-example.com',
        changeOrigin: true
      }
    },
    open:"http://localhost:3000/"
  }
})