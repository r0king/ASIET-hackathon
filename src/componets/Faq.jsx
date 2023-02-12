import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import "./Scrollbar.css";
import { Parallax } from "react-scroll-parallax";

import neonImg from "../assets/neonlight.webp"

function Answer() {
  return (
    <div>
      <b>The benefits of participating in a hackathon include:</b> <br />
      <ul className="list-disc pl-10 text-justify"> 
        <li><b>A valuable learning experience:</b> Participating in a hackathon provides an opportunity to test new skills and technologies in a focused and motivated environment. It also offers exposure to the latest advancements in the field and a supportive atmosphere where questions, no matter how basic, are encouraged.</li>
        <li><b>Personal growth and development:</b> Hackathons challenge participants to step out of their comfort zones and develop new skills. This might include pitching ideas to strangers, working with a team, and presenting work to a large audience. These experiences can be intimidating, but also exciting and rewarding, particularly for those who are shy or struggle with impostor syndrome.</li>
        <li><b>Hands-on management and team dynamics:</b> Hackathons offer a unique chance to practice smart management and learn about team dynamics. With limited time and resources, participants must make quick decisions, delegate tasks, and work efficiently under pressure.</li>
        <li><b>Career exploration:</b> Hackathons provide an opportunity to learn about new career paths and connect with industry professionals. Company representatives often attend hackathons to recruit new talent, making it a valuable opportunity to network and explore potential workplaces in a more relaxed and natural setting.</li>
        <li><b>Innovation:</b> Hackathons foster innovation by encouraging individuals to think creatively and develop new solutions to problems.</li>
        <li><b>Competition:</b> Hackathons provide a competitive environment where individuals can test their skills against others and see their work evaluated by a panel of experts.</li>
        <li><b>Networking opportunities:</b> Hackathons offer countless opportunities to build professional relationships, including team-matching sessions, food breaks, and coffee breaks. In some cases, hackathons may even offer closed groups or messaging platforms for participants to connect before the event.</li>
        <li><b>A stepping stone to entrepreneurship:</b> Many individuals attend hackathons with the goal of exploring business ideas and potentially forming startups. This can be an exciting opportunity to bring ideas to life and connect with like-minded individuals.</li>
        <li><b>Recognition and attention:</b> While not the primary focus, winning a hackathon can help market oneself and add a significant accomplishment to a CV. Even if a participant is not a finalist, they can still benefit from all of the above experiences and opportunities.</li>
      </ul>
    </div>
  )
}


const Faq = () => {
  const faq = [
    {
      number: 1,
      question: "What is a Hackathon?",
      answer:
        "A hackathon is a technology-focused event where participants work together in teams to develop innovative projects in a short amount of time, typically over the course of one or more days.",
    },
    {
      number: 2,
      question: "What are the benefits of participating in a Hackathon?",
      answer: <Answer />
    },
    {
      number: 3,
      question: "When does Adi Shankara Hackathon 2K23 begin?",
      answer:
        "The Adi Shankara Hackathon 2K23 will begin on March 28th, 2023, featuring Codathon and Gameathon events that take place simultaneously.",
    },
    {
      number: 4,
      question: "How should I register for the Adi Shankara Hackathon 2K23?",
      answer: "Participants must choose the events they are interested in under Adi Shankara Hackathon 2K23 and register separately. At present registration is only open for Codathon and Gameathon events. Registration for remaining hackathon events will be announced. ",
    },
    {
      number: 5,
      question: "Is the registration amount the same for all hackathon events?",
      answer: "No. The registration fee varies for each hackathon event. For further information, please visit the event's respective webpage or contact the event coordinators.",
    },
    {
      number: 6,
      question: "Will you provide accommodation facilities?",
      answer: "Yes. Accommodation can be arranged with prior notice. The cost of accommodation must be paid separately. For further information, please reach out to the respective event coordinators.",
    },
  ];
  const targetRef = React.useRef(null);

  const [targetElement, setElement] = useState();
  useEffect(() => {
    setElement(targetRef.current);
  }, []);

  return (
    <div id="faq" className="relative py-10 w-full overflow-x-hidden ">
      <div className="container mx-auto w-full md:max-h-screen grid grid-cols-2">

        {/* Container */}
        {/* :IMAGE */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          scale={[0.8, 1]}
          targetElement={targetElement}
          opacity={[0.5, 1.3]}
        >
          <div className="h-full col-span-2 md:col-span-1 relative p-4 flex flex-col justify-center items-center">
            <div className="hidden md:block relative w-full h-full max-w-xl">
              <img
                src={neonImg}
                alt="neon light"
                className="absolute w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </Parallax>
        {/* :FAQ */}
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:max-h-screen text-center md:text-left">
          {/* ::Title */}
          <div className="text-2xl font-bold">
            <span className="text-[var(--primary-color)]" ref={targetRef}>
              Frequently Asked
            </span>
            &nbsp;Questions
          </div>
          {/* ::Accordion Panel */}
          <dl className="mx-auto my-10 p-3 max-w-2xl flex flex-col items-center scrollbar md:overflow-y-scroll z-10">
            {faq.map((faq) => (
              <Disclosure key={faq.number}>
                {({ open }) => (
                  <>
                    <Parallax
                      shouldAlwaysCompleteAnimation={true}
                      scale={[0.8, 1]}
                      startScroll={"450%"}
                      targetElement={targetElement}
                      endScroll={"460%"}
                      opacity={[0.5, 1.3]}
                      className="w-full"
                    >
                      {/* Question */}
                      <dt
                        className={`group mt-6 w-full border-b-2 border-gray-700 text-[#f0f0f0] hover:text-[var(--secondary-color)] ${open && "text-[#f0f0f0]"
                          }`}
                      >
                        <Disclosure.Button className="py-5 px-3 w-full flex justify-between items-center">
                          <QuestionMarkCircleIcon
                            className={`${open && "text-[#f0f0f0]"
                              } mt-auto mb-auto flex-shrink-0 mr-2 w-5 h-5 text-[var(--primary-color)] group-hover:text-[#f0f0f0]`}
                            aria-hidden="true"
                          />
                          <span className="mr-auto text-base text-left transition duration-150 ease-in transform group-hover:translate-x-2">
                            {faq.question}
                          </span>
                          <ChevronDownIcon
                            className={`${open && "transform rotate-180 text-[#f0f0f0]"
                              } mt-auto mb-auto flex-shrink-0 ml-2 w-5 h-5 text-[#f0f0f0] group-hover:text-[#f0f0f0]`}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                      </dt>
                      {/* Answer */}
                      <dd className="w-full text-base text-gray-400">
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-left">
                          {faq.answer}
                        </Disclosure.Panel>
                      </dd>
                    </Parallax>
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
