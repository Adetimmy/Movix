
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
],
  darkMode: ['class'],
  theme: {
  fontFamily: {
  body: ['Work Sans', 'sans-serif'],
  display:['DM Sans', 'sans-serif'],
  },
  extend: {
  fontSize: {
  14: '14px',
  },
  backgroundColor: {
  'main-bg': '#FAFBFB',
  'main-dark-bg': '#20232A',
  'secondary-dark-bg': '#33373E',
  'light-gray': '#F7F7F7',
  'half-transparent': 'rgba(0, 0, 0, 0.5)',
  },
  borderWidth: {
  1: '1px',
  },
  borderColor: {
  color: 'rgba(0, 0, 0, 0.1)',
  },
  width: {
  400: '400px',
  760: '760px',
  780: '780px',
  800: '800px',
  1000: '1000px',
  1200: '1200px',
  1400: '1400px',
  },
  height: {
  80: '80px',
  },
  minHeight: {
  590: '590px',
  },
  },
  },
  plugins: [],
  };

