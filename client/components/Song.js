import React from 'react'

class Song extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isPlaying: false
    }
  }

  render() {
    return (
      <div className="songsList">
        <h3 className="songName">{this.props.name}</h3>
        <audio controls preload id="audiocontrols" style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
        <source src={this.props.mp3} type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default Song
