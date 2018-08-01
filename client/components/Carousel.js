import React from 'react'
import Slider from 'react-slick'
import '../static/media.css'
const family = require("../static/pictures/family.jpg")

const SimpleSlider = () => {
  const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
  }
  return (
    <Slider className="sliderContainer" {...settings}>
      <div className="overlay-media">
        <div className="slider media" style={{backgroundImage: `url(${family})`}}>
          <h1 className="media">Media</h1>
        </div>
      </div>
    </Slider>
  )
}

export default SimpleSlider
