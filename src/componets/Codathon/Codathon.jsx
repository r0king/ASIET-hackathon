import React, { useEffect } from "react";
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
import codathonVideo from "../../assets/Codathon/intro.webm";
import NavWrapper from "../Utils/NavWrapper";
import Bg from "../Utils/Bg";
import Tab from "../Utils/Tab";
import PrizeCards from "../Utils/PrizeCard";
import ProfImg1 from "../../assets/Codathon/facCont11.webp"
import ProfImg2 from "../../assets/Codathon/facCont21.webp"
import ProfImg3 from "../../assets/Codathon/facCont3.webp";
import ProfImg4 from "../../assets/Codathon/studCont1.webp"
import ProfImg5 from "../../assets/Codathon/studCont2.webp"

function AboutCode(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:min-h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <p>
        <b>Adi Shankara Codeathon</b><br /><br />
        Hackathons are rapidly becoming one of the most popular and important events in the technology world, and for good reason. They bring together talented individuals from a variety of backgrounds to collaborate, build, and innovate in a short period of time. Here are just a few of the reasons why attending the hackathon in ASIET is so important:
      </p><br />
      <ul className="list-decimal pl-10">
        <li><b>Encourages Innovation:</b> Hackathons are a breeding ground for new and innovative ideas. By bringing together a diverse group of individuals with different skill sets and perspectives, <b>Adi Shankara Hackathon</b> creates a unique environment for creativity and problem-solving. The fast-paced nature of hackathons means that participants are forced to think outside the box and come up with new and creative solutions to complex problems.</li><br />
        <li><b>Builds Community:</b> <b>Adi Shankara Hackathon</b> is an excellent way to build and strengthen the tech community. It brings together people from different backgrounds and industries to collaborate and network. By working together, participants can form meaningful relationships and build lasting connections.</li><br />
        <li><b>Offers Career Opportunities:</b> <b>Adi Shankara Hackathon</b> is a great way to showcase your skills and make connections in the tech industry. Many participants come here with the intention of making connections that can help advance their careers. Companies and recruiters often attend hackathons to find the best and brightest talent.</li><br />
        <li><b>Provides Hands-On Experience:</b> <b>Adi Shankara Hackathon</b> is an excellent opportunity for participants to get hands-on experience with new technologies and tools. They are an ideal way for people to learn new skills, try out new ideas, and get feedback from other participants and industry experts.</li><br />
        <li><b>Promotes Diversity and Inclusion:</b> <b>Adi Shankara Hackathon</b> is a great way to promote diversity and inclusion in the tech industry. They bring together individuals from different backgrounds and perspectives, creating an environment where everyone's voice can be heard and everyone's ideas can be considered.</li><br />
      </ul>
    </div>
  );
}

function RegisCode(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:min-h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      We have joined forces with DevFolio to host this Hackathon. To sign up, you need to complete the registration process on the DevFolio website. The registration link can be found here.
    </div>
  );
}

function ThemesCode(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:min-h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <p><b>Themes</b><br /><br />
        Codeathons typically have a theme or focus area that participants work on during the event. Some common themes for codeathons include:
      </p><br />
      <ul className="list-decimal pl-10">
        <li><b>Artificial Intelligence and Machine Learning:</b> Participants build projects using AI and ML technologies to solve real-world problems.</li>
        <li><b>Web Development:</b> Participants create websites, web applications, and other digital products.</li>
        <li><b>Cybersecurity:</b> Participants develop solutions to protect against cyber threats and secure data.</li>
        <li><b>Data Science:</b> Participants analyze and visualize large datasets to gain insights and make predictions.</li>
        <li><b>Virtual and Augmented Reality:</b> Participants create virtual and augmented reality experiences.</li>
        <li><b>Blockchain:</b> Participants build projects that use blockchain technology to secure and track transactions.</li>
        <li><b>Social Impact:</b> Participants create projects that address social and environmental challenges.</li>
        <li><b>Speech processing:</b> Participants develop projects that focuses on the design, development, and implementation of technologies that enable computers to understand and generate human speech.</li>
        <li><b>Natural Language Processing:</b> Participants can build projects that aim to develop algorithms and models that can process and analyze large amounts of natural language data, including speech and text, to extract meaning and perform various language-related tasks such as sentiment analysis, machine translation, and text classification.</li>
        <li><b>Computer Vision:</b> Computer Vision projects aim to develop algorithms and models that can analyze visual data and perform tasks such as object recognition, image segmentation, and scene understanding, with applications ranging from self-driving cars and security systems to medical imaging and augmented reality.</li>
      </ul>
    </div>
  );
}

function StagesCode(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify h-full md:min-h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <b><b>Adi Shankara Hackathon</b> Process</b>
      <br /><br />
      <b>Adi Shankara Hackathon</b> is a technology event where participants work together to create innovative solutions to real-world problems. The process for this hackathon may involve the following steps:
      <br /><br />
      <ul className="list-decimal pl-10">
        <li><b>Registration through DevFolio:</b> Participants may be required to register for the hackathon through a platform such as DevFolio. This platform may be used to manage the registration process, collect participant information, and communicate updates and information about the hackathon</li>
        <li><b>Collection of Ideas:</b> Participants will be asked to submit their ideas for projects they would like to work on during the hackathon. These ideas may be reviewed and evaluated by the organizers to determine which projects will be selected for the hackathon.</li>
        <li><b>Registration Ends:</b> The registration period for the hackathon will end on a specified date. After this date, the organizers will begin the process of shortlisting the ideas and forming teams.</li>
        <li><b>Shortlisting Ideas:</b> The organizers will review the submitted ideas and select a set of projects to be included in the hackathon. This may involve evaluating the feasibility, originality, and impact of each idea. The selected projects will be assigned to teams of participants.</li>
        <li><b>Codeathon Day:</b> The actual hackathon event, referred to as ASH Day, will take place on a specified date. During this time, participants will work together to build their projects and present their solutions to a panel of judges. Prizes and awards may be given to the teams with the best projects.</li>
      </ul>
      <br />
      This is a general outline of the process for <b>Adi Shankara Hackathon</b>, and specific details may vary depending on the event. However, the goal of the hackathon is to bring together talented individuals to collaborate and create innovative solutions to real-world problems.
      <br /><br />
      <b>Key Take Aways From Adi Shankara Codeathon</b>
      <br /><br />
      <ul className="list-decimal pl-10">
        <li><b>Business Incubators:</b> Hackathons are often hosted by business incubators, which are organizations that help startups and entrepreneurs to grow their businesses. By participating in a hackathon, you can learn from experienced business leaders and entrepreneurs, and get valuable insights into the process of starting and growing a business.</li>
        <li><b>Interaction with Developer Community:</b> Hackathons are a great opportunity to connect with other developers, designers, and tech enthusiasts. You can learn from others, share your ideas and experiences, and collaborate on projects. This can help you to expand your network and develop new skills and knowledge.</li>
        <li><b>Teamwork:</b> Hackathons are all about working together in teams to build new products and solutions. Teamwork is a key skill that you can develop through hackathons, as you will need to work closely with others to complete projects in a short amount of time. This can help you to build strong relationships with your team members and learn how to collaborate effectively.</li>
        <li><b>Networking:</b> Hackathons provide a platform for you to meet and network with people from different backgrounds and industries. This can help you to expand your network and make new connections that can be valuable for your future career.</li>
        <li><b>Rise to Innovation:</b> Hackathons encourage creativity, innovation, and problem-solving. By participating in a hackathon, you can challenge yourself to come up with new and innovative solutions to real-world problems. This can help you to develop new ideas and skills, and make a positive impact on society.</li>
      </ul>

    </div>
  );
}

function GuideCode(props) {
  return (
    <div className='md:p-10 p-3 leading-8 text-base md:text-justify h-full md:h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <ul className="list-decimal pl-10">
        <li>Reporting time at the ADI SHANKARA HACKATHON 2023 Venue 8.00 am on 28-03-2023.</li>
        <li>Registration starts at 9.00 am.</li>
        <li>Breakfast at 08.30 am- 09.30 am.</li>
        <li>Inauguration at 09.00 am on 28-03-2022. Venue : Auditorium</li>
        <li>
          The registration kit contains the following items. - Agenda sheet
        </li>
        <ul className="list-disc pl-10 leading-5">
          <li>Instruction Sheet</li>
          <li>Progress sheet</li>
          <li>Problem statement sheet</li>
          <li>Breakfast, lunch, dinner coupons - ID cards</li>
        </ul>
        <li>Coding starts at 10.00 am on 28-03-2022</li>
        <li>
          Team members have to wear the ID cards all the times when they are at
          the venue.
        </li>
        <li>
          The students are not allowed outside the area marked for ADI SHANKARA
          HACKATHON 2023, until the valedictory function.
        </li>
        <li>
          Valedictory function will be held at 11.00 am on 29-03-2022. Venue :
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
          29-03-2023, at the work location.
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
          minutes along with the code on Devfolio before 8 am on MARCH 29th.
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
      fullName: "Mr. P.V. Rajaraman",
      contact: "+91 9940418252",
      imgSrc: ProfImg1,
      imgAlt: "profile picture",
    },
    {
      id: 2,
      fullName: "Mrs. Neetha K Nataraj",
      contact: "+91 9400414349",
      imgSrc: ProfImg2,
      imgAlt: "profile picture",
    },
    {
      id: 3,
      fullName: "Mr. Sumesh MS",
      contact: "+91 19447414654",
      imgSrc: ProfImg3,
      imgAlt: "profile picture",
    },
    {
      id: 4,
      fullName: "Musafir KY",
      contact: "+91 8089520160",
      imgSrc: ProfImg4,
      imgAlt: "profile picture",
    },
    {
      id: 5,
      fullName: "Electta Varghese",
      contact: "+91 9605536513",
      imgSrc: ProfImg5,
      imgAlt: "profile picture",
    }
  ];

  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <h1 className="text-xl font-semibold text-center pt-14">Faculty Coordinators</h1>
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
                  <p className="text-base text-white font-bold">
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
      <h1 className="text-xl font-semibold text-center pt-14">Student Coordinators</h1>
      <div className="mx-auto max-w-5xl flex flex-col">
        {/* :TEAM CONTAINER */}
        <div className="mt-5">
          {/* ::Members Row 1 */}
          <div className="flex flex-wrap justify-center items-center">
            {team.slice(3, 6).map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 group relative m-5 p-5 w-56 h-56 flex justify-center opacity-70 items-center rounded-full bg-black overflow-hidden"
              >
                {/* :::picture */}
                <img
                  src={member.imgSrc}
                  alt={member.imgAlt}
                  className="z-1 group-hover:z-0 absolute inset-0 w-full h-full object-cover group-hover:opacity-10 transition duration-200"
                />
                {/* :::details */}
                <div className="absolute bottom-[10%] flex flex-col justify-center items-center space-y-2">
                  <p className="text-base text-white font-bold">
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
    <div className="text-base md:text-justify w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
      <PrizeCards prize={["Rs.1,00,000 ($1200)", "Rs.50,000 ($600)", "Rs.20,000 ($240)"]} title={["", "", "(5 Nos)"]} />
    </div>
  )
}

function Codathon() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutCode />,
    },
    { name: "Registration", icon: ViewGridIcon, page: <RegisCode /> },
    { name: "Categories", icon: CloudUploadIcon, page: <ThemesCode /> },
    { name: "Stages", icon: ChartBarIcon, page: <StagesCode /> },
    // { name: "FAQ", icon: ViewGridIcon, page: <FaqYoung /> },
    { name: "Guidelines", icon: LightBulbIcon, page: <GuideCode /> },
    { name: "Prize", icon: LightBulbIcon, page: <PrizeCode /> },
    { name: "Contact", icon: LightBulbIcon, page: <ContactCode /> },
  ];

  const { width } = useWindowSize();

  const event = "Codathon";
  const eventDate = "Mar 28, 2023 00:00:00";

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
              boxShadow: "inset 0px 0px 12px 10px black, inset 0px 90px 90px -10px black",
            }
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
        <div className="Codathon flex flex-col h-screen justify-center p-5 md:p-12">
          <h1
            className="text-4xl font-bold  text-[#0eedf5] uppercase md:text-6xl"
            style={{ fontFamily: "Azonix" }}
          >
            Codathon 2K23
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-white pt-5">
            28<sup>th</sup> MARCH 2023
          </h2>
          {/* description */}
          <p className="text-base text-justify text-white pt-5 md:w-[45%] leading-6">
            Codathon is a coding event where developers, programmers, and tech enthusiasts come together to collaborate and create innovative software solutions. Participants work in teams to design, build, and demonstrate their solutions to real-world scientific problems, using a variety of programming languages and technology platforms. Codathon provides a fast-paced and dynamic environment for participants to showcase their coding skills, network with like-minded individuals, and gain hands-on experience in problem-solving and solution development. With a focus on driving progress and innovation in the tech industry, this event is an exciting and challenging opportunity for coders of all levels to learn, grow, and make an impact.
          </p>
          {/* basic rounded line button */}
          {/* <button
            className="md:w-1/4 text-center max-h-16 md:max-h-auto text-white rounded-full duration-300 py-5 px-6 text-lg font-extrabold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[#0eedf5] flex items-center justify-center border border-[#0eedf5] hover:border-white"
            style={{
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)",
            }}
          > */}
            <div
              className="apply-button"
              data-hackathon-slug="YOUR-HACKATHON-SLUG"
              data-button-theme="dark"
              style={{height: "44px", width: "312px"}}
            ></div>
            {/* <svg
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
          </button> */}
        </div>
      </div>
      <Bg />
      <Tab tabs={tabs} eventName={event} />
    </>
  );
}

export default Codathon;
