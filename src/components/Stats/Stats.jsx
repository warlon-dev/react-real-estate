import React from 'react'

import './stats.css'

const Stats = ({value, text}) => {
  return (
    <div className='olp__stats-container'>
      <h2>{value}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Stats