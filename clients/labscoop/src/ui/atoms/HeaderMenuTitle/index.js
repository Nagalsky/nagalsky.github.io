import React from 'react'
import styled from '@emotion/styled'
import theme from '../../../lib/theme'

import { layout, flexbox, space, color, typography } from 'styled-system'

const StyledMenuCaptionItem = styled.p`
  ${layout}
  ${flexbox}
  ${space}
  ${color}
  ${typography}
`

const HeaderMenuTitle = ({ children, ...restProps }) => {
  return (
    <StyledMenuCaptionItem
      m={0}
      color="successSecondary"
      fontFamily={theme.fontFamily.light}
      py="5px"
      fontSize={5}
    >
      {children}
    </StyledMenuCaptionItem>
  )
}

export default HeaderMenuTitle
