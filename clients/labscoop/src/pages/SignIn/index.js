import { Fragment } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../lib/theme'
import { Link } from '@reach/router'

import { Box } from '../../helpers'
import {
  HeaderDontHaveAnAccount,
  Title,
  Field,
  Checkbox,
  Text,
  Button,
  Divider,
  Image,
} from '../../ui'

import signImagePath from '../../assets/images/temp/istock-1.jpg'
import signIllustrationPath from '../../assets/images/temp/istock-2.jpg'

const SignIn = () => {
  return (
    <Fragment>
      <HeaderDontHaveAnAccount />

      <main
        className="content"
        css={css`
          display: flex;
        `}
      >
        <Box
          display="grid"
          gridTemplateColumns={[
            'repeat(1,1fr)',
            'repeat(1,1fr)',
            'repeat(1,1fr)',
            'repeat(1,600px 1fr)',
            'repeat(1,710px 1fr)',
          ]}
          width="100%"
        >
          <Box
            borderRightWidth={['0px', '0px', '0px', '2px']}
            borderRightColor="muted"
            borderRightStyle="solid"
            bg="#f7f7f7"
            py={4}
            px={[1, 1, 3, 4, 5]}
          >
            <Box
              borderWidth="1px"
              borderColor="#dddddd"
              borderStyle="solid"
              bg="white"
              borderRadius="6px"
              pt={[1, 1, 3, 4]}
              pr={[1, 1, 3, 4]}
              pl={[1, 1, 3, 4]}
            >
              <Box
                mb={[1, 2]}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box flex="1">
                  <Title tag={1}>Sign In</Title>
                </Box>

                <Box flexShrink="0" ml={1}>
                  <Link to="/">
                    <b>Forgot Your Password?</b>
                  </Link>
                </Box>
              </Box>

              <form>
                <Field
                  type="email"
                  title="Email Address"
                  id="field-sign-email"
                />
                <Field
                  type="password"
                  title="Password"
                  id="field-sign-password"
                />
                <Checkbox
                  title="Keep me signed in on this computer."
                  id="field-sign-keep-checkbox"
                  mb={1}
                />
                <Text>
                  By signing in you agree to the{' '}
                  <Link to="/">Terms & Conditions of Sale</Link>,{' '}
                  <Link to="/">Terms & Conditions of Use</Link> and{' '}
                  <Link to="/">Privacy Policy</Link>.
                </Text>

                <Button variant="primary" hasShadow width={['auto', '230px']}>
                  Sign In
                </Button>
              </form>

              <Divider my={4} mx={[-1, -1, -3, -4]} />

              <Text fontFamily={theme.fontFamily.bold}>
                Don't have an account?
              </Text>

              <Button width={['auto', '230px']}>Create an Account</Button>

              <Box>
                <Image
                  display="block"
                  src={signIllustrationPath}
                  alt="Sign illustration"
                  width="100%"
                  maxWidth="280px"
                  mx="auto"
                  mt={[2, 3]}
                />
              </Box>
            </Box>
          </Box>

          <Box
            backgroundImage={`url(${signImagePath})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            minHeight="200px"
          />
        </Box>
      </main>
    </Fragment>
  )
}

export default SignIn
