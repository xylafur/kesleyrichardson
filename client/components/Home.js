import React from 'react'
import FrontQuote from './FrontQuote'
import Nav from './Nav'
import '../static/home.css'


const Home  = () => (
  <div className="home">
    <div className="overlay">
      <Nav />
      <div className="header">
         <h1 className="name">Amanda Pascali</h1>
         <h3 className="kicker">Immigrant American Folk Music</h3>
      </div>
      <FrontQuote />
    </div>
  </div>
)

export default Home
