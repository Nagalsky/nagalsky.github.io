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

const AccountAddCard = () => {
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
                    payment options
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    Add a Card
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
                  <Text fontSize={['12px', '14px']}>Add a Card</Text>
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
                <b>Adding Payment Methods</b>
              </Text>
              <Text>
                Save your payment methods to ensure a quick and easy checkout
                process everytime.
              </Text>
            </Box>

            <Box width={['100%', '100%', '100%', '75%', '50%']} mt={4}>
              <form>
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
                <Field type="text" title="Card Holder" id="field-card-holder" />
                <Field type="text" title="Card Number" id="field-card-number" />
                <Box display="flex">
                  <Box flex="1" mb={2}>
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

                  <Box flexShrink="0" color="muted" mx={1} mt="10px">
                    <b>/</b>
                  </Box>

                  <Box flex="1" mb={2}>
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
                </Box>
                <Field type="text" title="CVV" id="field-cvv" />

                <Button type="submit" variant="primary" mt={4}>
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

export default AccountAddCard
