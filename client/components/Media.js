import React from 'react'
import Nav from './Nav'
import Picture from './Picture'
import SimpleSlider from './Carousel'
import Images from './Image'

var flowers = require("bundle-loader?lazy!../static/pictures/flowers.jpg")
var family = require("bundle-loader?lazy!../static/pictures/family.jpg")
var happyconcert = require("bundle-loader?lazy!../static/pictures/happyconcert.jpg")
var amanda1 = require("bundle-loader?lazy!../static/pictures/Amanda1.jpg")
var amanda2 = require("bundle-loader?lazy!../static/pictures/Amanda2.jpg")
var awwe = require("bundle-loader?lazy!../static/pictures/awwe.jpg")
var prettyawesome = require("bundle-loader?lazy!../static/pictures/prettyawesome.jpg")
var reallyprettypicture = require("bundle-loader?lazy!../static/pictures/reallyprettypicture.jpg")
var italyletter = require("bundle-loader?lazy!../static/pictures/italyletter.jpg")

class Media extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUris: [],
      size: 3
    }
  }

  componentDidMount() {
    amanda1((file) => {
      console.log(file)
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    amanda2((file) => {
      console.log(file)
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    flowers((file) => {
      console.log(file)
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    family((file) => {
      console.log(file)
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    happyconcert((file) => {
      console.log(file)
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    awwe((file) => {
      console.log(file)
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    prettyawesome((file) => {
      console.log(file)
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    reallyprettypicture((file) => {
      console.log(file)
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    italyletter((file) => {
      console.log(file)
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
  }

  render () {
    var normal = {
      "background-color": "black",
      "opacity": "1"
    }
    var touched = {
      "opacity": "1"
    }

    return (
      <div>
        <Nav />
        <SimpleSlider />
        <table>
        <tbody className="cards-container">
       {
         this.state.imageUris.reduce((acc, cur, i) => {
           if(!(i % this.state.size)) {
              acc.push(this.state.imageUris.slice(i, i + this.state.size))
           }
        return acc
        }, [])
        .map((row, i) => <tr key={i}>{ [...row].map(c => <td><Images imageUri={c}/></td>)}</tr>)
       }
     </tbody>
    </table>
      </div>
    )
  }
}

export default Media
