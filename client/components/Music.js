import React from 'react'

class Music extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="music">
        <h1 className="title-music">Music</h1>
        <div>
          <div className="floatLeft">
            <div className="music-album"></div>
            <span className="album-name"><h2 className="author">Amanda Pascali</h2><h2 className="album-name">SELF TITLED EP</h2></span>
            <span className="whoBy">by Amanda Pascali</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Music
