import React from 'react'
import Song from './Song'

const FareTheeWell = require('../data/Songs/FareTheeWell.mp3')
const Mihaela = require('../data/Songs/MihaelaMihaela.mp3')
const Ribella = require('../data/Songs/Ribella.mp3')
const Uccellino = require('../data/Songs/Uccellino.mp3')
const CuTiLuDissi = require('../data/Songs/CuTiLuDissi.mp3')


const SongsList = () => {
  const mp3s = [[FareTheeWell, 'Fare Thee Well'], [Ribella, 'Ribella'], [Mihaela, 'Mihaela Mihaela'], [CuTiLuDissi, 'Cu Ti Lu Dissi'], [Uccellino, 'Uccellino']]
  return (
    <div>
      <ul className="songlist">
        { mp3s.map(mp3 => <Song key={mp3} mp3={mp3[0]} name={mp3[1]}/>) }
      </ul>
    </div>
  )
}

export default SongsList
