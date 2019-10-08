import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { rgba } from 'polished'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import theme from '../../../lib/theme'
import OutsideClickHandler from 'react-outside-click-handler'

import { Box } from '../../../helpers/'
import { Icon } from '../..'

const Tray = ({ children, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const { totalPrice } = restProps

  const el = document.body
  if (isOpen) {
    el.classList.add('trayIsOpened')
  } else {
    el.classList.remove('trayIsOpened')
  }

  return (
    <Box {...restProps} position="relative">
      <Box
        p={'5px'}
        onClick={toggle}
        display="flex"
        alignItems="center"
        css={css`
          cursor: pointer;
          &:hover,
          &:focus {
            svg {
              path {
                fill: ${theme.colors.primary} !important;
              }
            }
          }
        `}
      >
        <Icon
          size="20px"
          icon="shopping-cart"
          color={isOpen ? theme.colors.primary : theme.colors.black}
        />
        <Box
          ml="5px"
          fontSize={0}
          fontFamily={theme.fontFamily.bold}
          display="inline-block"
        >
          {totalPrice}
        </Box>
      </Box>

      <Box
        bg={rgba(0, 0, 0, 0.85)}
        position="fixed"
        top={0}
        right={0}
        height="100%"
        width="100%"
        zIndex="100"
        opacity={isOpen ? '1' : '0'}
        css={css`
          transition: all 0.25s cubic-bezier(0.7, 0, 0.3, 1);
          visibility: ${isOpen ? 'visible' : 'hidden'};
        `}
      >
        <Box
          position="absolute"
          top="15px"
          right={['auto', '380px']}
          left={['10px', 'auto']}
          zIndex="120"
          css={css`
            transition: all 0.25s cubic-bezier(0.7, 0, 0.3, 1);
            cursor: pointer;
            visibility: ${isOpen ? 'visible' : 'hidden'};
          `}
        >
          <Box
            onClick={toggle}
            css={css`
              pointer-events: none;
              cursor: pointer;
            `}
          >
            <Icon icon="times" color="white" size="22px" />
          </Box>
        </Box>
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsOpen(false)
          }}
        >
          <ScrollLock isActive={isOpen} />
          <TouchScrollable isActive={isOpen}>
            <Box
              isOpen={isOpen}
              position="absolute"
              top={0}
              right={0}
              bg="white"
              height="100%"
              width={['280px', '360px']}
              borderLeftWidth={4}
              borderLeftStyle="solid"
              borderLeftColor="primary"
              overflowY="auto"
              css={css`
                transition: all 0.2s cubic-bezier(0.7, 0, 0.3, 1);
                cursor: auto;
                transform: translate3d(${isOpen ? '0' : '100%'}, 0, 0);
              `}
            >
              {children}
            </Box>
          </TouchScrollable>
        </OutsideClickHandler>
      </Box>
    </Box>
  )
}
export default Tray
