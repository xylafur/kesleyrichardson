import React from 'react'
import flowers from '../static/pictures/flowers.jpg'

class Picture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false,
      pageX: undefined,
      pageY: undefined
    }
  }

  onHovered(e) {
    e.persist()
    this.setState({hovering: true, pageX: e.pageX, pageY: e.pageY})
  }

  leave(e) {
    this.setState({hovering: false})
  }
  render() {
    var normal = {
      backgroundImage: `url('${flowers}')`,
      backgroundSize: 'cover',
      verticalAlign: 'center',
      backgroundColor: 'white',
      opacity: '0.6',
      transitionDuration: '1s',
    }
    var touched = {
      backgroundImage: `url('${flowers}')`,
      backgroundSize: "cover",
      backgroundColor: "grey",
      transform: "translatex(" + this.state.pageX/80 + "px) translatey("+ this.state.pageY/100 +"px)",
      opacity: "1",
      transitionDuration: "1s",
      transform: 'translatex(20px)'
    }
    var show = {
      "margin": "auto",
      "marginBottom": '10px',
      "color": "white",
      "opacity": '0',
      "transitionDuration": "1.2s",
    }
    var noShow = {
     "margin": "auto",
     "color": "#c8c865",
     "opacity": '1',
     "transitionDuration": '0.5s',
     "transform": "translateY(-10px)",
     "paddingBottom": "30px"
    }
    return (
      <div class="media-container">
        <div style={this.state.hovering ? normal : touched} className="box"  onMouseMove={this.onHovered.bind(this)} onMouseLeave={this.leave.bind(this)}></div>
        <h2 style={this.state.hovering ? noShow : show} className="picture-name">Picture Name</h2>
      </div>
    )
  }
}

export default Picture
