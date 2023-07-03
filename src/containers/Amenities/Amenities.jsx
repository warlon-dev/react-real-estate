import { useState, useEffect } from 'react'

import './amenities.css'
import { Amenity } from '../../components'
import amenity01 from '../../assets/amenity-central.webp'
import amenity02 from '../../assets/amenity-garden.webp'
import amenity03 from '../../assets/amenity-clubhouse.webp'
import amenity04 from '../../assets/amenity-pool.webp'
import amenity05 from '../../assets/amenity-play.webp'
import amenity06 from '../../assets/amenity-family-park.webp'
import amenity07 from '../../assets/amenity-meditation.webp'
import amenity08 from '../../assets/amenity-basketball.webp'
import amenity09 from '../../assets/amenity-parking.webp'


const amenitiesData = [
  {
    key:1,
    title: "Central Park",
    subtitle: "CENTRAL PARK",
    text: "You don't need to go that far to experience fresh air and a  change of scenery. One Lancaster's 7-hectare park lets you enjoy the nature right where you live.",
    image: amenity01
  },
  {
    key:2,
    title: "Sky Gardens",
    subtitle: "SKY GARDEN (POCKET GARDEN)",
    text: "Be one with nature where native plants and flowers are within your reach.",
    image: amenity02
  },
  {
    key:3,
    title: "Clubhouse",
    subtitle: "CLUBHOUSE",
    text: "Celebrate your special famly milestones in our exclusive clubhouse",
    image: amenity03
  },
  {
    key:4,
    title: "Pool Area",
    subtitle: "3 ADULT AND KIDDIE SWIMMING POOLS.",
    text: "Refresh yourself during those warm sunny days in any of our 3 swimming pools. Our kiddie pool is the right depth for your little ones. Relax in our loungers that allow you to keep a watchful eye on them.",
    image: amenity04
  },
  {
    key:5,
    title: "Play Area",
    subtitle: "PLAY AREA (KID'S ZONE)",
    text: "Go ahead and let your kids play.. There's no need to worry because they can enjoy playtime right within One Lancaster Park.",
    image: amenity05
  },
  {
    key:6,
    title: "Family Bonding Zone",
    subtitle: "Family Bonding Zone (Picnic Area)",
    text: "Here, every moment becomes an opportunity to create lasting memories. Strengthen your family ties, nurture connections, and foster a sense of togetherness in this remarkable space designed exclusively for you and your loved ones.",
    image: amenity06
  },
  {
    key:7,
    title: "Active Zone",
    subtitle: "Active Zone (Meditation Park)",
    text: "The Meditation Park features comfortable seating areas, where you can pause, reflect, and simply enjoy the beauty that surrounds you.",
    image: amenity07
  },
  {
    key:8,
    title: "Basketball Court",
    subtitle: "Basketball Court",
    text: "Get active in our basketball court or teach the kinds on how to become the next MVP!",
    image: amenity08
  },
  {
    key:9,
    title: "Basement Parking",
    subtitle: "Basement Parking",
    text: "A state-of-the-art Basement Parking facility. Your vehicle's safety and security are assured as you benefit from the ease and accessibility of our well-designed parking infrastructure.",
    image: amenity09
  }
]

const Amenities = ({id, setActiveDot}) => {
  const [activeItem, setActiveItem] = useState(amenitiesData[0])

  const handleClick = (key) => {
    setActiveItem(amenitiesData[key-1])
  }
  
  const handleLeftClick = () => {
    setActiveItem(prevActiveItem => {
      if(prevActiveItem.key===1){
       return  amenitiesData[amenitiesData.length-1]
      } else {
        return amenitiesData[prevActiveItem.key-2]
      }
    })
  }

  const handleRightClick = () => {
    console.log(activeItem.key)
    setActiveItem(prevActiveItem => {
      if(prevActiveItem.key===amenitiesData.length){
        return amenitiesData[0]
      } else {
        return amenitiesData[prevActiveItem.key]
      }
    })
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
    <div id={id} className='olp__amenities'>
      <div className='olp__amenities-overlay section__padding'>
        <div className='olp__amenities-container'>
          <h1>BUILDING AMENITIES</h1>
          <div className="divider__light"></div>
          <div className='olp__amenities-container_content'>
            <div className='olp__amenities-container_content-amenity'>
              {amenitiesData.map((amenity,index) => {
                return (
                  <button 
                    id={activeItem.key === amenity.key?"active__button":""}
                    key ={amenity.key} 
                    onClick={() => (handleClick(amenity.key))}
                  >
                    {amenity.title}
                  </button>
                )
              })}
            </div>
            <div className='olp__amenities-container_content-details'>
              <Amenity 
                title={activeItem.subtitle} 
                text={activeItem.text} 
                image = {activeItem.image} 
                onLeftClick ={handleLeftClick}
                onRightClick ={handleRightClick}
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Amenities