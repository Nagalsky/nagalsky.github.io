import React from 'react'

import Box from '../Box/'

const Container = ({ children, ...restProps }) => (
  <Box {...restProps} px={[15, 15, 15, 15, 50]}>
    {children}
  </Box>
)

export default Container
