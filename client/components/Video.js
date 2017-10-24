import React from 'react'

class YouTube extends React.Component {
  constructor(props) {
    super(props)
  }
  playVideo(e) {
    console.log('heyyyyyy!',e)
    e.persist()
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
      <div onClick={this.playVideo.bind(this)} className="music-album" style={{backgroundColor: 'black'}}>
        <iframe onClick={this.playVideo.bind(this)} style={{'margin': 'auto', 'height': '80%', width: '100%'}} type="text/html" src={videoSrc} frameborder="0"/>
      </div>
    );
  }
}

export default YouTube
