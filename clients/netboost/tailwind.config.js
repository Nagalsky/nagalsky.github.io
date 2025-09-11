const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "930px",
      xl: "1218px",
    },
    extend: {
      fontFamily: {
        default: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          500: "#3771FF",
        },
        yellow: {
          500: "#eba605",
        },
        green: {
          500: "#75B823",
        },
        gray: {
          100: "#f5f5f5",
          200: "#F0F2FA",
          300: "#97A5B5",
          400: "#7f7f7f",
          500: "#838383",
          600: "#7D7D7D",
          700: "#ececec",
          800: "#e9ecf2",
          900: "#292526",
        },
      },
    },
  },
};
