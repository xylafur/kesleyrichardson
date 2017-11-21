import React from 'react'

class Writings extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div style={{"backgroundImage": `url(${this.props.layer4})`, "backgroundSize":"cover", "opacity": `${this.props.layer4 ? 0.7 : 0.4}`, "backgroundAttachment": "fixed", "backgroundRepeat": "no-repeat", "height": `${90}%`}}>
      <div className="writings overlay5" style={{"height": `${window.innerHeight - 200}px`}}>
        <h1 className="writings-kicker">Travels, Prose, and Poetry <a href="http://amandapascali.blogspot.com/">(AMANDAPASCALI.BLOGSPOT.COM)</a></h1>
        <h3 className="writings-quote">"I WAS BORN ALONG A DASHED, YELLOW LINE THAT RUNS STRAIGHT THROUGH THE HIGHWAY IN A LAND THAT ISN'T MINE."</h3>
        <p className="final-quote">

The subway rumbles beneath our feet. In that moment, running down the staircase, we are alive in another lifetime. Now, we are the ones in motion as the world around us nears a full and complete stop. We are flying down the stairs into the subway station where we first met, not too long ago. But wasn’t it? A day ago? A lifetime ago? We rush past the magazine and newspaper stands covered in red, white, and blue. It reminds me of “home.” I don’t want to leave and before I have no other choice, Ligia Miranescu tugs me into the subway car.</p>

<h4 className="america1">“America needs you, America kisses you, never forget that America misses you.”</h4>
      </div>
    </div>
    )
  }
}

export default Writings
