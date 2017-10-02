import React from 'react'
import Nav from './Nav'
import Picture from './Picture'
import SimpleSlider from './Carousel'

class Media extends React.Component {
  constructor() {
    super()
  }

  render () {
    var normal = {
      "opacity": "1"
    }
    var touched = {
      "background-color": "black",
      "transform": "translatex(1.5px)",
      "opacity": "0.8"
    }

    return (
      <div>
        <Nav />
        <SimpleSlider />
        <Picture />
      </div>
    )
  }
}

export default Media
