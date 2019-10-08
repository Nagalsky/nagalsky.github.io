import { Fragment, useCallback, useState } from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import { Link } from '@reach/router'
import { useDropzone } from 'react-dropzone'

import { Box } from '../../helpers'
import {
  Header,
  Footer,
  Text,
  Title,
  Button,
  AsideOrdersAndRequests,
  Panel,
  Divider,
  PaginationBtn,
  Dropdown,
  RequestIndicator,
  Anchor,
  Image,
  Icon,
  TrayPopup,
  DropZone,
  Field,
} from '../../ui'

import xlsx from '../../assets/images/elements/xlsx-file.svg'

const LinkBack = styled(Link)`
  font-family: ${theme.fontFamily.bold};
  color: ${theme.colors.primary};
  &:hover,
  &:focus {
    color: ${darken(0.2, theme.colors.primary)};
    text-decoration: none;
  }
`

const RequestsSupportRequests = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

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
          <AsideOrdersAndRequests
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
                    request
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    Support Requests
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
                    Requests
                    <Icon
                      icon="chevron-down"
                      color={theme.colors.muted}
                      ml="10px"
                    />
                  </Box>
                  <Text fontSize={['12px', '14px']}>Support Requests</Text>
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
            >
              <form
                css={css`
                  width: 100%;
                `}
              >
                <Box display="flex">
                  <input
                    placeholder="Search quote requests by quote number or catalog number"
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
                    type="submit"
                    css={css`
                      border-radius: 0;
                      flex-shrink: 0;
                      border-color: ${theme.colors.muted};
                      color: ${theme.colors.black};
                      box-shadow: none;
                      &:hover,
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

            <Box
              p={[1, 1, 2, 3]}
              bg="#f9f9f9"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="muted"
              mb={2}
            >
              <Text>
                <b>Manage All Your Support Tickets in One Place</b>
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </Text>
            </Box>

            <Text mb={0} fontSize="16px">
              Searched: EROP
            </Text>
            <Text fontSize="12px">14 Orders Found</Text>

            <Panel>
              <Box
                display="flex"
                flexDirection={['column', 'column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 0, 0, 3]} mb={[1, 1, 1, 0]}>
                  <Text color="primary" fontSize="15px">
                    <b>Quote LQ84487483748B</b>
                  </Text>

                  <Box
                    display="grid"
                    gridGap={['15px', 1]}
                    gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
                    css={css`
                      @media (min-width: 1400px) {
                        grid-template-columns: repeat(4, auto);
                      }
                    `}
                  >
                    <Box>
                      <span>Ticket ID</span> 1548484624-001
                    </Box>
                    <Box>
                      <span>Created</span> 8/25/2018
                    </Box>
                    <Box>
                      <span>Modified</span> 8/27/2018
                    </Box>
                    <Box>
                      <span>Resolved</span> 8/20/2018
                    </Box>
                  </Box>
                </Box>

                <Box
                  flexShrink="0"
                  textAlign={['left', 'left', 'left', 'right']}
                  ml={['0', '0', '0', 'auto']}
                >
                  <RequestIndicator variant="success">a</RequestIndicator>
                </Box>
              </Box>

              <Divider my={1} mx="-1rem" />

              <Dropdown title="View Ticket Details" inlineBlock>
                <Box>
                  <Text mb={0}>
                    <b>Thomas Wolf -</b> Ticket Creted
                  </Text>
                  <Box fontSize="12px">
                    <Text>
                      <i>September 15, 2018 @ 10:05 AM CST</i>
                    </Text>
                    <Text>
                      <b>Question.Request</b>
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </Text>
                    <Text>
                      <b>Attachments</b>
                    </Text>
                    <Anchor
                      display="inline-flex"
                      alignItems="center"
                      bold
                      href="/"
                    >
                      <Image
                        src={xlsx}
                        alt="xlsx"
                        css={css`
                          margin-right: 15px;
                          flex-shrink: 0;
                          width: 26px;
                        `}
                      />
                      BC9482_flowcyto.xlsx
                    </Anchor>
                  </Box>
                </Box>

                <Divider my={2} mx="-1rem" />

                <Box>
                  <Text mb={0}>
                    <b>Thomas Wolf -</b> Ticket Creted
                  </Text>
                  <Box fontSize="12px">
                    <Text>
                      <i>September 15, 2018 @ 10:05 AM CST</i>
                    </Text>
                    <Text>
                      <b>Question.Request</b>
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </Text>
                    <Text>
                      <b>Attachments</b>
                    </Text>
                    <Anchor
                      display="inline-flex"
                      alignItems="center"
                      bold
                      href="/"
                    >
                      <Image
                        src={xlsx}
                        alt="xlsx"
                        css={css`
                          margin-right: 15px;
                          flex-shrink: 0;
                          width: 26px;
                        `}
                      />
                      BC9482_flowcyto.xlsx
                    </Anchor>
                  </Box>
                </Box>

                <Divider my={2} mx="-1rem" />

                <Box>
                  <Box mb={1} display="flex" flexDirection={['column', 'row']}>
                    <Button variant="primary" hasShadow>
                      Reply
                    </Button>
                    <Button ml={[0, 1]} mt={[1, 0]}>
                      Mark as Resolved
                    </Button>
                  </Box>
                  <Box fontSize="12px">
                    Tickets will automatically be marked as resolved of no
                    response is received within 5 bisuness days. If you still
                    have questions pertaining to this particular ticket after
                    the ticket has been marked as resolved, you can{' '}
                    <TrayPopup
                      inlineBlock
                      toggleBtnSm
                      toggleLink
                      toggleTitle="submit a new support ticket"
                      headerBackBtnTitle="Back to my account"
                    >
                      <Box px={[1, 1, 2, 3, 5]} py={2}>
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
                            Technical Support Ticket
                          </Text>

                          <Box>
                            <Button btnBlock variant="primary">
                              Submit Ticket
                            </Button>
                          </Box>
                        </Box>

                        <Text fontSize="12px">
                          We do our best to respond to all questions within 1hr.
                          Depending on the nature of your question, it may
                          require some additional time.
                        </Text>

                        <Field
                          type="text"
                          title="Request Details"
                          id="field-ticket-request-details"
                        />
                        <Field
                          type="text"
                          title="Catalog Number"
                          id="field-ticket-catalog-number"
                        />
                        <Field
                          type="text"
                          title="Lot Number"
                          id="field-ticket-lot-number"
                        />
                        <Field
                          type="text"
                          title="Purchase Date"
                          id="field-ticket-purchase-date"
                        />
                        <Field
                          type="text"
                          title="Usage Date"
                          id="field-ticket-usage-date"
                        />
                        <Field
                          type="text"
                          title="Email Address"
                          id="field-ticket-email-address"
                        />
                        <Field
                          type="text"
                          title="Phone Number"
                          id="field-ticket-phone-number"
                        />
                        <Field
                          type="text"
                          title="First Name"
                          id="field-ticket-first-name"
                        />
                        <Field
                          type="text"
                          title="Last Name"
                          id="field-ticket-last-name"
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
                      </Box>
                    </TrayPopup>{' '}
                    and reference the old ticket number.
                  </Box>
                </Box>
              </Dropdown>
            </Panel>

            <Panel>
              <Box
                display="flex"
                flexDirection={['column', 'column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 0, 0, 3]} mb={[1, 1, 1, 0]}>
                  <Text color="primary" fontSize="15px">
                    <b>Quote LQ84487483748B</b>
                  </Text>

                  <Box
                    display="grid"
                    gridGap={['15px', 1]}
                    gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
                    css={css`
                      @media (min-width: 1400px) {
                        grid-template-columns: repeat(4, auto);
                      }
                    `}
                  >
                    <Box>
                      <span>Ticket ID</span> 1548484624-001
                    </Box>
                    <Box>
                      <span>Created</span> 8/25/2018
                    </Box>
                    <Box>
                      <span>Modified</span> 8/27/2018
                    </Box>
                    <Box>
                      <span>Resolved</span> 8/20/2018
                    </Box>

                    <Box>
                      <span>Ticket ID</span> 1548484624-001
                    </Box>
                    <Box>
                      <span>Created</span> 8/25/2018
                    </Box>
                    <Box>
                      <span>Modified</span> 8/27/2018
                    </Box>
                    <Box>
                      <span>Resolved</span> 8/20/2018
                    </Box>
                  </Box>
                </Box>

                <Box
                  flexShrink="0"
                  textAlign={['left', 'left', 'left', 'right']}
                  ml={['0', '0', '0', 'auto']}
                >
                  <RequestIndicator variant="success">a</RequestIndicator>
                </Box>
              </Box>

              <Divider my={1} mx="-1rem" />

              <Dropdown title="View Ticket Details" inlineBlock>
                <Box>
                  <Text mb={0}>
                    <b>Thomas Wolf -</b> Ticket Creted
                  </Text>
                  <Box fontSize="12px">
                    <Text>
                      <i>September 15, 2018 @ 10:05 AM CST</i>
                    </Text>
                    <Text>
                      <b>Question.Request</b>
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </Text>
                    <Text>
                      <b>Attachments</b>
                    </Text>
                    <Anchor
                      display="inline-flex"
                      alignItems="center"
                      bold
                      href="/"
                    >
                      <Image
                        src={xlsx}
                        alt="xlsx"
                        css={css`
                          margin-right: 15px;
                          flex-shrink: 0;
                          width: 26px;
                        `}
                      />
                      BC9482_flowcyto.xlsx
                    </Anchor>
                  </Box>
                </Box>

                <Divider my={2} mx="-1rem" />

                <Box>
                  <Text mb={0}>
                    <b>Thomas Wolf -</b> Ticket Creted
                  </Text>
                  <Box fontSize="12px">
                    <Text>
                      <i>September 15, 2018 @ 10:05 AM CST</i>
                    </Text>
                    <Text>
                      <b>Question.Request</b>
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </Text>
                    <Text>
                      <b>Attachments</b>
                    </Text>
                    <Anchor
                      display="inline-flex"
                      alignItems="center"
                      bold
                      href="/"
                    >
                      <Image
                        src={xlsx}
                        alt="xlsx"
                        css={css`
                          margin-right: 15px;
                          flex-shrink: 0;
                          width: 26px;
                        `}
                      />
                      BC9482_flowcyto.xlsx
                    </Anchor>
                  </Box>
                </Box>

                <Divider my={2} mx="-1rem" />

                <Box>
                  <Box mb={1} display="flex" flexDirection={['column', 'row']}>
                    <Button variant="primary" hasShadow>
                      Reply
                    </Button>
                    <Button ml={[0, 1]} mt={[1, 0]}>
                      Mark as Resolved
                    </Button>
                  </Box>
                  <Box fontSize="12px">
                    Tickets will automatically be marked as resolved of no
                    response is received within 5 bisuness days. If you still
                    have questions pertaining to this particular ticket after
                    the ticket has been marked as resolved, you can{' '}
                    <TrayPopup
                      inlineBlock
                      toggleBtnSm
                      toggleLink
                      toggleTitle="submit a new support ticket"
                      headerBackBtnTitle="Back to my account"
                    >
                      <Box px={[1, 1, 2, 3, 5]} py={2}>
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
                            Technical Support Ticket
                          </Text>

                          <Box>
                            <Button btnBlock variant="primary">
                              Submit Ticket
                            </Button>
                          </Box>
                        </Box>

                        <Text fontSize="12px">
                          We do our best to respond to all questions within 1hr.
                          Depending on the nature of your question, it may
                          require some additional time.
                        </Text>

                        <Field
                          type="text"
                          title="Request Details"
                          id="field-ticket-request-details"
                        />
                        <Field
                          type="text"
                          title="Catalog Number"
                          id="field-ticket-catalog-number"
                        />
                        <Field
                          type="text"
                          title="Lot Number"
                          id="field-ticket-lot-number"
                        />
                        <Field
                          type="text"
                          title="Purchase Date"
                          id="field-ticket-purchase-date"
                        />
                        <Field
                          type="text"
                          title="Usage Date"
                          id="field-ticket-usage-date"
                        />
                        <Field
                          type="text"
                          title="Email Address"
                          id="field-ticket-email-address"
                        />
                        <Field
                          type="text"
                          title="Phone Number"
                          id="field-ticket-phone-number"
                        />
                        <Field
                          type="text"
                          title="First Name"
                          id="field-ticket-first-name"
                        />
                        <Field
                          type="text"
                          title="Last Name"
                          id="field-ticket-last-name"
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
                      </Box>
                    </TrayPopup>{' '}
                    and reference the old ticket number.
                  </Box>
                </Box>
              </Dropdown>
            </Panel>

            <Panel>
              <Box
                display="flex"
                flexDirection={['column', 'column', 'column', 'row']}
              >
                <Box flexShrink="0" mr={[0, 0, 0, 0, 3]} mb={[1, 1, 1, 0]}>
                  <Text color="primary" fontSize="15px">
                    <b>Quote LQ84487483748B</b>
                  </Text>

                  <Box
                    display="grid"
                    gridGap={['15px', 1]}
                    gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
                    css={css`
                      @media (min-width: 1400px) {
                        grid-template-columns: repeat(4, auto);
                      }
                    `}
                  >
                    <Box>
                      <span>Ticket ID</span> 1548484624-001
                    </Box>
                    <Box>
                      <span>Created</span> 8/25/2018
                    </Box>
                    <Box>
                      <span>Modified</span> 8/27/2018
                    </Box>
                    <Box>
                      <span>Resolved</span> 8/20/2018
                    </Box>

                    <Box>
                      <span>Ticket ID</span> 1548484624-001
                    </Box>
                    <Box>
                      <span>Created</span> 8/25/2018
                    </Box>
                    <Box>
                      <span>Modified</span> 8/27/2018
                    </Box>
                    <Box>
                      <span>Resolved</span> 8/20/2018
                    </Box>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  flexShrink="0"
                  textAlign={['left', 'left', 'left', 'right']}
                  ml={['0', '0', '0', 'auto']}
                >
                  <Button mr={2}>Cancel Request</Button>
                  <RequestIndicator variant="danger">d</RequestIndicator>
                </Box>
              </Box>

              <Divider my={1} mx="-1rem" />

              <Dropdown title="View Ticket Details" inlineBlock>
                <Box>
                  <Text mb={0}>
                    <b>Thomas Wolf -</b> Ticket Creted
                  </Text>
                  <Box fontSize="12px">
                    <Text>
                      <i>September 15, 2018 @ 10:05 AM CST</i>
                    </Text>
                    <Text>
                      <b>Question.Request</b>
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </Text>
                    <Text>
                      <b>Attachments</b>
                    </Text>
                    <Anchor
                      display="inline-flex"
                      alignItems="center"
                      bold
                      href="/"
                    >
                      <Image
                        src={xlsx}
                        alt="xlsx"
                        css={css`
                          margin-right: 15px;
                          flex-shrink: 0;
                          width: 26px;
                        `}
                      />
                      BC9482_flowcyto.xlsx
                    </Anchor>
                  </Box>
                </Box>

                <Divider my={2} mx="-1rem" />

                <Box>
                  <Text mb={0}>
                    <b>Thomas Wolf -</b> Ticket Creted
                  </Text>
                  <Box fontSize="12px">
                    <Text>
                      <i>September 15, 2018 @ 10:05 AM CST</i>
                    </Text>
                    <Text>
                      <b>Question.Request</b>
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </Text>
                    <Text>
                      <b>Attachments</b>
                    </Text>
                    <Anchor
                      display="inline-flex"
                      alignItems="center"
                      bold
                      href="/"
                    >
                      <Image
                        src={xlsx}
                        alt="xlsx"
                        css={css`
                          margin-right: 15px;
                          flex-shrink: 0;
                          width: 26px;
                        `}
                      />
                      BC9482_flowcyto.xlsx
                    </Anchor>
                  </Box>
                </Box>

                <Divider my={2} mx="-1rem" />

                <Box>
                  <Box mb={1} display="flex" flexDirection={['column', 'row']}>
                    <Button variant="primary" hasShadow>
                      Reply
                    </Button>
                    <Button ml={[0, 1]} mt={[1, 0]}>
                      Mark as Resolved
                    </Button>
                  </Box>
                  <Box fontSize="12px">
                    Tickets will automatically be marked as resolved of no
                    response is received within 5 bisuness days. If you still
                    have questions pertaining to this particular ticket after
                    the ticket has been marked as resolved, you can{' '}
                    <TrayPopup
                      inlineBlock
                      toggleBtnSm
                      toggleLink
                      toggleTitle="submit a new support ticket"
                      headerBackBtnTitle="Back to my account"
                    >
                      <Box px={[1, 1, 2, 3, 5]} py={2}>
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
                            Technical Support Ticket
                          </Text>

                          <Box>
                            <Button btnBlock variant="primary">
                              Submit Ticket
                            </Button>
                          </Box>
                        </Box>

                        <Text fontSize="12px">
                          We do our best to respond to all questions within 1hr.
                          Depending on the nature of your question, it may
                          require some additional time.
                        </Text>

                        <Field
                          type="text"
                          title="Request Details"
                          id="field-ticket-request-details"
                        />
                        <Field
                          type="text"
                          title="Catalog Number"
                          id="field-ticket-catalog-number"
                        />
                        <Field
                          type="text"
                          title="Lot Number"
                          id="field-ticket-lot-number"
                        />
                        <Field
                          type="text"
                          title="Purchase Date"
                          id="field-ticket-purchase-date"
                        />
                        <Field
                          type="text"
                          title="Usage Date"
                          id="field-ticket-usage-date"
                        />
                        <Field
                          type="text"
                          title="Email Address"
                          id="field-ticket-email-address"
                        />
                        <Field
                          type="text"
                          title="Phone Number"
                          id="field-ticket-phone-number"
                        />
                        <Field
                          type="text"
                          title="First Name"
                          id="field-ticket-first-name"
                        />
                        <Field
                          type="text"
                          title="Last Name"
                          id="field-ticket-last-name"
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
                      </Box>
                    </TrayPopup>{' '}
                    and reference the old ticket number.
                  </Box>
                </Box>
              </Dropdown>
            </Panel>

            <Box
              display="flex"
              alignItems="center"
              justifyContent={['center', 'center', 'flex-end']}
              mt={3}
            >
              <PaginationBtn href="/" tabIndex="-1" className="disabled">
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

export default RequestsSupportRequests
