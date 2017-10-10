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

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    shouldShow: false
  }
  this.handleScroll = this.handleScroll.bind(this);
}

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(event) {
  console.log(window.scrollY)
  if (window.scrollY >= document.getElementsByClassName('shows')[0].clientHeight - 200 ) {
    this.setState({shouldShow: true})
    console.log('the scroll things', event)
  } else {
    this.setState({shouldShow: false})
  }
}

  render() {
    return (
        <div>
          <Home/>
        {
          this.state.shouldShow ? <Nav shouldShow="true" style={{"position":"fixed", "top": '0', "zIndex": '1', "backgroundColor": "black", "width": '100%'}}/>: null
        }
        <Shows events={events}/>
        <Music />
        <Writings />
        <Footer />
      </div>
    )
  }
}

export default App
