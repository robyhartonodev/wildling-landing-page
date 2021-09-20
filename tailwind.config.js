const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-wildling": "url(/images/wildling-hero-image-2.jpg)",
      },
    },
    fontFamily: {
      custom: ["Open Sans", "sans-serif"],
    },
    colors: {
      brandcolor: {
        DEFAULT: "#453132",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      bluegray: colors.blueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
