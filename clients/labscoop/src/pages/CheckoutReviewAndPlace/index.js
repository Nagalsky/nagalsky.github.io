import { Fragment, useCallback } from 'react'
/** @jsx jsx */
import { useDropzone } from 'react-dropzone'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import RSC from 'react-scrollbars-custom'
import { Link } from '@reach/router'
import Select from 'react-select'

import theme from '../../lib/theme'
import { Box } from '../../helpers'

import {
  Wizard,
  WizardItem,
  Footer,
  Text,
  Icon,
  Title,
  Anchor,
  Divider,
  Panel,
  Button,
  Image,
  BtnLink,
  Popovers,
  Checkbox,
  Label,
  TrayPopup,
  Field,
  DropZone,
} from '../../ui'

import productImage from '../../assets/images/temp/search-result-product.jpg'
import imgShip from '../../assets/images/elements/ship.svg'
import visa from '../../assets/images/cards/visa.svg'
import ae from '../../assets/images/cards/ae.svg'
import discover from '../../assets/images/cards/discover.svg'
import mc from '../../assets/images/cards/mc.svg'
import logoAside from '../../assets/images/elements/logo.svg'

const StyledProductImage = styled(Image)`
  width: 100%;
  max-width: 148px;
  border: 1px solid ${theme.colors.muted};
  flex-shrink: 0;
  border: 1px solid ${theme.colors.muted};
`

const StyledOrderTag = styled(Box)`
  &:not(:last-of-type) {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${theme.colors.muted};
  }
`

const StyledOrderTagButton = styled.button`
  color: ${theme.colors.primary};
  font-family: ${theme.fontFamily.bold};
  border: none;
  background: transparent;
`

const StyledBusinessBox = styled(Box)`
  font-family: ${theme.fontFamily.bold};
  display: flex;
  align-items: center;
`

const StyledBusinessLink = styled(Anchor)`
  font-family: ${theme.fontFamily.bold};
  display: flex;
  align-items: center;
`

const dataOrderTags = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    from: 'University of Maryland',
  },
]

const CheckoutReviewAndPlace = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Fragment>
      <Wizard>
        <WizardItem isDone>Shipping</WizardItem>
        <WizardItem isDone>Billing</WizardItem>
        <WizardItem isDone>Payment</WizardItem>
        <WizardItem isActive>Review & Place</WizardItem>
      </Wizard>

      <main className="content">
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <Box flex="1" mb={[2, 2, 2, 0]} py={2} px={[1, 1, 1, 5]}>
            <Box mb={[1, 2]} display="flex" alignItems="center">
              <Box flex="1">
                <Title
                  tag={1}
                  css={css`
                    font-family: ${theme.fontFamily.base};
                  `}
                >
                  Order Summary
                </Title>
              </Box>
              <Box
                display={['flex', 'flex', 'flex', 'none']}
                alignItems="center"
                flexShrink={0}
                ml={2}
              >
                <Link
                  to="/"
                  css={css`
                    font-family: ${theme.fontFamily.bold};
                  `}
                >
                  <Icon
                    icon="long-arrow-left"
                    mr="10px"
                    size="16px"
                    mt="-3px"
                  />
                  Back to Cart
                </Link>
              </Box>
            </Box>

            <Panel mb={4}>
              <Box mx="-1rem" mt="-1rem" mb={1} p="1rem" bg="#f6f6f6">
                <Text fontSize="18px">Shipement 1</Text>
                <Box
                  mb="5px"
                  display="flex"
                  alignItems="center"
                  fontSize="12px"
                  fontFamily={theme.fontFamily.bold}
                  css={css`
                    text-transform: uppercase;
                  `}
                >
                  choose a delivery option
                  <Popovers
                    position="right"
                    content="Base on availability provided by the supplier."
                  >
                    <Icon size="16px" icon="question-circle" ml="10px" />
                  </Popovers>
                </Box>

                <Box
                  display="grid"
                  gridGap={['15px', '15px', '25px', '30px']}
                  gridTemplateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(2, 1fr)',
                    'repeat(4, 1fr)',
                    'repeat(2, 1fr)',
                    'repeat(2, 1fr)',
                  ]}
                  css={css`
                    @media (min-width: 1350px) {
                      grid-template-columns: repeat(4, 1fr) !important;
                    }
                  `}
                >
                  <Box>
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
                      placeholder="Custom placeholder"
                      css={css`
                        .select__control {
                          background-color: transparent;
                        }
                      `}
                    />
                  </Box>
                  <Box>
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
                      placeholder="Custom placeholder"
                      css={css`
                        .select__control {
                          background-color: transparent;
                        }
                      `}
                    />
                  </Box>
                  <Box>
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
                      placeholder="Custom placeholder"
                      css={css`
                        .select__control {
                          background-color: transparent;
                        }
                      `}
                    />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center">
                      <Checkbox
                        title="Allow partial shipment."
                        id="checkbox-1"
                        css={css`
                          margin-right: 10px;
                        `}
                      />
                      <Popovers
                        position="bottom"
                        content="Base on availability provided by the supplier."
                      >
                        <Icon size="16px" icon="question-circle" />
                      </Popovers>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box mb={[1, 2]}>
                <Text fontFamily={theme.fontFamily.bold} mb={0} color="primary">
                  Thioredixin Reductase (Rat Recombinant)
                </Text>
                <Text fontSize="13px" display="flex" alignItems="center">
                  Redoxica, Inc. <Icon icon="badge-logo" ml="10px" />
                </Text>

                <Box
                  display="grid"
                  gridGap={2}
                  mb={[1, 2]}
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                  ]}
                  css={css`
                    @media (min-width: 1400px) {
                      grid-template-columns: repeat(1, 1fr 1fr 1fr 0.5fr 0.5fr);
                    }
                  `}
                >
                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      catalog number
                    </Text>
                    <Text fontSize="12px" truncate>
                      t515421541-ss
                    </Text>
                    <Box display="flex" alignItems="center">
                      <Box flex="1" mr={2}>
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
                          placeholder="Custom placeholder"
                        />
                      </Box>

                      <Box flexShrink={0} display="inline-block">
                        <TrayPopup
                          inlineBlock
                          icon="plus"
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
                                Add Fund Account
                              </Text>

                              <Button variant="primary" btnBlock>
                                Add Fund Account
                              </Button>
                            </Box>

                            <Box width={['100%', '100%', '70%', '60%', '50%']}>
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
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      unit size - configuration
                    </Text>
                    <Text fontSize="12px" truncate>
                      50mg, advanced kit, 120v, glass, silver
                    </Text>
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
                      placeholder="Custom placeholder"
                    />
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      price
                    </Text>
                    <Text fontSize="12px" truncate>
                      $0.00
                    </Text>
                    <Box
                      display="grid"
                      gridGap="10px"
                      gridTemplateColumns="repeat(1, auto 1fr)"
                      alignItems="center"
                    >
                      <Label mb={0}>QTY:</Label>
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
                        placeholder="Custom placeholder"
                      />
                    </Box>
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      Item total
                    </Text>
                    <Text fontSize="12px" truncate>
                      $27,000.00
                    </Text>
                    <BtnLink type="button" mt="10px">
                      Remove
                    </BtnLink>
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      quote #
                    </Text>
                    <Text fontSize="12px" truncate>
                      lq 34349873487
                    </Text>
                    <BtnLink type="button" mt="10px">
                      Save for Later
                    </BtnLink>
                  </Box>
                </Box>

                <Box display="flex" flexDirection={['column', 'row']}>
                  <StyledProductImage
                    src={productImage}
                    alt="image"
                    mr={[0, 1]}
                    mb={[1, 0]}
                  />
                  <Box>
                    <Text mb="10px">
                      <Image
                        src={imgShip}
                        alt="imgShip"
                        css={css`
                          margin-right: 5px;
                          width: 38px;
                        `}
                      />
                      Ships from <b>Labscoop</b>
                    </Text>
                    <Box display="flex" alignItems="center">
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
                          Estimated Delivery - 04/25/2015
                        </Text>
                      </Popovers>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box mb={[1, 2]}>
                <Text fontFamily={theme.fontFamily.bold} mb={0} color="primary">
                  Thioredixin Reductase (Rat Recombinant)
                </Text>
                <Text fontSize="13px" display="flex" alignItems="center">
                  Redoxica, Inc. <Icon icon="badge-logo" ml="10px" />
                </Text>

                <Box
                  display="grid"
                  gridGap={2}
                  mb={[1, 2]}
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                  ]}
                  css={css`
                    @media (min-width: 1400px) {
                      grid-template-columns: repeat(1, 1fr 1fr 1fr 0.5fr 0.5fr);
                    }
                  `}
                >
                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      catalog number
                    </Text>
                    <Text fontSize="12px" truncate>
                      t515421541-ss
                    </Text>
                    <Box display="flex" alignItems="center">
                      <Box flex="1" mr={2}>
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
                          placeholder="Custom placeholder"
                        />
                      </Box>

                      <Box flexShrink={0} display="inline-block">
                        <TrayPopup
                          inlineBlock
                          icon="plus"
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
                                Add Fund Account
                              </Text>

                              <Button variant="primary" btnBlock>
                                Add Fund Account
                              </Button>
                            </Box>

                            <Box width={['100%', '100%', '70%', '60%', '50%']}>
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
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      unit size - configuration
                    </Text>
                    <Text fontSize="12px" truncate>
                      50mg, advanced kit, 120v, glass, silver
                    </Text>
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
                      placeholder="Custom placeholder"
                    />
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      price
                    </Text>
                    <Text fontSize="12px" truncate>
                      $0.00
                    </Text>
                    <Box
                      display="grid"
                      gridGap="10px"
                      gridTemplateColumns="repeat(1, auto 1fr)"
                      alignItems="center"
                    >
                      <Label mb={0}>QTY:</Label>
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
                        placeholder="Custom placeholder"
                      />
                    </Box>
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      Item total
                    </Text>
                    <Text fontSize="12px" truncate>
                      $27,000.00
                    </Text>
                    <BtnLink type="button" mt="10px">
                      Remove
                    </BtnLink>
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      quote #
                    </Text>
                    <Text fontSize="12px" truncate>
                      lq 34349873487
                    </Text>
                    <BtnLink type="button" mt="10px">
                      Save for Later
                    </BtnLink>
                  </Box>
                </Box>

                <Box display="flex" flexDirection={['column', 'row']}>
                  <StyledProductImage
                    src={productImage}
                    alt="image"
                    mr={[0, 1]}
                    mb={[1, 0]}
                  />
                  <Box>
                    <Text mb="10px">
                      <Image
                        src={imgShip}
                        alt="imgShip"
                        css={css`
                          margin-right: 5px;
                          width: 38px;
                        `}
                      />
                      Ships from <b>Labscoop</b>
                    </Text>
                    <Box display="flex" alignItems="center">
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
                          Estimated Delivery - 04/25/2015
                        </Text>
                      </Popovers>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Panel mb={4}>
              <Box mx="-1rem" mt="-1rem" mb={1} p="1rem" bg="#f6f6f6">
                <Text fontSize="18px">Shipement 1</Text>
                <Box
                  mb="5px"
                  display="flex"
                  alignItems="center"
                  fontSize="12px"
                  fontFamily={theme.fontFamily.bold}
                  css={css`
                    text-transform: uppercase;
                  `}
                >
                  choose a delivery option
                  <Popovers
                    position="right"
                    content="Base on availability provided by the supplier."
                  >
                    <Icon size="16px" icon="question-circle" ml="10px" />
                  </Popovers>
                </Box>

                <Box
                  display="grid"
                  gridGap={['15px', '15px', '25px', '30px']}
                  gridTemplateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(2, 1fr)',
                    'repeat(4, 1fr)',
                    'repeat(2, 1fr)',
                    'repeat(2, 1fr)',
                  ]}
                  css={css`
                    @media (min-width: 1350px) {
                      grid-template-columns: repeat(4, 1fr) !important;
                    }
                  `}
                >
                  <Box>
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
                      placeholder="Custom placeholder"
                      css={css`
                        .select__control {
                          background-color: transparent;
                        }
                      `}
                    />
                  </Box>
                  <Box>
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
                      placeholder="Custom placeholder"
                      css={css`
                        .select__control {
                          background-color: transparent;
                        }
                      `}
                    />
                  </Box>
                  <Box>
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
                      placeholder="Custom placeholder"
                      css={css`
                        .select__control {
                          background-color: transparent;
                        }
                      `}
                    />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center">
                      <Checkbox
                        title="Allow partial shipment."
                        id="checkbox-1"
                        css={css`
                          margin-right: 10px;
                        `}
                      />
                      <Popovers
                        position="bottom"
                        content="Base on availability provided by the supplier."
                      >
                        <Icon size="16px" icon="question-circle" />
                      </Popovers>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box mb={[1, 2]}>
                <Text fontFamily={theme.fontFamily.bold} mb={0} color="primary">
                  Thioredixin Reductase (Rat Recombinant)
                </Text>
                <Text fontSize="13px" display="flex" alignItems="center">
                  Redoxica, Inc. <Icon icon="badge-logo" ml="10px" />
                </Text>

                <Box
                  display="grid"
                  gridGap={2}
                  mb={[1, 2]}
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                  ]}
                  css={css`
                    @media (min-width: 1400px) {
                      grid-template-columns: repeat(1, 1fr 1fr 1fr 0.5fr 0.5fr);
                    }
                  `}
                >
                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      catalog number
                    </Text>
                    <Text fontSize="12px" truncate>
                      t515421541-ss
                    </Text>
                    <Box display="flex" alignItems="center">
                      <Box flex="1" mr={2}>
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
                          placeholder="Custom placeholder"
                        />
                      </Box>

                      <Box flexShrink={0} display="inline-block">
                        <TrayPopup
                          inlineBlock
                          icon="plus"
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
                                Add Fund Account
                              </Text>

                              <Button variant="primary" btnBlock>
                                Add Fund Account
                              </Button>
                            </Box>

                            <Box width={['100%', '100%', '70%', '60%', '50%']}>
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
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      unit size - configuration
                    </Text>
                    <Text fontSize="12px" truncate>
                      50mg, advanced kit, 120v, glass, silver
                    </Text>
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
                      placeholder="Custom placeholder"
                    />
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      price
                    </Text>
                    <Text fontSize="12px" truncate>
                      $0.00
                    </Text>
                    <Box
                      display="grid"
                      gridGap="10px"
                      gridTemplateColumns="repeat(1, auto 1fr)"
                      alignItems="center"
                    >
                      <Label mb={0}>QTY:</Label>
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
                        placeholder="Custom placeholder"
                      />
                    </Box>
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      Item total
                    </Text>
                    <Text fontSize="12px" truncate>
                      $27,000.00
                    </Text>
                    <BtnLink type="button" mt="10px">
                      Remove
                    </BtnLink>
                  </Box>

                  <Box
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    <Text
                      fontFamily={theme.fontFamily.bold}
                      mb={0}
                      fontSize="12px"
                    >
                      quote #
                    </Text>
                    <Text fontSize="12px" truncate>
                      lq 34349873487
                    </Text>
                    <BtnLink type="button" mt="10px">
                      Save for Later
                    </BtnLink>
                  </Box>
                </Box>

                <Box display="flex" flexDirection={['column', 'row']}>
                  <StyledProductImage
                    src={productImage}
                    alt="image"
                    mr={[0, 1]}
                    mb={[1, 0]}
                  />
                  <Box>
                    <Text mb="10px">
                      <Image
                        src={imgShip}
                        alt="imgShip"
                        css={css`
                          margin-right: 5px;
                          width: 38px;
                        `}
                      />
                      Ships from <b>Labscoop</b>
                    </Text>
                    <Box display="flex" alignItems="center">
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
                          Estimated Delivery - 04/25/2015
                        </Text>
                      </Popovers>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Panel>

            <Box
              mb={2}
              display="grid"
              gridGap={['15px', '15px', '30px', '30px']}
              gridTemplateColumns="repeat(1, 1fr)"
              css={css`
                @media (min-width: 1700px) {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              `}
            >
              <Panel bg="#f7f7f7" p={[1, 1, 1, 3]}>
                <Box
                  display="flex"
                  alignItems={['flex-start', 'center']}
                  flexDirection={['column', 'row']}
                  mb={1}
                >
                  <Title
                    tag={5}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                      flex: 1;
                      margin-bottom: 0;
                    `}
                  >
                    Shipping Address
                  </Title>

                  <Box flexShrink="0" ml={[0, 1]} mt={[1, 0]}>
                    <Box>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Edit"
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
                              Add a New Address
                            </Text>

                            <Button variant="primary" btnBlock>
                              Add Address
                            </Button>
                          </Box>

                          <Box
                            width={['100%', '100%', '80%', '75%', '70%']}
                            mb={2}
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
                                placeholder="Address Type"
                              />
                            </Box>

                            <Field
                              type="text"
                              title="Full Name"
                              id="field-add-new-address-full-name"
                            />

                            <Field
                              type="text"
                              title="Company / Institution"
                              id="field-add-new-address-company-institution"
                            />

                            <Field
                              type="text"
                              title="Address Line 1"
                              id="field-add-new-address-address-line-1"
                            />

                            <Field
                              type="text"
                              title="Address Line 2"
                              id="field-add-new-address-address-line-2"
                            />

                            <Field
                              type="text"
                              title="Building / Room / Mail Stop"
                              id="field-add-new-address-building"
                            />

                            <Field
                              type="text"
                              title="City"
                              id="field-add-new-address-city"
                            />

                            <Field
                              type="text"
                              title="State / Province / Region"
                              id="field-add-new-address-state"
                            />

                            <Field
                              type="text"
                              title="Zip Code / Postal Code"
                              id="field-add-new-address-zip"
                            />

                            <Field
                              type="email"
                              title="Email Address"
                              id="field-add-new-address-email-address"
                            />

                            <Field
                              type="tel"
                              title="Phone Number"
                              id="field-add-new-address-phone"
                            />

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
                                placeholder="Select a Country"
                              />
                            </Box>

                            <Checkbox
                              title="Make this my default payment method."
                              id="checkbox-field-new-address-1"
                            />
                          </Box>
                        </Box>
                      </TrayPopup>
                    </Box>
                  </Box>
                </Box>

                <address
                  css={css`
                    margin-bottom: 0;
                  `}
                >
                  <b>Johnson & Johnson</b>
                  <br />
                  8441 Johnson Circle
                  <br />
                  BLDG A1; RM 842
                  <br />
                  Denver, Colorado 54187
                  <br />
                  United States of America
                  <br />
                  ATTN L Rachel Maddison
                  <br />
                  <br />
                  T: 2323-23232-2323
                  <br />
                  F: N/A
                  <br />
                  E: Johnson@Johnson.Johnson
                </address>
              </Panel>

              <Panel bg="#f7f7f7" p={[1, 1, 1, 3]}>
                <Box
                  display="flex"
                  alignItems={['flex-start', 'center']}
                  flexDirection={['column', 'row']}
                  mb={1}
                >
                  <Title
                    tag={5}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                      flex: 1;
                      margin-bottom: 0;
                    `}
                  >
                    Billing Address
                  </Title>

                  <Box flexShrink="0" ml={[0, 1]} mt={[1, 0]}>
                    <Box>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Edit"
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
                              Add a New Address
                            </Text>

                            <Button variant="primary" btnBlock>
                              Add Address
                            </Button>
                          </Box>

                          <Box
                            width={['100%', '100%', '80%', '75%', '70%']}
                            mb={2}
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
                                placeholder="Address Type"
                              />
                            </Box>

                            <Field
                              type="text"
                              title="Full Name"
                              id="field-add-new-address-full-name"
                            />

                            <Field
                              type="text"
                              title="Company / Institution"
                              id="field-add-new-address-company-institution"
                            />

                            <Field
                              type="text"
                              title="Address Line 1"
                              id="field-add-new-address-address-line-1"
                            />

                            <Field
                              type="text"
                              title="Address Line 2"
                              id="field-add-new-address-address-line-2"
                            />

                            <Field
                              type="text"
                              title="Building / Room / Mail Stop"
                              id="field-add-new-address-building"
                            />

                            <Field
                              type="text"
                              title="City"
                              id="field-add-new-address-city"
                            />

                            <Field
                              type="text"
                              title="State / Province / Region"
                              id="field-add-new-address-state"
                            />

                            <Field
                              type="text"
                              title="Zip Code / Postal Code"
                              id="field-add-new-address-zip"
                            />

                            <Field
                              type="email"
                              title="Email Address"
                              id="field-add-new-address-email-address"
                            />

                            <Field
                              type="tel"
                              title="Phone Number"
                              id="field-add-new-address-phone"
                            />

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
                                placeholder="Select a Country"
                              />
                            </Box>

                            <Checkbox
                              title="Make this my default payment method."
                              id="checkbox-field-new-address-1"
                            />
                          </Box>
                        </Box>
                      </TrayPopup>
                    </Box>
                  </Box>
                </Box>

                <address
                  css={css`
                    margin-bottom: 0;
                  `}
                >
                  <b>Johnson & Johnson</b>
                  <br />
                  8441 Johnson Circle
                  <br />
                  BLDG A1; RM 842
                  <br />
                  Denver, Colorado 54187
                  <br />
                  United States of America
                  <br />
                  ATTN L Rachel Maddison
                  <br />
                  <br />
                  T: 2323-23232-2323
                  <br />
                  F: N/A
                  <br />
                  E: Johnson@Johnson.Johnson
                </address>
              </Panel>
            </Box>

            <Box
              display="grid"
              gridGap={['15px', '15px', '30px', '30px']}
              gridTemplateColumns="repeat(1, 1fr)"
              css={css`
                @media (min-width: 1700px) {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              `}
            >
              <Box>
                <Title
                  tag={5}
                  css={css`
                    font-family: ${theme.fontFamily.base};
                  `}
                >
                  Peyment Methods
                </Title>

                <Panel>
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Box
                      flex="1"
                      display="flex"
                      mb={[2, 2, 2, 2, 0]}
                      flexDirection={['column', 'column', 'row', 'row', 'row']}
                    >
                      <Box
                        width="70px"
                        textAlign="center"
                        mr={2}
                        flexShrink="0"
                        mb={[1, 1, 0, 0, 0]}
                      >
                        <Image src={visa} alt="alt" width="100%" />
                      </Box>
                      <Box mr={[2, 2, 2, 5, 5]} mb={[1, 1, 0, 0, 0]}>
                        <Text mb={0}>Visa ending in 8493</Text>
                        <Text fontSize="10px">
                          <b>Card Holder: Kundan Das</b>
                        </Text>
                      </Box>
                      <Box>
                        <Text mb={0}>Expires 3/2017</Text>
                      </Box>
                    </Box>

                    <Box flexShrink="0" ml={[0, 0, 0, 0, 2]}>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Change"
                        headerBackBtnTitle="Back to order details"
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
                              Choose a Payment Method
                            </Text>

                            <Button variant="primary" btnBlock>
                              Update Payment Method
                            </Button>
                          </Box>

                          <Box
                            display="grid"
                            gridGap={['15px', '15px', '15px', '15px', '60px']}
                            alignItems="flex-start"
                            gridTemplateColumns={[
                              'repeat(1, 1fr)',
                              'repeat(1,1fr)',
                              'repeat(1,2fr 1fr)',
                              'repeat(1,2fr 1fr)',
                              'repeat(1,2.5fr 1fr)',
                            ]}
                          >
                            <Box>
                              <Panel>
                                <Box
                                  display="flex"
                                  alignItems={[
                                    'normal',
                                    'normal',
                                    'normal',
                                    'center',
                                    'center',
                                  ]}
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Image src={visa} alt="alt" width="100%" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
                                    <Text mb={0}>Visa ending in 8493</Text>
                                    <Text fontSize="10px">
                                      <b>Card Holder: Kundan Das</b>
                                    </Text>
                                  </Box>
                                  <Box>
                                    <Text mb={0}>Expires 3/2017</Text>
                                  </Box>
                                </Box>
                              </Panel>

                              <Panel>
                                <Box
                                  display="flex"
                                  alignItems={[
                                    'normal',
                                    'normal',
                                    'normal',
                                    'center',
                                    'center',
                                  ]}
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Image src={ae} alt="alt" width="100%" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
                                    <Text mb={0}>Visa ending in 8493</Text>
                                    <Text fontSize="10px">
                                      <b>Card Holder: Kundan Das</b>
                                    </Text>
                                  </Box>
                                  <Box>
                                    <Text mb={0}>Expires 3/2017</Text>
                                  </Box>
                                </Box>
                              </Panel>

                              <Panel>
                                <Box
                                  display="flex"
                                  alignItems={[
                                    'normal',
                                    'normal',
                                    'normal',
                                    'center',
                                    'center',
                                  ]}
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Image
                                      src={discover}
                                      alt="alt"
                                      width="100%"
                                    />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
                                    <Text mb={0}>Visa ending in 8493</Text>
                                    <Text fontSize="10px">
                                      <b>Card Holder: Kundan Das</b>
                                    </Text>
                                  </Box>
                                  <Box>
                                    <Text mb={0}>Expires 3/2017</Text>
                                  </Box>
                                </Box>
                              </Panel>

                              <Panel>
                                <Box
                                  display="flex"
                                  alignItems={[
                                    'normal',
                                    'normal',
                                    'normal',
                                    'center',
                                    'center',
                                  ]}
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Image src={mc} alt="alt" width="100%" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
                                    <Text mb={0}>Visa ending in 8493</Text>
                                    <Text fontSize="10px">
                                      <b>Card Holder: Kundan Das</b>
                                    </Text>
                                  </Box>
                                  <Box>
                                    <Text mb={0}>Expires 3/2017</Text>
                                  </Box>
                                </Box>
                              </Panel>

                              <Panel>
                                <Box
                                  display="flex"
                                  alignItems={[
                                    'normal',
                                    'normal',
                                    'normal',
                                    'center',
                                    'center',
                                  ]}
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Icon icon="file-invoice" size="42px" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
                                    <Text mb={0}>Visa ending in 8493</Text>
                                    <Text fontSize="10px">
                                      <b>Card Holder: Kundan Das</b>
                                    </Text>
                                  </Box>
                                  <Box>
                                    <Text mb={0}>Expires 3/2017</Text>
                                  </Box>
                                </Box>
                              </Panel>

                              <Panel>
                                <Box
                                  display="flex"
                                  alignItems={[
                                    'normal',
                                    'normal',
                                    'normal',
                                    'center',
                                    'center',
                                  ]}
                                  flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'row',
                                    'row',
                                  ]}
                                >
                                  <Box
                                    width="70px"
                                    textAlign="center"
                                    mr={2}
                                    flexShrink="0"
                                    mb={[1, 1, 1, 0, 0]}
                                  >
                                    <Icon icon="file-invoice" size="42px" />
                                  </Box>
                                  <Box
                                    mr={[2, 2, 2, 5, 5]}
                                    mb={[1, 1, 0, 0, 0]}
                                  >
                                    <Text mb={0}>Visa ending in 8493</Text>
                                    <Text fontSize="10px">
                                      <b>Card Holder: Kundan Das</b>
                                    </Text>
                                  </Box>
                                  <Box>
                                    <Text mb={0}>Expires 3/2017</Text>
                                  </Box>
                                </Box>
                              </Panel>
                            </Box>

                            <Box
                              display="grid"
                              gridGap="15px"
                              gridTemplateColumns="repeat(1, 1fr)"
                            >
                              <Button btnBlock>
                                Add a Card
                              </Button>
                              <Button btnBlock>
                                Add Bank Account
                              </Button>
                              <Button btnBlock>
                                Add a PO
                              </Button>
                              <Button btnBlock>
                                Single Use PO
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </TrayPopup>
                    </Box>
                  </Box>
                </Panel>

                <Panel>
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Box
                      flex="1"
                      display="flex"
                      mb={[2, 2, 2, 2, 0]}
                      flexDirection={['column', 'column', 'row', 'row', 'row']}
                    >
                      <Box
                        width="70px"
                        textAlign="center"
                        mr={2}
                        flexShrink="0"
                        mb={[1, 1, 0, 0, 0]}
                      >
                        <Icon size="40px" icon="file-invoice" />
                      </Box>
                      <Box mr={[2, 2, 2, 5, 5]} mb={[1, 1, 0, 0, 0]}>
                        <Anchor href="/" bold>
                          PO - EID 15647841
                        </Anchor>
                        <Text fontSize="10px">
                          <b>Card Holder: Kundan Das</b>
                        </Text>
                      </Box>
                      <Box>
                        <Text mb={0}>Expires 3/2017</Text>
                      </Box>
                    </Box>

                    <Box flexShrink="0" ml={[0, 0, 0, 0, 2]}>
                      <Button hasShadow>Change</Button>
                    </Box>
                  </Box>
                </Panel>

                <Panel>
                  <Box
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Box
                      flex="1"
                      display="flex"
                      mb={[2, 2, 2, 2, 0]}
                      flexDirection={['column', 'column', 'row', 'row', 'row']}
                    >
                      <Box>
                        <Text mb={0}>Reference Number: AT-434335242</Text>
                        <Text fontSize="10px">
                          <b>
                            Note: This number will be noted on the shipping
                            label, packing list and invoice.
                          </b>
                        </Text>
                      </Box>
                    </Box>

                    <Box flexShrink="0" ml={[0, 0, 0, 0, 2]}>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Change"
                        headerBackBtnTitle="Back to checkout"
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
                              Change Reference Number
                            </Text>

                            <Button variant="primary" btnBlock>
                              Save Changes
                            </Button>
                          </Box>

                          <Field
                            type="text"
                            title="REFERENCE NUMBER"
                            id="field-reference-number"
                          />
                        </Box>
                      </TrayPopup>
                    </Box>
                  </Box>
                </Panel>
              </Box>

              <Box>
                <Title
                  tag={5}
                  css={css`
                    font-family: ${theme.fontFamily.base};
                  `}
                >
                  Promotions & Special Requests
                </Title>

                <Panel>
                  <Box
                    py="11px"
                    display="flex"
                    alignItems={[
                      'normal',
                      'normal',
                      'normal',
                      'normal',
                      'center',
                    ]}
                    flexDirection={[
                      'column',
                      'column',
                      'column',
                      'column',
                      'row',
                    ]}
                  >
                    <Box
                      flex="1"
                      display="flex"
                      mb={[2, 2, 2, 2, 0]}
                      flexDirection={['column', 'column', 'row', 'row', 'row']}
                    >
                      <Box>
                        <Anchor
                          href="/"
                          css={css`
                            text-decoration: underline;
                          `}
                        >
                          2 Promotions Applied
                        </Anchor>{' '}
                        -{' '}
                        <Text display="inline-block" color="success">
                          Savings: $45.24
                        </Text>
                      </Box>
                    </Box>

                    <Box flexShrink="0" ml={[0, 0, 0, 0, 2]}>
                      <TrayPopup
                        inlineBlock
                        toggleTitle="Add a Promo Code"
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
                              Apply a Promotion
                            </Text>

                            <Button variant="primary" btnBlock>
                              Apply Promotion
                            </Button>
                          </Box>

                          <Text
                            fontSize="16px"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Add a Promotion
                          </Text>
                          <Field
                            type="text"
                            title="Promotional Code"
                            id="field-promotional-code"
                          />

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

                          <StyledBusinessBox>
                            <Box mr="auto">
                              <StyledBusinessLink href="/">
                                <Icon size="18px" icon="file-pdf" mr="10px" />
                                <Box flex="1">
                                  Promocode Voucher Rebate Form
                                </Box>
                              </StyledBusinessLink>
                            </Box>
                            <Icon
                              icon="trash"
                              ml="10px"
                              css={css`
                                cursor: pointer;
                              `}
                            />
                          </StyledBusinessBox>

                          <Divider my={3} />

                          <Text
                            fontSize="16px"
                            fontFamily={theme.fontFamily.bold}
                          >
                            Applied Promotions
                          </Text>

                          <Panel>
                            <Box
                              display="flex"
                              alignItems={[
                                'flex-start',
                                'flex-start',
                                'center',
                              ]}
                              justifyContent="space-between"
                              flexDirection={['column', 'column', 'row']}
                            >
                              <Box flexShrink="0">
                                <Text mb={0}>Promotion: uu-2515474</Text>
                                <Anchor href="/" small bold>
                                  Promocode Voucher Rebate Form.pdf
                                </Anchor>
                              </Box>

                              <Box
                                flexShrink="0"
                                ml={[0, 0, 3]}
                                mt={[2, 2, 0]}
                                display="flex"
                                alignItems="center"
                              >
                                <Text
                                  color="success"
                                  mb={0}
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.light}
                                >
                                  Savings: $25.24
                                </Text>
                                <Icon
                                  icon="trash"
                                  ml={5}
                                  css={css`
                                    cursor: pointer;
                                  `}
                                />
                              </Box>
                            </Box>
                          </Panel>

                          <Panel>
                            <Box
                              display="flex"
                              alignItems={[
                                'flex-start',
                                'flex-start',
                                'center',
                              ]}
                              justifyContent="space-between"
                              flexDirection={['column', 'column', 'row']}
                            >
                              <Box flexShrink="0">
                                <Text mb={0}>Promotion: uu-2515474</Text>
                                <Anchor href="/" small bold>
                                  Promocode Voucher Rebate Form.pdf
                                </Anchor>
                              </Box>

                              <Box
                                flexShrink="0"
                                ml={[0, 0, 3]}
                                mt={[2, 2, 0]}
                                display="flex"
                                alignItems="center"
                              >
                                <Text
                                  color="success"
                                  mb={0}
                                  fontSize="16px"
                                  fontFamily={theme.fontFamily.light}
                                >
                                  Savings: $25.24
                                </Text>
                                <Icon
                                  icon="trash"
                                  ml={5}
                                  css={css`
                                    cursor: pointer;
                                  `}
                                />
                              </Box>
                            </Box>
                          </Panel>
                        </Box>
                      </TrayPopup>
                    </Box>
                  </Box>
                </Panel>

                <Text color="muted" mb="0" fontFamily={theme.fontFamily.bold}>
                  Special Instructions
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.{' '}
                </Text>
              </Box>
            </Box>

            <Divider my={2} />

            <Box>
              <Box
                mb={2}
                display="flex"
                alignItems={[
                  'flex-start',
                  'flex-start',
                  'flex-start',
                  'normal',
                  'center',
                ]}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
              >
                <Box
                  fontSize="16px"
                  mb={[1, 1, 1, 1, 0]}
                  display="flex"
                  alignItems="center"
                  flex="1"
                >
                  Order Tags
                  <Popovers
                    position="right"
                    content="Base on availability provided by the supplier."
                  >
                    <Icon size="16px" icon="question-circle" ml="10px" />
                  </Popovers>
                </Box>

                <Button>Tag Labmates & Administrators</Button>
              </Box>

              <Box>
                <RSC id="RSC-Example" style={{ height: '260px' }}>
                  {dataOrderTags.map((orderTag, index) => (
                    <StyledOrderTag key={index} mr={2}>
                      <Box
                        display="flex"
                        alignItems={['flex-start', 'center']}
                        flexDirection={['column', 'row']}
                        justifyContent="space-between"
                      >
                        <Box mb={[1, 0]}>
                          <Text mb={0} fontFamily={theme.fontFamily.bold}>
                            {orderTag.name} - {orderTag.email}
                          </Text>
                          <Text fontSize="13px">{orderTag.from}</Text>
                        </Box>
                        <StyledOrderTagButton flexShrink="0" ml={[0, 2]}>
                          Untag
                        </StyledOrderTagButton>
                      </Box>
                    </StyledOrderTag>
                  ))}
                </RSC>
              </Box>
            </Box>
          </Box>

          <Box
            flexShrink={0}
            width={['100%', '100%', '100%', '420px']}
            py={[1, 1, 1, 2]}
            px={[1, 1, 1, 3]}
            bg="#f7f7f7"
          >
            <Box
              position={['static', 'static', 'static', 'sticky']}
              width="100%"
              left="0"
              top="110px"
            >
              <Image
                src={logoAside}
                alt="logo"
                mx="auto"
                mb={1}
                width="100%"
                maxWidth="130px"
                display="block"
              />
              <Title
                tag={2}
                css={css`
                  font-family: ${theme.fontFamily.base};
                `}
              >
                Order Summary
              </Title>
              <Box
                display="grid"
                gridGap="15px"
                gridTemplateColumns="repeat(1,1.5fr 1fr)"
                alignItems="center"
                fontSize="12px"
              >
                <Box fontFamily={theme.fontFamily.bold}>
                  Subtotal{' '}
                  <span
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    (3 Items)
                  </span>
                </Box>
                <Box textAlign="right">$178.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>Estimated Tax</Box>
                <Box textAlign="right">$0.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>
                  Estimated Shipping & Handling
                </Box>
                <Box
                  textAlign="right"
                  color="success"
                  fontFamily={theme.fontFamily.bold}
                >
                  <Icon icon="box" mr="5px" /> Free Shipping
                </Box>

                <Box fontFamily={theme.fontFamily.bold}>Precessing Fees</Box>
                <Box textAlign="right">$45.00</Box>

                <Box fontFamily={theme.fontFamily.bold}>Savings</Box>
                <Box
                  textAlign="right"
                  color="success"
                  fontFamily={theme.fontFamily.bold}
                >
                  $100.00
                </Box>

                <Divider gridColumn="span 2" />

                <Box fontFamily={theme.fontFamily.bold} fontSize="18px">
                  Order Total
                </Box>
                <Box
                  textAlign="right"
                  fontFamily={theme.fontFamily.bold}
                  fontSize="18px"
                >
                  <small>
                          <sup>$</sup>
                        </small>20,408.00
                </Box>
              </Box>

              <Button variant="primary" my={2} btnBlock btnMd>
                Place Order
              </Button>

              <Box px={4} textAlign="center" fontSize="12px">
                By placing your order, you agree to the
                <br /> <Link to="/">Labscoop Terms & Conditions</Link>
              </Box>

              <Box textAlign="right" mt={3}>
                <Link
                  to="/"
                  css={css`
                    font-family: ${theme.fontFamily.bold};
                    color: #7f7f7f;
                    display: inline-flex;
                    align-items: center;
                    &:hover,
                    &:focus {
                      color: ${theme.colors.primary};
                      svg {
                        path {
                          fill: ${theme.colors.primary} !important;
                        }
                      }
                    }
                  `}
                >
                  <Icon
                    icon="arrow-circle-left"
                    color="#7f7f7f"
                    size="18px"
                    css={css`
                      margin-right: 10px;
                    `}
                  />
                  Back to Previous Step
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </Fragment>
  )
}

export default CheckoutReviewAndPlace
