import React from 'react'

class Writings extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="writings">
        <h1 className="writings-kicker">Travels, Prose, and Poetry (AMANDAPASCALI.BLOGSPOT.COM)</h1>
        <h3 className="writings-quote">"I WAS BORN ALONG A DASHED, YELLOW LINE THAT RUNS STRAIGHT THROUGH THE HIGHWAY IN A LAND THAT ISN'T MINE."</h3>
        <p className="final-quote">"To me, instant coffee, the kind that comes in those little packets, the powder that you pour under
boiling hot water, tastes like Italy. And it tastes like my grandmother's apartment in Eastern Europe, the one with drawers full of old Communist love letters and where me and my father would hang our cleanest dirty clothes above the shower. Those instant coffee packets taste like the late nights in Milan when we didn't have enough money for an espresso. It tastes like wondering where you will sleep the next night. And where you'll be tomorrow."</p>
      </div>
    )
  }
}

export default Writings
