/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'

import { Box } from '../../../helpers'

const Table = ({
  children,
  stripped,
  bordered,
  visible,
  noBorder,
  ...restProps
}) => {
  return (
    <Box
      css={css`
        display: block;
        width: 100%;
        overflow-x: ${visible ? 'visible' : 'auto'};
        -webkit-overflow-scrolling: touch;
      `}
    >
      <table
        css={css`
          &:not(:last-child) {
            margin-bottom: 25px;
          }
          button {
            white-space: nowrap;
          }
          width: 100%;
          > thead,
          > tbody {
            > tr {
              > th,
              > td {
                padding: 15px 15px;
              }
            }
          }
          > thead {
            > tr {
              > th,
              > td {
                font-family: ${theme.fontFamily.bold};
                background-color: ${stripped || bordered
                  ? 'transparent'
                  : '#f9f9f9'};
                border-bottom: 1px solid
                  ${stripped ? 'transparent' : theme.colors.muted};
                white-space: nowrap;
              }
            }
          }
          > tbody {
            > tr {
              > th,
              > td {
                padding-top: ${noBorder && '8px'};
                padding-bottom: ${noBorder && '8px'};
                &:first-of-type {
                  border-right: ${stripped &&
                    '15px solid' + theme.colors.white};
                }
              }
              &:nth-of-type(even) {
                > th,
                > td {
                  background-color: ${stripped ? '#f8f8f8' : 'transparent'};
                }
              }
              &:not(:last-of-type) {
                > th,
                > td {
                  border-bottom: 1px solid
                    ${stripped ? 'transparent' : theme.colors.muted};
                  border-color: ${noBorder && 'transparent'};
                  @media screen and (min-width: 768px) {
                    min-width: ${stripped && '240px'};
                  }
                }
              }
            }
          }
        `}
      >
        {children}
      </table>
    </Box>
  )
}

export default Table
