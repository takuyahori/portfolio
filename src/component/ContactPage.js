import React, { useState, useEffect } from 'react'
import { send } from 'emailjs-com';
import { useTrail, animated } from 'react-spring';

const title = ["C", "o", "n", "t", "a", "c", "t", " ", "F", "o", "r", "m"];
const config = { mass: 5, tension: 800, friction: 200 };



export const ContactPage = () => {

  const [ toggle, setToggle ] = useState(true);
  const trail = useTrail(title.length, {
    config,
    opacity: toggle ? 1 : 0,
    from: { opacity : 0 }
  });

  /* input要素内に文字を入力したときの各属性値の空の変数 */
  const initialValues = { name: "", email: "", message: "" };

  /* 上記の変数に値を格納していくためのuseState。入力するたびテキストが値として変数に格納される。 */
  const [formValues, setFormValues] = useState(initialValues);

  const [ status, setStatus ] = useState('');

  const handleChange = (e) => {
    setFormValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }));
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send('service_cjhg1c8', 'template_u999xnh', { formValues }, 'eWFO3EkLuVxWTVWq5')
      .then(response => {
        console.log('SUCCESS!', response);
        setFormValues({
          name: '',
          email: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status])

  
  return (
    <section className="contact" onLoad={() => setToggle(toggle => !toggle)}>
      <div className='line'></div>
      <div className='inner'>
        <h2 className='contact__text'>
          {trail.map(({ ...rest }, index) => (
            <animated.span
              key={index}
              style={{
                ...rest
              }}
            >{title[index]}
            </animated.span>
          ))}
        </h2>
        <form className='contact__form' onSubmit={(e) => handleSubmit(e)}>
          <div className='contact__wrap'>
            <div className='contact__left'>
              <div className='contact__field'>
                <label>Name</label>
                <input
                  type='text' 
                  name='name'
                  placeholder='name'
                  value={formValues.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='contact__field'>
                <label>Email</label>
                <input
                  type='text' 
                  name='email' 
                  placeholder='email'
                  value={formValues.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className='contact__right'>
              <div className='contact__field'>
                <label>Message</label>
                <input 
                  type='text' 
                  name='message'
                  placeholder='message'
                  value={formValues.message}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className='contact__send'>
            <button>send</button>
            {status && renderAlert()}
          </div>
        </form>
      </div>
    </section>
  )
};

const renderAlert = () => (
  <div className='contact__alert'>
    <p>your message submitted successfully</p>
  </div>
)

export default ContactPage