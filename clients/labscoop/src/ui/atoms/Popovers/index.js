import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'
import Popover, { ArrowContainer } from 'react-tiny-popover'

import { Box } from '../../../helpers/'

const Popovers = ({ children, ...restProps }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const toggle = () => setIsPopoverOpen(!isPopoverOpen)

  const { content, position } = restProps

  return (
    <Popover
      isOpen={isPopoverOpen}
      onClickOutside={() => setIsPopoverOpen(false)}
      position={position}
      disableReposition
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor={theme.colors.primary}
          arrowSize={8}
        >
          <Box
            css={css`
              font-size: 12px;
              border: 1px solid ${theme.colors.primary};
              border-radius: 4px;
              padding: 8px 15px;
              background-color: ${theme.colors.white};
            `}
          >
            {content}
          </Box>
        </ArrowContainer>
      )}
    >
      <Box
        onMouseEnter={toggle}
        onMouseLeave={toggle}
        css={css`
          cursor: pointer;
          display: inherit;
        `}
      >
        {children}
      </Box>
    </Popover>
  )
}

export default Popovers
