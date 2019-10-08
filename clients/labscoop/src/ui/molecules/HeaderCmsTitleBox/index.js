import React from 'react'

import { Box } from '../../../helpers'
import theme from '../../../lib/theme'
import { Text } from '../..'

const HeaderCmsTitleBox = ({ ...restProps }) => {
  return (
    <Box
      {...restProps}
      flex="1"
      borderRightStyle="solid"
      borderRightColor="#344085"
      borderRightWidth="1px"
      p={['10px', '20px']}
      display={['none', 'flex']}
      justifyContent="center"
      flexDirection="column"
    >
      <Text
        color="white"
        fontFamily={theme.fontFamily.bold}
        fontSize={['16px', '16px', '16px', '16px', '20px']}
        display={['none', 'none', 'none', 'block']}
        mb={0}
      >
        Administrative Management System
      </Text>

      <Text
        color="white"
        fontFamily={theme.fontFamily.bold}
        fontSize="16px"
        display={['none', 'block', 'block', 'none']}
      >
        LAMS
      </Text>
    </Box>
  )
}

export default HeaderCmsTitleBox
