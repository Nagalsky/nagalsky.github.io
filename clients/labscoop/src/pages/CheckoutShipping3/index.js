import { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'
import Select from 'react-select'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import theme from '../../lib/theme'
import { Box } from '../../helpers'

import {
  Footer,
  Text,
  Icon,
  Title,
  Divider,
  Button,
  Image,
  Field,
  Checkbox,
  AsideLink,
  Wizard,
  Aside,
  WizardItem,
  TrayPopup,
} from '../../ui'

import logoAside from '../../assets/images/elements/logo.svg'

const LinkBack = styled(Link)`
  font-family: ${theme.fontFamily.bold};
  color: ${theme.colors.primary};
  display: inline-flex;
  align-items: center;
  &:hover,
  &:focus {
    color: ${darken(0.2, theme.colors.primary)};
    text-decoration: none;
  }
`

const CheckoutShipping3 = () => {
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false)
  const toggleAsideMenu = () => setIsAsideMenuOpen(!isAsideMenuOpen)

  return (
    <Fragment>
      <Wizard>
        <WizardItem isActive>Shipping</WizardItem>
        <WizardItem>Billing</WizardItem>
        <WizardItem>Payment</WizardItem>
        <WizardItem>Review & Place</WizardItem>
      </Wizard>

      <main className="content">
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
          <Box flex="1" mb={[2, 2, 2, 0]} py={[2, 2, 4]} px={[1, 1, 1, 5]}>
            <Box display="flex" flexDirection={['column', 'column', 'row']}>
              <ScrollLock isActive={isAsideMenuOpen} />
              <TouchScrollable isActive={isAsideMenuOpen}>
                <Aside
                  mb={1}
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
                  top="72px"
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

                  <Box mb={2}>
                    <TrayPopup
                      toggleTitle="Add New Address"
                      toggleVariant="primary"
                      headerBackBtnTitle="Back to my account"
                      toggleBlock
                      toggleBtnMd
                    >
                      <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                        <Box
                          mb={[1, 2]}
                          display="grid"
                          gridGap={['15px', '15px', '15px', '15px', '60px']}
                          gridTemplateColumns={[
                            'repeat(1, 1fr)',
                            'repeat(1,1fr)',
                            'repeat(1,2fr 1fr)',
                            'repeat(1,2fr 1fr)',
                            'repeat(1,2.5fr 1fr)',
                          ]}
                          alignItems="center"
                        >
                          <Text
                            fontSize={['20px', '22px']}
                            fontFamily={theme.fontFamily.bold}
                            mb="0"
                          >
                            Add a New Address
                          </Text>

                          <Button variant="primary" btnBlock>
                            Add Address
                          </Button>
                        </Box>

                        <Box
                          width={['100%', '100%', '80%', '75%', '70%']}
                          mb={2}
                        >
                          <Box mb={2}>
                            <Select
                              options={[
                                {
                                  value: 'lorem ipsum 1',
                                  label: 'lorem ipsum 1',
                                },
                                {
                                  value: 'lorem ipsum 2',
                                  label: 'lorem ipsum 2',
                                },
                                {
                                  value: 'lorem ipsum 3',
                                  label: 'lorem ipsum 3',
                                },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="Address Type"
                            />
                          </Box>

                          <Field
                            type="text"
                            title="Full Name"
                            id="field-add-new-address-full-name"
                          />

                          <Field
                            type="text"
                            title="Company / Institution"
                            id="field-add-new-address-company-institution"
                          />

                          <Field
                            type="text"
                            title="Address Line 1"
                            id="field-add-new-address-address-line-1"
                          />

                          <Field
                            type="text"
                            title="Address Line 2"
                            id="field-add-new-address-address-line-2"
                          />

                          <Field
                            type="text"
                            title="Building / Room / Mail Stop"
                            id="field-add-new-address-building"
                          />

                          <Field
                            type="text"
                            title="City"
                            id="field-add-new-address-city"
                          />

                          <Field
                            type="text"
                            title="State / Province / Region"
                            id="field-add-new-address-state"
                          />

                          <Field
                            type="text"
                            title="Zip Code / Postal Code"
                            id="field-add-new-address-zip"
                          />

                          <Field
                            type="email"
                            title="Email Address"
                            id="field-add-new-address-email-address"
                          />

                          <Field
                            type="tel"
                            title="Phone Number"
                            id="field-add-new-address-phone"
                          />

                          <Box mb={2}>
                            <Select
                              options={[
                                {
                                  value: 'lorem ipsum 1',
                                  label: 'lorem ipsum 1',
                                },
                                {
                                  value: 'lorem ipsum 2',
                                  label: 'lorem ipsum 2',
                                },
                                {
                                  value: 'lorem ipsum 3',
                                  label: 'lorem ipsum 3',
                                },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="Select a Country"
                            />
                          </Box>

                          <Checkbox
                            title="Make this my default payment method."
                            id="checkbox-field-new-address-1"
                          />
                        </Box>
                      </Box>
                    </TrayPopup>
                  </Box>

                  <Text
                    textAlign={['left', 'left', 'right']}
                    color="muted"
                    fontFamily={theme.fontFamily.bold}
                  >
                    Choose Shipping Address
                  </Text>

                  <AsideLink to="/checkout-shipping2">
                    Kristina K.
                    <Text
                      display="block"
                      fontFamily={theme.fontFamily.base}
                      fontSize="12px"
                      textAlign={['left', 'left', 'right']}
                    >
                      458 Hillstone Ridge Ave.
                      <br />
                      BLDG 49; RM 294
                    </Text>
                  </AsideLink>

                  <AsideLink to="/checkout-shipping3">
                    Kristina K.
                    <Text
                      display="block"
                      fontFamily={theme.fontFamily.base}
                      fontSize="12px"
                      textAlign={['left', 'left', 'right']}
                    >
                      458 Hillstone Ridge Ave.
                      <br />
                      BLDG 49; RM 294
                    </Text>
                  </AsideLink>

                  <AsideLink to="/checkout-shipping">
                    Kristina K.
                    <Text
                      display="block"
                      fontFamily={theme.fontFamily.base}
                      fontSize="12px"
                      textAlign={['left', 'left', 'right']}
                    >
                      458 Hillstone Ridge Ave.
                      <br />
                      BLDG 49; RM 294
                    </Text>
                  </AsideLink>
                </Aside>
              </TouchScrollable>

              <Box flex="1">
                <Box
                  display={['block', 'block', 'block', 'block', 'flex']}
                  alignItems="center"
                  justifyContent="space-between"
                  mb={2}
                >
                  <Box
                    mb={[1, 1, 1, 1, 0]}
                    mr={[0, 0, 0, 0, 2]}
                    flex="1"
                    display="flex"
                    alignItems="center"
                  >
                    <Box flex="1" mr={2}>
                      <Title
                        tag={1}
                        css={css`
                          font-family: ${theme.fontFamily.base};
                        `}
                      >
                        Shipping Address
                      </Title>
                    </Box>

                    <Box
                      flexShrink="0"
                      display={['block', 'block', 'none']}
                      textAlign="right"
                    >
                      <Box
                        color="muted"
                        fontFamily={theme.fontFamily.bold}
                        onClick={toggleAsideMenu}
                      >
                        Shipping Address
                        <Icon
                          icon="chevron-down"
                          color={theme.colors.muted}
                          ml="10px"
                        />
                      </Box>
                      <Text fontSize={['12px', '14px']}>Checkout shipping</Text>
                    </Box>
                  </Box>

                  <Box flexShrink="0">
                    <LinkBack to="/account">
                      <Icon icon="long-arrow-left" mr="5px" />
                      Back to Cart
                    </LinkBack>
                  </Box>
                </Box>

                <Text>Put content for checkout shipping 3 here</Text>
              </Box>
            </Box>
          </Box>

          <Box
            flexShrink={0}
            width={['100%', '100%', '100%', '100%', '420px']}
            py={[1, 1, 1, 2]}
            px={[1, 1, 1, 3]}
            bg="#f7f7f7"
          >
            <Box
              position={['static', 'static', 'static', 'sticky']}
              width="100%"
              left="0"
              top="110px"
            >
              <Image
                src={logoAside}
                alt="logo"
                mx="auto"
                mb={1}
                width="100%"
                maxWidth="130px"
                display="block"
              />
              <Title
                tag={2}
                css={css`
                  font-family: ${theme.fontFamily.base};
                `}
              >
                Order Summary
              </Title>
              <Box
                display="grid"
                gridGap="15px"
                gridTemplateColumns="repeat(1,1.5fr 1fr)"
                alignItems="center"
                fontSize="12px"
              >
                <Box fontFamily={theme.fontFamily.bold}>
                  Subtotal{' '}
                  <span
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    (3 Items)
                  </span>
                </Box>
                <Box textAlign="right">$178.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>Estimated Tax</Box>
                <Box textAlign="right">$0.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>
                  Estimated Shipping & Handling
                </Box>
                <Box
                  textAlign="right"
                  color="success"
                  fontFamily={theme.fontFamily.bold}
                >
                  <Icon icon="box" mr="5px" /> Free Shipping
                </Box>

                <Box fontFamily={theme.fontFamily.bold}>Precessing Fees</Box>
                <Box textAlign="right">$45.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>Savings</Box>
                <Box
                  textAlign="right"
                  color="success"
                  fontFamily={theme.fontFamily.bold}
                >
                  $100.00
                </Box>

                <Divider gridColumn="span 2" />

                <Box fontFamily={theme.fontFamily.bold} fontSize="18px">
                  Order Total
                </Box>
                <Box
                  textAlign="right"
                  fontFamily={theme.fontFamily.bold}
                  fontSize="18px"
                >
                  <small>
                    <sup>$</sup>
                  </small>
                  20,408.00
                </Box>
              </Box>

              <Button variant="primary" my={2} btnBlock btnMd>
                Continue
              </Button>

              <Box textAlign="right">
                <Link
                  to="/"
                  css={css`
                    font-family: ${theme.fontFamily.bold};
                    color: #7f7f7f;
                    display: inline-flex;
                    align-items: center;
                    &:hover,
                    &:focus {
                      color: ${theme.colors.primary};
                      svg {
                        path {
                          fill: ${theme.colors.primary} !important;
                        }
                      }
                    }
                  `}
                >
                  <Icon
                    icon="arrow-circle-left"
                    color="#7f7f7f"
                    size="18px"
                    css={css`
                      margin-right: 10px;
                    `}
                  />
                  Back to Previous Step
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </Fragment>
  )
}

export default CheckoutShipping3
