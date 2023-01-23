const bodyFontFamily = '"Poppins-Regular", sans-serif';
const mediumFontFamily = '"Poppins-Medium", sans-serif';
const semiboldFontFamily = '"Poppins-SemiBold", sans-serif';
const boldFontFamily = '"Poppins-Bold", sans-serif';

module.exports = {
  mode: "jit",
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      sans: bodyFontFamily,
      medium: mediumFontFamily,
      semibold: semiboldFontFamily,
      bold: boldFontFamily,
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "991px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "2100px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "32px",
      },
    },
    extend: {
      colors: {
        "dark-400": "#333333",
        "dark-500": "#232323",
        "dark-600": "#292929",
        "gray-200": "#e0e0e0",
        "gray-300": "#f6f6f6",
        "gray-400": "#ededed",
        "gray-500": "#c7c7c7",
        "red-500": "#FF0000",
      },
      boxShadow: {
        DEFAULT: "0px 4px 24px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "16px",
        xl: "60px",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(0deg, rgba(30, 30, 30, 0.6), rgba(30, 30, 30, 0.6))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
