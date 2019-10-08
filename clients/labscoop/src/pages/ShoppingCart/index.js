import { Fragment, useCallback, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import styled from '@emotion/styled'
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'
import { Link } from '@reach/router'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import RSC from 'react-scrollbars-custom'

import { Box, Container } from '../../helpers'
import {
  Header,
  Footer,
  Button,
  Aside,
  Text,
  Label,
  Title,
  Anchor,
  Image,
  Panel,
  AsideLink,
  Popovers,
  Divider,
  Icon,
  Field,
  TrayPopup,
  DropZone,
  Checkbox,
  BtnLink,
  FadeHorizontalScroll,
} from '../../ui'

import searchItemImage from '../../assets/images/temp/search-result-product.jpg'
import imgShip from '../../assets/images/elements/ship.svg'

const StyledQuotationBox = styled(Box)`
  padding: 15px;
  border: 1px solid ${theme.colors.muted};
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

const productCardData = [
  {
    productID: 'T456987159-100MG',
    productName: 'Thioredoxin Activity Assay Kit',
    productNamePath: '/',
    productBy: 'Redoxica, Inc.',
    productAddedBy: 'Added by Mary Williams on Sep. 25,2018',
    productUnitSize: '50MG, ADVANCED KIT, 120V, GLASS, SILVER',
    productPrice: '$0.00',
    productItemTotal: '$27,000.00',
    productQuote: 'LQ6984614-001',
    productShipsFrom: 'Labscoop',
    productEstimatedDelivery: '04/25/2015',
  },
]

const productCardData2 = [
  {
    productID: 'T456987159-100MG',
    productName: 'Thioredoxin Activity Assay Kit',
    productNamePath: '/',
    productBy: 'Redoxica, Inc.',
    productAddedBy: 'Added by Mary Williams on Sep. 25,2018',
    productUnitSize: '50MG, ADVANCED KIT, 120V, GLASS, SILVER',
    productPrice: '$0.00',
    productItemTotal: '$27,000.00',
    productQuote: 'LQ6984614-001',
    productShipsFrom: 'Labscoop',
    productEstimatedDelivery: '04/25/2015',
  },
]

const SharedCart = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const [isOrderTotalOpen, setIsOrderTotalOpen] = useState(false)
  const toggleOrderTotal = () => setIsOrderTotalOpen(!isOrderTotalOpen)

  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false)
  const toggleAsideMenu = () => setIsAsideMenuOpen(!isAsideMenuOpen)

  return (
    <Fragment>
      <Header />

      <main className="content">
        <Box
          pt={2}
          pb={5}
          px={[1, 1, 1, 5]}
          display="flex"
          flexDirection={['column', 'column', 'row']}
        >
          <ScrollLock isActive={isAsideMenuOpen} />
          <TouchScrollable isActive={isAsideMenuOpen}>
            <Aside
              flexBasis={['auto', 'auto', '140px']}
              mb={[1, 1, 0]}
              bg="white"
              display={[
                isAsideMenuOpen ? 'block' : 'none',
                isAsideMenuOpen ? 'block' : 'none',
                'block',
              ]}
              overflowY={isAsideMenuOpen && 'auto'}
              position={isAsideMenuOpen && 'fixed'}
              width={isAsideMenuOpen ? '100%' : 'auto'}
              height={[
                isAsideMenuOpen ? 'calc(100% - 111px)' : 'auto',
                isAsideMenuOpen ? 'calc(100% - 111px)' : 'auto',
                isAsideMenuOpen ? 'calc(100% - 71px)' : 'auto',
              ]}
              p={isAsideMenuOpen ? 1 : 0}
              zIndex="4000"
              left="0"
              top={['111px', '111px', '71px']}
            >
              <Box
                onClick={toggleAsideMenu}
                flexShrink="0"
                ml={2}
                position="absolute"
                top="15px"
                right="15px"
                display={isAsideMenuOpen ? 'inline-block' : 'none'}
                css={css`
                  cursor: pointer;
                `}
              >
                <Icon icon="times" size="20px" />
              </Box>

              <Text
                textAlign={['left', 'left', 'left', 'right']}
                color="muted"
                fontFamily={theme.fontFamily.bold}
              >
                Shopping Carts
              </Text>

              <Box display="flex" flexDirection="column">
                <AsideLink to="/shopping-cart">My Cart</AsideLink>
                <AsideLink to="/shared-cart">
                  Shared Cart
                  <Text
                    display="block"
                    fontFamily={theme.fontFamily.base}
                    fontSize="12px"
                  >
                    Timberland Lab
                  </Text>
                </AsideLink>
              </Box>
            </Aside>
          </TouchScrollable>

          <Box flex="1">
            <Box
              display={['block', 'block', 'block', 'block', 'flex']}
              alignItems="center"
              justifyContent="space-between"
              mb={1}
            >
              <Box mb={[1, 1, 1, 1, 0]} display="flex" alignItems="center">
                <Box flex="1" mr={2}>
                  <Text
                    mb="5px"
                    css={css`
                      text-transform: uppercase;
                      font-size: 11px;
                    `}
                  >
                    5 ITEMS
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    My Cart
                  </Title>
                </Box>

                <Box
                  flexShrink="0"
                  display={['block', 'block', 'none']}
                  textAlign="right"
                >
                  <Box
                    color="muted"
                    fontFamily={theme.fontFamily.bold}
                    onClick={toggleAsideMenu}
                  >
                    Shopping Carts
                    <Icon
                      icon="chevron-down"
                      color={theme.colors.muted}
                      ml="10px"
                    />
                  </Box>
                  <Text fontSize={['12px', '14px']}>
                    <b>My Cart</b>
                  </Text>
                </Box>
              </Box>

              <FadeHorizontalScroll>
                <Box mr="10px" my="4px" display="inline-block">
                  <TrayPopup
                    inlineBlock
                    toggleTitle="Quick Order"
                    toggleBtnSm
                    headerBackBtnTitle="Back to my account"
                  >
                    <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                      <Box
                        mb={[1, 2]}
                        display="grid"
                        gridGap={['15px', '15px', '15px', '15px', '60px']}
                        gridTemplateColumns={[
                          'repeat(1, 1fr)',
                          'repeat(1,1fr)',
                          'repeat(1,1.2fr 1fr)',
                          'repeat(1,1.2fr 1fr)',
                          'repeat(1,1.2fr 1fr)',
                        ]}
                        alignItems="center"
                      >
                        <Box>
                          <Text
                            fontSize={['20px', '22px']}
                            fontFamily={theme.fontFamily.bold}
                          >
                            Quick Add
                          </Text>
                        </Box>

                        <Box display="flex">
                          <Button btnBlock variant="primary" flex="1">
                            Add to Cart
                          </Button>

                          <Button btnBlock variant="primary" flex="1" ml={1}>
                            Checkout
                          </Button>
                        </Box>
                      </Box>

                      <Box
                        display="grid"
                        gridGap="25px"
                        gridTemplateColumns={[
                          'repeat(1,1fr)',
                          'repeat(1,1fr)',
                          'repeat(1, 1fr 2fr 0.8fr)',
                        ]}
                      >
                        <Box>
                          <Field
                            type="text"
                            title="Catalog Number"
                            id="field-catalog-number"
                            mb={0}
                          />
                        </Box>

                        <Select
                          options={[
                            {
                              value: 'lorem ipsum 1',
                              label: 'lorem ipsum 1',
                            },
                            {
                              value: 'lorem ipsum 2',
                              label: 'lorem ipsum 2',
                            },
                            {
                              value: 'lorem ipsum 3',
                              label: 'lorem ipsum 3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="Supplier"
                        />

                        <Box display="flex" alignItems="center">
                          <Box flex="1">
                            <Select
                              options={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="Quantity"
                            />
                          </Box>

                          <Icon
                            icon="trash"
                            ml="20px"
                            flexShrink="0"
                            css={css`
                              cursor: pointer;
                            `}
                          />
                        </Box>

                        <Box>
                          <Button variant="secondary" px={1} py="10px">
                            <Icon icon="plus" />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </TrayPopup>
                </Box>

                <Box mr="10px" my="4px" display="inline-block">
                  <TrayPopup
                    inlineBlock
                    toggleTitle="Add Quote to Cart"
                    toggleBtnSm
                    headerBackBtnTitle="Back to my account"
                  >
                    <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                      <Box
                        mb={[1, 2]}
                        display="grid"
                        gridGap={['15px', '15px', '15px', '15px', '60px']}
                        gridTemplateColumns={[
                          'repeat(1, 1fr)',
                          'repeat(1,1fr)',
                          'repeat(1,2fr 1fr)',
                          'repeat(1,2fr 1fr)',
                          'repeat(1,2.5fr 1fr)',
                        ]}
                        alignItems="center"
                      >
                        <Box>
                          <Text
                            fontSize={['20px', '22px']}
                            fontFamily={theme.fontFamily.bold}
                          >
                            Attach a Quote
                          </Text>
                        </Box>

                        <Button btnBlock variant="primary">
                          Attach Quote
                        </Button>
                      </Box>

                      <Text fontFamily={theme.fontFamily.bold}>
                        Add a New Quotation
                      </Text>

                      <Box
                        width={['100%', '100%', '100%', '75%', '50%']}
                        mb={2}
                      >
                        <Field
                          type="text"
                          title="Quote Number"
                          id="field-quote-number"
                          mb={0}
                        />
                      </Box>

                      <DropZone mb={2} height="100%">
                        <Box {...getRootProps()}>
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here ...</p>
                          ) : (
                            <Box display="flex" alignItems="center">
                              <Icon
                                icon="cloud-upload"
                                mr={1}
                                size="30px"
                                color="#495057"
                              />
                              <Box>
                                <Text
                                  fontSize="18px"
                                  mb={0}
                                  color="primary"
                                  fontFamily={theme.fontFamily.bold}
                                >
                                  Choose a File
                                </Text>
                                <Text fontSize="12px" color="#495057">
                                  or drag and drop them here
                                </Text>
                              </Box>
                            </Box>
                          )}
                        </Box>
                      </DropZone>

                      <Divider my={2} />

                      <Text fontFamily={theme.fontFamily.bold}>
                        Select an Existing Quotation
                      </Text>

                      <StyledQuotationBox
                        flexDirection={['column', 'column', 'row']}
                        alignItems={['flex-start', 'flex-start', 'center']}
                      >
                        <Box display="flex" alignItems="center" mb={[1, 1, 0]}>
                          <Box>
                            <Checkbox title="" id="checkbox-1" />
                          </Box>
                          <Anchor href="/" snall bold ml={1} fontSize="12px">
                            Quote r3r3r3r223
                          </Anchor>
                        </Box>

                        <Box fontSize="12px" flexShrink={0}>
                          <Text mb={0}>
                            <b>Generated:</b> 10/10/2017
                          </Text>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            color="success"
                          >
                            Expiries: 11/10/2017
                          </Text>
                        </Box>
                      </StyledQuotationBox>

                      <StyledQuotationBox
                        flexDirection={['column', 'column', 'row']}
                        alignItems={['flex-start', 'flex-start', 'center']}
                      >
                        <Box display="flex" alignItems="center" mb={[1, 1, 0]}>
                          <Box>
                            <Checkbox title="" id="checkbox-2" />
                          </Box>
                          <Anchor href="/" snall bold ml={1} fontSize="12px">
                            Quote r3r3r3r223
                          </Anchor>
                        </Box>

                        <Box fontSize="12px" flexShrink={0}>
                          <Text mb={0}>
                            <b>Generated:</b> 10/10/2017
                          </Text>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            color="danger"
                          >
                            Expiries: 11/10/2017
                          </Text>
                        </Box>
                      </StyledQuotationBox>

                      <StyledQuotationBox
                        flexDirection={['column', 'column', 'row']}
                        alignItems={['flex-start', 'flex-start', 'center']}
                      >
                        <Box display="flex" alignItems="center" mb={[1, 1, 0]}>
                          <Box>
                            <Checkbox title="" id="checkbox-3" />
                          </Box>
                          <Anchor href="/" snall bold ml={1} fontSize="12px">
                            Quote r3r3r3r223
                          </Anchor>
                        </Box>

                        <Box fontSize="12px" flexShrink={0}>
                          <Text mb={0}>
                            <b>Generated:</b> 10/10/2017
                          </Text>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            color="success"
                          >
                            Expiries: 11/10/2017
                          </Text>
                        </Box>
                      </StyledQuotationBox>

                      <StyledQuotationBox
                        flexDirection={['column', 'column', 'row']}
                        alignItems={['flex-start', 'flex-start', 'center']}
                      >
                        <Box display="flex" alignItems="center" mb={[1, 1, 0]}>
                          <Box>
                            <Checkbox title="" id="checkbox-4" />
                          </Box>
                          <Anchor href="/" snall bold ml={1} fontSize="12px">
                            Quote r3r3r3r223
                          </Anchor>
                        </Box>

                        <Box fontSize="12px" flexShrink={0}>
                          <Text mb={0}>
                            <b>Generated:</b> 10/10/2017
                          </Text>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            color="danger"
                          >
                            Expiries: 11/10/2017
                          </Text>
                        </Box>
                      </StyledQuotationBox>

                      <StyledQuotationBox
                        flexDirection={['column', 'column', 'row']}
                        alignItems={['flex-start', 'flex-start', 'center']}
                      >
                        <Box display="flex" alignItems="center" mb={[1, 1, 0]}>
                          <Box>
                            <Checkbox title="" id="checkbox-5" />
                          </Box>
                          <Anchor href="/" snall bold ml={1} fontSize="12px">
                            Quote r3r3r3r223
                          </Anchor>
                        </Box>

                        <Box fontSize="12px" flexShrink={0}>
                          <Text mb={0}>
                            <b>Generated:</b> 10/10/2017
                          </Text>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            color="success"
                          >
                            Expiries: 11/10/2017
                          </Text>
                        </Box>
                      </StyledQuotationBox>

                      <StyledQuotationBox
                        flexDirection={['column', 'column', 'row']}
                        alignItems={['flex-start', 'flex-start', 'center']}
                      >
                        <Box display="flex" alignItems="center" mb={[1, 1, 0]}>
                          <Box>
                            <Checkbox title="" id="checkbox-6" />
                          </Box>
                          <Anchor href="/" snall bold ml={1} fontSize="12px">
                            Quote r3r3r3r223
                          </Anchor>
                        </Box>

                        <Box fontSize="12px" flexShrink={0}>
                          <Text mb={0}>
                            <b>Generated:</b> 10/10/2017
                          </Text>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            color="danger"
                          >
                            Expiries: 11/10/2017
                          </Text>
                        </Box>
                      </StyledQuotationBox>

                      <StyledQuotationBox
                        flexDirection={['column', 'column', 'row']}
                        alignItems={['flex-start', 'flex-start', 'center']}
                      >
                        <Box display="flex" alignItems="center" mb={[1, 1, 0]}>
                          <Box>
                            <Checkbox title="" id="checkbox-7" />
                          </Box>
                          <Anchor href="/" snall bold ml={1} fontSize="12px">
                            Quote r3r3r3r223
                          </Anchor>
                        </Box>

                        <Box fontSize="12px" flexShrink={0}>
                          <Text mb={0}>
                            <b>Generated:</b> 10/10/2017
                          </Text>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            color="success"
                          >
                            Expiries: 11/10/2017
                          </Text>
                        </Box>
                      </StyledQuotationBox>

                      <StyledQuotationBox
                        flexDirection={['column', 'column', 'row']}
                        alignItems={['flex-start', 'flex-start', 'center']}
                      >
                        <Box display="flex" alignItems="center" mb={[1, 1, 0]}>
                          <Box>
                            <Checkbox title="" id="checkbox-8" />
                          </Box>
                          <Anchor href="/" snall bold ml={1} fontSize="12px">
                            Quote r3r3r3r223
                          </Anchor>
                        </Box>

                        <Box fontSize="12px" flexShrink={0}>
                          <Text mb={0}>
                            <b>Generated:</b> 10/10/2017
                          </Text>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            color="danger"
                          >
                            Expiries: 11/10/2017
                          </Text>
                        </Box>
                      </StyledQuotationBox>
                    </Box>
                  </TrayPopup>
                </Box>

                <Box mr="10px" my="4px" display="inline-block">
                  <TrayPopup
                    inlineBlock
                    toggleBtnSm
                    toggleTitle="Add Non-Catalog Items"
                    headerBackBtnTitle="Back to my account"
                  >
                    <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                      <Box
                        mb={[1, 2]}
                        display="grid"
                        gridGap={['15px', '15px', '15px', '15px', '60px']}
                        gridTemplateColumns={[
                          'repeat(1, 1fr)',
                          'repeat(1,1fr)',
                          'repeat(1,2fr 1fr)',
                          'repeat(1,2fr 1fr)',
                          'repeat(1,2.5fr 1fr)',
                        ]}
                        alignItems="center"
                      >
                        <Text
                          fontSize={['20px', '22px']}
                          fontFamily={theme.fontFamily.bold}
                          mb="0"
                        >
                          Add Non-Catalog Items
                        </Text>

                        <Button variant="primary" btnBlock>
                          Add to Card
                        </Button>
                      </Box>

                      <Text>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium.
                      </Text>

                      <Box
                        display="grid"
                        gridGap="15px"
                        gridTemplateColumns={[
                          'repeat(1,1fr)',
                          'repeat(1,1fr 1.5fr 1.5fr)',
                          'repeat(1,1fr 1.5fr 1.5fr)',
                          'repeat(1,1fr 1.5fr 1.5fr)',
                          'repeat(1,1fr 1.5fr 1.5fr 0.7fr 0.7fr 0.3fr)',
                        ]}
                        alignItems="center"
                      >
                        <Box>
                          <Field
                            type="text"
                            title="Curd Number"
                            id="field-add-card-curd-number"
                          />
                        </Box>

                        <Box>
                          <Field
                            type="text"
                            title="Name on Card"
                            id="field-add-card-name-card"
                          />
                        </Box>

                        <Select
                          options={[
                            {
                              value: 'lorem ipsum 1',
                              label: 'lorem ipsum 1',
                            },
                            {
                              value: 'lorem ipsum 2',
                              label: 'lorem ipsum 2',
                            },
                            {
                              value: 'lorem ipsum 3',
                              label: 'lorem ipsum 3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="Supplier"
                        />

                        <Select
                          options={[
                            {
                              value: 'lorem ipsum 1',
                              label: 'lorem ipsum 1',
                            },
                            {
                              value: 'lorem ipsum 2',
                              label: 'lorem ipsum 2',
                            },
                            {
                              value: 'lorem ipsum 3',
                              label: 'lorem ipsum 3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="Quantity"
                        />

                        <Select
                          options={[
                            {
                              value: 'lorem ipsum 1',
                              label: 'lorem ipsum 1',
                            },
                            {
                              value: 'lorem ipsum 2',
                              label: 'lorem ipsum 2',
                            },
                            {
                              value: 'lorem ipsum 3',
                              label: 'lorem ipsum 3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="Unit Price"
                        />

                        <Icon
                          icon="trash"
                          css={css`
                            cursor: pointer;
                          `}
                        />

                        <Box>
                          <Button variant="secondary" px={1} py="10px">
                            <Icon icon="plus" />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </TrayPopup>
                </Box>

                <Box my="4px" mr={[3, 3, 0]} display="inline-block">
                  <TrayPopup
                    toggleTitle="Print Quote"
                    toggleBtnSm
                    inlineBlock
                    headerBackBtnTitle="Back to my account"
                  >
                    <Box px={[1, 1, 2, 3, 5]} pt={2} pb={5}>
                      <Box
                        mb={[1, 2]}
                        display="grid"
                        gridGap={['15px', '15px', '15px', '15px', '60px']}
                        gridTemplateColumns={[
                          'repeat(1, 1fr)',
                          'repeat(1,1fr)',
                          'repeat(1,1.2fr 1fr)',
                          'repeat(1,1.2fr 1fr)',
                          'repeat(1,1.2fr 1fr)',
                        ]}
                        alignItems="center"
                      >
                        <Text
                          fontSize={['20px', '22px']}
                          fontFamily={theme.fontFamily.bold}
                          mb="0"
                        >
                          Request a Quote
                        </Text>

                        <Box display="flex" flexDirection={['column', 'row']}>
                          <Button
                            btnBlock
                            variant="primary"
                            flex="1"
                            mb={[1, 0]}
                          >
                            Generate Instant Quote
                          </Button>

                          <Button
                            btnBlock
                            variant="primary"
                            flex="1"
                            ml={[0, 1]}
                          >
                            Submit Quote Request
                          </Button>
                        </Box>
                      </Box>

                      <Text
                        fontSize="16px"
                        color="primary"
                        fontFamily={theme.fontFamily.bold}
                        my={0}
                      >
                        Thioredoxin Activity Assay Kit
                      </Text>
                      <Text fontSize="12px">by Redoxica, Inc.</Text>

                      <Box
                        display="grid"
                        gridGap="15px"
                        gridTemplateColumns={[
                          'repeat(1,1fr)',
                          'repeat(2,1fr)',
                          'repeat(2,1fr)',
                          'repeat(1,1.5fr 1.5fr 1fr 1fr)',
                          'repeat(1,1.5fr 1.5fr 1fr 1fr)',
                        ]}
                        css={css`
                          text-transform: uppercase;
                        `}
                      >
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            catalog number
                          </Text>
                          <Text fontSize="12px">t515421541-ss</Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            configuration
                          </Text>
                          <Text fontSize="12px">
                            50mg, advanced kit, 120v, glass, silver
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={theme.fontFamily.bold}
                            mb={0}
                            fontSize="12px"
                          >
                            price
                          </Text>
                          <Text fontSize="12px">$0.00</Text>
                        </Box>
                        <Box>
                          <Label mb={0} fontSize="12px">
                            QUANTITY
                          </Label>
                          <Select
                            options={[
                              { value: '1', label: '1' },
                              { value: '2', label: '2' },
                              { value: '3', label: '3' },
                            ]}
                            isSearchable={false}
                            menuPlacement="auto"
                            className="select select-small"
                            classNamePrefix="select"
                          />
                        </Box>
                      </Box>

                      <Divider my={3} />

                      <Box
                        display="grid"
                        gridGap={['15px', '15px', '15px', '25px', '45px']}
                        gridTemplateColumns={[
                          'repeat(1,1fr)',
                          'repeat(1,1fr)',
                          'repeat(2,1fr)',
                        ]}
                      >
                        <Box>
                          <Text
                            fontSize="16px"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Shipping Address
                          </Text>

                          <Box mb={2}>
                            <Select
                              options={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="Choose an Existing Shipping Address"
                            />
                          </Box>
                          <Field
                            type="text"
                            title="Full Name"
                            id="field-full-name"
                          />
                          <Field
                            type="text"
                            title="Company / Institution"
                            id="field-company-institution"
                          />
                          <Field
                            type="text"
                            title="Address Line 1"
                            id="field-address-line-1"
                          />
                          <Field
                            type="text"
                            title="Address Line 2"
                            id="field-address-line-2"
                          />
                          <Field
                            type="text"
                            title="Building / Room / Mail Stop"
                            id="field-building"
                          />
                          <Field type="text" title="City" id="field-city" />
                          <Field
                            type="text"
                            title="State / Province / Region"
                            id="field-city"
                          />
                          <Field
                            type="text"
                            title="Zip Code / Postal Code"
                            id="field-zip"
                          />
                          <Field
                            type="email"
                            title="Email Address"
                            id="field-email-address"
                          />
                          <Field
                            type="tel"
                            title="Phone Number"
                            id="field-phone-number"
                          />
                          <Box mb={2}>
                            <Select
                              options={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="Select a Country"
                            />
                          </Box>
                          <Checkbox
                            title="Add this as ypur default shipping address."
                            id="checkbox-1"
                          />
                        </Box>

                        <Box>
                          <Text
                            fontSize="16px"
                            fontFamily={theme.fontFamily.bold}
                          >
                            BIlling Address
                          </Text>

                          <Box mb={2}>
                            <Select
                              options={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="Choose an Existing Shipping Address"
                            />
                          </Box>
                          <Field
                            type="text"
                            title="Full Name"
                            id="field-billing-full-name"
                          />
                          <Field
                            type="text"
                            title="Company / Institution"
                            id="field-billing-company-institution"
                          />
                          <Field
                            type="text"
                            title="Address Line 1"
                            id="field-billing-address-line-1"
                          />
                          <Field
                            type="text"
                            title="Address Line 2"
                            id="field-billing-address-line-2"
                          />
                          <Field
                            type="text"
                            title="Building / Room / Mail Stop"
                            id="field-billing-building"
                          />
                          <Field type="text" title="City" id="field-city" />
                          <Field
                            type="text"
                            title="State / Province / Region"
                            id="field-billing-city"
                          />
                          <Field
                            type="text"
                            title="Zip Code / Postal Code"
                            id="field-billing-zip"
                          />
                          <Field
                            type="email"
                            title="Email Address"
                            id="field-billing-email-address"
                          />
                          <Field
                            type="tel"
                            title="Phone Number"
                            id="field-billing-phone-number"
                          />
                          <Box mb={2}>
                            <Select
                              options={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="Select a Country"
                            />
                          </Box>
                          <Checkbox
                            title="Add this as ypur default billing address."
                            id="checkbox-2"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </TrayPopup>
                </Box>
              </FadeHorizontalScroll>
            </Box>

            {productCardData.map((product, index) => (
              <Panel key={index}>
                <Box display="flex">
                  <Box flex="1" mr={[1, 2]}>
                    <Box mb={1}>
                      <Text mb="5px">{product.productID}</Text>

                      <Title
                        tag={6}
                        css={css`
                          color: ${theme.colors.primary};
                          margin-bottom: 5px;
                        `}
                      />

                      <Link
                        to={product.productNamePath}
                        css={css`
                          display: inline-block;
                          margin-bottom: 5px;
                          font-family: ${theme.fontFamily.bold};
                          @media (max-width: 575px) {
                            font-size: 13px;
                          }
                        `}
                      >
                        {product.productName}
                      </Link>

                      <Text fontSize="12px">
                        by <b>{product.productBy}</b>.
                        <Icon size="18px" icon="badge-logo" mx="10px" />
                        <i>{product.productAddedBy}</i>
                      </Text>
                    </Box>

                    <Box
                      display={['none', 'grid']}
                      gridGap={['20px', '10px', '10px', '20px']}
                      gridTemplateColumns="repeat(1,1fr)"
                      css={css`
                        @media (min-width: 1500px) {
                          grid-gap: 60px;
                          grid-template-columns: repeat(1, 0.5fr 290px 1fr);
                        }
                        @media (min-width: 1600px) {
                          grid-gap: 60px;
                          grid-template-columns: repeat(1, 270px 320px 260px);
                        }
                      `}
                      mb="20px"
                    >
                      <Box
                        minWidth="0px"
                        gridColumn={[
                          'span 1',
                          'span 1',
                          'span 4',
                          'span 2',
                          'span 2',
                        ]}
                        css={css`
                          @media (min-width: 1290px) {
                            grid-column: span 1;
                          }
                        `}
                      >
                        <Text
                          mb={0}
                          fontFamily={theme.fontFamily.bold}
                          fontSize="12px"
                          css={css`
                            text-transform: uppercase;
                          `}
                        >
                          UNIT SIZE - CONFIGURATION
                        </Text>
                        <Text
                          fontSize="12px"
                          css={css`
                            text-transform: uppercase;
                          `}
                        >
                          {product.productUnitSize}
                        </Text>
                      </Box>

                      <Box
                        minWidth="0px"
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Box flexShrink="0">
                          <Text
                            mb={0}
                            fontFamily={theme.fontFamily.bold}
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            PRICE
                          </Text>
                          <Text
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            {product.productPrice}
                          </Text>
                        </Box>

                        <Box flexShrink="0" ml={2}>
                          <Text
                            mb={0}
                            fontFamily={theme.fontFamily.bold}
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            ITEM TOTAL
                          </Text>
                          <Text
                            fontSize="12px"
                            mb={[1, 1, '25px']}
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            {product.productItemTotal}
                          </Text>
                        </Box>

                        <Box flexShrink="0" ml={2}>
                          <Text
                            mb={0}
                            fontFamily={theme.fontFamily.bold}
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            QUOTE #
                          </Text>
                          <Text
                            fontSize="12px"
                            mb={[1, 1, '25px']}
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            {product.productQuote}
                          </Text>
                        </Box>
                      </Box>

                      <Box
                        minWidth="0px"
                        gridColumn={[
                          'span 1',
                          'span 1',
                          'span 4',
                          'span 2',
                          'span 2',
                        ]}
                        css={css`
                          @media (min-width: 1290px) {
                            grid-column: span 1;
                          }
                        `}
                      >
                        <Box
                          maxWidth="260px"
                          display="flex"
                          alignItems="center"
                          mt={[0, 0, 0, 0, '-5px']}
                        >
                          <Label flexShrink="0" mb={0} mr={1}>
                            QTY :
                          </Label>
                          <Box flex="1">
                            <Select
                              options={[
                                {
                                  value: 'lorem ipsum 1',
                                  label: 'lorem ipsum 1',
                                },
                                {
                                  value: 'lorem ipsum 2',
                                  label: 'lorem ipsum 2',
                                },
                                {
                                  value: 'lorem ipsum 3',
                                  label: 'lorem ipsum 3',
                                },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="1"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection={['column', 'column', 'column', 'row']}
                  >
                    <Box
                      flex={['none', 'none', 'none', '1']}
                      textAlign="right"
                      order={['1', '1', '1', '2']}
                    >
                      <Image
                        src={searchItemImage}
                        alt="image"
                        width="100%"
                        maxWidth={['80px', '114px', '114px', '148px', '148px']}
                        flexShrink="0"
                      />
                    </Box>

                    <Box
                      mt={['12px', '12px', '12px', 0]}
                      mr={[0, 0, 0, 2]}
                      order={['2', '2', '2', '1']}
                      display={['none', 'block']}
                    >
                      <Box display="flex" alignItems="center" mb={1}>
                        <Box flex="1">
                          <Select
                            options={[
                              {
                                value: 'lorem ipsum 1',
                                label: 'lorem ipsum 1',
                              },
                              {
                                value: 'lorem ipsum 2',
                                label: 'lorem ipsum 2',
                              },
                              {
                                value: 'lorem ipsum 3',
                                label: 'lorem ipsum 3',
                              },
                            ]}
                            isSearchable={false}
                            menuPlacement="auto"
                            className="select"
                            classNamePrefix="select"
                            placeholder="Fund ID"
                          />
                        </Box>

                        <Box flexShrink={0} display="inline-block" ml={1}>
                          <TrayPopup
                            inlineBlock
                            toggleNoShadow
                            icon="plus"
                            headerBackBtnTitle="Back to my account"
                          >
                            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                              <Box
                                mb={[1, 2]}
                                display="grid"
                                gridGap={[
                                  '15px',
                                  '15px',
                                  '15px',
                                  '15px',
                                  '60px',
                                ]}
                                gridTemplateColumns={[
                                  'repeat(1, 1fr)',
                                  'repeat(1,1fr)',
                                  'repeat(1,2fr 1fr)',
                                  'repeat(1,2fr 1fr)',
                                  'repeat(1,2.5fr 1fr)',
                                ]}
                                alignItems="center"
                              >
                                <Text
                                  fontSize={['20px', '22px']}
                                  fontFamily={theme.fontFamily.bold}
                                  mb="0"
                                >
                                  Add Fund Account
                                </Text>

                                <Button variant="primary" btnBlock>
                                  Add Fund Account
                                </Button>
                              </Box>

                              <Box
                                width={['100%', '100%', '70%', '60%', '50%']}
                              >
                                <Box mb={2}>
                                  <Select
                                    options={[
                                      {
                                        value: 'lorem ipsum 1',
                                        label: 'lorem ipsum 1',
                                      },
                                      {
                                        value: 'lorem ipsum 2',
                                        label: 'lorem ipsum 2',
                                      },
                                      {
                                        value: 'lorem ipsum 3',
                                        label: 'lorem ipsum 3',
                                      },
                                    ]}
                                    isSearchable={false}
                                    menuPlacement="auto"
                                    className="select"
                                    classNamePrefix="select"
                                    placeholder="Funding Source"
                                  />
                                </Box>

                                <Box mb={2}>
                                  <Select
                                    options={[
                                      {
                                        value: 'lorem ipsum 1',
                                        label: 'lorem ipsum 1',
                                      },
                                      {
                                        value: 'lorem ipsum 2',
                                        label: 'lorem ipsum 2',
                                      },
                                      {
                                        value: 'lorem ipsum 3',
                                        label: 'lorem ipsum 3',
                                      },
                                    ]}
                                    isSearchable={false}
                                    menuPlacement="auto"
                                    className="select"
                                    classNamePrefix="select"
                                    placeholder="Grant/Fund ID"
                                  />
                                </Box>
                              </Box>
                            </Box>
                          </TrayPopup>
                        </Box>
                      </Box>

                      <Text mb="10px" textAlign={['left', 'right']}>
                        <Image
                          src={imgShip}
                          alt="imgShip"
                          mr="5px"
                          width="38px"
                        />
                        Ships from <b>{product.productShipsFrom}</b>
                      </Text>

                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent={['flex-start', 'flex-end']}
                        mb="10px"
                      >
                        <Icon
                          color={theme.colors.success}
                          icon="check-circle"
                          mr="5px"
                        />

                        <Popovers
                          position="bottom"
                          content="Base on availability provided by the supplier."
                        >
                          <Text
                            fontSize="12px"
                            color="success"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Estimated Delivery -{' '}
                            {product.productEstimatedDelivery}
                          </Text>
                        </Popovers>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box mt={1} display={['none', 'flex']} alignItems="center">
                  <Box flex="1">
                    <Button>Approve</Button>
                    <Button mx={1}>Cancel</Button>
                  </Box>
                </Box>

                <Box display={['block', 'none']} mt={1}>
                  <RSC id="RSC-Example" style={{ height: '50px' }}>
                    <Box
                      display="flex"
                      css={css`
                        white-space: nowrap;
                      `}
                    >
                      <Box flexShrink="0">
                        <Text
                          mb={0}
                          fontFamily={theme.fontFamily.bold}
                          fontSize="12px"
                          css={css`
                            text-transform: uppercase;
                          `}
                        >
                          UNIT SIZE - CONFIGURATION
                        </Text>
                        <Text
                          fontSize="12px"
                          css={css`
                            text-transform: uppercase;
                          `}
                        >
                          {product.productUnitSize}
                        </Text>
                      </Box>

                      <Box
                        flexShrink="0"
                        display="flex"
                        justifyContent="space-between"
                        ml={2}
                      >
                        <Box flexShrink="0">
                          <Text
                            mb={0}
                            fontFamily={theme.fontFamily.bold}
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            PRICE
                          </Text>
                          <Text
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            {product.productPrice}
                          </Text>
                        </Box>
                        <Box flexShrink="0" ml={2}>
                          <Text
                            mb={0}
                            fontFamily={theme.fontFamily.bold}
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            ITEM TOTAL
                          </Text>
                          <Text
                            fontSize="12px"
                            mb={[1, 1, '25px']}
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            {product.productItemTotal}
                          </Text>
                        </Box>
                      </Box>

                      <Box flexShrink="0" ml={2} pr={3}>
                        <Box
                          display={['block', 'block', 'block', 'block', 'flex']}
                          alignItems="center"
                        >
                          <Box mr={[0, 0, 0, 0, 3]}>
                            <Text
                              mb={0}
                              fontFamily={theme.fontFamily.bold}
                              fontSize="12px"
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              QUOTE #
                            </Text>
                            <Text
                              fontSize="12px"
                              mb={[1, 1, '25px']}
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              {product.productQuote}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </RSC>
                </Box>

                <Box display={['block', 'none']} mt={1}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box mr={2}>
                      <Text
                        mb="10px"
                        textAlign={['left', 'right']}
                        fontSize="12px"
                      >
                        <Image
                          src={imgShip}
                          alt="imgShip"
                          mr="5px"
                          width="38px"
                        />
                        Ships from <b>{product.productShipsFrom}</b>
                      </Text>

                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent={['flex-start', 'flex-end']}
                      >
                        <Icon
                          color={theme.colors.success}
                          icon="check-circle"
                          mr="5px"
                        />

                        <Popovers
                          position="bottom"
                          content="Base on availability provided by the supplier."
                        >
                          <Text
                            fontSize="10px"
                            color="success"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Est Delivery - {product.productEstimatedDelivery}
                          </Text>
                        </Popovers>
                      </Box>
                    </Box>

                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                      flex="1"
                    >
                      <Label flexShrink="0" mb={0} fontSize="12px">
                        QTY :
                      </Label>
                      <Box width="80px">
                        <Select
                          options={[
                            { value: 'lorem ipsum 1', label: 'lorem ipsum 1' },
                            { value: 'lorem ipsum 2', label: 'lorem ipsum 2' },
                            { value: 'lorem ipsum 3', label: 'lorem ipsum 3' },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="111"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box mt={1} display={['flex', 'none']} alignItems="center">
                  <Button
                    css={css`
                      font-size: 10px;
                      padding: 6px 5px;
                    `}
                  >
                    Approve
                  </Button>
                  <Button
                    mx={1}
                    css={css`
                      font-size: 10px;
                      padding: 6px 5px;
                    `}
                  >
                    Cancel
                  </Button>
                </Box>
              </Panel>
            ))}
          </Box>
        </Box>

        <Box pb={4} bg="silverSecondary">
          <Container>
            <Box
              display="grid"
              gridGap={['0px', '0px', '0px', '0px', '50px']}
              gridTemplateColumns={[
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr 1fr)',
                'repeat(1,1.5fr 1fr)',
              ]}
            >
              <Box py={2} textAlign="center">
                <Box bg="white" p={[2, 2, '75px']}>
                  <Image src={imgShip} alt="imgShip" maxWidth="140px" mb={3} />
                  <Title
                    tag={3}
                    css={css`
                      margin-bottom: 10px;
                    `}
                  >
                    Shop Over 4 Millin Products
                  </Title>
                  <Text fontSize={['16px', '18px', '20px']}>
                    200+ Trusted Suppliers
                  </Text>
                </Box>

                <Box bg="white" p={[1]}>
                  <Divider my={1} />

                  <Anchor
                    href="/"
                    bold
                    small
                    display="inline-flex"
                    alignItems="center"
                  >
                    <Icon size="8px" icon="chevron-right" mr="5px" />
                    Browse Your Favorite Brands A-Z
                  </Anchor>
                </Box>
              </Box>

              <Box
                display={['none', 'block']}
                borderX={['none', 'none', 'none', 'none', '15px solid white']}
                mx={['-15px', '-15px', '0', '0', '0']}
                px={['15px', '15px', '25px', '35px', '60px']}
                py={['30px', '30px', '35px', '50px', '90px']}
                css={css`
                  &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: ${theme.colors.muted};
                  }
                `}
              >
                <Box display={['flex', 'flex', 'none']}>
                  <Text
                    flex="1"
                    fontFamily={theme.fontFamily.bold}
                    m={0}
                    fontSize="18px"
                  >
                    Order Total
                  </Text>
                  <Text
                    flexShrink={0}
                    m={0}
                    fontFamily={theme.fontFamily.bold}
                    fontSize="18px"
                  >
                    $28,408.00
                  </Text>
                </Box>

                <BtnLink
                  display={['inline-flex', 'inline-flex', 'none']}
                  fontSize="12px"
                  alignItems="center"
                  type="button"
                  onClick={toggleOrderTotal}
                >
                  View Details
                  <Icon
                    icon="chevron-down"
                    ml="5px"
                    color="#c7c7c7"
                    size="12px"
                  />
                </BtnLink>

                <Box
                  display={[
                    isOrderTotalOpen ? 'block' : 'none',
                    isOrderTotalOpen ? 'block' : 'none',
                    'block',
                  ]}
                >
                  <Divider my={1} display={['block', 'block', 'none']} />

                  <Box display="flex" my={1}>
                    <Text flex="1" fontFamily={theme.fontFamily.bold} m={0}>
                      Subtotal
                    </Text>
                    <Text flexShrink={0} m={0}>
                      $178.00
                    </Text>
                  </Box>

                  <Box display="flex" my={1}>
                    <Text flex="1" fontFamily={theme.fontFamily.bold} m={0}>
                      Estimated Tax
                    </Text>
                    <Text flexShrink={0} m={0}>
                      $0.00
                    </Text>
                  </Box>

                  <Box display="flex" my={1}>
                    <Text flex="1" fontFamily={theme.fontFamily.bold} m={0}>
                      Estimated Shipping & Handling
                    </Text>
                    <Text
                      flexShrink={0}
                      m={0}
                      fontFamily={theme.fontFamily.bold}
                      color="success"
                    >
                      FREE
                    </Text>
                  </Box>

                  <Box display="flex" my={1}>
                    <Text flex="1" fontFamily={theme.fontFamily.bold} m={0}>
                      Savings
                    </Text>
                    <Text flexShrink={0} m={0}>
                      $100.00
                    </Text>
                  </Box>

                  <Divider my={1} display={['none', 'none', 'block']} />

                  <Box display={['none', 'none', 'flex']} my={1}>
                    <Text
                      flex="1"
                      fontFamily={theme.fontFamily.bold}
                      m={0}
                      fontSize="18px"
                    >
                      Order Total
                    </Text>
                    <Text
                      flexShrink={0}
                      m={0}
                      fontFamily={theme.fontFamily.bold}
                      fontSize="18px"
                    >
                      $28,408.00
                    </Text>
                  </Box>
                </Box>

                <Button variant="primary" btnBlock btnMd mt={1} mb={2}>
                  Checkout
                </Button>

                <TrayPopup
                  toggleTitle="Migrate All Items to Shared Cart"
                  toggleBlock
                  headerBackBtnTitle="Back to my account"
                >
                  <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                    <Box
                      mb={[1, 2]}
                      display="grid"
                      gridGap={['15px', '15px', '15px', '15px', '60px']}
                      gridTemplateColumns={[
                        'repeat(1, 1fr)',
                        'repeat(1,1fr)',
                        'repeat(1,2fr 1fr)',
                        'repeat(1,2fr 1fr)',
                        'repeat(1,2.5fr 1fr)',
                      ]}
                      alignItems="center"
                    >
                      <Box>
                        <Text
                          fontSize={['20px', '22px']}
                          fontFamily={theme.fontFamily.bold}
                        >
                          Transfer to Shared Cart
                        </Text>
                      </Box>

                      <Box>
                        <Button btnBlock variant="primary">
                          Transfer to Shared Cart
                        </Button>
                      </Box>
                    </Box>

                    <Box width={['100%', '100%', '80%', '75%', '70%']}>
                      <Select
                        options={[
                          { value: '1', label: '1' },
                          { value: '2', label: '2' },
                          { value: '3', label: '3' },
                        ]}
                        isSearchable={false}
                        menuPlacement="auto"
                        className="select"
                        classNamePrefix="select"
                        placeholder="Choose the associated lab group from the drop down menu below."
                      />
                    </Box>
                  </Box>
                </TrayPopup>
              </Box>
            </Box>

            <Box bg="white" p={[2, 5]}>
              <Title tag={2}>Saved for Later</Title>

              {productCardData2.map((product, index) => (
                <Panel key={index}>
                  <Box display="flex">
                    <Box flex="1" mr={[1, 2]}>
                      <Box mb={1}>
                        <Text mb="5px">{product.productID}</Text>

                        <Title
                          tag={6}
                          css={css`
                            color: ${theme.colors.primary};
                            margin-bottom: 5px;
                          `}
                        />

                        <Link
                          to={product.productNamePath}
                          css={css`
                            display: inline-block;
                            margin-bottom: 5px;
                            font-family: ${theme.fontFamily.bold};
                            @media (max-width: 575px) {
                              font-size: 13px;
                            }
                          `}
                        >
                          {product.productName}
                        </Link>

                        <Text fontSize="12px">
                          by <b>{product.productBy}</b>.
                          <Icon size="18px" icon="badge-logo" mx="10px" />
                          <i>{product.productAddedBy}</i>
                        </Text>
                      </Box>

                      <Box
                        display={['none', 'grid']}
                        gridGap={['20px', '10px', '10px', '20px']}
                        gridTemplateColumns="repeat(1,1fr)"
                        css={css`
                          @media (min-width: 1500px) {
                            grid-gap: 60px;
                            grid-template-columns: repeat(1, 0.5fr 290px 1fr);
                          }
                          @media (min-width: 1600px) {
                            grid-gap: 60px;
                            grid-template-columns: repeat(1, 270px 320px 260px);
                          }
                        `}
                        mb="20px"
                      >
                        <Box
                          minWidth="0px"
                          gridColumn={[
                            'span 1',
                            'span 1',
                            'span 4',
                            'span 2',
                            'span 2',
                          ]}
                          css={css`
                            @media (min-width: 1290px) {
                              grid-column: span 1;
                            }
                          `}
                        >
                          <Text
                            mb={0}
                            fontFamily={theme.fontFamily.bold}
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            UNIT SIZE - CONFIGURATION
                          </Text>
                          <Text
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            {product.productUnitSize}
                          </Text>
                        </Box>

                        <Box
                          minWidth="0px"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Box flexShrink="0">
                            <Text
                              mb={0}
                              fontFamily={theme.fontFamily.bold}
                              fontSize="12px"
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              PRICE
                            </Text>
                            <Text
                              fontSize="12px"
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              {product.productPrice}
                            </Text>
                          </Box>

                          <Box flexShrink="0" ml={2}>
                            <Text
                              mb={0}
                              fontFamily={theme.fontFamily.bold}
                              fontSize="12px"
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              ITEM TOTAL
                            </Text>
                            <Text
                              fontSize="12px"
                              mb={[1, 1, '25px']}
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              {product.productItemTotal}
                            </Text>
                          </Box>

                          <Box flexShrink="0" ml={2}>
                            <Text
                              mb={0}
                              fontFamily={theme.fontFamily.bold}
                              fontSize="12px"
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              QUOTE #
                            </Text>
                            <Text
                              fontSize="12px"
                              mb={[1, 1, '25px']}
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              {product.productQuote}
                            </Text>
                          </Box>
                        </Box>

                        <Box
                          minWidth="0px"
                          gridColumn={[
                            'span 1',
                            'span 1',
                            'span 4',
                            'span 2',
                            'span 2',
                          ]}
                          css={css`
                            @media (min-width: 1290px) {
                              grid-column: span 1;
                            }
                          `}
                        >
                          <Box
                            maxWidth="260px"
                            display="flex"
                            alignItems="center"
                            mt={[0, 0, 0, 0, '-5px']}
                          >
                            <Label flexShrink="0" mb={0} mr={1}>
                              QTY :
                            </Label>
                            <Box flex="1">
                              <Select
                                options={[
                                  {
                                    value: 'lorem ipsum 1',
                                    label: 'lorem ipsum 1',
                                  },
                                  {
                                    value: 'lorem ipsum 2',
                                    label: 'lorem ipsum 2',
                                  },
                                  {
                                    value: 'lorem ipsum 3',
                                    label: 'lorem ipsum 3',
                                  },
                                ]}
                                isSearchable={false}
                                menuPlacement="auto"
                                className="select"
                                classNamePrefix="select"
                                placeholder="1"
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection={['column', 'column', 'column', 'row']}
                    >
                      <Box
                        flex={['none', 'none', 'none', '1']}
                        textAlign="right"
                        order={['1', '1', '1', '2']}
                      >
                        <Image
                          src={searchItemImage}
                          alt="image"
                          width="100%"
                          maxWidth={[
                            '80px',
                            '114px',
                            '114px',
                            '148px',
                            '148px',
                          ]}
                          flexShrink="0"
                        />
                      </Box>

                      <Box
                        mt={['12px', '12px', '12px', 0]}
                        mr={[0, 0, 0, 2]}
                        order={['2', '2', '2', '1']}
                        display={['none', 'block']}
                      >
                        <Box display="flex" alignItems="center" mb={1}>
                          <Box flex="1">
                            <Select
                              options={[
                                {
                                  value: 'lorem ipsum 1',
                                  label: 'lorem ipsum 1',
                                },
                                {
                                  value: 'lorem ipsum 2',
                                  label: 'lorem ipsum 2',
                                },
                                {
                                  value: 'lorem ipsum 3',
                                  label: 'lorem ipsum 3',
                                },
                              ]}
                              isSearchable={false}
                              menuPlacement="auto"
                              className="select"
                              classNamePrefix="select"
                              placeholder="Fund ID"
                            />
                          </Box>

                          <Box flexShrink={0} display="inline-block" ml={1}>
                            <TrayPopup
                              inlineBlock
                              toggleNoShadow
                              icon="plus"
                              headerBackBtnTitle="Back to my account"
                            >
                              <Box px={[1, 1, 2, 3, 5]} py={[2]}>
                                <Box
                                  mb={[1, 2]}
                                  display="grid"
                                  gridGap={[
                                    '15px',
                                    '15px',
                                    '15px',
                                    '15px',
                                    '60px',
                                  ]}
                                  gridTemplateColumns={[
                                    'repeat(1, 1fr)',
                                    'repeat(1,1fr)',
                                    'repeat(1,2fr 1fr)',
                                    'repeat(1,2fr 1fr)',
                                    'repeat(1,2.5fr 1fr)',
                                  ]}
                                  alignItems="center"
                                >
                                  <Text
                                    fontSize={['20px', '22px']}
                                    fontFamily={theme.fontFamily.bold}
                                    mb="0"
                                  >
                                    Add Fund Account
                                  </Text>

                                  <Button variant="primary" btnBlock>
                                    Add Fund Account
                                  </Button>
                                </Box>

                                <Box
                                  width={['100%', '100%', '70%', '60%', '50%']}
                                >
                                  <Box mb={2}>
                                    <Select
                                      options={[
                                        {
                                          value: 'lorem ipsum 1',
                                          label: 'lorem ipsum 1',
                                        },
                                        {
                                          value: 'lorem ipsum 2',
                                          label: 'lorem ipsum 2',
                                        },
                                        {
                                          value: 'lorem ipsum 3',
                                          label: 'lorem ipsum 3',
                                        },
                                      ]}
                                      isSearchable={false}
                                      menuPlacement="auto"
                                      className="select"
                                      classNamePrefix="select"
                                      placeholder="Funding Source"
                                    />
                                  </Box>

                                  <Box mb={2}>
                                    <Select
                                      options={[
                                        {
                                          value: 'lorem ipsum 1',
                                          label: 'lorem ipsum 1',
                                        },
                                        {
                                          value: 'lorem ipsum 2',
                                          label: 'lorem ipsum 2',
                                        },
                                        {
                                          value: 'lorem ipsum 3',
                                          label: 'lorem ipsum 3',
                                        },
                                      ]}
                                      isSearchable={false}
                                      menuPlacement="auto"
                                      className="select"
                                      classNamePrefix="select"
                                      placeholder="Grant/Fund ID"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </TrayPopup>
                          </Box>
                        </Box>

                        <Text mb="10px" textAlign={['left', 'right']}>
                          <Image
                            src={imgShip}
                            alt="imgShip"
                            mr="5px"
                            width="38px"
                          />
                          Ships from <b>{product.productShipsFrom}</b>
                        </Text>

                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent={['flex-start', 'flex-end']}
                          mb="10px"
                        >
                          <Icon
                            color={theme.colors.success}
                            icon="check-circle"
                            mr="5px"
                          />

                          <Popovers
                            position="bottom"
                            content="Base on availability provided by the supplier."
                          >
                            <Text
                              fontSize="12px"
                              color="success"
                              fontFamily={theme.fontFamily.bold}
                            >
                              Estimated Delivery -{' '}
                              {product.productEstimatedDelivery}
                            </Text>
                          </Popovers>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box mt={1} display={['none', 'flex']} alignItems="center">
                    <Box flex="1">
                      <Button>Approve</Button>
                      <Button mx={1}>Cancel</Button>
                    </Box>
                  </Box>

                  <Box
                    display={['block', 'none']}
                    mt={1}
                    position="relative"
                    css={css`
                      &:before {
                        content: '';
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 20%;
                        height: 100%;
                        pointer-events: none;
                        background: linear-gradient(
                          90deg,
                          transparent 0%,
                          ${theme.colors.white} 100%
                        );
                      }
                    `}
                  >
                    <Box
                      display="flex"
                      css={css`
                        white-space: nowrap;
                        overflow-x: auto;
                        ::-webkit-scrollbar {
                          display: none;
                        }
                      `}
                    >
                      <Box flexShrink="0">
                        <Text
                          mb={0}
                          fontFamily={theme.fontFamily.bold}
                          fontSize="12px"
                          css={css`
                            text-transform: uppercase;
                          `}
                        >
                          UNIT SIZE - CONFIGURATION
                        </Text>
                        <Text
                          fontSize="12px"
                          css={css`
                            text-transform: uppercase;
                          `}
                        >
                          {product.productUnitSize}
                        </Text>
                      </Box>

                      <Box
                        flexShrink="0"
                        display="flex"
                        justifyContent="space-between"
                        ml={2}
                      >
                        <Box flexShrink="0">
                          <Text
                            mb={0}
                            fontFamily={theme.fontFamily.bold}
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            PRICE
                          </Text>
                          <Text
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            {product.productPrice}
                          </Text>
                        </Box>
                        <Box flexShrink="0" ml={2}>
                          <Text
                            mb={0}
                            fontFamily={theme.fontFamily.bold}
                            fontSize="12px"
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            ITEM TOTAL
                          </Text>
                          <Text
                            fontSize="12px"
                            mb={[1, 1, '25px']}
                            css={css`
                              text-transform: uppercase;
                            `}
                          >
                            {product.productItemTotal}
                          </Text>
                        </Box>
                      </Box>

                      <Box flexShrink="0" ml={2} pr={3}>
                        <Box
                          display={['block', 'block', 'block', 'block', 'flex']}
                          alignItems="center"
                        >
                          <Box mr={[0, 0, 0, 0, 3]}>
                            <Text
                              mb={0}
                              fontFamily={theme.fontFamily.bold}
                              fontSize="12px"
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              QUOTE #
                            </Text>
                            <Text
                              fontSize="12px"
                              mb={[1, 1, '25px']}
                              css={css`
                                text-transform: uppercase;
                              `}
                            >
                              {product.productQuote}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box display={['block', 'none']} mt={1}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box mr={2}>
                        <Text
                          mb="10px"
                          textAlign={['left', 'right']}
                          fontSize="12px"
                        >
                          <Image
                            src={imgShip}
                            alt="imgShip"
                            mr="5px"
                            width="38px"
                          />
                          Ships from <b>{product.productShipsFrom}</b>
                        </Text>

                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent={['flex-start', 'flex-end']}
                        >
                          <Icon
                            color={theme.colors.success}
                            icon="check-circle"
                            mr="5px"
                          />

                          <Popovers
                            position="bottom"
                            content="Base on availability provided by the supplier."
                          >
                            <Text
                              fontSize="10px"
                              color="success"
                              fontFamily={theme.fontFamily.bold}
                            >
                              Est Delivery - {product.productEstimatedDelivery}
                            </Text>
                          </Popovers>
                        </Box>
                      </Box>

                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        flex="1"
                      >
                        <Label flexShrink="0" mb={0} fontSize="12px">
                          QTY :
                        </Label>
                        <Box width="80px">
                          <Select
                            options={[
                              {
                                value: 'lorem ipsum 1',
                                label: 'lorem ipsum 1',
                              },
                              {
                                value: 'lorem ipsum 2',
                                label: 'lorem ipsum 2',
                              },
                              {
                                value: 'lorem ipsum 3',
                                label: 'lorem ipsum 3',
                              },
                            ]}
                            isSearchable={false}
                            menuPlacement="auto"
                            className="select"
                            classNamePrefix="select"
                            placeholder="111"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box mt={1} display={['flex', 'none']} alignItems="center">
                    <Button
                      css={css`
                        font-size: 10px;
                        padding: 6px 5px;
                      `}
                    >
                      Approve
                    </Button>
                    <Button
                      mx={1}
                      css={css`
                        font-size: 10px;
                        padding: 6px 5px;
                      `}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Panel>
              ))}
            </Box>
          </Container>
        </Box>

        <Box
          bg="silverSecondary"
          position={['sticky', 'relative']}
          display={['block', 'none']}
          zIndex="500"
          bottom="0"
          left="0"
          borderX={[
            'none',
            '15px solid white',
            '15px solid white',
            '15px solid white',
            '15px solid white',
          ]}
          p="15px"
          pb={2}
          css={css`
            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 3px;
              background-color: ${theme.colors.muted};
            }
          `}
          id="totalStickyBox"
        >
          <Box display={['flex', 'flex', 'none']}>
            <Text
              flex="1"
              fontFamily={theme.fontFamily.bold}
              m={0}
              fontSize="18px"
            >
              Order Total
            </Text>
            <Text
              flexShrink={0}
              m={0}
              fontFamily={theme.fontFamily.bold}
              fontSize="18px"
            >
              $28,408.00
            </Text>
          </Box>

          <BtnLink
            display={['inline-flex', 'inline-flex', 'none']}
            fontSize="12px"
            alignItems="center"
            type="button"
            onClick={toggleOrderTotal}
          >
            View Details
            <Icon icon="chevron-down" ml="5px" color="#c7c7c7" size="12px" />
          </BtnLink>

          <Box
            display={[
              isOrderTotalOpen ? 'block' : 'none',
              isOrderTotalOpen ? 'block' : 'none',
              'block',
            ]}
          >
            <Divider my={1} display={['block', 'block', 'none']} />

            <Box display="flex" my={1}>
              <Text flex="1" fontFamily={theme.fontFamily.bold} m={0}>
                Subtotal
              </Text>
              <Text flexShrink={0} m={0}>
                $178.00
              </Text>
            </Box>

            <Box display="flex" my={1}>
              <Text flex="1" fontFamily={theme.fontFamily.bold} m={0}>
                Estimated Tax
              </Text>
              <Text flexShrink={0} m={0}>
                $0.00
              </Text>
            </Box>

            <Box display="flex" my={1}>
              <Text flex="1" fontFamily={theme.fontFamily.bold} m={0}>
                Estimated Shipping & Handling
              </Text>
              <Text
                flexShrink={0}
                m={0}
                fontFamily={theme.fontFamily.bold}
                color="success"
              >
                FREE
              </Text>
            </Box>

            <Box display="flex" my={1}>
              <Text flex="1" fontFamily={theme.fontFamily.bold} m={0}>
                Savings
              </Text>
              <Text flexShrink={0} m={0}>
                $100.00
              </Text>
            </Box>

            <Divider my={1} display={['none', 'none', 'block']} />

            <Box display={['none', 'none', 'flex']} my={1}>
              <Text
                flex="1"
                fontFamily={theme.fontFamily.bold}
                m={0}
                fontSize="18px"
              >
                Order Total
              </Text>
              <Text
                flexShrink={0}
                m={0}
                fontFamily={theme.fontFamily.bold}
                fontSize="18px"
              >
                $28,408.00
              </Text>
            </Box>
          </Box>

          <Button variant="primary" btnBlock my={1}>
            Checkout
          </Button>

          <TrayPopup
            toggleTitle="Migrate All Items to Shared Cart"
            toggleBlock
            headerBackBtnTitle="Back to my account"
          >
            <Box px={[1, 1, 2, 3, 5]} py={[2]}>
              <Box
                mb={[1, 2]}
                display="grid"
                gridGap={['15px', '15px', '15px', '15px', '60px']}
                gridTemplateColumns={[
                  'repeat(1, 1fr)',
                  'repeat(1,1fr)',
                  'repeat(1,2fr 1fr)',
                  'repeat(1,2fr 1fr)',
                  'repeat(1,2.5fr 1fr)',
                ]}
                alignItems="center"
              >
                <Box>
                  <Text
                    fontSize={['20px', '22px']}
                    fontFamily={theme.fontFamily.bold}
                  >
                    Transfer to Shared Cart
                  </Text>
                </Box>

                <Box>
                  <Button btnBlock variant="primary">
                    Transfer to Shared Cart
                  </Button>
                </Box>
              </Box>

              <Box width={['100%', '100%', '80%', '75%', '70%']}>
                <Select
                  options={[
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                  ]}
                  isSearchable={false}
                  menuPlacement="auto"
                  className="select"
                  classNamePrefix="select"
                  placeholder="Choose the associated lab group from the drop down menu below."
                />
              </Box>
            </Box>
          </TrayPopup>
        </Box>
      </main>
      <Footer />
    </Fragment>
  )
}

export default SharedCart
