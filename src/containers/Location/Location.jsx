import { useEffect } from 'react'

import './location.css'

const Location = ({ id, setActiveDot }) => {

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
    <div id={id} className='olp__location section__padding'>
      <div className='olp__location-container'>
        <h1>LOCATION MAP</h1>
        <div className='divider__dark'/>
        <div className='olp__location-map'>
            <iframe name='google-map' title='google_map' style={{border: 0}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15457.91966823349!2d120.9077563!3d14.3994759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3226b869dbf%3A0x7ee7d0c386c4ce20!2sFamtech%20Properties%20Inc!5e0!3m2!1sen!2sph!4v1678851980759!5m2!1sen!2sph" width="100%" height="830px" allowfullscreen="allowfullscreen" data-gtm-yt-inspected-10="true">
            </iframe>

        </div>
      </div>
    </div>
  )
}

export default Location