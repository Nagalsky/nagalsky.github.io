import { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'
import Select from 'react-select'

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
  Wizard,
  WizardItem,
  Panel,
  TrayPopup,
  Checkbox,
  AsidePaymentMethod,
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

const CheckoutPaymentDirectACH = () => {
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false)
  const toggleAsideMenu = () => setIsAsideMenuOpen(!isAsideMenuOpen)

  return (
    <Fragment>
      <Wizard>
        <WizardItem isDone>Shipping</WizardItem>
        <WizardItem isDone>Billing</WizardItem>
        <WizardItem isActive>Payment</WizardItem>
        <WizardItem>Review & Place</WizardItem>
      </Wizard>

      <main className="content">
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
          <Box flex="1" mb={[2, 2, 2, 0]} py={[2, 2, 4]} px={[1, 1, 1, 5]}>
            <Box display="flex" flexDirection={['column', 'column', 'row']}>
              <Box
                flexBasis={['auto', 'auto', '200px']}
                mr={['0', '0', '50px']}
              >
                <Box mb={2}>
                  <TrayPopup
                    toggleTitle="Add a Card"
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
                          Add Bank Account
                        </Text>

                        <Button variant="primary" btnBlock>
                          Add Bank Account
                        </Button>
                      </Box>

                      <Box width={['100%', '100%', '80%', '75%', '70%']} mb={2}>
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
                            placeholder="Account Holder"
                          />
                        </Box>
                        <Field
                          type="text"
                          title="Bank Routing Number"
                          id="field-bank-account-bank-routing-number"
                        />
                        <Field
                          type="text"
                          title="Checking Account Number"
                          id="field-bank-checking-account-number"
                        />
                        <Field
                          type="text"
                          title="Re-enter Checking Account Number"
                          id="field-bank-re-enter-checking-account-number"
                        />
                        <Box
                          mb={2}
                          display="grid"
                          gridGap="15px"
                          gridTemplateColumns={[
                            'repeat(1,1fr)',
                            'repeat(1,2.5fr 1fr)',
                          ]}
                        >
                          <Box>
                            <Field
                              type="text"
                              title="Re-enter Checking Account Number"
                              id="field-bank-re-enter-checking-account-number"
                            />
                          </Box>

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
                            placeholder="State"
                          />
                        </Box>

                        <Checkbox
                          title="Make this my default payment method."
                          id="checkbox-bank-account-1"
                        />
                      </Box>
                    </Box>
                  </TrayPopup>
                </Box>

                <AsidePaymentMethod
                  isAsideMenuOpen={isAsideMenuOpen}
                  toggleAsideMenu={toggleAsideMenu}
                />
              </Box>

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
                        Payment Method
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
                        Payment Method
                        <Icon
                          icon="chevron-down"
                          color={theme.colors.muted}
                          ml="10px"
                        />
                      </Box>
                      <Text fontSize={['12px', '14px']}>Direct ACH</Text>
                    </Box>
                  </Box>

                  <Box flexShrink="0">
                    <LinkBack to="/account">
                      <Icon icon="long-arrow-left" mr="5px" />
                      Back to Cart
                    </LinkBack>
                  </Box>
                </Box>

                <Box
                  mb={2}
                  display="grid"
                  gridGap={2}
                  gridTemplateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']}
                >
                  <Box>
                    <Field
                      type="text"
                      title="Purchase Order Number"
                      id="field-purchase-order-number"
                    />
                  </Box>
                  <Box>
                    <Field
                      type="text"
                      title="Reference Number"
                      id="field-reference-number"
                    />
                  </Box>
                </Box>

                <Panel>
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'center',
                      'center',
                    ]}
                    flexDirection={['column', 'column', 'column', 'row', 'row']}
                  >
                    <Box
                      width="70px"
                      textAlign="center"
                      mr={2}
                      flexShrink="0"
                      mb={[1, 1, 1, 0, 0]}
                    >
                      <Icon icon="university" size="42px" />
                    </Box>
                    <Box mr={[2, 2, 2, 5, 5]} mb={[1, 1, 0, 0, 0]}>
                      <Text mb={0}>Standing PO - EID9840829</Text>
                      <Text fontSize="10px">
                        <b>Approve by: Kundan Das</b>
                      </Text>
                    </Box>
                    <Box>
                      <Text mb={0}>Expires 3/2017</Text>
                    </Box>
                  </Box>
                </Panel>

                <Panel>
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'center',
                      'center',
                    ]}
                    flexDirection={['column', 'column', 'column', 'row', 'row']}
                  >
                    <Box
                      width="70px"
                      textAlign="center"
                      mr={2}
                      flexShrink="0"
                      mb={[1, 1, 1, 0, 0]}
                    >
                      <Icon icon="university" size="42px" />
                    </Box>
                    <Box mr={[2, 2, 2, 5, 5]} mb={[1, 1, 0, 0, 0]}>
                      <Text mb={0}>Visa ending in 8493</Text>
                      <Text fontSize="10px">
                        <b>Card Holder: Kundan Das</b>
                      </Text>
                    </Box>
                    <Box>
                      <Text mb={0}>Expires 3/2017</Text>
                    </Box>
                  </Box>
                </Panel>
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

export default CheckoutPaymentDirectACH
