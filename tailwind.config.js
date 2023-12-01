/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'color-fondo-oscuro': '#272727',
      },
      appears: {
        '0%': { transform: 'scale(0)' },
        '50%': { transform: 'scale(0.5)' },
        '100%': { transform: 'scale(0)' },
      },
    },
  },
};
