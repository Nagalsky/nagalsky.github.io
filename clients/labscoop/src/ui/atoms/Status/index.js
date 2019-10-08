import React from 'react'

import { Box } from '../../../helpers/'
import theme from '../../../lib/theme'

const Status = ({ title, variant, ...restProps }) => {
  return (
    <Box
      py="8px"
      px={1}
      color="white"
      textAlign="center"
      bg={
        (variant === 'success' && 'success') ||
        (variant === 'warning' && 'warning') ||
        (variant === 'primary' && 'primary') ||
        (variant === 'danger' && 'danger') ||
        (variant === 'attention' && 'attention')
      }
      fontFamily={theme.fontFamily.bold}
      borderRadius="6px"
      {...restProps}
    >
      {title}
    </Box>
  )
}

export default Status
