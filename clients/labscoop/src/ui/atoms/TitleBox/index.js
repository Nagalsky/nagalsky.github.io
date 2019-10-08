import React from 'react'

import theme from '../../../lib/theme'

import { Box } from '../../../helpers/'

const TitleBox = ({ children, ...restProps }) => {
  return (
    <Box
      {...restProps}
      display="inline-block"
      fontSize={0}
      py="2px"
      px="10px"
      mb="4px"
      fontFamily={theme.fontFamily.bold}
    >
      {children}
    </Box>
  )
}

export default TitleBox
