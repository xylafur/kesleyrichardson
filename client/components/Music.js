import React from 'react'
import layer3 from '../static/pictures/veneziaboy.jpg'

class Music extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{"backgroundImage": "url(" + "'" + layer3 + "')", "backgroundSize":"cover", "opacity": "0.9", "backgroundAttachment": "fixed", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
      <div className="music overlay3">
        <h1 className="title-music">Music</h1>
        <div>
          <div className="floatLeft">
            <div className="music-album"></div>
            <span className="album-name"><h2 className="author">Amanda Pascali</h2><h2 className="album-name">SELF TITLED EP</h2></span>
            <span className="whoBy">by Amanda Pascali</span>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Music
