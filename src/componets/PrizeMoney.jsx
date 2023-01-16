
import React, { useEffect } from 'react'
import CircleType from 'circletype';
import './PrizeMoney.css';

const PrizeMoney = () => {
  useEffect(() => {
    new CircleType(document.getElementById('demo1')).radius(750);
  })
  return (
    <div className='z-20'>
      <h1 id='demo1' class='sweet-title'>1.5 MILLION PRIZE MONEY</h1>
    </div>
  )
}

export default PrizeMoney
