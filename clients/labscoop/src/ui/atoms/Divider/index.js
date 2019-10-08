import React from 'react'

import theme from '../../../lib/theme'
import { Box } from '../../../helpers/'

const Divider = ({ ...restProps }) => {
  return <Box {...restProps} height="1px" />
}

Divider.defaultProps = {
  bg: theme.colors.muted,
}

export default Divider
