import '../fonts/fonts.css'


/* Colors */
/* http://chir.ag/projects/name-that-color is used to get colors names */
export const baseColors = {
  white: '#ffffff',
  black: '#000000',
}

export const colors = {
  bodyColor: baseColors.white,
  titleColor: baseColors.black,
}


/* Typography */
const fonts = {
  baseFontLight: 'latolight',
  baseFontRegular: 'latoregular',
  baseFontBold: 'latobold',
}

export const typography = {
  baseFontSize: '20px',
  baseLineHeight: 1.55,
  baseFontFamily: fonts.baseFontRegular,
  titleLineHeight: 1.3,
  titleFontFamily: fonts.baseFontBold,
  baseFontLight: fonts.baseFontLight,
  baseFontRegular: fonts.baseFontRegular,
  baseFontBold: fonts.baseFontBold,
}


/* Transition */
export const transition = {
  baseTransition: 'all 200ms ease',
}
