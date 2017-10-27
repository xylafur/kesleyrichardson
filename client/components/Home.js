import React from 'react'
import FrontQuote from './FrontQuote'
import Nav from './Nav'


class Home extends React.Component {
  render(props) {
    console.log(this.props)
    return (
      <div className="home" style={{"opacity": `${this.props.layer1 ? '0.6': '0.4'}`, "backgroundImage": `url(${this.props.layer1})`, "backgroundSize":"cover", "backgroundAttachment": "fixed", "backgroundRepeat": "no-repeat", 'height': `${window.innerHeight -2}px`}}>
       <div className="overlay" style={{'height': `${window.innerHeight -2}px`}}>
        <Nav />
        <div className="header">
          <h1 className="name">Amanda Pascali</h1>
          <h3 className="kicker">Singer/Songwriter, Activist, Student of Natural Sciences.</h3>
        </div>
        <FrontQuote />
      </div>
      </div>
    )
  }
}

export default Home
