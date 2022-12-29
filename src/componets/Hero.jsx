import React, { Component } from 'react'
import Navbar from './Navbar'
import ContactUs from './ContactUs'

export default class Hero extends Component {
  render() {
    return (
      <div className='relative h-screen  bg-[#0F044C]'>
        <Navbar/>
        <ContactUs/>
      </div>
    )
  }
}
