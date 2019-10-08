/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import theme from '../../../lib/theme'

import { Box } from '../../../helpers/'

const FeedBack = ({ children, ...restProps }) => {
  return (
    <Box
      {...restProps}
      css={css`
        &:not(:last-of-type) {
          border-bottom: 1px solid ${theme.colors.muted};
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
      `}
    >
      {children}
    </Box>
  )
}

export default FeedBack
