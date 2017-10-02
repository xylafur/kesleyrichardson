import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

class Contact extends React.Component {
  render () {
    return (
      <div className="contact">
        <Nav />
        <h1>Contact</h1>
        <form>
          <label>Name *</label>
          <div>
            <input/> <input/>
            <label>First Name</label> <label>Last Name</label>
          </div>
          <label>Email Address *</label>
          <div>
            <input/>
          </div>
          <label>Subject *</label>
          <div>
            <input/>
          </div>
          <label>Message *</label>
          <div>
            <input/>
          </div>
          <button type='submit'>Submit</button>
        </form>
        <Footer />
      </div>
    )
  }
}

export default Contact
