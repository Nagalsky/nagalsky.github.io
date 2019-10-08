import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'

import { Box } from '../../../helpers'
import { Icon } from '../..'

const Comment = ({ children, ...restProps }) => {
  const [isOpened, setisOpened] = useState(false)
  const toggle = () => setisOpened(!isOpened)

  const { toggleBtnTitle } = restProps

  return (
    <Box {...restProps}>
      <Box
        display="flex"
        alignItems={['normal', 'normal', 'normal', 'normal', 'center']}
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
      >
        <Box
          display="flex"
          alignItems="center"
          mb={[1, 1, 1, 1, 0]}
          flexShrink={0}
          mr={[0, 0, 0, 0, 2]}
        >
          <Box
            onClick={toggle}
            fontFamily={theme.fontFamily.bold}
            color="primary"
            flexShrink="0"
            fontSize={0}
            mr={1}
            display="flex"
            alignItems="center"
            css={css`
              cursor: pointer;
            `}
          >
            <Icon size="12px" icon="caret-down" mr="5px" />
            {toggleBtnTitle}
          </Box>
        </Box>
      </Box>

      {isOpened && (
        <Box mt={1} px={[0, 1, 3]}>
          {children}
        </Box>
      )}
    </Box>
  )
}

export default Comment
