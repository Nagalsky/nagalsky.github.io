import { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import { Link } from '@reach/router'

import { Box } from '../../helpers'
import {
  Header,
  Footer,
  Text,
  Title,
  Button,
  AsideOrdersAndRequests,
  Panel,
  Divider,
  PaginationBtn,
  Dropdown,
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

const RequestsQuoteRequests = () => {
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
          <AsideOrdersAndRequests
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
                    request
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    Quote Requests
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
                    Requests
                    <Icon
                      icon="chevron-down"
                      color={theme.colors.muted}
                      ml="10px"
                    />
                  </Box>
                  <Text fontSize={['12px', '14px']}>Quote Requests</Text>
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
              width={['100%', '100%', '100%', '75%', '65%']}
              mb={2}
              display="flex"
            >
              <form
                css={css`
                  width: 100%;
                `}
              >
                <Box display="flex">
                  <input
                    placeholder="Search quote requests by quote number or catalog number"
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
                    type="submit"
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

            <Box
              p={[1, 1, 2, 3]}
              bg="#f9f9f9"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="muted"
              mb={2}
            >
              <Text>
                <b>Manage All Your Quotes in One Place</b>
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </Text>
            </Box>

            <Text mb={0} fontSize="16px">
              Searched: EROP
            </Text>
            <Text fontSize="12px">14 Orders Found</Text>

            <Panel>
              <Box
                display="flex"
                flexDirection="column"
                css={css`
                  @media (min-width: 1500px) {
                    flex-direction: row !important;
                  }
                `}
              >
                <Box
                  display="flex"
                  alignItems={[
                    'normal',
                    'normal',
                    'normal',
                    'normal',
                    'flex-end',
                  ]}
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row',
                  ]}
                  flexShrink="0"
                  mr={[0, 0, 0, 0, 3]}
                  mb={2}
                  css={css`
                    @media (min-width: 1500px) {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Box mr={[0, 0, 0, 0, 5]}>
                    <Text
                      color="primary"
                      fontSize="15px"
                      css={css`
                        margin-bottom: 10px;
                      `}
                    >
                      <b>Quote LQ84487483748B</b>
                    </Text>
                    <Text fontSize="12px">Generated 4/23/2016</Text>
                  </Box>
                  <Box>
                    <Text color="success">
                      <b>Expiration Date 3/27/2016</b>
                    </Text>
                  </Box>
                </Box>

                <Box
                  flex="1"
                  textAlign="left"
                  css={css`
                    @media (min-width: 1500px) {
                      text-align: right;
                    }
                  `}
                >
                  <Button variant="primary" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Add to Cart
                  </Button>
                  <Button variant="success" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Checkout
                  </Button>
                  <Button mr={1} mb={[1, 1, 1, 0, 0]}>
                    View Quote
                  </Button>
                  <Button mb={[1, 1, 1, 0, 0]}>Delete</Button>
                </Box>
              </Box>

              <Divider my={1} mx="-1rem" />

              <Dropdown title="View Quoted Items" inlineBlock>
                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>

                <Divider my={2} />

                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>
              </Dropdown>
            </Panel>

            <Panel>
              <Box
                display="flex"
                flexDirection="column"
                css={css`
                  @media (min-width: 1500px) {
                    flex-direction: row !important;
                  }
                `}
              >
                <Box
                  display="flex"
                  alignItems={[
                    'normal',
                    'normal',
                    'normal',
                    'normal',
                    'flex-end',
                  ]}
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row',
                  ]}
                  flexShrink="0"
                  mr={[0, 0, 0, 0, 3]}
                  mb={2}
                  css={css`
                    @media (min-width: 1500px) {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Box mr={[0, 0, 0, 0, 5]}>
                    <Text
                      color="primary"
                      fontSize="15px"
                      css={css`
                        margin-bottom: 10px;
                      `}
                    >
                      <b>Quote LQ84487483748B</b>
                    </Text>
                    <Text fontSize="12px">Generated 4/23/2016</Text>
                  </Box>
                  <Box>
                    <Text color="success">
                      <b>Expiration Date 3/27/2016</b>
                    </Text>
                  </Box>
                </Box>

                <Box
                  flex="1"
                  textAlign="left"
                  css={css`
                    @media (min-width: 1500px) {
                      text-align: right;
                    }
                  `}
                >
                  <Button variant="primary" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Add to Cart
                  </Button>
                  <Button variant="success" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Checkout
                  </Button>
                  <Button mr={1} mb={[1, 1, 1, 0, 0]}>
                    View Quote
                  </Button>
                  <Button mb={[1, 1, 1, 0, 0]}>Delete</Button>
                </Box>
              </Box>

              <Divider my={1} mx="-1rem" />

              <Dropdown title="View Quoted Items" inlineBlock>
                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>

                <Divider my={2} />

                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>
              </Dropdown>
            </Panel>

            <Panel>
              <Box
                display="flex"
                flexDirection="column"
                css={css`
                  @media (min-width: 1500px) {
                    flex-direction: row !important;
                  }
                `}
              >
                <Box
                  display="flex"
                  alignItems={[
                    'normal',
                    'normal',
                    'normal',
                    'normal',
                    'flex-end',
                  ]}
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row',
                  ]}
                  flexShrink="0"
                  mr={[0, 0, 0, 0, 3]}
                  mb={2}
                  css={css`
                    @media (min-width: 1500px) {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Box mr={[0, 0, 0, 0, 5]}>
                    <Text
                      color="primary"
                      fontSize="15px"
                      css={css`
                        margin-bottom: 10px;
                      `}
                    >
                      <b>Quote LQ84487483748B</b>
                    </Text>
                    <Text fontSize="12px">Generated 4/23/2016</Text>
                  </Box>
                  <Box>
                    <Text color="success">
                      <b>Expiration Date 3/27/2016</b>
                    </Text>
                  </Box>
                </Box>

                <Box
                  flex="1"
                  textAlign="left"
                  css={css`
                    @media (min-width: 1500px) {
                      text-align: right;
                    }
                  `}
                >
                  <Button variant="primary" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Add to Cart
                  </Button>
                  <Button variant="success" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Checkout
                  </Button>
                  <Button mr={1} mb={[1, 1, 1, 0, 0]}>
                    View Quote
                  </Button>
                  <Button mb={[1, 1, 1, 0, 0]}>Delete</Button>
                </Box>
              </Box>

              <Divider my={1} mx="-1rem" />

              <Dropdown title="View Quoted Items" inlineBlock>
                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>

                <Divider my={2} />

                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>
              </Dropdown>
            </Panel>

            <Panel>
              <Box
                display="flex"
                flexDirection="column"
                css={css`
                  @media (min-width: 1500px) {
                    flex-direction: row !important;
                  }
                `}
              >
                <Box
                  display="flex"
                  alignItems={[
                    'normal',
                    'normal',
                    'normal',
                    'normal',
                    'flex-end',
                  ]}
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row',
                  ]}
                  flexShrink="0"
                  mr={[0, 0, 0, 0, 3]}
                  mb={2}
                  css={css`
                    @media (min-width: 1500px) {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Box mr={[0, 0, 0, 0, 5]}>
                    <Text
                      color="primary"
                      fontSize="15px"
                      css={css`
                        margin-bottom: 10px;
                      `}
                    >
                      <b>Quote LQ84487483748B</b>
                    </Text>
                    <Text fontSize="12px">Generated 4/23/2016</Text>
                  </Box>
                  <Box>
                    <Text color="success">
                      <b>Expiration Date 3/27/2016</b>
                    </Text>
                  </Box>
                </Box>

                <Box
                  flex="1"
                  textAlign="left"
                  css={css`
                    @media (min-width: 1500px) {
                      text-align: right;
                    }
                  `}
                >
                  <Button variant="primary" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Add to Cart
                  </Button>
                  <Button variant="success" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Checkout
                  </Button>
                  <Button mr={1} mb={[1, 1, 1, 0, 0]}>
                    View Quote
                  </Button>
                  <Button mb={[1, 1, 1, 0, 0]}>Delete</Button>
                </Box>
              </Box>

              <Divider my={1} mx="-1rem" />

              <Dropdown title="View Quoted Items" inlineBlock>
                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>

                <Divider my={2} />

                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>
              </Dropdown>
            </Panel>

            <Panel>
              <Box
                display="flex"
                flexDirection="column"
                css={css`
                  @media (min-width: 1500px) {
                    flex-direction: row !important;
                  }
                `}
              >
                <Box
                  display="flex"
                  alignItems={[
                    'normal',
                    'normal',
                    'normal',
                    'normal',
                    'flex-end',
                  ]}
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row',
                  ]}
                  flexShrink="0"
                  mr={[0, 0, 0, 0, 3]}
                  mb={2}
                  css={css`
                    @media (min-width: 1500px) {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Box mr={[0, 0, 0, 0, 5]}>
                    <Text
                      color="primary"
                      fontSize="15px"
                      css={css`
                        margin-bottom: 10px;
                      `}
                    >
                      <b>Quote LQ84487483748B</b>
                    </Text>
                    <Text fontSize="12px">Generated 4/23/2016</Text>
                  </Box>
                  <Box>
                    <Text color="danger">
                      <b>Expiration Date 3/27/2016</b>
                    </Text>
                  </Box>
                </Box>

                <Box
                  flex="1"
                  textAlign="left"
                  css={css`
                    @media (min-width: 1500px) {
                      text-align: right;
                    }
                  `}
                >
                  <Button variant="primary" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Add to Cart
                  </Button>
                  <Button variant="success" mr={1} mb={[1, 1, 1, 0, 0]}>
                    Checkout
                  </Button>
                  <Button mr={1} mb={[1, 1, 1, 0, 0]}>
                    View Quote
                  </Button>
                  <Button mb={[1, 1, 1, 0, 0]}>Delete</Button>
                </Box>
              </Box>

              <Divider my={1} mx="-1rem" />

              <Dropdown title="View Quoted Items" inlineBlock>
                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>

                <Divider my={2} />

                <Box>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px">Redoxica, Inc.</Text>
                  <Box
                    display="grid"
                    gridGap={['15px', 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(3,1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                      'repeat(1,1.5fr 1.5fr 1fr)',
                    ]}
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        catalog number
                      </Text>
                      <Text fontSize="12px">t515421541-ss</Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        configuration
                      </Text>
                      <Text fontSize="12px">
                        50mb, advanced kit, 210v, glass, silver
                      </Text>
                    </Box>
                    <Box>
                      <Text fontFamily={theme.fontFamily.bold} mb={0}>
                        price
                      </Text>
                      <Text fontSize="12px">$0.00</Text>
                    </Box>
                  </Box>
                </Box>
              </Dropdown>
            </Panel>

            <Box
              display="flex"
              alignItems="center"
              justifyContent={['center', 'center', 'flex-end']}
              mt={3}
            >
              <PaginationBtn href="/" tabIndex="-1" className="disabled">
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

export default RequestsQuoteRequests
