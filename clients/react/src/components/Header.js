import React, { Component } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Container from './Container'
import { breakpoints } from '../lib/breakpoints'

class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <h1
            css={css`
              ${breakpoints.xsDown} {
                display: none;
              }
            `}
          >
            I'm a header
          </h1>
        </Container>
      </header>
    )
  }
}

export default Header
