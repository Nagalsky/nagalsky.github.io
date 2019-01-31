import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Contact from './pages/Contact'

import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </Layout>
      </Router>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <React.Fragment>
//           <Header />
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//         </React.Fragment>
//       </Router>
//     )
//   }
// }
//
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   )
// }
//
// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   )
// }

export default App
