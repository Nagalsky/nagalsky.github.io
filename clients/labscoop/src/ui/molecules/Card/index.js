/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import theme from '../../../lib/theme'
import { Box } from '../../../helpers'

const Card = ({ children, ...restProps }) => {
  return (
    <Box
      {...restProps}
      borderBottomWidth="4px"
      borderBottomStyle="solid"
      borderBottomColor="muted"
      bg="white"
      css={css`
        &:hover,
        &:focus {
          box-shadow: 0 0 5px 0 rgba(25, 25, 25, 0.3);
          text-decoration: none;
          border-bottom-color: ${theme.colors.success};
        }
      `}
    >
      {children}
    </Box>
  )
}

export default Card
