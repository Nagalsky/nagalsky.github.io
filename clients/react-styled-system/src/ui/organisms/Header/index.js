import React from 'react'
import styled from '@emotion/styled'
import { space, layout, flexbox, border } from 'styled-system'

const StyledHeader = styled.header`
${space}
${layout}
${flexbox}
${border}
`

const Header = props => {
  const { headerLoggedIn } = props
  console.log(headerLoggedIn)

  return (
    <StyledHeader
      px={[1, 1, 1, 1, 5]}
      py={1}
      display={['block', 'block', 'flex']}
      borderBottomWidth={2}
      borderBottomColor="primary"
      borderBottomStyle="solid"
    >
      <p>Header</p>
    </StyledHeader>
  )
}

export default Header
