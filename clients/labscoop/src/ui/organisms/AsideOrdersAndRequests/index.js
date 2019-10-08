import { Fragment } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import { Box } from '../../../helpers'
import { AsideLink, Text, Aside, Icon } from '../..'

const AsideOrdersAndRequests = ({ isAsideMenuOpen, toggleAsideMenu }) => {
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
          >
            Orders
          </Text>
          <Box display="flex" flexDirection="column" mb={1}>
            <AsideLink to="/orders-all-orders">All Orders</AsideLink>
            <AsideLink to="/orders-my-orders">My Orders</AsideLink>
            <AsideLink to="/orders-tagged-orders">Tagged Orders</AsideLink>
          </Box>

          <Text
            textAlign={['left', 'left', 'right']}
            color="muted"
            fontFamily={theme.fontFamily.bold}
          >
            Requests
          </Text>
          <Box display="flex" flexDirection="column" mb={1}>
            <AsideLink to="/requests-quote-requests">Quote Requests</AsideLink>
            <AsideLink to="/requests-support-requests">
              Support Requests
            </AsideLink>
          </Box>
        </Aside>
      </TouchScrollable>
    </Fragment>
  )
}

export default AsideOrdersAndRequests
