import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // three.js stays grouped; it's only pulled in by the lazy HeroCanvas.
          if (id.includes('three') || id.includes('@react-three')) return 'three'
          if (
            id.includes('react-router') ||
            id.includes('/react-dom/') ||
            id.includes('/react/') ||
            id.includes('/scheduler/')
          ) {
            return 'react-vendor'
          }
          if (id.includes('/motion') || id.includes('framer-motion')) {
            return 'motion'
          }
          if (id.includes('@radix-ui')) return 'radix'
          return 'vendor'
        },
      },
    },
  },
})
