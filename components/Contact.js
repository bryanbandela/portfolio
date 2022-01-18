import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const content = { name: name, mail: mail, message: message };
    // const data = JSON.stringify(content);
    console.log('This is frontent', content);
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: data,
    // };
    try {
      const promise = await axios.post(`/api/mail`, content);

      if (promise) {
        console.log('Your response from backend', promise);
        setSubmit(false);
        setName('');
        setMail('');
        setMessage('');
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.contact} id="Contact">
      <div className={styles.title}>
        <p>
          <span>03.</span> Contact me
        </p>
        <span className={styles.line}></span>
      </div>
      <div className={styles.form}>
        <p>
          Feel free to send me an e-mail on:{' '}
          <span>bryan.bandela@gmail.com</span>.
        </p>
        <p>Alternatively, you can also drop a mail here!</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.div_name}>
            <label htmlFor="name" className={styles.name}></label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="Name*"
              autoComplete="off"
              required
            ></input>
          </div>
          <div className={styles.email}>
            <label htmlFor="email" className={styles.email}></label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              onChange={(e) => {
                setMail(e.target.value);
              }}
              placeholder="Email*"
              value={mail}
              required
            ></input>
          </div>
          <div className={styles.message}>
            <label htmlFor="text" className={styles.message}></label>
            <textarea
              id="text"
              rows="8"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Message*"
              value={message}
            ></textarea>
          </div>
          <span className={styles.success}>
            {sent ? 'Thank you! Your email has been sent succesfully' : ''}
          </span>
          <button type="submit">{submit ? 'Sending...' : 'Submit'}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
