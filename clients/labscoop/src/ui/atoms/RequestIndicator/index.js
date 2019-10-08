/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import theme from '../../../lib/theme'
import { Box } from '../../../helpers/'

const RequestIndicator = ({ children, ...restProps }) => {
  const { variant } = restProps
  return (
    <Box
      {...restProps}
      borderWidth="6px"
      borderStyle="solid"
      borderColor={
        (variant === 'success' && 'success') ||
        (variant === 'danger' && 'danger')
      }
      color={
        (variant === 'success' && 'success') ||
        (variant === 'danger' && 'danger')
      }
      borderRadius="50%"
      width="40px"
      height="40px"
      fontFamily={theme.fontFamily.bold}
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="16px"
      css={css`
        text-transform: uppercase;
      `}
    >
      {children}
    </Box>
  )
}
export default RequestIndicator
