import { defineConfig } from 'vitest/config'
import { resolve } from 'path';

export default defineConfig({
  test: {
    clearMocks: true,
    restoreMocks: true,
    unstubGlobals: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    include: [
      'src/**/*.{test,spec}.?(c|m)[jt]s?(x)',
    ],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
