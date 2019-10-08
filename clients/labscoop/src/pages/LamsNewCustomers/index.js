import { Fragment } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Select from 'react-select'

import theme from '../../lib/theme'
import { Box } from '../../helpers'

import {
  Anchor,
  HeaderCms,
  FooterCms,
  Text,
  Icon,
  Table,
  Button,
  Field,
  Checkbox,
  PaginationBtn,
} from '../../ui'

const tableData = [
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
  {
    loginLinkTitle: 'Login',
    loginLinkHref: '/',
    loginLaunchTitle: 'Launch',
    loginLaunchHref: '/',
    name: 'Kundan Das',
    organization: 'University of Florida',
    accountId: 'LSA948394',
    country: 'United States of America',
    email: 'kundan.das@gmail.com',
    opened: '02/05/2019',
    lastLogin: '02/05/2019',
  },
]

const LamsNewCustomers = () => {
  return (
    <Fragment>
      <HeaderCms />

      <main className="content">
        <Box
          bg="#f9f9f9"
          p={1}
          display="flex"
          alignItems={['normal', 'normal', 'normal', 'center', 'center']}
          flexDirection={['column', 'column', 'column', 'row', 'row']}
        >
          <Box flexShrink="0" mr={[0, 0, 0, 2, '60px']} mb={[1, 1, 1, 0, 0]}>
            <Text mb="5px" fontSize="22px" fontFamily={theme.fontFamily.bold}>
              Customers
            </Text>
            <Text fontSize="10px" fontFamily={theme.fontFamily.bold} uppercase>
              15 new customers
            </Text>
          </Box>

          <Box flex="1" mb={[1, 1, 1, 0, 0]}>
            <form>
              <Box position="relative">
                <Box>
                  <Field
                    id="field"
                    type="search"
                    css={css`
                      border: 1px solid #e2e2e2;
                      padding-right: 45px;
                    `}
                  />
                </Box>
                <Button
                  type="submit"
                  css={css`
                    box-shadow: none;
                    border: none;
                    background-color: transparent;
                    padding: 4px;
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    &:hover,
                    &:focus {
                      background-color: transparent;
                    }
                  `}
                >
                  <Icon icon="search" />
                </Button>
              </Box>
            </form>
          </Box>

          <Box
            display="grid"
            alignItems="center"
            gridGap="15px"
            gridTemplateColumns={['repeat(1,1fr)', 'repeat(1,0.7fr 1fr 1fr)']}
            flexShrink="0"
            ml={[0, 0, 0, 2, '80px']}
          >
            <Select
              options={[
                {
                  value: '100',
                  label: '100',
                },
                {
                  value: '200',
                  label: '200',
                },
                {
                  value: '300',
                  label: '300',
                },
              ]}
              isSearchable={false}
              menuPlacement="auto"
              className="select"
              classNamePrefix="select"
              placeholder="Display"
              css={css`
                .select__control {
                  background-color: transparent;
                }
              `}
            />

            <Select
              options={[
                {
                  value: 'Approve Account',
                  label: 'Approve Account',
                },
                {
                  value: 'Deny Account',
                  label: 'Deny Account',
                },
                {
                  value: 'Delete Account',
                  label: 'Delete Account',
                },
                {
                  value: 'Hold Account',
                  label: 'Hold Account',
                },
              ]}
              isSearchable={false}
              menuPlacement="auto"
              className="select"
              classNamePrefix="select"
              placeholder="Actions"
              css={css`
                .select__control {
                  background-color: transparent;
                }
              `}
            />

            <Button variant="primary" btnBlock>
              New Customer Account
            </Button>
          </Box>
        </Box>

        <Box pb={2}>
          <Table noBorder>
            <thead
              css={css`
                @media (max-width: 991px) {
                  position: absolute;
                  opacity: 0;
                  visibility: hidden;
                  clip: rect(0 0 0 0);
                  height: 1px;
                  width: 1px;
                  display: none;
                }
              `}
            >
              <tr>
                <th>
                  <Checkbox
                    title=""
                    id="checkbox-table-all"
                    display="inline-block"
                  />
                </th>
                <th>Name</th>
                <th>Organization</th>
                <th>Account ID</th>
                <th>Country</th>
                <th>Email</th>
                <th>Opened</th>
                <th>Last Login</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  css={css`
                    font-size: 12px;
                    @media (max-width: 991px) {
                      border-bottom: 3px solid #f9f9f9;
                      display: block;
                      margin-bottom: 0.625em;
                      > td {
                        display: block;
                        text-align: right;
                        &:before {
                          content: attr(data-label);
                          float: left;
                          font-family: ${theme.fontFamily.bold};
                          text-transform: uppercase;
                        }
                      }
                    }
                  `}
                >
                  <td>
                    <Box display="flex" alignItems="center">
                      <Box flexShrink="0">
                        <Checkbox
                          title=""
                          id={'checkbox-table-' + index}
                          display="inline-block"
                          css={css`
                            transform: translateY(4px);
                          `}
                        />
                      </Box>
                      <Box flex="1" ml={1}>
                        <Anchor href={item.loginLinkHref} bold>
                          {item.loginLinkTitle}
                        </Anchor>
                        <Anchor href={item.loginLaunchHref} ml={1} bold>
                          {item.loginLaunchTitle}
                        </Anchor>
                      </Box>
                    </Box>
                  </td>
                  <td data-label="Name">{item.name}</td>
                  <td data-label="Organization">{item.organization}</td>
                  <td data-label="Account ID">{item.accountId}</td>
                  <td data-label="Country">{item.country}</td>
                  <td data-label="Email">{item.email}</td>
                  <td data-label="Opened">{item.opened}</td>
                  <td data-label="Last Login">{item.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Box
            display="flex"
            alignItems="center"
            justifyContent={['center', 'center', 'flex-end']}
            flexDirection={['column', 'column', 'row']}
            mt={3}
            p={1}
          >
            <Text
              fontSize="12px"
              fontFamily={theme.fontFamily.bold}
              mb={[1, 1, 0]}
              mr={[0, 0, 1]}
            >
              Page 2 of 7
            </Text>

            <Box display="flex" alignItems="flex-start">
              <PaginationBtn href="/" tabIndex="-1" className="disabled">
                <Icon icon="angle-double-left" mr={['0px', '0px', '5px']} />
                <Text display={['none', 'none', 'inline-block']} mb={0}>
                  Previous
                </Text>
              </PaginationBtn>
              <PaginationBtn href="/" active>
                1
              </PaginationBtn>
              <PaginationBtn href="/">2</PaginationBtn>
              <PaginationBtn href="/">3</PaginationBtn>
              <PaginationBtn href="/">4</PaginationBtn>
              <PaginationBtn href="/">5</PaginationBtn>
              <PaginationBtn href="/">6</PaginationBtn>
              <PaginationBtn href="/">7</PaginationBtn>
              <PaginationBtn href="/">
                <Text display={['none', 'none', 'inline-block']} mb={0}>
                  Next
                </Text>
                <Icon icon="angle-double-right" ml={['0px', '0px', '5px']} />
              </PaginationBtn>
            </Box>
          </Box>
        </Box>
      </main>

      <FooterCms />
    </Fragment>
  )
}

export default LamsNewCustomers
