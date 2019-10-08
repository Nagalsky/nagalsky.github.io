/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { color, space, layout, flexbox, typography } from 'styled-system'
import theme from '../../../lib/theme'

const StyledLabel = styled.label`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
`

const Label = ({ uppercase, ...restProps }) => {
  return (
    <StyledLabel
      {...restProps}
      fontFamily={theme.fontFamily.bold}
      css={css`
        text-transform: ${uppercase && 'uppercase'};
      `}
    />
  )
}

export default Label
