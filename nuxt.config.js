import headConfig from './config/head.js';

export default {
  target: 'static',
  ssr: false,
  buildModules: [
    'nuxt-vite',
    'nuxt-windicss',
    'nuxt-animejs',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  components: true,
  head: headConfig,
};
