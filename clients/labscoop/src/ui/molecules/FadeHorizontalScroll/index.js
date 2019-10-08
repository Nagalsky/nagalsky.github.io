/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Box } from '../../../helpers'

const FadeHorizontalScroll = ({ children, ...restProps }) => {
  return (
    <Box
      {...restProps}
      position="relative"
      css={css`
        @media (max-width: 767px) {
          &:before {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 12%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
            background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0,
              rgba(255, 255, 255, 1) 100%
            );
            background-repeat: repeat-x;
          }
        }
      `}
    >
      <Box
        css={css`
          @media (max-width: 767px) {
            white-space: nowrap;
            overflow-x: auto;
            ::-webkit-scrollbar {
              display: none;
            }
          }
        `}
        className="buttons-holder"
      >
        {children}
      </Box>
    </Box>
  )
}

export default FadeHorizontalScroll
