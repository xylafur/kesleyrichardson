import React from 'react'
import Slider from 'react-slick'
// import Amanda2 from '../static/pictures/Amanda2.jpg'
// import family from '../static/pictures/family.jpg'
// import flowers from '../static/pictures/flowers.jpg'
// import happyconcert from '../static/pictures/happyconcert.jpg'
// import ocean from '../static/pictures/ocean.jpg'
//
var Amanda1 = require("bundle-loader?lazy!../static/pictures/Amanda1.jpg")
var Amanda2 = require("bundle-loader?lazy!../static/pictures/Amanda2.jpg")
var flowers = require("bundle-loader?lazy!../static/pictures/flowers.jpg")
var family = require("bundle-loader?lazy!../static/pictures/family.jpg")
var happyconcert = require("bundle-loader?lazy!../static/pictures/happyconcert.jpg")
var ocean = require("bundle-loader?lazy!../static/pictures/ocean.jpg")

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amanda1: null,
      amanda2: null,
      flowers: null,
      family: null,
      happyconcert: null,
      ocean: null
    }
  }
  componentDidMount() {
    Amanda1((file) => {
      console.log(file)
      this.setState({amanda1: file})
    })
    Amanda2((file) => {
      console.log(file)
      this.setState({amanda2: file})
    })
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
    ocean((file) => {
      console.log(file)
      this.setState({ocean: file})
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
