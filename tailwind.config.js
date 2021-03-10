module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'lag-dark': '#0a3542',
        'text': '#59cfc5',
      },
    },
  },
  variants: {
    extend: {
      container: []
    },
  },
  plugins: [],
}
