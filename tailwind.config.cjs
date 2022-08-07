/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    black: colors.black,
    white: colors.white,
    gray: colors.slate,
    green: colors.emerald,
    purple: colors.violet,
    yellow: colors.amber,
    pink: colors.fuchsia,
    extend: {},
    ...colors,
  },
  plugins: [],
};
