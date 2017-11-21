import React, { Component } from 'react'
const FareTheeWell = require('../data/Songs/FareTheeWell.mp3')
const Mihaela = require('../data/Songs/MihaelaMihaela.mp3')
const Ribella = require('../data/Songs/Ribella.mp3')
// const Uccellino = require('../data/Songs/Uccellino.wav')
// const CuTiLuDissi = require('../data/Songs/CuTiLuDissiWaltz.wav')

import Song from './Song'

class SongsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mp3s: [[FareTheeWell, 'Fare Thee Well'], [Ribella, 'Ribella'], [Mihaela, 'Mihaela Mihaela']]
    }
  }

  render() {
    return (
      <div>
        <ul className="songlist">
          {
            this.state.mp3s.map(mp3 => <Song key={mp3} mp3={mp3[0]} name={mp3[1]}/>)
          }
        </ul>
      </div>
    )
  }
}

export default SongsList
