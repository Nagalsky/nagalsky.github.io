import React from 'react'
import { Router } from '@reach/router'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Helmet } from 'react-helmet'
import theme from './lib/theme'
import Root from './lib/root'
import reset from './lib/reset'

import {
  Homepage,
  Search,
  ShoppingCart,
  SharedCart,
  Account,
  AccountProfile,
  AccountEmailPreferences,
  AccountLoginSecurity,
  AccountSettingsVerification,
  AccountAddAddress,
  AccountManageAddresses,
  AccountAddAccount,
  AccountManageAccounts,
  AccountAddCard,
  AccountAddPO,
  AccountManagePaymentMethods,
  OrdersAllOrders,
  RequestsQuoteRequests,
  RequestsSupportRequests,
  AllBrands,
  Product,
  OrderDetails,
  CheckoutReviewAndPlace,
  CheckoutThankYou,
  CheckoutShipping,
  CheckoutShipping2,
  CheckoutShipping3,
  CheckoutBilling,
  CheckoutPaymentCreditCard,
  CheckoutPaymentPO,
  CheckoutPaymentBPO,
  CheckoutPaymentDirectWire,
  CheckoutPaymentDirectACH,
  Popups,
  LamsOrderDetails,
  LamsNewCustomers,
  SignIn,
} from '../src/pages/index'

const headerLoggedIn = false

const NotFound = () => <div>Sorry, nothing here.</div>

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      <Root>
        <Global styles={reset} />

        <Router>
          <Homepage path="/" headerLoggedIn={headerLoggedIn} />
          <Search path="/search" />
          <ShoppingCart path="/shopping-cart" />
          <SharedCart path="/shared-cart" />
          <Account path="/account" />
          <AccountProfile path="/account-profile" />
          <AccountEmailPreferences path="/account-email-preferences" />
          <AccountLoginSecurity path="/account-login-security" />
          <AccountSettingsVerification path="/account-verification-documents" />
          <AccountAddAddress path="/account-add-address" />
          <AccountManageAddresses path="/account-manage-addresses" />
          <AccountAddAccount path="/account-add-account" />
          <AccountManageAccounts path="/account-manage-accounts" />
          <AccountAddCard path="/account-add-card" />
          <AccountAddPO path="/account-add-po" />
          <AccountManagePaymentMethods path="/account-manage-payment-methods" />
          <OrdersAllOrders path="/orders-all-orders" />
          <RequestsQuoteRequests path="/requests-quote-requests" />
          <RequestsSupportRequests path="/requests-support-requests" />
          <AllBrands path="/all-brands" />
          <Product path="/product" />
          <OrderDetails path="/order-details" />
          <CheckoutReviewAndPlace path="/checkout-review-and-place" />
          <CheckoutShipping path="/checkout-shipping" />
          <CheckoutShipping2 path="/checkout-shipping2" />
          <CheckoutShipping3 path="/checkout-shipping3" />
          <CheckoutBilling path="/checkout-billing" />
          <CheckoutPaymentCreditCard path="/checkout-payment-credit-card" />
          <CheckoutPaymentPO path="/checkout-payment-po" />
          <CheckoutPaymentBPO path="/checkout-payment-bpo" />
          <CheckoutPaymentDirectWire path="/checkout-payment-direct-wire" />
          <CheckoutPaymentDirectACH path="/checkout-payment-direct-ach" />
          <CheckoutThankYou path="/checkout-thank-you" />
          <Popups path="/popups" />
          <LamsOrderDetails path="/lams-order-details" />
          <LamsNewCustomers path="/lams-new-customers" />
          <SignIn path="/sign-in" />
          <NotFound default />
        </Router>
      </Root>
    </ThemeProvider>
  )
}

export default App
