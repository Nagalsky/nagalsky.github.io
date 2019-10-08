import React from 'react'

import { Box } from '../../../helpers'
import theme from '../../../lib/theme'
import { Text } from '../..'

const HeaderCmsAccount = ({ ...restProps }) => {
  return (
    <Box
      {...restProps}
      borderRightStyle="solid"
      borderRightColor="#344085"
      borderRightWidth="1px"
      p={['10px', '15px']}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      flex={['1', 'none']}
    >
      <Box
        fontFamily={theme.fontFamily.bold}
        display={['none', 'none', 'none', 'block']}
        color="white"
      >
        Kundan Das - LAIN 8000 - Ext. 100
      </Box>

      <Box
        fontFamily={theme.fontFamily.bold}
        display={['block', 'block', 'block', 'none']}
        fontSize={['10px', '12px', '14px']}
        color="white"
      >
        KD - LAIN 8024
      </Box>

      <Text
        color="white"
        fontFamily={theme.fontFamily.bold}
        fontSize={['9px', '10px', '12px']}
      >
        Master Administrator
      </Text>
    </Box>
  )
}

export default HeaderCmsAccount
