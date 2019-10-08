//For hover/focus effects for button
import { darken } from 'polished'

//Fonts
import '../assets/fonts/nunito/stylesheet.css'

const baseFonts = {
  fontNunitoLight: 'Nunito-Light',
  fontNunitoRegular: 'Nunito-Regular',
  fontNunitoSemibold: 'Nunito-SemiBold',
  fontNunitoBold: 'Nunito-ExtraBold',
}

//Typography
const themeFonts = {
  baseFontLight: baseFonts.fontNunitoLight,
  baseFontRegular: baseFonts.fontNunitoRegular,
  baseFontSemibold: baseFonts.fontNunitoSemibold,
  baseFontBold: baseFonts.fontNunitoBold,
}

//Colors
const baseColors = {
  white: '#ffffff',
  black: '#191919',
  blue: '#2c55a2',
  green: '#35a248',
  greenSecondary: '#00d2d2',
  gray: '#b8b8b8',
  grayDark: '#666666',
  silver: '#ebebeb',
  silverSecondary: '#f6f6f6',
  yellow: '#fec910',
  danger: '#d24835',
  orange: '#fd6500',
}

const themeColors = {
  base: baseColors.black,
  primary: baseColors.blue,
  success: baseColors.green,
  successSecondary: baseColors.greenSecondary,
  muted: baseColors.gray,
  mutedSecondary: baseColors.silverSecondary,
  warning: baseColors.yellow,
  danger: baseColors.danger,
  attention: baseColors.orange,
}

const colors = {
  ...baseColors,
  ...themeColors,
}

//Transition
const transition = {
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
  lineHeight: 1.4,
  padding: '8px 28px',
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
  containerMaxWidth: ['100%', '540px', '720px', '960px', '1555px'],
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
  transition: transition.baseTransition,
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
    secondary: {
      ...buttonsBase,
      color: colors.black,
      background: colors.white,
      borderColor: colors.muted,
      '@media (hover: hover)': {
        ':hover, :focus': {
          color: colors.white,
          background: colors.primary,
          borderColor: colors.primary,
        },
      },
    },
    link: {
      ...buttonsBase,
      color: colors.primary,
      background: 'transparent',
      borderColor: 'transparent',
      '@media (hover: hover)': {
        ':hover, :focus': {
          color: colors.primary,
          textDecoration: 'underline',
        },
      },
    },
  },
  buttonSizes: {
    xs: `
      height: 16px;
      padding: 0 16px;
      font-size: 10px;
    `,
    sm: `
      height: 24px;
      padding: 0 24px;
      font-size: 13px;
    `,
    default: `
      height: 24px;
      padding: 0 30px;
      font-size: 13px;
    `,
  },
}
