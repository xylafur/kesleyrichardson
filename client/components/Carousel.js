import React from 'react'
import Slider from 'react-slick'

class SimpleSlider extends React.Component {
  render () {
    var settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    return (
      <Slider {...settings}>
        <div className="slider"><h1 className="media">Media</h1></div>
        <div className="slider"><h1 className="media">Media</h1></div>
        <div className="slider"><h1 className="media">Media</h1></div>
        <div className="slider"><h1 className="media">Media</h1></div>
        <div className="slider"><h1 className="media">Media</h1></div>
        <div className="slider"><h1 className="media">Media</h1></div>
      </Slider>
    )
  }
}

export default SimpleSlider
