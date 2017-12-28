import React, { Component } from 'react'
import Show from './Show'
import '../static/shows.css'

class Shows extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className="overlay2">
        <div className="shows" style={{backgroundColor: 'rgba(0,0,0, 1)', opacity: 0.66}}>
          <h1 className="title-show">Shows</h1>
          { this.props.events.events.map((event, i) => <Show link={"https://maps.google.com/?q="+event.address} event={event} key={i}/>) }
        </div>
      </div>
    )
  }
}

export default Shows
