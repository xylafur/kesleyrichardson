import React from 'react'
import Home from './Home'
import Shows from './Shows.jsx'
import Music from './Music'
import Writings from './Writings'
import events from '../data/events'

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Shows events={events}/>
        <Music />
        <ul style={{'list-style': 'none'}}>
          <li><Writings /></li>
        </ul>
      </div>
    )
  }
}

export default App
