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
    shouldShow: false,
  }
  this.handleScroll = this.handleScroll.bind(this);
}

handleScroll(event) {
  if (window.scrollY >= document.getElementsByClassName('shows')[0].clientHeight - 500 ) {
    this.setState({shouldShow: true})
  } else {
    this.setState({shouldShow: false})
  }
}

  render() {
    const styles = {
      nav: {
        "position": 'fixed',
        "top": '0',
        "zIndex": '1',
        "backgroundColor": 'black',
        "width": '100%'
      }
    }
    return (
        <div>
          <Home layer1={'https://ucarecdn.com/e891bb07-54a0-4a07-9d21-08fb4fbb5b45/picture1.jpg'}/>
        {
          this.state.shouldShow && <Nav shouldShow="true" style={styles.nav}/>
        }
        <Shows layer2={'https://ucarecdn.com/01c2339a-9780-4d2a-bbad-2d6133706d4d/backposition.jpg'} events={events}/>
        <Music layer3={'https://ucarecdn.com/714a1d02-59a5-4997-adc3-04ce1fb086d9/veneziaboy.jpg'}/>
        <Writings layer4={'https://ucarecdn.com/88803bfc-98a7-451b-bf22-154d30770791/italy.jpg'}/>
        <Footer />
      </div>
    )
  }
}

export default App
