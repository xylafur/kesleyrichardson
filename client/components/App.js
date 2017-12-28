import React from 'react'
import Home from './Home'
import Shows from './Shows'
import Music from './Music'
import Nav from './Nav'
import Writings from './Writings'
import Footer from './Footer'
import Contact from './Contact'
import Media from './Media'
import events from '../data/events'

import '../static/text-decorations.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { shouldShow: false }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(event) {
    if (window.scrollY >= document.getElementsByClassName('shows')[0].clientHeight - 500 ) { this.setState({shouldShow: true}) }
    else { this.setState({shouldShow: false}) }
  }

  render() {
    const styles = {
      nav: { position: 'fixed', top: '0', zIndex: '1', backgroundColor: 'black', width: '100%' }
    }

    return (
        <div>
          <Home/>
          { this.state.shouldShow && <Nav shouldShow="true" style={styles.nav}/> }
          <Shows events={events}/>
          <Music/>
          <Writings/>
          <Footer />
      </div>
    )
  }
}

export default App
