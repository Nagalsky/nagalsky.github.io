import React from 'react'
import styled from '@emotion/styled'
import {
  color,
  layout,
  shadow,
  flexbox,
  border,
  position,
  space,
} from 'styled-system'

import { Button, Icon } from '../../'
import theme from '../../../lib/theme'

const StyledHeaderForm = styled.form`
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${shadow}
  ${space}
`

const StyledHeaderFormField = styled.input`
  ${layout}
  ${flexbox}
  ${border}
  ${shadow}
  ${space}
  &:focus {
    outline: none;
  }
`

const StyledHeaderFormBtnSubmit = styled(Button)`
  ${border}
  ${space}
`

const StyledHeaderFormIcon = styled.span`
  ${position}
  ${color}
  ${layout}
  ${space}
  ${flexbox}
`

const HeaderForm = ({ ...restProps }) => {
  return (
    <StyledHeaderForm
      {...restProps}
      display="flex"
      position="relative"
      boxShadow="0 0 6px 1px rgba(0,0,0,.15)"
      borderRadius={0}
    >
      <StyledHeaderFormIcon
        position="absolute"
        px="10px"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon color="gray" icon="search" />
      </StyledHeaderFormIcon>
      <StyledHeaderFormField
        type="search"
        flexBasis="100%"
        border="none"
        height={38}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        pr={1}
        pl={4}
        py="5px"
      />
      <StyledHeaderFormBtnSubmit
        variant="primary"
        borderTopLeftRadius="0px"
        borderBottomLeftRadius="0px"
        px={2}
      >
        <Icon icon="search" color={theme.colors.white} />
      </StyledHeaderFormBtnSubmit>
    </StyledHeaderForm>
  )
}

export default HeaderForm
