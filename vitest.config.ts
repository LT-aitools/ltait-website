// ABOUTME: Vitest configuration for testing React components and blog deployment validation
// ABOUTME: Configures test environment with jsdom and sets up testing library matchers

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})