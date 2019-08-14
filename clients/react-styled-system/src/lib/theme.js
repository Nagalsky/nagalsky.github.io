//For hover/focus effects for button
import { darken } from 'polished'

//Fonts
import '../assets/fonts/nunito/stylesheet.css'

export const baseFonts = {
  fontNunitoLight: 'nunitolight',
  fontNunitoRegular: 'nunitoregular',
  fontNunitoSemibold: 'nunitosemibold',
  fontNunitoBold: 'nunitobold',
}

//Typography
export const themeFonts = {
  baseFontLight: baseFonts.fontNunitoLight,
  baseFontRegular: baseFonts.fontNunitoRegular,
  baseFontSemibold: baseFonts.fontNunitoSemibold,
  baseFontBold: baseFonts.fontNunitoBold,
}

//Colors
const baseColors = {
  white: '#ffffff',
  black: '#191919',
  blue: '#2b56a6',
  green: '#35a248',
  greenSecondary: '#00d2d2',
  gray: '#d2d2d2',
  silver: '#efefef',
}

const themeColors = {
  base: baseColors.black,
  primary: baseColors.blue,
  success: baseColors.green,
  successSecondary: baseColors.greenSecondary,
  muted: '#d2d2d2',
}

const colors = {
  ...baseColors,
  ...themeColors,
}

//Transition
export const transition = {
  baseTransition: 'all 200ms ease',
}

//Button
const buttonsBase = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '.3rem',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: colors.primary,
  transition: transition.baseTransition,
  fontSize: '14px',
  fontWeight: 'normal',
  fontFamily: themeFonts.baseFontBold,
  textDecoration: 'none',
  lineHeight: 1,
  padding: '.5rem 2rem',
  cursor: 'pointer',
}

export default {
  fontFamily: {
    base: themeFonts.baseFontRegular,
    light: themeFonts.baseFontLight,
    semibold: themeFonts.baseFontSemibold,
    bold: themeFonts.baseFontBold,
  },
  breakpoints: ['576px', '768px', '992px', '1200px'],
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 28, 35],
  space: [
    // margin and padding
    0,
    15,
    25,
    30,
    40,
    50,
  ],
  colors: {
    ...colors,
  },
  radii: ['.35rem', '.5rem'],
  buttons: {
    default: {
      ...buttonsBase,
      color: colors.primary,
      background: colors.white,
      '@media (hover: hover)': {
        ':hover, :focus': {
          color: colors.white,
          background: colors.primary,
        },
      },
    },
    primary: {
      ...buttonsBase,
      color: colors.white,
      background: colors.primary,
      '@media (hover: hover)': {
        ':hover, :focus': {
          color: colors.white,
          background: darken(0.1, colors.primary),
          borderColor: darken(0.1, colors.primary),
        },
      },
    },
    success: {
      ...buttonsBase,
      color: colors.white,
      background: colors.success,
      borderColor: colors.success,
      '@media (hover: hover)': {
        ':hover, :focus': {
          color: colors.white,
          background: darken(0.1, colors.success),
          borderColor: darken(0.1, colors.success),
        },
      },
    },
  },
}
