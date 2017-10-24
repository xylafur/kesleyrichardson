import React from 'react'
import Slider from 'react-slick'

var family = require("bundle-loader?lazy!../static/pictures/family.jpg")

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      family: null,
    }
  }
  componentDidMount() {
    family((file) => {
      console.log(file)
      this.setState({family: file})
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
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": `url(${this.state.family})`, "backgroundSize": "cover", "opacity": "0.6", "width": "100%", "height": "100%"}}><h1 className="media">Media</h1></div></div>
      </Slider>
    )
  }
}

export default SimpleSlider
