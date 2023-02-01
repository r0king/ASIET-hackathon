import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import "./Scrollbar.css";

const Faq = () => {
  const faq = [
    {
      number: 1,
      question: "What is the Adi Shankara Hackostav 2k23?",
      answer:
        "The Adi Shankara Hackostav 2k23 is a 3-day long hackathon of 24 hours each hackathon conducted by the Adi Shankara Institute of Engineering and Technology in collaboration with the Jyothi institute of Engineering and Technology. It aims to develop a skillset and expand the horizons of brilliant minds.",
    },
    {
      number: 2,
      question:
        "When is the event scheduled?",
      answer:
      "The event is proposed to be conducted from 3rd March 2023 to 5th March 2023.",
    },
    {
      number: 3,
      question: "What are the different events under the  Adi Shankara Hackostav?",
      answer:
        "Codeathon,Productathon, Gameathon, Mechathon, Civilathon, Bizthon. The event is also inclusive of an award for the Young Scientist which would be accorded on the basis of his/her idea and creativity",
    },
    {
      number: 4,
      question: "Is this a 24- hour long event?",
      answer:
        "Yes.",
    },
    {
      number: 5,
      question: "What are the criteria on which our designs and ideas are evaluated?",
      answer:
        "The participants are expected to find creative, feasible and technical solutions to the stated complex problem designed by the event organisers. The stages will be focused on the above-mentioned areas and will be evaluated by a panel of experts.The winners of the event as decided by an expert jury panel will be awarded a cash prize of one lakh rupees. ",
    },
    {
      number: 6,
      question: "What are the domains on which our idea can be accepted?",
      answer:
        "You would be given some themes under which you need to formulate and pitch your ideas.",
    },
    {
      number: 7,
      question: "What are the rules to be awarded as the Young Scientist?",
      answer:
        "Any aspiring young scientists (students from 8th to 12th standard) are eligible.Unlike other similar events, here the students have to go through different stages which will transform them into entrepreneurs. From the second stage onwards, a dedicated mentor will work in tandem with the students.The winner and the runner-ups would be awarded witht the cash prizes",
    },
    {
      number: 8,
      question: "What are the rules for Productathon?",
      answer:
        "Link to Rules of Productathon|Needs to be updated",
    },
    {
      number: 9,
      question: "What are the rules for Gameathon?",
      answer:
        "Around 20 teams will be allocated for participation on a first-come, first-served basis. For those who are new to game development, TILTLABS' will also be conducting a 40-hour Bootcamp before the Gameathon to help participants understand the basics of game development using Unity and complete their game ideas into an app.On successful completion of the Gameathon, prizes, gifts, scholarships to the TILTEDU education program, and internships at TILTLABS will be awarded to the top-performing teams.",
    },
    {
      number: 10,
      question: "What are the rules for Civilathon?",
      answer:
        "Link to Rules of Civilathon|Needs to be updated",
    },
    {
      number: 11,
      question: "What are the rules for Bizthon?",
      answer:
        "Participants are given six themes. Each team has to make a video on an innovative business idea to be launched in a digital platform/App for 4-5 minutes based on the  themes.",
    },
    {
      number: 12,
      question: "What are the rules for Mechathon?",
      answer:
        "Link to Rules of Ideathon|Needs to be updated",
    },
  ];

  return (
    <div
      id="faq"
      className="relative py-10 w-full  overflow-x-hidden my-[5vh]"
      style={{
        backgroundColor: "rgba(0,0,0, 0.5)",
        boxShadow: "0 0px 5vh 15vh rgba(0,0,0, 0.5)",
      }}
    >
      <div className="container mx-auto w-full md:max-h-screen grid grid-cols-2">
        {" "}
        {/* Container */}
        {/* :IMAGE */}
        <div className="col-span-2 md:col-span-1 relative p-4 flex flex-col justify-center items-center">
          <div className="hidden md:block relative w-full h-full max-w-xl">
            <img
              src="https://fancytailwind.com/static/neon2-acb9ac107b3f843a5552c2603c29cd79.jpg"
              alt=""
              className="absolute w-full h-full object-cover object-center"
            />
          </div>
        </div>
        {/* :FAQ */}
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:max-h-screen text-center md:text-left">
          {/* ::Title */}
          <div className="text-3xl">
            <span className="text-[var(--primary-color)]">
              Frequently Asked{" "}
            </span>
            Questions
          </div>
          {/* ::Accordion Panel */}
          <dl className="mx-auto my-10 p-3 max-w-2xl flex flex-col items-center scrollbar md:overflow-y-scroll z-10">
            {faq.map((faq) => (
              <Disclosure key={faq.number}>
                {({ open }) => (
                  <>
                    {/* Question */}
                    <dt
                      className={`group mt-6 w-full border-b-2 border-gray-700 text-[#f0f0f0] hover:text-[var(--secondary-color)] ${
                        open && "text-[#f0f0f0]"
                      }`}
                    >
                      <Disclosure.Button className="py-5 px-3 w-full flex justify-between items-center">
                        <QuestionMarkCircleIcon
                          className={`${
                            open && "text-[#f0f0f0]"
                          } flex-shrink-0 mr-2 w-5 h-5 text-[var(--primary-color)] group-hover:text-[#f0f0f0]`}
                          aria-hidden="true"
                        />
                        <span className="mr-auto text-xl text-left transition duration-150 ease-in transform group-hover:translate-x-2">
                          {faq.question}
                        </span>
                        <ChevronDownIcon
                          className={`${
                            open && "transform rotate-180 text-[#f0f0f0]"
                          } flex-shrink-0 ml-2 w-5 h-5 text-[#f0f0f0] group-hover:text-[#f0f0f0]`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                    </dt>
                    {/* Answer */}
                    <dd className="w-full text-lg text-gray-400">
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-left">
                        {faq.answer}
                      </Disclosure.Panel>
                    </dd>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
