import React, { Component } from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Container containerFluid>
            <h1>I'm a homepage</h1>
          </Container>
        </Layout>
      </React.Fragment>
    )
  }
}

export default Homepage
