import {useEffect} from 'react';
import { motion } from 'framer-motion';


import './header.css';
import logo from './../../assets/logo-big.png'

const Header = ({id, setActiveDot}) => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

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
    <div id={id} className='olp__header '>
      <div className='olp__header-overlay section__padding'>
        <div className='olp__header-content'>
          <div className='olp__header-content_logo'>
            <img src={logo} alt="One lancaster logo" />
          </div>
          <motion.div
            whileInView={{ y: [100,0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__header-info'
          >
            <div className='olp__header-content_text'>
              <h1>Metro. Nature. <br /> <span>In One.</span></h1>
              <p>Your Family Deserves The Best</p>
            </div>
          </motion.div>
          
          <div className='olp__header-content_button'>
            <a href="https://calendly.com/escanderpaulhenry/15minutes" target='_blank' rel='noreferrer'>Schedule a Visit</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header