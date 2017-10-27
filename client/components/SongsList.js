import React from 'react'
const FareTheeWell = require('../data/Songs/FareTheeWell.mp3')
const AlleyWays = require('../data/Songs/InBetweentheAlleyways.mp3')
const Mihaela = require('../data/Songs/MihaelaMihaela.mp3')
const Ribella = require('../data/Songs/Ribella.mp3')
const Venezia = require('../data/Songs/VeneziaBoy.mp3')
import Song from './Song'

class SongsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mp3s: [[FareTheeWell, 'Fare Thee Well'], [Venezia, 'Venezia Boy'], [AlleyWays, 'In Between the Alleyways'], [Ribella, 'Ribella'], [Mihaela, 'Mihaela Mihaela']]
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.mp3s.map(mp3 => <Song mp3={mp3[0]} name={mp3[1]}/>)
          }
        </ul>
      </div>
    )
  }
}

export default SongsList
