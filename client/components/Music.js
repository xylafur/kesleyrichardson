import React from 'react'
import Youtube from './Video'
import SongsList from './SongsList'
import '../static/music.css'

const Music = () => (
  <div className="musicContainer">
  <div className="music overlay3">
    <h1 className="title-music">Music</h1>

    <div className="song-container">
      <div className="floatLeft">
      <Youtube video="5PGGMKaAlM4" autoplay="0" rel="0" modest="1" />
      <span className="album-name">
        <h2 className="author">Kesley Richardson</h2>
        <h2 className="album-name">I am God</h2>
      </span>
      <span className="whoBy">by Kesley Richardson</span>
    </div>

    <SongsList />
   </div>
   </div>
  </div>
)

export default Music
