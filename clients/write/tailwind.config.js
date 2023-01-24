const baseFont = "'Work Sans', sans-serif";
const secondaryFont = "'Roboto', sans-serif";

module.exports = {
  mode: "jit",
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      sans: baseFont,
      secondary: secondaryFont,
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "991px",
      xl: "1280px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
    },
    extend: {
      colors: {
        "green-500": "#499661",
        "green-600": "#316f39",
        "yellow-500": "#ffa500",
        "grey-500": "#494949",
      },
      boxShadow: {
        dropdown: "0 5px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        // sm: "8px",
        // DEFAULT: "16px",
        // xl: "60px",
      },
      backgroundImage: {
        // "hero-overlay":
        //   "linear-gradient(0deg, rgba(30, 30, 30, 0.6), rgba(30, 30, 30, 0.6))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
