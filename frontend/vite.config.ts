import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import pathsPlugin from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [solidPlugin(), pathsPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'public'
  },
});
