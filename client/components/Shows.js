import React from 'react'
import Show from './Show'

import events from '../data/events'
import '../static/shows.css'

const Shows = () => (
  <div className="overlay2">
    <div className="shows">
      <h1 className="title-show">Shows</h1>
      {
        events.data.map((event, i) => <Show link={`https://maps.google.com/?q=${event.address}`} event={event} key={i}/>)
      }
    </div>
  </div>
)

export default Shows
