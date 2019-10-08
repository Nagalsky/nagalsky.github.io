import { Fragment } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import { Box } from '../../../helpers'
import { AsideLink, Text, Aside, Icon } from '../..'

const AsidePaymentMethod = ({ isAsideMenuOpen, toggleAsideMenu }) => {
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
          height={isAsideMenuOpen ? 'calc(100% - 71px)' : 'auto'}
          p={isAsideMenuOpen ? 1 : 0}
          zIndex={isAsideMenuOpen && '4000'}
          left="0"
          top="71px"
          mr={0}
        >
          <Box textAlign="right">
            <Box
              onClick={toggleAsideMenu}
              display={isAsideMenuOpen ? 'inline-block' : 'none'}
              css={css`
                cursor: pointer;
              `}
              mb={1}
            >
              <Icon icon="times" size="20px" />
            </Box>
          </Box>

          <Text
            textAlign={['left', 'left', 'right']}
            color="muted"
            fontFamily={theme.fontFamily.bold}
          >
            Choose Payment Method
          </Text>

          <AsideLink to="/checkout-payment-credit-card">
            Credit Card
            <Text
              display="block"
              fontFamily={theme.fontFamily.base}
              fontSize="12px"
              textAlign={['left', 'left', 'right']}
            >
              VISA, MX, DISC, AMEX
            </Text>
          </AsideLink>

          <AsideLink to="/checkout-payment-po">
            Purchase Order
            <Text
              display="block"
              fontFamily={theme.fontFamily.base}
              fontSize="12px"
              textAlign={['left', 'left', 'right']}
            >
              One-Time
            </Text>
          </AsideLink>

          <AsideLink to="/checkout-payment-bpo">
            Purchase Order
            <Text
              display="block"
              fontFamily={theme.fontFamily.base}
              fontSize="12px"
              textAlign={['left', 'left', 'right']}
            >
              Blanket / Standing
            </Text>
          </AsideLink>

          <AsideLink to="/checkout-payment-direct-wire">
            Direct Deposit
            <Text
              display="block"
              fontFamily={theme.fontFamily.base}
              fontSize="12px"
              textAlign={['left', 'left', 'right']}
            >
              Wire
            </Text>
          </AsideLink>

          <AsideLink to="/checkout-payment-direct-ach">
            Direct Deposit
            <Text
              display="block"
              fontFamily={theme.fontFamily.base}
              fontSize="12px"
              textAlign={['left', 'left', 'right']}
            >
              ACH
            </Text>
          </AsideLink>
        </Aside>
      </TouchScrollable>
    </Fragment>
  )
}

export default AsidePaymentMethod
