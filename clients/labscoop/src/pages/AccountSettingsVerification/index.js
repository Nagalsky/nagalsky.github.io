import { Fragment, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from '@emotion/styled'
import { darken } from 'polished'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import { Link } from '@reach/router'

import { Box } from '../../helpers'
import {
  Header,
  Footer,
  Text,
  Title,
  Anchor,
  Accordion,
  Button,
  DropZone,
  AsideSettings,
  Icon,
} from '../../ui'

const LinkBack = styled(Link)`
  font-family: ${theme.fontFamily.bold};
  color: ${theme.colors.primary};
  &:hover,
  &:focus {
    color: ${darken(0.2, theme.colors.primary)};
    text-decoration: none;
  }
`

const StyledBusinessBox = styled(Box)`
  font-family: ${theme.fontFamily.bold};
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${theme.colors.muted};
  }
`

const StyledBusinessLink = styled(Anchor)`
  font-family: ${theme.fontFamily.bold};
  display: flex;
  align-items: center;
`

const AccountSettingsVerification = () => {
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
                    settings & preferences
                  </Text>
                  <Title
                    tag={1}
                    css={css`
                      font-family: ${theme.fontFamily.base};
                    `}
                  >
                    Verification Documents
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
                  <Text fontSize={['12px', '14px']}>
                    Verification Documents
                  </Text>
                </Box>
              </Box>

              <Box flexShrink="0">
                <LinkBack to="/account">
                  <Icon icon="long-arrow-left" mr="5px" />
                  Back to My Account
                </LinkBack>
              </Box>
            </Box>

            <Box boxShadow="0 .5rem 1rem rgba(0,0,0,.15)" mb={4}>
              <Accordion title="Business License">
                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '50px']}
                  alignItems="center"
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr 1fr)',
                  ]}
                >
                  <Box alignSelf="stretch">
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

                  <Box pr={[0, 0, 0, 3]}>
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
              </Accordion>

              <Accordion title="Business License">
                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '50px']}
                  alignItems="center"
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr 1fr)',
                  ]}
                >
                  <Box alignSelf="stretch">
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

                  <Box pr={[0, 0, 0, 3]}>
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
              </Accordion>

              <Accordion title="Business License">
                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '50px']}
                  alignItems="center"
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr 1fr)',
                  ]}
                >
                  <Box alignSelf="stretch">
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

                  <Box pr={[0, 0, 0, 3]}>
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
              </Accordion>

              <Accordion title="Business License">
                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '50px']}
                  alignItems="center"
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr 1fr)',
                  ]}
                >
                  <Box alignSelf="stretch">
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

                  <Box pr={[0, 0, 0, 3]}>
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
              </Accordion>

              <Accordion title="Business License">
                <Box
                  display="grid"
                  gridGap={['20px', '20px', '30px', '50px']}
                  alignItems="center"
                  gridTemplateColumns={[
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(1,1fr 1fr)',
                  ]}
                >
                  <Box alignSelf="stretch">
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

                  <Box pr={[0, 0, 0, 3]}>
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
              </Accordion>
            </Box>

            <Button type="submit" variant="primary" mt={4}>
              Save Changes
            </Button>
          </Box>
        </Box>
      </main>

      <Footer />
    </Fragment>
  )
}

export default AccountSettingsVerification
