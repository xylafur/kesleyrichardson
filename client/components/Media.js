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
      "background-color": "black",
      "opacity": "1"
    }
    var touched = {
      "opacity": "1"
    }

    return (
      <div>
        <Nav />
        <SimpleSlider />
        <figure className="snip1446">
          <figure className="snip1577">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample99.jpg" />
          <figcaption>
            <h3>Bodrum Salvador</h3>
            <h4>Luxery</h4>
          </figcaption>
          <a href="#"></a>
        </figure>
      </figure>
      </div>
    )
  }
}

export default Media
