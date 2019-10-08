/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { darken } from 'polished'
import {
  color,
  space,
  layout,
  flexbox,
  typography,
  shadow,
} from 'styled-system'
import theme from '../../../lib/theme'

const StyledAnchor = styled.a`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
  ${shadow}
`

const Anchor = ({ children, ...restProps }) => {
  const { href, small, bold, underline } = restProps
  return (
    <StyledAnchor
      href={href}
      {...restProps}
      css={css`
        font-family: ${bold && theme.fontFamily.bold};
        font-size: ${small && '12px'};
        text-decoration: ${underline && 'underline'};
        &:hover,
        &:focus {
          text-decoration: none;
          color: ${darken(0.2, theme.colors.primary)};
        }
      `}
    >
      {children}
    </StyledAnchor>
  )
}

Anchor.defaultProps = {
  color: theme.colors.primary,
}

export default Anchor
