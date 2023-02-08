import React from "react";
import bgImgD from "../../assets/Techathon/bgD.webp";
import bgImgM from "../../assets/Techathon/bgM.webp";
import {
  ArchiveIcon,
  ChartBarIcon,
  LightBulbIcon,
} from "@heroicons/react/solid";
import { useWindowSize } from "react-use";
import "./Techathon.css";
import ProfImg1 from "../../assets/avatar.webp";
import ProfImg2 from "../../assets/avatar.webp";
import ProfImg3 from "../../assets/avatar.webp";
import NavWrapper from "../Utils/NavWrapper";
import Bg from "../Utils/Bg";
import Tab from "../Utils/Tab";
import techathonVideo from "../../assets/Techathon/intro.webm"

function AboutTech(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <b>Future IoT for Intelligent society</b>
      <br />
      <br />
      Techathon offers an exciting platform to develop technical and young
      talented Engineering students a platform to solve some of the relevant
      problems and demonstrate their innovative solutions/
      products/prototypes/working models. The main objective is to foster a
      spirit of innovation and inculcating a mindset of problem solving among
      the budding engineers.We invite creative, innovative, out-of-the-box,
      resourceful and appropriate project in the wide domain of IoT. This serves
      as a platform for integration on technical advancement and impact
      generation through a holistic aproach for the overall welfare of society.
      <br />
      <br />
      <b>
        Based on the readiness level of innovation,avenues for advancing ideas
        to product may also open up
      </b>
      <br />
      <br />
      <b>Four categories of project proposals</b>
      <ul className="list-decimal pl-10">
        <li>IoT based Energy Transformation solutions</li>
        <li>IoT based smart city and home applications</li>
        <li>IoT based Health care</li>
        <li>Process Automation</li>
      </ul>
    </div>
  );
}

function HighTech(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <ul className="list-decimal pl-10">
        <li>
          Wide opportunity to showcase the models and participate in discussions
        </li>
        <li>
          Gain feedback from experts in the domain and get the project validated
        </li>
        <li>Connect with industry experts and market leaders</li>
        <li>Exciting Cash Prizes</li>
        <li>Enhance presentation and leadership skills.</li>
      </ul>
    </div>
  );
}

function PhasesTech(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <b>Phase 1 : Submission of proposal</b>
      <br />
      Students may form small project teams with a maximum of 4 participants per
      team. The team shall submit a brief project proposal in the specified
      template in any of the four relevant categories.
      <br />
      <br />
      <b>Phase 2: Selection of quality proposals</b>
      <br />
      This phase scrutinizes your proposal based on novelty, social relevance
      and feasibility. Top proposals will be selected and intimated to the team.
      Suggestions/feedback will be sent to the selected teams. They can
      incorporate the expert suggestions in their project.
      <br />
      <br />
      <b>Phase 3: Presentation</b>
      <br />
      The selected teams will be asked to present before an expert panel of
      judges in online mode. The presentations and proposals will be evaluated
      thoroughly and the top 50 teams will proceed to the Phase 4.
      <br />
      <br />
      <b>Phase 4: Demonstration of project</b>
      <br />
      The selected teams shall demonstrate their products /working models in the
      ASIET Campus. Expert team from both industries and academics will evaluate
      the projects. Top 3 projects will receive awards and  cash prizes.
    </div>
  );
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

function PrizeTech() {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      Soon....
    </div>
  )
}

function RegisTech() {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      Soon....
    </div>
  )
}

function Techathon() {
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutTech />,
    },
    { name: "Registration", icon: ChartBarIcon, page: <RegisTech /> },
    { name: "Highlight", icon: ChartBarIcon, page: <HighTech /> },
    { name: "Phases", icon: ChartBarIcon, page: <PhasesTech /> },
    { name: "Prize", icon: LightBulbIcon, page: <PrizeTech /> },
    { name: "Contact", icon: LightBulbIcon, page: <ConTech /> },
  ];
  const { width } = useWindowSize();

  const event = "Techathon";
  const eventDate = "";

  return (
    <>
      <NavWrapper eventDate={eventDate} introVideo={techathonVideo} />
      <div
        className="Techathon"
        style={
          width > 640
            ? {
                backgroundImage: `url(${bgImgD})`,
                backgroundSize: "cover",
                backgroundPosition: "right 0",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                backgroundColor: "var(--bg-color)",
                boxShadow: "inset 0px 0px 50px 0px black, inset 0px 90px 50px -20px black",
              }
            : {
                backgroundImage: `url(${bgImgM})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "150vh",
                boxShadow: "inset 0px 0px 50px -20px black, inset 0px 30px 50px -40px black",
              }
        }
      >
        {/* main content */}
        <div className="flex flex-col justify-center h-screen p-5 md:p-10">
          <h1
            className="text-4xl font-bold  text-[var(--primary-color)] uppercase md:text-6xl"
            style={{ fontFamily: "Azonix" }}
          >
            Techathon 2K23
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:pt-4">
            24 Hours of Innovation
          </h2>
          {/* description */}
          <p className="text-base text-justify text-[var(--secondary-color)] md:pt-4 md:w-1/3 2xl:w-1/2 leading-6">
            Adi Shankara Techathon'23 provides a dynamic platform for talented
            engineering students to showcase their innovative solutions,
            products, prototypes, and working models to address relevant
            problems. The main objective is to foster a spirit of innovation and
            encourage problem-solving among aspiring engineers, specifically
            within the wide domain of IoT. The event invites creative,
            resourceful, and impactful projects that demonstrate technical
            advancement and contribute to the overall welfare of society. This
            platform serves as an opportunity for students to integrate
            technical knowledge and demonstrate their ability to drive positive
            change through a holistic approach.
          </p>
          {/* basic rounded line button */}
          <button
            className="md:w-1/4 text-center text-[var(--secondary-color)] rounded-full duration-300 py-5 px-6 text-lg font-extrabold uppercase mt-8 hover:bg-[#f0f0f054] hover:text-[var(--primary-color)] flex items-center justify-center border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
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
      <Bg />
      <Tab tabs={tabs} eventName={event} />
    </>
  );
}

export default Techathon;
