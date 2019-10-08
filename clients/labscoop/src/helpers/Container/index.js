/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import theme from '../../lib/theme'
import Box from '../../helpers/Box/'

const Container = ({ children, small, ...restProps }) => (
  <Box
    {...restProps}
    px={[1, 1, 5]}
    width="100%"
    css={css`
      max-width: ${small && '660px !important'};
    `}
  >
    {children}
  </Box>
)

Container.defaultProps = {
  maxWidth: theme.containerMaxWidth,
  mx: 'auto',
  px: theme.gutterWidth,
}

export default Container
