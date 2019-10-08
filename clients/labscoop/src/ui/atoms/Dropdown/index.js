import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import OutsideClickHandler from 'react-outside-click-handler'

import { Box } from '../../../helpers'

const Dropdown = ({ children, ...restProps }) => {
  const [isOpened, setIsOpened] = useState(false)
  const toggle = () => setIsOpened(!isOpened)

  const { inlineBlock, title } = restProps

  return (
    <Box {...restProps} position="relative">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpened(false)
        }}
      >
        <Box
          onClick={toggle}
          css={css`
            cursor: pointer;
            display: ${inlineBlock ? 'inline-flex' : 'flex'};
            align-items: center;
            position: relative;
            padding-right: 35px;
            &:after {
              content: '';
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-size: 12px;
              width: 30px;
              height: 100%;
              background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ItCh0LvQvtC5XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjkgMTI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzE5MTkxOTt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyMS4zLDM0LjZjLTEuNi0xLjYtNC4yLTEuNi01LjgsMGwtNTEsNTEuMUwxMy40LDM0LjZjLTEuNi0xLjYtNC4yLTEuNi01LjgsMHMtMS42LDQuMiwwLDUuOGw1My45LDUzLjkKCQljMC44LDAuOCwxLjgsMS4yLDIuOSwxLjJjMSwwLDIuMS0wLjQsMi45LTEuMmw1My45LTUzLjlDMTIyLjksMzguOCwxMjIuOSwzNi4yLDEyMS4zLDM0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==');
            }
          `}
        >
          {title}
        </Box>
        {isOpened ? (
          <Box isOpened={isOpened} mt={1}>
            {children}
          </Box>
        ) : null}
      </OutsideClickHandler>
    </Box>
  )
}

export default Dropdown
