module.exports = {
  future: {},
  purge: {
    mode: 'all',
    content: ['pages/**/*.vue'],
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        light: '#1565c0',
        dark: '#003c8f',
        white: '#fff',
        gray: {
          200: '#edf2f7',
        },
      },
      typography: {
        default: {
          css: {
            code: {
              'margin-top': '-70px',
              'margin-bottom': '-70px',
            },
          },
        },
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    backgroundImage: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
}
