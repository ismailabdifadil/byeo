const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6822BB',
          lightPurple: '#EEE7F8',
          lightPeach: '#FFF6F6',
          lightMint: '#F2FCF9',
          white: '#FFFFFF',
          lightBlue: '#F3F4FD',
          stroke: '#C3C3C3',
          lightBody: '#475569',
        },
      },
    },
    fontFamily: {
      sans: ['"Poppnis"', 'sans-serif'],
    },
  },
  plugins: [],
}
