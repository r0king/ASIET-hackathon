import React, { useState } from "react";
import bgImg from "../../assets/Mechathon/bg.png.webp";
import { ArchiveIcon, ChartBarIcon, CloudUploadIcon, LightBulbIcon, ViewGridIcon } from '@heroicons/react/solid'
import { useWindowSize } from "react-use";
import "./Mechathon.css";
import { Navbar } from "../NavbarPages";

function AboutMech(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      “What the mind can conceive and believe, it can achieve.”<br /><br />
      <span className="pl-96">Napoleon Hill</span><br /><br />
      In recent times, technology has produced many innovations of holocaustic nature and scientists and researchers in its quest to conquer nature, have evolved various dangerous concepts threatening the very existence of mankind. These pose a big challenge to the meaning and principle of humanity. In this regard, students should play a strong and positive role in determining emerging trends of technology. It is with this great thought in mind, that “Adi Shankara Young Scientists Award" is conceived and designed.
      <br /><br />
      <span className="pl-20">The objective of Adi Shankara Young Scientists Award is to recognize the potentialities of promising young aspiring scientists who dedicate themselves to solve the most pressing problems the world faces. This award aims to recognise and reward quality workmanship, inspire scholarship and support researchers to pursue their passion in creating technological innovations beneficial to mankind.</span>
    </div>
  )
}

function Mechathon() {
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutMech />,
    },
    // { name: "Contest", icon: CloudUploadIcon, page: <ConYoung /> },
    // { name: "Awards", icon: ChartBarIcon, page: <AwardYoung /> },
    // { name: "FAQ", icon: ViewGridIcon, page: <FaqYoung /> },
    // { name: "Guidelines", icon: LightBulbIcon, page: <GuideYoung /> },
    // { name: "Contact", icon: LightBulbIcon, page: <ContactYoung /> },
  ]

  const [currentTab, setCurrentTab] = useState("About")

  const translateValue = tabs.findIndex(tab => tab.name === currentTab) / tabs.length * 100

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="Mechathon"
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
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
                height: "150vh",
                boxShadow: "0px 0px 50px 0px var(--bg-color)",
              }
        }
      >
        {/* navbar */}
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* main content */}
        <div className="flex flex-col justify-center h-screen p-5 md:p-10  2xl:p-24">
          <h1
            className="text-4xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
            style={{ fontFamily: "Azonix" }}
          >
            Mechathon
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
            24 Hours of Innovation
          </h2>
          {/* description */}
          <p className="text-base text-[#f0f0f070] 2xl:text-2xl md:pt-10 md:w-1/3 2xl:w-1/2 leading-6">
            Mechathon is an intensive brainstorming event for the machinists and mechanists out there to pour out their creative and prolific ideas
            and merge our mentorship to institute something new.
            The innovatory ideas would be judged by a panel of industry experts based on their creativity, approachability, and feasibility. 
            So,grab a ticket to your venture something exciting and launch yourselves!
          </p>
          {/* basic rounded line button */}
          <button
            className="md:w-1/4 text-center text-[var(--secondary-color)] rounded-full duration-300 py-5 px-6 text-sm font-bold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[var(--secondary-color)] flex items-center justify-center border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
            style={{
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)",
            }}
          >
            Register Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
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

      <div className="Ideathon  my-10 mb-16">
        <div className="bg-animation -z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        <div className="bg-black py-2 sticky top-0 z-10">
          <div className="w-[90vw] mx-auto md:w-full md:max-w-5xl rounded-full border border-gray-200 bg-transparent overflow-hidden" >


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

export default Mechathon;
