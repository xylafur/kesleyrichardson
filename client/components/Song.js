import React from 'react'

const Song = ({name, mp3}) => (
  <div className="songsList">
    <h3 className="songName">{name}</h3>
    <audio controls preload="true" id="audiocontrols">
      <source src={mp3} type="audio/mpeg" />
    </audio>
  </div>
)

export default Song
