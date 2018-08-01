import React from 'react'
import Song from './Song'

const HeyAmorino = require('../data/Songs/HeyAmorino.mp3')
const LettersFromTheBlackSea = require('../data/Songs/LettersFromTheBlackSea.mp3')
const Uccellino = require('../data/Songs/Uccellino.mp3')
const Mihaela = require('../data/Songs/MihaelaMihaela.mp3')


const SongsList = () => {
  const mp3s = [[HeyAmorino, 'Hey Amorino'],[LettersFromTheBlackSea, 'Letters From The Black Sea'], [Uccellino, 'Uccellino'],[Mihaela, 'Mihaela Mihaela']]
  return (
    <div>
      <ul className="songlist">
        { mp3s.map(mp3 => <Song key={mp3} mp3={mp3[0]} name={mp3[1]}/>) }
      </ul>
    </div>
  )
}

export default SongsList
