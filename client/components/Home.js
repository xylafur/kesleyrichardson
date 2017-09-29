import React from 'react'
import FrontQuote from './FrontQuote'
import Nav from './Nav'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="header">
          <h1 className="name">Amanda Pascali</h1>
          <h3 className="kicker">Singer/Songwriter, Activist, Student of Natural Sciences.</h3>
          <button className="header-button">Amanda Pascali's Self Titled EP</button>
        </div>
        <FrontQuote />
      </div>
    )
  }
}

export default Home
