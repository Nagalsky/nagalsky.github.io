import React from 'react'
import styled from '@emotion/styled'

const StyledMain = styled.main`
  flex: 1 1 auto;
`

const Main = ({ children, ...restProps }) => {
  return <StyledMain {...restProps}>{children}</StyledMain>
}

export default Main
