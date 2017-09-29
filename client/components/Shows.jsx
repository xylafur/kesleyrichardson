import React from 'react'
import Show from './Show'

class Shows extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className="shows">
        <h1 className="title-show">Shows</h1>
        {
          this.props.events.events.map((event, i) => <Show event={event} key={i}/>)
        }
      </div>
    )
  }
}

export default Shows
