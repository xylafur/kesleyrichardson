import React from 'react'
import Home from './Home'
import Shows from './Shows.jsx'
import events from '../data/events'

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Shows events={events}/>
      </div>
    )
  }
}

export default App
