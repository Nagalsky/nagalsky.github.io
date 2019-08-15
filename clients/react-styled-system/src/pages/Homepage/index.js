import React, { Fragment } from 'react'

import { Box, Container } from '../../helpers/'
import { Button, Title } from '../../ui/'

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Box
          px={[1, 3]}
          py={[0, 15]}
          color={['red', 'green', 'yellow', 'success']}
          bg="blue"
          borderRadius={[0, 1]}
        >
          gege
        </Box>

        <Title>I'm a homepage</Title>

        <Button variant="primary">primary</Button>
        <Button variant="success">success</Button>
        <Button>success</Button>
      </Container>
    </Fragment>
  )
}

export default Home
