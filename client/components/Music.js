import React from 'react'
import Youtube from './Video'

class Music extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{"opacity": '0.6', "backgroundImage": `url(${this.props.layer3})`, "backgroundSize":"cover", "backgroundAttachment": "fixed", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
      <div className="music overlay3">
        <h1 className="title-music">Music</h1>
        <div>
          <div className="floatLeft">
            <Youtube
              video="Giz2E7JoMt4" autoplay="0" rel="0" modest="1"
            />
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
