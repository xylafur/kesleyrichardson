import React from 'react'
import Slider from 'react-slick'
import Amanda1 from '../static/pictures/Amanda1.jpg'
import Amanda2 from '../static/pictures/Amanda2.jpg'
import family from '../static/pictures/family.jpg'
import flowers from '../static/pictures/flowers.jpg'
import happyconcert from '../static/pictures/happyconcert.jpg'
import ocean from '../static/pictures/ocean.jpg'

class SimpleSlider extends React.Component {
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
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": "url('"+ Amanda1 +"')", "backgroundSize": "cover", "opacity": "0.6", "width": "100%", "height": "auto"}}><h1 className="media">Media</h1></div></div>
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": "url('"+ Amanda2 +"')","backgroundSize": "cover", "opacity": "0.6", "width": "100%", "height": "auto"}}><h1 className="media">Media</h1></div></div>
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": "url('"+ family +"')", "backgroundSize": "cover", "opacity": "0.6", "width": "100%", "height": "auto"}}><h1 className="media">Media</h1></div></div>
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": "url('"+ ocean +"')", "backgroundSize": "cover", "opacity": "0.6", "width": "100%", "height": "100%"}}><h1 className="media">Media</h1></div></div>
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": "url('"+ happyconcert +"')", "backgroundSize": "cover","opacity": "0.6", "width": "100%", "height": "100%"}}><h1 className="media">Media</h1></div></div>
        <div className="overlay-media"><div className="slider" style={{"backgroundImage": "url('"+ flowers +"')", "backgroundSize": "cover", "opacity": "0.6","width": "100%", "height": "100%"}}><h1 className="media">Media</h1></div></div>
      </Slider>
    )
  }
}

export default SimpleSlider
