/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Container from '../Container/Container'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'

import { baseColors } from '../../lib/variables'

const Header = () => {
  return (
    <header
      css={css`
        background-color: ${baseColors.white};
        color: black;
        padding: 15px 0;
      `}
    >
      <Container containerHeader>
        <HeaderLogo />
        <HeaderMenu />
      </Container>
    </header>
  )
}

export default Header
