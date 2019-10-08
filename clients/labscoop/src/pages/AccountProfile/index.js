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
  Button,
  Text,
  Title,
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

const AccountProfile = () => {
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
              mb={1}
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
                    settings & preferences
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    Account Profile
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
                  <Text fontSize={['12px', '14px']}>Account profile</Text>
                </Box>
              </Box>

              <Box flexShrink="0">
                <LinkBack to="/account">
                  <Icon icon="long-arrow-left" mr="5px" />
                  Back to My Account
                </LinkBack>
              </Box>
            </Box>

            <Box width={['100%', '100%', '100%', '75%', '50%']} mt={4}>
              <form>
                <Field title="First Name" id="field-first-name" />
                <Field title="Last Name" id="field-last-name" />
                <Field title="Email Address" id="field-email-address" />
                <Field title="Organization" id="field-organization" />
                <Box mb={2}>
                  <Select
                    options={[
                      { value: 'lorem ipsum 1', label: 'lorem ipsum 1' },
                      { value: 'lorem ipsum 2', label: 'lorem ipsum 2' },
                      { value: 'lorem ipsum 3', label: 'lorem ipsum 3' },
                    ]}
                    isSearchable={false}
                    menuPlacement="auto"
                    className="select"
                    classNamePrefix="select"
                    placeholder="Custom placeholder"
                  />
                </Box>
                <Field title="Mobile Numner" id="field-mobile-numner" />
                <Field title="Position" id="field-position" />
                <Box mb={2}>
                  <Select
                    options={[
                      { value: 'lorem ipsum 1', label: 'lorem ipsum 1' },
                      { value: 'lorem ipsum 2', label: 'lorem ipsum 2' },
                      { value: 'lorem ipsum 3', label: 'lorem ipsum 3' },
                    ]}
                    isSearchable={false}
                    menuPlacement="auto"
                    className="select"
                    classNamePrefix="select"
                    placeholder="Custom placeholder"
                  />
                </Box>

                <Button type="submit" variant="primary" mt={3}>
                  Save Changes
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

export default AccountProfile
