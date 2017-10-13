import React from 'react'

class YouTube extends React.Component {
  constructor(props) {
    super(props)
  }
  playVideo(e) {
    console.log('heyyyyyy!',e)
    e.persist()
    e.target.style.height= '400px';
    e.target.style.width='70%';
    e.target.children[0].style.height = '400px';
    e.target.children[0].style.width = '80%';
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
      <div onClick={this.playVideo.bind(this)} className="music-album">
        <iframe onClick={this.playVideo.bind(this)} style={{'margin': 'auto', 'height': '80%'}} type="text/html" src={videoSrc} frameborder="0"/>
      </div>
    );
  }
}

export default YouTube
