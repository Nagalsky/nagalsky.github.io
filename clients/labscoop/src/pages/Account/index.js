import { Fragment } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { darken } from 'polished'
import Select from 'react-select'

import { Box, Container } from '../../helpers'
import {
  Header,
  Footer,
  Text,
  Button,
  Title,
  Panel,
  Image,
  Anchor,
  Icon,
  TrayPopup,
  Field,
  Switch,
  BtnLink,
} from '../../ui'

import imgShip from '../../assets/images/elements/ship.svg'
import imgUpload from '../../assets/images/elements/upload.svg'
import imgScientist from '../../assets/images/elements/scientist.svg'

const StyledLink = styled(Link)`
  color: ${theme.colors.primary};
  font-family: ${theme.fontFamily.bold};
  display: block;
  padding: 4px 0;
  font-size: 12px;
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${darken(0.1, theme.colors.primary)};
  }
`

const Account = () => {
  return (
    <Fragment>
      <Header />

      <main className="content">
        <Box py={4}>
          <Container>
            <Title
              tag={1}
              css={css`
                text-align: center;
              `}
            >
              My Account
            </Title>

            <Panel mb={4}>
              <Box
                display="grid"
                gridGap={['20px', '20px', '30px', '40px']}
                gridTemplateColumns={[
                  'repeat(1, 1fr)',
                  'repeat(1,1fr)',
                  'repeat(1,1fr)',
                  'repeat(1,300px 1fr)',
                ]}
              >
                <Box
                  borderRightWidth={['0px', '0px', '0px', '1px']}
                  borderRightStyle="solid"
                  borderRightColor="muted"
                  borderBottomStyle="solid"
                  borderBottomColor="muted"
                  borderBottomWidth={['1px', '1px', '1px', '0px']}
                  pb={[1, 1, 1, 0]}
                  pr={[0, 0, 0, 1]}
                >
                  <Title
                    tag={6}
                    css={css`
                      color: ${theme.colors.primary};
                      margin-bottom: 5px;
                    `}
                  >
                    Orders & Requests
                  </Title>
                  <Text fontSize="12px">
                    Manage orders, view invoices, and track shipements.
                  </Text>
                  <Box textAlign="center" mb={2}>
                    <Button variant="primary" hasShadow>
                      My Orders
                    </Button>
                  </Box>

                  <Image
                    src={imgShip}
                    alt="imgShip"
                    width="140px"
                    mb={['0', '0', '0', '-1rem']}
                    mx="auto"
                    display="block"
                  />
                </Box>

                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '30px', '50px']}
                  gridTemplateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(2,1fr)',
                    'repeat(2,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3, 1fr)',
                  ]}
                >
                  <Box>
                    <Text mb="10px">Orders</Text>
                    <Box display="flex" flexDirection="column" mb={1}>
                      <StyledLink to="/">View All Orders</StyledLink>
                      <StyledLink to="/">My Orders</StyledLink>
                      <StyledLink to="/">Tagged Orders</StyledLink>
                    </Box>

                    <form>
                      <Box display="flex">
                        <input
                          placeholder="Search by order or PO number"
                          type="search"
                          css={css`
                            flex: 1;
                            margin-right: 10px;
                            border: 1px solid ${theme.colors.muted};
                            height: 34px;
                            padding: 6px 10px;
                            &:focus {
                              outline: none;
                              border-color: ${darken(0.2, theme.colors.muted)};
                            }
                          `}
                        />
                        <Button
                          css={css`
                            border-radius: 0;
                            flex-shrink: 0;
                            border-color: ${theme.colors.muted};
                            color: ${theme.colors.black};
                            box-shadow: none;
                            &:hover,
                            &:focus {
                              color: ${theme.colors.white};
                              background-color: ${theme.colors.primary};
                              border-color: ${theme.colors.primary};
                            }
                          `}
                        >
                          <Icon icon="search" />
                        </Button>
                      </Box>
                    </form>
                  </Box>

                  <Box>
                    <Text mb="10px">Requests</Text>
                    <Box display="flex" flexDirection="column">
                      <StyledLink to="/">Quote Requests</StyledLink>
                      <StyledLink to="/">Support Requests</StyledLink>
                    </Box>
                  </Box>

                  <Box>
                    <Text mb="10px">Support</Text>
                    <Box display="flex" flexDirection="column">
                      <StyledLink
                        to="/"
                        css={css`
                          color: ${theme.colors.success};
                          text-transform: uppercase;
                        `}
                      >
                        <Icon size="16px" icon="comment" mr="10px" />
                        live chat a scientist
                      </StyledLink>
                      <Anchor
                        href="mailto:support@labscoop.com"
                        css={css`
                          font-size: 12px;
                          font-family: ${theme.fontFamily.bold};
                          padding: 4px 0;
                          text-transform: uppercase;
                        `}
                      >
                        <Icon size="16px" icon="envelope" mr="10px" />
                        support@labscoop.com
                      </Anchor>
                      <Anchor
                        href="tel:800.316.3081"
                        css={css`
                          font-size: 12px;
                          font-family: ${theme.fontFamily.bold};
                          padding: 4px 0;
                          text-transform: uppercase;
                        `}
                      >
                        <Icon size="16px" icon="phone" mr="10px" />
                        800.316.3081
                      </Anchor>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Panel mb={4}>
              <Box
                display="grid"
                gridGap={['20px', '20px', '30px', '40px']}
                gridTemplateColumns={[
                  'repeat(1, 1fr)',
                  'repeat(1,1fr)',
                  'repeat(1,1fr)',
                  'repeat(1,300px 1fr)',
                ]}
              >
                <Box
                  borderRightWidth={['0px', '0px', '0px', '1px']}
                  borderRightStyle="solid"
                  borderRightColor="muted"
                  borderBottomStyle="solid"
                  borderBottomColor="muted"
                  borderBottomWidth={['1px', '1px', '1px', '0px']}
                  pb={[1, 1, 1, 0]}
                  pr={[0, 0, 0, 1]}
                >
                  <Title
                    tag={6}
                    css={css`
                      color: ${theme.colors.primary};
                      margin-bottom: 5px;
                    `}
                  >
                    Laboratory Group
                  </Title>
                  <Text fontSize="12px">
                    Join a lab and manage shared features.
                  </Text>
                  <Box mb={2}>
                    <Box textAlign="center">
                      <Button variant="primary" hasShadow>
                        Joing a Lab
                      </Button>
                    </Box>

                    <Box mt="20px">
                      <TrayPopup
                        toggleLink
                        toggleCentered
                        toggleTitle="Create a Laboratory Group"
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
                              Create a Lab
                            </Text>

                            <Button variant="primary" btnBlock>
                              Create Lab
                            </Button>
                          </Box>

                          <Box
                            width={['100%', '100%', '80%', '75%', '60%']}
                            mb={2}
                          >
                            <Field
                              type="text"
                              title="Lab Name"
                              id="field-lab-lab-name"
                            />

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
                              placeholder="Organization"
                            />
                          </Box>

                          <Text
                            fontSize="16px"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Add Members
                          </Text>
                          <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo. Nullam dictum felis eu pede
                            mollis pretium.
                          </Text>

                          <Box
                            display="grid"
                            gridGap="15px"
                            gridTemplateColumns={[
                              'repeat(1, 1fr)',
                              'repeat(2,1fr)',
                            ]}
                            mb={2}
                          >
                            <Box>
                              <Field
                                type="email"
                                title="Email Address"
                                id="field-lab-email-address"
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
                              placeholder="Role"
                            />

                            <Box>
                              <Button variant="secondary" px={1} py="10px">
                                <Icon icon="plus" />
                              </Button>
                            </Box>
                          </Box>

                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={2}
                            fontSize="15px"
                          >
                            Settings
                          </Text>

                          <Text>Ordering Workflow</Text>

                          <Box display="flex" alignItems="center" my={1}>
                            <Box
                              flexShrink="0"
                              mr={2}
                              display="inline-flex"
                              alignItems="center"
                            >
                              <Switch id="switch-1" />
                            </Box>
                            <Text flex="1" mb={0}>
                              Irems Must be Aproved by Manager Prior to Purchase
                            </Text>
                          </Box>
                          <Box display="flex" alignItems="center" my={1}>
                            <Box
                              flexShrink="0"
                              mr={2}
                              display="inline-flex"
                              alignItems="center"
                            >
                              <Switch id="switch-2" />
                            </Box>
                            <Text flex="1" mb={0}>
                              Orders Must be Approved & Placed by Administrator
                            </Text>
                          </Box>

                          <Text mt={3}>Lab Inventory Permissions</Text>
                          <Box display="flex" alignItems="center" my={1}>
                            <Box
                              flexShrink="0"
                              mr={2}
                              display="inline-flex"
                              alignItems="center"
                            >
                              <Switch id="switch-3" />
                            </Box>
                            <Text flex="1" mb={0}>
                              Inventory Items can be edited by all lab members.
                            </Text>
                          </Box>

                          <Box
                            width={['100%', '100%', '80%', '60%', '50%']}
                            mt={3}
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
                                placeholder="Time Zone"
                              />
                            </Box>

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
                                placeholder="Currency"
                              />
                            </Box>
                          </Box>

                          <BtnLink>Delete Timberland Lab Group</BtnLink>
                        </Box>
                      </TrayPopup>
                    </Box>
                  </Box>

                  <Image
                    src={imgUpload}
                    alt="imgShip"
                    width="120px"
                    mb={['0', '0', '0', '-1rem']}
                    mx="auto"
                    display="block"
                  />
                </Box>

                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '30px', '50px']}
                  gridTemplateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(2,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                  ]}
                >
                  <Box>
                    <Text mb="10px">Group Management</Text>
                    <Box display="flex" flexDirection="column" mb={1}>
                      <StyledLink to="/">My Lab Groups</StyledLink>
                      <Box py="4px">
                        <TrayPopup
                          toggleLink
                          toggleSize="12px"
                          toggleTitle="Create a Lab"
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
                                Create a Lab
                              </Text>

                              <Button variant="primary" btnBlock>
                                Create Lab
                              </Button>
                            </Box>

                            <Box
                              width={['100%', '100%', '80%', '75%', '60%']}
                              mb={2}
                            >
                              <Field
                                type="text"
                                title="Lab Name"
                                id="field-lab-lab-name-2"
                              />

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
                                placeholder="Organization"
                              />
                            </Box>

                            <Text
                              fontSize="16px"
                              fontFamily={theme.fontFamily.bold}
                            >
                              Add Members
                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit. Aenean commodo ligula eget dolor.
                              Aenean massa. Cum sociis natoque penatibus et
                              magnis dis parturient montes, nascetur ridiculus
                              mus. Donec quam felis, ultricies nec, pellentesque
                              eu, pretium quis, sem. Nulla consequat massa quis
                              enim. Donec pede justo, fringilla vel, aliquet
                              nec, vulputate eget, arcu. In enim justo, rhoncus
                              ut, imperdiet a, venenatis vitae, justo. Nullam
                              dictum felis eu pede mollis pretium.
                            </Text>

                            <Box
                              display="grid"
                              gridGap="15px"
                              gridTemplateColumns={[
                                'repeat(1, 1fr)',
                                'repeat(2,1fr)',
                              ]}
                              mb={2}
                            >
                              <Box>
                                <Field
                                  type="email"
                                  title="Email Address"
                                  id="field-lab-email-address-2"
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
                                placeholder="Role"
                              />

                              <Box>
                                <Button variant="secondary" px={1} py="10px">
                                  <Icon icon="plus" />
                                </Button>
                              </Box>
                            </Box>

                            <Text
                              fontFamily={theme.fontFamily.bold}
                              mb={2}
                              fontSize="15px"
                            >
                              Settings
                            </Text>

                            <Text>Ordering Workflow</Text>

                            <Box display="flex" alignItems="center" my={1}>
                              <Box
                                flexShrink="0"
                                mr={2}
                                display="inline-flex"
                                alignItems="center"
                              >
                                <Switch id="switch-21" />
                              </Box>
                              <Text flex="1" mb={0}>
                                Irems Must be Aproved by Manager Prior to
                                Purchase
                              </Text>
                            </Box>
                            <Box display="flex" alignItems="center" my={1}>
                              <Box
                                flexShrink="0"
                                mr={2}
                                display="inline-flex"
                                alignItems="center"
                              >
                                <Switch id="switch-22" />
                              </Box>
                              <Text flex="1" mb={0}>
                                Orders Must be Approved & Placed by
                                Administrator
                              </Text>
                            </Box>

                            <Text mt={3}>Lab Inventory Permissions</Text>
                            <Box display="flex" alignItems="center" my={1}>
                              <Box
                                flexShrink="0"
                                mr={2}
                                display="inline-flex"
                                alignItems="center"
                              >
                                <Switch id="switch-23" />
                              </Box>
                              <Text flex="1" mb={0}>
                                Inventory Items can be edited by all lab
                                members.
                              </Text>
                            </Box>

                            <Box
                              width={['100%', '100%', '80%', '60%', '50%']}
                              mt={3}
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
                                  placeholder="Time Zone"
                                />
                              </Box>

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
                                  placeholder="Currency"
                                />
                              </Box>
                            </Box>

                            <BtnLink>Delete Timberland Lab Group</BtnLink>
                          </Box>
                        </TrayPopup>
                      </Box>
                      <StyledLink to="/">Merge Lab Groups</StyledLink>
                    </Box>
                  </Box>

                  <Box>
                    <Text mb="10px">Help</Text>
                    <Box display="flex" flexDirection="column">
                      <StyledLink to="/">Knowledge Base</StyledLink>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Panel mb={4}>
              <Box
                display="grid"
                gridGap={['20px', '20px', '30px', '40px']}
                gridTemplateColumns={[
                  'repeat(1, 1fr)',
                  'repeat(1,1fr)',
                  'repeat(1,1fr)',
                  'repeat(1,300px 1fr)',
                ]}
              >
                <Box
                  borderRightWidth={['0px', '0px', '0px', '1px']}
                  borderRightStyle="solid"
                  borderRightColor="muted"
                  borderBottomStyle="solid"
                  borderBottomColor="muted"
                  borderBottomWidth={['1px', '1px', '1px', '0px']}
                  pb={[1, 1, 1, 0]}
                  pr={[0, 0, 0, 1]}
                >
                  <Title
                    tag={6}
                    css={css`
                      color: ${theme.colors.primary};
                      margin-bottom: 5px;
                    `}
                  >
                    Account Setting
                  </Title>
                  <Text fontSize="12px">
                    Manage payment methods, addresses, and preferences.
                  </Text>
                  <Box textAlign="center" mb={2}>
                    <Button variant="primary" hasShadow>
                      Add Payment Method
                    </Button>
                  </Box>

                  <Image
                    src={imgScientist}
                    alt="imgShip"
                    width="120px"
                    mb={['0', '0', '0', '-1rem']}
                    mx="auto"
                    display="block"
                  />
                </Box>

                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '30px', '50px']}
                  gridTemplateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(2,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                  ]}
                >
                  <Box>
                    <Text mb="10px">Address Book</Text>
                    <Box display="flex" flexDirection="column" mb={1}>
                      <StyledLink to="/account-add-address">
                        Add New Address
                      </StyledLink>
                      <StyledLink to="/account-manage-addresses">
                        Manage Existing Addresses
                      </StyledLink>
                    </Box>

                    <Text mb="10px">Peyment Options</Text>
                    <Box display="flex" flexDirection="column" mb={1}>
                      <StyledLink to="/account-add-card">
                        Add New Card
                      </StyledLink>
                      <StyledLink to="/account-add-po">
                        Add Standing/Blanket PO
                      </StyledLink>
                      <StyledLink to="/account-manage-payment-methods">
                        Manage Payment Methods
                      </StyledLink>
                    </Box>
                  </Box>

                  <Box>
                    <Text mb="10px">Grants / Funds</Text>
                    <Box display="flex" flexDirection="column" mb={1}>
                      <StyledLink to="/account-add-new-grant">
                        Add New Grant / Fund
                      </StyledLink>
                      <StyledLink to="/account-manage-grants">
                        Manage Grants / Funds
                      </StyledLink>
                    </Box>

                    <Text mb="10px">Brands Accounts</Text>
                    <Box display="flex" flexDirection="column">
                      <StyledLink to="/account-add-account">
                        Add New Account
                      </StyledLink>
                      <StyledLink to="/account-manage-accounts">
                        Manage Accounts
                      </StyledLink>
                    </Box>
                  </Box>

                  <Box>
                    <Text mb="10px">Settings & Preferences</Text>
                    <Box display="flex" flexDirection="column">
                      <StyledLink to="/account-profile">
                        Account Profile
                      </StyledLink>
                      <StyledLink to="/account-login-security">
                        Login & Security
                      </StyledLink>
                      <StyledLink to="/account-email-preferences">
                        Email Preferences
                      </StyledLink>
                      <StyledLink to="/account-verification-documents">
                        Verification Documents
                      </StyledLink>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Panel>
          </Container>
        </Box>
      </main>

      <Footer />
    </Fragment>
  )
}

export default Account
