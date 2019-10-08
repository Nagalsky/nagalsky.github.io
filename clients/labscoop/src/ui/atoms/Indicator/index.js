import React from 'react'

import theme from '../../../lib/theme'
import { Box } from '../../../helpers/'

const Indicator = ({ ...restProps }) => {
  return (
    <Box
      {...restProps}
      display="inline-block"
      width="12px"
      height="12px"
      borderRadius="50%"
    />
  )
}

Indicator.defaultProps = {
  bg: theme.colors.primary,
}

export default Indicator
