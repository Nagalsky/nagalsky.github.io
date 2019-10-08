import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '../../../lib/theme'

import OutsideClickHandler from 'react-outside-click-handler'
import {
  space,
  border,
  color,
  flexbox,
  position,
  layout,
  shadow,
  typography,
} from 'styled-system'

import { Box } from '../../../helpers/'
import { Icon } from '../../'

const StyledHeaderAccountDropdownItem = styled.div`
  ${space}
  ${border}
  ${color}
  ${flexbox}
  ${position}
  ${layout}
  ${shadow}
`

const StyledHeaderAccountDropdownHeader = styled.p`
  ${space}
  ${border}
  ${typography}
`

const HeaderAccountDropdown = ({ children, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const { icon, dropdownHeader } = restProps

  return (
    <Box {...restProps} position="relative">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpen(false)
        }}
      >
        <Box
          onClick={toggle}
          minHeight="24px"
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
            size={
              (icon === 'launch' && '22px') ||
              (icon === 'account' && '19px') ||
              null
            }
            icon={
              (icon === 'launch' && 'space-shuttle') ||
              (icon === 'account' && 'user-astronaut') ||
              null
            }
            color={isOpen ? theme.colors.primary : theme.colors.black}
          />
        </Box>

        {isOpen ? (
          <StyledHeaderAccountDropdownItem
            isOpen={isOpen}
            position="absolute"
            bg="white"
            zIndex="40"
            borderRadius="3px"
            boxShadow="0 0 5px 1px rgba(0,0,0,.35)"
            width={['230px', '320px', '280px', '280px', '340px']}
            mt={['10px', '10px', '25px']}
            right="0px"
            css={css`
              &:before {
                content: '';
                position: absolute;
                right: 5px;
                top: -6px;
                display: inline-block;
                width: 12px;
                height: 12px;
                background-color: #ffffff;
                box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
                transform: rotate(45deg);
              }
            `}
          >
            <Box bg="white" borderRadius="3px" position="relative" zIndex="40">
              {dropdownHeader && (
                <StyledHeaderAccountDropdownHeader
                  py="1rem"
                  px={[1, 2]}
                  m={0}
                  fontSize={3}
                  borderBottomWidth={1}
                  borderBottomColor="silver"
                  borderBottomStyle="solid"
                >
                  {dropdownHeader}
                </StyledHeaderAccountDropdownHeader>
              )}
              {children}
            </Box>
          </StyledHeaderAccountDropdownItem>
        ) : null}
      </OutsideClickHandler>
    </Box>
  )
}

export default HeaderAccountDropdown
