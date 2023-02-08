import React from "react";
import bgImgD from "../../assets/Codathon/bgD.webp";
import bgImgM from "../../assets/Codathon/bgPosterM.webp";
import { useWindowSize } from "react-use";
import "./Codathon.css";
import {
  ArchiveIcon,
  ChartBarIcon,
  CloudUploadIcon,
  LightBulbIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import ProfImg from "../../assets/avatar.webp";
import codathonVideo from "../../assets/Codathon/intro.webm";
import NavWrapper from "../Utils/NavWrapper";
import Bg from "../Utils/Bg";
import Tab from "../Utils/Tab";

function AboutCode(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <b>Adi Shankara Codeathon</b> is a nationwide initiative to provide
      students with a platform to solve some of the pressing problems we face in
      our daily lives, and thus inculcate a culture of product innovation and a
      mindset of problem-solving. This will be a 24 hour coding contest where
      the goal is to create functioning software by the end of the event, which
      can include the programming language used, the operating system, an
      application, an API, or the subject and the demographic group of the
      programmers.
      <br />
      <br />
      <b>Why Adi Shankara Codeathon?</b>
      <ul className="list-disc pl-10">
        <li>Entrepreneurship</li>
        <li>Innovation</li>
        <li>Imagination</li>
        <li>Knowledge</li>
        <li>Opportunity</li>
      </ul>
    </div>
  );
}

function RegisCode(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <h1>Coming Soon</h1>
    </div>
  );
}

function ThemesCode(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <b>Streams</b>
      <ul className="list-disc pl-10">
        <li>Computer Vision,</li>
        <li>Natural Language Processing,</li>
        <li>Speech</li>
        <li>Cyber Security</li>
      </ul>
      <br />
      <br />
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
  );
}

function StagesCode(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <b>ASC Process</b>
      <ul className="list-disc pl-10">
        <li>Registration through DevFolio</li>
        <li>Collection of ideas</li>
        <li>Registration ends</li>
        <li>Shortlisting ideas</li>
        <li>ASH Day</li>
      </ul>
      <br />
      <br />
      <b>Key Take Aways from ASC</b>
      <ul className="list-disc pl-10">
        <li>Business incubators</li>
        <li>Interaction with developer community</li>
        <li>Teamwork</li>
        <li>Networking</li>
        <li>Rise to innovation</li>
      </ul>
    </div>
  );
}

function GuideCode(props) {
  return (
    <div className='md:p-10 p-3 leading-7 text-base md:text-justify h-full md:h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <ul className="list-decimal pl-10">
        <li>Reporting time at the ADI SHANKARA HACKATHON 2023 Venue 8.00 am on 29-03-2023.</li>
        <li>Registration starts at 9.00 am.</li>
        <li>Breakfast at 08.30 am- 09.30 am.</li>
        <li>Inauguration at 09.00 am on 29-03-2022. Venue : Auditorium</li>
        <li>
          The registration kit contains the following items. - Agenda sheet
        </li>
        <ul className="list-disc pl-10 leading-5">
          <li>Instruction Sheet</li>
          <li>Progress sheet</li>
          <li>Problem statement sheet</li>
          <li>Breakfast, lunch, dinner coupons - ID cards</li>
        </ul>
        <li>Coding starts at 10.00 am on 29-03-2022</li>
        <li>
          Team members have to wear the ID cards all the times when they are at
          the venue.
        </li>
        <li>
          The students are not allowed outside the area marked for ADI SHANKARA
          HACKATHON 2023, until the valedictory function.
        </li>
        <li>
          Valedictory function will be held at 11.00 am on 30-03-2022. Venue :
          Auditorium
        </li>
        <li>
          {" "}
          Students are allowed to bring only the items necessary for the event
          such as Laptop, laptop charger, mobile, mobile charger, power
          extension card, Water bottle etc.
        </li>
        <li>
          {" "}
          Students have to bring a permission letter from Head of Department or
          Principal for participating in the event. The letter has to be handed
          over to the volunteers at registration desk.
        </li>
        <li> Students are responsible for all their belongings.</li>
        <li>
          is suggested that one team member to be present at the work place
          always.
        </li>
        <li>
          {" "}
          After the registration, teams will be allotted a team number and the
          work place.
        </li>
        <li> Students can use the limited sports facility.</li>
        <li> Students should use the dust bins for throwing the litter.</li>
        <li> Judges will visit the team to check the work done.</li>
        <li>
          {" "}
          A set of observers will visit the teams 3 times and check the
          progress.
        </li>
        <li>
          {" "}
          Limited facility will be made available for taking rest, during the
          coding phase. (Separate for boys and girls).
        </li>
        <li>
          {" "}
          Breakfast and working lunch and dinner will be provided to the
          participants.
        </li>
        <li>
          {" "}
          Participation certificates will be provided to all the teams on
          30-03-2023, at the work location.
        </li>
        <li>
          {" "}
          Winning teams will get the certificates of award and prizes during the
          valedictory function.
        </li>
        <li> Premises will be under CCTV Surveillance during the hackathon.</li>
        <li> Decision of the judges is Final.</li>
        <li> A separate team would do plagiarism check on the code.</li>
        <li> Original Work needs to be submitted.</li>
        <li> Please bring the daily medication that is required.</li>
        <li> Winner team will get the prize money in the team leader name.</li>
        <li>
          {" "}
          Each team must submit a video demo of your product not longer than 2
          minutes along with the code on Devfolio before 8 am on MARCH 30th.
          Detailed instructions on how to make submissions are available on
          Devfolio’s platform.
        </li>
        <li>
          {" "}
          ADI SHANKARA HACKATHON 2023’s judging criteria will solely as per the
          terms of the committee and not the sponsors.
        </li>
        <li>
          {" "}
          The judging criteria for sponsor’s prizes will be laid out by each
          sponsor separately. Our sponsors will announce winner at a later point
          after the hackathon has ended. ASIET will not be involved in the
          decision making processx1{" "}
        </li>
      </ul>
    </div>
  );
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
        </div>
      </div>
    </div>
  );
}

function PrizeCode() {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      Soon....
    </div>
  )
}

function Codathon() {
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutCode />,
    },
    { name: "Regsitration", icon: ViewGridIcon, page: <RegisCode /> },
    { name: "Categories", icon: CloudUploadIcon, page: <ThemesCode /> },
    { name: "Stages", icon: ChartBarIcon, page: <StagesCode /> },
    // { name: "FAQ", icon: ViewGridIcon, page: <FaqYoung /> },
    { name: "Guidelines", icon: LightBulbIcon, page: <GuideCode /> },
    { name: "Prize", icon: LightBulbIcon, page: <PrizeCode /> },
    { name: "Contact", icon: LightBulbIcon, page: <ContactCode /> },
  ];

  const { width } = useWindowSize();

  const event = "Codathon";
  const eventDate = "Mar 29, 2023 00:00:00";

  return (
    <>
      <NavWrapper eventDate={eventDate} introVideo={codathonVideo} />
      <div
        className="Codathon pt-[6%]"
        style={
          width > 640
            ? {
                backgroundImage: `url(${bgImgD})`,
                backgroundSize: "contain",
                backgroundPosition: "right 0",
                backgroundRepeat: "no-repeat",
                height: "140vh",
                boxShadow: "inset 0px 0px 12px 10px black, inset 0px 90px 90px -10px black",              }
            : {
                backgroundImage: `url(${bgImgM})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "150vh",
                boxShadow: "0px 0px 50px 0px var(--bg-color)",
              }
        }
      >
        <div className="Codathon flex flex-col justify-center h-screen p-5 md:p-10  2xl:p-24">
          <h1
            className="text-4xl font-bold  text-[#0eedf5] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
            style={{ fontFamily: "Azonix" }}
          >
            Codathon 2K23
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-white uppercase md:text-xl 2xl:text-2xl md:pt-7">
            29th March 2023
          </h2>
          {/* description */}
          <p className="text-base text-justify text-white 2xl:text-2xl md:pt-10 md:w-1/3 2xl:w-1/2 leading-6">
            Adi Shankara Codeathon is a national program aimed at empowering
            students to tackle pressing issues in their daily lives through
            product innovation and problem-solving. The event is a 24-hour
            coding competition where participants work to create functional
            software within the given timeframe. This can include programming
            languages, operating systems, applications, APIs, or specific
            subject matter and demographic groups of the programmers. The
            objective of the codeathon is to foster a culture of innovation and
            encourage students to approach problems with a creative and
            solutions-focused mindset.`
          </p>
          {/* basic rounded line button */}
          <button
            className="md:w-1/4 text-center max-h-16 md:max-h-auto text-white rounded-full duration-300 py-5 px-6 text-sm font-bold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[#0eedf5] flex items-center justify-center border border-[#0eedf5] hover:border-white"
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
      <Bg />
      <Tab tabs={tabs} eventName={event} />
    </>
  );
}

export default Codathon;
