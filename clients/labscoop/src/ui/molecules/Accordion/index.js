import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import OutsideClickHandler from 'react-outside-click-handler'

import { Box } from '../../../helpers'

const Accordion = ({ children, ...restProps }) => {
  const { title } = restProps

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Box
      {...restProps}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="muted"
      css={css`
        &:not(:first-of-type) {
          border-top: none;
        }
      `}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpen(false)
        }}
      >
        <Box
          p={[1, 1, 2, 3]}
          onClick={toggle}
          css={css`
            cursor: pointer;
            position: relative;
            &:after {
              @media screen and (min-width: 768px) {
                right: 30px;
              }
              content: '';
              position: absolute;
              right: 15px;
              top: 50%;
              transform: translateY(-50%);
              width: 14px;
              height: 14px;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-size: 14px;
              background-image: url(${isOpen
                ? 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI4NC45IDI4NC45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODQuOSAyODQuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxOTE5MTk7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Ni41LDIuOEw2Mi4yLDE3LjFjLTEuOSwxLjktMi45LDQuMS0yLjksNi42YzAsMi41LDEsNC43LDIuOSw2LjZsMTEyLjIsMTEyLjJMNjIuMiwyNTQuNwoJCWMtMS45LDEuOS0yLjksNC4xLTIuOSw2LjZjMCwyLjUsMSw0LjcsMi45LDYuNmwxNC4zLDE0LjNjMS45LDEuOSw0LjEsMi45LDYuNiwyLjljMi41LDAsNC43LTEsNi42LTIuOWwxMzMtMTMzCgkJYzEuOS0xLjksMi45LTQuMSwyLjktNi42cy0xLTQuNy0yLjktNi42TDg5LjYsMi44Qzg3LjcsMC45LDg1LjYsMCw4My4xLDBDODAuNiwwLDc4LjQsMC45LDc2LjUsMi44eiIvPgo8L2c+Cjwvc3ZnPgo='
                : 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI4NC45IDI4NC45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODQuOSAyODQuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxOTE5MTk7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODIuMSw3Ni41bC0xNC4zLTE0LjNjLTEuOS0xLjktNC4xLTIuOS02LjYtMi45Yy0yLjUsMC00LjcsMS02LjYsMi45TDE0Mi41LDE3NC40TDMwLjMsNjIuMgoJCWMtMS45LTEuOS00LjEtMi45LTYuNi0yLjljLTIuNSwwLTQuNywxLTYuNiwyLjlMMi45LDc2LjVDMC45LDc4LjQsMCw4MC42LDAsODMuMWMwLDIuNSwxLDQuNywyLjksNi42bDEzMywxMzMKCQljMS45LDEuOSw0LjEsMi45LDYuNiwyLjlzNC43LTEsNi42LTIuOWwxMzMuMS0xMzNjMS45LTEuOSwyLjgtNC4xLDIuOC02LjZDMjg0LjksODAuNiwyODQsNzguNCwyODIuMSw3Ni41eiIvPgo8L2c+Cjwvc3ZnPgo='});
            }
          `}
        >
          {title}
        </Box>

        <Box
          px={[1, 1, 2, 3]}
          pb={[1, 1, 2, 3]}
          css={css`
            display: ${isOpen ? 'block' : 'none'};
          `}
        >
          {children}
        </Box>
      </OutsideClickHandler>
    </Box>
  )
}

export default Accordion
