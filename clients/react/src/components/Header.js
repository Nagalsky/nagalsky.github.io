import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Container from './Container'
import { baseColors } from '../lib/variables'
import { breakpoints } from '../lib/breakpoints'
import logo from '../images/elements/logo.svg'

const headerMenu = [
  { title: 'home', href: '/' },
  { title: 'contact', href: '/contact' },
]

class Header extends Component {
  render() {
    return (
      <header
        css={css`
          background-color: ${baseColors.white};
          color: black;
          padding: 15px 0;
        `}
      >
        <Container>
          <div
            css={css`
              ${breakpoints.smUp} {
                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: space-between;
              }
            `}
          >
            <a
              href="/"
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
            </a>
            <ul
              css={css`
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
              `}
            >
              {headerMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    css={css`
                      color: ${baseColors.brand};
                      text-transform: uppercase;
                      padding: 10px 15px;
                      &:hover,
                      &:focus {
                        color: red;
                      }
                    `}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </header>
    )
  }
}

export default Header
