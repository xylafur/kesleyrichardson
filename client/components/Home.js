import React from 'react'
import FrontQuote from './FrontQuote'
import Nav from './Nav'


class Home extends React.Component {
  render(props) {
    console.log(this.props)
    return (
      <div className="home" style={{"opacity": `${this.props.layer1 ? '0.7': '0.4'}`, "backgroundImage": `url(${this.props.layer1})`, "backgroundSize":"cover", "backgroundAttachment": "fixed", "backgroundRepeat": "no-repeat"}}>
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
