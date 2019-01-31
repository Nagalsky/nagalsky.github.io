import { Link } from 'react-router-dom'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import logo from '../../images/elements/logo.svg'

const HeaderLogo = () => {
  return (
    <Link
      to="/"
      css={css`
        display: block;
        width: 100px;
      `}
    >
      <img
        src={logo}
        alt="headerLogo"
        css={css`
          width: 100%;
          display: block;
        `}
      />
    </Link>
  )
}

export default HeaderLogo
