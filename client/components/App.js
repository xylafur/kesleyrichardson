import React, { Component } from 'react'

import Home from './Home'
import Music from './Music'
import Footer from './Footer'
import Projects from './Projects'
import Writings from './Writings'

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
          <Projects/>
          <Music/>
          <Writings/>
          <Footer />
      </div>
    )
  }
}

export default App
