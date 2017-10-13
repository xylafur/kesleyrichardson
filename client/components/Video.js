import React from 'react'

class YouTube extends React.Component {
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
    var videoSrc = "https://www.youtube.com/embed/" +
        this.props.video + "?autoplay=" +
        this.props.autoplay + "&rel=" +
        this.props.rel + "&modestbranding=" +
        this.props.modest;
    return (
      <div className="container">
        <iframe className="music-album" type="text/html" onClick={this.playVideo.bind(this)} poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" src={videoSrc} frameborder="0"/>
      </div>
    );
  }
}

export default YouTube
