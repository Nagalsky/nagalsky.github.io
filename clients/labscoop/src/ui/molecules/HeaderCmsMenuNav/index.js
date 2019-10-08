import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'

import { Box } from '../../../helpers'
import theme from '../../../lib/theme'
import { Icon } from '../..'

const menuData = [
  { title: 'Suppliers', href: '/' },
  { title: 'Customers', href: '/' },
  { title: 'Orders', href: '/' },
  { title: 'Products', href: '/' },
  { title: 'Requests', href: '/' },
  { title: 'Content', href: '/' },
  { title: 'Controls', href: '/' },
]

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.colors.black};
  font-size: 15px;
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`

const HeaderCmsMenuNav = ({ ...restProps }) => {
  return (
    <Box {...restProps} display="flex" flexDirection="column">
      {menuData.map((item, index) => (
        <StyledLink key={index} to={item.href}>
          {item.title} <Icon icon="chevron-right" color="#8c8c8c" ml="auto" />
        </StyledLink>
      ))}
    </Box>
  )
}

export default HeaderCmsMenuNav
