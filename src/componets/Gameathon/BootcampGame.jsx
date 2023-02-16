import React from 'react'
// import bootCampDiagram from '../../assets/Gameathon/bootCampDiagram.png.webp'

export default function BootcampGame() {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <p>
        <h1 className='font-bold text-lg'>What is the aim of bootcamp for the gameathon?</h1><br />
        The Bootcamp aims to teach students the principles and skills of game design, art, and
        development, focusing on casual games (such as running and jumping). The students will learn
        and create a game output over 5 or 10 days through a combination of lectures, hands-on
        training, assignments, and opportunities for interaction with the instructor and other students.
        The bootcamp aims to provide a comprehensive learning experience and help students
        develop practical skills in game development.
      </p><p>
        <br /><h1 className='font-bold text-lg'>What are time slots to participate in online bootcamp?</h1><br />
        The online training time slots are as follows: 12 PM - 2 PM, 5 PM - 7 PM, and 7 PM - 9 PM on weekdays. On weekends, the TiltLabs trainers will determine the longer time slots.
        Once registered, we will allocate participants into any of the appropriate slots as per their convenience.
        <br /><br /><h1 className='font-bold text-lg'>When does bootcamp begin?</h1><br />
        We will notify participants of the start date for the bootcamp in accordance with event registrations. The goal is to guarantee that participants receive a total of 40 hours of training prior to the Gameathon competition.
      </p><p>
        <br /><h1 className='font-bold text-lg'>Brief details of specific gaming software used?</h1><br />
        The game development bootcamp will use Unity 3D and Blender. Unity is a popular game
        engine for creating 2D and 3D games on various platforms with a comprehensive set of
        features, including game engine, scripting, physics, and asset management. Blender is a free,
        open-source software for modeling, animation, and game creation with a built-in game engine.
        These tools will provide hands-on experience for students in game development and teach them
        essential principles and techniques.
      </p><p>
        <br /><h1 className='font-bold text-lg'>What are the hardware requirements to participate in online bootcamp?</h1><br />
        <ul className='list-disc pl-10'>
          <li>A computer with a processor speed of at least 3.0 GHz and a minimum of 16 GB of RAM.</li>
          <li>A graphics card with at least 4 GB of VRAM.</li>
          <li>A stable internet connection with a minimum download speed of 10 Mbps.</li>
          <li>A microphone and webcam for online communication.</li>
          <li>A mouse and keyboard for input.</li>
          <li>A copy of the Unity 3D game engine & Blender should be installed on your machine if you use a virtual machine.</li>
          <li>A Remote Desktop Protocol (RDP) client for connecting to the EC2 instance, such as TeamViewer or Anydesk.</li>
        </ul>
      </p><p>
        <br /><h1 className='font-bold text-lg'>What are the benefits for participants attending the bootcamp?</h1><br />
        <ul className='list-decimal pl-10'>
          <li><b>Hands-on experience:</b> Participants will gain practical experience in game development through hands-on training and creating a game output.</li>
          <li><b>Improved skills:</b> Participants will learn and improve their skills in game design, art, and development, including concepts such as running and jumping.</li>
          <li><b>Comprehensive understanding:</b> Participants will receive a comprehensive understanding of game development principles and techniques, including design, art, and programming.</li>
          <li><b>Access to tools:</b> Participants will have access to powerful game development tools such as Unity 3D and Blender, allowing them to continue their learning and development after the bootcamp.</li>
          <li><b>Networking opportunities:</b> Participants will have opportunities to interact with instructors and other participants, allowing them to expand their network and build connections in the game development community.</li>
          <li><b>Flexibility:</b> The bootcamp will be delivered in multiple sessions, allowing participants to balance their studies with other commitments.</li>
        </ul><br />
        Overall, the game development bootcamp is designed to provide a comprehensive and
        hands-on learning experience for participants, allowing them to develop their skills and advance
        their careers in the game development industry.
      </p><p>
        <br /><h1 className='font-bold text-lg'>How does attending the bootcamp support the actual gameathon competition?</h1><br />
        Attending the bootcamp equips attendees with essential skills, knowledge, and resources to win
        the gameathon competition. Participants enhance their game design, art, and development
        skills through hands-on training and game output creation. Access to tools like Unity 3D and
        Blender allows attendees to implement creative strategies to stand out in the competition. The
        practical experience and skills gained at the bootcamp laid a solid foundation for success in the
        gameathon
      </p>
      <div>
        <br /><h1 className='text-lg font-bold'>Prerequisites for Bootcamp</h1><br />
        <ul className='list-disc text-base  pl-5 md:pl-14'>
          <li>A strong interest in game development and a desire to learn about the game industry.</li>
          <li>Basic understanding of programming concepts and familiarity with at least one programming language.</li>
          <li>Basic understanding of art and design principles.</li>
          <li>Basic understanding of computer hardware and software, including operating systems and computer hardware components.</li>
          <li>Access to a computer with the necessary hardware and software to participate in the Bootcamp.</li>
          <li>Familiarity with the Unity 3D and Blender user interface. Basic understanding of 3D modeling and animation concepts.</li>
          <li>Basic understanding of game mechanics and level design. Basic knowledge of scripting and programming in C# (for Unity 3D) or Python (for Blender).</li>
          <li>Students should be prepared to review the provided notes and articles and complete any recommended tutorials to gain a basic understanding of the material before the training begins.</li>
        </ul>
      </div>
      <div>
        <h1 className='text-lg font-bold mt-8'>How should the candidate attend the training?</h1><br />
        <ul className='list-disc text-base  pl-14'>
          <li>Students can use the Discord channel to ask questions and interact with the instructor and classmates.</li>
          <li>Students can also use the help-desk platform to submit tickets with their doubts or questions. The training organization will respond as soon as possible.</li>
          <li>During the course, students can also ask doubts directly to the instructor during class sessions or through private messaging.</li>
          <li>After the course has finished, students will have access to a 1-month support period during which they can continue to ask doubts through the help-desk platform. The training organization will respond to inquiries within 24 hours.</li>
        </ul>
      </div>
      {/* <div>
        <h1 className='text-lg font-bold mt-8'>Bootcamp contents</h1><br />
        <img src={bootCampDiagram} alt="Bootcamp Content" />
      </div> */}
      <div>
        <br /><h1 className='text-2xl font-bold'>Bootcamp Rules</h1><br />
        <h1 className='text-lg font-bold pl-5 pb-6'>Specific Rules</h1>
        <ol className='list-decimal text-base  pl-16'>
          <li>The Bootcamp will consist of 40 hours of content to be delivered to students in morning and evening batches.</li>
          <li>Students will participate in Zoom sessions and can log in as team members.</li>
          <li>A dedicated Discord channel will be established for all Bootcamp attendees.</li>
          <li>Schedule for classes and Zoom links will be communicated to the students.</li>
          <li>If a student misses a class, they will be provided with a recording of the Zoom session through a password-protected link.</li>
          <li>Students will be assigned assignments and expected to finish them and come ready for the next class.</li>
          <li>Students can ask doubts and receive assistance via Discord, email, or through our helpdesk ticket system.</li>
          <li>PDFs and slides will be provided to students.</li>
          <li>
            Deliverables:
            <ol className='list-decimal pl-10 text-base'>
              <li>Unity session</li>
              <li>Basic concepts of 3D modeling</li>
              <li>Completing one hyper-casual game with basic gameplay.</li>
            </ol>
          </li>
        </ol>
        <h1 className='text-lg font-bold pl-5 pb-6 pt-5'>General Rules</h1>
        <ul className='list-disc text-base  pl-14'>
          <li>Attendance is mandatory for all sessions. If a student is unable to attend a session, they must inform the instructor in advance and make arrangements to catch up on missed material.</li>
          <li>Students must complete all assignments on time and to the best of their ability; late or incomplete assignments will not be accepted.</li>
          <li>Active participation in class discussions and activities is expected from students.</li>
          <li>Students are expected to respect their instructors and classmates at all times, including during online interactions.</li>
          <li>Students are expected to follow all guidelines and instructions provided by the instructors.</li>
          <li>Students are responsible for ensuring they have the necessary equipment and internet connection to participate in the online bootcamp.</li>
          <li>Students are expected to maintain a professional and appropriate appearance and behavior during online sessions.</li>
          <li>Students are expected to use appropriate language and communication during online interactions.</li>
          <li>Students must keep their cameras on and participate visually during online sessions.</li>
          <li>Students are expected to keep their microphones on mute when they are not speaking to minimize background noise.</li>
          <li>Students must keep their devices charged and ready for use during online sessions.</li>
          <li>Candidates should log in to the Zoom account provided by the training organization.</li>
          <li>Candidates will be added to a Discord group and will receive a link to access the online classes.</li>
          <li>Before each class, the instructor will verify the attendance of each student.</li>
          <li>Candidates must have an attendance rate of at least 90% to be eligible for the Gameathon.</li>
          <li>At the end of the training, candidates will be asked to submit their completed game for review.</li>
          <li>If the game meets the required standards, the candidate will be granted enrolment in the Gameathon.</li>
        </ul>
      </div>
      <div>
        <h1 className='text-lg font-bold mt-8'>Bootcamp Certificate</h1><br />
        <h2 className='text-base  pl-14'>Upon successful completion of the training program, registered participants will receive a certificate of participation via email in PDF format, with a digital signature from <b>TILTLABS</b>.</h2>
      </div>
    </div >
  )
}
