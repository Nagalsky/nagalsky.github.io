import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Box } from '../../../helpers'
import { Image, Text, Icon } from '../../'

const Collapse = ({ children, title, iconPath, size, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Box {...restProps}>
      <Box
        onClick={toggle}
        color="black"
        position="relative"
        pr={3}
        css={css`
          cursor: pointer;
        `}
      >
        {title && (
          <Text fontSize={size} mb={0}>
            {title}
          </Text>
        )}
        {iconPath && <Image src={iconPath} alt="image" maxWidth="30px" />}
        <Icon
          icon={isOpen ? 'chevron-up' : 'chevron-down'}
          size="14px"
          position="absolute"
          right="0"
          top="50%"
          css={css`
            transform: translateY(-50%);
          `}
        />
      </Box>

      {isOpen && <Box mt="10px">{children}</Box>}
    </Box>
  )
}

Collapse.defaultProps = {
  mb: 1,
}

export default Collapse
