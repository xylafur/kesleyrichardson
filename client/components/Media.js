import React, { Component } from 'react'
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

class Media extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUris: [
        'https://ucarecdn.com/e9c2821c-f145-446c-b619-5a4347e9981a/DSC_0598.JPG',
        'https://ucarecdn.com/befb29be-177c-4d63-a754-c6741e82d54b/DSC_0257.JPG',
        'https://ucarecdn.com/1c185faa-0c79-42e2-9bd0-e1988272f6d0/DSC_0175.JPG',
        'https://ucarecdn.com/ec3dda13-7f7a-4d9d-8c3d-78f6ea7503c0/DSC_0096.JPG',
        'https://ucarecdn.com/cd547a4e-c522-4cb0-9f83-fe9773bea99b/12401936_944180108962862_3579340951115520449_o.jpg'
      ],
      size: 3
    }
  }

  componentDidMount() {
    amanda1((file) => {
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    amanda2((file) => {
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    flowers((file) => {
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    family((file) => {
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    happyconcert((file) => {
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    awwe((file) => {
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    prettyawesome((file) => {
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    reallyprettypicture((file) => {
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
    italyletter((file) => {
      this.setState({imageUris: this.state.imageUris.concat(file)})
    })
  }

  render () {
    const styles = {
      normal: {
        "background-color": "black",
        "opacity": "1"
      },
      touched: {
        "opacity": "1"
      },
      imageCell: {
        'overflowY': 'hidden'
      },
      table: {
        'marginTop': '5%'
      }
    }

    return (
      <div>
        <Nav />
        <SimpleSlider/>
        <table style={styles.table}>
        <tbody className="cards-container">
       {
         this.state.imageUris.reduce((acc, cur, i) => {
           if(!(i % this.state.size)) {
              acc.push(this.state.imageUris.slice(i, i + this.state.size))
           }
        return acc
        }, [])
        .map((row, i) => <tr style={styles.imageCell} key={i}>{ [...row].map(c => <td><Images imageUri={c}/></td>)}</tr>)
       }
     </tbody>
    </table>
      </div>
    )
  }
}

export default Media
