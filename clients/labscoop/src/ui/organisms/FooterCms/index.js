/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'
import styled from '@emotion/styled'
import {
  color,
  background,
  space,
  layout,
  position,
  flexbox,
  border,
} from 'styled-system'

import theme from '../../../lib/theme'
import { Box } from '../../../helpers'
import { Text } from '../..'

const StyledFooter = styled.footer`
  ${color}
  ${background}
  ${layout}
  ${space}
  ${position}
  ${flexbox}
  ${border}
`

const FooterCms = () => {
  return (
    <StyledFooter
      px={[1, 1, 1, 1, 5]}
      py={[2, 3, 4, 5]}
      bg="#fcfcfc"
      borderBottomWidth="11px"
      borderBottomStyle="solid"
      borderBottomColor="primary"
      borderTopWidth="1px"
      borderTopStyle="solid"
      borderTopColor="#eeeeee"
      display="flex"
      alignItems="center"
      justifyContent={['center', 'center', 'center', 'space-between']}
      textAlign={['center', 'center', 'center', 'left']}
      flexDirection={['column', 'column', 'column', 'row-reverse']}
    >
      <Box mb={[1, 1, 1, 0]}>
        <Link
          to="/"
          css={css`
            font-size: 12px;
            font-family: ${theme.fontFamily.bold};
          `}
        >
          Labscoop.com
        </Link>
      </Box>

      <Box>
        <Text fontSize="11px">
          Copyright © 2016 Labscoop, LLC. All Rights Reserved. Reproduction of
          any materials from the site is strictly forbidden without permission.
        </Text>
      </Box>
    </StyledFooter>
  )
}

export default FooterCms
