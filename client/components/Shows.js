import React from 'react'
import Show from './Show'

class Shows extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Shows</h1>
        <Show />
      </div>
    )
  }
}

export default Shows
