import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts', './src/test.ts'],
  splitting: false,
  sourcemap: true,
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
})