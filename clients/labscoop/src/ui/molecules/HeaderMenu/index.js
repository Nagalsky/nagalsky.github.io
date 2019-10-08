import { Fragment, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '../../../lib/theme'
import { Link } from '@reach/router'
import OutsideClickHandler from 'react-outside-click-handler'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import RSC from 'react-scrollbars-custom'

import { Box } from '../../../helpers/Box/..'
import { Icon, HeaderMenuItem, HeaderMenuTitle } from '../../'

const StyledLink = styled(Link)`
  display: flex;
  text-align: left;
  width: 100%;
  padding: 15px 30px 15px 0px;
  color: ${props => (props.active ? theme.colors.success : theme.colors.white)};
  font-family: ${theme.fontFamily.bold};
  border: none;
  background-color: transparent;
  font-size: 16px;
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${theme.colors.successSecondary};
    background-color: transparent;
    svg {
      path {
        fill: ${theme.colors.successSecondary} !important;
      }
    }
  }
`

const StyledSubLink = styled(Link)`
  display: block;
  padding: 7.5px 0px;
  color: ${theme.colors.white};
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${theme.colors.successSecondary};
  }
`

const menuData = [
  { title: 'Antibodies', href: '/' },
  { title: 'Assay Kits', href: '/' },
  { title: 'Biochemicals & Reagents', href: '/' },
  { title: 'Cell Culture', href: '/' },
  { title: 'Chromatography', href: '/' },
  { title: 'Molecular Biology', href: '/' },
  { title: 'Human & Animal Biologicals', href: '/' },
  { title: 'Plant & Agricultural Science', href: '/' },
  { title: 'Proteomics', href: '/' },
  { title: 'Cell Biology', href: '/' },
  { title: 'PCR Amplificiation', href: '/' },
  { title: 'Animal Research', href: '/' },
  { title: 'Science Education', href: '/' },
  { title: 'Services Education', href: '/' },
  { title: 'Services', href: '/' },
  { title: 'Software', href: '/' },
  { title: 'Human & Animal Biologicals', href: '/' },
  { title: 'Plant & Agricultural Science', href: '/' },
  { title: 'Proteomics', href: '/' },
  { title: 'Cell Biology', href: '/' },
  { title: 'PCR Amplificiation', href: '/' },
  { title: 'Animal Research', href: '/' },
  { title: 'Science Education', href: '/' },
  { title: 'Services Education', href: '/' },
  { title: 'Services', href: '/' },
  { title: 'Software', href: '/' },
]

const menuData2 = [
  { title: 'lorem', href: '/' },
  { title: 'ipsum', href: '/' },
  { title: 'sit amet', href: '/' },
  { title: 'lorem', href: '/' },
  { title: 'ipsum', href: '/' },
  { title: 'sit amet', href: '/' },
  { title: 'lorem', href: '/' },
  { title: 'ipsum', href: '/' },
  { title: 'sit amet', href: '/' },
]

const HeaderMenu = ({ children, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const el = document.body
  if (isOpen) {
    el.classList.add('menuIsOpened')
  } else {
    el.classList.remove('menuIsOpened')
  }

  return (
    <Box {...restProps} order={[1, 1, 2]}>
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpen(false)
        }}
      >
        <Box
          p={0}
          pl={[0, 0, '5px']}
          ml={[0, 0, 1]}
          mr={['10px', '10px', 1]}
          onClick={toggle}
          display="flex"
          height="21px"
          css={css`
            cursor: pointer;
          `}
        >
          <Icon size="18px" icon="bars" />
        </Box>
        {isOpen ? (
          <Fragment>
            <ScrollLock isActive={isOpen} />
            <TouchScrollable isActive={isOpen}>
              <Box
                position="fixed"
                overflowY={['auto', 'auto', 'visible']}
                width="100%"
                height={['100%', '100%', 'calc(100% - 68px)']}
                bg="primary"
                left="0"
                top={['0', '0', '68px']}
                zIndex="100"
              >
                <RSC
                  id="RSC-Example-main"
                  css={css`
                    height: 100% !important;
                    @media (max-width: 767px) {
                      height: calc(100vh) !important;
                    }
                    .subMenuIsOpened {
                      .ScrollbarsCustom {
                        opacity: 0;
                      }
                    }
                    .ScrollbarsCustom-Track {
                      background-color: #033281 !important;
                      height: calc(100%) !important;
                      top: 0 !important;
                      right: 0 !important;
                      width: 8px !important;
                    }
                    .ScrollbarsCustom-Thumb.ScrollbarsCustom-ThumbY {
                      background-color: ${theme.colors
                        .successSecondary} !important;
                    }
                  `}
                >
                  <Box px={1} height={['100%', '100%', 'calc(100vh - 68px)']}>
                    <Box
                      p="5px"
                      color="white"
                      position="absolute"
                      right="25px"
                      top="10px"
                      onClick={toggle}
                      zIndex="40"
                      css={css`
                        cursor: pointer;
                      `}
                    >
                      <Icon
                        size="22px"
                        color={theme.colors.white}
                        icon="times-circle"
                      />
                    </Box>

                    <Box
                      {...restProps}
                      ml={[0, 0, 0, '182px', '215px']}
                      maxWidth={['100%', '100%', '350px', '350px']}
                      wdith="100%"
                      py={3}
                      borderRightWidth={['0px', '0px', '1px']}
                      borderRightStyle="solid"
                      borderRightColor="successSecondary"
                      bg="primary"
                      display="flex"
                      flexDirection="column"
                      minHeight="100%"
                      position="relative"
                      overflow={['hidden', 'hidden', 'visible']}
                      css={css`
                        @media (min-width: 1400px) {
                          width: 550px !important;
                        }
                        &:hover,
                        &:focus {
                          text-decoration: none;
                        }
                      `}
                    >
                      <StyledLink to="/">
                        <Icon
                          size="20px"
                          icon="store"
                          color={theme.colors.white}
                          css={css`
                            margin-right: 15px;
                            flex-shrink: 0;
                          `}
                        />
                        Shop by Brand
                      </StyledLink>

                      <HeaderMenuTitle>Shop by Category</HeaderMenuTitle>

                      <HeaderMenuItem icon="dna" title="Life Science">
                        {menuData.map((item, index) => (
                          <StyledSubLink key={index} to={item.href}>
                            {item.title}
                          </StyledSubLink>
                        ))}
                      </HeaderMenuItem>

                      <HeaderMenuItem icon="flask" title="Chemistry">
                        {menuData2.map((item, index) => (
                          <StyledSubLink key={index} to={item.href}>
                            {item.title}
                          </StyledSubLink>
                        ))}
                      </HeaderMenuItem>

                      <HeaderMenuItem icon="atom" title="Material Science">
                        {menuData.map((item, index) => (
                          <StyledSubLink key={index} to={item.href}>
                            {item.title}
                          </StyledSubLink>
                        ))}
                      </HeaderMenuItem>

                      <HeaderMenuItem icon="heartbeat" title="Healthcare">
                        {menuData2.map((item, index) => (
                          <StyledSubLink key={index} to={item.href}>
                            {item.title}
                          </StyledSubLink>
                        ))}
                      </HeaderMenuItem>

                      <HeaderMenuItem icon="vials" title="Labware">
                        {menuData.map((item, index) => (
                          <StyledSubLink key={index} to={item.href}>
                            {item.title}
                          </StyledSubLink>
                        ))}
                      </HeaderMenuItem>

                      <HeaderMenuItem
                        icon="balance-scale-right"
                        title="Lab Equipment"
                      >
                        {menuData2.map((item, index) => (
                          <StyledSubLink key={index} to={item.href}>
                            {item.title}
                          </StyledSubLink>
                        ))}
                      </HeaderMenuItem>

                      <HeaderMenuItem icon="apple" title="Science Education">
                        {menuData2.map((item, index) => (
                          <StyledSubLink key={index} to={item.href}>
                            {item.title}
                          </StyledSubLink>
                        ))}
                      </HeaderMenuItem>

                      <HeaderMenuTitle>Need Help?</HeaderMenuTitle>

                      <StyledLink to="/">
                        <Icon
                          size="20px"
                          icon="envelope-solid"
                          color={theme.colors.white}
                          css={css`
                            margin-right: 15px;
                            flex-shrink: 0;
                          `}
                        />
                        support@labscoop.com
                      </StyledLink>

                      <StyledLink to="/">
                        <Icon
                          size="20px"
                          icon="comments-solid"
                          color={theme.colors.white}
                          css={css`
                            margin-right: 15px;
                            flex-shrink: 0;
                          `}
                        />
                        Live Chat
                      </StyledLink>

                      <StyledLink to="/">
                        <Icon
                          size="20px"
                          icon="phone"
                          color={theme.colors.white}
                          css={css`
                            margin-right: 15px;
                            flex-shrink: 0;
                          `}
                        />
                        800.316.3081
                      </StyledLink>
                    </Box>
                  </Box>
                </RSC>
              </Box>
            </TouchScrollable>
          </Fragment>
        ) : null}
      </OutsideClickHandler>
    </Box>
  )
}

export default HeaderMenu
