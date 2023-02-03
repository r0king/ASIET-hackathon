import React, { useState } from "react";
import bgImg from "../../assets/Techathon/bg.png.webp";
import { ArchiveIcon, ChartBarIcon, CloudUploadIcon, LightBulbIcon } from '@heroicons/react/solid'
import { useWindowSize } from "react-use";
import "./Techathon.css";
import { Navbar } from "../NavbarPages";
import ProfImg1 from "../../assets/avatar.webp"
import ProfImg2 from "../../assets/avatar.webp"
import ProfImg3 from "../../assets/avatar.webp"

function AboutTech(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>Future IoT for Intelligent society</b><br /><br />
      Techathon offers an exciting platform to develop technical and  young talented  Engineering students a platform to solve  some of the relevant problems and demonstrate their innovative solutions/ products/prototypes/working models. The main objective is to foster a spirit of innovation and inculcating a mindset of problem solving among the budding engineers.We  invite creative, innovative, out-of-the-box, resourceful and appropriate project in the wide domain of IoT. This serves as a platform for integration on technical advancement and impact generation through a holistic aproach for the overall welfare of society.
      <br /><br /><b>Based on the readiness level of innovation,avenues for advancing ideas to product may also open up</b>
      <br /><br /><b>Four categories of project proposals</b>
      <ul className="list-decimal pl-10">
        <li>IoT based Energy Transformation solutions</li>
        <li>IoT based smart city and home applications</li>
        <li>IoT based Health care</li>
        <li>Process Automation</li>
      </ul>
    </div>
  )
}

function HighTech(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <ul className="list-decimal pl-10">
        <li>Wide opportunity to showcase the models and participate in discussions</li>
        <li>Gain feedback from experts in the domain and get the project validated</li>
        <li>Connect with industry experts and market leaders</li>
        <li>Exciting Cash Prizes</li>
        <li>Enhance presentation and leadership skills.</li>
      </ul>
    </div>
  )
}

function PhasesTech(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>Phase 1 : Submission of proposal</b>
      <br/>Students may form small project teams with a maximum of 4 participants per team. The team shall submit a brief project proposal in the specified template in any of the four relevant categories.
      <br/><br/><b>Phase 2: Selection of quality proposals</b>
      <br/>This phase scrutinizes your proposal based on novelty, social relevance and feasibility. Top proposals will be selected and intimated to the team. Suggestions/feedback will be sent to the selected teams. They can incorporate the expert suggestions in their project.
      <br/><br/><b>Phase 3: Presentation</b>
      <br/>The selected teams will be asked to present before an expert panel of judges in online mode. The presentations and proposals will be evaluated thoroughly and the top 50 teams will proceed to the Phase 4.
      <br/><br/><b>Phase 4: Demonstration of project</b>
      <br/>The selected teams shall demonstrate their products /working models in the ASIET Campus. Expert team from both industries and academics will evaluate the projects. Top 3 projects will receive awards and  cash prizes.
    </div>
  )
}

function ConTech() {
  const team = [
    {
      id: 1,
      fullName: "Contact 1",
      contact: "+91 9988998819",
      imgSrc: ProfImg1,
      imgAlt: "profile picture",
    },
    {
      id: 2,
      fullName: "Contact 2",
      contact: "+91 9988998819",
      imgSrc: ProfImg2,
      imgAlt: "profile picture",
    },
    {
      id: 3,
      fullName: "Contact 3",
      contact: "+91 9988998819",
      imgSrc: ProfImg3,
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
                  className="z-1 group-hover:z-0 absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-10 transition duration-200"
                />
                {/* :::details */}
                <div className="absolute bottom-[10%] flex flex-col justify-center items-center space-y-2">
                  <p className="text-sm text-white font-bold">
                    {member.fullName}
                  </p>
                  <p className="text-sm text-gray-300 font-medium">
                    {member.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Techathon() {

  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutTech />
    },
    { name: "Highlight", icon: CloudUploadIcon, page: <HighTech /> },
    { name: "Phases", icon: ChartBarIcon, page: <PhasesTech /> },
    { name: "Contact", icon: LightBulbIcon, page: <ConTech /> },
  ]

  const [currentTab, setCurrentTab] = useState("About")

  const translateValue = tabs.findIndex(tab => tab.name === currentTab) / tabs.length * 100

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="Techathon"
        style={
          width > 640
            ? {
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
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
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* main content */}
        <div className="flex flex-col justify-center h-screen p-5 md:p-10  2xl:p-24">
          <h1
            className="text-4xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
            style={{ fontFamily: "Azonix" }}
          >
            Techathon
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
            24 Hours of Innovation
          </h2>
          {/* description */}
          <p className="text-base text-[var(--secondary-color)] 2xl:text-2xl md:pt-10 md:w-1/3 2xl:w-1/2 leading-6">
            Techathon is a rapid and collaborative hackathon aimed at the discipline of Civil Engineering. It is an excellent platform for students with limited experience in coding to showcase their skills and talents, in the said discipline.
            The innovatory ideas would be judged by a panel of industry experts based on their creativity, approachability, and feasibility.

            So hope on, and get a ticket for this exciting adventure where you can get many networking opportunities, polish your existing skills and flourish yourselves.


          </p>
          {/* basic rounded line button */}
          <button
            className="md:w-1/4 text-center text-[var(--secondary-color)] rounded-full duration-300 py-5 px-6 text-sm font-bold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[var(--primary-color)] flex items-center justify-center border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
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

      <div className="Techathon  my-10 mb-16">
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
                      <li key={tab.name} className={`relative z-10 rounded-full flex justify-center items-center text-base ${tab.name === currentTab ? "transition duration-300 text-black" : "text-gray-400 hover:text-gray-500"}`}>
                        <button type="button" className="md:p-4 p-2 w-full inline-flex justify-center flex-col items-center text-center md:text-sm text-[.6rem] font-semibold" onClick={() => setCurrentTab(tab.name)}>
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
              <div className="absolute inset-0 mx-auto w-full h-full rounded-full flex flex-col justify-center">
                <div className="relative h-full transition-all duration-300 ease-in" style={{ transform: `translateX(${translateValue}%)` }} >
                  <div className="h-full rounded-full bg-[var(--primary-color)]" style={{ width: `${1 / (tabs.length) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {tabs.map(tab => {
          return (
            <div className="md:mx-16 mx-6 my-10 text-[var(--text-color)]">
              {tab.name === currentTab ? tab.page : ""}
            </div>
          )
        })
        }
      </div>
    </>
  );
}

export default Techathon;
