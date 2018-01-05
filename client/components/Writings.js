import React from 'react'
import '../static/writings.css'

const Writings = () => {
  return (
    <div className="writingsContainer">
      <div className="writings overlay5" style={{"height": `${window.innerHeight - 200}px`}}>
        <h1 className="writings-kicker">Travels, Prose, and Poetry <a href="http://amandapascali.blogspot.com/">(AMANDAPASCALI.BLOGSPOT.COM)</a></h1>
        <h3 className="writings-quote">"I was born along a dashed, yellow line that runs straight through the highway in a land that isn't mine."</h3>
        <p className="final-quote">The subway rumbles beneath our feet. In that moment, running down the staircase, we are alive in another lifetime. Now, we are the ones in motion as the world around us nears a full and complete stop. We are flying down the stairs into the subway station where we first met, not too long ago. But wasn’t it? A day ago? A lifetime ago? We rush past the magazine and newspaper stands covered in red, white, and blue. It reminds me of “home.” I don’t want to leave and before I have no other choice, Ligia Miranescu tugs me into the subway car.</p>
        <h4 className="america1">“America needs you, America kisses you, never forget that America misses you.”</h4>
      </div>
   </div>
  )
}

export default Writings
