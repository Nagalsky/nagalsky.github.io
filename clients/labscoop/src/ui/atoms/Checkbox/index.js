import React from 'react'
import styled from '@emotion/styled'

import { Box } from '../../../helpers/'
import theme from '../../../lib/theme'

const StyledCheckbox = styled.input`
  position: absolute;
  left: -99999px;
  opacity: 0;
  visibility: hidden;
  &:checked {
    & ~ label {
      &:after {
        opacity: 1;
      }
    }
  }
`

const StyledLabel = styled.label`
  font-family: ${props =>
    props.bold ? theme.fontFamily.bold : theme.fontFamily.base};
  cursor: pointer;
  font-size: 12px;
  margin: 0;
  position: relative;
  padding-left: 24px;
  display: flex;
  align-items: center;
  min-height: 18px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: 2px;
    flex-shrink: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before {
    width: 14px;
    height: 14px;
    border: 1px solid ${theme.colors.black};
    left: 0;
  }
  &:after {
    width: 8px;
    height: 8px;
    background-color: ${theme.colors.black};
    left: 3px;
    opacity: 0;
  }
`

const Checkbox = ({ children, title, id, bold, ...restProps }) => {
  return (
    <Box {...restProps} position="relative" py="2px">
      <StyledCheckbox type="checkbox" id={id} />
      <StyledLabel htmlFor={id} bold={bold}>
        {title}
        {children}
      </StyledLabel>
    </Box>
  )
}

export default Checkbox
