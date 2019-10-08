/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Title = ({ children, tag, ...restProps }) => {
  if (tag === 2) {
    return (
      <h2
        {...restProps}
        css={css`
          font-size: 22px;
        `}
      >
        {children}
      </h2>
    )
  }
  if (tag === 3) {
    return (
      <h3
        {...restProps}
        css={css`
          font-size: 20px;
        `}
      >
        {children}
      </h3>
    )
  }
  if (tag === 4) {
    return (
      <h4
        {...restProps}
        css={css`
          font-size: 18px;
        `}
      >
        {children}
      </h4>
    )
  }
  if (tag === 5) {
    return (
      <h5
        {...restProps}
        css={css`
          font-size: 16px;
        `}
      >
        {children}
      </h5>
    )
  }
  if (tag === 6) {
    return (
      <h6
        {...restProps}
        css={css`
          font-size: 14px;
        `}
      >
        {children}
      </h6>
    )
  }
  return (
    <h1
      {...restProps}
      css={css`
        font-size: 26px;
      `}
    >
      {children}
    </h1>
  )
}

export default Title
