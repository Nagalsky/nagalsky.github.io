import React, { Component } from 'react'

import Layout from './components/Layout'
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <Layout>
        <Container containerFluid>
          <p>containerFluid</p>
          <button>link</button>
        </Container>
        <Container>
          <div>fff</div>
          <p>container</p>
        </Container>
      </Layout>
    )
  }
}

export default App
