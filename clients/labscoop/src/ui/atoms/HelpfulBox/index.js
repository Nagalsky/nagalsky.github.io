/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '../../../lib/theme'

import { Box } from '../../../helpers/'
import { Anchor, Button } from '../../'

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

const HelpfulBox = ({ children, ...restProps }) => {
  return (
    <Box
      {...restProps}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="muted"
      borderRadius="4px"
      p={1}
      position="relative"
      boxShadow="0 .5rem 1rem rgba(0,0,0,.15)"
      css={css`
        &:not(:last-of-type) {
          margin-bottom: 20px;
        }
        &:before,
        &:after {
          content: '';
          position: absolute;
          display: inline-block;
          width: 0;
          height: 0;
          border-style: solid;
        }
        &:before {
          border-width: 0 8px 9px 8px;
          border-color: transparent transparent ${theme.colors.muted}
            transparent;
          left: 35px;
          top: -9px;
        }
        &:after {
          border-width: 0 7px 8px 7px;
          border-color: transparent transparent ${theme.colors.white}
            transparent;
          left: 36px;
          top: -8px;
        }
      `}
    >
      {children}
      <Box
        mt={1}
        display="flex"
        alignItems={['normal', 'center']}
        flexDirection={['column', 'row']}
      >
        <Box flex="1" mb={['10px', 0]}>
          <Box
            fontSize="12px"
            display="inline-block"
            fontFamily={theme.fontFamily.bold}
            mr={1}
          >
            Was this hepful to you?
          </Box>
          <Box display={['block', 'inline-block']} mt={['5px', 0]}>
            <StyledHelpfulButton>Yes</StyledHelpfulButton>
            <StyledHelpfulButton>No</StyledHelpfulButton>
          </Box>
        </Box>

        <Box flexShrink={0}>
          <Anchor
            href="#"
            css={css`
              color: ${theme.colors.black};
              font-family: ${theme.fontFamily.bold};
              font-size: 12px;
              &:hover,
              &:focus {
                color: ${theme.colors.primary};
              }
            `}
          >
            Report This
          </Anchor>
        </Box>
      </Box>
    </Box>
  )
}

export default HelpfulBox
