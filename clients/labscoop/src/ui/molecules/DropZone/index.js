/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Box } from '../../../helpers'

const DropZone = ({ children, ...restProps }) => {
  return (
    <Box
      {...restProps}
      css={css`
        > div {
          height: 100%;
          min-height: 120px;
          padding: 20px;
          background-color: #f9f9f9;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          outline: none !important;
        }
      `}
    >
      {children}
    </Box>
  )
}

export default DropZone
