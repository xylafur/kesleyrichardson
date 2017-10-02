import React from 'react'
import Home from './Home'
import Shows from './Shows.jsx'
import Music from './Music'
import Writings from './Writings'
import Footer from './Footer'
import Contact from './Contact'
import Media from './Media'
import events from '../data/events'
import '../static/footer.css'
import '../static/home.css'
import '../static/music.css'
import '../static/shows.css'
import '../static/writings.css'
import '../static/contact.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Shows events={events}/>
        <Music />
        <ul style={{'listStyle': 'none'}}>
          <li><Writings /></li>
        </ul>
        <Footer />
      </div>
    )
  }
}

export default App
