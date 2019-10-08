import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Box } from '../../../helpers/'
import { Text, Image } from '../../'

import starFull from '../../../assets/images/elements/star-full.svg'
import starHalf from '../../../assets/images/elements/star-half.svg'
import starEmpty from '../../../assets/images/elements/star-empty.svg'

const RatingImg = styled(Image)`
  display: inline-block;
  width: ${props => (props.lg ? '22px' : '12px')};
  height: ${props => (props.lg ? '20px' : '12px')};
  margin: 0 1px;
`

const Rating = ({ ...restProps }) => {
  const { rating, title, lg } = restProps

  if (rating === 1) {
    return (
      <Box
        {...restProps}
        display="flex"
        alignItems={['normal', 'center']}
        flexDirection={['column', 'row']}
        justifyContent="between"
        mb="5px"
      >
        <Box flex="1" display="flex">
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
        </Box>

        {title && (
          <Text
            mb={0}
            ml={[0, 1]}
            mt={['10px', 0]}
            flexShrink="0"
            fontSize={lg ? '16px' : '12px'}
          >
            {title}
          </Text>
        )}
      </Box>
    )
  }
  if (rating === 1.5) {
    return (
      <Box
        {...restProps}
        display="flex"
        alignItems={['normal', 'center']}
        flexDirection={['column', 'row']}
        justifyContent="between"
        mb="5px"
      >
        <Box flex="1" display="flex">
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starHalf} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
        </Box>

        {title && (
          <Text
            mb={0}
            ml={[0, 1]}
            mt={['10px', 0]}
            flexShrink="0"
            fontSize={lg ? '16px' : '12px'}
          >
            {title}
          </Text>
        )}
      </Box>
    )
  }
  if (rating === 2) {
    return (
      <Box
        {...restProps}
        display="flex"
        alignItems={['normal', 'center']}
        flexDirection={['column', 'row']}
        justifyContent="between"
        mb="5px"
      >
        <Box flex="1" display="flex">
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
        </Box>

        {title && (
          <Text
            mb={0}
            ml={[0, 1]}
            mt={['10px', 0]}
            flexShrink="0"
            fontSize={lg ? '16px' : '12px'}
          >
            {title}
          </Text>
        )}
      </Box>
    )
  }
  if (rating === 3) {
    return (
      <Box
        {...restProps}
        display="flex"
        alignItems={['normal', 'center']}
        flexDirection={['column', 'row']}
        justifyContent="between"
        mb="5px"
      >
        <Box flex="1" display="flex">
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
        </Box>

        {title && (
          <Text
            mb={0}
            ml={[0, 1]}
            mt={['10px', 0]}
            flexShrink="0"
            fontSize={lg ? '16px' : '12px'}
          >
            {title}
          </Text>
        )}
      </Box>
    )
  }
  if (rating === 4) {
    return (
      <Box
        {...restProps}
        display="flex"
        alignItems={['normal', 'center']}
        flexDirection={['column', 'row']}
        justifyContent="between"
        mb="5px"
      >
        <Box flex="1" display="flex">
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starEmpty} alt="rating img" />
        </Box>

        {title && (
          <Text
            mb={0}
            ml={[0, 1]}
            mt={['10px', 0]}
            flexShrink="0"
            fontSize={lg ? '16px' : '12px'}
          >
            {title}
          </Text>
        )}
      </Box>
    )
  }
  if (rating === 5) {
    return (
      <Box
        {...restProps}
        display="flex"
        alignItems={['normal', 'center']}
        flexDirection={['column', 'row']}
        justifyContent="between"
        mb="5px"
      >
        <Box flex="1" display="flex">
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
          <RatingImg lg={lg} src={starFull} alt="rating img" />
        </Box>

        {title && (
          <Text
            mb={0}
            ml={[0, 1]}
            mt={['10px', 0]}
            flexShrink="0"
            fontSize={lg ? '16px' : '12px'}
          >
            {title}
          </Text>
        )}
      </Box>
    )
  }
  return (
    <Box
      {...restProps}
      display="flex"
      alignItems={['normal', 'center']}
      flexDirection={['column', 'row']}
      justifyContent="between"
      mb="5px"
    >
      <Box flex="1" display="flex">
        <RatingImg lg={lg} src={starEmpty} alt="rating img" />
        <RatingImg lg={lg} src={starEmpty} alt="rating img" />
        <RatingImg lg={lg} src={starEmpty} alt="rating img" />
        <RatingImg lg={lg} src={starEmpty} alt="rating img" />
        <RatingImg lg={lg} src={starEmpty} alt="rating img" />
      </Box>

      {title && (
        <Text
          mb={0}
          ml={[0, 1]}
          mt={['10px', 0]}
          flexShrink="0"
          fontSize={lg ? '16px' : '12px'}
        >
          {title}
        </Text>
      )}
    </Box>
  )
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  title: PropTypes.string,
}

Rating.defaultProps = {
  rating: 0,
  title: '',
}

export default Rating
