import React from 'react'
import FrontQuote from './FrontQuote'
import Nav from './Nav'
import layer1 from '../static/pictures/picture1.jpg'

class Home extends React.Component {
  render() {
    return (
      <div className="home" style={{"backgroundImage": "url(" + "'" + layer1 + "')", "backgroundSize":"cover", "opacity": "0.8", "backgroundAttachment": "fixed", "backgroundRepeat": "no-repeat"}}>
       <div className="overlay">
        <Nav />
        <div className="header">
          <h1 className="name">Amanda Pascali</h1>
          <h3 className="kicker">Singer/Songwriter, Activist, Student of Natural Sciences.</h3>
          <button className="header-button">Amanda Pascali's Self Titled EP</button>
        </div>
        <FrontQuote />
      </div>
      </div>
    )
  }
}

export default Home
