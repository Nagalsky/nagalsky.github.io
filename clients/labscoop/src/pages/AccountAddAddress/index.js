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
  Button,
  Field,
  AsideSettings,
  Icon,
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

const AccountAddAddress = () => {
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
                    Add Address
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
                  <Text fontSize={['12px', '14px']}>Add Address</Text>
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
                <b>Add Billing & Shipping Address</b>
              </Text>
              <Text>
                Add bill to and ship tp addresses for multiple labs and
                locations to ensure a quick and easy checkout precess everytime
                for you lab.
              </Text>
            </Box>

            <Box width={['100%', '100%', '100%', '75%', '50%']} mt={4}>
              <form>
                <Box mb={2}>
                  <Select
                    options={[
                      { value: 'lorem ipsum 1', label: 'lorem ipsum 1' },
                      { value: 'lorem ipsum 2', label: 'lorem ipsum 2' },
                      { value: 'lorem ipsum 3', label: 'lorem ipsum 3' },
                    ]}
                    isSearchable={false}
                    menuPlacement="auto"
                    className="select"
                    classNamePrefix="select"
                    placeholder="Custom title"
                  />
                </Box>

                <Field
                  type="text"
                  title="Contact Person"
                  id="field-contact-person"
                />
                <Field type="tel" title="Phone" id="field-phone" />
                <Field type="tel" title="Fax" id="field-fax" />
                <Field
                  type="email"
                  title="Email Address"
                  id="field-email-address"
                />
                <Field
                  type="text"
                  title="Address Line 1"
                  id="field-address-line-1"
                />
                <Field
                  type="text"
                  title="Address Line 2"
                  id="field-address-line-2"
                />
                <Field type="text" title="City" id="field-city" />
                <Field
                  type="text"
                  title="State / Province / Area"
                  id="field-state-province-area"
                />
                <Field
                  type="text"
                  title="Bldg / Room / Mail Stop"
                  id="field-bldg"
                />
                <Field type="text" title="Zip / Postal Code" id="field-zip" />

                <Box mb={2}>
                  <Select
                    options={[
                      { value: 'lorem ipsum 1', label: 'lorem ipsum 1' },
                      { value: 'lorem ipsum 2', label: 'lorem ipsum 2' },
                      { value: 'lorem ipsum 3', label: 'lorem ipsum 3' },
                    ]}
                    isSearchable={false}
                    menuPlacement="auto"
                    className="select"
                    classNamePrefix="select"
                    placeholder="Custom title"
                  />
                </Box>

                <Field type="text" title="Attention" id="field-attention" />

                <Button type="submit" variant="primary" mt={4}>
                  Add Address
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </main>

      <Footer />
    </Fragment>
  )
}

export default AccountAddAddress
