/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {
  color,
  space,
  layout,
  shadow,
  position,
  flexbox,
  border,
  grid,
} from 'styled-system'

import theme from '../../../lib/theme'
import { Box } from '../../../helpers'
import { Image, Text } from '../../'

const StyledProduct = styled.a`
  ${color}
  ${space}
  ${layout}
  ${shadow}
  ${position}
  ${flexbox}
  ${border}
  ${color}
  ${grid}
`

const Product = ({
  children,
  imgUrl,
  by,
  name,
  priceWhole,
  priceFraction,
  ...restProps
}) => {
  return (
    <StyledProduct
      {...restProps}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="muted"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="muted"
      css={css`
        transition: 250ms;
        &:hover,
        &:focus {
          box-shadow: 0 0 5px 0 rgba(25, 25, 25, 0.3);
          text-decoration: none;
          color: ${theme.colors.muted};
          > div {
            border-left-color: ${theme.colors.success};
          }
        }
      `}
    >
      <Image
        src={imgUrl}
        width="100%"
        height="100%"
        alt="prodcut image"
        css={css`
          object-fit: cover;
        `}
      />
      {by ? (
        <Box
          width="100%"
          borderTopWidth="1px"
          borderTopStyle="solid"
          borderTopColor="muted"
          borderLeftWidth="3px"
          borderLeftStyle="solid"
          borderLeftColor="muted"
          p="10px"
          pl="15px"
        >
          <Text mb={0} fontSize="12px">
            {by}
          </Text>
          <Text
            mb={1}
            fontSize="15px"
            fontFamily={theme.fontFamily.bold}
            color="primary"
          >
            {name}
          </Text>
          <Text color="black" fontSize={['14px', '16px']}>
            Starting at{' '}
            <small>
              <sup>$</sup>
            </small>
            {priceWhole}
            <sup>{priceFraction}</sup>
          </Text>
        </Box>
      ) : null}
    </StyledProduct>
  )
}

Product.propTypes = {
  imgUrl: PropTypes.string,
}

Product.defaultProps = {
  imgUrl: 'https://via.placeholder.com/150x60',
}

export default Product
