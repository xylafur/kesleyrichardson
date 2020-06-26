import React from 'react'
import '../static/writings.css'

const Writings = () => {
  return (
    <div className="writingsContainer">
      <h1 className="writings-kicker">About</h1>
      <div className="writings overlay5">
        <div id="bio-wrapper">
          <p className="bio-paragraph">James Kesley Richardson is a Embedded Systems Engineer currently working at IBM Flashsystems in Houston.  Kesley graduated from University of Houston with a degree in Computer Science (with a minor in Computer Engineering Technology and Math) in December of 2019.  Kesley started working at IBM in late 2016 as an Intern and accepted a full time offer after he graduated from College.  While at IBM, Kesley worked on a variety of projects using a number of different technologies and programming enviornments.  Some of these projects include: Flashcard Firmware and Flashcard Userspace Linux Utilities in C, Flashcard Automated Testing using Python3, Web Development for using Meteor.js and Docker, Flashcard performance measurements using Bash and Python and System Level Automated Testing using TCL and Perl.  In addition to his role as a developer, Kesley has acted at Drive Qualification Test Lead for the Houston Flash Systems location.</p>
          <p className="bio-paragraph">In his free time, Kesley enjoys writing and playing music.  Kesley plays Upright Bass with <a href="https://www.amandapascali.com"> Amanda Pascali and the Family.</a>  He also plays a variety of instruments and sings for his solo project.</p>
          <p className="bio-paragraph">In addition to playing Music, Kesley likes reading a variety of different books.  Other than technology and Music, Kesley is interested in Ancient Civilizations (most notably Mesopotamia), Whiskey and Space Exploration and Travel.</p>
          <p className="bio-paragraph">Kesley's side projects are generally devoted towards learning a new skill, such as Audio Signal Processing.</p>
          <p className="bio-paragraph">In the future, Kesley hopes to have a job as a developer or architect in the Space Industry.</p>
        </div>
      </div>
   </div>
  )
}

export default Writings
