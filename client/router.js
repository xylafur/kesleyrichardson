import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'
import Contact from './components/Contact'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default Routes
