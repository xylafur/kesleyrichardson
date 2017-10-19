import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'
import Media from './components/Media'
import Contact from './components/Contact'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="amandapascali/" component={App} />
          <Route path="amandapascali/contact" component={Contact} />
          <Route path="amandapascali/media" component={Media} />
        </div>
      </Router>
    )
  }
}

export default Routes
