import React from 'react'
import styled from '@emotion/styled'
import { space, layout, flexbox, border } from 'styled-system'

const StyledImage = styled.img`
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`

const Image = ({ ...restProps }) => {
  return <StyledImage {...restProps} />
}

export default Image
