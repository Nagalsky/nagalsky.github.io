import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../../lib/theme'
import OutsideClickHandler from 'react-outside-click-handler'

import { Box } from '../../../helpers'
import { Image, Text, Icon } from '../..'

import starFull from '../../../assets/images/elements/star-full.svg'
import starHalf from '../../../assets/images/elements/star-half.svg'
import starEmpty from '../../../assets/images/elements/star-empty.svg'

const RatingImg = styled(Image)`
  display: inline-block;
  width: 12px;
  height: 16px;
  margin: 0 1px;
`

const RatingImgLg = styled(RatingImg)`
  width: 14px;
  height: 18px;
`

const CustomerReviewsBar = styled(Box)`
  flex: 1;
  margin: 0 15px;
  height: 1px;
  background-color: ${theme.colors.muted};
  display: flex;
  height: 15px;
  overflow: hidden;
  font-size: 0.75rem;
`
const CustomerReviewsBarInner = styled(Box)`
  height: 15px;
  background-color: ${theme.colors.primary};
`

const CustomerReviews = ({ ...restProps }) => {
  const {
    rating,
    reviews,
    titleOutOf,
    percentOf5,
    barWidthOutOf5,
    percentOf4,
    barWidthOutOf4,
    percentOf3,
    barWidthOutOf3,
    percentOf2,
    barWidthOutOf2,
    percentOf1,
    barWidthOutOf1,
    leftPosition,
  } = restProps

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Box
      {...restProps}
      position="relative"
      onClick={toggle}
      css={css`
        cursor: pointer;
      `}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpen(false)
        }}
      >
        <Box display="flex" alignItems="center">
          {rating === 5 && (
            <Box display="flex">
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
            </Box>
          )}
          {rating === 4 && (
            <Box display="flex">
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
            </Box>
          )}
          {rating === 3 && (
            <Box display="flex">
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
            </Box>
          )}
          {rating === 3.5 && (
            <Box display="flex">
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starHalf} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
            </Box>
          )}
          {rating === 2 && (
            <Box display="flex">
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
            </Box>
          )}
          {rating === 1 && (
            <Box display="flex">
              <RatingImg src={starFull} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
              <RatingImg src={starEmpty} alt="rating img" />
            </Box>
          )}
          <Icon color={theme.colors.grayDark} icon="caret-down" ml="5px" />
        </Box>

        <Box
          display="block"
          opacity={isOpen ? '1' : '0'}
          position="absolute"
          top="calc(100% + 10px)"
          left={['0', '0', leftPosition ? '0' : '50%']}
          ml={['0', '0', leftPosition ? '0' : '-150px']}
          width={['260px', '300px']}
          bg="white"
          p={1}
          boxShadow="0 1rem 3rem rgba(0,0,0,.175)"
          borderWidth="1px"
          borderColor="muted"
          borderStyle="solid"
          borderRadius="4px"
          zIndex="50"
          css={css`
            visibility: ${isOpen ? 'visible' : 'hidden'};
            transition: all 200ms ease;
            transform: translateY(${isOpen ? '0px' : '10px'});
          `}
        >
          <Text fontFamily={theme.fontFamily.bold} mb="10px" fontSize="15px">
            Customer Reviews
          </Text>
          <Box display="flex" alignItems="center" mb="5px">
            {rating === 5 && (
              <Box display="flex">
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
              </Box>
            )}
            {rating === 4 && (
              <Box display="flex">
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
              </Box>
            )}
            {rating === 3 && (
              <Box display="flex">
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
              </Box>
            )}
            {rating === 3.5 && (
              <Box display="flex">
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starHalf} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
              </Box>
            )}
            {rating === 2 && (
              <Box display="flex">
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
              </Box>
            )}
            {rating === 1 && (
              <Box display="flex">
                <RatingImg src={starFull} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
                <RatingImg src={starEmpty} alt="rating img" />
              </Box>
            )}
            <Text mb={0} ml={1} fontSize="12px">
              {reviews}
            </Text>
          </Box>
          <Text mb="10px">{titleOutOf}</Text>
          <Box display="flex" alignItems="center">
            <Text display="flex" alignItems="center" flexShrink="0" mb={0}>
              5
              <RatingImgLg
                src={starFull}
                alt="img"
                css={css`
                  margin-left: 5px;
                `}
              />
            </Text>

            <CustomerReviewsBar>
              <CustomerReviewsBarInner width={barWidthOutOf5 + '%'} />
            </CustomerReviewsBar>

            <Text flexShrink="0" mb={0}>
              {percentOf5}%
            </Text>
          </Box>

          <Box display="flex" alignItems="center">
            <Text display="flex" alignItems="center" flexShrink="0" mb={0}>
              4
              <RatingImgLg
                src={starFull}
                alt="img"
                css={css`
                  margin-left: 5px;
                `}
              />
            </Text>

            <CustomerReviewsBar>
              <CustomerReviewsBarInner width={barWidthOutOf4 + '%'} />
            </CustomerReviewsBar>

            <Text flexShrink="0" mb={0}>
              {percentOf4}%
            </Text>
          </Box>

          <Box display="flex" alignItems="center">
            <Text display="flex" alignItems="center" flexShrink="0" mb={0}>
              3
              <RatingImgLg
                src={starFull}
                alt="img"
                css={css`
                  margin-left: 5px;
                `}
              />
            </Text>

            <CustomerReviewsBar>
              <CustomerReviewsBarInner width={barWidthOutOf3 + '%'} />
            </CustomerReviewsBar>

            <Text flexShrink="0" mb={0}>
              {percentOf3}%
            </Text>
          </Box>

          <Box display="flex" alignItems="center">
            <Text display="flex" alignItems="center" flexShrink="0" mb={0}>
              2
              <RatingImgLg
                src={starFull}
                alt="img"
                css={css`
                  margin-left: 5px;
                `}
              />
            </Text>

            <CustomerReviewsBar>
              <CustomerReviewsBarInner width={barWidthOutOf2 + '%'} />
            </CustomerReviewsBar>

            <Text flexShrink="0" mb={0}>
              {percentOf2}%
            </Text>
          </Box>

          <Box display="flex" alignItems="center">
            <Text display="flex" alignItems="center" flexShrink="0" mb={0}>
              1
              <RatingImgLg
                src={starFull}
                alt="img"
                css={css`
                  margin-left: 5px;
                `}
              />
            </Text>

            <CustomerReviewsBar>
              <CustomerReviewsBarInner width={barWidthOutOf1 + '%'} />
            </CustomerReviewsBar>

            <Text flexShrink="0" mb={0}>
              {percentOf1}%
            </Text>
          </Box>
        </Box>
      </OutsideClickHandler>
    </Box>
  )
}

CustomerReviews.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.string.isRequired,
  titleOutOf: PropTypes.string.isRequired,
  percentOf5: PropTypes.string.isRequired,
  percentOf4: PropTypes.string.isRequired,
  percentOf3: PropTypes.string.isRequired,
  percentOf2: PropTypes.string.isRequired,
  percentOf1: PropTypes.string.isRequired,
  barWidthOf5: PropTypes.number.isRequired,
  barWidthOf4: PropTypes.number.isRequired,
  barWidthOf3: PropTypes.number.isRequired,
  barWidthOf2: PropTypes.number.isRequired,
  barWidthOf1: PropTypes.number.isRequired,
}

CustomerReviews.defaultProps = {
  rating: 0,
  reviews: 'base title',
  titleOutOf: '5 out of 5 stars',
  percentOf5: '0',
  percentOf4: '0',
  percentOf3: '0',
  percentOf2: '0',
  percentOf1: '0',
  barWidthOf5: 0,
  barWidthOf4: 0,
  barWidthOf3: 0,
  barWidthOf2: 0,
  barWidthOf1: 0,
}

export default CustomerReviews
