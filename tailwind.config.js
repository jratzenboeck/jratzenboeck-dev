module.exports = {
  future: {},
  purge: [],
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
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    backgroundImage: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
}
