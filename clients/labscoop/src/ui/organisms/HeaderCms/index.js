import React from 'react'
import styled from '@emotion/styled'
import {
  color,
  background,
  space,
  layout,
  position,
  flexbox,
  border,
} from 'styled-system'

import {
  HeaderCmsMenu,
  HeaderCmsLogo,
  HeaderCmsTitleBox,
  HeaderCmsAccount,
  HeaderCmsLogOut,
} from '../../'

const StyledHeader = styled.header`
  ${color}
  ${background}
  ${layout}
  ${space}
  ${position}
  ${flexbox}
  ${border}
`

const HeaderCms = () => {
  return (
    <StyledHeader
      borderBottomWidth={['5px', '5px', '0px']}
      borderBottomStyle="solid"
      borderBottomColor="success"
      borderTopWidth={['0', '0', '5px']}
      borderTopStyle="solid"
      borderTopColor="success"
      display="flex"
      position="sticky"
      top="0"
      left="0"
      zIndex="600"
      bg="primary"
      minHeight={['69px', '69px', '77px']}
    >
      <HeaderCmsMenu />

      <HeaderCmsLogo />

      <HeaderCmsTitleBox />

      <HeaderCmsAccount />

      <HeaderCmsLogOut />
    </StyledHeader>
  )
}

export default HeaderCms
