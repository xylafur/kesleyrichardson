import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

class Contact extends React.Component {
  render () {
    return (
      <div className="contact">
        <Nav />
      <section id="hire">
        <div className="closing-picture">
          <h1 className="contact-title">Contact</h1>
          <h2 className="plz-contact">For booking and press inquiries, please contact:</h2>
          <h2 className="email">apascali72@gmail.com</h2>
        </div>
        <form>
	      <div className="field name-box">
		        <input type="text" id="name" placeholder="Who Are You?"/>
        		<label for="name">Name</label>
		        <span className="ss-icon">check</span>
	      </div>

	      <div className="field email-box">
		        <input type="text" id="email" placeholder="name@email.com"/>
		        <label for="email">Email</label>
		        <span className="ss-icon">check</span>
	      </div>

	      <div className="field msg-box">
		        <textarea id="msg" rows="4" placeholder="Your message goes here..."/>
		        <label for="msg">Msg</label>
		        <span className="ss-icon">check</span>
	      </div>

	      <input className="button" type="submit" value="Send" />
  </form>
</section>
<Footer />
</div>
    )
  }
}

export default Contact
