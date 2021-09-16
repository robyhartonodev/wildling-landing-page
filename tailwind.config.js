module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-wildling': "url(/images/wildling-hero-image-2.jpg)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
