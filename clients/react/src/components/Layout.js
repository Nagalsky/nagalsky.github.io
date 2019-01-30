import React from 'react'
import { css, Global } from '@emotion/core'
import { breakpoints } from '../lib/breakpoints'
import { colors } from '../lib/variables'
import { typography } from '../lib/variables'
import { transition } from '../lib/variables'

import Header from './Header'
import Footer from './Footer'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-family: ${typography.baseFontFamily}, sans-serif;
    font-size: ${typography.baseFontSize};
    margin: 0;
    padding: 0;
    background: gray;
    color: ${colors.bodyColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${breakpoints.lgUp} {
      background: red;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: ${typography.titleFontFamily}, sans-serif;
    line-height: ${typography.titleLineHeight};
    color: ${colors.titleColor};
    &:last-child {
      margin-bottom: 0;
    }
  }

  h1,
  .h1 {
    font-size: 51px;
  }
  h2,
  .h2 {
    font-size: 45px;
  }
  h3,
  .h3 {
    font-size: 36px;
  }
  h4,
  .h4 {
    font-size: 26px;
  }
  h5,
  .h5 {
    font-size: 18px;
  }
  h6,
  .h6 {
    font-size: 14px;
  }

  button,
  a {
    transition: ${transition.baseTransition};
    cursor: pointer;
  }

  a {
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`

export default props => {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}
