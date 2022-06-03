import React from 'react'

const ContactPage = () => {
  return (
    <section className="contact">
      <h1>Contact Form</h1>
      <hr />
      <div className='contact__wrap'>
        <div className='contact__left'>
          <form className='contact__form'>
            <div className='contact__field'>
              <label>Name</label>
              <input type='text' name='name'></input>
            </div>
          </form>
          <form className='contact__form'>
            <div className='contact__field'>
              <label>Mail</label>
              <input type='text' name='mailAddress'></input>
            </div>
          </form>
        </div>
        <div className='contact__right'>
          <form className='contact__form'>
            <div className='contact__field'>
              <label>Message</label>
              <input type='text' name='message'></input>
            </div>
          </form>
        </div>
      </div>
      <div className='contact__send'>
         <button>send</button>
      </div>
    </section>
  )
}

export default ContactPage