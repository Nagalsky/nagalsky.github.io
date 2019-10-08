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
  Accordion,
  Button,
  Divider,
  Checkbox,
  Switch,
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

const StyledButtonAdd = styled(Button)`
  border-color: ${theme.colors.muted};
  padding-left: 15px;
  padding-right: 15px;
  color: ${theme.colors.black};
  &:hover,
  &:focus {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
  }
`

const StyledAddedBox = styled.div`
  padding: 0px 15px;
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${theme.colors.muted};
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
`

const StyledBtnRemove = styled.button`
  border: none;
  background: transparent;
  font-family: ${theme.fontFamily.bold};
  color: ${theme.colors.primary};
  flex-shrink: 0;
  margin-left: 20px;
  &:hover,
  &:focus {
    color: ${theme.colors.black};
  }
`

const StyledBoxName = styled(Text)`
  margin-bottom: 0;
  font-family: ${theme.fontFamily.bold};
`

const AccountEmailPreferences = () => {
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
                    settings & preferences
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    Email Notifications
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
                  <Text fontSize={['12px', '14px']}>Email Notifications</Text>
                </Box>
              </Box>

              <Box flexShrink="0">
                <LinkBack to="/account">
                  <Icon icon="long-arrow-left" mr="5px" />
                  Back to My Account
                </LinkBack>
              </Box>
            </Box>

            <Box boxShadow="0 .5rem 1rem rgba(0,0,0,.15)" mb={4}>
              <Box
                p={[1, 1, 2, 3]}
                bg="#f9f9f9"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="muted"
                borderBottom="none"
              >
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                  <b>john.doe@gmail.com</b>{' '}
                  <Anchor href="/" underline>
                    Change Primary Account Email
                  </Anchor>
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Box>

              <Accordion title="Order Tags">
                <Title tag={6}>NAME OR EMAIL ADDRESS</Title>
                <Box width={['100%', '100%', '100%', '100%', '80%']}>
                  <Box display="flex" mb={2}>
                    <Box flex="1">
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
                    <StyledButtonAdd type="button" flexShrink="0" ml={1}>
                      <Icon icon="plus" />
                    </StyledButtonAdd>
                  </Box>

                  <Box>
                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>

                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>

                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>
                  </Box>
                </Box>
              </Accordion>

              <Accordion title="Quotes">
                <Title tag={6}>NAME OR EMAIL ADDRESS</Title>
                <Box width={['100%', '100%', '100%', '100%', '80%']}>
                  <Box display="flex" mb={2}>
                    <Box flex="1">
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
                    <StyledButtonAdd type="button" flexShrink="0" ml={1}>
                      <Icon icon="plus" />
                    </StyledButtonAdd>
                  </Box>

                  <Box>
                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>

                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>

                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>
                  </Box>
                </Box>
              </Accordion>

              <Accordion title="Technical Support Tickets">
                <Title tag={6}>NAME OR EMAIL ADDRESS</Title>
                <Box width={['100%', '100%', '100%', '100%', '80%']}>
                  <Box display="flex" mb={2}>
                    <Box flex="1">
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
                    <StyledButtonAdd type="button" flexShrink="0" ml={1}>
                      <Icon icon="plus" />
                    </StyledButtonAdd>
                  </Box>

                  <Box>
                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>

                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>

                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>
                  </Box>
                </Box>
              </Accordion>

              <Accordion title="Packing Lists">
                <Title tag={6}>NAME OR EMAIL ADDRESS</Title>
                <Box width={['100%', '100%', '100%', '100%', '80%']}>
                  <Box display="flex" mb={2}>
                    <Box flex="1">
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
                    <StyledButtonAdd type="button" flexShrink="0" ml={1}>
                      <Icon icon="plus" />
                    </StyledButtonAdd>
                  </Box>

                  <Box>
                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>

                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>

                    <StyledAddedBox>
                      <Box flex="1">
                        <StyledBoxName>John Doe - LSA-48514</StyledBoxName>
                        <Text>john.doe@gmail.com</Text>
                      </Box>

                      <StyledBtnRemove type="button">Remove</StyledBtnRemove>
                    </StyledAddedBox>
                  </Box>
                </Box>
              </Accordion>
            </Box>

            <Title tag={2}>Promotional Emails</Title>

            <Box width={['100%', '100%', '100%', '80%', '50%']}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={1}
              >
                <Text flex="1" mb={0}>
                  Dials & Discounts
                </Text>

                <Box flexShrink="0" ml={2}>
                  <Switch id="switch-1" />
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={1}
              >
                <Text flex="1" mb={0}>
                  Product Launches
                </Text>

                <Box flexShrink="0" ml={2}>
                  <Switch id="switch-2" />
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={1}
              >
                <Text flex="1" mb={0}>
                  Application Features
                </Text>

                <Box flexShrink="0" ml={2}>
                  <Switch id="switch-3" />
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={1}
              >
                <Text flex="1" mb={0}>
                  Suppliers
                </Text>

                <Box flexShrink="0" ml={2}>
                  <Switch id="switch-4" />
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={1}
              >
                <Text flex="1" mb={0}>
                  Company News & Announcements
                </Text>

                <Box flexShrink="0" ml={2}>
                  <Switch id="switch-5" />
                </Box>
              </Box>
            </Box>

            <Divider my={3} />

            <Checkbox
              title="I do not Wish to receive any promotional emails."
              id="checkbox-1"
            />

            <Button type="submit" variant="primary" mt={4}>
              Save Changes
            </Button>
          </Box>
        </Box>
      </main>

      <Footer />
    </Fragment>
  )
}

export default AccountEmailPreferences
