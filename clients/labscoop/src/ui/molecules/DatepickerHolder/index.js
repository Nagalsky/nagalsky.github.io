/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import theme from '../../../lib/theme'

import { Box } from '../../../helpers'
import { Icon } from '../..'

const DatepickerHolder = ({ children, ...restProps }) => {
  return (
    <Box
      {...restProps}
      css={css`
        .react-datepicker-wrapper {
          position: relative;
          &:before,
          &:after {
            content: '';
            position: absolute;
            display: inline-block;
            width: 0;
            height: 0;
            border-style: solid;
            z-index: 4;
            right: 28px;
          }
          &:before {
            border-width: 0 4px 4px 4px;
            border-color: transparent transparent #505050 transparent;
            top: 10px;
          }
          &:after {
            border-width: 4px 4px 0 4px;
            border-color: #505050 transparent transparent transparent;
            bottom: 10px;
          }
          input {
            border: none;
            border-bottom: 1px solid ${theme.colors.muted};
            padding: 5px 45px 5px 8px;
            background-repeat: no-repeat;
            background-size: 10px;
            background-position: right 6px center;
            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzODYuMyAxOTIuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg2LjMgMTkyLjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMUYxRjFGO30KPC9zdHlsZT4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIwLDAgMTkzLjEsMTkyLjUgMzg2LjMsMCAiLz4KPC9zdmc+Cg==');
            &:focus {
              outline: none;
            }
          }
        }
      `}
    >
      <Icon icon="calendar" mr="10px" color="#6d6d6d" size="15px" /> {children}
    </Box>
  )
}

DatepickerHolder.defaultProps = {
  display: 'flex',
  alignItems: 'center',
}

export default DatepickerHolder
