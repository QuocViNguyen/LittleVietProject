module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'menu-bg': '#f9e4d2',
      },
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: {
        'blurbg': "url('./Media/blurbg.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
