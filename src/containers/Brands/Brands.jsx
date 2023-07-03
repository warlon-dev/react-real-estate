import React from 'react'

import { Brand } from '../../components'
import './brands.css'
import brand1 from '../../assets/brand-1.png'
import brand2 from '../../assets/brand-2.png'
import brand3 from '../../assets/brand-3.png'

const brandsData = [
  {
    title: "Developed by",
    image: brand1
  },
  {
    title: "A Join Venture Between",
    image: brand2
  },
  {
    title: "Engineered by",
    image: brand3
  }
]


const Brands = () => {
  return (
    <div className='olp__brand section__padding'>
      <div className='olp__brand-images'>
        {brandsData.map((item, index) => (
          <Brand title={item.title} image ={item.image} key={item.title+index} />
         ))}
      </div>
    </div>
  )
}

export default Brands