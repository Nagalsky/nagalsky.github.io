import { Fragment } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import RSC from 'react-scrollbars-custom'
import Select from 'react-select'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import Rating from 'react-rating'

import theme from '../../lib/theme'
import { Box } from '../../helpers'

import {
  HeaderCms,
  FooterCms,
  Text,
  Icon,
  Title,
  Anchor,
  Divider,
  Panel,
  Button,
  Image,
  Status,
  Popovers,
  TrayPopup,
  Field,
  Progress,
  Checkbox,
  Indicator,
} from '../../ui'

import productImage from '../../assets/images/temp/search-result-product.jpg'
import imgShip from '../../assets/images/elements/ship.svg'
import visa from '../../assets/images/cards/visa.svg'
import ae from '../../assets/images/cards/ae.svg'
import discover from '../../assets/images/cards/discover.svg'
import mc from '../../assets/images/cards/mc.svg'

const StyledProductImage = styled(Image)`
  width: 100%;
  max-width: 148px;
  border: 1px solid ${theme.colors.muted};
  flex-shrink: 0;
  border: 1px solid ${theme.colors.muted};
`

const StyledOrderTag = styled(Box)`
  &:not(:last-of-type) {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${theme.colors.muted};
  }
`

const StyledOrderTagButton = styled.button`
  color: ${theme.colors.primary};
  font-family: ${theme.fontFamily.bold};
  border: none;
  background: transparent;
  padding: 0;
`

const StyledTab = styled(Tab)`
  border: none;
  background-color: transparent;
  padding: 10px 25px;
  color: ${theme.colors.black};
  margin-bottom: -1px;
  @media (max-width: 600px) {
    padding: 8px 7.5px;
  }
  &[aria-selected='true'] {
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily.bold};
    background-color: #f7f7f7;
    border: 1px solid #e6e6e6;
    border-bottom-color: #f7f7f7;
  }
`

const dataOrderTags = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
]

const LamsOrderDetails = () => {
  return (
    <Fragment>
      <HeaderCms />

      <main className="content">
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <Box flex="1" mb={[2, 2, 2, 0]} py={2} px={[1, 1, 1, 5]}>
            <Box
              display="flex"
              flexDirection={['column', 'column', 'column', 'column', 'row']}
              mb={2}
            >
              <Box flex="1" mb={[1, 1, 1, 1, 0]}>
                <Text
                  mb={0}
                  fontSize="12px"
                  css={css`
                    text-transform: uppercase;
                  `}
                >
                  order details
                </Text>
                <Title tag={1}>
                  Order Number <Anchor href="/">LSR-483832</Anchor>-ASO
                </Title>
              </Box>

              <Box
                flexShrink="0"
                ml={[0, 0, 0, 0, 2]}
                display="grid"
                gridGap={['15px', '25px']}
                gridTemplateColumns={['repeat(1,1fr)', 'repeat(3,auto)']}
                alignItems="flex-start"
              >
                <Box display="flex" alignItems="center">
                  <Indicator mr="5px" bg="success" />
                  <Text fontFamily={theme.fontFamily.bold} uppercase>
                    op: precessing
                  </Text>
                </Box>

                <Box display="flex" alignItems="center">
                  <Indicator mr="5px" bg="danger" />
                  <Text fontFamily={theme.fontFamily.bold} uppercase>
                    ap: paid
                  </Text>
                </Box>

                <Box display="flex" alignItems="center">
                  <Indicator mr="5px" bg="warning" />
                  <Indicator mr="5px" />
                  <Text fontFamily={theme.fontFamily.bold} uppercase>
                    ar: past due
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box display="flex" flexWrap="wrap">
              <Button mr={1} mb={1}>
                PO Submission
              </Button>
              <Button mr={1} mb={1}>
                Send Tracking
              </Button>
              <Button mr={1} mb={1}>
                Calculate Order
              </Button>
              <Button mr={1} mb={1}>
                Generate Invoice
              </Button>
              <Button mr={1} mb={1}>
                Supplier AP
              </Button>
              <Button mr={1} mb={1}>
                Customer AR
              </Button>
              <Button mr={1} mb={1}>
                Preccess Refund
              </Button>
              <Button mr={1} mb={1}>
                Order Notes
              </Button>
            </Box>

            <Box
              mb={1}
              p="1rem"
              bg="#f6f6f6"
              display="flex"
              flexDirection="column"
              css={css`
                @media (min-width: 1600px) {
                  flex-direction: row !important;
                }
              `}
            >
              <Box
                mr={[0, 0, 0, 0, 2]}
                mb={1}
                flex="1"
                display="grid"
                gridGap={[1, 1, 3]}
                gridTemplateColumns={[
                  'repeat(1,auto)',
                  'repeat(3,auto)',
                  'repeat(3,auto)',
                  'repeat(4,auto)',
                ]}
                css={css`
                  @media (min-width: 1400px) {
                    grid-template-columns: repeat(7, auto) !important;
                  }
                  @media (min-width: 1600px) {
                    margin-bottom: 0 !important;
                  }
                `}
              >
                <Box>
                  <Text mb={0}>Order Placed</Text>
                  <Text>
                    <b>August 14, 2015</b>
                  </Text>
                </Box>

                <Box>
                  <Text mb={0}>Order Total</Text>
                  <Text>
                    <b>$150.00</b>
                  </Text>
                </Box>

                <Box>
                  <Text mb={0}>PO#</Text>
                  <Text>
                    <b>5587PO02145</b>
                  </Text>
                </Box>

                <Box>
                  <Text mb={0}>Ship To</Text>
                  <Text>
                    <b>Kundan Das</b>
                  </Text>
                </Box>

                <Box>
                  <Text mb={0}>Order By</Text>
                  <Text>
                    <b>Kathy Smith</b>
                  </Text>
                </Box>

                <Box>
                  <Text mb={0}>Items</Text>
                  <Text>
                    <b>10</b>
                  </Text>
                </Box>

                <Box>
                  <Text mb={0}>Lab Group</Text>
                  <Text>
                    <b>Timberland Lab</b>
                  </Text>
                </Box>
              </Box>

              <Box flexShrink="0" width="175px">
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
                  placeholder="Actions"
                  css={css`
                    .select__control {
                      background-color: transparent;
                    }
                  `}
                />
              </Box>
            </Box>
            <Panel mb={4}>
              <Box mx="-1rem" mt="-1rem" mb={1} p="1rem" bg="#f6f6f6">
                <Box mb={2} display="flex" alignItems="center">
                  <Text fontSize="18px" mb={0} flex="1" mr={1}>
                    Shipement 1
                  </Text>
                  <Box flexShrink={0}>
                    <Button>Edit</Button>
                  </Box>
                </Box>

                <Box
                  display="grid"
                  gridGap={['15px', '15px', '25px']}
                  gridTemplateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(2, 1fr)',
                    'repeat(2, auto)',
                  ]}
                  css={css`@media (min-width: 1650px) {
                    grid-template-columns: repeat(4,auto);!important;
                  }`}
                >
                  <Box>
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      delivery option
                    </Text>
                    <Text fontSize="16px" mb={0}>
                      2 Day Shipping - $60.00
                    </Text>
                    <Text fontSize="10px">Allow Partial Shipement</Text>
                  </Box>

                  <Box>
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                      uppercase
                    >
                      preferred courier
                    </Text>
                    <Text fontSize="16px" mb={0}>
                      FedEx
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                      uppercase
                    >
                      courier account number
                    </Text>
                    <Text fontSize="16px" mb={0}>
                      15615415
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                      uppercase
                    >
                      supplier / account number
                    </Text>
                    <Text fontSize="16px" mb={0}>
                      Spectrum Chemical Manufacturign Company - 15615165481
                    </Text>
                    <Text
                      fontSize="10px"
                      color="danger"
                      fontFamily={theme.fontFamily.bold}
                    >
                      Account Number Required
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box mb={[1, 2]}>
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
                    gridGap={2}
                    mb={[1, 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(2,1fr)',
                    ]}
                    css={css`
                      @media (min-width: 1650px) {
                        grid-template-columns: repeat(
                          1,
                          1fr 1fr 1fr 3fr
                        ) !important;
                      }
                    `}
                  >
                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate>
                        t515421541-ss
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box mr={1}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            price
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            item total
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                      </Box>
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

                    <Box>
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        css={css`
                          text-transform: uppercase;
                        `}
                      >
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            qty
                          </Text>
                          <Text fontSize="12px" truncate>
                            30
                          </Text>
                        </Box>
                        <Box ml={2}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            quote #
                          </Text>
                          <Text fontSize="12px" truncate>
                            lq6969699-001
                          </Text>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection={['row', 'row']}
                        flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
                        alignItems="flex-start"
                      >
                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Write a Review"
                            headerBackBtnTitle="Back to product"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Write a Review
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Submit Review
                                </Button>
                              </Box>

                              <Text fontSize="12px" mb="10px" uppercase>
                                rate this product
                              </Text>

                              <Box mb={2}>
                                <Rating
                                  initialRating={2.5}
                                  emptySymbol={
                                    <Icon
                                      icon="star-empty"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                  fullSymbol={
                                    <Icon
                                      icon="star-full"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                />
                              </Box>

                              <Field
                                type="text"
                                title="REVIEW TITLE"
                                id="field-review-review-title"
                              />
                              <Field
                                type="text"
                                title="REVIEW"
                                id="field-review-review"
                              />
                              <Field
                                type="text"
                                title="HOW WAS THIS PRODUCT USED"
                                id="field-review-product-used"
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
                                  placeholder="SELECT PRODUCT CONFIGURATION"
                                />
                              </Box>
                              <Checkbox
                                title="Get email notifications on comments made about this review."
                                id="checkbox-review-1"
                              />
                            </Box>
                          </TrayPopup>
                        </Box>

                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Track Package"
                            headerBackBtnTitle="Back to order"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Order Tracking
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Done
                                </Button>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </TrayPopup>
                        </Box>
                        <Status variant="danger" title="Cancelled" mb="10px" />
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection={['column', 'row']}>
                    <StyledProductImage
                      src={productImage}
                      alt="image"
                      mr={[0, 1]}
                      mb={[1, 0]}
                    />
                    <Box>
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
                      <Box display="flex" alignItems="center">
                        <Icon
                          color={theme.colors.success}
                          icon="check-circle"
                          mr="5px"
                        />

                        <Popovers
                          position="bottom"
                          content="Base on availability provided by the supplier."
                        >
                          <Text
                            fontSize="12px"
                            color="success"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Estimated Delivery - 04/25/2015
                          </Text>
                        </Popovers>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box mb={[1, 2]}>
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
                    gridGap={2}
                    mb={[1, 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(2,1fr)',
                    ]}
                    css={css`
                      @media (min-width: 1650px) {
                        grid-template-columns: repeat(
                          1,
                          1fr 1fr 1fr 3fr
                        ) !important;
                      }
                    `}
                  >
                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate>
                        t515421541-ss
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box mr={1}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            price
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            item total
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                      </Box>
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

                    <Box>
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        css={css`
                          text-transform: uppercase;
                        `}
                      >
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            qty
                          </Text>
                          <Text fontSize="12px" truncate>
                            30
                          </Text>
                        </Box>
                        <Box ml={2}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            quote #
                          </Text>
                          <Text fontSize="12px" truncate>
                            lq6969699-001
                          </Text>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection={['row', 'row']}
                        flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
                        alignItems="flex-start"
                      >
                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Write a Review"
                            headerBackBtnTitle="Back to product"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Write a Review
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Submit Review
                                </Button>
                              </Box>

                              <Text fontSize="12px" mb="10px" uppercase>
                                rate this product
                              </Text>

                              <Box mb={2}>
                                <Rating
                                  initialRating={2.5}
                                  emptySymbol={
                                    <Icon
                                      icon="star-empty"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                  fullSymbol={
                                    <Icon
                                      icon="star-full"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                />
                              </Box>

                              <Field
                                type="text"
                                title="REVIEW TITLE"
                                id="field-review-review-title"
                              />
                              <Field
                                type="text"
                                title="REVIEW"
                                id="field-review-review"
                              />
                              <Field
                                type="text"
                                title="HOW WAS THIS PRODUCT USED"
                                id="field-review-product-used"
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
                                  placeholder="SELECT PRODUCT CONFIGURATION"
                                />
                              </Box>
                              <Checkbox
                                title="Get email notifications on comments made about this review."
                                id="checkbox-review-1"
                              />
                            </Box>
                          </TrayPopup>
                        </Box>

                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Track Package"
                            headerBackBtnTitle="Back to order"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Order Tracking
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Done
                                </Button>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </TrayPopup>
                        </Box>
                        <Status
                          variant="warning"
                          title="Precessing"
                          mb="10px"
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection={['column', 'row']}>
                    <StyledProductImage
                      src={productImage}
                      alt="image"
                      mr={[0, 1]}
                      mb={[1, 0]}
                    />
                    <Box>
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
                      <Box display="flex" alignItems="center">
                        <Icon
                          color={theme.colors.success}
                          icon="check-circle"
                          mr="5px"
                        />

                        <Popovers
                          position="bottom"
                          content="Base on availability provided by the supplier."
                        >
                          <Text
                            fontSize="12px"
                            color="success"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Estimated Delivery - 04/25/2015
                          </Text>
                        </Popovers>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box mb={[1, 2]}>
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
                    gridGap={2}
                    mb={[1, 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(2,1fr)',
                    ]}
                    css={css`
                      @media (min-width: 1650px) {
                        grid-template-columns: repeat(
                          1,
                          1fr 1fr 1fr 3fr
                        ) !important;
                      }
                    `}
                  >
                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate>
                        t515421541-ss
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box mr={1}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            price
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            item total
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                      </Box>
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

                    <Box>
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        css={css`
                          text-transform: uppercase;
                        `}
                      >
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            qty
                          </Text>
                          <Text fontSize="12px" truncate>
                            30
                          </Text>
                        </Box>
                        <Box ml={2}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            quote #
                          </Text>
                          <Text fontSize="12px" truncate>
                            lq6969699-001
                          </Text>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection={['row', 'row']}
                        flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
                        alignItems="flex-start"
                      >
                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Write a Review"
                            headerBackBtnTitle="Back to product"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Write a Review
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Submit Review
                                </Button>
                              </Box>

                              <Text fontSize="12px" mb="10px" uppercase>
                                rate this product
                              </Text>

                              <Box mb={2}>
                                <Rating
                                  initialRating={2.5}
                                  emptySymbol={
                                    <Icon
                                      icon="star-empty"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                  fullSymbol={
                                    <Icon
                                      icon="star-full"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                />
                              </Box>

                              <Field
                                type="text"
                                title="REVIEW TITLE"
                                id="field-review-review-title"
                              />
                              <Field
                                type="text"
                                title="REVIEW"
                                id="field-review-review"
                              />
                              <Field
                                type="text"
                                title="HOW WAS THIS PRODUCT USED"
                                id="field-review-product-used"
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
                                  placeholder="SELECT PRODUCT CONFIGURATION"
                                />
                              </Box>
                              <Checkbox
                                title="Get email notifications on comments made about this review."
                                id="checkbox-review-1"
                              />
                            </Box>
                          </TrayPopup>
                        </Box>

                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Track Package"
                            headerBackBtnTitle="Back to order"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Order Tracking
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Done
                                </Button>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </TrayPopup>
                        </Box>
                        <Status variant="danger" title="Cancelled" mb="10px" />
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection={['column', 'row']}>
                    <StyledProductImage
                      src={productImage}
                      alt="image"
                      mr={[0, 1]}
                      mb={[1, 0]}
                    />
                    <Box>
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
                      <Box display="flex" alignItems="center">
                        <Icon
                          color={theme.colors.success}
                          icon="check-circle"
                          mr="5px"
                        />

                        <Popovers
                          position="bottom"
                          content="Base on availability provided by the supplier."
                        >
                          <Text
                            fontSize="12px"
                            color="success"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Estimated Delivery - 04/25/2015
                          </Text>
                        </Popovers>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Panel mb={4}>
              <Box mx="-1rem" mt="-1rem" mb={1} p="1rem" bg="#f6f6f6">
                <Box mb={2} display="flex" alignItems="center">
                  <Text fontSize="18px" mb={0} flex="1" mr={1}>
                    Shipement 1
                  </Text>
                  <Box flexShrink={0}>
                    <Button>Edit</Button>
                  </Box>
                </Box>

                <Box
                  display="grid"
                  gridGap={['15px', '15px', '25px']}
                  gridTemplateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(2, 1fr)',
                    'repeat(2, auto)',
                  ]}
                  css={css`@media (min-width: 1650px) {
                    grid-template-columns: repeat(4,auto);!important;
                  }`}
                >
                  <Box>
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      delivery option
                    </Text>
                    <Text fontSize="16px" mb={0}>
                      2 Day Shipping - $60.00
                    </Text>
                    <Text fontSize="10px">Allow Partial Shipement</Text>
                  </Box>

                  <Box>
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                      uppercase
                    >
                      preferred courier
                    </Text>
                    <Text fontSize="16px" mb={0}>
                      FedEx
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                      uppercase
                    >
                      courier account number
                    </Text>
                    <Text fontSize="16px" mb={0}>
                      15615415
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                      uppercase
                    >
                      supplier / account number
                    </Text>
                    <Text fontSize="16px" mb={0}>
                      Spectrum Chemical Manufacturign Company - 15615165481
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box mb={[1, 2]}>
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
                    gridGap={2}
                    mb={[1, 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(2,1fr)',
                    ]}
                    css={css`
                      @media (min-width: 1650px) {
                        grid-template-columns: repeat(
                          1,
                          1fr 1fr 1fr 3fr
                        ) !important;
                      }
                    `}
                  >
                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate>
                        t515421541-ss
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box mr={1}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            price
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            item total
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                      </Box>
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

                    <Box>
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        css={css`
                          text-transform: uppercase;
                        `}
                      >
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            qty
                          </Text>
                          <Text fontSize="12px" truncate>
                            30
                          </Text>
                        </Box>
                        <Box ml={2}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            quote #
                          </Text>
                          <Text fontSize="12px" truncate>
                            lq6969699-001
                          </Text>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection={['row', 'row']}
                        flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
                        alignItems="flex-start"
                      >
                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Write a Review"
                            headerBackBtnTitle="Back to product"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Write a Review
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Submit Review
                                </Button>
                              </Box>

                              <Text fontSize="12px" mb="10px" uppercase>
                                rate this product
                              </Text>

                              <Box mb={2}>
                                <Rating
                                  initialRating={2.5}
                                  emptySymbol={
                                    <Icon
                                      icon="star-empty"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                  fullSymbol={
                                    <Icon
                                      icon="star-full"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                />
                              </Box>

                              <Field
                                type="text"
                                title="REVIEW TITLE"
                                id="field-review-review-title"
                              />
                              <Field
                                type="text"
                                title="REVIEW"
                                id="field-review-review"
                              />
                              <Field
                                type="text"
                                title="HOW WAS THIS PRODUCT USED"
                                id="field-review-product-used"
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
                                  placeholder="SELECT PRODUCT CONFIGURATION"
                                />
                              </Box>
                              <Checkbox
                                title="Get email notifications on comments made about this review."
                                id="checkbox-review-1"
                              />
                            </Box>
                          </TrayPopup>
                        </Box>

                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Track Package"
                            headerBackBtnTitle="Back to order"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Order Tracking
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Done
                                </Button>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </TrayPopup>
                        </Box>
                        <Status
                          variant="attention"
                          title="Back Ordered"
                          mb="10px"
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection={['column', 'row']}>
                    <StyledProductImage
                      src={productImage}
                      alt="image"
                      mr={[0, 1]}
                      mb={[1, 0]}
                    />
                    <Box>
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
                      <Box display="flex" alignItems="center">
                        <Icon
                          color={theme.colors.success}
                          icon="check-circle"
                          mr="5px"
                        />

                        <Popovers
                          position="bottom"
                          content="Base on availability provided by the supplier."
                        >
                          <Text
                            fontSize="12px"
                            color="success"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Estimated Delivery - 04/25/2015
                          </Text>
                        </Popovers>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box mb={[1, 2]}>
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
                    gridGap={2}
                    mb={[1, 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(2,1fr)',
                    ]}
                    css={css`
                      @media (min-width: 1650px) {
                        grid-template-columns: repeat(
                          1,
                          1fr 1fr 1fr 3fr
                        ) !important;
                      }
                    `}
                  >
                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate>
                        t515421541-ss
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box mr={1}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            price
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            item total
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                      </Box>
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

                    <Box>
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        css={css`
                          text-transform: uppercase;
                        `}
                      >
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            qty
                          </Text>
                          <Text fontSize="12px" truncate>
                            30
                          </Text>
                        </Box>
                        <Box ml={2}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            quote #
                          </Text>
                          <Text fontSize="12px" truncate>
                            lq6969699-001
                          </Text>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection={['row', 'row']}
                        flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
                        alignItems="flex-start"
                      >
                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Write a Review"
                            headerBackBtnTitle="Back to product"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Write a Review
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Submit Review
                                </Button>
                              </Box>

                              <Text fontSize="12px" mb="10px" uppercase>
                                rate this product
                              </Text>

                              <Box mb={2}>
                                <Rating
                                  initialRating={2.5}
                                  emptySymbol={
                                    <Icon
                                      icon="star-empty"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                  fullSymbol={
                                    <Icon
                                      icon="star-full"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                />
                              </Box>

                              <Field
                                type="text"
                                title="REVIEW TITLE"
                                id="field-review-review-title"
                              />
                              <Field
                                type="text"
                                title="REVIEW"
                                id="field-review-review"
                              />
                              <Field
                                type="text"
                                title="HOW WAS THIS PRODUCT USED"
                                id="field-review-product-used"
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
                                  placeholder="SELECT PRODUCT CONFIGURATION"
                                />
                              </Box>
                              <Checkbox
                                title="Get email notifications on comments made about this review."
                                id="checkbox-review-1"
                              />
                            </Box>
                          </TrayPopup>
                        </Box>

                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Track Package"
                            headerBackBtnTitle="Back to order"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Order Tracking
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Done
                                </Button>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </TrayPopup>
                        </Box>
                        <Status
                          variant="warning"
                          title="Precessing"
                          mb="10px"
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection={['column', 'row']}>
                    <StyledProductImage
                      src={productImage}
                      alt="image"
                      mr={[0, 1]}
                      mb={[1, 0]}
                    />
                    <Box>
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
                      <Box display="flex" alignItems="center">
                        <Icon
                          color={theme.colors.success}
                          icon="check-circle"
                          mr="5px"
                        />

                        <Popovers
                          position="bottom"
                          content="Base on availability provided by the supplier."
                        >
                          <Text
                            fontSize="12px"
                            color="success"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Estimated Delivery - 04/25/2015
                          </Text>
                        </Popovers>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box mb={[1, 2]}>
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
                    gridGap={2}
                    mb={[1, 2]}
                    gridTemplateColumns={[
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(1,1fr)',
                      'repeat(2,1fr)',
                    ]}
                    css={css`
                      @media (min-width: 1650px) {
                        grid-template-columns: repeat(
                          1,
                          1fr 1fr 1fr 3fr
                        ) !important;
                      }
                    `}
                  >
                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        catalog number
                      </Text>
                      <Text fontSize="12px" truncate>
                        t515421541-ss
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text
                        fontFamily={theme.fontFamily.bold}
                        mb={0}
                        fontSize="12px"
                      >
                        unit size - configuration
                      </Text>
                      <Text fontSize="12px" truncate>
                        50mg, advanced kit, 120v, glass, silver
                      </Text>
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

                    <Box
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box mr={1}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            price
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                            truncate
                          >
                            item total
                          </Text>
                          <Text fontSize="12px" truncate>
                            $27,000.00
                          </Text>
                        </Box>
                      </Box>
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

                    <Box>
                      <Box
                        mb="16px"
                        display="flex"
                        alignItems="center"
                        css={css`
                          text-transform: uppercase;
                        `}
                      >
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            qty
                          </Text>
                          <Text fontSize="12px" truncate>
                            30
                          </Text>
                        </Box>
                        <Box ml={2}>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            quote #
                          </Text>
                          <Text fontSize="12px" truncate>
                            lq6969699-001
                          </Text>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection={['row', 'row']}
                        flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
                        alignItems="flex-start"
                      >
                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Write a Review"
                            headerBackBtnTitle="Back to product"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Write a Review
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Submit Review
                                </Button>
                              </Box>

                              <Text fontSize="12px" mb="10px" uppercase>
                                rate this product
                              </Text>

                              <Box mb={2}>
                                <Rating
                                  initialRating={2.5}
                                  emptySymbol={
                                    <Icon
                                      icon="star-empty"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                  fullSymbol={
                                    <Icon
                                      icon="star-full"
                                      color={theme.colors.primary}
                                      size="16px"
                                    />
                                  }
                                />
                              </Box>

                              <Field
                                type="text"
                                title="REVIEW TITLE"
                                id="field-review-review-title"
                              />
                              <Field
                                type="text"
                                title="REVIEW"
                                id="field-review-review"
                              />
                              <Field
                                type="text"
                                title="HOW WAS THIS PRODUCT USED"
                                id="field-review-product-used"
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
                                  placeholder="SELECT PRODUCT CONFIGURATION"
                                />
                              </Box>
                              <Checkbox
                                title="Get email notifications on comments made about this review."
                                id="checkbox-review-1"
                              />
                            </Box>
                          </TrayPopup>
                        </Box>

                        <Box mr={1} mb="10px">
                          <TrayPopup
                            inlineBlock
                            toggleTitle="Track Package"
                            headerBackBtnTitle="Back to order"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
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
                                  Order Tracking
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Done
                                </Button>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>

                              <Box py={1}>
                                <Text
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Shipment 1 -{' '}
                                  <Anchor href="/">UPS 1Z54546227</Anchor>
                                </Text>

                                <Box
                                  mx={[-1, -1, -2, -3, -5]}
                                  mb={2}
                                  display="flex"
                                  flexDirection={['column', 'row']}
                                >
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Placed & Precessing"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Confirmed"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="Shipped"
                                    date="May 24"
                                  />
                                  <Progress
                                    flexShrink="0"
                                    flex="1"
                                    title="In Transit"
                                    date="May 24"
                                  />
                                  <Progress
                                    active
                                    flexShrink="0"
                                    flex="1"
                                    title="Delivered"
                                    date="May 24"
                                  />
                                </Box>

                                <Box
                                  p={[1, 2]}
                                  bg="#f9f9f9"
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '20px',
                                    '40px',
                                    '70px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1,1fr)',
                                    'repeat(2,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                    'repeat(3,1fr)',
                                  ]}
                                  fontSize="12px"
                                >
                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      catalog number
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text mb={1} uppercase>
                                      T4517
                                    </Text>
                                    <Text uppercase>T4517</Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      product name
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text mb={1} uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                    <Text uppercase>
                                      tris hcl 10mm edta, 2 lt
                                    </Text>
                                  </Box>

                                  <Box>
                                    <Text
                                      mb={1}
                                      uppercase
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      quantity
                                    </Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text mb={1}>3</Text>
                                    <Text>3</Text>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </TrayPopup>
                        </Box>
                        <Status variant="danger" title="Cancelled" mb="10px" />
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" flexDirection={['column', 'row']}>
                    <StyledProductImage
                      src={productImage}
                      alt="image"
                      mr={[0, 1]}
                      mb={[1, 0]}
                    />
                    <Box>
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
                      <Box display="flex" alignItems="center">
                        <Icon
                          color={theme.colors.success}
                          icon="check-circle"
                          mr="5px"
                        />

                        <Popovers
                          position="bottom"
                          content="Base on availability provided by the supplier."
                        >
                          <Text
                            fontSize="12px"
                            color="success"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Estimated Delivery - 04/25/2015
                          </Text>
                        </Popovers>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Box
              mb={2}
              display="grid"
              gridGap={['15px', '15px', '30px', '30px']}
              gridTemplateColumns="repeat(1, 1fr)"
              css={css`
                @media (min-width: 1700px) {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              `}
            >
              <Panel bg="#f7f7f7" p={[1, 1, 1, 3]}>
                <Box
                  display="flex"
                  alignItems={['flex-start', 'center']}
                  flexDirection={['column', 'row']}
                  mb={1}
                >
                  <Title
                    tag={5}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                      flex: 1;
                      margin-bottom: 0;
                    `}
                  >
                    Shipping Address
                  </Title>

                  <Box flexShrink="0" ml={[0, 1]} mt={[1, 0]}>
                    <Box>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Edit"
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
                  </Box>
                </Box>

                <address
                  css={css`
                    margin-bottom: 0;
                  `}
                >
                  <b>Johnson & Johnson</b>
                  <br />
                  8441 Johnson Circle
                  <br />
                  BLDG A1; RM 842
                  <br />
                  Denver, Colorado 54187
                  <br />
                  United States of America
                  <br />
                  ATTN L Rachel Maddison
                  <br />
                  <br />
                  T: 2323-23232-2323
                  <br />
                  F: N/A
                  <br />
                  E: Johnson@Johnson.Johnson
                </address>
              </Panel>

              <Panel bg="#f7f7f7" p={[1, 1, 1, 3]}>
                <Box
                  display="flex"
                  alignItems={['flex-start', 'center']}
                  flexDirection={['column', 'row']}
                  mb={1}
                >
                  <Title
                    tag={5}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                      flex: 1;
                      margin-bottom: 0;
                    `}
                  >
                    Billing Address
                  </Title>

                  <Box flexShrink="0" ml={[0, 1]} mt={[1, 0]}>
                    <Box>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Edit"
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
                  </Box>
                </Box>

                <address
                  css={css`
                    margin-bottom: 0;
                  `}
                >
                  <b>Johnson & Johnson</b>
                  <br />
                  8441 Johnson Circle
                  <br />
                  BLDG A1; RM 842
                  <br />
                  Denver, Colorado 54187
                  <br />
                  United States of America
                  <br />
                  ATTN L Rachel Maddison
                  <br />
                  <br />
                  T: 2323-23232-2323
                  <br />
                  F: N/A
                  <br />
                  E: Johnson@Johnson.Johnson
                </address>
              </Panel>
            </Box>

            <Box
              display="grid"
              gridGap={['15px', '15px', '30px', '30px']}
              gridTemplateColumns="repeat(1, 1fr)"
              css={css`
                @media (min-width: 1700px) {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              `}
            >
              <Box>
                <Title
                  tag={5}
                  css={css`
                    font-family: ${theme.fontFamily.base};
                  `}
                >
                  Peyment Methods
                </Title>

                <Panel>
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Box
                      flex="1"
                      display="flex"
                      mb={[2, 2, 2, 2, 0]}
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

                    <Box flexShrink="0" ml={[0, 0, 0, 0, 2]}>
                      <Icon
                        icon="check-circle"
                        size="20px"
                        mr={1}
                        color="#c5c5c5"
                      />
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Change"
                        headerBackBtnTitle="Back to order details"
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
                              Choose a Payment Method
                            </Text>

                            <Button variant="primary" btnBlock>
                              Update Payment Method
                            </Button>
                          </Box>

                          <Box
                            display="grid"
                            gridGap={['15px', '15px', '15px', '15px', '60px']}
                            alignItems="flex-start"
                            gridTemplateColumns={[
                              'repeat(1, 1fr)',
                              'repeat(1,1fr)',
                              'repeat(1,2fr 1fr)',
                              'repeat(1,2fr 1fr)',
                              'repeat(1,2.5fr 1fr)',
                            ]}
                          >
                            <Box>
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
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Image src={visa} alt="alt" width="100%" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
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
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Image src={ae} alt="alt" width="100%" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
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
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Image
                                      src={discover}
                                      alt="alt"
                                      width="100%"
                                    />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
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
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Image src={mc} alt="alt" width="100%" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
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
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Icon icon="file-invoice" size="42px" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
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
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Icon icon="file-invoice" size="42px" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
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

                            <Box
                              display="grid"
                              gridGap="15px"
                              gridTemplateColumns="repeat(1, 1fr)"
                            >
                              <Button btnBlock>Add a Card</Button>
                              <Button btnBlock>Add Bank Account</Button>
                              <Button btnBlock>Add a PO</Button>
                              <Button btnBlock>Single Use PO</Button>
                            </Box>
                          </Box>
                        </Box>
                      </TrayPopup>
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
                      'normal',
                      'center',
                    ]}
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Box
                      flex="1"
                      display="flex"
                      mb={[2, 2, 2, 2, 0]}
                      flexDirection={['column', 'column', 'row', 'row', 'row']}
                    >
                      <Box
                        width="70px"
                        textAlign="center"
                        mr={2}
                        flexShrink="0"
                        mb={[1, 1, 0, 0, 0]}
                      >
                        <Icon size="40px" icon="file-invoice" />
                      </Box>
                      <Box mr={[2, 2, 2, 5, 5]} mb={[1, 1, 0, 0, 0]}>
                        <Anchor href="/" bold>
                          PO - EID 15647841
                        </Anchor>
                        <Text fontSize="10px">
                          <b>Card Holder: Kundan Das</b>
                        </Text>
                      </Box>
                      <Box>
                        <Text mb={0}>Expires 3/2017</Text>
                      </Box>
                    </Box>

                    <Box flexShrink="0" ml={[0, 0, 0, 0, 2]}>
                      <Icon
                        icon="check-circle"
                        size="20px"
                        mr={1}
                        color="#c5c5c5"
                      />

                      <Button>Change</Button>
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
                      'normal',
                      'center',
                    ]}
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Box
                      flex="1"
                      display="flex"
                      mb={[2, 2, 2, 2, 0]}
                      flexDirection={['column', 'column', 'row', 'row', 'row']}
                    >
                      <Box>
                        <Text mb={0}>Reference Number: AT-434335242</Text>
                        <Text fontSize="10px">
                          <b>
                            Note: This number will be noted on the shipping
                            label, packing list and invoice.
                          </b>
                        </Text>
                      </Box>
                    </Box>

                    <Box flexShrink="0" ml={[0, 0, 0, 0, 2]}>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Change"
                        headerBackBtnTitle="Back to checkout"
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
                              Change Reference Number
                            </Text>

                            <Button variant="primary" btnBlock>
                              Save Changes
                            </Button>
                          </Box>

                          <Field
                            type="text"
                            title="REFERENCE NUMBER"
                            id="field-reference-number"
                          />
                        </Box>
                      </TrayPopup>
                    </Box>
                  </Box>
                </Panel>
              </Box>

              <Box>
                <Title
                  tag={5}
                  css={css`
                    font-family: ${theme.fontFamily.base};
                  `}
                >
                  Promotions & Special Requests
                </Title>

                <Panel>
                  <Anchor
                    href="/"
                    css={css`
                      text-decoration: underline;
                    `}
                  >
                    2 Promotions Applied
                  </Anchor>{' '}
                  -{' '}
                  <Text display="inline-block" color="success">
                    Savings: $45.24
                  </Text>
                </Panel>

                <Text color="muted" mb="0" fontFamily={theme.fontFamily.bold}>
                  Special Instructions
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.{' '}
                </Text>
              </Box>
            </Box>

            <Divider my={2} />

            <Box>
              <Box
                mb={2}
                display="flex"
                alignItems={[
                  'flex-start',
                  'flex-start',
                  'flex-start',
                  'normal',
                  'center',
                ]}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
              >
                <Box
                  fontSize="16px"
                  mb={[1, 1, 1, 1, 0]}
                  display="flex"
                  alignItems="center"
                  flex="1"
                >
                  Order Tags
                  <Popovers
                    position="right"
                    content="Base on availability provided by the supplier."
                  >
                    <Icon size="16px" icon="question-circle" ml="10px" />
                  </Popovers>
                </Box>

                <TrayPopup
                  inlineBlock
                  toggleTitle="Tag Labmates & Administrators"
                  headerBackBtnTitle="Back to order"
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
                      <Box
                        fontSize={['20px', '22px']}
                        fontFamily={theme.fontFamily.bold}
                        mb="0"
                        display="flex"
                        alignItems="center"
                      >
                        Order Tags
                        <Popovers
                          position="right"
                          content="Base on availability provided by the supplier."
                        >
                          <Icon icon="question-circle" size="22px" ml={1} />
                        </Popovers>
                      </Box>

                      <Button variant="primary" btnBlock>
                        Done
                      </Button>
                    </Box>

                    <Box mb={2}>
                      <Tabs defaultTab="one">
                        <TabList>
                          <StyledTab tabFor="one">Lab Group Members</StyledTab>
                          <StyledTab tabFor="two">Tag by Email</StyledTab>
                        </TabList>

                        <Box
                          bg="#f7f7f7"
                          borderY="1px solid #e6e6e6"
                          py={2}
                          px={[1, 1, 2, 3, 5]}
                          mx={[-1, -1, -2, -3, -5]}
                        >
                          <TabPanel tabId="one">
                            <Box
                              display="flex"
                              alignItems={['normal', 'center']}
                              flexDirection={['column', 'row']}
                            >
                              <Select
                                css={css`
                                  flex: 1;
                                  > div {
                                    background-color: transparent;
                                  }
                                `}
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
                                isSearchable={true}
                                menuPlacement="auto"
                                className="select"
                                classNamePrefix="select"
                                placeholder="NAME OR EMAIL ADDRESS"
                              />
                              <Button
                                variant="secondary"
                                flexShrink="0"
                                ml={[0, 2]}
                                mt={[1, 0]}
                                px="15px"
                              >
                                Tag
                              </Button>
                            </Box>
                          </TabPanel>

                          <TabPanel tabId="two">
                            <Box
                              display="grid"
                              alignItems="center"
                              gridGap={['15px', '15px', '25px']}
                              gridTemplateColumns={[
                                'repeat(1,1fr)',
                                'repeat(1,1fr 1fr)',
                                'repeat(1,2fr 2fr auto)',
                              ]}
                            >
                              <Box
                                css={css`
                                  input {
                                    background-color: transparent;
                                  }
                                `}
                              >
                                <Field
                                  type="text"
                                  title="NAME"
                                  id="field-name"
                                  mb={0}
                                />
                              </Box>
                              <Box
                                css={css`
                                  input {
                                    background-color: transparent;
                                  }
                                `}
                              >
                                <Field
                                  type="email"
                                  title="EMAIL ADDRESS"
                                  id="field-email-address"
                                />
                              </Box>

                              <Box>
                                <Button variant="secondary" btnBlock>
                                  Tag
                                </Button>
                              </Box>
                            </Box>
                          </TabPanel>
                        </Box>
                      </Tabs>
                    </Box>

                    <Box>
                      <StyledOrderTag>
                        <Box
                          display="flex"
                          alignItems={['flex-start', 'center']}
                          flexDirection={['column', 'row']}
                          justifyContent="space-between"
                        >
                          <Box mb={[1, 0]}>
                            <Text mb={0} fontFamily={theme.fontFamily.bold}>
                              <b>John Doe -</b> LSA-48745
                            </Text>
                            <Text fontSize="13px">Redoxica, Inc.</Text>
                          </Box>
                          <Box flexShrink="0" ml={[0, 2]}>
                            <StyledOrderTagButton>
                              Untag Member
                            </StyledOrderTagButton>
                          </Box>
                        </Box>
                      </StyledOrderTag>

                      <StyledOrderTag>
                        <Box
                          display="flex"
                          alignItems={['flex-start', 'center']}
                          flexDirection={['column', 'row']}
                          justifyContent="space-between"
                        >
                          <Box mb={[1, 0]}>
                            <Text mb={0} fontFamily={theme.fontFamily.bold}>
                              <b>John Doe -</b> LSA-48745
                            </Text>
                            <Text fontSize="13px">Redoxica, Inc.</Text>
                          </Box>
                          <Box flexShrink="0" ml={[0, 2]}>
                            <StyledOrderTagButton>
                              Untag Member
                            </StyledOrderTagButton>
                          </Box>
                        </Box>
                      </StyledOrderTag>

                      <StyledOrderTag>
                        <Box
                          display="flex"
                          alignItems={['flex-start', 'center']}
                          flexDirection={['column', 'row']}
                          justifyContent="space-between"
                        >
                          <Box mb={[1, 0]}>
                            <Text mb={0} fontFamily={theme.fontFamily.bold}>
                              <b>John Doe -</b> LSA-48745
                            </Text>
                            <Text fontSize="13px">Redoxica, Inc.</Text>
                          </Box>
                          <Box flexShrink="0" ml={[0, 2]}>
                            <StyledOrderTagButton>
                              Untag Member
                            </StyledOrderTagButton>
                          </Box>
                        </Box>
                      </StyledOrderTag>

                      <StyledOrderTag>
                        <Box
                          display="flex"
                          alignItems={['flex-start', 'center']}
                          flexDirection={['column', 'row']}
                          justifyContent="space-between"
                        >
                          <Box mb={[1, 0]}>
                            <Text mb={0} fontFamily={theme.fontFamily.bold}>
                              <b>John Doe -</b> LSA-48745
                            </Text>
                            <Text fontSize="13px">Redoxica, Inc.</Text>
                          </Box>
                          <Box flexShrink="0" ml={[0, 2]}>
                            <StyledOrderTagButton>
                              Untag Member
                            </StyledOrderTagButton>
                          </Box>
                        </Box>
                      </StyledOrderTag>

                      <StyledOrderTag>
                        <Box
                          display="flex"
                          alignItems={['flex-start', 'center']}
                          flexDirection={['column', 'row']}
                          justifyContent="space-between"
                        >
                          <Box mb={[1, 0]}>
                            <Text mb={0} fontFamily={theme.fontFamily.bold}>
                              <b>John Doe -</b> LSA-48745
                            </Text>
                            <Text fontSize="13px">Redoxica, Inc.</Text>
                          </Box>
                          <Box flexShrink="0" ml={[0, 2]}>
                            <StyledOrderTagButton>
                              Untag Member
                            </StyledOrderTagButton>
                          </Box>
                        </Box>
                      </StyledOrderTag>
                    </Box>

                    <Text
                      fontSize={['18px', '20px', '22px']}
                      fontFamily={theme.fontFamily.bold}
                      textAlign="center"
                      px={2}
                      py={5}
                      color="#c6c3c3"
                    >
                      No Tagged Members
                    </Text>
                  </Box>
                </TrayPopup>
              </Box>

              <Box>
                <RSC id="RSC-Example" style={{ height: '260px' }}>
                  {dataOrderTags.map((orderTag, index) => (
                    <StyledOrderTag key={index} mr={2}>
                      <Box
                        display="flex"
                        alignItems={['flex-start', 'center']}
                        flexDirection={['column', 'row']}
                        justifyContent="space-between"
                      >
                        <Box mb={[1, 0]}>
                          <Text mb={0} fontFamily={theme.fontFamily.bold}>
                            {orderTag.name} - {orderTag.email}
                          </Text>
                          <Text fontSize="13px">{orderTag.from}</Text>
                        </Box>
                        <Box flexShrink="0" ml={[0, 2]}>
                          <StyledOrderTagButton>
                            Untag Member
                          </StyledOrderTagButton>
                        </Box>
                      </Box>
                    </StyledOrderTag>
                  ))}
                </RSC>
              </Box>
            </Box>
          </Box>

          <Box
            flexShrink={0}
            width={['100%', '100%', '100%', '420px']}
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
                gridGap="10px"
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
                        </small>20,408.00
                </Box>
              </Box>

              <Divider my={2} />

              <Title
                tag={2}
                css={css`
                  font-family: ${theme.fontFamily.base};
                `}
              >
                Supplier Order Summary
              </Title>

              <Box
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(1,1.5fr 1fr)"
                alignItems="center"
                fontSize="12px"
              >
                <Box fontFamily={theme.fontFamily.bold}>OT</Box>
                <Box textAlign="right">$100.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>COG</Box>
                <Box textAlign="right">$0.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>S&H IN</Box>
                <Box textAlign="right">$0.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>S&H OUT</Box>
                <Box textAlign="right">$0.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>GP</Box>
                <Box textAlign="right">$0.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>P</Box>
                <Box textAlign="right">$0.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>D/T</Box>
                <Box textAlign="right">$0.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>ACH/WT</Box>
                <Box textAlign="right">$0.00</Box>

                <Box fontFamily={theme.fontFamily.bold} fontSize="18px">
                  Supplier Order Total
                </Box>
                <Box
                  textAlign="right"
                  fontFamily={theme.fontFamily.bold}
                  fontSize="18px"
                >
                  $28,409.00
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>

      <FooterCms />
    </Fragment>
  )
}

export default LamsOrderDetails
