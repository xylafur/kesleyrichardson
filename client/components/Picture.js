import React from 'react'

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
    console.log(e.pageX, e.pageY)
    this.setState({hovering: true, pageX: e.pageX, pageY: e.pageY})
  }

  leave(e) {
    this.setState({hovering: false})
  }
  render() {
    var normal = {
      "vertical-align": "center",
      "background-color": "black",
      "opacity": "0.8",
      "transition-duration": "1s",
    }
    var touched = {
      "background-color": "black",
      "transform": "translatex(" + this.state.pageX/80 + "px) translatey("+ this.state.pageY/100 +"px)",
      "opacity": "1",
      "transition-duration": "1s",
      "transform": 'translatex(20px)'
    }
    var show = {
      "margin": "auto",
      "margin-bottom": '10px',
      "color": "white",
      "opacity": '0',
      "transition-duration": "1.2s",
    }
    var noShow = {
     "margin": "auto",
     "color": "black",
     "opacity": '1',
     "transition-duration": '0.5s',
     "transform": "translateY(-10px)",
     "padding-bottom": "30px"
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
