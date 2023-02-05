import React, { useState } from "react";
import bgImg from "../../assets/Civilathon/bg.png.webp";
import { ArchiveIcon, ChartBarIcon, CloudUploadIcon, LightBulbIcon } from '@heroicons/react/solid'
import { useWindowSize } from "react-use";
import "./Civilathon.css";
import { Navbar } from "../NavbarPages";
import ProfImg1 from "../../assets/Civilathon/cont3.webp"
import ProfImg2 from "../../assets/Civilathon/cont1.webp"
import ProfImg3 from "../../assets/Civilathon/cont2.webp"
import civiathonVideo from "../../assets/Civilathon/intro.webm"

function AboutCivil(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>ADI SHANKARA CIVIATHON 2K23</b>, is a technical event hosted by the Department of Civil Engineering,
      ASIET. This event is geared towards aspirants with basic knowledge and aptitude in the area of Civil
      Engineering.
      This encourages the participants to dive deep into the world of various Civil Engineering streams such as
      Structural Engineering, Geotechnical Engineering and knowledge of Civil Engineering based software.
      The Civiathon comprises of two events - Deconstructe_23 and Rapid Build_23. Deconstructe_23 is intended
      for students from Civil Engineering, Diploma as well as from Architectural background. Rapid Build_23
      expects an audience of Higher Secondary school students
    </div>
  )
}

function DeconCivil(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full md:h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      A civil engineering technical event intended for engineering/ architecture/ diploma students and/or graduates with sufficient theoretical knowledge and design skills to solve complex civil engineering problems. Registration for the event has to be done individually before the deadline and they can form groups of four after the orientation session provided by the organisers, depending on the areas of expertise of each registered participants.
      The event is planned for a span of 24 hours which will include wide range of civil engineering areas like engineering drawing, planning, construction management, structural design, soil investigation, sanitary engineering and quantity estimation. This is scheduled in four stages and the participants are expected to find creative, feasible and technical solutions to the stated complex problem designed by the event organisers. The stages will be focused on the above-mentioned areas and will be evaluated by a panel of experts.
      Essential and relevant training and orientation sessions for the stages will be arranged by the organising committee. Training for softwares AutoCAD, STAAD.PRO, STAAD FOUNDATION, REVIT, PRIMAVERA will be provided prior to the event for registered participants. Certificates will be provided for successful completion of training.
      The winners of the event as decided by an expert jury panel will be awarded a cash prize of one lakh rupees.
      <br /><br />
      <b>Prizes</b>
      <ul className="list-disc pl-10">
        <li>1st prize : Rs. 1,00,000 ($ 1225)</li>
        <li>2nd prize : Rs. 50,000 ($ 610)</li>
      </ul>
      <br />
      <b>Expected participants :</b> Engineering, architecture and diploma students/graduates
      <br /><br />
      <b>Event duration :</b> 12 hours
      <br /><br />
      <b>Stages</b>
      <br />
      <ul className="list-disc pl-10">
        <li><b>Stage 1 : Soil investigation and problem detailing</b>
          <br />
          <span className="">The participants are expected to conduct soil tests and come up
            with detailed soil investigation report.
            The participants are expected to study the given conditions and
            come up with creative and practical solutions</span></li>
        <li><b>Stage 2 : Sketching, analysing and designing</b>
          <br />
          <span className="">The line sketch of intended design has to be sketched using
            AutoCAD software
            The foundation analysis and design is to be completed using
            STAAD FOUNDATION software.
            All the other structural elements are to be analysed and designed
            using STAAD software</span></li>
        <li><b>Stage 3 : Estimation and project management</b>
          <br />
          <span className="">Detailed estimation and cost analysis to be carried out
            Schedule the project using MS projects</span></li>
        <li><b>Stage 4 : 3-D rendering</b>
          <br />
          <span className="">The final detailed structure to be 3D modelled using REVIT Software</span></li>
      </ul>
      <br /><br />
      <b>Rules</b>
      <ul className="list-disc pl-10">
        <li>Individual registration must be completed prior to the event in online mode</li>
        <li>Groups of four can be formed on-site after the orientation session.</li>
        <li>The event is spread over a duration of 12 hours. The participants are responsible for proper time management.</li>
        <li>The rules and decisions will be solely made by the organizing chair and liable to changes at any stage of the event.</li>
        <li>Teams should be well versed in AutoCAD, STAAD, REVIT, project management and estimation and training can be availed for any needed course.</li>
        <li>Foundation courses will be provided for aspirants for the required foundation courses. Separate training sessions shall be arranged for needed participants after the payment of training fees.</li>
        <li>The decision of the jury will be final and conclusive</li>
      </ul>
    </div>
  )
}

function RebuildCivil(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full md:h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      An event intended for school students who are interested in building designs and modern construction techniques. The event is planned as a half day session which primarily focus on physical model development. The participants should complete online registration through the website before the deadline. A workshop on relevant areas required for the competition will be provided by subject experts before the commencement of the event. Certificates will be provided for active participation in the workshop. The participants are expected to complete the task using the resources provided by the organisers within the stipulated time.
      The winners of the event as decided by an expert jury panel will be awarded a cash prize of fifty thousand rupees.
      <br /><br />
      <b>Expected participants :</b> Higher secondary school students
      <br /><br />
      <b>Event duration :</b> 5 hours
      <br /><br />
      <b>Prizes</b>
      <ul className="list-disc pl-10">
        <li>1st prize : Rs. 40,000 ($ 400)</li>
        <li>2nd prize : Rs. 30,000 ($ 367)</li>
        <li>3rd prize : Rs. 20,000 ($ 245)</li>
        <li>4th prize : Rs. 10,000 ($ 122)</li>
      </ul><br />
      <b>Stages</b>
      <ul className="list-disc pl-10">
        <li><b>Stage 1 : Plan and sketch</b>
          <br />
          The participants are expected to study the given conditions and
          come up with creative and practical solutions following the
          building by laws and other specifications.
          A simple line sketch is to be sketched using sketch up or other
          similar software.</li>

        <li><b>Stage 2 : Unit preparation and presentation</b>
          <br />
          A final physical model of the structure is to be set by the
          participant using the given materials only.</li>
      </ul>
      <br />
      <b>Rules</b>
      <ul className="list-disc pl-10">
        <li>Individual registration must be completed prior to the event in online mode</li>
        <li>The event is spread over a duration of 5 hours. The participants are responsible for proper time management.</li>
        <li>The rules and decisions will be solely made by the organizing chair and liable to changes at any stage of the event.</li>
        <li>Teams should be well versed in sketch up software and building by laws. Foundation courses will be provided for aspirants for the required foundation courses of Sketch up and builing by laws. Separate training sessions shall be arranged for needed participants after the payment of training fees.</li>
        <li>The decision of the jury will be final and conclusive</li>
      </ul>
    </div>
  )
}

function FAQCivil() {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <br /><b>Q1. Should the four participants of Deconstructe_23 be from the same institute?</b>
      <br />Ans. No. Since the event comprises of engineering and architectural areas, the groups with participants from different streams may be beneficial.
      <br />
      <br /><b>Q2. Who can register for Deconstructe_23?</b>
      <br />Ans. Students or fresh graduates of Civil Engineering, Architecture or civil diploma courses can register for the event.
      <br />
      <br /><b>Q3. Can the groups for Deconstructe_23 be formed after registration?</b>
      <br />Ans. Yes, the groups can be formed after registration with registered participants from other institutes.
      <br />
      <br /><b>Q4. How can the participants do on spot group formation?</b>
      <br />Ans. The details of individually registered participants will be shared by the coordinators to assist on spot group formation
      <br />
      <br /><b>Q5. Is Rapid build_23 individual event?</b>
      <br />Ans. Yes
      <br />
      <br /><b>Q6. Who can register for Rapid build_23?</b>
      <br />Ans. Higher secondary school students can register for this event
      <br />
      <br /><b>Q7. Should the participants for Rapid Build_23 bring any materials for prototype creation?</b>
      <br />Ans. No. all the required materials will be provided during the event.
      <br />
      <br /><b>Q8. Will accommodation be provided for participants?</b>
      <br />Ans. No, the event will conclude within 12 hours and hence there will be no need for stay back.
      <br />
      <br /><b>Q9. Will there be elimination at any level of the competition?</b>
      <br />Ans. No. Each stage will be separately evaluated and will be considered for the final judgement.
      <br />
      <br /><b>Q10. How will the training sessions be provided?</b>
      <br />Ans. Training will be online/offline depending on the course opted by the participants registering for the training. Training fee is not included in the registration fee. Details will be intimated personally
    </div>
  )
}

function ConCivil() {
  const team = [
    {
      id: 1,
      fullName: "Ms. Jyothi Lekshmi R",
      contact: "+91 9446148949",
      imgSrc: ProfImg1,
      imgAlt: "profile picture",
    },
    {
      id: 2,
      fullName: "Ms. Jeeva P Winto",
      contact: "+91 7994544484",
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

function Civilathon() {
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutCivil />
    },
    { name: "DECONSTRUCTE", icon: CloudUploadIcon, page: <DeconCivil /> },
    { name: "RAPID BUILD", icon: ChartBarIcon, page: <RebuildCivil /> },
    { name: "FAQ", icon: ChartBarIcon, page: <FAQCivil /> },
    { name: "Contact", icon: LightBulbIcon, page: <ConCivil /> },
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
            // countDate="Mar 28, 2023 00:00:00"
          />
        </div>
        <div className="absolute top-0 h-screen flex justify-center items-center w-full z-40 ">
          {/* navbar */}
          <video autoPlay muted loop className="md:h-full w-full object-cover">
            <source src={civiathonVideo} type='video/mp4; codecs="avc1"' />
          </video>
        </div>
      </div>
      <div
        className="Civilathon"
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
        {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}

        {/* main content */}
        <div className="flex flex-col justify-center h-screen p-5 md:p-10  2xl:p-24">
          <h1
            className="text-4xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
            style={{ fontFamily: "Azonix" }}
          >
            Civiathon
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
            24 Hours of Innovation
          </h2>
          {/* description */}
          <p className="text-base text-justify text-[var(--secondary-color)] 2xl:text-2xl md:pt-10 md:w-1/3 2xl:w-1/2 leading-6">
            Civiathon is a rapid and collaborative hackathon aimed at the discipline of Civil Engineering. It is an excellent platform for students with limited experience in coding to showcase their skills and talents, in the said discipline.
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

      <div className="Civilathon  my-10 mb-16">
        <div className="bg-animation -z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        <div className=" py-2 sticky top-0 z-10">
          <div className="w-[90vw] mx-auto md:w-full md:max-w-5xl rounded-full border border-gray-200 bg-black/70 overflow-hidden">


            {/* :LARGE DEVICES */}
            <div className="relative  sm:block overflow-hidden">
              {/* ::Navigation Tabs */}
              <nav aria-label="Tabs">
                <ul className="grid grid-flow-col auto-cols-fr">
                  {tabs.map(tab => {
                    const Icon = tab.icon
                    return (
                      <li key={tab.name} className={`relative z-10 rounded-full flex justify-center items-center text-base ${tab.name === currentTab ? "transition duration-300 text-black" : "text-gray-400 hover:text-gray-500"}`}>
                        <button type="button" className="md:p-4 p-2 w-full inline-flex justify-center  text-center md:text-sm text-[.6rem] font-semibold" onClick={() => setCurrentTab(tab.name)}>
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
              <div className="absolute inset-0 mx-auto w-full h-full rounded-full flex flex-col justify-center bg-black/80">
                <div className="relative h-full transition-all duration-300 ease-in" style={{ transform: `translateX(${translateValue}%)` }} >
                  <div className="h-full rounded-full bg-[var(--bg-color)]" style={{ width: `${1 / (tabs.length) * 100}%` }} />
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

export default Civilathon;
