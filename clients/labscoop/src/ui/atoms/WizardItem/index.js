/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '../../../lib/theme'
import { typography, position, layout, flexbox, space } from 'styled-system'

const StyledWizardItem = styled.span`
  ${typography}
  ${position}
  ${layout}
  ${flexbox}
  ${space}
`

const WizardItem = ({ children, ...restProps }) => {
  const { isActive, isDone } = restProps
  return (
    <StyledWizardItem
      isActive={isActive}
      isDone={isDone}
      fontSize={['10px', '12px', '14px', '14px']}
      py={['25px', '25px', '25px']}
      position="relative"
      flex="1"
      fontFamily={theme.fontFamily.bold}
      display="block"
      textAlign="center"
      css={css`
        &:before,
        &:after {
          content: '';
          position: absolute;
        }
        &:before {
          width: 100%;
          height: 3px;
          bottom: 0px;
          left: 0;
          z-index: 5;
          background: ${isActive
            ? `linear-gradient(to right, ${theme.colors.success} 50%, ${
                theme.colors.warning
              } 50%)`
            : `linear-gradient(to right, ${theme.colors.warning} 50%, ${
                theme.colors.warning
              } 50%)`};
          background: ${isDone &&
            `linear-gradient(to right, ${theme.colors.success} 50%, ${
              theme.colors.success
            } 50%)`};
        }
        &:after {
          display: ${isActive ? 'block' : 'none'};
          width: 14.5px;
          height: 14.5px;
          bottom: -8px;
          left: 50%;
          z-index: 10;
          transform: translateX(-50%);
          background-repeat: no-repeat;
          background-size: 14.5px;
          background-position: 50% 50%;
          background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQwNC4zIDIwMi4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDQuMyAyMDIuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzNEExNDc7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wLDBoNDA0LjNMMjAyLjIsMjAyLjFMMCwweiIvPgo8L2c+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03LjIsNy4yIi8+Cjwvc3ZnPgo=');
        }
      `}
    >
      {children}
    </StyledWizardItem>
  )
}

export default WizardItem
