import React from 'react'

import './feature.css'

const Feature = ({ title, text, image }) => {
  return (
    <div className='olp__feature-container'>
      <div className='olp__feature-container_icon'>
       <img src={image} alt={title} />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

export default Feature