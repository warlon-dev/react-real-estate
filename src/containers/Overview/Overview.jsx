import { useEffect } from 'react'

import './overview.css'
import project from '../../assets/project.webp'
import { Stats } from '../../components'


const statsData = [
  {
    value : "70%",
    text : "Open Space"
  },
  {
    value : "10",
    text : "Hectares"
  },
  {
    value : "10",
    text : "Minutes away from Cavitex"
  },
  {
    value : "30",
    text : "Minutes away from Manila Int'l Airport"
  }
]

const Overview = ({id, setActiveDot}) => {

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
    <div id={id} className='olp__overview '>
      <div className='olp__overview-image'> 
        <img src={project} alt="project" />
      </div> 
      
      <div className='olp__overview-content section__margin '>
        <div className='olp__overview-content_container '>
          <h1>The Project <br /> Overview</h1>
          <div className="divider__dark"></div>
          <p>
            <span>
                One Lancaster Park (OLP) is the first and only condominium project in Lancaster New City, Imus, Cavite that combines the convenience of the metro combined with the tranquility of the suburbs. Developed by Famtech Properties, OLP allows its future residents to live a comfortable life where everyone can find a balance between work and play.
            </span>
            <br />
            <br />
            Condo living can be challenging for some with limited space, noise and privacy as some major issues. Here at OLP, we’re not just providing you a space to live, we want you to feel at home while you flourish. Whether you want to stay active or just simply enjoy a laid back afternoon, open spaces and greeneries are available for you and your family to enjoy. No need to travel somewhere distant just to relax and unwind.
            <br />
            <br />
            One Lancaster Park offers a 7-hectare park where you can practice green living and enjoy all kinds of activities without the noise and busyness of the city.
          </p>
          <div className='olp__overview-content_stats'>
            {statsData.map((item,index) => (
              <Stats value={item.value} text={item.text} key={item.text+index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview;