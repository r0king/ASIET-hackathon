import React, { useState } from "react";
import bgImg from "../../assets/Codathon/code.webp";
import { useWindowSize } from "react-use";
import "./Codathon.css";
import { Navbar } from "../NavbarPages";
import { ArchiveIcon, ChartBarIcon, CloudUploadIcon, LightBulbIcon } from '@heroicons/react/solid'
import ProfImg from "../../assets/avatar.webp";
import codathonVideo from "../../assets/Codathon/intro.webm"

function AboutCode(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>Adi Shankara Codeathon</b> is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving. This will be a 24 hour coding contest where the goal is to create functioning software by the end of the event, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers.
      <br /><br /><b>Why Adi Shankara Codeathon?</b>
      <ul className="list-disc pl-10">
        <li>Entrepreneurship</li>
        <li>Innovation</li>
        <li>Imagination</li>
        <li>Knowledge</li>
        <li>Opportunity</li>
      </ul>
    </div>
  )
}

function ThemesCode(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>Streams</b>
      <ul className="list-disc pl-10">
        <li>Computer Vision,</li>
        <li>Natural Language Processing,</li>
        <li>Speech</li>
        <li>Cyber Security</li>
      </ul>
      <br /><br />
      <b>Themes</b>
      <ul className="list-disc pl-10">
        <li>Agriculture</li>
        <li>Healthcare</li>
        <li>Cybersecurity</li>
        <li>Automation</li>
        <li>Digital Education</li>
        <li>Energy Optimization</li>
      </ul>
    </div>
  )
}

function StagesCode(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>ASC Process</b>
      <ul className="list-disc pl-10">
        <li>Registration through DevFolio</li>
        <li>Collection of ideas</li>
        <li>Registration ends</li>
        <li>Shortlisting ideas</li>
        <li>ASH Day</li>
      </ul>
      <br /><br />
      <b>Key Take Aways from ASC</b>
      <ul className="list-disc pl-10">
        <li>Business incubators</li>
        <li>Interaction with developer community</li>
        <li>Teamwork</li>
        <li>Networking</li>
        <li>Rise to innovation</li>
      </ul>
    </div>
  )
}

function GuideCode(props) {
  return (
    <div className='md:p-10 p-3 leading-7 text-base md:text-justify h-full md:h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <ul className="list-decimal">
        <li>Reporting time at the ADI SHANKARA HACKATHON 2023 Venue 8.00 am on 29-03-2023.</li>
        <li>Registration starts at 9.00 am.</li>
        <li>Breakfast at 08.30 am- 09.30 am.</li>
        <li>Inauguration at 09.00 am on 29-03-2022. Venue : Auditorium</li>
        <li>The registration kit contains the following items. - Agenda sheet</li>
        <ul className="list-disc pl-10 leading-5">
          <li>Instruction Sheet</li>
          <li>Progress sheet</li>
          <li>Problem statement sheet</li>
          <li>Breakfast, lunch, dinner coupons - ID cards</li>
        </ul>
        <li>Coding starts at 10.00 am on 29-03-2022</li>
        <li>Team members have to wear the ID cards all the times when they are at the venue.</li>
        <li>The students are not allowed outside the area marked for ADI SHANKARA HACKATHON 2023, until the valedictory function.</li>
        <li>Valedictory function will be held at 11.00 am on 30-03-2022.                              Venue : Auditorium</li>
        <li>	Students are allowed to bring only the items necessary for the event such as Laptop, laptop charger, mobile, mobile charger, power extension card, Water bottle etc.</li>
        <li>	Students have to bring a permission letter from Head of Department or Principal for participating in the event. The letter has to be handed over to the volunteers at registration desk.</li>
        <li>	Students are responsible for all their belongings.</li>
        <li>is suggested that one team member to be present at the work place always.</li>
        <li>	After the registration, teams will be allotted a team number and the work place.</li>
        <li>	Students can use the limited sports facility.</li>
        <li>	Students should use the dust bins for throwing the litter.</li>
        <li>	Judges will visit the team to check the work done.</li>
        <li>	A set of observers will visit the teams 3 times and check the progress.</li>
        <li>	Limited facility will be made available for taking rest, during the coding phase. (Separate for boys and girls).</li>
        <li>	Breakfast and working lunch and dinner will be provided to the participants.</li>
        <li>	Participation certificates will be provided to all the teams on 30-03-2023, at the work location.</li>
        <li>	Winning teams will get the certificates of award and prizes during the valedictory function.</li>
        <li>	Premises will be under CCTV Surveillance during the hackathon.</li>
        <li>	Decision of the judges is Final.</li>
        <li>	A separate team would do plagiarism check on the code.</li>
        <li>	Original Work needs to be submitted.</li>
        <li>	Please bring the daily medication that is required.</li>
        <li>	Winner team will get the prize money in the team leader name.</li>
        <li>	Each team must submit a video demo of your product not longer than 2 minutes along with the code on Devfolio before 8 am on MARCH 30th. Detailed instructions on how to make submissions are available on Devfolio’s platform.</li>
        <li>	ADI SHANKARA HACKATHON 2023’s judging criteria will solely as per the terms of the committee and not the sponsors.</li>
        <li>	The judging criteria for sponsor’s prizes will be laid out by each sponsor separately. Our sponsors will announce winner at a later point after the hackathon has ended. ASIET will not be involved in the decision making processx1  </li>
      </ul>
    </div>
  )
}

function ContactCode() {
  const team = [
    {
      id: 1,
      fullName: "Alice Doe",
      contact: "+91 9087654321",
      imgSrc: ProfImg,
      imgAlt: "profile picture",
    },
    {
      id: 2,
      fullName: "Bob Doe",
      contact: "+91 9087654321",
      imgSrc: ProfImg,
      imgAlt: "profile picture",
    },
    {
      id: 3,
      fullName: "Clara Doe",
      contact: "+91 9087654321",
      imgSrc: ProfImg,
      imgAlt: "profile picture",
    },
  ];

  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <div className="mx-auto max-w-5xl flex flex-col">
        {/* :TEAM CONTAINER */}
        <div className="mt-10">
          {/* ::Members Row 1 */}
          <div className="flex flex-wrap justify-center items-center">
            {team.slice(0, 4).map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 group relative m-5 p-5 w-56 h-56 flex justify-center items-center rounded-full bg-black overflow-hidden"
              >
                {/* :::picture */}
                <img
                  src={member.imgSrc}
                  alt={member.imgAlt}
                  className="z-1 group-hover:z-0 absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-10 transition duration-200"
                />
                {/* :::details */}
                <div className="relative flex flex-col justify-center items-center space-y-2">
                  <p className="text-lg text-white font-bold">
                    {member.fullName}
                  </p>
                  <p className="text-sm text-gray-300 font-medium">
                    {member.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ::Members Row 2 */}
          <div className="flex flex-wrap justify-center items-center">
            {team.slice(4, 9).map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 group relative m-5 p-5 w-40 h-40 flex justify-center items-center rounded-full bg-black overflow-hidden"
              >
                {/* :::picture */}
                <img
                  src={member.imgSrc}
                  alt={member.imgAlt}
                  className="z-1 group-hover:z-0 absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-10 transition duration-200"
                />
                {/* :::details */}
                <div className="relative flex flex-col justify-center items-center space-y-2">
                  <p className="text-lg text-white font-bold">
                    {member.fullName}
                  </p>
                  <p className="text-sm text-gray-300 font-medium">
                    {member.contact}
                  </p>
                  <span className="flex items-center space-x-4">
                    <a
                      href={member.fbLink}
                      className="text-gray-300 hover:text-white"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href={member.twLink}
                      className="text-gray-300 hover:text-white"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href={member.instaLink}
                      className="text-gray-300 hover:text-white"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Codathon() {
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutCode />,
    },
    { name: "Streams & Themes", icon: CloudUploadIcon, page: <ThemesCode /> },
    { name: "Stages", icon: ChartBarIcon, page: <StagesCode /> },
    // { name: "FAQ", icon: ViewGridIcon, page: <FaqYoung /> },
    { name: "Guidelines", icon: LightBulbIcon, page: <GuideCode /> },
    { name: "Contact", icon: LightBulbIcon, page: <ContactCode /> },
  ]

  const [currentTab, setCurrentTab] = useState("About")

  const translateValue = tabs.findIndex(tab => tab.name === currentTab) / tabs.length * 100

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="relative h-screen">
        <div className="absolute z-50 w-full ">
          <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            countDate="Mar 29, 2023 00:00:00"
          />
        </div>
        <div className="absolute top-0 h-screen flex justify-center items-center w-full z-40 ">
          {/* navbar */}
          <video autoPlay muted loop className="md:h-full w-full object-cover">
            <source src={codathonVideo} type='video/mp4; codecs="avc1"' />
          </video>
        </div>
      </div>
      <div
        className="Codathon"
        style={
          width > 640
            ? {
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "contain",
              backgroundPosition: "right 0",
              backgroundRepeat: "no-repeat",
              height: "140vh",
              backgroundColor: "var(--bg-color)",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
            : {
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "150vh",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
        }
      >
        {/* navbar */}
        {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        <div className="flex flex-col justify-center h-screen p-5 md:p-10  2xl:p-24">
          <h1
            className="text-4xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
            style={{ fontFamily: "Azonix" }}
          >
            Codathon
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
            24 Hours of Innovation
          </h2>
          {/* description */}
          <p className="text-base text-[#f0f0f0c9] 2xl:text-2xl md:pt-10 md:w-1/3 2xl:w-1/2 leading-6">
            Codathon is a Codathon is a 24hrs Hackathon event, where
            aspiring student entrepreneurs can come collaborate and build their
            startup ideas to a minimum viable product with the support of
            Nasscom 10k Startups , MakerGram and Google Cloud. It has been
            designed specifically for students who have an grails in
            entrepreneurship and innovation. So, come forth ,grab and your
            ticket and prove your mettle!
          </p>
          {/* basic rounded line button */}
          <button
            className=
            "md:w-1/4 text-center max-h-16 md:max-h-auto text-[var(--secondary-color)] rounded-full duration-300 py-5 px-6 text-sm font-bold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[var(--primary-color)] flex items-center justify-center border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
            style={{
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)",
            }}
          >
            Register Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 mt-[0%]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="Codathon  my-10 mb-16">
        <div className="bg-animation -z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        <div className="py-2 sticky top-0 z-10">
          <div className="w-[90vw] mx-auto md:w-full md:max-w-5xl rounded-full border border-gray-200 bg-black/70 overflow-hidden" >


            {/* :LARGE DEVICES */}
            <div className="relative  sm:block overflow-hidden">
              {/* ::Navigation Tabs */}
              <nav aria-label="Tabs">
                <ul className="grid grid-flow-col auto-cols-fr">
                  {tabs.map(tab => {
                    const Icon = tab.icon
                    return (
                      <li key={tab.name} className={`relative z-10 rounded-full text-base ${tab.name === currentTab ? "transition duration-300 text-black" : "text-gray-400 hover:text-gray-500"}`}>
                        <button type="button" className="md:p-4 p-2 w-full inline-flex justify-center items-center text-center md:text-sm text-[.6rem] font-semibold" onClick={() => setCurrentTab(tab.name)}>
                          {width > 640 ? <Icon className="mr-1.5 w-5 h-5" /> : ""}
                          {tab.name}
                        </button>
                      </li>
                    )
                  })
                  }
                </ul>
              </nav>
              {/* ::Sliding Background */}
              <div className="absolute inset-0 mx-auto w-full h-full rounded-full">
                <div className="relative h-full transition-all duration-300 ease-in" style={{ transform: `translateX(${translateValue}%)` }} >
                  <div className="h-full rounded-full bg-[var(--primary-color)]" style={{ width: `${1 / (tabs.length) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {tabs.map(tab => {
          return (
            <div className="md:mx-16 mx-6 my-10 text-[var(--secondary-color)]">
              {tab.name === currentTab ? tab.page : ""}
            </div>
          )
        })
        }
      </div>
    </>
  );
}

export default Codathon;
