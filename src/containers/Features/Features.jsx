import { useEffect } from 'react'

import './features.css'
import feature1 from '../../assets/feature-1.svg'
import feature2 from '../../assets/feature-2.svg'
import feature3 from '../../assets/feature-3.svg'
import feature4 from '../../assets/feature-4.svg'
import feature5 from '../../assets/feature-5.svg'
import feature6 from '../../assets/feature-6.svg'
import feature7 from '../../assets/feature-7.svg'
import feature8 from '../../assets/feature-8.svg'
import { Feature } from '../../components'

const featuresData = [
  {
    title: "24/7 Security",
    text: "A building security system guarantees the peace of mind that comes with knowing your home and family are protected.",
    image: feature1
  },
  {
    title: "EXCLUSIVE PARKING",
    text: "An exclusive access to the basement parking through secure entry points.",
    image: feature2
  },
  {
    title: "CCTV ",
    text: "CCTVs in common areas including lobby and hallways.",
    image: feature3
  },
  {
    title: "KEYLESS ENTRY",
    text: "Smart card access to elevators and residential units.",
    image: feature4
  },
  {
    title: "AUTOMATIC FIRE SPRINKLER SYSTEM",
    text: "Equipped with fire detection sprinkler system and power generators.",
    image: feature5
  },
  {
    title: "CHILD PROOF OUTLETS",
    text: "Designed with electrical outlets placed out of reach of toddlers.",
    image: feature6
  },
  {
    title: "SECURED AND EXCLUSIVE",
    text: "A perimeter fence surrounds the property to ensure exclusivity and security.",
    image: feature7
  },
  {
    title: "ON-SITE CLINIC",
    text: "An On-site Clinic is available to help with medical emergencies.",
    image: feature8
  }
]

const Features = ({id, setActiveDot}) => {
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
    <div id={id} className='olp__features section__margin'>
      <h1>Building Features</h1>
      <div className='divider__dark'/>
      <div className='olp__features-container'>
        {featuresData.map((item, index) => (
          <Feature title = {item.title} text ={item.text} image = {item.image} key = {item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features