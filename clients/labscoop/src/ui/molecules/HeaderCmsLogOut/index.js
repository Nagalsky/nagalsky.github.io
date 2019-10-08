/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Box } from '../../../helpers'
import theme from '../../../lib/theme'
import { Icon } from '../..'

const HeaderCmsLogOut = ({ ...restProps }) => {
  return (
    <Box
      {...restProps}
      p={['15px', '20px']}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      color="white"
      bg="#3b4898"
      css={css`
        cursor: pointer;
        &:hover,
        &:focus {
          background-color: #344085;
        }
      `}
    >
      <Box
        fontFamily={theme.fontFamily.bold}
        color="white"
        display={['none', 'none', 'block']}
      >
        Logout
      </Box>
      <Icon
        icon="sign-out"
        color="white"
        display={['block', 'block', 'none !important']}
        size="18px"
      />
    </Box>
  )
}

export default HeaderCmsLogOut
