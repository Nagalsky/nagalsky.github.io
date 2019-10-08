/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'
import FloatingLabelInput from 'react-floating-label-input'

import { Box } from '../../../helpers'

const Field = ({ ...restProps }) => {
  const { id, type, title } = restProps
  return (
    <Box
      position="relative"
      css={css`
        &:not(:last-child) {
          margin-bottom: 25px;
        }
        > article {
          height: 37px;
          > div {
            height: 37px;
            border: none;
            > label {
              font-family: ${theme.fontFamily.bold};
              color: ${theme.colors.black};
              padding-left: 11px;
              margin-top: 5px;
              top: 0;
              bottom: auto;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        .bgWsud {
          color: #b8b8b8;
        }
      `}
    >
      <FloatingLabelInput
        {...restProps}
        id={id}
        type={type}
        label={title}
        css={css`
          padding: 0.375rem 0.75rem;
          height: 37px;
          width: 100%;
          border-radius: 0;
          display: block;
          border: none;
          border-bottom: 2px solid ${theme.colors.muted};
          background-color: ${theme.colors.white};
          -webkit-appearance: none;
          -moz-appearance: none;
        `}
      />
    </Box>
  )
}

export default Field
