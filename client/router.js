import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'
import Media from './components/Media'
import Contact from './components/Contact'
// import NotFound from './components/NotFound';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={process.env.PUBLIC_URL+"/"} component={App} />
          <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
          <Route path={process.env.PUBLIC_URL + "/media"} component={Media} />
        </div>
        {/* <Route path="*" component={NotFound} /> */}
      </Router>
    )
  }
}

export default Routes
