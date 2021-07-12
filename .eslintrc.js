module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'xo-space',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
  ],
  rules: {
    'capitalized-comments': ['off'],
  },
};
