import React from 'react'
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import { layout, flexbox } from 'styled-system'
import Select from 'react-select'

import Box from '../../../helpers/Box/'
import theme from '../../../lib/theme'
import {
  HeaderForm,
  HeaderAccount,
  HeaderMenu,
  Tray,
  Anchor,
  Button,
  Text,
  Image,
  Icon,
} from '../../'

import headerLogo from '../../../assets/images/elements/logo.svg'

const selectOptions = [
  { value: '1,000', label: '1,000' },
  { value: '2,000', label: '2,000' },
  { value: '3,000', label: '3,000' },
]

const StyledHeader = styled.header`
  position: relative;
  z-index: 600;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.white};
`

const StyledHeaderLogoLink = styled(Link)`
  ${layout}
  ${flexbox}
`

const TrayControlButton = styled.button`
  color: ${theme.colors.primary};
  background-color: transparent;
  border: none;
  font-family: ${theme.fontFamily.bold};
  padding: 0;
  font-size: 12px;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

let totalPrice = 300

const Header = ({ headerLoggedIn, ...restProps }) => {
  return (
    <StyledHeader>
      <Box
        {...restProps}
        px={[1, 1, 1, 1, 5]}
        py={1}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        borderBottomWidth={3}
        borderBottomColor="primary"
        borderBottomStyle="solid"
      >
        <HeaderMenu />

        <StyledHeaderLogoLink
          to="/"
          order={[2, 2, 1]}
          width={['110px', '125px']}
          display="block"
        >
          <Image src={headerLogo} alt="Logo" width="100%" />
        </StyledHeaderLogoLink>

        <HeaderAccount
          order={[3, 4, 4]}
          ml={['auto', 'auto', 4]}
          headerLoggedIn={headerLoggedIn}
        />

        <Tray order={[4, 4, 5]} totalPrice={totalPrice}>
          <Box pb={2}>
            <Box
              position="sticky"
              zIndex="100"
              top="0"
              left="0"
              pt={2}
              width="100%"
              bg="white"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px={[2, 2, '30px']}
              >
                <Box flexGrow="1">
                  <Box fontSize="1.25rem" lineHeight="1">
                    My Cart
                  </Box>
                  <Anchor href="/" bold small>
                    View All Carts
                  </Anchor>
                </Box>

                <Box flexShrink="0" ml={2} display="flex" alignItems="center">
                  <Icon size="20px" icon="shopping-cart" />
                  <Box
                    fontSize="12px"
                    fontFamily={theme.fontFamily.bold}
                    ml="5px"
                    display="inline-block"
                    verticalAlign="middle"
                  >
                    {totalPrice}
                  </Box>
                </Box>
              </Box>

              <Box
                mt={2}
                bg="silver"
                py={['20px']}
                px={[2, 2, '30px']}
                textAlign="center"
              >
                <Button variant="primary" btnBlock py="12px">
                  Checkout
                </Button>
              </Box>
            </Box>

            <Box
              px={[2, 2, '30px']}
              py={3}
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              borderBottomColor="silver"
              fontSize="12px"
            >
              <Box mb="5px" color="primary" fontFamily={theme.fontFamily.bold}>
                HEPES Buffer Solution, 70% (Zwitterionic Buffer)
              </Box>
              <Box mb="10px" display="flex" alignItems="center">
                by Redoxica, Inc.
                <Icon size="18px" icon="badge-logo" ml="5px" />
              </Box>

              <Box
                display="grid"
                gridGap="15px"
                gridTemplateColumns="repeat(1,1.5fr 1fr)"
                mb="20px"
              >
                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Catalog Number
                  </Text>
                  <Text>4568-2124-4547GTR</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Price
                  </Text>
                  <Text>$300,000.00 USD</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Size
                  </Text>
                  <Text>100,000 Assays / Cartridge</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="0px">
                    Quantity
                  </Text>
                  <Select
                    options={selectOptions}
                    defaultValue={selectOptions[0]}
                    isSearchable={false}
                    menuPlacement="auto"
                    className="select"
                    classNamePrefix="select"
                    placeholder="Custom placeholder"
                  />
                </Box>
              </Box>

              <TrayControlButton>Remove</TrayControlButton>
              <TrayControlButton>Save for Later</TrayControlButton>
            </Box>

            <Box
              px={[2, 2, '30px']}
              py={3}
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              borderBottomColor="silver"
              fontSize="12px"
            >
              <Box mb="5px" color="primary" fontFamily={theme.fontFamily.bold}>
                HEPES Buffer Solution, 70% (Zwitterionic Buffer)
              </Box>
              <Box mb="10px" display="flex" alignItems="center">
                by Redoxica, Inc.
                <Icon size="18px" icon="badge-logo" ml="5px" />
              </Box>

              <Box
                display="grid"
                gridGap="15px"
                gridTemplateColumns="repeat(1,1.5fr 1fr)"
                mb="20px"
              >
                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Catalog Number
                  </Text>
                  <Text>4568-2124-4547GTR</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Price
                  </Text>
                  <Text>$300,000.00 USD</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Size
                  </Text>
                  <Text>100,000 Assays / Cartridge</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="0px">
                    Quantity
                  </Text>
                  <Select
                    options={selectOptions}
                    defaultValue={selectOptions[0]}
                    isSearchable={false}
                    menuPlacement="auto"
                    className="select"
                    classNamePrefix="select"
                    placeholder="Custom placeholder"
                  />
                </Box>
              </Box>

              <TrayControlButton>Remove</TrayControlButton>
              <TrayControlButton>Save for Later</TrayControlButton>
            </Box>

            <Box
              px={[2, 2, '30px']}
              py={3}
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              borderBottomColor="silver"
              fontSize="12px"
            >
              <Box mb="5px" color="primary" fontFamily={theme.fontFamily.bold}>
                HEPES Buffer Solution, 70% (Zwitterionic Buffer)
              </Box>
              <Box mb="10px" display="flex" alignItems="center">
                by Redoxica, Inc.
                <Icon size="18px" icon="badge-logo" ml="5px" />
              </Box>

              <Box
                display="grid"
                gridGap="15px"
                gridTemplateColumns="repeat(1,1.5fr 1fr)"
                mb="20px"
              >
                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Catalog Number
                  </Text>
                  <Text>4568-2124-4547GTR</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Price
                  </Text>
                  <Text>$300,000.00 USD</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Size
                  </Text>
                  <Text>100,000 Assays / Cartridge</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="0px">
                    Quantity
                  </Text>
                  <Select
                    options={selectOptions}
                    defaultValue={selectOptions[0]}
                    isSearchable={false}
                    menuPlacement="auto"
                    className="select"
                    classNamePrefix="select"
                    placeholder="Custom placeholder"
                  />
                </Box>
              </Box>

              <TrayControlButton>Remove</TrayControlButton>
              <TrayControlButton>Save for Later</TrayControlButton>
            </Box>

            <Box
              px={[2, 2, '30px']}
              py={3}
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              borderBottomColor="silver"
              fontSize="12px"
            >
              <Box mb="5px" color="primary" fontFamily={theme.fontFamily.bold}>
                HEPES Buffer Solution, 70% (Zwitterionic Buffer)
              </Box>
              <Box mb="10px" display="flex" alignItems="center">
                by Redoxica, Inc.
                <Icon size="18px" icon="badge-logo" ml="5px" />
              </Box>

              <Box
                display="grid"
                gridGap="15px"
                gridTemplateColumns="repeat(1,1.5fr 1fr)"
                mb="20px"
              >
                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Catalog Number
                  </Text>
                  <Text>4568-2124-4547GTR</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Price
                  </Text>
                  <Text>$300,000.00 USD</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Size
                  </Text>
                  <Text>100,000 Assays / Cartridge</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="0px">
                    Quantity
                  </Text>
                  <Select
                    options={selectOptions}
                    defaultValue={selectOptions[0]}
                    isSearchable={false}
                    menuPlacement="auto"
                    className="select"
                    classNamePrefix="select"
                    placeholder="Custom placeholder"
                  />
                </Box>
              </Box>

              <TrayControlButton>Remove</TrayControlButton>
              <TrayControlButton>Save for Later</TrayControlButton>
            </Box>

            <Box
              px={[2, 2, '30px']}
              py={3}
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              borderBottomColor="silver"
              fontSize="12px"
            >
              <Box mb="5px" color="primary" fontFamily={theme.fontFamily.bold}>
                HEPES Buffer Solution, 70% (Zwitterionic Buffer)
              </Box>
              <Box mb="10px" display="flex" alignItems="center">
                by Redoxica, Inc.
                <Icon size="18px" icon="badge-logo" ml="5px" />
              </Box>

              <Box
                display="grid"
                gridGap="15px"
                gridTemplateColumns="repeat(1,1.5fr 1fr)"
                mb="20px"
              >
                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Catalog Number
                  </Text>
                  <Text>4568-2124-4547GTR</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Price
                  </Text>
                  <Text>$300,000.00 USD</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="5px">
                    Unit Size
                  </Text>
                  <Text>100,000 Assays / Cartridge</Text>
                </Box>

                <Box>
                  <Text fontFamily={theme.fontFamily.bold} mb="0px">
                    Quantity
                  </Text>
                  <Select
                    options={selectOptions}
                    defaultValue={selectOptions[0]}
                    isSearchable={false}
                    menuPlacement="auto"
                    className="select"
                    classNamePrefix="select"
                    placeholder="Custom placeholder"
                  />
                </Box>
              </Box>

              <TrayControlButton>Remove</TrayControlButton>
              <TrayControlButton>Save for Later</TrayControlButton>
            </Box>
          </Box>
        </Tray>

        <HeaderForm
          mt={['10px', '10px', 0]}
          order={[4, 4, 3]}
          flex={1}
          flexBasis={['100%', '100%', 'auto']}
        />
      </Box>
    </StyledHeader>
  )
}

export default Header
