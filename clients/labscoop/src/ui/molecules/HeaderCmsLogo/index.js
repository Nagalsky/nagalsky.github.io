/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'

import { Box } from '../../../helpers'
import { Image } from '../..'

import logoCms from '../../../assets/images/elements/logo-white.svg'

const HeaderCmsLogo = ({ ...restProps }) => {
  return (
    <Box
      {...restProps}
      width={['100px', '150px', '190px']}
      borderRightStyle="solid"
      borderRightColor="#344085"
      borderRightWidth="1px"
      p={['10px', '20px']}
      display="flex"
      alignItems="center"
    >
      <Link
        to="/"
        css={css`
          display: block;
          width: 100%;
          flex-shrink: 0;
        `}
      >
        <Image src={logoCms} alt="Cms logo" width="100%" />
      </Link>
    </Box>
  )
}

export default HeaderCmsLogo
