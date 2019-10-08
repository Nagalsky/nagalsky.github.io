/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'

import { Box } from '../../../helpers'
import { Label } from '../..'

const TextArea = ({ ...restProps }) => {
  const { title, id, type } = restProps
  return (
    <Box
      position="relative"
      css={css`
        &:not(:last-child) {
          margin-bottom: 25px;
        }
      `}
    >
      <textarea
        {...restProps}
        id={id}
        placeholder={title}
        type={type}
        css={css`
          resize: none;
          padding: 0.375rem 0;
          min-height: 125px;
          width: 100%;
          border-radius: 0;
          display: block;
          border: none;
          border-bottom: 2px solid ${theme.colors.muted};
          background-color: ${theme.colors.white};
          -webkit-appearance: none;
          -moz-appearance: none;
          &:focus {
            outline: none;
            border-color: ${theme.colors.primary};
          }
          &:-moz-placeholder {
            opacity: 0;
          }
          &::-moz-placeholder {
            opacity: 0;
          }
          &:-ms-input-placeholder {
            opacity: 0;
          }
          &::-webkit-input-placeholder {
            opacity: 0;
          }
          &:focus,
          &:not(:placeholder-shown) {
            & + label {
              margin-top: 0;
              color: ${theme.colors.muted};
              font-family: ${theme.fontFamily.bold};
              font-size: 75%;
              top: -10px;
            }
          }
        `}
      />
      {id && (
        <Label
          htmlFor={id}
          css={css`
            position: absolute;
            display: block;
            margin: 0;
            width: 100%;
            top: 0;
            left: 0;
            transition: all 200ms ease;
            margin-top: 5px;
          `}
        >
          {title}
        </Label>
      )}
    </Box>
  )
}

export default TextArea
