import { Fragment } from 'react'
import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'

import theme from '../../lib/theme'
import { Box, Container } from '../../helpers/'
import {
  Header,
  Footer,
  Button,
  Title,
  Text,
  Product,
  Anchor,
  Image,
  Card,
} from '../../ui/'

import productImage1 from '../../assets/images/temp/product-wide.jpg'
import productImage2 from '../../assets/images/temp/Citric-Acid.jpg'
import productImage3 from '../../assets/images/temp/Ohaus-Balance.jpg'
import productImage4 from '../../assets/images/temp/RPL03-500ML.jpg'
import productImage5 from '../../assets/images/temp/ibuprofen-usp.jpg'
import productImage6 from '../../assets/images/temp/product-wide2.jpg'
import productImage7 from '../../assets/images/temp/ther-mix-heated-lab-mixer.jpg'
import productImage8 from '../../assets/images/temp/duran-schott-tilt.jpg'
import productImage9 from '../../assets/images/temp/Axol-Neural-Stem-Cells.jpg'
import productImage10 from '../../assets/images/temp/auto-retractable-box-cutter-ceramic-blade.jpg'
import productImage11 from '../../assets/images/temp/product-wide3.jpg'
import productImage12 from '../../assets/images/temp/R2050_Direct-zol-RNA-MiniPrep_No-TRI-Reagent.jpg'
import productImage13 from '../../assets/images/temp/Combipro-Sterilizer.jpg'

import brandLogo1 from '../../assets/images/logos/logo-1.jpg'
import brandLogo2 from '../../assets/images/logos/logo-2.jpg'
import brandLogo3 from '../../assets/images/logos/logo-3.jpg'
import brandLogo4 from '../../assets/images/logos/logo-4.jpg'
import brandLogo5 from '../../assets/images/logos/logo-5.jpg'
import brandLogo6 from '../../assets/images/logos/logo-6.jpg'
import brandLogo7 from '../../assets/images/logos/logo-7.jpg'
import brandLogo8 from '../../assets/images/logos/logo-8.jpg'
import brandLogo9 from '../../assets/images/logos/logo-9.jpg'
import brandLogo11 from '../../assets/images/logos/logo-11.jpg'
import brandLogo13 from '../../assets/images/logos/logo-13.jpg'
import brandLogo14 from '../../assets/images/logos/logo-14.jpg'
import brandLogo15 from '../../assets/images/logos/logo-15.jpg'
import brandLogo16 from '../../assets/images/logos/logo-16.jpg'
import brandLogo17 from '../../assets/images/logos/logo-17.jpg'
import brandLogo19 from '../../assets/images/logos/logo-19.jpg'
import brandLogo20 from '../../assets/images/logos/logo-20.jpg'
import brandLogo21 from '../../assets/images/logos/logo-21.jpg'

import panelLogo1 from '../../assets/images/temp/panel-logo-1.png'
import panelLogo2 from '../../assets/images/temp/panel-logo-2.png'

import patternBlue from '../../assets/images/patterns/pattern_blue.svg'

const produstData = [
  {
    href: '/',
    imgUrl: productImage1,
    wide: true,
  },
  {
    href: '/',
    imgUrl: productImage2,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
  {
    href: '/',
    imgUrl: productImage3,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
  {
    href: '/',
    imgUrl: productImage4,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
  {
    href: '/',
    imgUrl: productImage5,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
  {
    href: '/',
    imgUrl: productImage6,
    wide: true,
  },
  {
    href: '/',
    imgUrl: productImage7,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
  {
    href: '/',
    imgUrl: productImage8,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
  {
    href: '/',
    imgUrl: productImage9,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
  {
    href: '/',
    imgUrl: productImage10,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
  {
    href: '/',
    imgUrl: productImage11,
    wide: true,
  },
  {
    href: '/',
    imgUrl: productImage12,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
  {
    href: '/',
    imgUrl: productImage13,
    by: 'by Rocky Mountain Biologicals',
    name: 'Fetalgro Bovine Growth Serum',
    priceWhole: '1,400,',
    priceFraction: '45',
  },
]

const brandLogosData = [
  {
    alt: 'logo 1',
    imageSrc: brandLogo7,
  },
  {
    alt: 'logo 13',
    imageSrc: brandLogo13,
  },
  {
    alt: 'logo 8',
    imageSrc: brandLogo8,
  },
  {
    alt: 'logo 6',
    imageSrc: brandLogo6,
  },
  {
    alt: 'logo 1',
    imageSrc: brandLogo1,
  },
  {
    alt: 'logo 19',
    imageSrc: brandLogo19,
  },
  {
    alt: 'logo 15',
    imageSrc: brandLogo15,
  },
  {
    alt: 'logo 9',
    imageSrc: brandLogo9,
  },
  {
    alt: 'logo 17',
    imageSrc: brandLogo17,
  },
  {
    alt: 'logo 16',
    imageSrc: brandLogo16,
  },
  {
    alt: 'logo 2',
    imageSrc: brandLogo2,
  },
  {
    alt: 'logo 20',
    imageSrc: brandLogo20,
  },
  {
    alt: 'logo 21',
    imageSrc: brandLogo21,
  },
  {
    alt: 'logo 14',
    imageSrc: brandLogo14,
  },
  {
    alt: 'logo 11',
    imageSrc: brandLogo11,
  },
  {
    alt: 'logo 5',
    imageSrc: brandLogo5,
  },
  {
    alt: 'logo 4',
    imageSrc: brandLogo4,
  },
  {
    alt: 'logo 3',
    imageSrc: brandLogo3,
  },
]

const StyledLogo = styled(Image)`
  max-width: 80px;
  filter: grayscale(100%);
  margin: 0 auto;
`

const Home = props => {
  const { headerLoggedIn } = props
  return (
    <Fragment>
      <Header headerLoggedIn={headerLoggedIn} />

      <main className="content">
        <Box
          pt={['50px', '70px', '100px']}
          pb={['70px', '100px', '140px']}
          textAlign="center"
          borderBottomWidth="1px"
          borderBottomStyle="solid"
          borderBottomColor="silver"
        >
          <Container small>
            <Title tag={1}>Welcome to a More Efficient Lab</Title>
            <Text
              fontSize={['16px', '20px']}
              fontFamily={theme.fontFamily.light}
              mb={['25px', '25px', '60px']}
            >
              Streamlined, team-centric lab supply ordering for your entire lab
              with preferred pricing and free shipping.
            </Text>
            <Button
              variant="primary"
              mb={['25px', '25px', '50px']}
              py={['10px', '18px']}
              px={['26px', '50px']}
              fontSize="1.15rem"
              fontFamily={theme.fontFamily.bold}
            >
              Create an Account
            </Button>
            <Text fontSize="12px" fontFamily={theme.fontFamily.bold}>
              Trusted by over 2,000 institutions around the world.
            </Text>
          </Container>
        </Box>

        <Box
          py={[4, '70px']}
          px={[1, 1, 1, 5]}
          borderBottomWidth="1px"
          borderBottomStyle="solid"
          borderBottomColor="silver"
        >
          <Title
            tag={2}
            css={css`
              font-family: ${theme.fontFamily.light};
              margin-bottom: 40px;
            `}
          >
            Featured Products
          </Title>

          <Box
            display="grid"
            gridGap="30px"
            gridTemplateColumns={[
              'repeat(1,1fr)',
              'repeat(3,1fr)',
              'repeat(3,1fr)',
              'repeat(4,1fr)',
              'repeat(4,1fr)',
            ]}
          >
            {produstData.map((product, index) => (
              <Product
                key={index}
                href={product.href}
                imgUrl={product.imgUrl}
                by={product.by}
                name={product.name}
                priceWhole={product.priceWhole}
                priceFraction={product.priceFraction}
                gridColumn={product.wide && ['span 1', 'span 2']}
              />
            ))}
          </Box>
        </Box>

        <Box
          py={[4, '70px']}
          px={[1, 1, 1, 5]}
          borderBottomWidth="1px"
          borderBottomStyle="solid"
          borderBottomColor="silver"
        >
          <Title
            tag={2}
            css={css`
              font-family: ${theme.fontFamily.light};
              margin-bottom: 0px;
            `}
          >
            Supplier Partners
          </Title>
          <Anchor
            href="/"
            css={css`
              font-family: ${theme.fontFamily.bold};
              margin-bottom: 40px;
              display: inline-block;
            `}
          >
            View All Suppliers
          </Anchor>

          <Box
            display="grid"
            gridColumnGap={['30px', '60px', '60px', '60px', '100px']}
            gridRowGap={['40px', '50px']}
            px={[0, 0, '70px']}
            gridTemplateColumns={[
              'repeat(2,1fr)',
              'repeat(3,1fr)',
              'repeat(4,1fr)',
              'repeat(6,1fr)',
            ]}
          >
            {brandLogosData.map((brandLogo, index) => (
              <Image
                key={index}
                src={brandLogo.imageSrc}
                width="100%"
                alt={brandLogo.alt}
              />
            ))}
          </Box>
        </Box>

        <Box
          py={[4, '70px']}
          px={[1, 1, 1, 5]}
          bg="primary"
          backgroundPosition="center"
          position="relative"
          css={css`
            background-image: url(${patternBlue});
            &:before,
            &:after {
              content: '';
              position: absolute;
              left: 0;
              width: 100%;
              height: 60px;
              background-color: red;
            }
            &:before {
              top: 0;
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.3) 0%,
                transparent 55%
              );
            }
            &:after {
              bottom: 0;
              background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.3) 0%,
                transparent 55%
              );
            }
          `}
        >
          <Box
            display="grid"
            gridGap={['30px', '50px', '50px', '70px', '70px']}
            gridTemplateColumns={[
              'repeat(1,1fr)',
              'repeat(1,1fr)',
              'repeat(2,1fr)',
            ]}
          >
            <Card
              borderTopLeftRadius="4px"
              borderTopRightRadius="4px"
              py={['20px', '30px', '50px', '60px', '80px']}
              px={['15px', '30px', '30px', '30px', '30px']}
              textAlign={['center', 'center', 'center', 'center', 'left']}
              display="grid"
              gridGap={['20px', '30px']}
              gridTemplateColumns={[
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,auto auto)',
              ]}
            >
              <Link
                to="/"
                css={css`
                  display: inline-grid;
                `}
              >
                <Image
                  src={panelLogo1}
                  alt="panel logo"
                  mx="auto"
                  maxWidth={['120px', '160px', 'auto']}
                />
              </Link>

              <Box>
                <Text
                  mb={0}
                  fontSize={['22px', '26px']}
                  fontFamily={theme.fontFamily.bold}
                >
                  Shop Millions of Products
                </Text>
                <Text
                  fontSize={['16px', '18px']}
                  fontFamily={theme.fontFamily.light}
                >
                  From Hundreds of{' '}
                  <span
                    css={css`
                      color: ${theme.colors.success};
                    `}
                  >
                    Trusted
                  </span>{' '}
                  Suppliers
                </Text>
                <Button
                  variant="primary"
                  py={['10px', '18px']}
                  px={['26px', '50px']}
                  fontSize={['14px', '1.15rem']}
                  fontFamily={theme.fontFamily.bold}
                >
                  Browse Your Favorite Brands
                </Button>
              </Box>
            </Card>

            <Card
              borderTopLeftRadius="4px"
              borderTopRightRadius="4px"
              py={['20px', '30px', '50px', '60px', '80px']}
              px={['15px', '30px', '30px', '30px', '30px']}
              textAlign={['center', 'center', 'center', 'center', 'left']}
              display="grid"
              gridGap={['20px', '30px']}
              gridTemplateColumns={[
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,1fr)',
                'repeat(1,auto auto)',
              ]}
            >
              <Link
                to="/"
                css={css`
                  display: inline-grid;
                `}
              >
                <Image
                  src={panelLogo2}
                  alt="panel logo"
                  mx="auto"
                  maxWidth={['120px', '160px', 'auto']}
                />
              </Link>

              <Box>
                <Text
                  mb={0}
                  fontSize={['22px', '26px']}
                  fontFamily={theme.fontFamily.bold}
                >
                  Meet the Lab Engine
                </Text>
                <Text
                  fontSize={['16px', '18px']}
                  fontFamily={theme.fontFamily.light}
                >
                  Everything your lab needs in one place
                </Text>
                <Button
                  variant="primary"
                  py={['10px', '18px']}
                  px={['26px', '50px']}
                  fontSize={['14px', '1.15rem']}
                  fontFamily={theme.fontFamily.bold}
                >
                  Watch the Video
                </Button>
              </Box>
            </Card>
          </Box>
        </Box>

        <Box py={[4, '70px']} textAlign="center">
          <Container>
            <Text
              fontSize={['16px', '18px', '20px']}
              mb="40px"
              fontFamily={theme.fontFamily.light}
            >
              Earth's #1 team-centric, scientific marketplace trusted by over
              2,000 industry leading organizations.
            </Text>

            <Box
              display="grid"
              gridGap={['30px']}
              px={[0, 0, 0, '40px', '160px']}
              justifyContent="center"
              gridTemplateColumns={[
                'repeat(2,1fr)',
                'repeat(3,1fr)',
                'repeat(4,1fr)',
                'repeat(7,1fr)',
              ]}
            >
              <StyledLogo maxWidth="70px" alt="logos" src={brandLogo1} />
              <StyledLogo maxWidth="70px" alt="logos" src={brandLogo2} />
              <StyledLogo maxWidth="70px" alt="logos" src={brandLogo3} />
              <StyledLogo maxWidth="70px" alt="logos" src={brandLogo4} />
              <StyledLogo maxWidth="70px" alt="logos" src={brandLogo5} />
              <StyledLogo maxWidth="70px" alt="logos" src={brandLogo6} />
              <StyledLogo maxWidth="70px" alt="logos" src={brandLogo7} />
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home
