const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue,css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "540px",

      md: "768px",

      lg: "992px",

      xl: "1199px",

      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
