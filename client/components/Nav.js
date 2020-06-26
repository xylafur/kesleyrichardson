import React, { Component } from 'react'
var smoothScroll = require('smoothscroll')
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  findProjects() {
    const height = document.getElementsByClassName('overlay2')[0].clientHeight + 30
    smoothScroll(height, 700)
  }
  findMusic() {
    const Musicheight = document.getElementsByClassName('overlay3')[0].offsetTop + 30
    smoothScroll(Musicheight, 900);
  }
  findWritings() {
    const WritingHeight = document.getElementsByClassName('overlay5')[0].offsetTop  + 30
    smoothScroll(WritingHeight, 1000);
  }
  render() {
    return (
      <div style={this.props.style}>
        <nav>
          <div>
            <ul>
              <li><Link to="/" className='link'>Home</Link></li>
              <li onClick={this.findProjects.bind(this)}>Projects</li>
              <li onClick={this.findMusic.bind(this)}>Music</li>
            </ul>
          </div>
          <ul>
            <h4 className="nav-name">James Kesley Richardson</h4>
          </ul>
          <div>
            <ul>
              <li onClick={this.findWritings.bind(this)}>About</li>
              <li><Link to="/contact" className="link">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
