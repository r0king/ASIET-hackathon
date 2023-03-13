import React from 'react'

export default function EligibilityGame() {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>You must consider attending Gameathon if you have following skillset</b><br/><br />
      <ul className='list-disc  md:pl-10 pl-3'>
        <li><b>Device Requirements:</b> 
          <ul className='md:pl-10 pl-3'>
            <li>A computer with a processor speed of at least 3.0 GHz and a minimum of 16 GB of RAM.</li>
            <li>A graphics card with at least 4 GB of VRAM.</li>
            <li>A stable internet connection with a minimum download speed of 10 Mbps.</li>
            <li>A microphone and webcam for online communication.</li>
            <li>A mouse and keyboard for input.</li>
            <li>A copy of the Unity 3D game engine & Blender should be installed on your machine if you use a virtual machine. </li>
            <li>A Remote Desktop Protocol (RDP) client for connecting to the EC2 instance.<br /></li>
          </ul>
         </li>         
        <li><b>Technical Skills:</b> Familiarity with Unity game engine and its components, such as C# programming, game design and animation.<br /></li>
        <li><b>Creativity and Innovation:</b> The ability to come up with new and unique game ideas and the willingness to experiment and try new things.<br /></li>
        <li><b>Teamwork:</b> The ability to work effectively in a team environment and collaborate with others to bring a game to life.<br /></li>
        <li><b>Passion for Gaming:</b> A genuine interest in gaming and a desire to create games.<br /></li>
        <li><b>Time Management:</b> The ability to prioritize tasks and manage time effectively to meet deadlines.<br /><br /></li>
      </ul>
      <b>Do you have previous experience in game development and do not require training?</b><br /><br />
      You can submit your previous game work. We will send you a Google form to collect your work and get more details. Through this google form, either you can provide us with the Play Store or App Store link of your game, or you can upload it to Google Drive and give us access to download it. Tiltlabs team will evaluate your google form and your work and schedule a technical discussion/interview for you. Upon qualifying in the interview, you can participate in the Gameathon directly without undergoing any training or bootcamp. In the event you do not qualify for the interview, you will be required to attend training in order to participate in the Gameathon.
    </div>
  )
}
