import React, { useEffect, useState, useRef } from 'react'
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7u5dth5', 'template_br3hnlc', form.current, 'user_4ioYM3wtkI4r5pqumoIwV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='form-control' type="text" name="user_name" />
      <label>Email</label>
      <input  className='form-control' type="email" name="user_email" />
      <label>Message</label>
      <textarea  className='form-control' name="message" />
      <input className='btn btn-primary' type="submit" value="Send" />
    </form>
  );
}


export default Contact;
