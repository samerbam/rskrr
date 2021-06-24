module.exports = {
  purge: {
    enabled: false,
    content: [
        './**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'bluegray': '#ecf0f7',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'bluegray': '#ecf0f7',
    }),
    extend: {
      height: {
        100: '25rem'
      },
      width: {
        100: '25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}