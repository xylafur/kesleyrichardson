import React from 'react'
import Show from './Show'
import layer2 from '../static/pictures/backposition.jpg'

class Shows extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
        <div style={{"backgroundImage": "url(" + "'" + layer2 + "')", "backgroundSize":"cover", "backgroundColor": "rgba(0,0,0, 1)", "opacity": "0.8", "backgroundAttachment": "fixed", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "text-align": "center"}} className="overlay2">
      <div className="shows overlay2" >

          <h1 className="title-show">Shows</h1>
          {
            this.props.events.events.map((event, i) => <Show event={event} key={i}/>)
          }
        </div>
      </div>
    )
  }
}

export default Shows
