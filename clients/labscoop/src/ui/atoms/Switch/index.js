import React from 'react'
import styled from '@emotion/styled'

import { Box } from '../../../helpers'
import theme from '../../../lib/theme'

const StyledSwitchCheckbox = styled.input`
  position: absolute;
  left: -99999px;
  opacity: 0;
  visibility: hidden;
  &:checked {
    & ~ label {
      background-color: #5b5a60;
      &:before {
        opacity: 1;
      }
      &:after {
        opacity: 0;
      }
      > span {
        transform: translateX(21px);
      }
    }
  }
`

const StyledSwitchLabel = styled.label`
  font-family: ${theme.fontFamily.bold};
  text-transform: uppercase;
  cursor: pointer;
  margin: 0;
  position: relative;
  border: 1px solid #5b5a60;
  border-radius: 10px;
  width: 40px;
  height: 20px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    transform: translateY(-50%);
    top: 50%;
    font-size: 8px;
  }
  &:before {
    content: 'on';
    left: 3px;
    opacity: 0;
    color: ${theme.colors.white};
  }
  &:after {
    content: 'off';
    right: 3px;
    opacity: 1;
    color: #5b5a60;
  }
`

const StyledSwitchRunner = styled.span`
  transition: all 200ms ease;
  border: 1px solid #5b5a60;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  width: 14px;
  height: 14px;
  display: block;
  position: absolute;
  z-index: 20;
  left: 2px;
  top: 2px;
`

const Switch = ({ id, defaultChecked, ...restProps }) => {
  return (
    <Box {...restProps} display="inline-flex" alignItems="center">
      <StyledSwitchCheckbox
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
      />
      <StyledSwitchLabel htmlFor={id}>
        <StyledSwitchRunner />
      </StyledSwitchLabel>
    </Box>
  )
}

export default Switch
