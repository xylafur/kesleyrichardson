import React, { Component } from 'react'

import Home from './Home'
import Shows from './Shows'
import Music from './Music'
import Writings from './Writings'
import Footer from './Footer'

import '../static/text-decorations.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const styles = {
      nav: { position: 'fixed', top: '0', zIndex: '1', backgroundColor: 'black', width: '100%' }
    }
    return (
        <div>
          <Home/>
          <Shows/>
          <Music/>
          <Writings/>
          <Footer />
      </div>
    )
  }
}

export default App
