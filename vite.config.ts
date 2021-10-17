import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import windiCSS from 'vite-plugin-windicss';

export default defineConfig({
  publicDir: 'static',
  plugins: [
    solidPlugin(),
    windiCSS({
      scan: {
        dirs: ['./components', './layouts', './pages'],
      },
    }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    emptyOutDir: true,
    outDir: 'dist'
  },
});
