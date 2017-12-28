import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../static/contact.scss'

class Contact extends React.Component {
  // onSubmit(e) {
  //   console.log(e)
  //   e.preventDefault();
  //
  //    var target = e.target || e.srcElement;
  //    var i = 0;
  //    var message = '';
  //
  //    // Loop Through All Input Fields
  //    for(i = 0; i < target.length; ++i) {
  //       // Check to make sure it's a value. Don't need to include Buttons
  //       if(target[i].type != 'text' && target[i].type != 'textarea') {
  //              // Skip to next input since this one doesn't match our rules
  //          continue;
  //       }
  //
  //       // Add Input Name and value followed by a line break
  //       message += target[i].name + ': ' + target[i].value + "\r\n";
  //    }
  //    // Modify the hidden body input field that is required for the mailto: scheme
  //    target.elements["body"].value = message;
  //
  //    // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
  //    this.submit();
  // }
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
        <form method="GET" action="mailto:apascali72@gmail.com" encType="text/plain">
	      <div className="field name-box">
		        <input type="text" id="name" placeholder="Who Are You?" name="subject"/>
        		<label htmlFor="name">Name</label>
		        <span className="ss-icon">check</span>
	      </div>

	      <div className="field email-box">
		        <input type="text" id="email" placeholder="name@email.com"/>
		        <label htmlFor="email">Email</label>
		        <span className="ss-icon">check</span>
	      </div>

	      <div className="field msg-box">
		        <textarea id="msg" rows="4" placeholder="Your message goes here..." name="body"/>
		        <label htmlFor="msg">Msg</label>
		        <span className="ss-icon">check</span>
	      </div>

	      <input className="button" type="submit" value="Send" /*onClick={this.onSubmit.bind(this)}*//>
  </form>
</section>
<Footer />
</div>
    )
  }
}

export default Contact
