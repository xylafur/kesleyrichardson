import React from 'react'
import Nav from './Nav'
import '../static/home.css'


const Home  = () => (
  <div className="home">
    <div className="overlay">
      <Nav />
      <div className="header">
         <h1 className="name">James Kesley Richardson</h1>
         <h3 className="kicker">Embedded Systems Engineer</h3>

         <h1><a href="https://www.github.com/xylafur">Github</a></h1>
         <h1><a href="https://www.linkedin.com/in/james-richardson-5b7821191">LinkedIn</a></h1>

      </div>
    </div>
  </div>
)

export default Home
