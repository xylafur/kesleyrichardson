import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'
import Media from './components/Media'
import Contact from './components/Contact'
// import NotFound from './components/NotFound';

const PUBLIC_URL = 'https://github.com/ceciliamvrie/amandapascali.github.io'
class Routes extends Component {
  render() {
    return (
      <Router basename={PUBLIC_URL}>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/contact" component={Contact} />
          <Route path="/media" component={Media} />
        </div>
        {/* <Route path="*" component= /> */}
      </Router>
    )
  }
}

export default Routes
