import React from 'react'
import layer3 from '../static/pictures/veneziaboy.jpg'

class Music extends React.Component {
  constructor(props) {
    super(props)
  }
  playVideo(e) {
    console.log(e)
    e.persist()
    e.target.style.width = '80%';
    e.target.style.height = '400px';
    e.target.style.backgroundColor = 'black';
    e.target.play()
  }

  render() {
    return (
      <div style={{"backgroundImage": "url(" + "'" + layer3 + "')", "backgroundSize":"cover", "opacity": "0.9", "backgroundAttachment": "fixed", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
      <div className="music overlay3">
        <h1 className="title-music">Music</h1>
        <div>
          <div className="floatLeft">
            <video className="music-album" onClick={this.playVideo.bind(this)} poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay muted loop>
              <source src="https://www.youtube.com/watch?v=WdKYfIglzZs" type="video/mp4"/>
            </video>
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
