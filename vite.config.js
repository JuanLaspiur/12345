import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: [
    {
      src: './src/index.js',
      use: '@vite/node'
    }
  ],
  routes: [
    {
      src: '/(.*)',
      dest: '/src/'
    }
  ]
})
