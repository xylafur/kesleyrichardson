import React from 'react'
var smoothScroll = require('smoothscroll')
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Contact from './Contact'
import Media from './Media'
import Home from './Home'

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }
  findShows() {
    var height = document.getElementsByClassName('shows')[0].clientHeight + 30
    smoothScroll(height, 700)
  }
  findMusic() {
    var Musicheight = document.getElementsByClassName('overlay3')[0].offsetTop + 30
    smoothScroll(Musicheight, 900);
  }
  findWritings() {
    var WritingHeight = document.getElementsByClassName('overlay5')[0].offsetTop  + 30
    smoothScroll(WritingHeight, 1000);
  }
  render() {
    return (
      <div style={this.props.style}>
        <nav>
          <div>
            <ul>
              <li><Link to="/" className='link'>Home</Link></li>
              <li onClick={this.findShows.bind(this)}>Shows</li>
              <li onClick={this.findMusic.bind(this)}>Music</li>
            </ul>
          </div>
          <ul>
            <h4 className="nav-name">Amanda Pascali</h4>
          </ul>
          <div>
            <ul>
              <li onClick={this.findWritings.bind(this)}>Writing/Travels</li>
              <li><Link to="/media" className="link">Media</Link></li>
              <li><Link to="/contact" className="link">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
