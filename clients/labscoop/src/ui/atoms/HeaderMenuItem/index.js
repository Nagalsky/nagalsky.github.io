import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '../../../lib/theme'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import OutsideClickHandler from 'react-outside-click-handler'
import RSC from 'react-scrollbars-custom'

import {
  layout,
  flexbox,
  space,
  color,
  typography,
  border,
} from 'styled-system'

import { Box } from '../../../helpers/'
import { Icon } from '../../'

const StyledMenuButtonItem = styled.button`
  ${layout}
  ${flexbox}
  ${space}
  ${color}
  ${typography}
  ${border}
`

const HeaderMenuItem = ({ children, title, icon, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const el = document.body
  if (isOpen) {
    el.classList.add('subMenuIsOpened')
  } else {
    el.classList.remove('subMenuIsOpened')
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false)
      }}
    >
      <Box>
        <StyledMenuButtonItem
          onClick={toggle}
          display="flex"
          alignItems="center"
          width="100%"
          pr={4}
          pl={0}
          py={1}
          color="white"
          fontFamily={theme.fontFamily.bold}
          border="none"
          bg="transparent"
          textAlign="left"
          fontSize={['14px', '16px']}
          css={css`
            position: relative;
            z-index: 300;
            &:hover,
            &:focus {
              text-decoration: none;
              color: ${theme.colors.successSecondary};
              background-color: transparent;
              svg {
                path {
                  fill: ${theme.colors.successSecondary} !important;
                }
              }
            }
          `}
        >
          {icon && (
            <Icon
              size="20px"
              icon={icon}
              color={theme.colors.white}
              css={css`
                margin-right: 10px;
              `}
            />
          )}

          {title}
          <Icon
            size="16px"
            icon="chevron-right"
            color={theme.colors.white}
            css={css`
              margin-left: auto;
              flex-shrink: 0;
            `}
          />
        </StyledMenuButtonItem>

        <ScrollLock isActive={isOpen} />
        <TouchScrollable isActive={isOpen}>
          <Box
            {...restProps}
            position={['fixed', 'fixed', 'absolute']}
            height="100%"
            top="0"
            left={['0', '0', 'calc(100% + 1px)']}
            width={['100%', '100%', '100%', '100%', '550px']}
            pt={[1, 1, 3]}
            pb={3}
            px={[1, 1, 3, 3, 4]}
            bg="primary"
            zIndex="22800"
            overflowY="auto"
            css={css`
              transition: 250ms;
              transform: translateX(${isOpen ? '0px' : '20px'});
              opacity: ${isOpen ? '1' : '0'};
              visibility: ${isOpen ? 'visible' : 'hidden'};
            `}
          >
            <Box
              color="white"
              display={['flex', 'inline-flex', 'none']}
              mt="5px"
              alignItems="center"
              onClick={toggle}
              fontFamily={theme.fontFamily.bold}
              css={css`
                cursor: pointer;
              `}
            >
              <Icon
                size="16px"
                icon="chevron-left"
                color={theme.colors.white}
                css={css`
                  margin-right: 15px;
                `}
              />
              Back
            </Box>
            <RSC
              id="RSC-Example"
              style={{ height: '100%' }}
              css={css`
                .ScrollbarsCustom-Track {
                  background-color: #033281 !important;
                  height: calc(100%) !important;
                  top: 0 !important;
                  right: 0px !important;
                  width: 8px !important;
                }
                .ScrollbarsCustom-Thumb.ScrollbarsCustom-ThumbY {
                  background-color: ${theme.colors.successSecondary} !important;
                }
              `}
            >
              {children}
            </RSC>
          </Box>
        </TouchScrollable>
      </Box>
    </OutsideClickHandler>
  )
}

export default HeaderMenuItem
