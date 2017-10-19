import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'
import Media from './components/Media'
import Contact from './components/Contact'

const PUBLIC_URL = 'https://ceciliamvrie.github.io/amandapascali'
class Routes extends Component {
  render() {
    return (
      <Router basename={PUBLIC_URL}>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/contact" component={Contact} />
          <Route path="/media" component={Media} />
        </div>
      </Router>
    )
  }
}

export default Routes
