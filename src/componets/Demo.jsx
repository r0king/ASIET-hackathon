import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

const Demo = () => {
  return (
    <div className='bg-black '>
      <Parallax>
        <ParallaxLayer>
            <h1 className='text-black'>hellow world</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Demo
