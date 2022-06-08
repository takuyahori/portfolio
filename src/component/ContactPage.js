import React, { useState } from 'react'
import { send } from 'emailjs-com';
import { useTrail, animated } from 'react-spring';

const title = ["C", "o", "n", "t", "a", "c", "t", " ", "F", "o", "r", "m"];
const config = { mass: 5, tension: 800, friction: 200 };

const ContactPage = () => {

  /* input要素内に文字を入力したときの各属性値の空の変数 */
  const initialValues = { name: "", mailAddress: "", message: "" };

  /* 上記の変数に値を格納していくためのuseState。入力するたびテキストが値として変数に格納される。 */
  const [formValues, setFormValues] = useState(initialValues);

    /* 上記の各属性のエラーとそのメッセージ内容を格納するuseState */
  const [formErrors, setFormErrors] = useState({});
  const [ isSubmit, setIsSubmit ] = useState(false);

  /* フォームにテキストが入力されたら */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendMail = (e) => {
    e.preventDefault();
    //ログイン情報を送信する前にバリデーションチェック
    /* errorsのuseStateの状態を更新するため。 formValuesに入った値がvalidate関数でエラーかどうか判断される*/
    //setFormErrors(validate(formValues));
    const err = validate(formValues);
    if(Object.keys(err).length > 0) {
      setFormErrors(err);
      return;
    }
    setIsSubmit(true);
    
    /* メール送信処理 */
    if(Object.keys(formErrors).length > 0) {
      send(
        'service_cjhg1c8',
        'template_u999xnh',
        { formValues },
        'eWFO3EkLuVxWTVWq5'
      )
    };
  };

  /* 各項目バリデーションチェック関数 */
  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    if(!values.name) {
      errors.name = "名前を入力してください。";
    }
    if(!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください。";
    } else if(!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください。"
    }
    if(!values.message) {
      errors.message = "メッセージを入力してください。";
    }
    return errors;
  };

  const [ toggle, setToggle ] = useState(true);
  const trail = useTrail(title.length, {
    config,
    opacity: toggle ? 1 : 0,
    from: { opacity : 0 }
  });

  return (
    <section className="contact" onLoad={() => setToggle(toggle => !toggle)}>
      <div className='line'></div>
      <div className='inner'>
        <h2 className='contact__text'>
          {trail.map(({ ...rest }, index) => (
            <animated.span
              key={title[index]}
              style={{
                ...rest
              }}
            >
              <animated.span>{title[index]}</animated.span>
            </animated.span>
          ))}
        </h2>
        <form className='contact__form' onSubmit={sendMail}>
          <div className='contact__wrap'>
            <div className='contact__left'>
              <div className='contact__field'>
                <label>Name</label>
                <input
                  type='text' 
                  name='name'
                  value={formValues.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <p className='contact__error'>{formErrors.name}</p>
              <div className='contact__field'>
                <label>Mail</label>
                <input
                  type='text' 
                  name='mailAddress' 
                  value={formValues.mailAddress}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <p className='contact__error'>{formErrors.mailAddress}</p>
            </div>
            <div className='contact__right'>
              <div className='contact__field'>
                <label>Message</label>
                <input 
                  type='text' 
                  name='message'
                  value={formValues.message}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <p className='contact__error'>{formErrors.message}</p>
            </div>
          </div>
          <div className='contact__send'>
            <button>send</button>
            {Object.keys(formErrors).length > 0 && isSubmit && (
              <div className='content__messageOk'>送信完了しました。</div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
};

export default ContactPage