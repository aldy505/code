import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import windiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [solidPlugin(), windiCSS()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
