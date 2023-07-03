import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs'
import React from 'react'

import './amenity.css'

const Amenity = ({title, text, image, onLeftClick, onRightClick}) => {
  return (
    <div className='olp__amenity-container'>
        <div className='olp__amenity-container_image'>
            <img src={image} alt={title} />
            <div id='leftArrow' onClick={onLeftClick}><BsFillCaretLeftFill /></div>
            <div id='rightArrow' onClick={onRightClick}><BsFillCaretRightFill /></div>
        </div>
        <div className='olp__amenity-container_text'>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Amenity