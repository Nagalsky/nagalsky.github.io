import { NavLink } from 'react-router-dom'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { darken } from 'polished'

import { baseColors } from '../../lib/variables'

const headerMenu = [
  { title: 'home', href: '/' },
  { title: 'contact', href: '/contact' },
]

const HeaderMenu = () => {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
      `}
    >
      {headerMenu.map((headerMenuItem, index) => (
        <li key={index}>
          <NavLink
            exact
            to={headerMenuItem.href}
            css={css`
              color: ${baseColors.brand};
              text-transform: uppercase;
              padding: 10px 15px;
              &:hover {
                color: ${darken(0.6, baseColors.brand)};
              }
            `}
            activeStyle={{
              color: darken('0.6', baseColors.brand),
            }}
          >
            {headerMenuItem.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default HeaderMenu
