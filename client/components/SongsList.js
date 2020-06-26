import React from 'react'
import Song from './Song'

const R51   = require('../data/Songs/Reamer51.mp3')
const CF    = require('../data/Songs/CabinFever.mp3')
const GO    = require('../data/Songs/GettingOld.mp3')
const OOD   = require('../data/Songs/OurOwnDesign.mp3')
const TWB   = require('../data/Songs/ThisWorldsBane.mp3')
const D     = require('../data/Songs/Dreams.mp3')

//

const SongsList = () => {
  const mp3s = [
        [R51, "Reamer 51 (Live) [2019]"], [CF, "Cabin Fever (Salvia Salvere) [2016]"],
        [GO, "Getting Old (Salvia Salvere) [2016]"], [OOD, "Our Own Design (Solo) [2015]"],
        [TWB, "This World's Bane (Solo) [2016]"], [D, "Dreams (Solo) [2015]"]
  ]

  return (
    <div>
      <ul className="songlist">
        { mp3s.map(mp3 => <Song key={mp3} mp3={mp3[0]} name={mp3[1]}/>) }
      </ul>
    </div>
  )
}

export default SongsList
