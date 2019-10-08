import { useCallback, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'
import DatePicker from 'react-datepicker'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import Collapsible from 'react-collapsible'

import theme from '../../lib/theme'
import { Box, Container } from '../../helpers'

import {
  Text,
  Button,
  Field,
  TextArea,
  Checkbox,
  TrayPopup,
  Divider,
  Anchor,
  Progress,
  Icon,
  DropZone,
  Panel,
  DatepickerHolder,
  Table,
} from '../../ui'

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

const StyledTab = styled(Tab)`
  border: none;
  background-color: transparent;
  padding: 10px 25px;
  color: ${theme.colors.black};
  margin-bottom: -1px;
  @media (max-width: 600px) {
    padding: 8px 7.5px;
  }
  &[aria-selected='true'] {
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily.bold};
    background-color: #f7f7f7;
    border: 1px solid #e6e6e6;
    border-bottom-color: #f7f7f7;
  }
`

const Popups = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const [startDate, setStartDate] = useState(new Date())

  return (
    <Container py={3}>
      <Box mb={2}>
        <TrayPopup
          toggleTitle="Add Supplier Account"
          toggleVariant="primary"
          headerBackBtnTitle="Back to my account"
          toggleBlock
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
                Add Shipping Account
              </Text>

              <Button variant="primary" btnBlock>
                Add Account
              </Button>
            </Box>

            <Box width={['100%', '100%', '80%', '65%', '50%']} mb={2}>
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
                  placeholder="COURIER"
                />
              </Box>

              <Field
                type="text"
                title="ACCOUNT NUMBER"
                id="field-account0number"
              />

              <Checkbox
                title="Set this courier account as my default shipping account."
                id="checkbox-set-default-shipping-account"
              />
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Calculate Order"
          toggleVariant="primary"
          headerBackBtnTitle="Back to my account"
          toggleBlock
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
                <Text fontSize="12px" fontFamily={theme.fontFamily.bold} mb={0}>
                  Account Number LSA154111
                </Text>
                <Text
                  fontSize={['20px', '22px']}
                  fontFamily={theme.fontFamily.bold}
                  mb="0"
                >
                  Apply Changes
                </Text>
              </Box>

              <Button variant="primary" btnBlock>
                Add Account
              </Button>
            </Box>

            <Box width={['100%', '100%', '90%', '85%', '80%']} mb={2}>
              <Text fontFamily={theme.fontFamily.bold}>AP / Incurred Cost</Text>

              <Box
                display="grid"
                gridGap={['15px', '25px']}
                gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                mb={2}
              >
                <Box>
                  <Field type="text" title="COG" id="field-cog" />
                </Box>

                <Box>
                  <Field type="text" title="ACH/WT" id="field-achwt" />
                </Box>

                <Box>
                  <Field
                    type="text"
                    title="Processing Fees"
                    id="field-processing-fees"
                  />
                </Box>

                <Box>
                  <Field type="text" title="S&H Inbound" id="field-inbound" />
                </Box>

                <Box>
                  <Field type="text" title="Margin" id="field-margin" />
                </Box>

                <Box>
                  <Field type="text" title="D/T" id="field-dt" />
                </Box>
              </Box>

              <Checkbox
                title="Save Margin for Supplier"
                id="checkbox-save-margin-for-supplier"
                bold
                mb={1}
              />

              <Checkbox
                title="Save Margin for Item"
                id="checkbox-save-margin-for-item"
                bold
              />
            </Box>

            <Divider mx={[-1, -1, -2, -3, -5]} my={2} />

            <Text fontFamily={theme.fontFamily.bold}>AP / Charges</Text>
            <Text>Product Total: $80.00</Text>

            <Box
              display="grid"
              gridGap={['15px', '25px']}
              gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
              mb={2}
              alignItems="center"
            >
              <Box>
                <Field type="text" title="ACH/WT" id="field-charges-achwt" />
              </Box>

              <Box fontFamily={theme.fontFamily.bold}>
                Current Estimated S&H: $100.00
              </Box>

              <Box>
                <Field
                  type="text"
                  title="Processing Fees"
                  id="field-charges-processing-fees"
                />
              </Box>

              <Box>
                <Field
                  type="text"
                  title="S&H Outbound"
                  id="field-charges-inbound"
                />
              </Box>

              <Box>
                <Field type="text" title="Savings" id="field-charges-savings" />
              </Box>

              <Box>
                <Checkbox
                  title="Mark as Final S&H Costs"
                  id="checkbox-mark-as-final"
                  bold
                />
              </Box>
            </Box>

            <Text>Supplier Order Total: $100.00</Text>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Cancel Order"
          headerBackBtnTitle="Back to order"
          toggleBlock
          toggleVariant="primary"
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
                Order Tracking
              </Text>

              <Button variant="primary" btnBlock>
                Done
              </Button>
            </Box>

            <Box py={1}>
              <Text fontSize="16px" fontFamily={theme.fontFamily.bold}>
                Shipment 1 - <Anchor href="/">UPS 1Z54546227</Anchor>
              </Text>

              <Box
                mx={[-1, -1, -2, -3, -5]}
                mb={2}
                display="flex"
                flexDirection={['column', 'row']}
              >
                <Progress
                  flexShrink="0"
                  flex="1"
                  title="Shipped"
                  date="May 24"
                />
                <Progress
                  flexShrink="0"
                  flex="1"
                  title="In Transit"
                  date="May 24"
                />
                <Progress
                  active
                  flexShrink="0"
                  flex="1"
                  title="Delivered"
                  date="May 24"
                />
              </Box>

              <Box
                p={[1, 2]}
                bg="#f9f9f9"
                display="grid"
                gridGap={['15px', '15px', '20px', '40px', '70px']}
                gridTemplateColumns={[
                  'repeat(1,1fr)',
                  'repeat(2,1fr)',
                  'repeat(3,1fr)',
                  'repeat(3,1fr)',
                  'repeat(3,1fr)',
                ]}
                fontSize="12px"
              >
                <Box>
                  <Text mb={1} uppercase fontFamily={theme.fontFamily.bold}>
                    catalog number
                  </Text>
                  <Text mb={1} uppercase>
                    T4517
                  </Text>
                  <Text mb={1} uppercase>
                    T4517
                  </Text>
                  <Text mb={1} uppercase>
                    T4517
                  </Text>
                  <Text uppercase>T4517</Text>
                </Box>

                <Box>
                  <Text mb={1} uppercase fontFamily={theme.fontFamily.bold}>
                    product name
                  </Text>
                  <Text mb={1} uppercase>
                    tris hcl 10mm edta, 2 lt
                  </Text>
                  <Text mb={1} uppercase>
                    tris hcl 10mm edta, 2 lt
                  </Text>
                  <Text mb={1} uppercase>
                    tris hcl 10mm edta, 2 lt
                  </Text>
                  <Text uppercase>tris hcl 10mm edta, 2 lt</Text>
                </Box>

                <Box>
                  <Text mb={1} uppercase fontFamily={theme.fontFamily.bold}>
                    quantity
                  </Text>
                  <Text mb={1}>3</Text>
                  <Text mb={1}>3</Text>
                  <Text mb={1}>3</Text>
                  <Text>3</Text>
                </Box>
              </Box>
            </Box>

            <Box py={1}>
              <Text fontSize="16px" fontFamily={theme.fontFamily.bold}>
                Shipment 2 - <Anchor href="/">UPS 1Z54546227</Anchor>
              </Text>

              <Box
                mx={[-1, -1, -2, -3, -5]}
                mb={2}
                display="flex"
                flexDirection={['column', 'row']}
              >
                <Progress
                  flexShrink="0"
                  flex="1"
                  title="Shipped"
                  date="May 24"
                />
                <Progress
                  active
                  flexShrink="0"
                  flex="1"
                  title="In Transit"
                  date="May 24"
                />
              </Box>

              <Box
                p={[1, 2]}
                bg="#f9f9f9"
                display="grid"
                gridGap={['15px', '15px', '20px', '40px', '70px']}
                gridTemplateColumns={[
                  'repeat(1,1fr)',
                  'repeat(2,1fr)',
                  'repeat(3,1fr)',
                  'repeat(3,1fr)',
                  'repeat(3,1fr)',
                ]}
                fontSize="12px"
              >
                <Box>
                  <Text mb={1} uppercase fontFamily={theme.fontFamily.bold}>
                    catalog number
                  </Text>
                  <Text mb={1} uppercase>
                    T4517
                  </Text>
                  <Text mb={1} uppercase>
                    T4517
                  </Text>
                  <Text mb={1} uppercase>
                    T4517
                  </Text>
                  <Text uppercase>T4517</Text>
                </Box>

                <Box>
                  <Text mb={1} uppercase fontFamily={theme.fontFamily.bold}>
                    product name
                  </Text>
                  <Text mb={1} uppercase>
                    tris hcl 10mm edta, 2 lt
                  </Text>
                  <Text mb={1} uppercase>
                    tris hcl 10mm edta, 2 lt
                  </Text>
                  <Text mb={1} uppercase>
                    tris hcl 10mm edta, 2 lt
                  </Text>
                  <Text uppercase>tris hcl 10mm edta, 2 lt</Text>
                </Box>

                <Box>
                  <Text mb={1} uppercase fontFamily={theme.fontFamily.bold}>
                    quantity
                  </Text>
                  <Text mb={1}>3</Text>
                  <Text mb={1}>3</Text>
                  <Text mb={1}>3</Text>
                  <Text>3</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Custom Invoice"
          headerBackBtnTitle="Back to my account"
          toggleBlock
          toggleVariant="primary"
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
                <Text mb={0} fontFamily={theme.fontFamily.bold}>
                  Account Number LSA154111
                </Text>
                <Text
                  fontSize={['20px', '22px']}
                  fontFamily={theme.fontFamily.bold}
                  mb="0"
                >
                  Custom Invoice
                </Text>
              </Box>

              <Box>
                <Button variant="primary" btnBlock mb={2}>
                  Upload Invoice
                </Button>

                <Button variant="primary" btnBlock>
                  Email Invoice
                </Button>
              </Box>
            </Box>

            <Box width={['100%', '100%', '90%', '85%', '80%']} mb={2}>
              <Text fontFamily={theme.fontFamily.bold}>AP / Incurred Cost</Text>
              <Box mb={[3, '50px']}>
                <Box
                  display="grid"
                  gridGap={['15px', '25px']}
                  gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                  mb={2}
                >
                  <Box>
                    <Field
                      type="text"
                      title="Invoice Number"
                      id="field-invoice-number"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Bill to Email Address"
                      id="field-bill-to-email-address"
                    />
                  </Box>

                  <Box>
                    <Field type="text" title="PO Number" id="field-po-number" />
                  </Box>

                  <Box>
                    <Field type="text" title="CC" id="field-cc" />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Generated On"
                      id="field-generated-on"
                    />
                  </Box>

                  <Box>
                    <Field type="text" title="BCC" id="field-bcc" />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Payment Terms"
                      id="field-payment-terms"
                    />
                  </Box>
                </Box>

                <Checkbox
                  title="Paid Invoice"
                  id="checkbox-paid-invoice"
                  bold
                />
              </Box>

              <Text fontFamily={theme.fontFamily.bold}>
                Upload Custom Invoice
              </Text>

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
                    <Box flex="1">Promocode Voucher Rebate Form</Box>
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
            </Box>

            <Divider mx={[-1, -1, -2, -3, -5]} my={2} />

            <Text fontSize="16px" fontFamily={theme.fontFamily.bold}>
              Invoice History
            </Text>

            <Panel>
              <Box
                display="flex"
                alignItems={['flex-start', 'flex-start', 'center']}
                justifyContent="space-between"
                flexDirection={['column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  1
                </Box>

                <Box flexShrink="0" flex="1" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Box display="flex" alignItems="center">
                    <Icon icon="file-pdf" size="22px" />
                    <Box flex="1" ml={1}>
                      <Anchor
                        href="/"
                        bold
                        fontSize={['12px', '12px', '14px', '14px', '16px']}
                      >
                        Labscoop Invoice LSR-784815.pdf
                      </Anchor>
                      <Text>Promotion: uu-2515474</Text>
                    </Box>
                  </Box>
                </Box>

                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Anchor
                    href="/"
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Resend via Email
                  </Anchor>
                </Box>

                <Box
                  flexShrink="0"
                  ml={[0, 0, 3]}
                  display="flex"
                  alignItems="center"
                >
                  <Text
                    mb={0}
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Generated On: 11/28/2018
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
                alignItems={['flex-start', 'flex-start', 'center']}
                justifyContent="space-between"
                flexDirection={['column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  1
                </Box>

                <Box flexShrink="0" flex="1" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Box display="flex" alignItems="center">
                    <Icon icon="file-pdf" size="22px" />
                    <Box flex="1" ml={1}>
                      <Anchor
                        href="/"
                        bold
                        fontSize={['12px', '12px', '14px', '14px', '16px']}
                      >
                        Labscoop Invoice LSR-784815.pdf
                      </Anchor>
                      <Text>Promotion: uu-2515474</Text>
                    </Box>
                  </Box>
                </Box>

                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Anchor
                    href="/"
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Resend via Email
                  </Anchor>
                </Box>

                <Box
                  flexShrink="0"
                  ml={[0, 0, 3]}
                  display="flex"
                  alignItems="center"
                >
                  <Text
                    mb={0}
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Generated On: 11/28/2018
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

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Delete Lab Group"
          headerBackBtnTitle="Back to my account"
          toggleBlock
          toggleVariant="primary"
        >
          <Box px={[1, 1, 2, 3, 5]} py={[2]}>
            <Box width={['100%', '100%', '80%', '70%', '60%']} mb={2}>
              <Text
                fontSize={['20px', '22px']}
                fontFamily={theme.fontFamily.bold}
                mb={[1, 2, 5]}
              >
                Delete Lab Group
              </Text>

              <Text fontSize={['14px', '16px']}>
                Are you sure you would like to delete{' '}
                <b>Timberland Lab Group</b>? This action cannot be reversed. All
                laboratory assets including orders, inventory, and fund accounts
                will be deleted from Labscoop.
              </Text>

              <Checkbox
                title="Permanently delete all assets associated with this lab."
                id="checkbox-permanently-delete-assets"
                mb={2}
              />

              <Field
                type="text"
                title="TYPE THE LAB NAME TO DELETE"
                id="field-type-lab-name"
              />

              <Button variant="primary" px={['25px', '40px', '65px']}>
                Delete Lab Group
              </Button>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Forgot Your Password"
          headerBackBtnTitle="Back to checkout"
          toggleBlock
          toggleVariant="primary"
        >
          <Box px={[1, 1, 2, 3, 5]} py={[2]}>
            <Box width={['100%', '100%', '80%', '70%', '60%']} mb={2}>
              <Text
                fontSize={['20px', '22px']}
                fontFamily={theme.fontFamily.bold}
              >
                Forgot Your Password?
              </Text>

              <Text mb={[1, 3]}>
                To reset your password, enter the email address you use to sign
                in to your Labscoop account.
              </Text>

              <Box mb={[2, 3]}>
                <Field
                  type="email"
                  title="Email Address"
                  id="field-forgot-email-address"
                />
              </Box>

              <Button variant="primary" mb={[3, 4, 5]}>
                Get Reset Link
              </Button>

              <Text fontSize="15x">Has your email address changed?</Text>
              <Text>
                If you no longer use the email address associated with your
                Labscoop account, you may email support@labscoop.com or chat us
                live for assistance in restoring access to your account.
              </Text>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Generate Invoice"
          headerBackBtnTitle="Back to my account"
          toggleBlock
          toggleVariant="primary"
        >
          <Box px={[1, 1, 2, 3, 5]} py={[2]}>
            <Text mb={0} fontFamily={theme.fontFamily.bold}>
              Account Number LSA154111
            </Text>
            <Text
              fontSize={['20px', '22px']}
              fontFamily={theme.fontFamily.bold}
            >
              Custom Invoice
            </Text>

            <Text>LSR-487827 - Consolidated Order Invoice Summary</Text>

            <Box
              display="grid"
              gridGap={['15px', '15px', '25px', '30px', '40px']}
              gridTemplateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
              width={['100%', '100%', '80%', '70%', '50%']}
            >
              <Box
                fontSize="12px"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(1, 1fr)"
              >
                <Box fontFamily={theme.fontFamily.bold}>Supplier Order</Box>
                <Anchor href="/" bold>
                  LSR-487827-ARP
                </Anchor>
                <Anchor href="/" bold>
                  LSR-487827-ARP
                </Anchor>
                <Anchor href="/" bold>
                  LSR-487827-ARP
                </Anchor>
              </Box>

              <Box
                fontSize="12px"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(1, 1fr)"
              >
                <Box fontFamily={theme.fontFamily.bold}>
                  Supplier Order Total
                </Box>
                <Box>$25.49</Box>
                <Box>$2.598.34</Box>
                <Box>Not Calculated</Box>
              </Box>

              <Box
                fontSize="12px"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(1, 1fr)"
                fontFamily={theme.fontFamily.bold}
              >
                <Box>OP Status</Box>
                <Box color="success">Delivered</Box>
                <Box color="danger">Cancelled</Box>
                <Box color="primary">Shipped</Box>
              </Box>
            </Box>

            <Divider mx={[-1, -1, -2, -3, -5]} my={2} />

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
              alignItems="flex-start"
            >
              <Box>
                <Text fontFamily={theme.fontFamily.bold} fontSize="15px">
                  Invoice Details
                </Text>
                <Box>
                  <Box
                    display="grid"
                    gridGap={['15px', '25px']}
                    gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                    mb={2}
                  >
                    <Box>
                      <Field
                        type="text"
                        title="Invoice Number"
                        id="field-generate-invoice-invoice-number"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="email"
                        title="Bill to Email Address"
                        id="field-generate-invoice-bill-to-email-address"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="text"
                        title="PO Number"
                        id="field-generate-invoice-po-number"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="text"
                        title="CC"
                        id="field-generate-invoice-cc"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="text"
                        title="Generated On"
                        id="field-generate-invoice-generated-on"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="text"
                        title="BCC"
                        id="field-2-generate-invoice-bcc"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="text"
                        title="Payment Terms"
                        id="field-generate-invoice-payment-terms"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="text"
                        title="Notes"
                        id="field-generate-invoice-notes"
                      />
                    </Box>
                  </Box>

                  <Checkbox
                    title="Paid Invoice"
                    id="checkbox-generate-invoice-paid-invoice"
                    bold
                  />
                </Box>
              </Box>

              <Box>
                <Button variant="primary" btnBlock mb={2}>
                  Download Invoice
                </Button>

                <Button variant="primary" btnBlock>
                  Email Invoice
                </Button>
              </Box>
            </Box>

            <Divider mx={[-1, -1, -2, -3, -5]} my={2} />

            <Text fontSize="16px" fontFamily={theme.fontFamily.bold}>
              Invoice History
            </Text>

            <Panel>
              <Box
                display="flex"
                alignItems={['flex-start', 'flex-start', 'center']}
                justifyContent="space-between"
                flexDirection={['column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  1
                </Box>

                <Box flexShrink="0" flex="1" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Box display="flex" alignItems="center">
                    <Icon icon="file-pdf" size="22px" />
                    <Box flex="1" ml={1}>
                      <Anchor
                        href="/"
                        bold
                        fontSize={['12px', '12px', '14px', '14px', '16px']}
                      >
                        Labscoop Invoice LSR-784815.pdf
                      </Anchor>
                      <Text>Promotion: uu-2515474</Text>
                    </Box>
                  </Box>
                </Box>

                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Anchor
                    href="/"
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Resend via Email
                  </Anchor>
                </Box>

                <Box
                  flexShrink="0"
                  ml={[0, 0, 3]}
                  display="flex"
                  alignItems="center"
                >
                  <Text
                    mb={0}
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Generated On: 11/28/2018
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
                alignItems={['flex-start', 'flex-start', 'center']}
                justifyContent="space-between"
                flexDirection={['column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  1
                </Box>

                <Box flexShrink="0" flex="1" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Box display="flex" alignItems="center">
                    <Icon icon="file-pdf" size="22px" />
                    <Box flex="1" ml={1}>
                      <Anchor
                        href="/"
                        bold
                        fontSize={['12px', '12px', '14px', '14px', '16px']}
                      >
                        Labscoop Invoice LSR-784815.pdf
                      </Anchor>
                      <Text>Promotion: uu-2515474</Text>
                    </Box>
                  </Box>
                </Box>

                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Anchor
                    href="/"
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Resend via Email
                  </Anchor>
                </Box>

                <Box
                  flexShrink="0"
                  ml={[0, 0, 3]}
                  display="flex"
                  alignItems="center"
                >
                  <Text
                    mb={0}
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Generated On: 11/28/2018
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

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Generate PO"
          headerBackBtnTitle="Back to my account"
          toggleBlock
          toggleVariant="primary"
        >
          <Box px={[1, 1, 2, 3, 5]} py={[2]}>
            <Text mb={0} fontFamily={theme.fontFamily.bold}>
              Account Number LSA154111
            </Text>
            <Text
              fontSize={['20px', '22px']}
              fontFamily={theme.fontFamily.bold}
            >
              Generate PO
            </Text>

            <Box
              display="grid"
              gridGap={['15px', '15px', '15px', '15px', '60px']}
              gridTemplateColumns={[
                'repeat(1, 1fr)',
                'repeat(1,1fr)',
                'repeat(1,2fr 1fr)',
                'repeat(1,2fr 1fr)',
                'repeat(1,2.5fr 1fr)',
              ]}
              alignItems="flex-start"
            >
              <Box>
                <Text fontFamily={theme.fontFamily.bold}>Invoice Details</Text>
                <Box>
                  <Box
                    display="grid"
                    gridGap={['15px', '25px']}
                    gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                    mb={2}
                  >
                    <Box>
                      <Field
                        type="text"
                        title="PO Number"
                        id="field-generate-po-po-number"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="email"
                        title="Bill to Email Address"
                        id="field-generate-po-bill-to-email-address"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="text"
                        title="Generated On"
                        id="field-generate-po-generated-on"
                      />
                    </Box>

                    <Box>
                      <Field type="text" title="CC" id="field-generate-po-cc" />
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
                        placeholder="Payment Terms"
                      />
                    </Box>

                    <Box>
                      <Field
                        type="text"
                        title="BCC"
                        id="field-3-generate-invoice-bcc"
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <Field
                        type="text"
                        title="Notes"
                        id="field-generate-po-notes"
                      />
                    </Box>
                  </Box>

                  <Checkbox
                    title="STK PO"
                    id="checkbox-generate-po-stk-po"
                    bold
                  />
                </Box>
              </Box>

              <Box>
                <Button variant="primary" btnBlock mb={2}>
                  Send PO via Email
                </Button>

                <Button variant="primary" btnBlock mb={2}>
                  Download PO (PDF)
                </Button>

                <Button variant="primary" btnBlock>
                  Log PO
                </Button>
              </Box>
            </Box>
          </Box>

          <Box bg="#f7f7f7" px={[1, 1, 2, 3, 5]} py={[2]}>
            <Text fontSize="18px" fontFamily={theme.fontFamily.light}>
              PO Summary
            </Text>

            <Box
              display="grid"
              gridGap="15px"
              gridTemplateColumns={[
                'repeat(1,1fr)',
                'repeat(2,1fr)',
                'repeat(4,1fr)',
                'repeat(4,1fr)',
              ]}
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
                  placeholder="Delivery Option"
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
                  placeholder="Preferred Courier"
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
                  placeholder="Courier Account Number"
                  css={css`
                    .select__control {
                      background-color: transparent;
                    }
                  `}
                />
              </Box>

              <Box>
                <Field
                  type="text"
                  id="field-discount"
                  title="Discount"
                  css={css`
                    background-color: transparent;
                  `}
                />
              </Box>

              <Box>
                <Checkbox
                  title="Allow Partial Shipment"
                  id="checkbox-allow-partial-shipment"
                  bold
                />
              </Box>

              <Box>
                <Checkbox
                  title="Free Shipping"
                  id="checkbox-free-shipment"
                  bold
                />
              </Box>

              <Box gridColumn="span 2" textAlign={['left', 'left', 'right']}>
                <b>PO Total: $12,541.21</b>
              </Box>
            </Box>
          </Box>

          <Box px={[1, 1, 2, 3, 5]} py={[2]}>
            <Box mb={[2, 3]}>
              <Text fontFamily={theme.fontFamily.bold} mb={0} color="primary">
                Thioredixin Reductase (Rat Recombinant)
              </Text>
              <Text fontSize="13px" display="flex" alignItems="center">
                <span
                  css={css`
                    margin-right: 5px;
                  `}
                >
                  by
                </span>{' '}
                <b>Redoxica, Inc.</b> <Icon icon="badge-logo" ml="10px" />
              </Text>

              <Box
                display="grid"
                gridGap={[1, 2]}
                mb={[1, 2]}
                gridTemplateColumns={[
                  'repeat(1,1fr)',
                  'repeat(3,1fr)',
                  'repeat(3,1fr)',
                  'repeat(5,auto)',
                  'repeat(5,auto)',
                ]}
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
                    placeholder="Action"
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
                    unit size - configuration
                  </Text>
                  <Text fontSize="12px" truncate>
                    50mg, advanced kit, 120v, glass, silver
                  </Text>
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
                    $27,0000.00
                  </Text>
                </Box>

                <Box
                  fontSize="12px"
                  css={css`
                    text-transform: uppercase;
                  `}
                >
                  <Text fontFamily={theme.fontFamily.bold} mb={0}>
                    COG price
                  </Text>
                  <Box
                    truncate
                    display="inline-block"
                    borderBottomWidth="2px"
                    borderBottomStyle="solid"
                    borderBottomColor="primary"
                  >
                    $27,000.00
                  </Box>
                </Box>

                <Box
                  css={css`
                    text-transform: uppercase;
                  `}
                  fontSize="12px"
                >
                  <Text fontFamily={theme.fontFamily.bold} mb={0}>
                    Qty
                  </Text>
                  <Box
                    truncate
                    display="inline-block"
                    borderBottomWidth="2px"
                    borderBottomStyle="solid"
                    borderBottomColor="primary"
                  >
                    30
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box mb={[2, 3]}>
              <Text fontFamily={theme.fontFamily.bold} mb={0} color="primary">
                Thioredixin Reductase (Rat Recombinant)
              </Text>
              <Text fontSize="13px" display="flex" alignItems="center">
                <span
                  css={css`
                    margin-right: 5px;
                  `}
                >
                  by
                </span>{' '}
                <b>Redoxica, Inc.</b> <Icon icon="badge-logo" ml="10px" />
              </Text>

              <Box
                display="grid"
                gridGap={[1, 2]}
                mb={[1, 2]}
                gridTemplateColumns={[
                  'repeat(1,1fr)',
                  'repeat(3,1fr)',
                  'repeat(3,1fr)',
                  'repeat(5,auto)',
                  'repeat(5,auto)',
                ]}
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
                    placeholder="Action"
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
                    unit size - configuration
                  </Text>
                  <Text fontSize="12px" truncate>
                    50mg, advanced kit, 120v, glass, silver
                  </Text>
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
                    $27,0000.00
                  </Text>
                </Box>

                <Box
                  fontSize="12px"
                  css={css`
                    text-transform: uppercase;
                  `}
                >
                  <Text fontFamily={theme.fontFamily.bold} mb={0}>
                    COG price
                  </Text>
                  <Box
                    truncate
                    display="inline-block"
                    borderBottomWidth="2px"
                    borderBottomStyle="solid"
                    borderBottomColor="primary"
                  >
                    $27,000.00
                  </Box>
                </Box>

                <Box
                  css={css`
                    text-transform: uppercase;
                  `}
                  fontSize="12px"
                >
                  <Text fontFamily={theme.fontFamily.bold} mb={0}>
                    Qty
                  </Text>
                  <Box
                    truncate
                    display="inline-block"
                    borderBottomWidth="2px"
                    borderBottomStyle="solid"
                    borderBottomColor="primary"
                  >
                    30
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box mb={[2, 3]}>
              <Text fontFamily={theme.fontFamily.bold} mb={0} color="primary">
                Thioredixin Reductase (Rat Recombinant)
              </Text>
              <Text fontSize="13px" display="flex" alignItems="center">
                <span
                  css={css`
                    margin-right: 5px;
                  `}
                >
                  by
                </span>{' '}
                <b>Redoxica, Inc.</b> <Icon icon="badge-logo" ml="10px" />
              </Text>

              <Box
                display="grid"
                gridGap={[1, 2]}
                gridTemplateColumns={[
                  'repeat(1,1fr)',
                  'repeat(3,1fr)',
                  'repeat(3,1fr)',
                  'repeat(5,auto)',
                  'repeat(5,auto)',
                ]}
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
                    placeholder="Action"
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
                    unit size - configuration
                  </Text>
                  <Text fontSize="12px" truncate>
                    50mg, advanced kit, 120v, glass, silver
                  </Text>
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
                    $27,0000.00
                  </Text>
                </Box>

                <Box
                  fontSize="12px"
                  css={css`
                    text-transform: uppercase;
                  `}
                >
                  <Text fontFamily={theme.fontFamily.bold} mb={0}>
                    COG price
                  </Text>
                  <Box
                    truncate
                    display="inline-block"
                    borderBottomWidth="2px"
                    borderBottomStyle="solid"
                    borderBottomColor="primary"
                  >
                    $27,000.00
                  </Box>
                </Box>

                <Box
                  css={css`
                    text-transform: uppercase;
                  `}
                  fontSize="12px"
                >
                  <Text fontFamily={theme.fontFamily.bold} mb={0}>
                    Qty
                  </Text>
                  <Box
                    truncate
                    display="inline-block"
                    borderBottomWidth="2px"
                    borderBottomStyle="solid"
                    borderBottomColor="primary"
                  >
                    30
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box bg="#f7f7f7" px={[1, 1, 2, 3, 5]} py={[2]}>
            <Text fontFamily={theme.fontFamily.light} fontSize="18px">
              Shipping Address
            </Text>

            <Box mb={1}>
              <Collapsible trigger="Edit">
                <Box p={1} bg="white" mt={1}>
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
                    id="field-add-new-address-full-name2"
                  />

                  <Field
                    type="text"
                    title="Company / Institution"
                    id="field-add-new-address-company-institution2"
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
                    id="field-add-new-address-city2"
                  />

                  <Field
                    type="text"
                    title="State / Province / Region"
                    id="field-add-new-address-state2"
                  />

                  <Field
                    type="text"
                    title="Zip Code / Postal Code"
                    id="field-add-new-address-zip2"
                  />

                  <Field
                    type="email"
                    title="Email Address"
                    id="field-add-new-address-email-address2"
                  />

                  <Field
                    type="tel"
                    title="Phone Number"
                    id="field-add-new-address-phone2"
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
                    mb={2}
                  />

                  <Button variant="primary">Add Address</Button>
                </Box>
              </Collapsible>
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
          </Box>

          <Box bg="#f7f7f7" px={[1, 1, 2, 3, 5]} py={[2]} mt={2}>
            <Text fontFamily={theme.fontFamily.light} fontSize="18px">
              Billing Address
            </Text>

            <Box mb={1}>
              <Collapsible trigger="Edit">
                <Box p={1} bg="white" mt={1}>
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
                    id="field-add-new-address-address-line-2-1"
                  />

                  <Field
                    type="text"
                    title="Address Line 2"
                    id="field-add-new-address-address-line-2-2"
                  />

                  <Field
                    type="text"
                    title="Building / Room / Mail Stop"
                    id="field-add-new-address-building-2"
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
                    mb={2}
                  />

                  <Button variant="primary">Add Address</Button>
                </Box>
              </Collapsible>
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
          </Box>

          <Box px={[1, 1, 2, 3, 5]} py={[2]}>
            <Panel>
              <Box
                display="flex"
                alignItems={['flex-start', 'flex-start', 'center']}
                justifyContent="space-between"
                flexDirection={['column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  1
                </Box>

                <Box flexShrink="0" flex="1" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Box display="flex" alignItems="center">
                    <Icon icon="file-pdf" size="22px" />
                    <Box flex="1" ml={1}>
                      <Anchor
                        href="/"
                        bold
                        fontSize={['12px', '12px', '14px', '14px', '16px']}
                      >
                        Labscoop Invoice LSR-784815.pdf
                      </Anchor>
                      <Text fontFamily={theme.fontFamily.bold}>
                        Sent via Email: kundan.das@gmail.com
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Text fontFamily={theme.fontFamily.bold}>
                    Submitted: 8/25/2019
                  </Text>
                </Box>

                <Box
                  flexShrink="0"
                  ml={[0, 0, 3]}
                  display="flex"
                  alignItems="center"
                >
                  <Box>
                    <Button variant="primary" btnMd>
                      Resend
                    </Button>
                  </Box>

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
                alignItems={['flex-start', 'flex-start', 'center']}
                justifyContent="space-between"
                flexDirection={['column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  1
                </Box>

                <Box flexShrink="0" flex="1" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Box display="flex" alignItems="center">
                    <Icon icon="file-pdf" size="22px" />
                    <Box flex="1" ml={1}>
                      <Anchor
                        href="/"
                        bold
                        fontSize={['12px', '12px', '14px', '14px', '16px']}
                      >
                        Labscoop Invoice LSR-784815.pdf
                      </Anchor>
                      <Text fontFamily={theme.fontFamily.bold}>
                        Sent via Email: kundan.das@gmail.com
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Text fontFamily={theme.fontFamily.bold}>
                    Submitted: 8/25/2019
                  </Text>
                </Box>

                <Box
                  flexShrink="0"
                  ml={[0, 0, 3]}
                  display="flex"
                  alignItems="center"
                >
                  <Box>
                    <Button variant="primary" btnMd>
                      Resend
                    </Button>
                  </Box>

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

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Item Status (Back Ordered)"
          headerBackBtnTitle="Back to order"
          toggleBlock
          toggleVariant="primary"
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
                Item Back Order
              </Text>

              <Button variant="primary" btnBlock>
                Back Order Items
              </Button>
            </Box>

            <Box mb={2}>
              <Text
                uppercase
                mb="5px"
                fontFamily={theme.fontFamily.bold}
                fontSize="12px"
              >
                select back order date
              </Text>

              <DatepickerHolder>
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                />
              </DatepickerHolder>
            </Box>

            <Text fontSize="12px">
              Choose the items tha you would like to back order from{' '}
              <b>Order LSR12345185</b>
            </Text>

            <Checkbox
              title="Select all items in this order."
              id="checkbox-select-all-items"
              mb={3}
            />

            <Box fontSize={['10px', '12px']}>
              <Table bordered visible>
                <thead>
                  <tr>
                    <th>CATALOG NUMBER</th>
                    <th>PRODUCT NAME</th>
                    <th>QUANTITY</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-1" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-2" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-3" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Item Status (Cancelled)"
          headerBackBtnTitle="Back to order"
          toggleBlock
          toggleVariant="primary"
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
                Item Cancellation
              </Text>

              <Button variant="primary" btnBlock>
                Cancel Items
              </Button>
            </Box>

            <TextArea title="REASON FOR CANCELLATION" id="textarea-reason" />

            <Text fontSize="12px">
              Choose the items tha you would like to back order from{' '}
              <b>Order LSR12345185</b>
            </Text>

            <Checkbox
              title="Select all items in this order."
              id="checkbox-2-select-all-items"
              mb={1}
            />

            <Box fontSize={['10px', '12px']}>
              <Table bordered visible>
                <thead>
                  <tr>
                    <th>CATALOG NUMBER</th>
                    <th>PRODUCT NAME</th>
                    <th>QUANTITY</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-2-1" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-2-2" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-2-3" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Item Status (Confirmed)"
          headerBackBtnTitle="Back to order"
          toggleBlock
          toggleVariant="primary"
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
                Item Confirmation
              </Text>

              <Button variant="primary" btnBlock>
                Confirm Items
              </Button>
            </Box>

            <Text fontSize="12px">
              Choose the items tha you would like to back order from{' '}
              <b>Order LSR12345185</b>
            </Text>

            <Checkbox
              title="Select all items in this order."
              id="checkbox-3-select-all-items"
              mb={1}
            />

            <Box fontSize={['10px', '12px']}>
              <Table bordered visible>
                <thead>
                  <tr>
                    <th>CATALOG NUMBER</th>
                    <th>PRODUCT NAME</th>
                    <th>QUANTITY</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-3-1" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-3-2" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-3-3" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Item Status (Production)"
          headerBackBtnTitle="Back to order"
          toggleBlock
          toggleVariant="primary"
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
                Item Production
              </Text>

              <Button variant="primary" btnBlock>
                Items In Production
              </Button>
            </Box>

            <Box mb={2}>
              <Text
                uppercase
                mb="5px"
                fontFamily={theme.fontFamily.bold}
                fontSize="12px"
              >
                set production date
              </Text>

              <DatepickerHolder>
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                />
              </DatepickerHolder>
            </Box>

            <Text fontSize="12px">
              Choose the items tha you would like to back order from{' '}
              <b>Order LSR12345185</b>
            </Text>

            <Checkbox
              title="Select all items in this order."
              id="checkbox-4-select-all-items"
              mb={1}
            />

            <Box fontSize={['10px', '12px']}>
              <Table bordered visible>
                <thead>
                  <tr>
                    <th>CATALOG NUMBER</th>
                    <th>PRODUCT NAME</th>
                    <th>QUANTITY</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-4-1" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-4-2" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox title="T56452" id="checkbox-table-4-3" />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleBlock
          toggleVariant="primary"
          toggleTitle="Join a Lab"
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
                'repeat(1,1.5fr 1fr)',
              ]}
              alignItems="center"
            >
              <Text
                fontSize={['20px', '22px']}
                fontFamily={theme.fontFamily.bold}
                mb="0"
              >
                Quick Add
              </Text>

              <Box
                display="grid"
                gridGap="15px"
                gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
              >
                <Button variant="primary" btnBlock>
                  Add to Card
                </Button>

                <Button variant="primary" btnBlock>
                  Checkout
                </Button>
              </Box>
            </Box>

            <Box
              display="grid"
              gridGap="15px"
              gridTemplateColumns={[
                'repeat(1,1fr 1fr)',
                'repeat(2,1fr)',
                'repeat(1,1fr 1.6fr 0.7fr 0.3fr)',
                'repeat(1,1fr 2.2fr 0.7fr 0.3fr)',
                'repeat(1,1fr 3fr 0.7fr 0.3fr)',
              ]}
              alignItems="center"
            >
              <Box>
                <Field
                  type="text"
                  title="Catalog Number"
                  id="field-join-catalog-number"
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

      <Box mb={2}>
        <TrayPopup
          toggleBlock
          toggleVariant="primary"
          toggleTitle="Leave Lab"
          headerBackBtnTitle="Back to my account"
        >
          <Box px={[1, 1, 2, 3, 5]} py={[2]}>
            <Text
              fontSize={['20px', '22px']}
              fontFamily={theme.fontFamily.bold}
            >
              Leave Lab
            </Text>

            <Box width={['100%', '100%', '80%', '70%', '60%']}>
              <Text>
                As the onle manager of the Derick Lab, You must assign the
                manager role to another member within this lab.
              </Text>

              <Box mb={[2, 4]}>
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
                  placeholder="Choose a Lab Member to Assign as Manager"
                />
              </Box>

              <Button variant="primary">Leave Lab</Button>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="One-Time PO"
          headerBackBtnTitle="Back to checkout"
          toggleBlock
          toggleVariant="primary"
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
                One-Time Purchase Order
              </Text>

              <Button variant="primary" btnBlock>
                Save Changes
              </Button>
            </Box>

            <Box width={['100%', '100%', '90%', '85%', '80%']} mb={2}>
              <Field
                type="text"
                title="Aproved PO Number"
                id="field-one-time-aproved-po-number"
              />

              <Text fontFamily={theme.fontFamily.bold}>
                Upload Custom Invoice
              </Text>

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
                    <Box flex="1">Business License 2015</Box>
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
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Order Tracking (LAMS)"
          headerBackBtnTitle="Back to order"
          toggleBlock
          toggleVariant="primary"
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
                Add Order Tracking
              </Text>

              <Button variant="primary" btnBlock>
                Add Order Tracking
              </Button>
            </Box>

            <Box mb={2}>
              <Tabs defaultTab="one">
                <TabList>
                  <StyledTab tabFor="one">New Shipement</StyledTab>
                  <StyledTab tabFor="two">Add to Existing</StyledTab>
                </TabList>

                <Box
                  bg="#f7f7f7"
                  borderY="1px solid #e6e6e6"
                  py={2}
                  px={[1, 1, 2, 3, 5]}
                  mx={[-1, -1, -2, -3, -5]}
                >
                  <TabPanel tabId="one">
                    <Box
                      display="grid"
                      gridGap={['15px', '35px']}
                      gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
                    >
                      <Select
                        css={css`
                          flex: 1;
                          > div {
                            background-color: transparent;
                          }
                        `}
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
                        isSearchable={true}
                        menuPlacement="auto"
                        className="select"
                        classNamePrefix="select"
                        placeholder="TRACKING NUMBER"
                      />

                      <Select
                        css={css`
                          flex: 1;
                          > div {
                            background-color: transparent;
                          }
                        `}
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
                        isSearchable={true}
                        menuPlacement="auto"
                        className="select"
                        classNamePrefix="select"
                        placeholder="COURIER"
                      />
                    </Box>
                  </TabPanel>

                  <TabPanel tabId="two">
                    <Box
                      display="grid"
                      gridGap={['15px', '35px']}
                      gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
                    >
                      <Select
                        css={css`
                          flex: 1;
                          > div {
                            background-color: transparent;
                          }
                        `}
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
                        isSearchable={true}
                        menuPlacement="auto"
                        className="select"
                        classNamePrefix="select"
                        placeholder="CHOOSE AN EXISTING SHIPMENT"
                      />
                    </Box>
                  </TabPanel>
                </Box>
              </Tabs>
            </Box>

            <Box fontSize={['10px', '12px']}>
              <Table bordered visible>
                <thead>
                  <tr>
                    <th>CATALOG NUMBER</th>
                    <th>PRODUCT NAME</th>
                    <th>QUANTITY</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <Checkbox
                        title="T56452"
                        id="checkbox-table-add-order-1"
                      />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox
                        title="T56452"
                        id="checkbox-table-add-order-2"
                      />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Checkbox
                        title="T56452"
                        id="checkbox-table-add-order-3"
                      />
                    </td>
                    <td>Trxn 2 Reductase Activity Assay Kit</td>
                    <td>
                      <Box width="78px">
                        <Select
                          options={[
                            {
                              value: '1',
                              label: '1',
                            },
                            {
                              value: '2',
                              label: '2',
                            },
                            {
                              value: '3',
                              label: '3',
                            },
                          ]}
                          isSearchable={false}
                          menuPlacement="auto"
                          className="select"
                          classNamePrefix="select"
                          placeholder="1"
                          css={css`
                            .select__control {
                              border: 1px solid ${theme.colors.muted} !important;
                            }
                          `}
                        />
                      </Box>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Remove Lab Member"
          headerBackBtnTitle="Back to my account"
          toggleBlock
          toggleVariant="primary"
        >
          <Box px={[1, 1, 2, 3, 5]} py={[2]}>
            <Text
              fontSize={['20px', '22px']}
              fontFamily={theme.fontFamily.bold}
            >
              Add Order Tracking
            </Text>
            <Text mb={[2, 5]}>
              Are you sure you would like to permanently remove John Doe from
              the Murdock Lab?
            </Text>
            <Button variant="primary">Remove Lab Member</Button>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Reorder"
          headerBackBtnTitle="Back to checkout"
          toggleBlock
          toggleVariant="primary"
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
                'repeat(1,1.5fr 1fr)',
              ]}
              alignItems="center"
            >
              <Text
                fontSize={['20px', '22px']}
                fontFamily={theme.fontFamily.bold}
                mb="0"
              >
                Reorder
              </Text>

              <Box
                display="grid"
                gridGap="15px"
                gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
              >
                <Button variant="primary" btnBlock>
                  Add to Card
                </Button>

                <Button variant="success" btnBlock>
                  Instant Reorder
                </Button>
              </Box>
            </Box>

            <Box width={['100%', '100%', '90%', '85%', '80%']} mb={2}>
              <Box mb={2}>
                <Text fontSize="12px" mb={0} fontFamily={theme.fontFamily.bold}>
                  Catalog Number
                </Text>
                <Text fontSize="16px" uppercase>
                  t48172781-100mg
                </Text>
              </Box>

              <Box>
                <Text fontSize="12px" mb={0} fontFamily={theme.fontFamily.bold}>
                  Price
                </Text>
                <Text fontSize="16px" mb={0} uppercase>
                  <b>
                    <small>
                      <sup>$</sup>
                    </small>
                    20,800.<sup>50</sup>
                  </b>{' '}
                  <small>
                    <i>($2,000.51/GM)</i>
                  </small>
                </Text>
                <Text
                  fontSize="12px"
                  color="success"
                  fontFamily={theme.fontFamily.bold}
                >
                  Estimated Delivery - 04/25/2015
                </Text>

                <Box width={['100%', '135px']}>
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
                </Box>
              </Box>
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Set New Password"
          headerBackBtnTitle="Back to my account"
          toggleBlock
          toggleVariant="primary"
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
                'repeat(1,2.5fr 1fr)',
              ]}
              alignItems="center"
            >
              <Text
                fontSize={['20px', '22px']}
                fontFamily={theme.fontFamily.bold}
                mb="0"
              >
                Set New Password
              </Text>

              <Button variant="primary" btnBlock>
                Set Password
              </Button>
            </Box>

            <Box width={['100%', '100%', '80%', '60%', '40%']}>
              <Field
                type="password"
                title="CURRENT PASSWORD"
                id="field-current-password"
              />

              <Field
                type="password"
                title="NEW PASSWORD"
                id="field-new-password"
              />

              <Field
                type="password"
                title="CONFIRM NEW PASSWORD"
                id="field-confirm-new-password"
              />
            </Box>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Supplier AP"
          headerBackBtnTitle="Back to my account"
          toggleBlock
          toggleVariant="primary"
        >
          <Box px={[1, 1, 2, 3, 5]} py={[2]}>
            <Text mb={0} fontFamily={theme.fontFamily.bold}>
              Account Number LSA154111
            </Text>
            <Text
              fontSize={['20px', '22px']}
              fontFamily={theme.fontFamily.bold}
            >
              Supplier AP
            </Text>

            <Text>LSR-487827 - Consolidated Order Invoice Summary</Text>

            <Box
              display="grid"
              gridGap={['15px', '15px', '25px', '30px', '40px']}
              gridTemplateColumns={[
                'repeat(1, 1fr)',
                'repeat(3, 1fr)',
                'repeat(5, 1fr)',
              ]}
              width={['100%', '100%', '100%', '95%', '85%']}
            >
              <Box
                fontSize="12px"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(1, 1fr)"
              >
                <Box fontFamily={theme.fontFamily.bold}>Supplier Order</Box>
                <Anchor href="/" bold>
                  LSR-487827-ARP
                </Anchor>
                <Anchor href="/" bold>
                  LSR-487827-ARP
                </Anchor>
                <Anchor href="/" bold>
                  LSR-487827-ARP
                </Anchor>
              </Box>

              <Box
                fontSize="12px"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(1, 1fr)"
              >
                <Box fontFamily={theme.fontFamily.bold}>
                  Supplier Order Total
                </Box>
                <Box>$25.49</Box>
                <Box>$2.598.34</Box>
                <Box>Not Calculated</Box>
              </Box>

              <Box
                fontSize="12px"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(1, 1fr)"
                fontFamily={theme.fontFamily.bold}
              >
                <Box>OP Status</Box>
                <Box color="success">Delivered</Box>
                <Box color="danger">Cancelled</Box>
                <Box color="primary">Shipped</Box>
              </Box>

              <Box
                fontSize="12px"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(1, 1fr)"
                fontFamily={theme.fontFamily.bold}
              >
                <Box>AP Status</Box>
                <Box color="success">Delivered</Box>
                <Box color="danger">Cancelled</Box>
                <Box color="primary">Shipped</Box>
              </Box>

              <Box
                fontSize="12px"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(1, 1fr)"
                fontFamily={theme.fontFamily.bold}
              >
                <Box>AR Status</Box>
                <Box color="success">Delivered</Box>
                <Box color="danger">Cancelled</Box>
                <Box color="primary">Shipped</Box>
              </Box>
            </Box>

            <Divider mx={[-1, -1, -2, -3, -5]} my={2} />

            <Box
              mb={[1, 3]}
              display="grid"
              gridGap={['15px', '15px', '15px', '15px', '60px']}
              gridTemplateColumns={[
                'repeat(1, 1fr)',
                'repeat(1,1fr)',
                'repeat(1,2fr 1fr)',
                'repeat(1,2.5fr 1fr)',
                'repeat(1,3fr 1fr)',
              ]}
              alignItems="flex-start"
            >
              <Box>
                <Text fontFamily={theme.fontFamily.bold} fontSize="15px">
                  Log Distribursement
                </Text>
                <Box
                  display="grid"
                  gridGap={['15px', '25px']}
                  gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                >
                  <Box>
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
                      placeholder="Supplier Order Number"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Supplier Invoice Number"
                      id="field-supplier-supplier-invoice-number"
                    />
                  </Box>

                  <Box>
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
                      placeholder="Payment Method"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Amount"
                      id="field-supplier-amount"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Check Number"
                      id="field-supplier-check-number"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="WT Confirmation Number"
                      id="field-supplier-wt-confirmation-number"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Bank Name"
                      id="field-supplier-bank-name"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Supplier Bank Routing Number"
                      id="field-supplier-supplier-bank-routing-number"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Bank Address"
                      id="field-supplier-bank-address"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Supplier Bank Account Number"
                      id="field-supplier-supplier-bank-account-number"
                    />
                  </Box>

                  <Box>
                    <Field
                      type="text"
                      title="Bank Phone Number"
                      id="field-supplier-bank-phone-number"
                    />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Button variant="primary" btnBlock>
                  Log Distribursement
                </Button>
              </Box>
            </Box>

            <Text fontFamily={theme.fontFamily.bold}>Supplier Invoice</Text>

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

            <Divider mx={[-1, -1, -2, -3, -5]} my={2} />

            <Text fontSize="16px" fontFamily={theme.fontFamily.bold}>
              Disbursement History
            </Text>

            <Panel>
              <Box
                display="flex"
                alignItems={['flex-start', 'flex-start', 'center']}
                justifyContent="space-between"
                flexDirection={['column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  1
                </Box>

                <Box flexShrink="0" flex="1" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Box display="flex" alignItems="center">
                    <Icon icon="file-pdf" size="22px" />
                    <Box flex="1" ml={1}>
                      <Anchor
                        href="/"
                        bold
                        fontSize={['12px', '12px', '14px', '14px', '16px']}
                      >
                        Labscoop Invoice LSR-784815.pdf
                      </Anchor>
                      <Text>Promotion: uu-2515474</Text>
                    </Box>
                  </Box>
                </Box>

                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Anchor
                    href="/"
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Resend via Email
                  </Anchor>
                </Box>

                <Box
                  flexShrink="0"
                  ml={[0, 0, 3]}
                  display="flex"
                  alignItems="center"
                >
                  <Text
                    mb={0}
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Generated On: 11/28/2018
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
                alignItems={['flex-start', 'flex-start', 'center']}
                justifyContent="space-between"
                flexDirection={['column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  1
                </Box>

                <Box flexShrink="0" flex="1" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Box display="flex" alignItems="center">
                    <Icon icon="file-pdf" size="22px" />
                    <Box flex="1" ml={1}>
                      <Anchor
                        href="/"
                        bold
                        fontSize={['12px', '12px', '14px', '14px', '16px']}
                      >
                        Labscoop Invoice LSR-784815.pdf
                      </Anchor>
                      <Text>Promotion: uu-2515474</Text>
                    </Box>
                  </Box>
                </Box>

                <Box flexShrink="0" mr={[0, 0, 1]} mb={[1, 1, 0]}>
                  <Anchor
                    href="/"
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Resend via Email
                  </Anchor>
                </Box>

                <Box
                  flexShrink="0"
                  ml={[0, 0, 3]}
                  display="flex"
                  alignItems="center"
                >
                  <Text
                    mb={0}
                    fontFamily={theme.fontFamily.bold}
                    fontSize="12px"
                  >
                    Generated On: 11/28/2018
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

              <Box
                display="grid"
                gridColumnGap={['15px', '30px', '50px', '70px', '110px']}
                gridRowGap={['15px', '20px']}
                gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
                pl={[0, 0, '60px']}
                mt={2}
              >
                <Box>
                  <Text
                    fontSize="12px"
                    fontFamily={theme.fontFamily.bold}
                    uppercase
                    mb={0}
                  >
                    supplier order number
                  </Text>
                  <Text fontSize="15px" uppercase>
                    t9548943
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize="12px"
                    fontFamily={theme.fontFamily.bold}
                    uppercase
                    mb={0}
                  >
                    supplier order number
                  </Text>
                  <Text fontSize="15px" uppercase>
                    t9548943
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize="12px"
                    fontFamily={theme.fontFamily.bold}
                    uppercase
                    mb={0}
                  >
                    supplier order number
                  </Text>
                  <Text fontSize="15px" uppercase>
                    t9548943
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize="12px"
                    fontFamily={theme.fontFamily.bold}
                    uppercase
                    mb={0}
                  >
                    supplier order number
                  </Text>
                  <Text fontSize="15px" uppercase>
                    t9548943
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize="12px"
                    fontFamily={theme.fontFamily.bold}
                    uppercase
                    mb={0}
                  >
                    supplier order number
                  </Text>
                  <Text fontSize="15px" uppercase>
                    t9548943
                  </Text>
                </Box>
              </Box>
            </Panel>
          </Box>
        </TrayPopup>
      </Box>

      <Box mb={2}>
        <TrayPopup
          toggleTitle="Supplier Response"
          headerBackBtnTitle="Back to product"
          toggleBlock
          toggleVariant="primary"
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
                mb={0}
              >
                Official Supplier Response
              </Text>

              <Button variant="primary" btnBlock>
                Submit Response
              </Button>
            </Box>

            <Field
              type="text"
              title="Supplier Response to Review"
              id="field-supplier-response-to-review"
            />

            <Checkbox
              title="Get email notification on comments made about this review."
              id="checkbox-get-email-notification-on-comments"
            />
          </Box>
        </TrayPopup>
      </Box>
    </Container>
  )
}

export default Popups
