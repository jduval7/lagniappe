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
        'lag-md': '#0d4758',
        'lag-light': '#d9e7e8',
        'text': '#59cfc5',
        'orange': '#f58220',
        'orange-lt': '#f69038',
        'light-orange': '#f9f6f4'
      },
      fontFamily: {
        'vegan': ['Vegan'],
        'cabin': ['Cabin'],
        'seravek': ['Seravek']
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
