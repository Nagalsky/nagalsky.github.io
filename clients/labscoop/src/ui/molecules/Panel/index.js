/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import theme from '../../../lib/theme'
import { Box } from '../../../helpers'

const Panel = ({ children, ...restProps }) => {
  return (
    <Box
      {...restProps}
      borderWidth="1px"
      borderLeftWidth="4px"
      borderStyle="solid"
      borderColor="muted"
      css={css`
        transition: all 200ms ease;
        &:hover,
        &:focus {
          box-shadow: 0 0 5px 0 rgba(25, 25, 25, 0.3);
          text-decoration: none;
          border-left-color: ${theme.colors.success};
        }
      `}
    >
      {children}
    </Box>
  )
}

Panel.defaultProps = {
  mb: 1,
  bg: 'white',
  p: '1rem',
}

export default Panel
