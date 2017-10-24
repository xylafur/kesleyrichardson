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
        <button style={{backgroundColor: 'transparent', borderColor: 'transparent', border: 'solid 1px', margin: '2% 0%'}}>Play</button>
      </div>
    )
  }
}

export default Song
