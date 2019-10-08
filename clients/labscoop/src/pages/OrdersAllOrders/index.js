import { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import { Link } from '@reach/router'
import Select from 'react-select'
import Rating from 'react-rating'

import { Box } from '../../helpers'
import {
  Header,
  Footer,
  Text,
  Title,
  Button,
  AsideOrdersAndRequests,
  Anchor,
  Panel,
  Status,
  PaginationBtn,
  Icon,
  TrayPopup,
  Progress,
  Field,
  Checkbox,
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

const products1 = [
  {
    headerData: [
      {
        orderPlaced: 'August 14, 2015',
        orderTotal: '$150.00',
        po: '5587PO02145',
        shipTo: 'Kundan Das',
        orderBy: 'Kathy Smith',
        items: '10',
        labGroup: 'Timberland Lab',
        viewInvoiceLinkPath: '#',
        orderNumber: 'LSR-6540',
      },
    ],
    bodyData: [
      {
        bodyLinkTitle: 'Thioredixin Reductase (Rat Recombinant)',
        bodyLinkPath: '#',
        bodyBy: 'Redoxica, Inc.',
        bodyCatalogNumber: 'T515421541-SS',
        bodyConfiguration: '50MB, ADVANCED KIT, 210V, GLASS, SILVER',
        bodyPrice: '$0.00',
        bodyShipped: true,
        bodyDelivered: 'August 20, 2014',
      },
      {
        bodyLinkTitle: 'Thioredixin Reductase (Rat Recombinant)',
        bodyLinkPath: '#',
        bodyBy: 'Redoxica, Inc.',
        bodyCatalogNumber: 'T515421541-SS',
        bodyConfiguration: '50MB, ADVANCED KIT, 210V, GLASS, SILVER',
        bodyPrice: '$0.00',
        bodyComplete: true,
        bodyDelivered: 'August 20, 2014',
      },
      {
        bodyLinkTitle: 'Thioredixin Reductase (Rat Recombinant)',
        bodyLinkPath: '#',
        bodyBy: 'Redoxica, Inc.',
        bodyCatalogNumber: 'T515421541-SS',
        bodyConfiguration: '50MB, ADVANCED KIT, 210V, GLASS, SILVER',
        bodyPrice: '$0.00',
        bodyCancelled: true,
        bodyDelivered: 'August 20, 2014',
      },
      {
        bodyLinkTitle: 'Thioredixin Reductase (Rat Recombinant)',
        bodyLinkPath: '#',
        bodyBy: 'Redoxica, Inc.',
        bodyCatalogNumber: 'T515421541-SS',
        bodyConfiguration: '50MB, ADVANCED KIT, 210V, GLASS, SILVER',
        bodyPrice: '$0.00',
        bodyPrecessing: true,
        bodyDelivered: 'August 20, 2014',
      },
    ],
  },
]

const products2 = [
  {
    headerData: [
      {
        orderPlaced: 'August 14, 2015',
        orderTotal: '$150.00',
        po: '5587PO02145',
        shipTo: 'Kundan Das',
        orderBy: 'Kathy Smith',
        items: '10',
        labGroup: 'Timberland Lab',
        viewInvoiceLinkPath: '#',
        orderNumber: 'LSR-6540',
      },
    ],
    bodyData: [
      {
        bodyLinkTitle: 'Thioredixin Reductase (Rat Recombinant)',
        bodyLinkPath: '#',
        bodyBy: 'Redoxica, Inc.',
        bodyCatalogNumber: 'T515421541-SS',
        bodyConfiguration: '50MB, ADVANCED KIT, 210V, GLASS, SILVER',
        bodyPrice: '$0.00',
        bodyShipped: true,
        bodyDelivered: 'August 20, 2014',
      },
      {
        bodyLinkTitle: 'Thioredixin Reductase (Rat Recombinant)',
        bodyLinkPath: '#',
        bodyBy: 'Redoxica, Inc.',
        bodyCatalogNumber: 'T515421541-SS',
        bodyConfiguration: '50MB, ADVANCED KIT, 210V, GLASS, SILVER',
        bodyPrice: '$0.00',
        bodyComplete: true,
        bodyDelivered: 'August 20, 2014',
      },
      {
        bodyLinkTitle: 'Thioredixin Reductase (Rat Recombinant)',
        bodyLinkPath: '#',
        bodyBy: 'Redoxica, Inc.',
        bodyCatalogNumber: 'T515421541-SS',
        bodyConfiguration: '50MB, ADVANCED KIT, 210V, GLASS, SILVER',
        bodyPrice: '$0.00',
        bodyCancelled: true,
        bodyDelivered: 'August 20, 2014',
      },
      {
        bodyLinkTitle: 'Thioredixin Reductase (Rat Recombinant)',
        bodyLinkPath: '#',
        bodyBy: 'Redoxica, Inc.',
        bodyCatalogNumber: 'T515421541-SS',
        bodyConfiguration: '50MB, ADVANCED KIT, 210V, GLASS, SILVER',
        bodyPrice: '$0.00',
        bodyPrecessing: true,
        bodyDelivered: 'August 20, 2014',
      },
    ],
  },
]

const OrdersAllOrders = () => {
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
                    orders
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    All Orders
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
                    Orders
                    <Icon
                      icon="chevron-down"
                      color={theme.colors.muted}
                      ml="10px"
                    />
                  </Box>
                  <Text fontSize={['12px', '14px']}>All Orders</Text>
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
                    placeholder="Search by supplier name or account number"
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
                <b>Manage All Your Orders in One Place</b>
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

            {products1.map((product, index) => (
              <Panel key={index}>
                {product.headerData.map((item, index) => (
                  <Box
                    key={index}
                    mx="-1rem"
                    mt="-1rem"
                    mb={1}
                    p="1rem"
                    bg="#f6f6f6"
                    display="flex"
                    flexDirection="column"
                    css={css`
                      @media (min-width: 1500px) {
                        flex-direction: row !important;
                      }
                    `}
                  >
                    <Box
                      mr={[0, 0, 0, 0, 2]}
                      mb={1}
                      flexShrink="0"
                      display="grid"
                      gridGap={[1, 1, 3]}
                      gridTemplateColumns={[
                        'repeat(1,auto)',
                        'repeat(3,auto)',
                        'repeat(3,auto)',
                        'repeat(4,auto)',
                        'repeat(7,auto)',
                      ]}
                      css={css`
                        @media (min-width: 1500px) {
                          margin-bottom: 0 !important;
                        }
                      `}
                    >
                      <Box>
                        <Text mb={0}>Order Placed</Text>
                        <Text>
                          <b>{item.orderPlaced}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Order Total</Text>
                        <Text>
                          <b>{item.orderTotal}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>PO#</Text>
                        <Text>
                          <b>{item.po}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Ship To</Text>
                        <Text>
                          <b>{item.shipTo}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Order By</Text>
                        <Text>
                          <b>{item.orderBy}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Items</Text>
                        <Text>
                          <b>{item.items}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Lab Group</Text>
                        <Text>
                          <b>{item.labGroup}</b>
                        </Text>
                      </Box>
                    </Box>

                    <Box
                      flex="1"
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
                      css={css`
                        @media (min-width: 1500px) {
                          justify-content: flex-end !important;
                        }
                      `}
                    >
                      <Anchor mr="2" bold href={item.viewInvoiceLinkPath}>
                        View Invoice
                      </Anchor>

                      <Title tag={3}>Order# {item.orderNumber}</Title>
                    </Box>
                  </Box>
                ))}

                {product.bodyData.map((item, index) => (
                  <Box
                    display="grid"
                    gridGap={2}
                    gridTemplateColumns="repeat(1,1fr)"
                    css={css`
                      @media (min-width: 1500px) {
                        grid-template-columns: repeat(1, 1fr 1.5fr) !important;
                      }
                      &:not(:last-of-type) {
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                        border-bottom: 1px solid ${theme.colors.muted};
                      }
                    `}
                  >
                    <Box>
                      <Link to={item.bodyLinkPath}>
                        <b>{item.bodyLinkTitle}</b>
                      </Link>
                      <Text fontSize="13px">{item.bodyBy}</Text>
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
                          <Text fontSize="12px">{item.bodyCatalogNumber}</Text>
                        </Box>
                        <Box>
                          <Text fontFamily={theme.fontFamily.bold} mb={0}>
                            configuration
                          </Text>
                          <Text fontSize="12px">{item.bodyConfiguration}</Text>
                        </Box>
                        <Box>
                          <Text fontFamily={theme.fontFamily.bold} mb={0}>
                            price
                          </Text>
                          <Text fontSize="12px">{item.bodyPrice}</Text>
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <Box
                        mb={1}
                        display="grid"
                        gridGap={[1, 1, 2]}
                        alignItems="flex-start"
                        gridTemplateColumns={[
                          'repeat(1,auto)',
                          'repeat(1,auto)',
                          'repeat(1,auto)',
                          'repeat(1, 2.8fr 1fr 1fr)',
                        ]}
                      >
                        <Box
                          display="flex"
                          flexDirection={['column', 'column', 'row']}
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
                        </Box>
                        <Box>
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
                            placeholder="Placeholder"
                          />
                        </Box>
                        <Box>
                          {item.bodyShipped && (
                            <Status variant="primary" title="Shipped" />
                          )}
                          {item.bodyComplete && (
                            <Status variant="success" title="Complete" />
                          )}
                          {item.bodyCancelled && (
                            <Status variant="danger" title="Cancelled" />
                          )}
                          {item.bodyPrecessing && (
                            <Status variant="warning" title="Precessing" />
                          )}
                        </Box>
                      </Box>

                      <Text
                        textAlign={['left', 'left', 'right']}
                        fontSize="12px"
                      >
                        <b>Delivered on {item.bodyDelivered}</b>
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Panel>
            ))}

            {products2.map((product, index) => (
              <Panel key={index}>
                {product.headerData.map((item, index) => (
                  <Box
                    key={index}
                    mx="-1rem"
                    mt="-1rem"
                    mb={1}
                    p="1rem"
                    bg="#f6f6f6"
                    display="flex"
                    flexDirection="column"
                    css={css`
                      @media (min-width: 1500px) {
                        flex-direction: row !important;
                      }
                    `}
                  >
                    <Box
                      mr={[0, 0, 0, 0, 2]}
                      mb={1}
                      flexShrink="0"
                      display="grid"
                      gridGap={[1, 1, 3]}
                      gridTemplateColumns={[
                        'repeat(1,auto)',
                        'repeat(3,auto)',
                        'repeat(3,auto)',
                        'repeat(4,auto)',
                        'repeat(7,auto)',
                      ]}
                      css={css`
                        @media (min-width: 1500px) {
                          margin-bottom: 0 !important;
                        }
                      `}
                    >
                      <Box>
                        <Text mb={0}>Order Placed</Text>
                        <Text>
                          <b>{item.orderPlaced}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Order Total</Text>
                        <Text>
                          <b>{item.orderTotal}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>PO#</Text>
                        <Text>
                          <b>{item.po}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Ship To</Text>
                        <Text>
                          <b>{item.shipTo}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Order By</Text>
                        <Text>
                          <b>{item.orderBy}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Items</Text>
                        <Text>
                          <b>{item.items}</b>
                        </Text>
                      </Box>

                      <Box>
                        <Text mb={0}>Lab Group</Text>
                        <Text>
                          <b>{item.labGroup}</b>
                        </Text>
                      </Box>
                    </Box>

                    <Box
                      flex="1"
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
                      css={css`
                        @media (min-width: 1500px) {
                          justify-content: flex-end !important;
                        }
                      `}
                    >
                      <Anchor mr="2" bold href={item.viewInvoiceLinkPath}>
                        View Invoice
                      </Anchor>

                      <Title tag={3}>Order# {item.orderNumber}</Title>
                    </Box>
                  </Box>
                ))}

                {product.bodyData.map((item, index) => (
                  <Box
                    display="grid"
                    gridGap={2}
                    gridTemplateColumns="repeat(1,1fr)"
                    css={css`
                      @media (min-width: 1500px) {
                        grid-template-columns: repeat(1, 1fr 1.5fr) !important;
                      }
                      &:not(:last-of-type) {
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                        border-bottom: 1px solid ${theme.colors.muted};
                      }
                    `}
                  >
                    <Box>
                      <Link to={item.bodyLinkPath}>
                        <b>{item.bodyLinkTitle}</b>
                      </Link>
                      <Text fontSize="13px">{item.bodyBy}</Text>
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
                          <Text fontSize="12px">{item.bodyCatalogNumber}</Text>
                        </Box>
                        <Box>
                          <Text fontFamily={theme.fontFamily.bold} mb={0}>
                            configuration
                          </Text>
                          <Text fontSize="12px">{item.bodyConfiguration}</Text>
                        </Box>
                        <Box>
                          <Text fontFamily={theme.fontFamily.bold} mb={0}>
                            price
                          </Text>
                          <Text fontSize="12px">{item.bodyPrice}</Text>
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <Box
                        mb={1}
                        display="grid"
                        gridGap={[1, 1, 2]}
                        alignItems="flex-start"
                        gridTemplateColumns={[
                          'repeat(1,auto)',
                          'repeat(1,auto)',
                          'repeat(1,auto)',
                          'repeat(1, 2.8fr 1fr 1fr)',
                        ]}
                      >
                        <Box
                          display="flex"
                          flexDirection={['column', 'column', 'row']}
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
                        </Box>
                        <Box>
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
                            placeholder="Placeholder"
                          />
                        </Box>
                        <Box>
                          {item.bodyShipped && (
                            <Status variant="primary" title="Shipped" />
                          )}
                          {item.bodyComplete && (
                            <Status variant="success" title="Complete" />
                          )}
                          {item.bodyCancelled && (
                            <Status variant="danger" title="Cancelled" />
                          )}
                          {item.bodyPrecessing && (
                            <Status variant="warning" title="Precessing" />
                          )}
                        </Box>
                      </Box>

                      <Text
                        textAlign={['left', 'left', 'right']}
                        fontSize="12px"
                      >
                        <b>Delivered on {item.bodyDelivered}</b>
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Panel>
            ))}

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

export default OrdersAllOrders
