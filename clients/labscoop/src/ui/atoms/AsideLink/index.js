/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'
import theme from '../../../lib/theme'

const AsideLink = ({ children, ...restProps }) => {
  return (
    <Link
      {...restProps}
      css={css`
        @media screen and (min-width: 768px) {
          align-items: flex-end;
        }
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: ${theme.fontFamily.bold};
        padding: 5px 15px 5px 0;
        border-right: 3px solid ${theme.colors.muted};
        color: ${theme.colors.black};
        line-height: 1.3;
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 5px;
        }
        &[aria-current='page'] {
          border-right-color: ${theme.colors.warning};
        }
        &:hover,
        &:focus {
          text-decoration: none;
          color: ${theme.colors.black};
          border-right-color: ${theme.colors.warning};
        }
      `}
    >
      {children}
    </Link>
  )
}

export default AsideLink
