/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import { layout, flexbox, space, color, typography } from 'styled-system'
import theme from '../../../lib/theme'

import { Box } from '../../../helpers/'
import { HeaderAccountDropdown } from '../../'
import { Button, Icon } from '../../'

const headerDropdownMenuLaunchGroup = [
  { id: 1, title: 'Doe Lab', href: '/' },
  { id: 2, title: 'Timberland Lab', href: '/' },
  { id: 3, title: 'Gentry Lab', href: '/' },
]

const headerDropdownMenuAccount = [
  { id: 1, title: 'Orders', href: '/' },
  { id: 2, title: 'Requests', href: '/' },
  { id: 3, title: 'Lab Groups', href: '/' },
  { id: 4, title: 'Vendor Accounts', href: '/' },
  { id: 5, title: 'Payment Options', href: '/' },
  { id: 6, title: 'Address Book', href: '/' },
  { id: 7, title: 'Account Settins', href: '/' },
  { id: 8, title: 'Science Samples', href: '/', icon: 'link' },
  { id: 9, title: 'Scipons', href: '/', icon: 'link' },
]

const StyledLink = styled(Link)`
  ${layout}
  ${flexbox}
  ${space}
  ${color}
  ${typography}
`

let userName = 'Jessica'

const HeaderAccount = ({ ...restProps }) => {
  const { headerLoggedIn } = restProps
  return (
    <Box {...restProps} display="flex" alignItems="center">
      <HeaderAccountDropdown
        mr={['20px', 2]}
        icon="launch"
        dropdownHeader="Launch a Lab Group"
      >
        <Box>
          {headerDropdownMenuLaunchGroup.map(
            headerDropdownMenuLaunchGroupItem => (
              <StyledLink
                key={headerDropdownMenuLaunchGroupItem.id}
                to={headerDropdownMenuLaunchGroupItem.href}
                display="block"
                py=".5rem"
                px={[1, 2]}
                color="black"
                fontFamily={theme.fontFamily.bold}
                css={css`
                  &:hover,
                  &:focus {
                    text-decoration: none;
                    color: ${theme.colors.black};
                    background-color: #f6f6f6;
                  }
                `}
              >
                {headerDropdownMenuLaunchGroupItem.title}
              </StyledLink>
            ),
          )}
        </Box>
        <Box
          mt={[1, 1, '40px', '120px', '120px']}
          bg="#f6f6f6"
          py={['30px', '30px', '35px']}
          px={['15px', '30px', '30px', '30px', '65px']}
          textAlign="center"
          borderBottomLeftRadius="3px"
          borderBottomRightRadius="3px"
        >
          <Button
            variant="primary"
            btnBlock
            maxWidth="210px"
            mx="auto"
            py="12px"
          >
            Create Lab Group
          </Button>
        </Box>
      </HeaderAccountDropdown>
      <HeaderAccountDropdown
        mr={['20px', 2]}
        icon="account"
        dropdownHeader="My Account"
      >
        <Box pb={2}>
          {!headerLoggedIn && (
            <Box bg="#f6f6f6" p="15px" textAlign="center">
              <Button
                variant="primary"
                btnBlock
                maxWidth="210px"
                mx="auto"
                py="12px"
              >
                Sign In
              </Button>
              <Box mt={1}>
                New Customers?{' '}
                <StyledLink
                  to="/"
                  css={css`
                    color: ${theme.colors.primary};
                    font-family: ${theme.fontFamily.bold};
                  `}
                >
                  Create an Account
                </StyledLink>
              </Box>
            </Box>
          )}

          {headerLoggedIn && (
            <Box py=".5rem" px={2} color="muted" fontSize="1.25rem">
              Hi, {userName}!
            </Box>
          )}

          {headerDropdownMenuAccount.map(headerDropdownMenuAccountItem => (
            <StyledLink
              key={headerDropdownMenuAccountItem.id}
              to={headerDropdownMenuAccountItem.href}
              display="flex"
              alignItems="center"
              py=".5rem"
              px={[1, 2]}
              color="black"
              fontFamily={theme.fontFamily.bold}
              css={css`
                &:hover,
                &:focus {
                  text-decoration: none;
                  color: ${theme.colors.black};
                  background-color: #f6f6f6;
                  svg {
                    path {
                      fill: ${theme.colors.primary} !important;
                    }
                  }
                }
              `}
            >
              {headerDropdownMenuAccountItem.title}
              {headerDropdownMenuAccountItem.icon === 'link' ? (
                <Icon
                  icon="external-link-alt"
                  css={css`
                    margin-left: 10px;
                  `}
                />
              ) : null}
            </StyledLink>
          ))}

          {headerLoggedIn && (
            <Box mt="35px" bg="#f6f6f6" p="15px" textAlign="center" mb="-25px">
              <Button variant="link" btnBlock>
                Logout
              </Button>
            </Box>
          )}
        </Box>
      </HeaderAccountDropdown>
    </Box>
  )
}

export default HeaderAccount
