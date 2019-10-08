import { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import { Link } from '@reach/router'
import Select from 'react-select'

import { Box } from '../../helpers'
import {
  Header,
  Footer,
  Text,
  Title,
  Button,
  AsideSettings,
  Anchor,
  PaginationBtn,
  Icon,
  TrayPopup,
  Field,
} from '../../ui'

const LinkBack = styled(Link)`
  font-family: ${theme.fontFamily.bold};
  color: ${theme.colors.primary};
  &:,
  &:focus {
    color: ${darken(0.2, theme.colors.primary)};
    text-decoration: none;
  }
`

const AccountManageAccounts = () => {
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
          <AsideSettings
            isAsideMenuOpen={isAsideMenuOpen}
            toggleAsideMenu={toggleAsideMenu}
          />

          <Box flex="1">
            <Box
              display={['block', 'block', 'block', 'block', 'flex']}
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Box
                mb={[1, 1, 1, 1, 0]}
                mr={[0, 0, 0, 0, 2]}
                flex="1"
                display="flex"
                alignItems="center"
              >
                <Box flex="1" mr={2}>
                  <Text
                    mb="5px"
                    css={css`
                      text-transform: uppercase;
                      font-size: 11px;
                    `}
                  >
                    brand accounts
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    Manage Accounts
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
                    Account
                    <Icon
                      icon="chevron-down"
                      color={theme.colors.muted}
                      ml="10px"
                    />
                  </Box>
                  <Text fontSize={['12px', '14px']}>Manage Accounts</Text>
                </Box>
              </Box>

              <Box flexShrink="0">
                <LinkBack to="/account">
                  <Icon icon="long-arrow-left" mr="5px" />
                  Back to My Account
                </LinkBack>
              </Box>
            </Box>

            <Box
              width={['100%', '100%', '100%', '75%', '65%']}
              mb={2}
              display="flex"
              flexDirection={['column', 'column', 'column', 'row']}
              alignItems={['normal', 'normal', 'normal', 'center']}
            >
              <Box mr={[0, 0, 0, 1]} mb={[1, 1, 1, 0]} flex="1">
                <form>
                  <Box display="flex">
                    <input
                      placeholder="Search by supplier name or account number"
                      type="search"
                      css={css`
                        flex: 1;
                        margin-right: 10px;
                        border: 1px solid ${theme.colors.muted};
                        height: 34px;
                        padding: 6px 10px;
                        &:focus {
                          outline: none;
                          border-color: ${darken(0.2, theme.colors.muted)};
                        }
                      `}
                    />
                    <Button
                      css={css`
                        border-radius: 0;
                        flex-shrink: 0;
                        border-color: ${theme.colors.muted};
                        color: ${theme.colors.black};
                        box-shadow: none;
                        &:,
                        &:focus {
                          color: ${theme.colors.white};
                          background-color: ${theme.colors.primary};
                          border-color: ${theme.colors.primary};
                        }
                      `}
                    >
                      <Icon icon="search" />
                    </Button>
                  </Box>
                </form>
              </Box>

              <Anchor flexShrink="0" href="/">
                Request Institutional Pricing
              </Anchor>
            </Box>

            <Box
              display="grid"
              gridGap="15px"
              gridTemplateColumns={[
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(1,1fr 1fr 2fr)',
                'repeat(1,1fr 1fr 2fr)',
              ]}
              borderBottomColor="#b8b8b8"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              bg="#f9f9f9"
              p={1}
              fontFamily={theme.fontFamily.bold}
            >
              <Box>Brand / Supplier</Box>
              <Box>Account Number</Box>
            </Box>

            <Box
              display="grid"
              gridGap="15px"
              gridTemplateColumns={[
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(1,1fr 1fr 2fr)',
                'repeat(1,1fr 1fr 2fr)',
              ]}
              alignItems="center"
              p={1}
              borderBottomColor="#b8b8b8"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
            >
              <Box>Sigma-Dizel</Box>
              <Box>15641700</Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gridColumn={['span 2', 'span 2', 'span 2', 'span 1']}
              >
                <TrayPopup
                  inlineBlock
                  toggleVariant="primary"
                  toggleTitle="Edit Account"
                  headerBackBtnTitle="Back to product"
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
                        Add Supplier Account
                      </Text>

                      <Button variant="primary" btnBlock>
                        Add Account
                      </Button>
                    </Box>

                    <Box
                      width={['100%', '100%', '100%', '100%', '85%']}
                      display="grid"
                      gridGap={['25px', '35px']}
                      gridTemplateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']}
                    >
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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-1"
                          mb={0}
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-2"
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-3"
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

                <Button ml={2} px="15px">
                  Remove
                </Button>
              </Box>
            </Box>

            <Box
              display="grid"
              gridGap="15px"
              gridTemplateColumns={[
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(1,1fr 1fr 2fr)',
                'repeat(1,1fr 1fr 2fr)',
              ]}
              alignItems="center"
              p={1}
              borderBottomColor="#b8b8b8"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
            >
              <Box>Sigma-Dizel</Box>
              <Box>15641700</Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gridColumn={['span 2', 'span 2', 'span 2', 'span 1']}
              >
                <TrayPopup
                  inlineBlock
                  toggleVariant="primary"
                  toggleTitle="Edit Account"
                  headerBackBtnTitle="Back to product"
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
                        Add Supplier Account
                      </Text>

                      <Button variant="primary" btnBlock>
                        Add Account
                      </Button>
                    </Box>

                    <Box
                      width={['100%', '100%', '100%', '100%', '85%']}
                      display="grid"
                      gridGap={['25px', '35px']}
                      gridTemplateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']}
                    >
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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-1"
                          mb={0}
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-2"
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-3"
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

                <Button ml={2} px="15px">
                  Remove
                </Button>
              </Box>
            </Box>

            <Box
              display="grid"
              gridGap="15px"
              gridTemplateColumns={[
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(1,1fr 1fr 2fr)',
                'repeat(1,1fr 1fr 2fr)',
              ]}
              alignItems="center"
              p={1}
              borderBottomColor="#b8b8b8"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
            >
              <Box>Sigma-Dizel</Box>
              <Box>15641700</Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gridColumn={['span 2', 'span 2', 'span 2', 'span 1']}
              >
                <TrayPopup
                  inlineBlock
                  toggleVariant="primary"
                  toggleTitle="Edit Account"
                  headerBackBtnTitle="Back to product"
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
                        Add Supplier Account
                      </Text>

                      <Button variant="primary" btnBlock>
                        Add Account
                      </Button>
                    </Box>

                    <Box
                      width={['100%', '100%', '100%', '100%', '85%']}
                      display="grid"
                      gridGap={['25px', '35px']}
                      gridTemplateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']}
                    >
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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-1"
                          mb={0}
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-2"
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-3"
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

                <Button ml={2} px="15px">
                  Remove
                </Button>
              </Box>
            </Box>

            <Box
              display="grid"
              gridGap="15px"
              gridTemplateColumns={[
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(1,1fr 1fr 2fr)',
                'repeat(1,1fr 1fr 2fr)',
              ]}
              alignItems="center"
              p={1}
              borderBottomColor="#b8b8b8"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
            >
              <Box>Sigma-Dizel</Box>
              <Box>15641700</Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gridColumn={['span 2', 'span 2', 'span 2', 'span 1']}
              >
                <TrayPopup
                  inlineBlock
                  toggleVariant="primary"
                  toggleTitle="Edit Account"
                  headerBackBtnTitle="Back to product"
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
                        Add Supplier Account
                      </Text>

                      <Button variant="primary" btnBlock>
                        Add Account
                      </Button>
                    </Box>

                    <Box
                      width={['100%', '100%', '100%', '100%', '85%']}
                      display="grid"
                      gridGap={['25px', '35px']}
                      gridTemplateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']}
                    >
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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-1"
                          mb={0}
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-2"
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-3"
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

                <Button ml={2} px="15px">
                  Remove
                </Button>
              </Box>
            </Box>

            <Box
              display="grid"
              gridGap="15px"
              gridTemplateColumns={[
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(1,1fr 1fr 2fr)',
                'repeat(1,1fr 1fr 2fr)',
              ]}
              alignItems="center"
              p={1}
              borderBottomColor="#b8b8b8"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
            >
              <Box>Sigma-Dizel</Box>
              <Box>15641700</Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gridColumn={['span 2', 'span 2', 'span 2', 'span 1']}
              >
                <TrayPopup
                  inlineBlock
                  toggleVariant="primary"
                  toggleTitle="Edit Account"
                  headerBackBtnTitle="Back to product"
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
                        Add Supplier Account
                      </Text>

                      <Button variant="primary" btnBlock>
                        Add Account
                      </Button>
                    </Box>

                    <Box
                      width={['100%', '100%', '100%', '100%', '85%']}
                      display="grid"
                      gridGap={['25px', '35px']}
                      gridTemplateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']}
                    >
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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-1"
                          mb={0}
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-2"
                        />
                      </Box>

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
                        placeholder="Choose a Supplier"
                      />
                      <Box>
                        <Field
                          type="text"
                          title="Supplier Account Number"
                          id="field-supplier-account-number-3"
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

                <Button ml={2} px="15px">
                  Remove
                </Button>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent={['center', 'center', 'flex-end']}
              mt={3}
            >
              <PaginationBtn href="/" disabled tabIndex="-1">
                <Icon icon="angle-double-left" mr="5px" />
                Previous
              </PaginationBtn>
              <PaginationBtn href="/" active>
                1
              </PaginationBtn>
              <PaginationBtn href="/">2</PaginationBtn>
              <PaginationBtn href="/">3</PaginationBtn>
              <PaginationBtn href="/">
                Next
                <Icon icon="angle-double-right" ml="5px" />
              </PaginationBtn>
            </Box>
          </Box>
        </Box>
      </main>

      <Footer />
    </Fragment>
  )
}

export default AccountManageAccounts
