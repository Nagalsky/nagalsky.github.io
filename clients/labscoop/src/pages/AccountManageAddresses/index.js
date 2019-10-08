import { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import { Link } from '@reach/router'
import Select from 'react-select'

import { Box } from '../../helpers'
import {
  Header,
  Footer,
  Text,
  Title,
  Anchor,
  PaginationBtn,
  Checkbox,
  Button,
  AsideSettings,
  Icon,
  TrayPopup,
  Field,
} from '../../ui'

const LinkBack = styled(Link)`
  font-family: ${theme.fontFamily.bold};
  color: ${theme.colors.primary};
  &:hover,
  &:focus {
    color: ${darken(0.2, theme.colors.primary)};
    text-decoration: none;
  }
`

const AccountManageAddresses = () => {
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false)
  const toggleAsideMenu = () => setIsAsideMenuOpen(!isAsideMenuOpen)

  return (
    <Fragment>
      <Header />

      <main className="content">
        <Box
          pt={2}
          pb={5}
          px={[1, 1, 1, 5]}
          display="flex"
          flexDirection={['column', 'column', 'row']}
        >
          <AsideSettings
            isAsideMenuOpen={isAsideMenuOpen}
            toggleAsideMenu={toggleAsideMenu}
          />

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
                  <Text
                    mb="5px"
                    css={css`
                      text-transform: uppercase;
                      font-size: 11px;
                    `}
                  >
                    address book
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    Manage Addresses
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
                    Account
                    <Icon
                      icon="chevron-down"
                      color={theme.colors.muted}
                      ml="10px"
                    />
                  </Box>
                  <Text fontSize={['12px', '14px']}>Manage Addresses</Text>
                </Box>
              </Box>

              <Box flexShrink="0">
                <LinkBack to="/account">
                  <Icon icon="long-arrow-left" mr="5px" />
                  Back to My Account
                </LinkBack>
              </Box>
            </Box>

            <Box
              p={[1, 1, 2, 3]}
              bg="#f9f9f9"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="muted"
            >
              <Text>
                <b>Manage your billing & Shipping Addresses</b>
              </Text>
              <Text>
                Manage multiple bill to and ship tp address for your entire lab
                and other labs in one place to ensure an easy and quick checkout
                process for all lab members everytime.
              </Text>
              <Anchor href="/">Add a New Address</Anchor>
            </Box>

            <Box
              mt={4}
              display="grid"
              gridGap={['50px', '50px', '30px']}
              gridTemplateColumns={[
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(2,1fr)',
              ]}
              mb="20px"
            >
              <Box
                borderRightWidth={['0px', '0px', '0px', '0px', '1px']}
                borderRightStyle="solid"
                borderRightColor="muted"
                pr={[0, 0, 0, 0, 2]}
              >
                <Box
                  pb={['20px', '20px', '30px', '40px', '50px']}
                  mb={['20px', '20px', '30px', '40px', '50px']}
                  borderBottomWidth={1}
                  borderBottomStyle="solid"
                  borderBottomColor="muted"
                >
                  <Title tag={2}>Shipping Address</Title>
                  <Text mb="5px">
                    <b>Tim Johnson</b>
                  </Text>
                  <Text fontSize="12px">
                    334 University Ave.
                    <br />
                    Bldg B, RM 204
                    <br />
                    Detroid, MI - 45 784
                    <br />
                    United States of America
                    <br />
                    Phone: 456-789-1234
                    <br />
                    Fax: 456-789-1234
                    <br />
                    tim.johnson@labscoop.cpm
                  </Text>

                  <Checkbox
                    title="Set as Primary Ship to Address"
                    id="checkbox-1"
                    mb={2}
                  />

                  <Box display="flex">
                    <Box>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Edit"
                        toggleVariant="primary"
                        headerBackBtnTitle="Back to my account"
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

                    <Button ml={2}>Remove</Button>
                  </Box>
                </Box>

                <Box
                  borderBottomWidth={['1px', '1px', '1px', '1px', 0]}
                  borderBottomStyle="solid"
                  borderBottomColor="muted"
                  pb={['20px', '20px', '30px', '40px', '20px']}
                  mb={['20px', 0, 0, 0]}
                >
                  <Title tag={2}>Shipping Address</Title>
                  <Text mb="5px">
                    <b>Tim Johnson</b>
                  </Text>
                  <Text fontSize="12px">
                    334 University Ave.
                    <br />
                    Bldg B, RM 204
                    <br />
                    Detroid, MI - 45 784
                    <br />
                    United States of America
                    <br />
                    Phone: 456-789-1234
                    <br />
                    Fax: 456-789-1234
                    <br />
                    tim.johnson@labscoop.cpm
                  </Text>

                  <Checkbox
                    title="Set as Primary Ship to Address"
                    id="checkbox-1"
                    mb={2}
                  />

                  <Box display="flex">
                    <Box>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Edit"
                        toggleVariant="primary"
                        headerBackBtnTitle="Back to my account"
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

                    <Button ml={2}>Remove</Button>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box
                  pb={['20px', '20px', '30px', '40px', '50px']}
                  mb={['20px', '20px', '30px', '40px', '50px']}
                  borderBottomWidth={1}
                  borderBottomStyle="solid"
                  borderBottomColor="muted"
                >
                  <Title tag={2}>Shipping Address</Title>
                  <Text mb="5px">
                    <b>Tim Johnson</b>
                  </Text>
                  <Text fontSize="12px">
                    334 University Ave.
                    <br />
                    Bldg B, RM 204
                    <br />
                    Detroid, MI - 45 784
                    <br />
                    United States of America
                    <br />
                    Phone: 456-789-1234
                    <br />
                    Fax: 456-789-1234
                    <br />
                    tim.johnson@labscoop.cpm
                  </Text>

                  <Checkbox
                    title="Set as Primary Ship to Address"
                    id="checkbox-1"
                    mb={2}
                  />

                  <Box display="flex">
                    <Box>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Edit"
                        toggleVariant="primary"
                        headerBackBtnTitle="Back to my account"
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

                    <Button ml={2}>Remove</Button>
                  </Box>
                </Box>

                <Box pb="20px">
                  <Title tag={2}>Shipping Address</Title>
                  <Text mb="5px">
                    <b>Tim Johnson</b>
                  </Text>
                  <Text fontSize="12px">
                    334 University Ave.
                    <br />
                    Bldg B, RM 204
                    <br />
                    Detroid, MI - 45 784
                    <br />
                    United States of America
                    <br />
                    Phone: 456-789-1234
                    <br />
                    Fax: 456-789-1234
                    <br />
                    tim.johnson@labscoop.cpm
                  </Text>

                  <Checkbox
                    title="Set as Primary Ship to Address"
                    id="checkbox-1"
                    mb={2}
                  />

                  <Box display="flex">
                    <Box>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Edit"
                        toggleVariant="primary"
                        headerBackBtnTitle="Back to my account"
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

                    <Button ml={2}>Remove</Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent={['center', 'center', 'flex-end']}
              mt={3}
            >
              <PaginationBtn href="/" className="disabled" tabIndex="-1">
                <Icon icon="angle-double-left" mr="5px" />
                Previous
              </PaginationBtn>
              <PaginationBtn href="/" active>
                1
              </PaginationBtn>
              <PaginationBtn href="/">2</PaginationBtn>
              <PaginationBtn href="/">3</PaginationBtn>
              <PaginationBtn href="/">
                Next
                <Icon icon="angle-double-right" ml="5px" />
              </PaginationBtn>
            </Box>
          </Box>
        </Box>
      </main>

      <Footer />
    </Fragment>
  )
}

export default AccountManageAddresses
