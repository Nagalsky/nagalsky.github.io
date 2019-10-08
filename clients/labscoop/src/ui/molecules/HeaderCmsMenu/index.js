import { Fragment, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import OutsideClickHandler from 'react-outside-click-handler'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import { Box } from '../../../helpers'
import {
  Icon,
  Divider,
  HeaderCmsMenuForm,
  HeaderCmsMenuNav,
  HeaderCmsMenuQuickLinks,
} from '../..'

const HeaderCmsMenu = ({ ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Box
      {...restProps}
      width={['50px', '76px']}
      borderRightStyle="solid"
      borderRightColor="#344085"
      borderRightWidth="1px"
      py="20px"
      px={['10px', '20px']}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpen(false)
        }}
      >
        <Box
          onClick={toggle}
          css={css`
            cursor: pointer;
          `}
        >
          <Icon size="22px" icon="menu" color="white" />
        </Box>

        {isOpen ? (
          <Fragment>
            <ScrollLock isActive={isOpen} />
            <TouchScrollable isActive={isOpen}>
              <Box
                position="fixed"
                width="266px"
                height={[
                  'calc(100% - 69px)',
                  'calc(100% - 69px)',
                  'calc(100% - 77px)',
                ]}
                bg="#f7f7f7"
                left="0"
                top={['69px', '69px', '77px']}
                p={1}
                zIndex="100"
                overflowY="auto"
                borderRightStyle="solid"
                borderRightColor="#cccccc"
                borderRightWidth="1px"
                borderTopStyle="solid"
                borderTopColor="#cccccc"
                borderTopWidth="1px"
              >
                <HeaderCmsMenuForm />

                <Divider my="25px" bg="#d8d8d8" />

                <HeaderCmsMenuNav />

                <Divider my="25px" bg="#d8d8d8" />

                <HeaderCmsMenuQuickLinks />
              </Box>
            </TouchScrollable>
          </Fragment>
        ) : null}
      </OutsideClickHandler>
    </Box>
  )
}

export default HeaderCmsMenu
