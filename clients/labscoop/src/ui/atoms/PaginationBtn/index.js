/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { darken } from 'polished'
import theme from '../../../lib/theme'

const PaginationBtn = ({ children, active, disabled, ...restProps }) => {
  return (
    <a
      {...restProps}
      css={css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px 15px;
        text-align: center;
        font-family: ${theme.fontFamily.bold};
        color: ${active ? theme.colors.primary : theme.colors.black};
        background-color: ${active ? theme.colors.white : '#f4f4f4'};
        border: 1px solid ${active ? theme.colors.primary : '#d3d3d3'};
        border-radius: 4px;
        margin: 0 4px;
        min-height: 39px;
        @media (max-width: 600px) {
          padding: 8px 8px;
        }
        &.disabled {
          opacity: 0.55;
          pointer-events: none;
          cursor: not-allowed;
        }
        &:hover {
          text-decoration: none;
          background-color: ${active
            ? theme.colors.white
            : darken(0.1, '#f4f4f4')};
          color: ${active ? theme.colors.primary : theme.colors.black};
        }
      `}
    >
      {children}
    </a>
  )
}

export default PaginationBtn
