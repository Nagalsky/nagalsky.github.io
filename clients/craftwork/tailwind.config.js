/** @type {import('tailwindcss').Config} */

// const bodyFontFamily = '"Inter-Regular", sans-serif'
const grosaRegularFont = '"Grosa-Regular", sans-serif'
const grosaMediumFont = '"Grosa-Medium", sans-serif'
const grosaBold = '"Grosa-Bold", sans-serif'
const grosaMonoMedium = '"GrosaMonoTrial-Medium", sans-serif'
const grosaMonoBold = '"GrosaMonoTrial-Bold", sans-serif'
const pageTitleFont = '"ParafinaBlackS", sans-serif'

module.exports = {
  content: ['./src/**/*.{html,js,php}'],
  theme: {
    fontFamily: {
      'base-regular': [grosaRegularFont],
      'base-medium': [grosaMediumFont],
      'base-bold': [grosaBold],
      'secondary-medium': [grosaMonoMedium],
      'secondary-bold': [grosaMonoBold],
      'page-title': [pageTitleFont],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '991px',
      xl: '1246px',
    },
    extend: {
      colors: {
        'teal-700': '#9eb6bd',
        'yellow-100': '#faf6eb',
        'yellow-500': '#f6b44f',
        'brand-400': '#c86bff',
        'brand-500': '#a840e5',
        'brand-600': '#32213b',
      },
      backgroundImage: {},
      borderRadius: {
        '3xl': '32px',
      },
      boxShadow: {
        sm: '8px 12px 24px -10px rgba(0, 0, 0, 0.15)',
        DEFAULT:
          '0 4px 24px -8px rgba(0, 0, 0, 0.15), 0 0 1px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
