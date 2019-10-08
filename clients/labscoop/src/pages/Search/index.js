import { Fragment, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import styled from '@emotion/styled'
import RSC from 'react-scrollbars-custom'
import Select from 'react-select'
import Rating from 'react-rating'
import { Link } from '@reach/router'
import Slider from 'rc-slider'
import OutsideClickHandler from 'react-outside-click-handler'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import { Box } from '../../helpers/'
import {
  Header,
  Footer,
  Button,
  Aside,
  Text,
  Label,
  Title,
  Anchor,
  Checkbox,
  Image,
  Panel,
  CustomerReviews,
  PaginationBtn,
  Icon,
  TrayPopup,
  Popovers,
  Divider,
  Field,
  Table,
  Collapse,
  Switch,
} from '../../ui/'

import searchItemImage from '../../assets/images/temp/search-result-product.jpg'
import searchItemBadgeImage1 from '../../assets/images/elements/badge-logo-2.svg'
import searchItemBadgeImage2 from '../../assets/images/elements/badge-logo-3.svg'
import searchItemBadgeImage3 from '../../assets/images/elements/badge-logo-4.svg'
import badge from '../../assets/images/elements/badge.svg'

const StyledAsideLink = styled(Link)`
  color: ${theme.colors.black};
  display: flex;
  align-items: center;
  padding: 2px 0;
  font-size: 12px;

  &:hover,
  &:focus {
    color: ${theme.colors.primary};
    svg {
      path {
        fill: ${theme.colors.primary} !important;
      }
    }
  }
`

const StyledSearchItemImageBadge = styled(Image)`
  width: 34px;
  border-radius: 50%;
  margin: 0 5px;
`

const StyledBadgeImage = styled(Image)`
  width: 34px;
  border-radius: 50%;
  margin: 0 5px;
`

const StyledField = styled(Field)`
  border: 1px solid ${theme.colors.muted};
  border-radius: 4px;
`

const searchPanelData = [
  {
    productId: 'T456987159-100MG',
    productName:
      'Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay',
    productNamePath: '/',
    productBy: 'Redoxica, Inc.',
    productByPath: '/',
    productByBadgeImagePath: searchItemBadgeImage1,
    productReviewsPath: '/',
    productCitations: '4,447',
    productCitationsPath: '4,447',
    productPriceWhole: '20,900.',
    productPriceFraction: '95',
    productEstimatedDelivery: '04/25/2015',
    productSubPrice: '2,500,00/ML',
    productImagePath: searchItemImage,
    productBadge1ImagePath: searchItemBadgeImage1,
    productBadge2ImagePath: searchItemBadgeImage2,
    productBadge3ImagePath: searchItemBadgeImage3,
    productSuppliersAvailable: '5',
    productRatingReview: true,
    productInfoBox: true,
  },
  {
    productId: 'T456987159-100MG',
    productName:
      'Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit Thioredoxin Activity Assay Kit',
    productNamePath: '/',
    productBy: 'Redoxica, Inc.',
    productByPath: '/',
    productByBadgeImagePath: searchItemBadgeImage1,
    productReviewsPath: '/',
    productCitations: '4,447',
    productCitationsPath: '4,447',
    productPriceWhole: '20,900.',
    productPriceFraction: '95',
    productEstimatedDelivery: '04/25/2015',
    productSubPrice: '2,500,00/ML',
    productImagePath: searchItemImage,
    productBadge1ImagePath: searchItemBadgeImage1,
    productBadge2ImagePath: searchItemBadgeImage2,
    productBadge3ImagePath: searchItemBadgeImage3,
    productSuppliersAvailable: '5',
    productRatingReview: true,
    productInfoBox: true,
  },
  {
    productId: 'T456987159-100MG',
    productName: 'Thioredoxin Activity Assay Kit',
    productNamePath: '/',
    productBy: 'Redoxica, Inc.',
    productByPath: '/',
    productPriceWhole: '20,900.',
    productPriceFraction: '95',
    productEstimatedDelivery: '04/25/2015',
    productSubPrice: '2,500,00/ML',
    productRatingReview: false,
    productInfoBox: false,
  },
]

const asideBrandData = [
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
]

const asidePurityData = [
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Checkbox',
  },
]

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

const marks = {
  185: '$185',
  500: '$500',
}

const Search = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen)

  return (
    <Fragment>
      <Header />

      <main className="content">
        <Box
          display={['none', 'none', 'none', 'flex']}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          py={[1]}
          px={[1, 1, 1, 5]}
        >
          <Text mb={[1, 1, 0]} mr={[0, 0, 2]} flex="1">
            1-16 of over 1,000 results for{' '}
            <b
              css={css`
                color: ${theme.colors.primary};
              `}
            >
              "thioredoxin activity assay kit"
            </b>
          </Text>

          <Box
            flexShrink={0}
            display="flex"
            alignItems="center"
            flexDirection="row"
          >
            <Label fontSize="12px" mb="0" mr="1" flexShrink={0}>
              Sort By
            </Label>
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
              css={css`
                .select__control {
                  min-width: 190px;
                }
              `}
            />
          </Box>

          <Box
            ml={2}
            onClick={toggleFilter}
            fontFamily={theme.fontFamily.bold}
            fontSize="12px"
            display="none"
            css={css`
              cursor: pointer;
              @media (max-width: 1400px) and (min-width: 991px) {
                display: block;
              }
            `}
          >
            <Icon icon="filter" mr="5px" />
            Filter results
          </Box>
        </Box>

        <Box
          display={['flex', 'flex', 'flex', 'none']}
          alignItems="center"
          p={[1]}
        >
          <Box
            flex="1"
            fontSize={['10px', '12px']}
            pr="10px"
            mr="10px"
            py="4px"
          >
            1-16 of over 1,000 results
          </Box>

          <Box
            flexShrink="0"
            borderRightStyle="solid"
            borderRightWidth="1px"
            borderRightColor="muted"
            borderLeftStyle="solid"
            borderLeftWidth="1px"
            borderLeftColor="muted"
            px="10px"
            mr="10px"
            display="flex"
            alignItems="center"
            py="4px"
          >
            <Image
              src={searchItemBadgeImage1}
              alt="searchItemBadgeImage1"
              mr="10px"
              width="24px"
            />
            <Switch id="switch-1" defaultChecked />
          </Box>

          <Box flexShrink="0">
            <Box
              onClick={toggleFilter}
              fontFamily={theme.fontFamily.bold}
              fontSize="12px"
              css={css`
                cursor: pointer;
              `}
            >
              <Icon icon="filter" mr="5px" />
              Filter results
            </Box>
          </Box>
        </Box>

        <Box
          pb={[2]}
          px={[1, 1, 1, 5]}
          display="flex"
          flexDirection={['column']}
          css={css`
            @media (min-width: 1400px) {
              flex-direction: row;
            }
          `}
        >
          <Aside
            flexBasis="auto"
            css={css`
              @media (min-width: 1400px) {
                flex-basis: 200px !important;
              }
            `}
          >
            <OutsideClickHandler
              onOutsideClick={() => {
                setIsFilterOpen(false)
              }}
            >
              <ScrollLock isActive={isFilterOpen} />
              <TouchScrollable isActive={isFilterOpen}>
                <Box
                  bg="white"
                  display={isFilterOpen ? 'block' : 'none'}
                  overflowY={isFilterOpen && 'auto'}
                  position={isFilterOpen && 'fixed'}
                  width={isFilterOpen ? '100%' : 'auto'}
                  height={[
                    isFilterOpen ? 'calc(100% - 111px)' : 'auto',
                    isFilterOpen ? 'calc(100% - 111px)' : 'auto',
                    isFilterOpen ? 'calc(100% - 71px)' : 'auto',
                  ]}
                  p={isFilterOpen ? 1 : 0}
                  zIndex="100"
                  left="0"
                  top={['111px', '111px', '71px']}
                  css={css`
                    @media (min-width: 1400px) {
                      display: block;
                    }
                  `}
                  py={isFilterOpen && 2}
                >
                  <Box
                    mb={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Title
                      tag={1}
                      css={css`
                        margin-bottom: 0;
                      `}
                    >
                      Filter Results
                    </Title>

                    <Box
                      onClick={toggleFilter}
                      flexShrink="0"
                      ml={2}
                      display={isFilterOpen ? 'inline-block' : 'none'}
                      css={css`
                        cursor: pointer;
                      `}
                    >
                      <Icon icon="times" size="20px" />
                    </Box>
                  </Box>

                  <Collapse
                    title="Life Science"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <StyledAsideLink to="/">Assay Kits</StyledAsideLink>
                    <StyledAsideLink to="/">
                      Preteins & Peptides
                    </StyledAsideLink>
                    <StyledAsideLink to="/">Antibodies</StyledAsideLink>
                    <StyledAsideLink to="/">
                      Biochemicals & Reagents
                    </StyledAsideLink>
                    <StyledAsideLink to="/">
                      Enzymes & Inhibitors
                    </StyledAsideLink>
                  </Collapse>

                  <Collapse
                    title="Chemistry"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <StyledAsideLink to="/">Assay Kits</StyledAsideLink>
                    <StyledAsideLink to="/">
                      Preteins & Peptides
                    </StyledAsideLink>
                  </Collapse>

                  <Collapse
                    title="Chemistry"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <StyledAsideLink to="/">Assay Kits</StyledAsideLink>
                    <StyledAsideLink to="/">
                      Preteins & Peptides
                    </StyledAsideLink>
                  </Collapse>

                  <Collapse
                    title="Clinical"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <StyledAsideLink to="/">Lorem</StyledAsideLink>
                    <StyledAsideLink to="/">Lorem ipsum</StyledAsideLink>
                  </Collapse>

                  <Collapse
                    title="Labware"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <StyledAsideLink to="/">Lorem</StyledAsideLink>
                    <StyledAsideLink to="/">Lorem ipsum</StyledAsideLink>
                  </Collapse>

                  <Collapse
                    title="Lab Equipment"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <StyledAsideLink to="/">Lorem</StyledAsideLink>
                    <StyledAsideLink to="/">Lorem ipsum</StyledAsideLink>
                  </Collapse>

                  <Collapse
                    title="Brand"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <RSC id="RSC-Example" style={{ height: '260px' }}>
                      {asideBrandData.map((checkbox, index) => (
                        <Checkbox
                          key={index}
                          title={checkbox.title}
                          id={'checkbox-brand-' + index}
                        />
                      ))}
                    </RSC>
                  </Collapse>

                  <Collapse
                    title="Purity"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <RSC id="RSC-Example" style={{ height: '260px' }}>
                      {asidePurityData.map((checkbox, index) => (
                        <Checkbox
                          key={index}
                          title={checkbox.title}
                          id={'checkbox-purity-' + index}
                        />
                      ))}
                    </RSC>
                  </Collapse>

                  <Collapse
                    title="Availability"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <StyledAsideLink
                      css={css`
                        padding: 4px 0;
                      `}
                      to="/"
                    >
                      <Icon icon="check" mr="10px" /> In Stock
                    </StyledAsideLink>
                    <StyledAsideLink
                      css={css`
                        padding: 4px 0;
                      `}
                      to="/"
                    >
                      <Icon icon="calendar" mr="10px" /> Made-to-Order
                    </StyledAsideLink>
                    <StyledAsideLink
                      css={css`
                        padding: 4px 0;
                      `}
                      to="/"
                    >
                      <Icon icon="shapes" mr="10px" /> Back Ordered
                    </StyledAsideLink>
                  </Collapse>

                  <Collapse
                    title="Impact Score"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <Box px="7px" pb={2}>
                      <Range
                        min={185}
                        max={500}
                        defaultValue={[185, 410]}
                        tipFormatter={value => `${value}`}
                        marks={marks}
                      />
                    </Box>
                  </Collapse>

                  <Collapse
                    title="Quality Certifications"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <Checkbox title="" id="checkbox-quality-certification-1">
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                    <Checkbox title="" id="checkbox-quality-certification-2">
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                    <Checkbox title="" id="checkbox-quality-certification-3">
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                    <Checkbox title="" id="checkbox-quality-certification-4">
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                    <Checkbox title="" id="checkbox-quality-certification-5">
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                  </Collapse>

                  <Collapse
                    title="Business Certifications"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                  >
                    <Checkbox
                      title=""
                      id="checkbox-green-product-certification-1"
                    >
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                    <Checkbox
                      title=""
                      id="checkbox-green-product-certification-2"
                    >
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                    <Checkbox
                      title=""
                      id="checkbox-green-product-certification-3"
                    >
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                    <Checkbox
                      title=""
                      id="checkbox-green-product-certification-4"
                    >
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                    <Checkbox
                      title=""
                      id="checkbox-green-product-certification-5"
                    >
                      <Image
                        maxWidth="20px"
                        src={searchItemBadgeImage2}
                        alt="checkbox label image"
                        mr="5px"
                      />
                      <Text fontSize="12px">Green Product Certification</Text>
                    </Checkbox>
                  </Collapse>

                  <Collapse
                    title="Reviews & Ratings"
                    fontFamily={theme.fontFamily.bold}
                    size={2}
                    fontSize="12px"
                  >
                    <Box display="flex" alignItems="center" py="5px">
                      <Box flex="1" mt="-4px">
                        <Rating
                          readonly
                          initialRating={5}
                          emptySymbol={
                            <Icon
                              icon="star-empty"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                          fullSymbol={
                            <Icon
                              icon="star-full"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                        />
                      </Box>

                      <Box flexShrink={0} ml={1}>
                        5-Stars
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" py="5px">
                      <Box flex="1" mt="-4px">
                        <Rating
                          readonly
                          initialRating={4}
                          emptySymbol={
                            <Icon
                              icon="star-empty"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                          fullSymbol={
                            <Icon
                              icon="star-full"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                        />
                      </Box>

                      <Box flexShrink={0} ml={1}>
                        4-Star or Higher
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" py="5px">
                      <Box flex="1" mt="-4px">
                        <Rating
                          readonly
                          initialRating={3}
                          emptySymbol={
                            <Icon
                              icon="star-empty"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                          fullSymbol={
                            <Icon
                              icon="star-full"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                        />
                      </Box>

                      <Box flexShrink={0} ml={1}>
                        3-Star or Higher
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" py="5px">
                      <Box flex="1" mt="-4px">
                        <Rating
                          readonly
                          initialRating={2}
                          emptySymbol={
                            <Icon
                              icon="star-empty"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                          fullSymbol={
                            <Icon
                              icon="star-full"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                        />
                      </Box>

                      <Box flexShrink={0} ml={1}>
                        2-Star or Higher
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" py="5px">
                      <Box flex="1" mt="-4px">
                        <Rating
                          readonly
                          initialRating={1}
                          emptySymbol={
                            <Icon
                              icon="star-empty"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                          fullSymbol={
                            <Icon
                              icon="star-full"
                              color={theme.colors.primary}
                              size="13px"
                            />
                          }
                        />
                      </Box>

                      <Box flexShrink={0} ml={1}>
                        1-Star or Higher
                      </Box>
                    </Box>
                  </Collapse>
                </Box>
              </TouchScrollable>
            </OutsideClickHandler>
          </Aside>

          <Box flex="1">
            {searchPanelData.map((panel, index) => (
              <Panel key={index}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  css={css`
                    &:hover {
                      * {
                        opacity: 1;
                      }
                    }
                  `}
                >
                  <Box>
                    <Text mb="5px">{panel.productId}</Text>
                    <Link
                      to={panel.productNamePath}
                      css={css`
                        color: ${theme.colors.black};
                        display: inline-block;
                        margin-bottom: 5px;
                        font-size: 18px;
                        font-family: ${theme.fontFamily.bold};
                        @media (max-width: 767px) {
                          font-size: 15px;
                        }
                        @media (max-width: 575px) {
                          font-size: 13px;
                        }

                        &:hover,
                        &:focus {
                          color: ${theme.colors.primary};
                        }
                      `}
                    >
                      {panel.productName}
                    </Link>

                    <Text mb="10px" fontSize="12px">
                      by{' '}
                      <b>
                        <Link
                          to={panel.productByPath}
                          css={css`
                            color: ${theme.colors.black};
                            &:hover,
                            &:focus {
                              color: ${theme.colors.primary};
                            }
                          `}
                        >
                          {panel.productBy}
                        </Link>
                      </b>
                      {panel.productByBadgeImagePath && (
                        <Image
                          src={panel.productByBadgeImagePath}
                          alt="searchItemBadgeImage1"
                          ml="10px"
                          width="24px"
                        />
                      )}
                    </Text>

                    <Box display="flex" flexWrap="wrap" mb="10px">
                      {panel.productRatingReview && (
                        <CustomerReviews
                          rating={3.5}
                          reviews="20,014 Reviews"
                          titleOutOf="4.5 out of 5 stars"
                          percentOf5="40"
                          barWidthOutOf5="30"
                          percentOf4="20"
                          barWidthOutOf4="10"
                          percentOf3="45"
                          barWidthOutOf3="35"
                          percentOf2="60"
                          barWidthOutOf2="20"
                          percentOf1="90"
                          barWidthOutOf1="55"
                          mr={[1, 1, 2]}
                        />
                      )}

                      {panel.productReviewsPath && (
                        <Anchor
                          href={panel.productReviewsPath}
                          bold
                          fontSize="12px"
                          mr={[0, 2]}
                        >
                          Write a Review
                        </Anchor>
                      )}

                      {panel.productCitationsPath && (
                        <Anchor
                          href={panel.productCitationsPath}
                          bold
                          fontSize="12px"
                          mt={[1, 0]}
                          flexBasis={['100%', 'auto']}
                        >
                          <Icon icon="award" mr="5px" />
                          {panel.productCitations} Citations
                        </Anchor>
                      )}
                    </Box>

                    <Box
                      display="flex"
                      alignItems="center"
                      mb="5px"
                      flexWrap="wrap"
                    >
                      <Text
                        fontSize={['12px', '16px']}
                        mb={0}
                        mr={[1, 1, 2]}
                        fontFamily={theme.fontFamily.bold}
                      >
                        <small>
                          <sup>$</sup>
                        </small>
                        {panel.productPriceWhole}
                        <sup>{panel.productPriceFraction}</sup>
                      </Text>
                      <Text
                        fontSize={['9px', '12px']}
                        color="success"
                        display="flex"
                        alignItems="center"
                      >
                        <Icon
                          color={theme.colors.success}
                          icon="check-circle"
                          mr="5px"
                        />
                        <b>
                          Estimated Delivery - {panel.productEstimatedDelivery}
                        </b>
                      </Text>
                    </Box>
                    <Text fontSize="12px" mt="10px">
                      (<sup>$</sup>
                      {panel.productSubPrice})
                    </Text>
                  </Box>

                  {panel.productInfoBox && (
                    <Box
                      ml={1}
                      display="flex"
                      flexShrink="0"
                      alignItems={[
                        'flex-start',
                        'flex-start',
                        'flex-start',
                        'center',
                      ]}
                      flexDirection={['column', 'column', 'row', 'row', 'row']}
                    >
                      <Box
                        mb={[1, 1, 0, 0, 0]}
                        order={[1, 1, 2, 2, 2]}
                        flexShrink="0"
                        textAlign="center"
                        width={['100%', '100%', 'auto']}
                      >
                        <Image
                          width={['60px', '120px', '140px', '180px', '200px']}
                          src={panel.productImagePath}
                          alt="image"
                        />
                      </Box>

                      <Box
                        order={[2, 2, 1, 1, 1]}
                        display={['block', 'block', 'block', 'block', 'flex']}
                        flexDirection="column"
                        alignSelf="stretch"
                        flex="1"
                        py={[0, 0, 0, 0, '10px']}
                        mr={[0, 0, 2]}
                      >
                        <Box
                          display={['none', 'none', 'flex']}
                          alignItems="center"
                          justifyContent={[
                            'start',
                            'start',
                            'start',
                            'start',
                            'flex-end',
                          ]}
                          mb={1}
                        >
                          <StyledSearchItemImageBadge
                            src={panel.productBadge1ImagePath}
                            alt="image"
                          />
                          <StyledSearchItemImageBadge
                            src={panel.productBadge2ImagePath}
                            alt="image"
                          />
                          <StyledSearchItemImageBadge
                            src={panel.productBadge3ImagePath}
                            alt="image"
                          />
                        </Box>

                        <Box
                          display={['none', 'none', 'none', 'none', 'flex']}
                          alignItems="center"
                          flex="1"
                          mb={1}
                          ml={[0, 0, 0, 0, '92px']}
                          opacity={[1, 1, 1, 1, 0]}
                        >
                          <Label fontSize="12px" mb="0" mr="1" flexShrink={0}>
                            Quantity
                          </Label>
                          <Box width="100%" maxWidth="100px">
                            <Select
                              options={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="1"
                            />
                          </Box>
                        </Box>

                        <Box
                          display={['none', 'none', 'none', 'none', 'flex']}
                          alignItems="center"
                          mb={1}
                          opacity={[1, 1, 1, 1, 0]}
                          justifyContent={[
                            'start',
                            'start',
                            'start',
                            'start',
                            'flex-end',
                          ]}
                        >
                          <Button variant="primary" mr={2}>
                            Add to Cart
                          </Button>

                          <TrayPopup
                            inlineBlock
                            toggleTitle="Quick View"
                            headerBackBtnTitle="Back"
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
                                <Box>
                                  <Text
                                    fontSize={['20px', '22px']}
                                    fontFamily={theme.fontFamily.bold}
                                    mb="0"
                                  >
                                    Thioredoxin Activity Assay Kit
                                  </Text>
                                  <Text fontSize="16px">by Redoxica, Inc.</Text>
                                </Box>

                                <Button btnBlock>View Product Details</Button>
                              </Box>

                              <Box
                                display="flex"
                                flexDirection={[
                                  'column',
                                  'column',
                                  'column',
                                  'column',
                                  'row',
                                ]}
                                justifyContent="space-between"
                                alignItems={[
                                  'normal',
                                  'normal',
                                  'normal',
                                  'normal',
                                  'center',
                                ]}
                                mb={2}
                              >
                                <Box
                                  flexShrink={0}
                                  mr={[0, 0, 2]}
                                  mb={[1, 1, 1, 1, 0]}
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
                                    <Box
                                      flexShrink={0}
                                      mr={[0, 0, 2]}
                                      mb={[1, 1, 1, 1, 0]}
                                      display="flex"
                                      flexDirection={[
                                        'column',
                                        'column',
                                        'row',
                                      ]}
                                      alignItems={[
                                        'normal',
                                        'normal',
                                        'center',
                                      ]}
                                    >
                                      <CustomerReviews
                                        rating={3.5}
                                        reviews="20,014 Reviews"
                                        titleOutOf="4.5 out of 5 stars"
                                        percentOf5="40"
                                        barWidthOutOf5="30"
                                        percentOf4="20"
                                        barWidthOutOf4="10"
                                        percentOf3="45"
                                        barWidthOutOf3="35"
                                        percentOf2="60"
                                        barWidthOutOf2="20"
                                        percentOf1="90"
                                        barWidthOutOf1="55"
                                        flexBasis={['100%', '100%', 'auto']}
                                        leftPosition
                                      />
                                    </Box>

                                    <Box flexShrink={0}>
                                      <Popovers
                                        position="right"
                                        content="Base on availability provided by the supplier."
                                      >
                                        <Image
                                          src={badge}
                                          alt="badge"
                                          width="175px"
                                        />
                                      </Popovers>
                                    </Box>
                                  </Box>
                                </Box>

                                <Box>
                                  <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="start"
                                  >
                                    <StyledBadgeImage
                                      src={searchItemBadgeImage1}
                                      alt="image"
                                    />
                                    <StyledBadgeImage
                                      src={searchItemBadgeImage2}
                                      alt="image"
                                    />
                                    <StyledBadgeImage
                                      src={searchItemBadgeImage3}
                                      alt="image"
                                    />
                                  </Box>
                                </Box>
                              </Box>

                              <Box
                                display="grid"
                                gridGap={['15px', '15px', '20px']}
                                gridTemplateColumns={[
                                  'repeat(1,1fr)',
                                  'repeat(1,1fr)',
                                  'repeat(1,1fr)',
                                  'repeat(1,1.5fr 1fr)',
                                ]}
                              >
                                <Box>
                                  <Box mb={2}>
                                    <Text
                                      css={css`
                                        text-transform: uppercase;
                                      `}
                                      mb={0}
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      pricing & availability
                                    </Text>

                                    <Divider my={1} />

                                    <Text
                                      mb={0}
                                      fontSize="12px"
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      Catalog Number
                                    </Text>
                                    <Text mb={1}>T48172781-100MG</Text>

                                    <Text
                                      mb={0}
                                      fontSize="12px"
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      Price
                                    </Text>
                                    <Text mb="5px">
                                      <b>
                                        <small>
                                          <sup>$</sup>
                                        </small>
                                        20,800.<sup>50</sup>
                                      </b>{' '}
                                      <i>($2,000.51/GM)</i>{' '}
                                      <b
                                        css={css`
                                          color: ${theme.colors.success};
                                          display: inline-flex;
                                          align-items: center;
                                        `}
                                      >
                                        <Icon icon="box" mr="5px" /> Free
                                        Shipping
                                      </b>
                                    </Text>
                                    <Text
                                      mb={0}
                                      fontSize="12px"
                                      fontFamily={theme.fontFamily.bold}
                                      color="success"
                                      display="flex"
                                      alignItems="center"
                                    >
                                      <Icon
                                        icon="check-circle"
                                        mr="2px"
                                        color={theme.colors.success}
                                      />
                                      Estimate Delivery - 04/25/2015
                                    </Text>
                                    <Text fontSize="12px" pl="15px">
                                      Ships from Redoxica and sold by Labscoop
                                    </Text>

                                    <Box
                                      display="grid"
                                      gridGap="20px"
                                      gridTemplateColumns={[
                                        'repeat(2,1fr)',
                                        'repeat(1,1fr 1.3fr)',
                                      ]}
                                      alignItems="flex-end"
                                    >
                                      <Box>
                                        <Box
                                          my={1}
                                          display="flex"
                                          alignItems="center"
                                        >
                                          <Label mb={0} flexShrink="0" mr={1}>
                                            Quantity:
                                          </Label>

                                          <Box flex="1">
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
                                              placeholder="Custom placeholder"
                                            />
                                          </Box>
                                        </Box>
                                        <Button variant="primary" btnBlock>
                                          Add to Cart
                                        </Button>
                                      </Box>

                                      <Box>
                                        <Box
                                          maxWidth="200px"
                                          display="flex"
                                          alignItems="center"
                                          justifyContent="space-around"
                                          pb="7.5px"
                                        >
                                          <Popovers
                                            position="bottom"
                                            content="Base on availability provided by the supplier."
                                          >
                                            <Icon
                                              size="20px"
                                              icon="clipboard"
                                            />
                                          </Popovers>
                                          <Popovers
                                            position="bottom"
                                            content="Base on availability provided by the supplier."
                                          >
                                            <Icon
                                              size="20px"
                                              icon="paper-plane"
                                            />
                                          </Popovers>
                                          <Popovers
                                            position="bottom"
                                            content="Base on availability provided by the supplier."
                                          >
                                            <Icon size="20px" icon="file-alt" />
                                          </Popovers>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>

                                  <Box mb={2}>
                                    <Text
                                      css={css`
                                        text-transform: uppercase;
                                      `}
                                      mb={0}
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      configuration
                                    </Text>

                                    <Divider my={1} />

                                    <form>
                                      <Label>Size</Label>
                                      <Box
                                        display="grid"
                                        gridGap="15px"
                                        gridTemplateColumns={[
                                          'repeat(2,1fr)',
                                          'repeat(2,1fr)',
                                          'repeat(4,1fr)',
                                          'repeat(4,1fr)',
                                        ]}
                                      >
                                        <StyledField
                                          id="field-1"
                                          title=""
                                          type="text"
                                        />
                                        <StyledField
                                          id="field-2"
                                          title=""
                                          type="text"
                                        />
                                      </Box>

                                      <Label>Color</Label>
                                      <Box
                                        display="grid"
                                        gridGap="15px"
                                        gridTemplateColumns={[
                                          'repeat(2,1fr)',
                                          'repeat(2,1fr)',
                                          'repeat(3,1fr)',
                                          'repeat(3,1fr)',
                                        ]}
                                      >
                                        <StyledField
                                          id="field-3"
                                          title=""
                                          type="text"
                                        />
                                        <StyledField
                                          id="field-4"
                                          title=""
                                          type="text"
                                        />
                                      </Box>
                                    </form>
                                  </Box>

                                  <Box mb={2}>
                                    <Text
                                      css={css`
                                        text-transform: uppercase;
                                      `}
                                      mb={0}
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      specification
                                    </Text>

                                    <Divider my={1} />

                                    <Table stripped>
                                      <tbody>
                                        <tr>
                                          <td>CAS#</td>
                                          <td
                                            css={css`
                                              color: ${theme.colors.primary};
                                            `}
                                          >
                                            28-23982-32
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>Purity</td>
                                          <td>97% HPLC</td>
                                        </tr>

                                        <tr>
                                          <td>Grade</td>
                                          <td>ACZ</td>
                                        </tr>

                                        <tr>
                                          <td>Molecular Weight</td>
                                          <td>943.43</td>
                                        </tr>

                                        <tr>
                                          <td>Purity</td>
                                          <td>97% HPLC</td>
                                        </tr>

                                        <tr>
                                          <td>Grade</td>
                                          <td>
                                            Integer tincidunt. Cras dapibus.
                                            Vivamus elementum semper nisi.
                                            Aenean vulputate eleifend tellus.
                                            Aenean leo ligula, porttitor eu,
                                            consequat vitae, eleifend ac, enim.
                                            Aliquam lorem ante, dapibus in,
                                            viverra quis, feugiat a, tellus.
                                            Phasellus viverra nulla ut metus
                                            varius laoreet. Quisque rutrum.
                                            Aenean imperdiet. Etiam ultricies
                                            nisi vel augue. Curabitur
                                            ullamcorper ultricies nisi. Nam eget
                                            dui. Etiam rhoncus. Maecenas tempus,
                                            tellus eget condimentum rhoncus, sem
                                            quam semper libero, sit amet
                                            adipiscing sem neque sed ipsum.
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>Molecular Weight</td>
                                          <td>943.43</td>
                                        </tr>

                                        <tr>
                                          <td>Purity</td>
                                          <td>97% HPLC</td>
                                        </tr>

                                        <tr>
                                          <td>Grade</td>
                                          <td>ACZ</td>
                                        </tr>

                                        <tr>
                                          <td>Molecular Weight</td>
                                          <td>943.43</td>
                                        </tr>

                                        <tr>
                                          <td>Purity</td>
                                          <td>97% HPLC</td>
                                        </tr>

                                        <tr>
                                          <td>Grade</td>
                                          <td>ACZ</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </Box>
                                </Box>

                                <Box>
                                  <Box
                                    mb={2}
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderColor="muted"
                                  >
                                    <Image
                                      src="https://picsum.photos/id/1/400/400"
                                      alt="Image"
                                      width="100%"
                                    />
                                  </Box>

                                  <Box p={[1, 2]} bg="silverSecondary" mb={2}>
                                    <Text
                                      fontSize={2}
                                      fontFamily={theme.fontFamily.bold}
                                      mb="10px"
                                    >
                                      Shipping & Handling
                                    </Text>
                                    <Text mb="10px">
                                      <b>Shipped In:</b> Blue Ice
                                    </Text>
                                    <Text mb="10px">
                                      <b>Hazardous:</b> Yes, $35.00 Hazmat Free
                                      Applies
                                    </Text>
                                    <Text>
                                      <b>Regulated:</b> Yes, DEA Controlled
                                      Substance
                                    </Text>
                                  </Box>

                                  <Box p={[1, 2]} bg="silverSecondary">
                                    <Text
                                      fontSize={2}
                                      fontFamily={theme.fontFamily.bold}
                                      mb="10px"
                                    >
                                      Safety & Storage
                                    </Text>
                                    <Text mb="10px">
                                      <b>Storage Temperature:</b> -20°C
                                    </Text>
                                    <Text mb="10px">
                                      <b>Safety Statement:</b> For research use
                                      only.
                                    </Text>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </TrayPopup>
                        </Box>

                        <Box
                          display={['none', 'none', 'none', 'none', 'flex']}
                          alignItems="center"
                          mt="auto"
                          justifyContent={[
                            'start',
                            'start',
                            'start',
                            'start',
                            'flex-end',
                          ]}
                        >
                          <Anchor
                            href="/"
                            bold
                            fontSize="12px"
                            mr={['0', '0', '1']}
                            display="inline-flex"
                            flexShrink={0}
                            alignItems="center"
                          >
                            More Options Available
                            <Icon size="10px" icon="caret-right" ml="5px" />
                          </Anchor>
                          <Anchor
                            href="/"
                            bold
                            fontSize="12px"
                            display="inline-flex"
                            flexShrink={0}
                            alignItems="center"
                          >
                            {panel.productSuppliersAvailable} Suppliers
                            Available for this Product
                            <Icon size="10px" icon="caret-right" ml="5px" />
                          </Anchor>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>

                {panel.productInfoBox && (
                  <Box
                    display={['flex', 'flex', 'none']}
                    alignItems="center"
                    justifyContent="flex-end"
                    mt={1}
                  >
                    <StyledSearchItemImageBadge
                      src={searchItemBadgeImage1}
                      alt="image"
                    />
                    <StyledSearchItemImageBadge
                      src={searchItemBadgeImage2}
                      alt="image"
                    />
                    <StyledSearchItemImageBadge
                      src={searchItemBadgeImage3}
                      alt="image"
                    />
                  </Box>
                )}
              </Panel>
            ))}

            <Box
              display="flex"
              alignItems="center"
              justifyContent={['center', 'center', 'flex-end']}
              mt={3}
            >
              <PaginationBtn href="/" className="disabled" tabIndex="-1">
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

export default Search
