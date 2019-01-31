import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Contact from './pages/Contact'

import Layout from './components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Homepage} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </Router>
    )
  }
}

export default App
