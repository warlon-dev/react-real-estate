import {useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'

const Contact = ({ id, setActiveDot }) => {
  const [messageSent, setMessageSent] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_xi1dnaw','template_hcwaoci',e.target,'MpjwJ5dhmZz1vHkWn')
    setMessageSent(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();
      const isVisible = (rect.top+100) >= 0 && (rect.bottom-200) <= window.innerHeight;
      console.log(rect )

      if (isVisible) {
        setActiveDot(id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id, setActiveDot]);
  return (
    <div id={id} className='olp__contact section__padding'>
      <h1>LEAVE ME A MESSAGE</h1>
      <div className='olp__contact-form'>
        {!messageSent
        ? <form onSubmit={sendEmail}>
            <div className='olp__contact-form_inputs'>
              <div className='olp__contact-fname'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name='first_name' required/>
              </div>
              <div className='olp__contact-lname'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name='last_name' required/>
              </div>
              <div className='olp__contact-mobile'>
                <label htmlFor="contactNo">Mobile No.</label>
                <input type="tel" id="contactNo" name='contact_no' required />
              </div>
              <div className='olp__contact-email'>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name='email_from' required/>
              </div>
              <div className='olp__contact-message'>
                <label htmlFor="message">Message</label>
                <textarea id='message' name="message" cols="30" rows="10" required>
              </textarea></div>
            </div>
            <div className='olp__contact-form_button'>
              <button type='submit'>SUBMIT</button> 
            </div>
          </form>
        : <div className='olp__contact-thankyou'>
            <h1>Your message has been sent!</h1>
            <p>Please allow me to check and respond to your email within the next 24 hours</p>
          </div>
      }

      </div>
    </div>
  )
}

export default Contact