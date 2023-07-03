import React from 'react';

import './footer.css';
import social_fb from '../../assets/social-fb.svg';
import social_ig from '../../assets/social-ig.svg';
import social_tt from '../../assets/social-tt.svg';
import logo from '../../assets/logo-small.png';

const Footer = () => {
  return (
    <div className='olp__footer section__padding'>
      <div className='olp__footer-top'>
        <div className='olp__footer-top_logo'>
          <img src={logo} alt="olp logo" />
        </div>
        <div className='olp__footer-top_contacts'>
          <p>Contact No.: 0945-122-8512</p>
          <div className='olp__footer-top_contacts-socials'>
            <a href="https://www.facebook.com/onelancasterparkbypaulhenry" target='_blank' rel='noreferrer'><img src={social_fb } alt="facebook"/></a>
            <a href="https://www.instagram.com/onelancasterpark_official/" target='_blank' rel='noreferrer'><img src={social_ig} alt="instagram"/></a>
            <a href="https://tiktok.com/@onelancasterparkbypaul" target='_blank' rel='noreferrer'><img src={social_tt} alt="tiktok"/></a>
          </div>
        </div>
      </div>
      <div className='olp__footer-bottom'>
        <p>
        © 2023 One Lancaster by Paul | Web Design By Warlon Escander | Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  )
}

export default Footer