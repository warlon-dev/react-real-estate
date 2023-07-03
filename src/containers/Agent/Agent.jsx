import { useEffect } from 'react'

import './agent.css'
import agentImg from '../../assets/agent.jpg'

const Agent = ({ id, setActiveDot }) => {
  
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
    <div id={id} className='olp__agent' >
      <div className='olp__agent-overlay section__padding'>
      <h1>MEET YOUR AGENT</h1>
      <div className='olp__agent-container'>
        <div className='olp__agent-container_image'>
          <img src={agentImg} alt="agent" />
        </div>

        <div className='olp__agent-container_content'>
          <div>
            <h2>Hi! I'm Paul Henry</h2>
            <h3>And I am here to help you through every step of the way. Whether you are looking to invest or to have your own dream home, I'll work with you to ensure the process is seamless and successful. </h3>
          </div>
          <div className='olp__agent-cta'>
            <h4>ARE YOU READY TO EXPERIENCE METRO NATURE IN ONE?</h4>
            <a className='cta__button' href="https://calendly.com/escanderpaulhenry/15minutes" target='_blank' rel='noreferrer'>
              <h5>SCHEDULE A VISIT</h5>
              <p>Let me book a free site tour now</p>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Agent