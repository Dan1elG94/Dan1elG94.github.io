/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '90vw': '90vw',
      },
      objectPosition: {
        'center-top35': '50% 35%',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      primary: {
        50: '#efefec',
        100: '#deded9',
        200: '#bebeb4',
        300: '#9d9d8e',
        400: '#7d7d69',
        500: '#5c5c43',
        600: '#4a4a36',
        700: '#373728',
        800: '#25251b',
        900: '#12120d',
      },
      secondary: {
        50: '#f8f3ed',
        100: '#f0e8da',
        200: '#e1d0b6',
        300: '#d3b991',
        400: '#c4a16d',
        500: '#b58a48',
        600: '#916e3a',
        700: '#6d532b',
        800: '#48371d',
        900: '#241c0e',
      },
    },
    fontFamily: {
      sans: ['"Urbanist"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
