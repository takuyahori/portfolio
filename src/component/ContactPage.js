import React, { useState } from 'react'
import { send } from 'emailjs-com';

const ContactPage = () => {

  const [ name, setName ] = useState("");
  const [ mailAddress, setMailAddress ] = useState("");
  const [ message, setMessage ] = useState("");

  
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleMail = (e) => {
    setMailAddress(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const sendMail = (e) => {
    e.preventDefault();
    send(
      'service_cjhg1c8',
      'template_u999xnh',
      { name, mailAddress, message },
      'eWFO3EkLuVxWTVWq5'
    )
    .then((response) => {
      console.log('Message sent successfully', response.status, response.text)
    })
    .catch((err) => {
      console.log('Failed', err)
    })
  }

  return (
    <section className="contact">
      <h1>Contact Form</h1>
      <hr />
      <form className='contact__form' onSubmit={sendMail}>
        <div className='contact__wrap'>
          <div className='contact__left'>
            <div className='contact__field'>
              <label>Name</label>
              <input
                type='text' 
                name='name'
                value={name}
                onChange={handleName}
              />
            </div>
            <div className='contact__field'>
              <label>Mail</label>
              <input
                type='text' 
                name='mailAddress' 
                value={mailAddress}
                onChange={handleMail}
              />
            </div>
          </div>
          <div className='contact__right'>
            <div className='contact__field'>
              <label>Message</label>
              <input 
                type='text' 
                name='message'
                value={message}
                onChange={handleMessage}
              />
            </div>
          </div>
        </div>
        <div className='contact__send'>
          <button>send</button>
        </div>
      </form>
    </section>
  )
}

export default ContactPage