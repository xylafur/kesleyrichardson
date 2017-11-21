import React from 'react'
import FrontQuote from './FrontQuote'
import Nav from './Nav'


const Home  = ({ layer1 }) => {
    const styles = {
      home: {
        'backgroundImage': `url(${layer1})`,
        'backgroundSize': 'cover',
        'backgroundAttachment': 'fixed',
        'backgroundRepeat': 'no-repeat',
        'paddingBottom': '0%'
      },
      overlay: {
        'paddingBottom': '5%'
      }
    }
    return (
      <div className="home" style={styles.home}>
       <div className="overlay" style={styles.overlay}>
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

export default Home
