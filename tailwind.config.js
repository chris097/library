module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: "#2374ED"
      },
      fontFamily: {
        rubik: [ 'Rubik', 'sans-serif' ],
        lobster: ['Lobster Two', 'cursive' ]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
}
