import React, { Component } from 'react'

class YouTube extends Component {
  constructor(props) {
    super(props)
  }
  playVideo(e) {
    e.persist()
    e.target.style.backgroundColor = 'black';
    e.target.play()
  }
  render() {
    const videoSrc = "https://www.youtube.com/embed/" +
    this.props.video + "?autoplay=" +
    this.props.autoplay + "&rel=" +
    this.props.rel + "&modestbranding=" +
    this.props.modest;

    return (
      <div onClick={this.playVideo.bind(this)} className="music-album" style={{backgroundColor: 'black'}}>
        <iframe onClick={this.playVideo.bind(this)} style={{margin: 'auto', height: '80%', width: '100%'}} type="text/html" src={videoSrc} frameBorder="0"/>
      </div>
    );
  }
}

export default YouTube
