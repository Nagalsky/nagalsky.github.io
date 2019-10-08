import React from 'react'
import styled from '@emotion/styled'
import {
  color,
  space,
  layout,
  flexbox,
  typography,
  shadow,
  border,
} from 'styled-system'
import theme from '../../../lib/theme'

const StyledBtnLink = styled.button`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
  ${shadow}
  ${border}
`

const BtnLink = ({ children, ...restProps }) => {
  return <StyledBtnLink {...restProps}>{children}</StyledBtnLink>
}

BtnLink.defaultProps = {
  color: theme.colors.primary,
  fontFamily: theme.fontFamily.bold,
  bg: 'transparent',
  border: 'none',
  p: 0,
}

export default BtnLink
