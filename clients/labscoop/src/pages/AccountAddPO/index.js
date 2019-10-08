import { Fragment, useCallback, useState } from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import { Link } from '@reach/router'
import { useDropzone } from 'react-dropzone'
import Select from 'react-select'

import { Box } from '../../helpers'
import {
  Header,
  Footer,
  Text,
  Title,
  Button,
  Field,
  AsideSettings,
  DropZone,
  Anchor,
  Icon,
} from '../../ui'

const StyledBusinessLink = styled(Anchor)`
  font-family: ${theme.fontFamily.bold};
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${theme.colors.muted};
  }
`

const LinkBack = styled(Link)`
  font-family: ${theme.fontFamily.bold};
  color: ${theme.colors.primary};
  &:hover,
  &:focus {
    color: ${darken(0.2, theme.colors.primary)};
    text-decoration: none;
  }
`

const AccountAddPO = () => {
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
                    payment options
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    Add a PO
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
                  <Text fontSize={['12px', '14px']}>Add a PO</Text>
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
              p={[1, 1, 2, 3]}
              bg="#f9f9f9"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="muted"
            >
              <Text>
                <b>Add a Standing or Blanket PO</b>
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </Text>
            </Box>

            <Box width={['100%', '100%', '100%', '100%', '50%']} mt={4}>
              <form>
                <Box mb={2}>
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

                <Field
                  type="text"
                  title="Approved PO Number"
                  id="field-approved-po-number"
                />
                <Box display="flex">
                  <Box mb={2} flex="1">
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

                  <Box flexShrink="0" color="muted" mx={1} mt="10px">
                    <b>/</b>
                  </Box>

                  <Box mb={2} flex="1">
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

                  <Box flexShrink="0" color="muted" mx={1} mt="10px">
                    <b>/</b>
                  </Box>

                  <Box mb={2} flex="1">
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

                <Text fontFamily={theme.fontFamily.bold} pl="10px">
                  Upload PO Document
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

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                >
                  <Box mr="auto">
                    <StyledBusinessLink href="/">
                      <Icon size="18px" icon="file-pdf" mr="10px" />
                      <Box flex="1">Business License 2015</Box>
                    </StyledBusinessLink>
                  </Box>
                  <Icon
                    icon="times"
                    ml="10px"
                    css={css`
                      cursor: pointer;
                    `}
                  />
                </Box>

                <Button type="submit" variant="primary" mt={4}>
                  Save Changes
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </main>

      <Footer />
    </Fragment>
  )
}

export default AccountAddPO
