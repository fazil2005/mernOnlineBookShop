import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
         <h1>Stay Connected!</h1>
        <p>Subscribe to our newsletter and be the first to know about new book releases, exclusive discounts, and special offers!</p>
      <div className="contact-email">
        <input type="text" placeholder='Your Email' />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact
