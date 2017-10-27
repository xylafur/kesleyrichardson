import React from 'react'
import Home from './Home'
import Shows from './Shows.jsx'
import Music from './Music'
import Nav from './Nav'
import Writings from './Writings'
import Footer from './Footer'
import Contact from './Contact'
import Media from './Media'
import events from '../data/events'
import '../static/footer.css'
import '../static/home.css'
import '../static/music.css'
import '../static/shows.css'
import '../static/writings.css'
import '../static/contact.scss'
import '../static/media.css'
import '../static/text-decorations.css'

var layer1 = require("bundle-loader?lazy!../static/pictures/picture1.jpg")
var layer2 = require("bundle-loader?lazy!../static/pictures/backposition.jpg")
var layer3 = require("bundle-loader?lazy!../static/pictures/veneziaboy.jpg")
var layer4 = require("bundle-loader?lazy!../static/pictures/italy.jpg")

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    shouldShow: false,
    layer1: false,
    layer2: false,
    layer3: false,
    layer4: false
  }
  this.handleScroll = this.handleScroll.bind(this);
}

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
  layer1((file) => {
    console.log('this is pitcure 1', file)
    this.setState({layer1: file})
  })
  layer2((file) => {
    console.log('this is back position', file)
    this.setState({layer2: file})
  })
  layer3((file) => {
    console.log('this is veneziaboy', file)
    this.setState({layer3: file})
  })
  layer4((file) => {
    console.log('this is italy', file)
    this.setState({layer4: file})
  })
}

handleScroll(event) {
  console.log(window.scrollY)
  if (window.scrollY >= document.getElementsByClassName('shows')[0].clientHeight - 500 ) {
    this.setState({shouldShow: true})
    console.log('the scroll things', event)
  } else {
    this.setState({shouldShow: false})
  }
}

  render() {
    return (
        <div>
          <Home layer1={this.state.layer1}/>
        {
          this.state.shouldShow ? <Nav shouldShow="true" style={{"position":"fixed", "top": '0', "zIndex": '1', "backgroundColor": "black", "width": '100%'}}/>: null
        }
        <Shows layer2={this.state.layer2} events={events}/>
        <Music layer3={this.state.layer3}/>
        <Writings layer4={this.state.layer4}/>
        <Footer />
      </div>
    )
  }
}

export default App
