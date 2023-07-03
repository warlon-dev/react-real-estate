import {useState, useEffect} from 'react'

import './showroom.css'

const Showroom = ({ id, setActiveDot }) => {
  const [fullscreen, setFullscreen] = useState(false);

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
    <div id={id} className='app__showroom '>
      <h1>VIRTUAL TOUR</h1>
      <div className='app__showroom-container'>
        <iframe src='https://storage.net-fs.com/hosting/6583958/17/' title='showroom_normal'  />

        <div className='app__showroom-cover'> 
          <button type='button' onClick={() => setFullscreen(true)}>View Fullscreen</button>
        </div>
      </div>
      {fullscreen && (
          <div className='app__showroom-overlay' >
            <iframe src='https://storage.net-fs.com/hosting/6583958/17/' title='showroom_fullscreen' />
            <button type='button' onClick={() => setFullscreen(false)}>Exit Fullscreen</button>
          </div>
        )}
    </div>
  )
}

export default Showroom