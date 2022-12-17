import { defineConfig } from 'vite';
import solid from 'solid-start/vite';
import cloudflare from 'solid-start-cloudflare-pages';
import windiCSS from 'vite-plugin-windicss';

export default defineConfig({
  publicDir: 'static',
  plugins: [
    solid({
      adapter: cloudflare({ sourceMap: false }),
      routesDir: './pages',
    }),
    windiCSS({
      scan: {
        dirs: ['./src'],
      },
    }),
  ],
  build: {
    target: 'modules',
    emptyOutDir: true,
  },
});
