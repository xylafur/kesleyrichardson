import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Contact from './Contact'
import Media from './Media'
import Home from './Home'

const Nav = () => {
  return (
      <div>
        <nav>
          <div>
            <ul>
              <li><Link to="/" className='link'>Home</Link></li>
              <li>Shows</li>
              <li>Music</li>
            </ul>
          </div>
          <ul>
            <h4 className="nav-name">Amanda Pascali</h4>
          </ul>
          <div>
            <ul>
              <li>Writing/Travels</li>
              <li><Link to="/media" className="link">Media</Link></li>
              <li><Link to="/contact" className="link">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
  )
}

export default Nav
