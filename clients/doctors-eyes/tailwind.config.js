const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.html"],
  theme: {
    // fontFamily: {
    //   sans: bodyFontFamily,
    //   heading: headingFontFamily,
    //   "heading-bold": headingBoldFontFamily,
    //   subheading: subHeadingFontFamily,
    //   "subheading-medium": subHeadingMediumFontFamily,
    //   lead: leadFontFamily,
    // },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "991px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "32px",
      },
    },
    extend: {
      colors: {
        "dark-500": "#232323",
        "gray-500": "#f6f6f6",
      },
      // backgroundImage: {
      //   "body-gradient":
      //     "linear-gradient(to top, #484b4b 0%, #252a2b 53%, #1b2022 100%)",
      //   "footer-gradient": "linear-gradient(113deg, #825aff 1%, #483681 92%)",
      // },
      borderRadius: {
        DEFAULT: "16px",
        xl: "60px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
