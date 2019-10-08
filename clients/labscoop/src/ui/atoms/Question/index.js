import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'

import { Box } from '../../../helpers/'
import { Button, Text, Icon } from '../../'

const Question = ({ children, ...restProps }) => {
  const [isOpened, setisOpened] = useState(false)
  const toggle = () => setisOpened(!isOpened)

  const { toggleBtnTitle, date, answerBtnTitle } = restProps

  return (
    <Box {...restProps} pl={['40px', '60px']} position="relative" mb={2}>
      <Icon
        size="20px"
        icon="plus-circle"
        position="absolute"
        top="10px"
        left={['0px', '20px']}
      />
      <Box
        display="flex"
        alignItems={['normal', 'center']}
        flexDirection={['column', 'row']}
        mb={1}
      >
        <Box flex="1" mb={[1, 0]} mr={[0, 4]}>
          <Text
            mb={0}
            color="primary"
            fontFamily={theme.fontFamily.bold}
            onClick={toggle}
            css={css`
              cursor: pointer;
            `}
          >
            {toggleBtnTitle}
          </Text>
          <Text
            fontSize={0}
            onClick={toggle}
            css={css`
              cursor: pointer;
            `}
          >
            {date}
          </Text>
        </Box>

        <Box flexShrink="0">
          <Button btnSm>{answerBtnTitle}</Button>
        </Box>
      </Box>

      {isOpened && children}
    </Box>
  )
}

export default Question
