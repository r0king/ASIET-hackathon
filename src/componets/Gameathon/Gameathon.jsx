import React from "react";
import bgImgDesk from "../../assets/Gameathon/bgD.png.webp";
import bgImgMobile from "../../assets/Gameathon/bgM.png.webp";
import { useWindowSize } from "react-use";
import "./Gameathon.css";
import {
  ArchiveIcon,
  ChartBarIcon,
  CloudUploadIcon,
  LightBulbIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
// import AboutGame from "./AboutGame";
import RegistrationGame from "./RegistrationGame";
import EligibilityGame from "./EligibilityGame";
import BootcampGame from "./BootcampGame";
import RulesGame from "./RulesGame";
import gameathonVideo from "../../assets/Gameathon/intro.webm";
import ProfImg1 from "../../assets/Gameathon/cont1.jpg";
import ProfImg2 from "../../assets/Gameathon/cont2.jpg";
import ProfImg3 from "../../assets/avatar.webp";
import Tab from "../Utils/Tab";
import Bg from "../Utils/Bg";
import NavWrapper from "../Utils/NavWrapper";
import PrizeCards from "../Utils/PrizeCard";

function AboutGame(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full md:min-h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <p>
        We invite you to participate in a 3-day event at Adi Shankara Institute
        of Engineering & Technology, where students can engage in team-working,
        explore their creativity, and develop a game within three days. This
        event will be supported by our industry partner TILTLABS. They will
        provide participants with a concept along with tools such as Unity and
        Blender to create either casual or hyper-casual games.
      </p>
      <p>
        <br />
        <span className="pl-10"></span>Participants must bring their own laptops
        or systems in order to develop the application. Teams must have a
        minimum of two and a maximum of four members. TILTLABS' technical and
        creative teams will be available on-site to answer any questions or
        concerns during the Gameathon. The final games will be evaluated by
        TILTLABS' Creative Officer and Lead Game Designer along with other
        industry experts.
      </p>
      <p>
        <br />
        <span className="pl-10"></span>TILTLABS will also conduct a 40-hour
        training or bootcamp before the Gameathon to help participants learn the
        basics of game development using Unity and complete their game ideas
        into an application.
      </p>
      <p>
        <br />
        <span className="pl-10"></span>On successful completion of the
        Gameathon, prizes, gifts, scholarships to the TILTEDU education program,
        and internships at TILTLABS will be awarded to the top-performing teams.
        Further, participants will be able to work with TILTLABS' cutting-edge
        gaming development, virtual production, and esports studio on the ASIET
        campus, which will open shortly.
      </p>
    </div>
  );
}

function ContactGame() {
  const team = [
    {
      id: 1,
      fullName: "Joseph George",
      contact: "+91 8547428333",
      imgSrc: ProfImg1,
      imgAlt: "profile picture",
    },
    {
      id: 2,
      fullName: "Nikhil Narayan",
      contact: "+91 7561834836",
      imgSrc: ProfImg2,
      imgAlt: "profile picture",
    },
    {
      id: 3,
      fullName: "Faculty 3",
      contact: "+91 9087654321",
      imgSrc: ProfImg3,
      imgAlt: "profile picture",
    },
    {
      id: 4,
      fullName: "Student 1",
      contact: "+91 9988776655",
      imgSrc: ProfImg3,
      imgAlt: "profile picture",
    },
    {
      id: 5,
      fullName: "Student 2",
      contact: "+91 9988776655",
      imgSrc: ProfImg3,
      imgAlt: "profile picture",
    },
    {
      id: 6,
      fullName: "Student 3",
      contact: "+91 9988776655",
      imgSrc: ProfImg3,
      imgAlt: "profile picture",
    },
  ];

  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <h1 className="text-xl font-semibold text-center">Faculty Coordinators</h1>
      <div className="mx-auto max-w-5xl flex flex-col">
        {/* :TEAM CONTAINER */}
        <div className="mt-5">
          {/* ::Members Row 1 */}
          <div className="flex flex-wrap justify-center items-center">
            {team.slice(0, 3).map((member) => (
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
                <div className="absolute bottom-[10%] flex flex-col justify-center items-center space-y-2">
                  <p className="text-lg text-[var(--primary-color)] font-bold">
                    {member.fullName}
                  </p>
                  <p className="text-sm text-[var(--primary-color)] font-medium">
                    {member.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-xl font-semibold text-center pt-14">Student Coordinators</h1>
      <div className="mx-auto max-w-5xl flex flex-col">
        {/* :TEAM CONTAINER */}
        <div className="mt-5">
          {/* ::Members Row 1 */}
          <div className="flex flex-wrap justify-center items-center">
            {team.slice(3, 6).map((member) => (
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
                <div className="absolute bottom-[10%] flex flex-col justify-center items-center space-y-2">
                  <p className="text-lg text-[var(--primary-color)] font-bold">
                    {member.fullName}
                  </p>
                  <p className="text-sm text-[var(--primary-color)] font-medium">
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

function PrizeGame() {
  return (
    <div className="text-base md:text-justify w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
      <PrizeCards prize={["Rs.1,00,000 ($1200)","Rs.50,000 ($600)","Rs.20,000 ($240)"]}/>
    </div>
  );
}

function Gameathon() {
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutGame />,
    },
    { name: "Eligibility", icon: ChartBarIcon, page: <EligibilityGame /> },
    { name: "Registration", icon: CloudUploadIcon, page: <RegistrationGame /> },
    { name: "Bootcamp", icon: ViewGridIcon, page: <BootcampGame /> },
    { name: "Rules", icon: LightBulbIcon, page: <RulesGame /> },
    { name: "Prize", icon: LightBulbIcon, page: <PrizeGame /> },
    { name: "Contact", icon: LightBulbIcon, page: <ContactGame /> },
  ];

  const { width } = useWindowSize();

  const eventDate = "Mar 28, 2023 00:00:00";

  return (
    <>
      <NavWrapper eventDate={eventDate} introVideo={gameathonVideo} />
      <div
        className="relative"
        style={
          width > 640
            ? {
              backgroundImage: `url(${bgImgDesk})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "140vh",
              backgroundColor: "var(--bg-color)",
              boxShadow: "inset 0px 0px 12px 10px black, inset 0px 90px 90px -10px black",
            }
            : {
              backgroundImage: `url(${bgImgMobile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "120vh",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
        }
      >
        <div className="Gameathon flex h-full">
          {/* main content */}
          <div className="flex flex-col justify-center p-5 md:p-10 2xl:pl-24">
            <h1
              className="text-2xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
              style={{ fontFamily: "Azonix" }}
            >
              Gameathon 2K23
            </h1>
            {/* sub heading */}
            <h2 className="text-lg font-bold text-[var(--secondary-color)] md:text-xl 2xl:text-2xl md:pt-7">
              28<sup>th</sup>, 29<sup>th</sup> & 30<sup>th</sup> MARCH 2023
            </h2>
            {/* description */}
            <p className="text-base text-[#f0f0f070] 2xl:text-2xl pt-4 md:pt-10 md:w-1/3 2xl:w-1/2 leading-6 text-justify">
              A Gameathon is an event where game developers, designers, and enthusiasts come together to create new and innovative video games. Participants form teams and use cutting-edge technology and creative design principles to develop new games from concept to completion within a set time frame. The event provides a platform for collaboration, learning, and creativity, as well as the opportunity for participants to showcase their skills, network with industry professionals, and potentially bring their games to market. With a focus on pushing the boundaries of game design and technology, Gameathons are a fun and exciting way for game enthusiasts to challenge themselves and make their mark on the industry.
            </p>
            {/* basic rounded line button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflq22uUuGh9orK2Wry4Sucx-UlCsqIdJbtqx2atCpD97QZeQ/viewform"
              rel="noreferrer"
              target={"_blank"}
            >
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
            </a>
          </div>
        </div>
      </div>
      <Bg />
      <Tab tabs={tabs} eventName="GameathonTabs" />
    </>
  );
}

export default Gameathon;
