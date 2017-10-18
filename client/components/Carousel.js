import React from 'react'
import Slider from 'react-slick'

var flowers = require("bundle-loader?lazy!../static/pictures/flowers.jpg")
var family = require("bundle-loader?lazy!../static/pictures/family.jpg")
var happyconcert = require("bundle-loader?lazy!../static/pictures/happyconcert.jpg")

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flowers: null,
      family: null,
      happyconcert: null
    }
  }
  componentDidMount() {
    flowers((file) => {
      console.log(file)
      this.setState({flowers: file})
    })
    family((file) => {
      console.log(file)
      this.setState({family: file})
    })
    happyconcert((file) => {
      console.log(file)
      this.setState({happyconcert: file})
    })
  }
  render () {
    var settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    return (
      <Slider {...settings} style={{"height": "500px"}}>
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": `url(${this.state.flowers})`, "backgroundSize": "cover", "opacity": "0.6", "width": "100%", "height": "auto"}}><h1 className="media">Media</h1></div></div>
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": `url(${this.state.family})`, "backgroundSize": "cover", "opacity": "0.6", "width": "100%", "height": "100%"}}><h1 className="media">Media</h1></div></div>
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": `url(${this.state.happyconcert})`, "backgroundSize": "cover","opacity": "0.6", "width": "100%", "height": "100%"}}><h1 className="media">Media</h1></div></div>
      </Slider>
    )
  }
}

export default SimpleSlider
