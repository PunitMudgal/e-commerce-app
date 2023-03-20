import React from 'react'
import './contact.css'
import contactBg from '../../assets/store_9.jpg'
// import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // const [state, handleSubmit] = useForm("xnqybngj");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  return (
    <>
      <div className='contact-background-img'>
        <img src={contactBg} alt="store" />
      </div>
      <form className='contact-form'   action="https://formspree.io/f/xnqybngj"
  method="POST">
        <h2 className='contact-heading'>CONTACT US</h2>
        <span>Username</span>
        <input type="username" name='username' placeholder='Username'  />

        <span>Email</span>
        <input type="email" name='email' placeholder='Email Address' />

        <span>Message</span>
        <textarea name="message"
        placeholder='Enter Your Message' 
        id="textarea" cols="30" rows="10"></textarea>

      <button type="submit">Send</button>
      </form>
    </>
  )
}
