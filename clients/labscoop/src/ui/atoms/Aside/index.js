import React from 'react'

import { Box } from '../../../helpers'

const Aside = ({ children, ...restProps }) => {
  return (
    <Box {...restProps} flexShrink="0">
      {children}
    </Box>
  )
}

Aside.defaultProps = {
  flexBasis: ['100%', '100%', '200px'],
  mr: ['0', '0', '50px'],
}

export default Aside
