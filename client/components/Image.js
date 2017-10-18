import React from 'react'

class Images extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var style = this.props.imageUri.includes('97e3') ? 'rotate(-90deg)' : this.props.imageUri.includes('1d93') || this.props.imageUri.includes('6340') ? 'rotate(90deg)' : null
    return (
      <figure className="snip1446">
        <figure className="snip1577">
        <img style={{ 'transform': `${style}` }} src={this.props.imageUri} />
        <figcaption>
          <h3>{this.props.image}</h3>
          <h4>{this.props.date}</h4>
        </figcaption>
      </figure>
    </figure>
    )
  }
}

export default Images
