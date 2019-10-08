import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'

import { Box } from '../../../helpers'
import theme from '../../../lib/theme'
import { Text } from '../..'

const menuData = [
  { title: 'New Customer Account', href: '/' },
  { title: 'Generate Quote', href: '/' },
  { title: 'Track Quote', href: '/' },
  { title: 'New Supplier Account', href: '/' },
]

const StyledLink = styled(Link)`
  display: block;
  font-size: 12px;
  color: ${theme.colors.black};
  font-family: ${theme.fontFamily.bold};
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`

const HeaderCmsMenuQuickLinks = ({ ...restProps }) => {
  return (
    <Box {...restProps}>
      <Text fontFamily={theme.fontFamily.bold} fontSize="15px" mb="15px">
        Quick Links
      </Text>

      <Box display="flex" flexDirection="column">
        {menuData.map((item, index) => (
          <StyledLink key={index} to={item.href}>
            {item.title}
          </StyledLink>
        ))}
      </Box>
    </Box>
  )
}

export default HeaderCmsMenuQuickLinks
