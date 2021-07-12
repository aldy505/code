const aspectRatio = require('windicss/plugin/aspect-ratio');

/**
 * @type {import('windicss/helpers').defineConfig}
 */
module.exports = {
  darkMode: 'media',
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: '#3009D5',
        royalblue: {
          50: '#f7fafb',
          100: '#e4f0fd',
          200: '#c7d8fb',
          300: '#a0b4f5',
          400: '#7f8ced',
          500: '#6866e8',
          600: '#564adc',
          700: '#4137be',
          800: '#2d2690',
          900: '#19185b',
        },
        denim: {
          50: '#f9fafb',
          100: '#eef1fb',
          200: '#dcd8f6',
          300: '#bbb3ea',
          400: '#9f88d9',
          500: '#8463ca',
          600: '#6b47b2',
          700: '#50358d',
          800: '#362461',
          900: '#1e1639',
        },
        orchid: {
          50: '#fbfbfb',
          100: '#f7f1f6',
          200: '#eed5ed',
          300: '#dbabd5',
          400: '#ce7db8',
          500: '#b8589d',
          600: '#9b3d7c',
          700: '#752e5c',
          800: '#501f3c',
          900: '#2e1321',
        },
        blush: {
          50: '#fcfcfb',
          100: '#faf1ef',
          200: '#f5d3de',
          300: '#e8a7bb',
          400: '#e17893',
          500: '#d05370',
          600: '#b53951',
          700: '#8d2a3b',
          800: '#631d27',
          900: '#3a1215',
        },
        chestnut: {
          50: '#fcfbfa',
          100: '#faf1eb',
          200: '#f4d6d3',
          300: '#e5acaa',
          400: '#db7d7d',
          500: '#c65958',
          600: '#aa3e3c',
          700: '#822e2d',
          800: '#5a201f',
          900: '#361312',
        },
        sepia: {
          50: '#fcfbf9',
          100: '#f9f1e5',
          200: '#f1d9c8',
          300: '#deb199',
          400: '#cb8469',
          500: '#b16145',
          600: '#93472e',
          700: '#6f3523',
          800: '#4c2419',
          900: '#2e1610',
        },
        shadow: {
          50: '#fafaf8',
          100: '#f5f1e8',
          200: '#e9ddcd',
          300: '#ccb8a0',
          400: '#a98e70',
          500: '#8a6c4a',
          600: '#6e5233',
          700: '#533d28',
          800: '#38291d',
          900: '#221913',
        },
        gray: {
          50: '#f9faf8',
          100: '#f1f1f0',
          200: '#dfdedf',
          300: '#bcbbbb',
          400: '#919291',
          500: '#72706b',
          600: '#5b554f',
          700: '#453f3b',
          800: '#2f2b2a',
          900: '#1c1a1b',
        },
        steel: {
          50: '#f7f9f9',
          100: '#e8f1f8',
          200: '#ccdff1',
          300: '#9fbddc',
          400: '#6e96c2',
          500: '#5474a7',
          600: '#44588b',
          700: '#35426a',
          800: '#252c49',
          900: '#161b2e',
        },
        wisteria: {
          50: '#f6f9fa',
          100: '#e4f1fb',
          200: '#c4def7',
          300: '#96bcea',
          400: '#6895d9',
          500: '#5072c9',
          600: '#4156b3',
          700: '#33408f',
          800: '#232b65',
          900: '#141a3f',
        },
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
};
