import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

const Demo = () => {
  return (
    <div className='bg-[#171717] '>
      <Parallax>
        <ParallaxLayer>
            <h1 className='text-[#171717]'>hellow world</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Demo
