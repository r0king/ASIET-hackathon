import React, { Component } from 'react'
import Navbar from './Navbar'
import PageSlider from './PageSlider'

export default class Hero extends Component {
  render() {
    return (
      <div className='relative h-screen  bg-[#0F044C]'>
        <Navbar/>
        <PageSlider/>
      </div>
    )
  }
}
