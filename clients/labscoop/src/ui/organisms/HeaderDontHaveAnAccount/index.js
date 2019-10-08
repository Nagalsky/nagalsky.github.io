import React from 'react'
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import { layout, flexbox } from 'styled-system'

import Box from '../../../helpers/Box'
import theme from '../../../lib/theme'
import { Image } from '../..'

import headerLogo from '../../../assets/images/elements/logo.svg'

const StyledHeader = styled.header`
  position: relative;
  z-index: 600;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.white};
`

const StyledHeaderLogoLink = styled(Link)`
  ${layout}
  ${flexbox}
`

const HeaderDontHaveAnAccount = ({ ...restProps }) => {
  return (
    <StyledHeader>
      <Box
        {...restProps}
        px={[1, 1, 1, 1, 5]}
        py={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth={3}
        borderBottomColor="primary"
        borderBottomStyle="solid"
      >
        <StyledHeaderLogoLink to="/" width={['110px', '125px']} display="block">
          <Image src={headerLogo} alt="Logo" width="100%" />
        </StyledHeaderLogoLink>

        <Link to="/">
          <b>Don't have an account?</b>
        </Link>
      </Box>
    </StyledHeader>
  )
}

export default HeaderDontHaveAnAccount
