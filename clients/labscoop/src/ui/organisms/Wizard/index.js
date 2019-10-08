/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'

import Box from '../../../helpers/Box'
import theme from '../../../lib/theme'
import { Image, Icon } from '../..'

import logoBadge from '../../../assets/images/elements/logo-badge.svg'

const Wizard = ({ children, ...restProps }) => {
  return (
    <Box
      px={[1, 1, 1, 5]}
      display="grid"
      gridGap={['15px', '50px', '50px', '50px', '130px']}
      minHeight="45px"
      position="sticky"
      top="0"
      left="0"
      width="100%"
      bg="white"
      zIndex="100"
      gridTemplateColumns={[
        'repeat(1, 1fr)',
        'repeat(1,auto 1fr)',
        'repeat(1,auto 1fr auto)',
        'repeat(1,auto 1fr auto)',
      ]}
      alignItems="center"
      css={css`
        &:before,
        &:after {
          content: '';
          position: absolute;
          width: 50%;
          bottom: 0;
          height: 3px;
        }
        &:before {
          left: 0;
          background-color: ${theme.colors.success};
        }
        &:after {
          right: 0;
          background-color: ${theme.colors.warning};
        }
      `}
    >
      <Box
        display={['none', 'flex']}
        alignItems="center"
        fontFamily={theme.fontFamily.bold}
        fontSize={['14px', '20px', '22px']}
      >
        <Box
          display={['none', 'none', 'none', 'inline-block']}
          alignItems="center"
          width="25px"
          mr="10px"
        >
          <Link
            to="/"
            css={css`
              display: flex;
            `}
          >
            <Image src={logoBadge} alg="Checkout wizard logo" width="100%" />
          </Link>
        </Box>
        Checkout
      </Box>

      <Box display="flex">{children}</Box>

      <Box display={['none', 'none', 'none', 'flex']} alignItems="center">
        <Link
          to="/"
          css={css`
            font-family: ${theme.fontFamily.bold};
          `}
        >
          <Icon icon="long-arrow-left" mr="10px" size="16px" mt="-3px" />
          Back to Cart
        </Link>
      </Box>
    </Box>
  )
}

export default Wizard
