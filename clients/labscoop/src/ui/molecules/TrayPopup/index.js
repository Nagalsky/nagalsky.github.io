import { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { rgba } from 'polished'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import OutsideClickHandler from 'react-outside-click-handler'

import { Box } from '../../../helpers'
import { Button, Icon, BtnLink, Popovers } from '../..'
import theme from '../../../lib/theme'

const TrayPopup = ({ children, ...restProps }) => {
  const {
    inlineBlock,
    toggleVariant,
    toggleTitle,
    toggleLink,
    toggleCentered,
    toggleSize,
    toggleBtnSm,
    toggleBtnMd,
    toggleBlock,
    toggleNoShadow,
    headerBackBtnTitle,
    icon,
    iconColor,
    popoverContent,
    popoverPosition,
  } = restProps

  const [isOpen, setIsOpen] = useState(false)
  const showPopup = () => setIsOpen(!isOpen)

  const el = document.body
  if (isOpen) {
    el.classList.add('trayPopupIsOpened')
  } else {
    el.classList.remove('trayPopupIsOpened')
  }

  return (
    <Box {...restProps} display={inlineBlock ? 'inline-flex' : 'flex'}>
      <Button
        onClick={showPopup}
        variant={toggleVariant}
        btnBlock={toggleBlock}
        textAlign={toggleCentered && 'center'}
        display={toggleCentered && 'flex'}
        width={toggleCentered && '100%'}
        css={css`
          box-shadow: none;
          padding: ${toggleBtnSm && '5px 20px'};
          padding: ${toggleBtnMd && '12px 30px'};
          padding: ${toggleLink && '0'};
          padding: ${icon && '0'};
          border: ${(icon && 'none') || (toggleLink && 'none')};
          font-size: ${toggleBtnSm && '12px'};
          text-align: ${toggleCentered && 'center'};
          font-size: ${toggleSize};
          &:hover,
          &:focus {
            border: ${icon && 'none'};
            background: ${(icon && 'transparent') ||
              (toggleLink && 'transparent')};
            color: ${toggleLink && theme.colors.primary};
            box-shadow: ${toggleNoShadow && 'none !important'};
          }
        `}
      >
        {icon && !popoverContent && (
          <Icon icon={icon} color={iconColor} size="20px" />
        )}

        {popoverContent && (
          <Popovers position={popoverPosition} content={popoverContent}>
            {icon && <Icon icon={icon} size="20px" color={iconColor} />}
          </Popovers>
        )}

        {toggleTitle}
      </Button>

      <Box
        bg={rgba(0, 0, 0, 0.85)}
        position="fixed"
        top={0}
        right={0}
        height="100%"
        width="100%"
        opacity={isOpen ? '1' : '0'}
        zIndex="1200"
        css={css`
          transition: all 0.2s cubic-bezier(0.7, 0, 0.3, 1);
          cursor: pointer;
          visibility: ${isOpen ? 'visible' : 'hidden'};
        `}
      >
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsOpen(false)
          }}
        >
          <ScrollLock isActive={isOpen} />
          <TouchScrollable isActive={isOpen}>
            <Box
              isOpen={isOpen}
              position="fixed"
              top={0}
              right={0}
              bg="white"
              height="100%"
              width={['90%', '500px', '700px', '800px', '1050px']}
              borderLeftWidth={4}
              borderLeftStyle="solid"
              borderLeftColor="primary"
              overflowY="auto"
              css={css`
                white-space: normal;
                transition: all 0.2s cubic-bezier(0.7, 0, 0.3, 1);
                cursor: auto;
                transform: translate3d(${isOpen ? '0' : '100%'}, 0, 0);
              `}
            >
              <Box
                px={[1, 1, 2, 3, 5]}
                py={[1, 2]}
                borderBottomWidth="1px"
                borderBottomStyle="solid"
                borderBottomColor="#e6e6e6"
              >
                <BtnLink
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  css={css`
                    color: ${theme.colors.primary};
                    font-family: ${theme.fontFamily.bold};
                    text-transform: uppercase;
                    font-size: 12px;
                    display: inline-flex;
                    align-items: center;
                    &:hover {
                      color: ${theme.colors.black};
                    }
                  `}
                >
                  <Icon icon="long-arrow-left" mr="5px" />
                  {headerBackBtnTitle}
                </BtnLink>
              </Box>
              {children}
            </Box>
          </TouchScrollable>
        </OutsideClickHandler>
      </Box>
    </Box>
  )
}
export default TrayPopup
