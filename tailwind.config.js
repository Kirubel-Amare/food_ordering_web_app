/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JavaScript, TypeScript, and JSX/TSX files in the `src` directory.
    "./public/index.html",        // Include your main HTML file.
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        tomato: '#E50914',
        marigold: '#ffbe0b',
      }
    },
  },
  plugins: [],
};
