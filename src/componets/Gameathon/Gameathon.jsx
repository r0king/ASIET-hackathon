import React, { useState } from "react";
import bgImgDesk from "../../assets/Gameathon/bgD.png";
import bgImgMobile from "../../assets/Gameathon/bgM.png";
import { useWindowSize } from "react-use";
import "./Gameathon.css";
import { Navbar } from "../NavbarPages";
import { ArchiveIcon, ChartBarIcon, CloudUploadIcon, LightBulbIcon, ViewGridIcon } from '@heroicons/react/solid'
import AboutGame from "./AboutGame";
import RegistrationGame from "./RegistrationGame";
import EligibilityGame from "./EligibilityGame";
import BootcampGame from "./BootcampGame";
import RulesGame from "./RulesGame";
// import gameathonVideo from "../../assets/Gameathon/gameathonVideo.mp4"

function Gameathon() {

  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutGame />
    },
    { name: "Registration", icon: CloudUploadIcon, page: <RegistrationGame /> },
    { name: "Eligibility", icon: ChartBarIcon, page: <EligibilityGame /> },
    { name: "Bootcamp", icon: ViewGridIcon, page: <BootcampGame /> },
    { name: "Rules", icon: LightBulbIcon, page: <RulesGame /> },
  ]

  const [currentTab, setCurrentTab] = useState("About")

  const translateValue = tabs.findIndex(tab => tab.name === currentTab) / tabs.length * 100

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={
        width > 640
          ? {
            backgroundImage: `url(${bgImgDesk})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "140vh",
            backgroundColor: "var(--bg-color)",
            boxShadow: "0px 0px 50px 0px var(--bg-color)",
          }
          : {
            backgroundImage: `url(${bgImgMobile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "120vh",
            boxShadow: "0px 0px 50px 0px var(--bg-color)",
          }
      }>
        <div className="Gameathon">
          {/* navbar */}
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} countDate="Mar 28, 2023 00:00:00"/>
          {/* <div className="h-[50vh] flex flex-row">
            <video autoPlay loop muted>
              <source src={gameathonVideo} type="video/mp4" />
            </video>
          </div> */}
          {/* main content */}
          <div className="flex flex-col justify-center p-5 md:p-10 2xl:pl-24">
            <h1
              className="text-2xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
              style={{ fontFamily: "Azonix" }}
            >
              Gameathon 2K23
            </h1>
            {/* sub heading */}
            <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
              28TH, 29TH & 30TH MARCH 2023
            </h2>
            {/* description */}
            <p className="text-base text-[#f0f0f070] 2xl:text-2xl pt-4 md:pt-10 md:w-1/3 2xl:w-1/2 leading-6 text-justify">
              Join us for a 3-day event at Adi Shankara Institute of Engineering & Technology where students can engage in team-working, explore their creative and technology skills, and challenge themselves to develop a game in just three days.
              With the support of industry partner TILTLABS, participants will be provided with a concept and access to tools such as Unity and Blender to create either casual or hyper-casual games.
            </p>
            {/* basic rounded line button */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSflq22uUuGh9orK2Wry4Sucx-UlCsqIdJbtqx2atCpD97QZeQ/viewform" rel="noreferrer" target={"_blank"}>
            <button
              className="w-full md:w-1/4 p=5 md:p-auto text-center text-[var(--secondary-color)] rounded-full duration-300 md:py-5 text-xl font-bold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[var(--secondary-color)] flex items-center justify-center border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
              style={{
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)",
              }}
              >
              Register Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto "
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
                  </a>
          </div>
        </div>
      </div>
      <div className="Gameathon  my-10 mb-16">
      <div className="bg-animation -z-10">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
        <div className="w-[90vw]  mx-auto md:w-full md:max-w-5xl rounded-full border border-gray-200 bg-transparent overflow-hidden" >

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
                <div className="h-full rounded-full bg-[var(--secondary-color)]" style={{ width: `${1 / (tabs.length) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
        {tabs.map(tab => {
          return (
            <div className="md:mx-16 mx-6 my-10 text-[var(--primary-color)]">
              {tab.name === currentTab ? tab.page : ""}
            </div>
          )
        })
        }
      </div>
    </>
  );
}

export default Gameathon;
