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
  AsideSettings,
  Panel,
  Image,
  Icon,
} from '../../ui'

import visa from '../../assets/images/cards/visa.svg'

const LinkBack = styled(Link)`
  font-family: ${theme.fontFamily.bold};
  color: ${theme.colors.primary};
  &:hover,
  &:focus {
    color: ${darken(0.2, theme.colors.primary)};
    text-decoration: none;
  }
`

const AccountManagePaymentMethods = () => {
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
                    Manage Payment Methods
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
                  <Text fontSize={['12px', '14px']}>Payment Methods</Text>
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
              mb={2}
            >
              <Text>
                <b>Manage Cards and POs</b>
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </Text>
            </Box>

            <Panel>
              <Box
                display="flex"
                alignItems={['normal', 'normal', 'normal', 'center', 'center']}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                css={css`
                  &:hover {
                    > * {
                      opacity: 1;
                    }
                  }
                `}
              >
                <Box
                  flex="1"
                  display="flex"
                  mb={[2, 2, 2, 0, 0]}
                  flexDirection={['column', 'column', 'row', 'row', 'row']}
                >
                  <Box
                    width="70px"
                    textAlign="center"
                    mr={2}
                    flexShrink="0"
                    mb={[1, 1, 0, 0, 0]}
                  >
                    <Image src={visa} alt="alt" width="100%" />
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

                <Box
                  flexShrink="0"
                  opacity={[1, 1, 1, 1, 0]}
                  ml={[0, 0, 0, 2, 2]}
                >
                  <Box
                    display="flex"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Button
                      variant="primary"
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Edit Account
                    </Button>
                    <Button
                      ml={[0, 0, 0, 0, 2]}
                      mt={[1, 1, 1, 1, 0]}
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Panel>
              <Box
                display="flex"
                alignItems={['normal', 'normal', 'normal', 'center', 'center']}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                css={css`
                  &:hover {
                    > * {
                      opacity: 1;
                    }
                  }
                `}
              >
                <Box
                  flex="1"
                  display="flex"
                  mb={[2, 2, 2, 0, 0]}
                  flexDirection={['column', 'column', 'row', 'row', 'row']}
                >
                  <Box
                    width="70px"
                    textAlign="center"
                    mr={2}
                    flexShrink="0"
                    mb={[1, 1, 0, 0, 0]}
                  >
                    <Image src={visa} alt="alt" width="100%" />
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

                <Box
                  flexShrink="0"
                  opacity={[1, 1, 1, 1, 0]}
                  ml={[0, 0, 0, 2, 2]}
                >
                  <Box
                    display="flex"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Button
                      variant="primary"
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Edit Account
                    </Button>
                    <Button
                      ml={[0, 0, 0, 0, 2]}
                      mt={[1, 1, 1, 1, 0]}
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Panel>
              <Box
                display="flex"
                alignItems={['normal', 'normal', 'normal', 'center', 'center']}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                css={css`
                  &:hover {
                    > * {
                      opacity: 1;
                    }
                  }
                `}
              >
                <Box
                  flex="1"
                  display="flex"
                  mb={[2, 2, 2, 0, 0]}
                  flexDirection={['column', 'column', 'row', 'row', 'row']}
                >
                  <Box
                    width="70px"
                    textAlign="center"
                    mr={2}
                    flexShrink="0"
                    mb={[1, 1, 0, 0, 0]}
                  >
                    <Image src={visa} alt="alt" width="100%" />
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

                <Box
                  flexShrink="0"
                  opacity={[1, 1, 1, 1, 0]}
                  ml={[0, 0, 0, 2, 2]}
                >
                  <Box
                    display="flex"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Button
                      variant="primary"
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Edit Account
                    </Button>
                    <Button
                      ml={[0, 0, 0, 0, 2]}
                      mt={[1, 1, 1, 1, 0]}
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Panel>
              <Box
                display="flex"
                alignItems={['normal', 'normal', 'normal', 'center', 'center']}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                css={css`
                  &:hover {
                    > * {
                      opacity: 1;
                    }
                  }
                `}
              >
                <Box
                  flex="1"
                  display="flex"
                  mb={[2, 2, 2, 0, 0]}
                  flexDirection={['column', 'column', 'row', 'row', 'row']}
                >
                  <Box
                    width="70px"
                    textAlign="center"
                    mr={2}
                    flexShrink="0"
                    mb={[1, 1, 0, 0, 0]}
                  >
                    <Image src={visa} alt="alt" width="100%" />
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

                <Box
                  flexShrink="0"
                  opacity={[1, 1, 1, 1, 0]}
                  ml={[0, 0, 0, 2, 2]}
                >
                  <Box
                    display="flex"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Button
                      variant="primary"
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Edit Account
                    </Button>
                    <Button
                      ml={[0, 0, 0, 0, 2]}
                      mt={[1, 1, 1, 1, 0]}
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Panel>
              <Box
                display="flex"
                alignItems={['normal', 'normal', 'normal', 'center', 'center']}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                css={css`
                  &:hover {
                    > * {
                      opacity: 1;
                    }
                  }
                `}
              >
                <Box
                  flex="1"
                  display="flex"
                  mb={[2, 2, 2, 0, 0]}
                  flexDirection={['column', 'column', 'row', 'row', 'row']}
                >
                  <Box
                    width="70px"
                    textAlign="center"
                    mr={2}
                    flexShrink="0"
                    mb={[1, 1, 0, 0, 0]}
                  >
                    <Image src={visa} alt="alt" width="100%" />
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

                <Box
                  flexShrink="0"
                  opacity={[1, 1, 1, 1, 0]}
                  ml={[0, 0, 0, 2, 2]}
                >
                  <Box
                    display="flex"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Button
                      variant="primary"
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Edit Account
                    </Button>
                    <Button
                      ml={[0, 0, 0, 0, 2]}
                      mt={[1, 1, 1, 1, 0]}
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Panel>
              <Box
                display="flex"
                alignItems={['normal', 'normal', 'normal', 'center', 'center']}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                css={css`
                  &:hover {
                    > * {
                      opacity: 1;
                    }
                  }
                `}
              >
                <Box
                  flex="1"
                  display="flex"
                  mb={[2, 2, 2, 0, 0]}
                  flexDirection={['column', 'column', 'row', 'row', 'row']}
                >
                  <Box
                    width="70px"
                    textAlign="center"
                    mr={2}
                    flexShrink="0"
                    mb={[1, 1, 0, 0, 0]}
                  >
                    <Image src={visa} alt="alt" width="100%" />
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

                <Box
                  flexShrink="0"
                  opacity={[1, 1, 1, 1, 0]}
                  ml={[0, 0, 0, 2, 2]}
                >
                  <Box
                    display="flex"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Button
                      variant="primary"
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Edit Account
                    </Button>
                    <Button
                      ml={[0, 0, 0, 0, 2]}
                      mt={[1, 1, 1, 1, 0]}
                      width={['100%', '100%', 'auto', 'auto', 'auto']}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Panel>
          </Box>
        </Box>
      </main>

      <Footer />
    </Fragment>
  )
}

export default AccountManagePaymentMethods
