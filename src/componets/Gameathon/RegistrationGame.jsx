import React from 'react'
import regFlowChart from '../../assets/Gameathon/flowChart.webp'

export default function RegistrationGame() {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify h-full  min-h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>Registration Options</b><br /><br />
      <ul className='pl-10 list-disc'>
        <li>With training (Online bootcamp) and food during the Gameathon competition: <b>Rs.2000/participant</b>.</li>
        <li>Without training and food during the Gameathon competition: <b>Rs.1000/participant</b>.</li>
      </ul>
      <br />
      <b>Food includes breakfast, lunch, and refreshments<br />
      Registration Starts: 13-Feb-2023<br />
      Registration Ends: 15-March-2023</b>
      <br /><br /><b>NB:</b> As training is one-to-one through the online platform, participants must register individually. After training, participants can form teams (we will collect team details) to compete in the Gameathon.
      <br /><br/><b>Steps to participate in the Gameathon</b>

      <img src={regFlowChart} alt="Registration Flow Chart" className='md:m-10 mt-10' />
    </div>
  )
}
