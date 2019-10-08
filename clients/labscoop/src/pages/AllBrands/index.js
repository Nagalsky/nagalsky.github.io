import { Fragment } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from '@reach/router'

import theme from '../../lib/theme'
import { Box } from '../../helpers'

import { Header, Footer, Title, Text, Image, Divider, Icon } from '../../ui'

import brandLogo1 from '../../assets/images/logos/EPPENDORF-LOGO.png'
import brandLogo2 from '../../assets/images/logos/DWK-LOGO.png'
import brandLogo3 from '../../assets/images/logos/BRANDTECH-LOGO.png'
import brandLogo4 from '../../assets/images/logos/BIOTECHNE-LOGO.jpg'
import brandLogo5 from '../../assets/images/logos/BIOLEGEND-LOGO.jpg'
import brandLogo6 from '../../assets/images/logos/BETHYL-LOGO.png'

const brandLogosData = [
  {
    alt: 'EPPENDORF-LOGO',
    imageSrc: brandLogo1,
  },
  {
    alt: 'DWK-LOGO',
    imageSrc: brandLogo2,
  },
  {
    alt: 'BRANDTECH-LOGO',
    imageSrc: brandLogo3,
  },
  {
    alt: 'BIOTECHNE-LOGO',
    imageSrc: brandLogo4,
  },
  {
    alt: 'BIOLEGEND-LOGO',
    imageSrc: brandLogo5,
  },
  {
    alt: 'BETHYL-LOGO',
    imageSrc: brandLogo6,
  },
]

const alphabet = [
  {
    title: '#',
    href: '/',
  },
  {
    title: 'a',
    href: '/',
  },
  {
    title: 'b',
    href: '/',
  },
  {
    title: 'c',
    href: '/',
  },
  {
    title: 'd',
    href: '/',
  },
  {
    title: 'e',
    href: '/',
  },
  {
    title: 'f',
    href: '/',
  },
  {
    title: 'g',
    href: '/',
  },
  {
    title: 'h',
    href: '/',
  },
  {
    title: 'i',
    href: '/',
  },
  {
    title: 'j',
    href: '/',
  },
  {
    title: 'k',
    href: '/',
  },
  {
    title: 'l',
    href: '/',
  },
  {
    title: 'm',
    href: '/',
  },
  {
    title: 'n',
    href: '/',
  },
  {
    title: 'o',
    href: '/',
  },
  {
    title: 'p',
    href: '/',
  },
  {
    title: 'q',
    href: '/',
  },
  {
    title: 'r',
    href: '/',
  },
  {
    title: 's',
    href: '/',
  },
  {
    title: 't',
    href: '/',
  },
  {
    title: 'u',
    href: '/',
  },
  {
    title: 'v',
    href: '/',
  },
  {
    title: 'w',
    href: '/',
  },
  {
    title: 'x',
    href: '/',
  },
  {
    title: 'y',
    href: '/',
  },
  {
    title: 'z',
    href: '/',
  },
]

const alphabetList = [
  {
    caption: 'a',
    links: [
      {
        title: 'A&C PHARNTEXT INC',
        href: '/',
      },
      {
        title: 'A&D Engineering, Inc ',
        href: '/',
      },
      {
        title: 'A&L SCIENTIFIC',
        href: '/',
      },
      {
        title: 'Aalborg Instruments & Controls',
        href: '/',
      },
      {
        title: 'AAPPTEC',
        href: '/',
      },
      {
        title: 'AB SCIEX LLC',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
    ],
    divider: true,
  },

  {
    caption: 'b',
    links: [
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
    ],
    divider: true,
  },

  {
    caption: 'c',
    links: [
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
      {
        title: 'lorem',
        href: '/',
      },
    ],
  },
]

const StyledAlphabetLink = styled(Link)`
  text-transform: uppercase;
  flex: 1;
  color: ${theme.colors.primary};
  font-family: ${theme.fontFamily.bold};
  padding: 0 0.5px;
  text-align: center;
`

const StyledAlphabetListLink = styled(Link)`
  font-size: 12px;
  display: inline-block;
  color: ${theme.colors.black};
  font-family: ${theme.fontFamily.bold};
  padding: 5px 0;
  &:hover,
  &:focus {
    color: ${theme.colors.primary};
  }
`

const StyledCaption = styled(Text)`
  text-transform: uppercase;
  font-family: ${theme.fontFamily.bold};
  color: ${theme.colors.primary};
  font-size: 32px;
  line-height: 1.2;
`

const AllBrands = () => {
  return (
    <Fragment>
      <Header />

      <main className="content">
        <Box py={2} px={[1, 1, 1, 5]}>
          <Box
            mb={3}
            display="flex"
            alignItems="center"
            fontSize="10px"
            flexWrap="wrap"
            css={css`
              text-transform: uppercase;
            `}
          >
            <Text mb={0}>life science</Text>
            <Icon icon="chevron-right" mx="10px" size="10px" />
            <Link to="/">labware</Link>
          </Box>

          <Title
            tag={1}
            css={css`
              margin-bottom: 40px;
            `}
          >
            Brands A-Z
          </Title>
          <Text
            fontSize={['16px', '18px', '20px', '22px']}
            fontFamily={theme.fontFamily.light}
            textAlign="center"
            mb={['30px', '40px', '50px']}
          >
            Shop millions of products from the world's most trusted
            manufacturers.
          </Text>

          <Box
            display="grid"
            gridGap={['20px', '25px', '25px', '25px', '20px']}
            gridTemplateColumns={[
              'repeat(2,1fr)',
              'repeat(2,1fr)',
              'repeat(3,1fr)',
              'repeat(6,1fr)',
            ]}
            justifyItems="center"
            mb={['50px', '80px']}
            px={[0, 0, 3]}
          >
            {brandLogosData.map((brandLogo, index) => (
              <Image
                key={index}
                src={brandLogo.imageSrc}
                maxWidth={['120px', '130px', '140px', '120px', '160px']}
                alt={brandLogo.alt}
                alignSelf="center"
              />
            ))}
          </Box>

          <Box display="flex">
            {alphabet.map(alphabetItem => (
              <StyledAlphabetLink
                key={alphabetItem.title}
                to={alphabetItem.href}
              >
                {alphabetItem.title}
              </StyledAlphabetLink>
            ))}
          </Box>

          <Divider my={3} />

          <Box>
            {alphabetList.map((alphabetListItem, index) => (
              <Box key={index}>
                <Box display="flex">
                  <StyledCaption flexShrink="0" mr={2}>
                    {alphabetListItem.caption}
                  </StyledCaption>

                  <Box
                    display="grid"
                    gridTemplateColumns={[
                      'repeat(2, 1fr)',
                      'repeat(3, 1fr)',
                      'repeat(4, 1fr)',
                      'repeat(5, 1fr)',
                    ]}
                    flex="1"
                  >
                    {alphabetListItem.links.map((links, index) => (
                      <StyledAlphabetListLink key={index} to={links.href}>
                        {links.title}
                      </StyledAlphabetListLink>
                    ))}
                  </Box>
                </Box>
                {alphabetListItem.divider && <Divider my={3} />}
              </Box>
            ))}
          </Box>
        </Box>
      </main>
      <Footer />
    </Fragment>
  )
}

export default AllBrands
