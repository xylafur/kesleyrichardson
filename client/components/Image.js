import React from 'react'

class Images extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <figure className="snip1446">
        <figure className="snip1577">
        <img src={this.props.imageUri} />
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
