module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: {
        'blurbg': "url('./Media/blurbg.jpg')",
        'menuImage' : "url('./Media/menu-background.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
