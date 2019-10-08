/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '../../../lib/theme'
import ScrollTop from 'react-scrolltop-button'
import { Link } from '@reach/router'
import { darken } from 'polished'
import Select from 'react-select'

import { Box, Container } from '../../../helpers/'
import { Image, Text, Anchor, Icon } from '../../'

import footerBanner from '../../../assets/images/elements/CrowdIllustration-Condensed.svg'
import footerFlag from '../../../assets/images/flags/USA.svg'

const selectOptions1 = [
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
  { value: 'united states of america', label: 'united states of america' },
  { value: 'canada', label: 'canada' },
]

const selectOptions2 = [
  { value: 'english', label: 'english' },
  { value: 'spanish', label: 'spanish' },
]

const StyledFooter = styled.footer``

const FooterTitle = styled.h3`
  text-transform: uppercase;
  font-family: ${theme.fontFamily.light};
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${theme.colors.muted};
`

const FooterLink = styled(Link)`
  color: ${props => (props.active ? theme.colors.success : theme.colors.black)};
  text-transform: ${props => props.uppercase && 'uppercase'};
  font-family: ${theme.fontFamily.bold};
  padding: 5px 0;
  display: flex;
  align-items: center;
  font-size: 12px;
  svg {
    path {
      fill: ${props =>
        props.active ? theme.colors.success : theme.colors.black};
    }
  }
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${theme.colors.primary};
    svg {
      path {
        fill: ${theme.colors.primary} !important;
      }
    }
  }
`
const FooterLinkBtn = styled.a`
  color: ${props => (props.active ? theme.colors.success : theme.colors.black)};
  text-transform: ${props => props.uppercase && 'uppercase'};
  font-family: ${theme.fontFamily.bold};
  padding: 5px 0;
  display: flex;
  align-items: center;
  font-size: 12px;
  svg {
    path {
      fill: ${props =>
        props.active ? theme.colors.success : theme.colors.black};
    }
  }
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${theme.colors.primary};
    svg {
      path {
        fill: ${theme.colors.primary} !important;
      }
    }
  }
`

const StyledSocialButton = styled(Anchor)`
  &:not(:last-child) {
    margin-right: 10px;
  }
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 20px;
  &:hover,
  &:focus {
    color: ${theme.colors.primary};
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <ScrollTop
        text="back to top"
        distance={-1000}
        breakpoint={0}
        speed={600}
        css={css`
          border: none;
          text-transform: uppercase;
          position: static;
          width: 100%;
          border-radius: 0;
          background-color: #efefef;
          color: ${theme.colors.muted};
          font-size: 12px;
          transition: 150ms;
          padding: 13px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: ${theme.fontFamily.bold};
          &:hover,
          &:focus {
            background-color: ${theme.colors.silver};
            color: ${darken(0.1, theme.colors.muted)};
          }
          &:before {
            content: '';
            width: 16px;
            margin-right: 15px;
            height: 16px;
            background-size: contain;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI4NC45IDI4NC45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODQuOSAyODQuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNERURFREU7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODIuMSwxOTUuM0wxNDksNjIuMmMtMS45LTEuOS00LjEtMi45LTYuNi0yLjlzLTQuNywxLTYuNiwyLjlsLTEzMywxMzNjLTEuOSwxLjktMi45LDQuMS0yLjksNi42CgkJYzAsMi41LDEsNC43LDIuOSw2LjZsMTQuMywxNC4zYzEuOSwxLjksNC4xLDIuOSw2LjYsMi45czQuNy0xLDYuNi0yLjlsMTEyLjItMTEyLjJsMTEyLjIsMTEyLjJjMS45LDEuOSw0LjEsMi44LDYuNiwyLjgKCQljMi41LDAsNC43LTEsNi42LTIuOGwxNC4zLTE0LjNjMS45LTEuOSwyLjgtNC4xLDIuOC02LjZDMjg0LjksMTk5LjQsMjg0LDE5Ny4yLDI4Mi4xLDE5NS4zeiIvPgo8L2c+Cjwvc3ZnPgo=');
          }
        `}
      />

      <Container>
        <Box
          pt={[2, 2, 4]}
          mb={[2, 2, 4]}
          display="grid"
          gridGap="25px"
          gridTemplateColumns={[
            'repeat(1,1fr)',
            'repeat(2,1fr)',
            'repeat(3,1fr)',
            'repeat(3,1fr)',
            'repeat(5,1fr)',
          ]}
        >
          <Box>
            <FooterTitle>Company</FooterTitle>
            <FooterLink to="/">About Labscoop</FooterLink>
            <FooterLink to="/">Supplier Partners</FooterLink>
            <FooterLink to="/">Our Team</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">
              Press
              <Icon icon="external-link-alt" ml="5px" />
            </FooterLink>
            <FooterLink to="/">
              Blog
              <Icon icon="external-link-alt" ml="5px" />
            </FooterLink>
          </Box>

          <Box>
            <FooterTitle>SUPPORT</FooterTitle>
            <FooterLink to="/">Knowledge Base & FAQs</FooterLink>
            <FooterLink to="/">Submit a Support Ticket</FooterLink>
            <FooterLink to="/">Make a Suggestion</FooterLink>
            <FooterLink to="/">Repost a Bug</FooterLink>
          </Box>

          <Box>
            <FooterTitle>ENTERPRISE</FooterTitle>
            <FooterLink to="/">Solutions</FooterLink>
            <FooterLink to="/">Integration</FooterLink>
            <FooterLink to="/">Onboarding</FooterLink>
            <FooterLink to="/">Institutional Partners</FooterLink>
            <FooterLink to="/">Schedule a Demo</FooterLink>
          </Box>

          <Box>
            <FooterTitle>LEGAL</FooterTitle>
            <FooterLink to="/">Terms & Conditions</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
          </Box>

          <Box>
            <FooterTitle>contact</FooterTitle>
            <FooterLink to="/" active="true" uppercase="true">
              <Icon size="18px" icon="comment" mr="10px" />
              live chat a scientist
            </FooterLink>
            <FooterLinkBtn href="mailto:support@labscoop.com" uppercase="true">
              <Icon size="18px" icon="envelope" mr="10px" />
              support@labscoop.com
            </FooterLinkBtn>
            <FooterLink to="/" uppercase="true">
              <Icon size="18px" icon="phone" mr="10px" />
              800.316.3081
            </FooterLink>
          </Box>
        </Box>

        <Box
          display="grid"
          gridGap="30px"
          gridTemplateColumns={[
            'repeat(1,1fr)',
            'repeat(1,1fr)',
            'repeat(1,1fr)',
            'repeat(1,1fr)',
            'repeat(2,1fr)',
          ]}
        >
          <Box alignSelf="center">
            <Box
              mb={[2]}
              display="grid"
              gridGap={['20px', '25px', '30px']}
              gridTemplateColumns={['repeat(1,1fr)', 'repeat(1,1.5fr 1fr 1fr)']}
            >
              <Box display="flex" alignItems="center">
                <Image
                  src={footerFlag}
                  alt="Footer flag"
                  css={css`
                    border-radius: 50%;
                    width: 34px;
                    height: 34px;
                    object-fit: cover;
                    flex-shrink: 0;
                    margin-right: 15px;
                    border: 1px solid ${theme.colors.muted};
                  `}
                />

                <Select
                  options={selectOptions1}
                  isSearchable={false}
                  defaultValue={selectOptions1[1]}
                  menuPlacement="auto"
                  className="footer-select"
                  classNamePrefix="footer-select"
                />
              </Box>

              <Box display="flex" alignItems="center">
                <span
                  css={css`
                    display: inline-block;
                    flex-shrink: 0;
                    margin-right: 15px;
                    text-transform: uppercase;
                    color: ${theme.colors.muted};
                    font-family: ${theme.fontFamily.bold};
                    font-size: 18px;
                    width: 34px;
                  `}
                >
                  en
                </span>

                <Select
                  options={selectOptions2}
                  isSearchable={false}
                  defaultValue={selectOptions2[1]}
                  menuPlacement="auto"
                  className="footer-select"
                  classNamePrefix="footer-select"
                />
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent={['center', 'center', 'start']}
              >
                <StyledSocialButton href="#">
                  <Icon
                    size="18px"
                    icon="twitter"
                    css={css`
                      &:hover {
                        fill: ${theme.colors.primary};
                      }
                    `}
                  />
                </StyledSocialButton>
                <StyledSocialButton href="#">
                  <Icon
                    size="18px"
                    icon="linkedin"
                    css={css`
                      &:hover {
                        fill: ${theme.colors.primary};
                      }
                    `}
                  />
                </StyledSocialButton>
                <StyledSocialButton href="#">
                  <Icon
                    size="18px"
                    icon="facebook"
                    css={css`
                      &:hover {
                        fill: ${theme.colors.primary};
                      }
                    `}
                  />
                </StyledSocialButton>
                <StyledSocialButton href="#">
                  <Icon
                    size="18px"
                    icon="instagram"
                    css={css`
                      &:hover {
                        fill: ${theme.colors.primary};
                      }
                    `}
                  />
                </StyledSocialButton>
              </Box>
            </Box>

            <Text fontSize="11px" textAlign={['center', 'center', 'left']}>
              Copyright © 2016 Labscoop, LLC. All Rights Reserved. Reproduction
              of any materials from the site is strictly forbidden without
              permission.
            </Text>
          </Box>

          <Box>
            <Image src={footerBanner} width="100%" alt="Footer banner" />
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  )
}

export default Footer
