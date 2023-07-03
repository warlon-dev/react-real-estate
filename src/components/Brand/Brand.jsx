import React from 'react'

import './brand.css'

const Brand = ({title, image}) => {
  return (
    <div className='olp__brand-container'>
      <h4>{title}</h4>
      <div className='olp__brand-container_img'>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default Brand