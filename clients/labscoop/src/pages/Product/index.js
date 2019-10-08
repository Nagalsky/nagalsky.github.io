import { Fragment, useState, useEffect, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import Swiper from 'react-id-swiper'
import { darken } from 'polished'
import ReadMoreReact from 'read-more-react'
import { Link as ScrollTo } from 'react-scroll'
import Select from 'react-select'
import Rating from 'react-rating'

import theme from '../../lib/theme'
import { Box } from '../../helpers'

import {
  Header,
  Footer,
  Text,
  Icon,
  Title,
  Anchor,
  CustomerReviews,
  Popovers,
  Image,
  Divider,
  Button,
  Label,
  Field,
  Table,
  Question,
  HelpfulBox,
  TitleBox,
  FeedBack,
  Comment,
  TrayPopup,
  DropZone,
  Checkbox,
} from '../../ui'

import badge from '../../assets/images/elements/badge.svg'
import badge2 from '../../assets/images/elements/badge-logo-2.svg'
import badge3 from '../../assets/images/elements/badge-logo-3.svg'
import badge4 from '../../assets/images/elements/badge-logo-4.svg'
import descriptionCardImage from '../../assets/images/elements/ship.svg'
import productImage from '../../assets/images/temp/search-result-product.jpg'
import pubMedLogo from '../../assets/images/temp/pubmed-logo.jpg'

const StyledGalleryThumbnailsItem = styled(Box)`
  border: 1px solid ${theme.colors.muted};
`

const StyledBadgeImage = styled(Image)`
  width: 34px;
  border-radius: 50%;
  margin: 0 5px;
`

const StyledViewAllButton = styled(Button)`
  display: block;
  width: 100%;
  margin-top: 10px;
  color: #7f7f7f;
  background-color: #f6f6f6;
  box-shadow: none;
  border: none;
  border-radius: 0;
  font-size: 14px;
  padding: 10px 15px;
  &:hover,
  &:focus {
    color: ${darken(0.1, '#7f7f7f')};
    background-color: ${darken(0.1, '#f6f6f6')};
  }
`

const StyledScrollTo = styled(ScrollTo)`
  font-family: ${theme.fontFamily.bold};
  display: inline-block;
  padding: 10px 5px;
  cursor: pointer;
  border-bottom: 4px solid ${theme.colors.white};
  @media only screen and (max-width: 1199px) and (min-width: 767px) {
    font-size: 12px;
    padding-left: 2px;
    padding-right: 2px;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
  &.active {
    border-color: ${theme.colors.primary};
  }
`

const StyledHelpfulButton = styled(Button)`
  font-size: 10px;
  border: 1px solid ${theme.colors.muted};
  color: ${theme.colors.black};
  padding: 3px 10px;
  font-family: ${theme.fontFamily.bold};
  box-shadow: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    border-color: ${theme.colors.primary};
  }
`

const selectOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
]

const scrollToSectionsLinksData = [
  {
    title: 'Description',
    to: 'scrollToDescription',
  },
  {
    title: 'Pricing',
    to: 'scrollToPricing',
  },
  {
    title: 'Accessories',
    to: 'scrollToAccessories',
  },
  {
    title: 'Specifications',
    to: 'scrollToSpecifications',
  },
  {
    title: 'Citations',
    to: 'scrollToCitations',
  },
  {
    title: 'Reviews',
    to: 'scrollToReviews',
  },
  {
    title: 'References',
    to: 'scrollToReferences',
  },
]

const galleryData = [
  {
    imageSrc: 'https://picsum.photos/id/1/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/2/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/3/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/4/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/5/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/6/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/7/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/8/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/9/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/10/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/11/400/400',
    alt: 'Lorem ipsum',
  },
  {
    imageSrc: 'https://picsum.photos/id/12/400/400',
    alt: 'Lorem ipsum',
  },
]

const galleryFeedbackData = [
  {
    feedback: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium.`,
  },
  {
    feedback: `Integer tincidunt. Cras dapibus. Vivamus elementum semper
                    nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum.`,
  },
  {
    feedback: `Quis gravida magna mi a libero. Fusce vulputate eleifend
                    sapien. Vestibulum purus quam, scelerisque ut, mollis sed,
                    nonummy id, metus. Nullam accumsan lorem in dui. Cras
                    ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam
                    pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                    imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam
                    ultrices mauris. Integer ante arcu, accumsan a, consectetuer
                    eget, posuere ut, mauris. Praesent adipiscing.`,
  },
]

const citationsData = [
  {
    href: '/',
    linkText: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium.`,
    imageUrl: pubMedLogo,
    imageAlt: 'lorem ipsum',
    publicationID: '5157418755',
    productUsage: '5157418755',
  },
  {
    href: '/',
    linkText: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium.`,
    imageUrl: pubMedLogo,
    imageAlt: 'lorem ipsum',
    publicationID: '5157418755',
    productUsage: '5157418755',
  },
  {
    href: '/',
    linkText: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium.`,
    imageUrl: pubMedLogo,
    imageAlt: 'lorem ipsum',
    publicationID: '5157418755',
    productUsage: '5157418755',
  },
]

const relatedProductData = [
  {
    href: '/',
    title: 'PhotoScript sfs sfsfs sfs',
    by: 'New Lindon, Inc.',
    imageUrl: 'https://picsum.photos/id/1/400/200',
    imageAlt: 'Lorem ipsum',
    ratingScore: 4,
    ratingTitle: '7 Reviews',
    price: '1,234.00',
  },
  {
    href: '/',
    title: 'PhotoScript sfs sfsfs sfs',
    by: 'New Lindon, Inc.',
    imageUrl: 'https://picsum.photos/id/1/400/200',
    imageAlt: 'Lorem ipsum',
    ratingScore: 4,
    ratingTitle: '7 Reviews',
    price: '1,234.00',
  },
  {
    href: '/',
    title: 'PhotoScript sfs sfsfs sfs',
    by: 'New Lindon, Inc.',
    imageUrl: 'https://picsum.photos/id/1/400/200',
    imageAlt: 'Lorem ipsum',
    ratingScore: 4,
    ratingTitle: '7 Reviews',
    price: '1,234.00',
  },
  {
    href: '/',
    title: 'PhotoScript sfs sfsfs sfs',
    by: 'New Lindon, Inc.',
    imageUrl: 'https://picsum.photos/id/1/400/200',
    imageAlt: 'Lorem ipsum',
    ratingScore: 4,
    ratingTitle: '7 Reviews',
    price: '1,234.00',
  },
  {
    href: '/',
    title: 'PhotoScript sfs sfsfs sfs',
    by: 'New Lindon, Inc.',
    imageUrl: 'https://picsum.photos/id/1/400/200',
    imageAlt: 'Lorem ipsum',
    ratingScore: 4,
    ratingTitle: '7 Reviews',
    price: '1,234.00',
  },
  {
    href: '/',
    title: 'PhotoScript sfs sfsfs sfs',
    by: 'New Lindon, Inc.',
    imageUrl: 'https://picsum.photos/id/1/400/200',
    imageAlt: 'Lorem ipsum',
    ratingScore: 4,
    ratingTitle: '7 Reviews',
    price: '1,234.00',
  },
  {
    href: '/',
    title: 'PhotoScript sfs sfsfs sfs',
    by: 'New Lindon, Inc.',
    imageUrl: 'https://picsum.photos/id/1/400/200',
    imageAlt: 'Lorem ipsum',
    ratingScore: 4,
    ratingTitle: '7 Reviews',
    price: '1,234.00',
  },
  {
    href: '/',
    title: 'PhotoScript sfs sfsfs sfs',
    by: 'New Lindon, Inc.',
    imageUrl: 'https://picsum.photos/id/1/400/200',
    imageAlt: 'Lorem ipsum',
    ratingScore: 4,
    ratingTitle: '7 Reviews',
    price: '1,234.00',
  },
]

const StyledField = styled(Field)`
  border: 1px solid ${theme.colors.muted};
  border-radius: 4px;
`

const StyledImageBox = styled(Image)`
  width: 68px;
  height: 68px;
  object-fit: cover;
  margin-bottom: 10px;
  border: 1px solid ${theme.colors.muted};
  &:not(:last-child) {
    margin-right: 10px;
  }
`

const Product = () => {
  const [gallerySwiper, getGallerySwiper] = useState(null)
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null)
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  }

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    slidesPerView: 3,
    spaceBetween: 15,
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
  }

  const FeedbackSwiperParams = {
    effect: 'fade',
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  useEffect(
    () => {
      if (
        gallerySwiper !== null &&
        gallerySwiper.controller &&
        thumbnailSwiper !== null &&
        thumbnailSwiper.controller
      ) {
        gallerySwiper.controller.control = thumbnailSwiper
        thumbnailSwiper.controller.control = gallerySwiper
      }
    },
    [gallerySwiper, thumbnailSwiper],
  )

  let offSet = -130
  if (document.body.clientWidth <= 768) {
    offSet = -180
  }

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Fragment>
      <Header />

      <main className="content">
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
          py={2}
          px={[1, 1, 1, 5]}
        >
          <Box flex="1" mb={[2, 2, 2, 0]}>
            <Box
              mb={1}
              display="flex"
              alignItems="center"
              fontSize="10px"
              flexWrap="wrap"
              css={css`
                text-transform: uppercase;
              `}
            >
              <Text mb={0}>home</Text>
              <Icon icon="chevron-right" mx="10px" size="10px" />
              <Text mb={0}>life science</Text>
              <Icon icon="chevron-right" mx="10px" size="10px" />
              <Link to="/">thioredoxin activity assay kit</Link>
            </Box>
            <Title
              tag={1}
              css={css`
                margin-bottom: 0;
              `}
            >
              Thioredoxin Activity Assay Kit
            </Title>
            <Text fontSize="16px">by Redoxica, Inc.</Text>
            <Box
              display="flex"
              flexDirection={['column', 'column', 'column', 'column', 'row']}
              justifyContent="space-between"
              alignItems={['normal', 'normal', 'normal', 'normal', 'center']}
              mb={2}
            >
              <Box flexShrink={0} mr={[0, 0, 2]} mb={[1, 1, 1, 1, 0]}>
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
                    flexDirection={['column', 'column', 'row']}
                    alignItems={['normal', 'normal', 'center']}
                  >
                    <Box mr={1}>
                      <TrayPopup
                        inlineBlock
                        toggleLink
                        toggleTitle="Be the first to write a review"
                        headerBackBtnTitle="Back to product"
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
                    />
                  </Box>

                  <Box flexShrink={0}>
                    <Popovers
                      position="bottom"
                      content="Base on availability provided by the supplier."
                    >
                      <Image src={badge} alt="badge" width="175px" />
                    </Popovers>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box display="flex" alignItems="center" justifyContent="start">
                  <StyledBadgeImage src={badge2} alt="image" />
                  <StyledBadgeImage src={badge3} alt="image" />
                  <StyledBadgeImage src={badge4} alt="image" />
                </Box>
              </Box>
            </Box>

            <Box
              mb={1}
              top={['114px', '114px', '71px']}
              css={css`
                position: sticky;
                width: 100%;
                left: 0;
                background-color: ${theme.colors.white};
                border-bottom: 1px solid ${theme.colors.muted};
                z-index: 30;
                @media only screen and (max-width: 767px) {
                  overflow-x: auto;
                  white-space: nowrap;
                  -webkit-overflow-scrolling: touch;
                  font-size: 14px;
                }
              `}
            >
              {scrollToSectionsLinksData.map(item => (
                <StyledScrollTo
                  key={item.title}
                  activeClass="active"
                  offset={offSet}
                  spy={true}
                  to={item.to}
                  smooth={true}
                  duration={500}
                >
                  {item.title}
                </StyledScrollTo>
              ))}
            </Box>

            <Box mb={3} name="scrollToDescription">
              <Text
                css={css`
                  text-transform: uppercase;
                `}
                mb={0}
                fontFamily={theme.fontFamily.bold}
              >
                description
              </Text>

              <Divider my={1} />

              <Box mb={2}>
                <ReadMoreReact
                  text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
            nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
            eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
            bibendum sodales, augue velit cursus nunc. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
            nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
            eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
            bibendum sodales, augue velit cursus nunc."
                  min={30}
                  ideal={1000}
                  max={2000}
                  readMoreText="Read more about this product"
                />
              </Box>

              <Box
                display="grid"
                gridGap="20px"
                gridTemplateColumns={[
                  'repeat(1, 1fr)',
                  'repeat(1, 1fr)',
                  'repeat(1, 1fr)',
                  'repeat(1, 1fr)',
                  'repeat(2, 1fr)',
                ]}
              >
                <Box p={[1, 2]} bg="silverSecondary">
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
                    <b>Hazardous:</b> Yes, $35.00 Hazmat Free Applies
                  </Text>
                  <Text>
                    <b>Regulated:</b> Yes, DEA Controlled Substance
                  </Text>
                </Box>

                <Box
                  p={[1, 2]}
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="muted"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={descriptionCardImage}
                    alt="image"
                    display="block"
                    mx="auto"
                    maxWidth="200px"
                    width="100%"
                  />
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
                  <Text>
                    <b>Safety Statement:</b> For research use only.
                  </Text>
                </Box>

                <Box
                  p={[1, 2]}
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="muted"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={descriptionCardImage}
                    alt="image"
                    display="block"
                    mx="auto"
                    maxWidth="200px"
                    width="100%"
                  />
                </Box>
              </Box>
            </Box>

            <Box
              mb={3}
              display="grid"
              gridGap="20px"
              gridTemplateColumns={[
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(2,1fr)',
              ]}
            >
              <Box name="scrollToPricing">
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

                <Text mb={0} fontSize="12px" fontFamily={theme.fontFamily.bold}>
                  Catalog Number
                </Text>
                <Text mb={1}>T48172781-100MG</Text>

                <Text mb={0} fontSize="12px" fontFamily={theme.fontFamily.bold}>
                  Price
                </Text>
                <Text mb="5px">
                  <b>
                    <small>
                      <sup>$</sup>
                    </small>
                    20,800.<sup>50</sup>
                  </b>{' '}
                  <i>
                    (
                    <small>
                      <sup>$</sup>
                    </small>
                    2,000.51/GM)
                  </i>{' '}
                  <b
                    css={css`
                      color: ${theme.colors.success};
                      display: inline-flex;
                      align-items: center;
                    `}
                  >
                    <Icon icon="box" mr="5px" /> Free Shipping
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
                  gridTemplateColumns="repeat(2,1fr)"
                  alignItems="flex-end"
                >
                  <Box>
                    <Box my={1} display="flex" alignItems="center">
                      <Label mb={0} flexShrink="0" mr={1}>
                        Quantity:
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
                      />
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
                      pb="8px"
                    >
                      <TrayPopup
                        inlineBlock
                        icon="clipboard"
                        headerBackBtnTitle="Back to my account"
                        popoverContent="Base on availability provided by the supplier."
                        popoverPosition="bottom"
                      >
                        <Box px={[1, 1, 2, 3, 5]} pt={2} pb={5}>
                          <Box
                            mb={[1, 2]}
                            display="grid"
                            gridGap={['15px', '15px', '15px', '15px', '60px']}
                            gridTemplateColumns={[
                              'repeat(1, 1fr)',
                              'repeat(1,1fr)',
                              'repeat(1,1.2fr 1fr)',
                              'repeat(1,1.2fr 1fr)',
                              'repeat(1,1.2fr 1fr)',
                            ]}
                            alignItems="center"
                          >
                            <Text
                              fontSize={['20px', '22px']}
                              fontFamily={theme.fontFamily.bold}
                              mb="0"
                            >
                              Request a Quote
                            </Text>

                            <Box
                              display="flex"
                              flexDirection={['column', 'row']}
                            >
                              <Button
                                btnBlock
                                variant="primary"
                                flex="1"
                                mb={[1, 0]}
                              >
                                Generate Instant Quote
                              </Button>

                              <Button
                                btnBlock
                                variant="primary"
                                flex="1"
                                ml={[0, 1]}
                              >
                                Submit Quote Request
                              </Button>
                            </Box>
                          </Box>

                          <Text
                            fontSize="16px"
                            color="primary"
                            fontFamily={theme.fontFamily.bold}
                            my={0}
                          >
                            Thioredoxin Activity Assay Kit
                          </Text>
                          <Text fontSize="12px">by Redoxica, Inc.</Text>

                          <Box
                            display="grid"
                            gridGap="15px"
                            gridTemplateColumns={[
                              'repeat(1,1fr)',
                              'repeat(2,1fr)',
                              'repeat(2,1fr)',
                              'repeat(1,1.5fr 1.5fr 1fr 1fr)',
                              'repeat(1,1.5fr 1.5fr 1fr 1fr)',
                            ]}
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
                                catalog number
                              </Text>
                              <Text fontSize="12px" truncate>
                                t515421541-ss
                              </Text>
                            </Box>
                            <Box>
                              <Text
                                fontFamily={theme.fontFamily.bold}
                                mb={0}
                                fontSize="12px"
                              >
                                configuration
                              </Text>
                              <Text fontSize="12px" truncate>
                                50mg, advanced kit, 120v, glass, silver
                              </Text>
                            </Box>
                            <Box>
                              <Text
                                fontFamily={theme.fontFamily.bold}
                                mb={0}
                                fontSize="12px"
                              >
                                price
                              </Text>
                              <Text fontSize="12px" truncate>
                                $0.00
                              </Text>
                            </Box>
                            <Box>
                              <Label mb={0} fontSize="12px">
                                QUANTITY
                              </Label>
                              <Select
                                options={[
                                  { value: '1', label: '1' },
                                  { value: '2', label: '2' },
                                  { value: '3', label: '3' },
                                ]}
                                isSearchable={false}
                                menuPlacement="auto"
                                className="select select-small"
                                classNamePrefix="select"
                              />
                            </Box>
                          </Box>

                          <Divider my={3} />

                          <Box
                            display="grid"
                            gridGap={['15px', '15px', '15px', '25px', '45px']}
                            gridTemplateColumns={[
                              'repeat(1,1fr)',
                              'repeat(1,1fr)',
                              'repeat(2,1fr)',
                            ]}
                          >
                            <Box>
                              <Text
                                fontSize="16px"
                                fontFamily={theme.fontFamily.bold}
                              >
                                Shipping Address
                              </Text>

                              <Box mb={2}>
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
                                  placeholder="Choose an Existing Shipping Address"
                                />
                              </Box>
                              <Field
                                type="text"
                                title="Full Name"
                                id="field-full-name"
                              />
                              <Field
                                type="text"
                                title="Company / Institution"
                                id="field-company-institution"
                              />
                              <Field
                                type="text"
                                title="Address Line 1"
                                id="field-address-line-1"
                              />
                              <Field
                                type="text"
                                title="Address Line 2"
                                id="field-address-line-2"
                              />
                              <Field
                                type="text"
                                title="Building / Room / Mail Stop"
                                id="field-building"
                              />
                              <Field type="text" title="City" id="field-city" />
                              <Field
                                type="text"
                                title="State / Province / Region"
                                id="field-city"
                              />
                              <Field
                                type="text"
                                title="Zip Code / Postal Code"
                                id="field-zip"
                              />
                              <Field
                                type="email"
                                title="Email Address"
                                id="field-email-address"
                              />
                              <Field
                                type="tel"
                                title="Phone Number"
                                id="field-phone-number"
                              />
                              <Box mb={2}>
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
                                  placeholder="Select a Country"
                                />
                              </Box>
                              <Checkbox
                                title="Add this as ypur default shipping address."
                                id="checkbox-1"
                              />
                            </Box>

                            <Box>
                              <Text
                                fontSize="16px"
                                fontFamily={theme.fontFamily.bold}
                              >
                                BIlling Address
                              </Text>

                              <Box mb={2}>
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
                                  placeholder="Choose an Existing Shipping Address"
                                />
                              </Box>
                              <Field
                                type="text"
                                title="Full Name"
                                id="field-billing-full-name"
                              />
                              <Field
                                type="text"
                                title="Company / Institution"
                                id="field-billing-company-institution"
                              />
                              <Field
                                type="text"
                                title="Address Line 1"
                                id="field-billing-address-line-1"
                              />
                              <Field
                                type="text"
                                title="Address Line 2"
                                id="field-billing-address-line-2"
                              />
                              <Field
                                type="text"
                                title="Building / Room / Mail Stop"
                                id="field-billing-building"
                              />
                              <Field type="text" title="City" id="field-city" />
                              <Field
                                type="text"
                                title="State / Province / Region"
                                id="field-billing-city"
                              />
                              <Field
                                type="text"
                                title="Zip Code / Postal Code"
                                id="field-billing-zip"
                              />
                              <Field
                                type="email"
                                title="Email Address"
                                id="field-billing-email-address"
                              />
                              <Field
                                type="tel"
                                title="Phone Number"
                                id="field-billing-phone-number"
                              />
                              <Box mb={2}>
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
                                  placeholder="Select a Country"
                                />
                              </Box>
                              <Checkbox
                                title="Add this as ypur default billing address."
                                id="checkbox-2"
                              />
                            </Box>
                          </Box>
                        </Box>
                      </TrayPopup>

                      <TrayPopup
                        inlineBlock
                        icon="paper-plane"
                        headerBackBtnTitle="Back to my account"
                        popoverContent="Base on availability provided by the supplier."
                        popoverPosition="bottom"
                      >
                        <Box px={[1, 1, 2, 3, 5]} py={2}>
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
                              Technical Support Ticket
                            </Text>

                            <Box>
                              <Button btnBlock variant="primary">
                                Submit Ticket
                              </Button>
                            </Box>
                          </Box>

                          <Text fontSize="12px">
                            We do our best to respond to all questions within
                            1hr. Depending on the nature of your question, it
                            may require some additional time.
                          </Text>

                          <Field
                            type="text"
                            title="Request Details"
                            id="field-ticket-request-details"
                          />
                          <Field
                            type="text"
                            title="Catalog Number"
                            id="field-ticket-catalog-number"
                          />
                          <Field
                            type="text"
                            title="Lot Number"
                            id="field-ticket-lot-number"
                          />
                          <Field
                            type="text"
                            title="Purchase Date"
                            id="field-ticket-purchase-date"
                          />
                          <Field
                            type="text"
                            title="Usage Date"
                            id="field-ticket-usage-date"
                          />
                          <Field
                            type="text"
                            title="Email Address"
                            id="field-ticket-email-address"
                          />
                          <Field
                            type="text"
                            title="Phone Number"
                            id="field-ticket-phone-number"
                          />
                          <Field
                            type="text"
                            title="First Name"
                            id="field-ticket-first-name"
                          />
                          <Field
                            type="text"
                            title="Last Name"
                            id="field-ticket-last-name"
                          />

                          <DropZone mb={2} height="100%">
                            <Box {...getRootProps()}>
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop the files here ...</p>
                              ) : (
                                <Box display="flex" alignItems="center">
                                  <Icon
                                    icon="cloud-upload"
                                    mr={1}
                                    size="30px"
                                    color="#495057"
                                  />
                                  <Box>
                                    <Text
                                      fontSize="18px"
                                      mb={0}
                                      color="primary"
                                      fontFamily={theme.fontFamily.bold}
                                    >
                                      Choose a File
                                    </Text>
                                    <Text fontSize="12px" color="#495057">
                                      or drag and drop them here
                                    </Text>
                                  </Box>
                                </Box>
                              )}
                            </Box>
                          </DropZone>
                        </Box>
                      </TrayPopup>

                      <TrayPopup
                        inlineBlock
                        icon="file-alt"
                        headerBackBtnTitle="Back to my account"
                        popoverContent="Base on availability provided by the supplier."
                        popoverPosition="bottom"
                      >
                        <Box px={[1, 1, 2, 3, 5]} py={2}>
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
                              Request a Sample
                            </Text>

                            <Box>
                              <Button btnBlock variant="primary">
                                Add Sample to Cart
                              </Button>
                            </Box>
                          </Box>

                          <Text
                            fontSize="16px"
                            color="primary"
                            fontFamily={theme.fontFamily.bold}
                            my={0}
                          >
                            Thioredoxin Activity Assay Kit
                          </Text>
                          <Text fontSize="12px">by Redoxica, Inc.</Text>

                          <Box
                            display="grid"
                            gridGap={['15px', '25px']}
                            gridTemplateColumns={['repeat(1,1fr)']}
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
                                catalog number
                              </Text>
                              <Text fontSize="12px" truncate>
                                t515421541-ss
                              </Text>
                            </Box>
                            <Box>
                              <Text
                                fontFamily={theme.fontFamily.bold}
                                mb={0}
                                fontSize="12px"
                              >
                                configuration
                              </Text>
                              <Text fontSize="12px" truncate>
                                50mg, advanced kit, 120v, glass, silver
                              </Text>
                            </Box>
                            <Box>
                              <Text
                                fontFamily={theme.fontFamily.bold}
                                mb={0}
                                fontSize="12px"
                              >
                                price
                              </Text>
                              <Text fontSize="12px" truncate>
                                $0.00
                              </Text>
                            </Box>
                            <Box width={['100%', '100px']}>
                              <Label mb={0} fontSize="12px">
                                QUANTITY
                              </Label>
                              <Select
                                options={selectOptions}
                                isSearchable={false}
                                defaultValue={selectOptions[0]}
                                menuPlacement="auto"
                                className="select"
                                classNamePrefix="select"
                              />
                            </Box>
                          </Box>
                        </Box>
                      </TrayPopup>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
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
                    <StyledField id="styled-field-1" type="text" />
                    <StyledField id="styled-field-2" type="text" />
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
                    <StyledField id="styled-field-3" type="text" />
                    <StyledField id="styled-field-4" type="text" />
                  </Box>
                </form>
              </Box>
            </Box>

            <Box mb={3} name="scrollToSpecifications">
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
                      Integer tincidunt. Cras dapibus. Vivamus elementum semper
                      nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                      lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                      Phasellus viverra nulla ut metus varius laoreet. Quisque
                      rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                      Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                      rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                      sem quam semper libero, sit amet adipiscing sem neque sed
                      ipsum.
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

            <Box mb={3} name="scrollToAccessories">
              <Text
                css={css`
                  text-transform: uppercase;
                `}
                fontFamily={theme.fontFamily.bold}
              >
                accessories & companion products
              </Text>

              <Box
                p={[1, 2]}
                mb={1}
                borderWidth="1px"
                borderStyle="solid"
                borderColor="muted"
                display="flex"
                flexDirection="column"
                css={css`
                  @media (min-width: 1500px) {
                    flex-direction: row !important;
                    align-items: flex-end !important;
                  }
                `}
              >
                <Box
                  flex="1"
                  mr={[0, 0, 0, 2]}
                  display="flex"
                  mb={2}
                  css={css`
                    @media (min-width: 1500px) {
                      margin-bottom: 0 !important;
                      margin-right: 30px !important;
                    }
                  `}
                >
                  <Box
                    width="110px"
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor="muted"
                    flexShrink="0"
                    mr={2}
                    alignSelf="flex-start"
                  >
                    <Image src={productImage} alt="image" width="100%" />
                  </Box>

                  <Box flex="1">
                    <Text
                      color="primary"
                      mb={0}
                      fontFamily={theme.fontFamily.bold}
                      fontSize={2}
                    >
                      Eppendorf 548/456 Rotor with TI Line Compatible with 547R
                      Line (220V)
                    </Text>
                    <Text fontSize="12px">by Eppendorf</Text>
                    <Text mb="5px">
                      <b>
                        <small>
                          <sup>$</sup>
                        </small>
                        20,800.<sup>50</sup>
                      </b>{' '}
                      <i>
                        (
                        <small>
                          <sup>$</sup>
                        </small>
                        2,000.51/GM)
                      </i>
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
                        mr="5px"
                        color={theme.colors.success}
                      />
                      Estimate Delivery - 04/25/2015
                    </Text>
                  </Box>
                </Box>
                <Box
                  flexShrink={0}
                  minWidth={['100%', '100%', '100%', '380px']}
                >
                  <Box
                    display="grid"
                    gridGap={['15px', '30px']}
                    gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
                    alignItems="center"
                  >
                    <Box
                      display="grid"
                      gridGap="5px"
                      gridTemplateColumns="repeat(2,1fr)"
                      alignItems="center"
                    >
                      <Label mb={0}>Quantity:</Label>
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
                      <Button variant="primary" btnBlock>
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                p={[1, 2]}
                mb={1}
                borderWidth="1px"
                borderStyle="solid"
                borderColor="muted"
                display="flex"
                flexDirection="column"
                css={css`
                  @media (min-width: 1500px) {
                    flex-direction: row !important;
                    align-items: flex-end !important;
                  }
                `}
              >
                <Box
                  flex="1"
                  mr={[0, 0, 0, 2]}
                  display="flex"
                  mb={2}
                  css={css`
                    @media (min-width: 1500px) {
                      margin-bottom: 0 !important;
                      margin-right: 30px !important;
                    }
                  `}
                >
                  <Box
                    width="110px"
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor="muted"
                    flexShrink="0"
                    mr={2}
                    alignSelf="flex-start"
                  >
                    <Image src={productImage} alt="image" width="100%" />
                  </Box>

                  <Box flex="1">
                    <Text
                      color="primary"
                      mb={0}
                      fontFamily={theme.fontFamily.bold}
                      fontSize={2}
                    >
                      Eppendorf 548/456 Rotor with TI Line Compatible with 547R
                      Line (220V)
                    </Text>
                    <Text fontSize="12px">by Eppendorf</Text>
                    <Text mb="5px">
                      <b>
                        <small>
                          <sup>$</sup>
                        </small>
                        20,800.<sup>50</sup>
                      </b>{' '}
                      <i>
                        (
                        <small>
                          <sup>$</sup>
                        </small>
                        2,000.51/GM)
                      </i>
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
                        mr="5px"
                        color={theme.colors.success}
                      />
                      Estimate Delivery - 04/25/2015
                    </Text>
                  </Box>
                </Box>
                <Box
                  flexShrink={0}
                  minWidth={['100%', '100%', '100%', '380px']}
                >
                  <Box
                    display="grid"
                    gridGap={['15px', '30px']}
                    gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
                    alignItems="center"
                  >
                    <Box
                      display="grid"
                      gridGap="5px"
                      gridTemplateColumns="repeat(2,1fr)"
                      alignItems="center"
                    >
                      <Label mb={0}>Quantity:</Label>
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
                      <Button variant="primary" btnBlock>
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <StyledViewAllButton>
                View all accessories & companion product (2)
              </StyledViewAllButton>
            </Box>

            <Box mb={3}>
              <Text
                css={css`
                  text-transform: uppercase;
                `}
                fontFamily={theme.fontFamily.bold}
              >
                questions & answers
              </Text>
              <Box
                p={[1, 2]}
                mb={2}
                bg="silverSecondary"
                display="flex"
                alignItems={['normal', 'normal', 'normal', 'normal', 'center']}
                flexDirection={['column', 'column', 'column', 'column', 'row']}
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Box mr={[0, 0, 0, 0, 2]} mb={[2, 2, 2, 2, 0]} flexShrink={0}>
                  <Box
                    display="grid"
                    gridGap={['15px', '15px', '25px']}
                    gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                  >
                    <Box
                      bg="#c3c3c3"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                      py={2}
                      px={5}
                      fontFamily={theme.fontFamily.bold}
                    >
                      <Text mb={0} fontSize="20px">
                        541
                      </Text>
                      <Text>Questions</Text>
                    </Box>
                    <Box
                      bg="#c3c3c3"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                      py={2}
                      px={5}
                      fontFamily={theme.fontFamily.bold}
                    >
                      <Text mb={0} fontSize="20px">
                        547
                      </Text>
                      <Text>Questions</Text>
                    </Box>
                  </Box>
                </Box>

                <Box flexShrink={0}>
                  <TrayPopup
                    inlineBlock
                    toggleVariant="primary"
                    toggleTitle="Ask a New Question"
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
                          Ask a Question
                        </Text>

                        <Button variant="primary" btnBlock>
                          Submit Question
                        </Button>
                      </Box>

                      <Field type="text" title="Question" id="field-question" />
                      <Field
                        type="email"
                        title="Email Address"
                        id="field-email-address"
                      />
                      <Field
                        type="tel"
                        title="Phone Number"
                        id="field-phone-number"
                      />
                      <Field
                        type="text"
                        title="First Name"
                        id="field-first-name"
                      />
                      <Field
                        type="text"
                        title="Last Name"
                        id="field-last-name"
                      />
                      <Field
                        type="text"
                        title="Company / Institution"
                        id="field-company-adn-institution"
                      />

                      <DropZone mb={2} height="100%">
                        <Box {...getRootProps()}>
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here ...</p>
                          ) : (
                            <Box display="flex" alignItems="center">
                              <Icon
                                icon="cloud-upload"
                                mr={1}
                                size="30px"
                                color="#495057"
                              />
                              <Box>
                                <Text
                                  fontSize="18px"
                                  mb={0}
                                  color="primary"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Choose a File
                                </Text>
                                <Text fontSize="12px" color="#495057">
                                  or drag and drop them here
                                </Text>
                              </Box>
                            </Box>
                          )}
                        </Box>
                      </DropZone>

                      <Text fontSize="12px">
                        We do our best to respond to all questions within 1hr.
                        Depending on the nature of your question, it may require
                        some additional time.
                      </Text>
                    </Box>
                  </TrayPopup>
                </Box>
              </Box>

              <Question
                toggleBtnTitle="Are the rotors included?"
                date="Asked on May 22, 2017"
                answerBtnTitle="Answer this Question"
              >
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </Text>
                <TitleBox bg="warning">Official Supplier Response</TitleBox>

                <Text fontSize={0} mb={1} fontFamily={theme.fontFamily.bold}>
                  May 26, 2017
                </Text>
                <HelpfulBox>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </HelpfulBox>

                <Text mb={0} fontFamily={theme.fontFamily.bold}>
                  Lab Technician at UCLA
                </Text>
                <Text fontSize={0} mb={1} fontFamily={theme.fontFamily.bold}>
                  May 26, 2017
                </Text>
                <HelpfulBox>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </HelpfulBox>
              </Question>

              <Question
                toggleBtnTitle="Would it be possible to position the centrifuge on a glass, rolling table that is anchored to as, rolling table that is anchored to a floating resin table top surface?"
                date="Asked on May 22, 2017"
                answerBtnTitle="Answer this Question"
              >
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </Text>
                <Box
                  display="inline-block"
                  bg="warning"
                  fontSize={0}
                  py="2px"
                  px="10px"
                  mb="4px"
                  fontFamily={theme.fontFamily.bold}
                >
                  Official Supplier Response
                </Box>

                <Text fontSize={0} mb={1} fontFamily={theme.fontFamily.bold}>
                  May 26, 2017
                </Text>
                <HelpfulBox>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </HelpfulBox>

                <Text mb={0} fontFamily={theme.fontFamily.bold}>
                  Lab Technician at UCLA
                </Text>
                <Text fontSize={0} mb={1} fontFamily={theme.fontFamily.bold}>
                  May 26, 2017
                </Text>
                <HelpfulBox>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </HelpfulBox>
              </Question>

              <StyledViewAllButton>
                View all questions (489)
              </StyledViewAllButton>
            </Box>

            <Box mb={3} name="scrollToReviews">
              <Text
                css={css`
                  text-transform: uppercase;
                `}
                fontFamily={theme.fontFamily.bold}
              >
                reviews & ratings
              </Text>

              <Box p={[1, 2]} bg="silverSecondary" mb={2}>
                <Box
                  display="flex"
                  alignItems={['normal', 'center']}
                  flexDirection={['column', 'row']}
                  justifyContent="space-between"
                  mb={2}
                >
                  <Box flexShrink={0} mb={[1, 0]} mr={[0, 2]}>
                    <Box mb="10px">
                      <Rating
                        readonly
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
                    <Text>4.5 out of 5 stars</Text>
                  </Box>

                  <Box flexShrink={0}>
                    <TrayPopup
                      inlineBlock
                      toggleVariant="primary"
                      toggleTitle="Write a Review"
                      headerBackBtnTitle="Back to product"
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
                            readonly
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
                </Box>

                <Box
                  display="grid"
                  gridGap={['15px', '15px', '30px']}
                  gridTemplateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(1, 1fr)',
                    'repeat(1,280px 1fr)',
                  ]}
                >
                  <Box
                    display="grid"
                    gridGap={['5px']}
                    gridTemplateColumns="'repeat(1, 1fr)'"
                  >
                    <Box display="flex" alignItems="center">
                      <Box flexShrink={0} display="flex" alignItems="center">
                        5{' '}
                        <Icon
                          icon="star-full"
                          color={theme.colors.primary}
                          css={css`
                            margin-left: 5px;
                          `}
                        />
                      </Box>

                      <Box
                        flex="1"
                        mx="10px"
                        height="10px"
                        bg="#cccccc"
                        position="relative"
                      >
                        <Box
                          height="100%"
                          position="absolute"
                          top="0"
                          left="0"
                          bg="primary"
                          width="80%"
                        />
                      </Box>

                      <Box flexShrink={0} minWidth="25px">
                        50%
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center">
                      <Box flexShrink={0} display="flex" alignItems="center">
                        4{' '}
                        <Icon
                          icon="star-full"
                          color={theme.colors.primary}
                          css={css`
                            margin-left: 5px;
                          `}
                        />
                      </Box>

                      <Box
                        flex="1"
                        mx="10px"
                        height="10px"
                        bg="#cccccc"
                        position="relative"
                      >
                        <Box
                          height="100%"
                          position="absolute"
                          top="0"
                          left="0"
                          bg="primary"
                          width="35%"
                        />
                      </Box>

                      <Box flexShrink={0} minWidth="25px">
                        20%
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center">
                      <Box flexShrink={0} display="flex" alignItems="center">
                        3{' '}
                        <Icon
                          icon="star-full"
                          color={theme.colors.primary}
                          css={css`
                            margin-left: 5px;
                          `}
                        />
                      </Box>

                      <Box
                        flex="1"
                        mx="10px"
                        height="10px"
                        bg="#cccccc"
                        position="relative"
                      >
                        <Box
                          height="100%"
                          position="absolute"
                          top="0"
                          left="0"
                          bg="primary"
                          width="20%"
                        />
                      </Box>

                      <Box flexShrink={0} minWidth="25px">
                        20%
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center">
                      <Box flexShrink={0} display="flex" alignItems="center">
                        2{' '}
                        <Icon
                          icon="star-full"
                          color={theme.colors.primary}
                          css={css`
                            margin-left: 5px;
                          `}
                        />
                      </Box>

                      <Box
                        flex="1"
                        mx="10px"
                        height="10px"
                        bg="#cccccc"
                        position="relative"
                      >
                        <Box
                          height="100%"
                          position="absolute"
                          top="0"
                          left="0"
                          bg="primary"
                          width="10%"
                        />
                      </Box>

                      <Box flexShrink={0} minWidth="25px">
                        5%
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center">
                      <Box flexShrink={0} display="flex" alignItems="center">
                        1{' '}
                        <Icon
                          icon="star-full"
                          color={theme.colors.primary}
                          css={css`
                            margin-left: 5px;
                          `}
                        />
                      </Box>

                      <Box
                        flex="1"
                        mx="10px"
                        height="10px"
                        bg="#cccccc"
                        position="relative"
                      >
                        <Box
                          height="100%"
                          position="absolute"
                          top="0"
                          left="0"
                          bg="primary"
                          width="15%"
                        />
                      </Box>

                      <Box flexShrink={0} minWidth="25px">
                        5%
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    overflow="hidden"
                    css={css`
                      .swiper-slide {
                        opacity: 0 !important;
                        &-active {
                          opacity: 1 !important;
                        }
                      }
                      .swiper-pagination-bullets {
                        bottom: 5px !important;
                        display: flex;
                        justify-content: flex-end;
                      }
                      .swiper-pagination-bullet {
                        background-color: ${theme.colors.black} !important;
                        width: 10px;
                        height: 10px;
                        opacity: 1 !important;
                        &-active {
                          background-color: ${theme.colors.primary} !important;
                        }
                      }
                      .swiper-container {
                        padding-bottom: 30px;
                      }
                    `}
                  >
                    <Swiper {...FeedbackSwiperParams}>
                      {galleryFeedbackData.map((item, index) => (
                        <Box key={index}>{item.feedback}</Box>
                      ))}
                    </Swiper>
                  </Box>
                </Box>
              </Box>

              <FeedBack>
                <Box mb={1}>
                  <Rating
                    readonly
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

                <Text color="primary" fontFamily={theme.fontFamily.bold}>
                  This assay performed optimally in measuring the activity of
                  Trx in porcine header samples assay performed This assay
                  performed optimally in measuring the activity of Trx in
                  porcine header samples assay performed This assay performed
                  optimally in measuring the activity of Trx in porcine header
                  samples assay performed
                </Text>
                <Text fontSize="12px" mb="10px">
                  By{' '}
                  <b
                    css={css`
                      color: ${theme.colors.muted};
                    `}
                  >
                    Kundan D.
                  </b>{' '}
                  on November 29, 2014 from{' '}
                  <Anchor href="#" bold>
                    Redoxica, Inc
                  </Anchor>
                </Text>
                <Text
                  color="success"
                  fontSize="12px"
                  fontFamily={theme.fontFamily.bold}
                >
                  Verified Purchase from Redoxica, Inc.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium.
                </Text>
                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '60px', '160px']}
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                  ]}
                  mb="10px"
                >
                  <Box>
                    <Text fontFamily={theme.fontFamily.bold} mb="10px">
                      Images and Video
                    </Text>
                    <Box display="flex" flexWrap="wrap">
                      <StyledImageBox
                        src="https://picsum.photos/id/1/400/400"
                        alt="image"
                      />
                      <StyledImageBox
                        src="https://picsum.photos/id/1/400/400"
                        alt="image"
                      />
                      <StyledImageBox
                        src="https://picsum.photos/id/1/400/400"
                        alt="image"
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Text fontFamily={theme.fontFamily.bold} mb="10px">
                      Images and Video
                    </Text>

                    <Anchor
                      href="/"
                      display="flex"
                      alignItems="center"
                      py="5px"
                    >
                      <Icon
                        icon="file-pdf"
                        color={theme.colors.danger}
                        mr="5px"
                        size="18px"
                      />
                      TR-7011K.PDF
                    </Anchor>

                    <Anchor
                      href="/"
                      display="flex"
                      alignItems="center"
                      py="5px"
                    >
                      <Icon
                        icon="file-pdf"
                        color={theme.colors.danger}
                        mr="5px"
                        size="18px"
                      />
                      TR-7011K.PDF
                    </Anchor>
                  </Box>
                </Box>

                <Comment toggleBtnTitle="View Comments (47)">
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    justifyContent="space-between"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                    mb={1}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      mb={[1, 1, 1, 1, 0]}
                      flexShrink={0}
                      mr={[0, 0, 0, 0, 2]}
                    >
                      <TrayPopup
                        inlineBlock
                        toggleBtnSm
                        toggleTitle="Write a Comment"
                        headerBackBtnTitle="Back to product"
                      >
                        <Box px={[1, 1, 2, 3, 5]} py={2}>
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
                              Write a Comment
                            </Text>

                            <Box>
                              <Button btnBlock variant="primary">
                                Submit Comment
                              </Button>
                            </Box>
                          </Box>

                          <Field
                            type="text"
                            title="Comment"
                            id="field-product-comment-1"
                          />

                          <Checkbox
                            title="Get email notification on comments made about this review"
                            id="checkbox-email-notification-1"
                          />
                        </Box>
                      </TrayPopup>
                    </Box>

                    <Box mb={['10px', 0]}>
                      <Box
                        fontSize="12px"
                        display="inline-block"
                        fontFamily={theme.fontFamily.bold}
                      >
                        Was this review hepful to you?
                      </Box>
                      <Box display="inline-block" mx={1}>
                        <StyledHelpfulButton>Yes</StyledHelpfulButton>
                        <StyledHelpfulButton>No</StyledHelpfulButton>
                      </Box>
                      <Anchor
                        href="/"
                        fontSize="12px"
                        display={['block', 'inline-block']}
                        fontFamily={theme.fontFamily.bold}
                        color={theme.colors.black}
                      >
                        Report This Review
                      </Anchor>
                    </Box>
                  </Box>
                  <Box fontSize="12px" mb="10px">
                    By{' '}
                    <b
                      css={css`
                        color: ${theme.colors.muted};
                      `}
                    >
                      Kundan D.
                    </b>{' '}
                    on November 29, 2014 from{' '}
                    <Anchor href="#" bold>
                      Redoxica, Inc
                    </Anchor>
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium.
                  </Box>
                  <Box height="30px" />
                  <Box fontSize="12px" mb="10px">
                    <TitleBox bg="warning" mr="10px">
                      Official Supplier Response
                    </TitleBox>
                    on November 29, 2014 from{' '}
                    <Anchor href="#" bold>
                      Redoxica, Inc
                    </Anchor>
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium.
                  </Box>
                </Comment>
              </FeedBack>

              <FeedBack>
                <Box mb={1}>
                  <Rating
                    readonly
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

                <Text color="primary" fontFamily={theme.fontFamily.bold}>
                  This assay performed optimally in measuring the activity of
                  Trx in porcine header samples assay performed This assay
                  performed optimally in measuring the activity of Trx in
                  porcine header samples assay performed This assay performed
                  optimally in measuring the activity of Trx in porcine header
                  samples assay performed
                </Text>
                <Text fontSize="12px" mb="10px">
                  By{' '}
                  <b
                    css={css`
                      color: ${theme.colors.muted};
                    `}
                  >
                    Kundan D.
                  </b>{' '}
                  on November 29, 2014 from{' '}
                  <Anchor href="#" bold>
                    Redoxica, Inc
                  </Anchor>
                </Text>
                <Text
                  color="success"
                  fontSize="12px"
                  fontFamily={theme.fontFamily.bold}
                >
                  Verified Purchase from Redoxica, Inc.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium.
                </Text>
                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '60px', '160px']}
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                  ]}
                  mb="10px"
                >
                  <Box>
                    <Text fontFamily={theme.fontFamily.bold} mb="10px">
                      Images and Video
                    </Text>
                    <Box display="flex" flexWrap="wrap">
                      <StyledImageBox
                        src="https://picsum.photos/id/1/400/400"
                        alt="image"
                      />
                      <StyledImageBox
                        src="https://picsum.photos/id/1/400/400"
                        alt="image"
                      />
                      <StyledImageBox
                        src="https://picsum.photos/id/1/400/400"
                        alt="image"
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Text fontFamily={theme.fontFamily.bold} mb="10px">
                      Images and Video
                    </Text>

                    <Anchor
                      href="/"
                      display="flex"
                      alignItems="center"
                      py="5px"
                    >
                      <Icon
                        icon="file-pdf"
                        color={theme.colors.danger}
                        mr="5px"
                        size="18px"
                      />
                      TR-7011K.PDF
                    </Anchor>

                    <Anchor
                      href="/"
                      display="flex"
                      alignItems="center"
                      py="5px"
                    >
                      <Icon
                        icon="file-pdf"
                        color={theme.colors.danger}
                        mr="5px"
                        size="18px"
                      />
                      TR-7011K.PDF
                    </Anchor>
                  </Box>
                </Box>

                <Comment toggleBtnTitle="View Comments (47)">
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    justifyContent="space-between"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                    mb={1}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      mb={[1, 1, 1, 1, 0]}
                      flexShrink={0}
                      mr={[0, 0, 0, 0, 2]}
                    >
                      <TrayPopup
                        inlineBlock
                        toggleBtnSm
                        toggleTitle="Write a Comment"
                        headerBackBtnTitle="Back to product"
                      >
                        <Box px={[1, 1, 2, 3, 5]} py={2}>
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
                              Write a Comment
                            </Text>

                            <Box>
                              <Button btnBlock variant="primary">
                                Submit Comment
                              </Button>
                            </Box>
                          </Box>

                          <Field
                            type="text"
                            title="Comment"
                            id="field-product-comment-2"
                          />

                          <Checkbox
                            title="Get email notification on comments made about this review"
                            id="checkbox-email-notification-2"
                          />
                        </Box>
                      </TrayPopup>
                    </Box>

                    <Box mb={['10px', 0]}>
                      <Box
                        fontSize="12px"
                        display="inline-block"
                        fontFamily={theme.fontFamily.bold}
                      >
                        Was this review hepful to you?
                      </Box>
                      <Box display="inline-block" mx={1}>
                        <StyledHelpfulButton>Yes</StyledHelpfulButton>
                        <StyledHelpfulButton>No</StyledHelpfulButton>
                      </Box>
                      <Anchor
                        href="/"
                        fontSize="12px"
                        display={['block', 'inline-block']}
                        fontFamily={theme.fontFamily.bold}
                        color={theme.colors.black}
                      >
                        Report This Review
                      </Anchor>
                    </Box>
                  </Box>
                  <Box fontSize="12px" mb="10px">
                    By{' '}
                    <b
                      css={css`
                        color: ${theme.colors.muted};
                      `}
                    >
                      Kundan D.
                    </b>{' '}
                    on November 29, 2014 from{' '}
                    <Anchor href="#" bold>
                      Redoxica, Inc
                    </Anchor>
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium.
                  </Box>
                  <Box height="30px" />
                  <Box fontSize="12px" mb="10px">
                    <TitleBox bg="warning" mr="10px">
                      Official Supplier Response
                    </TitleBox>
                    on November 29, 2014 from{' '}
                    <Anchor href="#" bold>
                      Redoxica, Inc
                    </Anchor>
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium.
                  </Box>
                </Comment>
              </FeedBack>

              <FeedBack>
                <Box mb={1}>
                  <Rating
                    readonly
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

                <Text color="primary" fontFamily={theme.fontFamily.bold}>
                  This assay performed optimally in measuring the activity of
                  Trx in porcine header samples assay performed This assay
                  performed optimally in measuring the activity of Trx in
                  porcine header samples assay performed This assay performed
                  optimally in measuring the activity of Trx in porcine header
                  samples assay performed
                </Text>
                <Text fontSize="12px" mb="10px">
                  By{' '}
                  <b
                    css={css`
                      color: ${theme.colors.muted};
                    `}
                  >
                    Kundan D.
                  </b>{' '}
                  on November 29, 2014 from{' '}
                  <Anchor href="#" bold>
                    Redoxica, Inc
                  </Anchor>
                </Text>
                <Text
                  color="success"
                  fontSize="12px"
                  fontFamily={theme.fontFamily.bold}
                >
                  Verified Purchase from Redoxica, Inc.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium.
                </Text>
                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '60px', '160px']}
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                  ]}
                  mb="10px"
                >
                  <Box>
                    <Text fontFamily={theme.fontFamily.bold} mb="10px">
                      Images and Video
                    </Text>
                    <Box display="flex" flexWrap="wrap">
                      <StyledImageBox
                        src="https://picsum.photos/id/1/400/400"
                        alt="image"
                      />
                      <StyledImageBox
                        src="https://picsum.photos/id/1/400/400"
                        alt="image"
                      />
                      <StyledImageBox
                        src="https://picsum.photos/id/1/400/400"
                        alt="image"
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Text fontFamily={theme.fontFamily.bold} mb="10px">
                      Images and Video
                    </Text>

                    <Anchor
                      href="/"
                      display="flex"
                      alignItems="center"
                      py="5px"
                    >
                      <Icon
                        icon="file-pdf"
                        color={theme.colors.danger}
                        mr="5px"
                        size="18px"
                      />
                      TR-7011K.PDF
                    </Anchor>

                    <Anchor
                      href="/"
                      display="flex"
                      alignItems="center"
                      py="5px"
                    >
                      <Icon
                        icon="file-pdf"
                        color={theme.colors.danger}
                        mr="5px"
                        size="18px"
                      />
                      TR-7011K.PDF
                    </Anchor>
                  </Box>
                </Box>

                <Comment toggleBtnTitle="View Comments (47)">
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    justifyContent="space-between"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                    mb={1}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      mb={[1, 1, 1, 1, 0]}
                      flexShrink={0}
                      mr={[0, 0, 0, 0, 2]}
                    >
                      <TrayPopup
                        inlineBlock
                        toggleBtnSm
                        toggleTitle="Write a Comment"
                        headerBackBtnTitle="Back to product"
                      >
                        <Box px={[1, 1, 2, 3, 5]} py={2}>
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
                              Write a Comment
                            </Text>

                            <Box>
                              <Button btnBlock variant="primary">
                                Submit Comment
                              </Button>
                            </Box>
                          </Box>

                          <Field
                            type="text"
                            title="Comment"
                            id="field-product-comment-3"
                          />

                          <Checkbox
                            title="Get email notification on comments made about this review"
                            id="checkbox-email-notification-3"
                          />
                        </Box>
                      </TrayPopup>
                    </Box>

                    <Box mb={['10px', 0]}>
                      <Box
                        fontSize="12px"
                        display="inline-block"
                        fontFamily={theme.fontFamily.bold}
                      >
                        Was this review hepful to you?
                      </Box>
                      <Box display="inline-block" mx={1}>
                        <StyledHelpfulButton>Yes</StyledHelpfulButton>
                        <StyledHelpfulButton>No</StyledHelpfulButton>
                      </Box>
                      <Anchor
                        href="/"
                        fontSize="12px"
                        display={['block', 'inline-block']}
                        fontFamily={theme.fontFamily.bold}
                        color={theme.colors.black}
                      >
                        Report This Review
                      </Anchor>
                    </Box>
                  </Box>
                  <Box fontSize="12px" mb="10px">
                    By{' '}
                    <b
                      css={css`
                        color: ${theme.colors.muted};
                      `}
                    >
                      Kundan D.
                    </b>{' '}
                    on November 29, 2014 from{' '}
                    <Anchor href="#" bold>
                      Redoxica, Inc
                    </Anchor>
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium.
                  </Box>
                  <Box height="30px" />
                  <Box fontSize="12px" mb="10px">
                    <TitleBox bg="warning" mr="10px">
                      Official Supplier Response
                    </TitleBox>
                    on November 29, 2014 from{' '}
                    <Anchor href="#" bold>
                      Redoxica, Inc
                    </Anchor>
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium.
                  </Box>
                </Comment>
              </FeedBack>
            </Box>

            <Box mb={3} name="scrollToCitations">
              <Text
                css={css`
                  text-transform: uppercase;
                `}
                fontFamily={theme.fontFamily.bold}
              >
                citations{' '}
                <span
                  css={css`
                    font-family: ${theme.fontFamily.base};
                  `}
                >
                  (541)
                </span>
              </Text>

              {citationsData.map((citation, index) => (
                <Box
                  key={index}
                  p={[1, 2]}
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="muted"
                  bg="#fcfcfc"
                  mb={1}
                >
                  <Text>
                    <Anchor href={citation.href}>{citation.linkText}</Anchor>
                  </Text>
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    justifyContent="space-between"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Box
                      display="grid"
                      gridGap={['15px', '15px', '15px', '30px', '60px']}
                      gridTemplateColumns={[
                        'repeat(1, 1fr)',
                        'repeat(2, 1fr)',
                        'repeat(2, 1fr)',
                        'repeat(2, 1fr)',
                        'repeat(3, 1fr)',
                      ]}
                      flex="1"
                      mb={[1, 1, 1, 1, 0]}
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text mb="0">
                        publication ID: {citation.publicationID}
                      </Text>
                      <Text mb="0">product usage: {citation.productUsage}</Text>
                    </Box>

                    <Box flexShrink="0">
                      <Image src={citation.imageUrl} alt={citation.imageAlt} />
                    </Box>
                  </Box>
                </Box>
              ))}

              <StyledViewAllButton>
                View more citations (334)
              </StyledViewAllButton>
            </Box>

            <Box name="scrollToReferences">
              <Text
                css={css`
                  text-transform: uppercase;
                `}
                fontFamily={theme.fontFamily.bold}
              >
                references{' '}
                <span
                  css={css`
                    font-family: ${theme.fontFamily.base};
                  `}
                >
                  (48)
                </span>
              </Text>

              {citationsData.map((citation, index) => (
                <Box
                  key={index}
                  p={[1, 2]}
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="muted"
                  bg="#fcfcfc"
                  mb={1}
                >
                  <Text>
                    <Anchor href={citation.href}>{citation.linkText}</Anchor>
                  </Text>
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    justifyContent="space-between"
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Box
                      display="grid"
                      gridGap={['15px', '15px', '15px', '30px', '60px']}
                      gridTemplateColumns={[
                        'repeat(1, 1fr)',
                        'repeat(2, 1fr)',
                        'repeat(2, 1fr)',
                        'repeat(2, 1fr)',
                        'repeat(3, 1fr)',
                      ]}
                      flex="1"
                      mb={[1, 1, 1, 1, 0]}
                      css={css`
                        text-transform: uppercase;
                      `}
                    >
                      <Text mb="0">
                        publication ID: {citation.publicationID}
                      </Text>
                      <Text mb="0">product usage: {citation.productUsage}</Text>
                    </Box>

                    <Box flexShrink="0">
                      <Image src={citation.imageUrl} alt={citation.imageAlt} />
                    </Box>
                  </Box>
                </Box>
              ))}

              <StyledViewAllButton>
                View more citations (334)
              </StyledViewAllButton>
            </Box>
          </Box>

          <Box
            flexShrink={0}
            width={['100%', '100%', '100%', '370px']}
            ml={['0', '0', '0', '25px']}
          >
            <Box mb={3}>
              <Box mb={1}>
                <Swiper {...gallerySwiperParams}>
                  {galleryData.map((galleryData, index) => (
                    <Box key={index}>
                      <Image
                        src={galleryData.imageSrc}
                        alt={galleryData.alt}
                        width="100%"
                      />
                    </Box>
                  ))}
                </Swiper>
              </Box>

              <Swiper {...thumbnailSwiperParams}>
                {galleryData.map((galleryData, index) => (
                  <StyledGalleryThumbnailsItem key={index}>
                    <Image
                      src={galleryData.imageSrc}
                      alt={galleryData.alt}
                      width="100%"
                    />
                  </StyledGalleryThumbnailsItem>
                ))}
              </Swiper>
            </Box>

            <Title tag={5}>TECHNICAL DOCUMENTS</Title>

            <Divider my={1} />

            <Box mb={1}>
              <Text mb="5px">
                <b>Datasheet</b>
              </Text>

              <Anchor href="/" display="flex" alignItems="center" py="5px">
                <Icon
                  icon="file-pdf"
                  color={theme.colors.danger}
                  mr="5px"
                  size="18px"
                />
                TR-7011K.PDF
              </Anchor>

              <Anchor href="/" display="flex" alignItems="center" py="5px">
                <Icon
                  icon="file-pdf"
                  color={theme.colors.danger}
                  mr="5px"
                  size="18px"
                />
                TR-7011K.PDF
              </Anchor>

              <StyledViewAllButton>View all datasheets (2)</StyledViewAllButton>
            </Box>

            <Box mb={1}>
              <Text mb="5px">
                <b>COA</b>
              </Text>

              <Anchor href="/" display="flex" alignItems="center" py="5px">
                <Icon
                  icon="file-pdf"
                  color={theme.colors.danger}
                  mr="5px"
                  size="18px"
                />
                TR-7011K.PDF
              </Anchor>

              <Anchor href="/" display="flex" alignItems="center" py="5px">
                <Icon
                  icon="file-pdf"
                  color={theme.colors.danger}
                  mr="5px"
                  size="18px"
                />
                TR-7011K.PDF
              </Anchor>

              <StyledViewAllButton>View all datasheets (2)</StyledViewAllButton>
            </Box>

            <Box mb={[3, 3, 4, 5]}>
              <Text mb="5px">
                <b>Protocol</b>
              </Text>

              <Anchor href="/" display="flex" alignItems="center" py="5px">
                <Icon
                  icon="file-pdf"
                  color={theme.colors.danger}
                  mr="5px"
                  size="18px"
                />
                TR-7011K.PDF
              </Anchor>

              <Anchor href="/" display="flex" alignItems="center" py="5px">
                <Icon
                  icon="file-pdf"
                  color={theme.colors.danger}
                  mr="5px"
                  size="18px"
                />
                TR-7011K.PDF
              </Anchor>

              <StyledViewAllButton>View all datasheets (2)</StyledViewAllButton>
            </Box>

            <Title tag={5}>ORDER FROM ANOTHER SUPPLIER</Title>

            <Divider my={1} />

            <Box mb={2}>
              <Text mb={0}>
                <b>
                  <small>
                    <sup>$</sup>
                  </small>
                  20,800.<sup>50</sup>
                </b>
                <i>
                  (
                  <small>
                    <sup>$</sup>
                  </small>
                  2.000.51/GM)
                </i>
              </Text>
              <Text fontSize="11px" mb="10px">
                by Redoxica, Inc.
              </Text>
              <Box
                display="grid"
                gridGap="30px"
                gridTemplateColumns="repeat(2,1fr)"
                alignItems="center"
              >
                <Box
                  display="grid"
                  gridGap="5px"
                  gridTemplateColumns="repeat(2,1fr)"
                  alignItems="center"
                >
                  <Label mb={0}>Quantity:</Label>
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
                  <Button variant="primary" btnBlock>
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box mb={2}>
              <Text mb={0}>
                <b>
                  <small>
                    <sup>$</sup>
                  </small>
                  20,800.<sup>50</sup>
                </b>
                <i>
                  (
                  <small>
                    <sup>$</sup>
                  </small>
                  2.000.51/GM)
                </i>
              </Text>
              <Text fontSize="11px" mb="10px">
                by Redoxica, Inc.
              </Text>
              <Box
                display="grid"
                gridGap="30px"
                gridTemplateColumns="repeat(2,1fr)"
                alignItems="center"
              >
                <Box
                  display="grid"
                  gridGap="5px"
                  gridTemplateColumns="repeat(2,1fr)"
                  alignItems="center"
                >
                  <Label mb={0}>Quantity:</Label>
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
                  <Button variant="primary" btnBlock>
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box mb={2}>
              <Text mb={0}>
                <b>
                  <small>
                    <sup>$</sup>
                  </small>
                  20,800.<sup>50</sup>
                </b>
                <i>
                  (
                  <small>
                    <sup>$</sup>
                  </small>
                  2.000.51/GM)
                </i>
              </Text>
              <Text fontSize="11px" mb="10px">
                by Redoxica, Inc.
              </Text>
              <Box
                display="grid"
                gridGap="30px"
                gridTemplateColumns="repeat(2,1fr)"
                alignItems="center"
              >
                <Box
                  display="grid"
                  gridGap="5px"
                  gridTemplateColumns="repeat(2,1fr)"
                  alignItems="center"
                >
                  <Label mb={0}>Quantity:</Label>
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
                  <Button variant="primary" btnBlock>
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mb={3} py={1} px={[1, 1, 1, 5]}>
          <Text
            css={css`
              text-transform: uppercase;
            `}
            fontFamily={theme.fontFamily.bold}
          >
            related to this item
          </Text>

          <Box
            display="grid"
            gridGap="15px"
            gridTemplateColumns={[
              'repeat(2,1fr)',
              'repeat(2,1fr)',
              'repeat(3,1fr)',
              'repeat(4,1fr)',
            ]}
            css={css`
              @media (min-width: 1500px) {
                grid-template-columns: repeat(8, 1fr);
              }
            `}
          >
            {relatedProductData.map((productItem, index) => (
              <Anchor
                key={index}
                href={productItem.href}
                boxShadow="0 0 2px 1px rgba(0,0,0,.15)"
                display="block"
                css={css`
                  color: inherit;
                `}
              >
                <Box py={1} px="10px">
                  <Text fontFamily={theme.fontFamily.bold} color="primary">
                    {productItem.title}
                  </Text>
                  <Text fontSize="12px">{productItem.by}</Text>
                </Box>
                <Image
                  src={productItem.imageUrl}
                  alt={productItem.imageUrl}
                  width="100%"
                />
                <Box py={1} px="10px">
                  <Text mb="10px">{productItem.ratingTitle}</Text>

                  <Box mb="1">
                    <Rating
                      readonly
                      initialRating={productItem.ratingScore}
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

                  <Text
                    fontFamily={theme.fontFamily.bold}
                    color="primary"
                    fontSize="13px"
                  >
                    Price: <sup>$</sup>
                    {productItem.price}
                  </Text>
                </Box>
              </Anchor>
            ))}
          </Box>
        </Box>

        <Box mb={3} py={1} px={[1, 1, 1, 5]}>
          <Text
            css={css`
              text-transform: uppercase;
            `}
            fontFamily={theme.fontFamily.bold}
          >
            your recently viewed items
          </Text>

          <Box
            display="grid"
            gridGap="15px"
            gridTemplateColumns={[
              'repeat(2,1fr)',
              'repeat(2,1fr)',
              'repeat(3,1fr)',
              'repeat(4,1fr)',
            ]}
            css={css`
              @media (min-width: 1500px) {
                grid-template-columns: repeat(8, 1fr);
              }
            `}
          >
            {relatedProductData.map((productItem, index) => (
              <Anchor
                key={index}
                href={productItem.href}
                boxShadow="0 0 2px 1px rgba(0,0,0,.15)"
                display="block"
                css={css`
                  color: inherit;
                `}
              >
                <Box py={1} px="10px">
                  <Text fontFamily={theme.fontFamily.bold} color="primary">
                    {productItem.title}
                  </Text>
                  <Text fontSize="12px">{productItem.by}</Text>
                </Box>
                <Image
                  src={productItem.imageUrl}
                  alt={productItem.imageUrl}
                  width="100%"
                />
                <Box py={1} px="10px">
                  <Text mb="10px">{productItem.ratingTitle}</Text>

                  <Box mb="1">
                    <Rating
                      readonly
                      initialRating={productItem.ratingScore}
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

                  <Text
                    fontFamily={theme.fontFamily.bold}
                    color="primary"
                    fontSize="13px"
                  >
                    Price: <sup>$</sup>
                    {productItem.price}
                  </Text>
                </Box>
              </Anchor>
            ))}
          </Box>
        </Box>
      </main>

      <Footer />
    </Fragment>
  )
}

export default Product
