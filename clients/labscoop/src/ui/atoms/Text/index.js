/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  color,
  space,
  layout,
  position,
  flexbox,
  typography,
  border,
  grid,
} from 'styled-system'

const StyledText = styled.p`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${flexbox}
  ${typography}
  ${border}
  ${grid}
`

const Text = ({ children, ...restProps }) => {
  const { uppercase, truncate } = restProps

  return (
    <StyledText
      {...restProps}
      css={css`
        overflow: ${truncate && 'hidden'};
        text-overflow: ${truncate && 'ellipsis'};
        white-space: ${truncate && 'nowrap'};
        text-transform: ${uppercase && 'uppercase'};
      `}
    >
      {children}
    </StyledText>
  )
}

export default Text
