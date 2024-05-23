import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./app/**/*.ts', './index.ts'],
  format: ['esm'],
  minify: false,
  clean: true,
  platform: 'node',
  outDir: 'dist',
  dts: true,
})
