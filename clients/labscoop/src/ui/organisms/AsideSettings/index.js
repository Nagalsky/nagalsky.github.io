import { Fragment } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import { Box } from '../../../helpers'
import { AsideLink, Text, Aside, Icon } from '../..'

const AsideSettings = ({ isAsideMenuOpen, toggleAsideMenu }) => {
  return (
    <Fragment>
      <ScrollLock isActive={isAsideMenuOpen} />
      <TouchScrollable isActive={isAsideMenuOpen}>
        <Aside
          mb={[1, 1, 0]}
          bg="white"
          display={[
            isAsideMenuOpen ? 'block' : 'none',
            isAsideMenuOpen ? 'block' : 'none',
            'block',
          ]}
          overflowY={isAsideMenuOpen && 'auto'}
          position={isAsideMenuOpen && 'fixed'}
          width={isAsideMenuOpen ? '100%' : 'auto'}
          height={[
            isAsideMenuOpen ? 'calc(100% - 111px)' : 'auto',
            isAsideMenuOpen ? 'calc(100% - 111px)' : 'auto',
            isAsideMenuOpen ? 'calc(100% - 71px)' : 'auto',
          ]}
          p={isAsideMenuOpen ? 1 : 0}
          zIndex={isAsideMenuOpen && '4000'}
          left="0"
          top={['111px', '111px', '71px']}
        >
          <Box
            onClick={toggleAsideMenu}
            flexShrink="0"
            ml={2}
            position="absolute"
            top="15px"
            right="15px"
            display={isAsideMenuOpen ? 'inline-block' : 'none'}
            css={css`
              cursor: pointer;
            `}
          >
            <Icon icon="times" size="20px" />
          </Box>

          <Text
            textAlign={['left', 'left', 'right']}
            color="muted"
            fontFamily={theme.fontFamily.bold}
            display={isAsideMenuOpen ? 'inline-block' : 'none'}
          >
            Account
          </Text>

          <Text
            textAlign={['left', 'left', 'right']}
            color="muted"
            fontFamily={theme.fontFamily.bold}
          >
            Address Book
          </Text>
          <Box display="flex" flexDirection="column" mb={1}>
            <AsideLink to="/account-add-address">Add Address</AsideLink>
            <AsideLink to="/account-manage-addresses">
              Manage Addresses
            </AsideLink>
          </Box>

          <Text
            textAlign={['left', 'left', 'right']}
            color="muted"
            fontFamily={theme.fontFamily.bold}
          >
            Payment Options
          </Text>
          <Box display="flex" flexDirection="column" mb={1}>
            <AsideLink to="/account-add-card">Add a Card</AsideLink>
            <AsideLink to="/account-add-po">Add Standing/Blanlet PO</AsideLink>
            <AsideLink to="/account-manage-payment-methods">
              Manage Payment Methods
            </AsideLink>
          </Box>

          <Text
            textAlign={['left', 'left', 'right']}
            color="muted"
            fontFamily={theme.fontFamily.bold}
          >
            Grants & Funds
          </Text>
          <Box display="flex" flexDirection="column" mb={1}>
            <AsideLink to="/account-add-new-grant">
              Add New Grant / Fund
            </AsideLink>
            <AsideLink to="/account-manage-grants">
              Manage Grants / Funds
            </AsideLink>
          </Box>

          <Text
            textAlign={['left', 'left', 'right']}
            color="muted"
            fontFamily={theme.fontFamily.bold}
          >
            Brand Accounts
          </Text>
          <Box display="flex" flexDirection="column" mb={1}>
            <AsideLink to="/account-add-account">Add Account</AsideLink>
            <AsideLink to="/account-manage-accounts">Manage Accounts</AsideLink>
            <AsideLink to="/account-pricing">Labscoop Pricing</AsideLink>
          </Box>

          <Text
            textAlign={['left', 'left', 'right']}
            color="muted"
            fontFamily={theme.fontFamily.bold}
          >
            Setting & Preferences
          </Text>
          <Box display="flex" flexDirection="column" mb={1}>
            <AsideLink to="/account-profile">Account Profile</AsideLink>
            <AsideLink to="/account-login-security">Login & Security</AsideLink>
            <AsideLink to="/account-email-preferences">
              Email Preferences
            </AsideLink>
            <AsideLink to="/account-verification-documents">
              Verification Documents
            </AsideLink>
          </Box>
        </Aside>
      </TouchScrollable>
    </Fragment>
  )
}

export default AsideSettings
