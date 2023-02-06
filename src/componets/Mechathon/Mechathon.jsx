import React from "react";
import bgImg from "../../assets/Mechathon/bgD.webp";
import bgImgM from "../../assets/Mechathon/bgM.webp";

import {
  ArchiveIcon,
  // ChartBarIcon,
  CloudUploadIcon,
  LightBulbIcon,
  // ViewGridIcon,
} from "@heroicons/react/solid";
import { useWindowSize } from "react-use";
import "./Mechathon.css";
import mechathonVideo from "../../assets/Mechathon/intro.webm";
import ProfImg1 from "../../assets/avatar.webp";
import ProfImg2 from "../../assets/avatar.webp";
import ProfImg3 from "../../assets/avatar.webp";
import NavWrapper from "../Utils/NavWrapper";
import Bg from "../Utils/Bg";
import Tab from "../Utils/Tab";

function AboutMech(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <b>
        “Logic will get you from A to Z, imagination will get you everywhere.”
      </b>
      —Albert Einstein.
      <br />
      <br />
      Mechathon’23 is a technical fiesta conducted by Mechanical Engineering
      department as a part of Hachathon’23. The program provides a power packed
      group of competitions and events which would take place side by side. The
      competition categories include
      <ul className="list-decimal pl-10">
        <li>Go Kart</li>
        <li>Automotive Design Challenge</li>
      </ul>
      The event would be a one of its kind experience and comes forth with
      exciting cash prizes worth 3 lakhs. Competitors from all over India would
      participate in this mega event.
    </div>
  );
}

function EventMech(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <p className="normal-case">
        <b>Go Kart</b> <br />
        <br />
        <ul className="list-disc pl-10">
          <li>VENUE: COLLEGE GROUND/HOSTEL AREA</li>
          <li>COLLABORATORS: SAE INDIA.ASME</li>
          <li>EXPERT PANEL: EXTERNAL -2 AND INTERNAL 3</li>
          <li>EVALUATION STRATEGY:STAGE BY STAGE PRESENTATION IN</li>
          <li>FRONT OF EXPERT PANEL+PERFORMANCE ON THE DAY OF EVENT</li>
          <li>EXPECTED NUMBER OF TEAMS: 20</li>
          <li>REGISTRATION FEE: 6000 PER TEAM</li>
          <li>EXPECTED SPONSERS MAJOR AUTOMOBILE SALES AND SERVICE</li>
          <li>TOTAL CASH PRIZE: 2 LAKHS</li>
        </ul>
        <br />
        <b>Automotive Design Challenge</b>
        <br />
        <br />
        <ul className="list-disc pl-10">
          <li>DESIGN AND ASSEMBLY OF AUTOMOBILE</li>
          <li>
            EVALUATING AERODYNAMIC, AESTHETIC, ERGONOMICS AND SAFETY FEATURES
          </li>
          <li>ALLOWED SOFTWARE- FUSION 360</li>
          <li>
            TOTAL PRIZE- 25KEXPECTED NO: OF TEAMS-25 (MAXIMUM 2 MEMBERS/TEAM)
          </li>
          <li>
            JUDGING PANEL- 2 MEMBERS FROM EXTERNAL AND 1 MEMBER FROM INTERNAL
          </li>
        </ul>
      </p>
    </div>
  );
}

function ContactMech() {
  const team = [
    {
      id: 1,
      fullName: "Dr. Jithesh",
      contact: "+91 9947035813",
      imgSrc: ProfImg1,
      imgAlt: "profile picture",
    },
    {
      id: 2,
      fullName: "Dr. Rahul S",
      contact: "+91 8301888190",
      imgSrc: ProfImg2,
      imgAlt: "profile picture",
    },
    {
      id: 3,
      fullName: "Ms. Harshananda TN",
      contact: "+91 8943046975",
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

function PrizeMech() {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      Soon....
    </div>
  )
}

function RegisMech() {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      Soon....
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
    { name: "Registration", icon: CloudUploadIcon, page: <RegisMech /> },
    { name: "Events", icon: CloudUploadIcon, page: <EventMech /> },
    // { name: "Awards", icon: ChartBarIcon, page: <AwardYoung /> },
    // { name: "FAQ", icon: ViewGridIcon, page: <FaqYoung /> },
    // { name: "Guidelines", icon: LightBulbIcon, page: <GuideYoung /> },
    { name: "Prize", icon: CloudUploadIcon, page: <PrizeMech /> },
    { name: "Contact", icon: LightBulbIcon, page: <ContactMech /> },
  ];
  const { width } = useWindowSize();

  const event = "Mechathon";
  const eventDate = "";

  return (
    <>
      <NavWrapper eventDate={eventDate} introVideo={mechathonVideo} />
      <div
        className="relative"
        style={
          width > 640
            ? {
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "140vh",
                backgroundColor: "var(--bg-color)",
                boxShadow: "0px 0px 50px 0px var(--bg-color)",
              }
            : {
                backgroundImage: `url(${bgImgM})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "120vh",
                boxShadow: "0px 0px 50px 0px var(--bg-color)",
              }
        }
      >
        <div className="Mechathon flex h-full">
          {/* <div className="h-[50vh] flex flex-row">
            <video autoPlay loop muted>
              <source src={inroVideo} type="video/mp4" />
            </video>
          </div> */}
          {/* main content */}
          <div className="flex flex-col justify-center p-5 md:p-10 2xl:pl-24">
            <h1
              className="text-2xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
              style={{ fontFamily: "Azonix" }}
            >
              Mechathon 2K23
            </h1>
            {/* sub heading */}
            <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
              24 hours of innovation
            </h2>
            {/* description */}
            <p className="text-base text-[#f0f0f070] 2xl:text-2xl pt-4 md:pt-10 md:w-1/3 2xl:w-1/2 leading-6 text-justify">
              Mechathon'23 is a technical festival organized by the Mechanical
              Engineering department as part of Hachathon'23. The event offers a
              diverse range of competitions and events, including Go-Kart and
              Automotive Design Challenge, that will bring together participants
              from across India. The competition categories are expected to be
              challenging and exciting, testing the skills and creativity of
              participants in the field of mechanical engineering, with exciting
              cash prizes worth 3 lakhs on offer. Mechathon'23 promises to be a
              one-of-a-kind experience for participants and a showcase of the
              latest trends and advancements in mechanical engineering.
            </p>
            {/* basic rounded line button */}
            <button
              className="w-full md:w-1/4 p-5 md:p-auto text-center text-[var(--secondary-color)] rounded-full duration-300 md:py-5 text-xl font-bold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[var(--secondary-color)] flex items-center justify-center border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
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
          </div>
        </div>
      </div>
      <Bg />
      <Tab tabs={tabs} eventName={event} />
    </>
  );
}

export default Mechathon;
