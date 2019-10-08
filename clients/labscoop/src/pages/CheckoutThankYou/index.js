import { Fragment } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import theme from '../../lib/theme'
import { Box, Container } from '../../helpers'
import { Header, Footer, Button, Title, Text, Image, Icon } from '../../ui'

import imgShip from '../../assets/images/elements/ship.svg'
import imgBabyDino from '../../assets/images/elements/BabyDino.svg'

const CheckoutThankYou = () => {
  return (
    <Fragment>
      <Header />

      <main className="content">
        <Box
          pt={['90px', '120px']}
          pb={['70px', '100px', '45px']}
          textAlign="center"
          borderBottomWidth="1px"
          borderBottomStyle="solid"
          borderBottomColor="silver"
          overflow="hidden"
          position="relative"
        >
          <Image
            src={imgBabyDino}
            alt="hero image"
            css={css`
              position: absolute;
              left: 50%;
              top: -45px;
              width: 100px;
              transform: translateX(-50%);
            `}
          />
          <Container>
            <Title
              tag={1}
              css={css`
                font-family: ${theme.fontFamily.base};
              `}
            >
              <b>Thank you!</b> Your order has been placed and is being
              precessed.
            </Title>
            <Text fontSize="16px" fontFamily={theme.fontFamily.light}>
              An order confirmation email has been sent to john.doe@john.com and
              all other tagged members.
            </Text>
            <Text
              fontSize="16px"
              fontFamily={theme.fontFamily.light}
              mb={[2, 4]}
            >
              Order Number: <b>LSR-142324-24242</b>
            </Text>
            <Button variant="primary" btnMd>
              Review Order Details
            </Button>
          </Container>
        </Box>

        <Box
          py={[4, '70px']}
          borderBottomWidth="1px"
          borderBottomStyle="solid"
          borderBottomColor="silver"
        >
          <Container>
            <Box
              display="grid"
              gridGap="25px"
              gridTemplateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(1,280px 1fr)',
              ]}
            >
              <Box>
                <Text
                  fontSize={['16px', '18px', '20px', '22px']}
                  fontFamily={theme.fontFamily.light}
                >
                  Shipment 1
                </Text>

                <Text mb="10px">
                  <Image
                    src={imgShip}
                    alt="imgShip"
                    css={css`
                      margin-right: 5px;
                      width: 38px;
                    `}
                  />
                  Ships from <b>Labscoop</b>
                </Text>
                <Text
                  display="flex"
                  alignItems="center"
                  fontSize="12px"
                  color="success"
                  fontFamily={theme.fontFamily.bold}
                  mb={2}
                >
                  <Icon
                    color={theme.colors.success}
                    icon="check-circle"
                    mr="5px"
                  />
                  Estimated Delivery - 04/25/2015
                </Text>

                <Text uppercase mb={1}>
                  <b>ships from</b>
                  <br />
                  little rock, ar
                </Text>

                <Text uppercase>
                  <b>ships to</b>
                  <br />
                  detriot, mi
                </Text>
              </Box>

              <Box>
                <Box mb={2}>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px" display="flex" alignItems="center">
                    Redoxica, Inc. <Icon icon="badge-logo" ml="10px" />
                  </Text>
                  <Box
                    display="grid"
                    gridGap={['15px', '25px', '15px', '40px', '80px']}
                    gridTemplateColumns={[
                      'repeat(1, 1fr)',
                      'repeat(2, 1fr)',
                      'repeat(1, 1fr)',
                      'repeat(3, 1fr)',
                      'repeat(3, 1fr)',
                    ]}
                  >
                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        t515421541-ss
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        quantity
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        1,200
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box mb={2}>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px" display="flex" alignItems="center">
                    Redoxica, Inc. <Icon icon="badge-logo" ml="10px" />
                  </Text>
                  <Box
                    display="grid"
                    gridGap={['15px', '25px', '15px', '40px', '80px']}
                    gridTemplateColumns={[
                      'repeat(1, 1fr)',
                      'repeat(2, 1fr)',
                      'repeat(1, 1fr)',
                      'repeat(3, 1fr)',
                      'repeat(3, 1fr)',
                    ]}
                  >
                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        t515421541-ss
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        quantity
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        1,200
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box mb={2}>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px" display="flex" alignItems="center">
                    Redoxica, Inc. <Icon icon="badge-logo" ml="10px" />
                  </Text>
                  <Box
                    display="grid"
                    gridGap={['15px', '25px', '15px', '40px', '80px']}
                    gridTemplateColumns={[
                      'repeat(1, 1fr)',
                      'repeat(2, 1fr)',
                      'repeat(1, 1fr)',
                      'repeat(3, 1fr)',
                      'repeat(3, 1fr)',
                    ]}
                  >
                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        t515421541-ss
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        quantity
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        1,200
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box py={[4, '70px']}>
          <Container>
            <Box
              display="grid"
              gridGap="25px"
              gridTemplateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(1,280px 1fr)',
              ]}
            >
              <Box>
                <Text
                  fontSize={['16px', '18px', '20px', '22px']}
                  fontFamily={theme.fontFamily.light}
                >
                  Shipment 2
                </Text>

                <Text mb="10px">
                  <Image
                    src={imgShip}
                    alt="imgShip"
                    css={css`
                      margin-right: 5px;
                      width: 38px;
                    `}
                  />
                  Ships from <b>Labscoop</b>
                </Text>
                <Text
                  display="flex"
                  alignItems="center"
                  fontSize="12px"
                  color="success"
                  fontFamily={theme.fontFamily.bold}
                  mb={2}
                >
                  <Icon
                    color={theme.colors.success}
                    icon="check-circle"
                    mr="5px"
                  />
                  Estimated Delivery - 04/25/2015
                </Text>

                <Text uppercase mb={1}>
                  <b>ships from</b>
                  <br />
                  little rock, ar
                </Text>

                <Text uppercase>
                  <b>ships to</b>
                  <br />
                  detriot, mi
                </Text>
              </Box>

              <Box>
                <Box mb={2}>
                  <Text
                    fontFamily={theme.fontFamily.bold}
                    mb={0}
                    color="primary"
                  >
                    Thioredixin Reductase (Rat Recombinant)
                  </Text>
                  <Text fontSize="13px" display="flex" alignItems="center">
                    Redoxica, Inc. <Icon icon="badge-logo" ml="10px" />
                  </Text>
                  <Box
                    display="grid"
                    gridGap={['15px', '25px', '15px', '40px', '80px']}
                    gridTemplateColumns={[
                      'repeat(1, 1fr)',
                      'repeat(2, 1fr)',
                      'repeat(1, 1fr)',
                      'repeat(3, 1fr)',
                      'repeat(3, 1fr)',
                    ]}
                  >
                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        t515421541-ss
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                        uppercase
                      >
                        quantity
                      </Text>
                      <Text fontSize="12px" truncate uppercase>
                        1,200
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </Fragment>
  )
}

export default CheckoutThankYou
