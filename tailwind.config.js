const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        'light-blue': colors.sky,
        red: colors.rose,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      minWidth: {
        36: '9rem',
        44: '11rem',
        56: '14rem',
        60: '15rem',
        80: '20rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
