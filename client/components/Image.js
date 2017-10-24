import React from 'react'

class Images extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false
    }
  }

  isClicked() {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    var style = this.props.imageUri.includes('97e3') ? 'rotate(-90deg)' : this.props.imageUri.includes('1d93') || this.props.imageUri.includes('6340') ? 'rotate(90deg)' : null
    return (
      <figure className="snip1446">
        <figure className="snip1577">
        <img onClick={this.isClicked.bind(this)} style={{ 'transform': `${style}`, 'backgroundPosition': 'cover', "width": '100%', 'display': 'fixed'}} src={this.props.imageUri} />
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
