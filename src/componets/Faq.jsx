
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'



const Faq = () => {

  const faq = [
    {
      number:1,
      question:"What is Fancy best component?",
      answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!"
    },
    {
      number:2,
      question:"I have a technical issue I need resolved, how do I contact Fancy support?",
      answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus."
    },
    {
        number:3,
        question:"What is Fancy best component?",
        answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!"
      },
      {
        number:4,
        question:"What is Fancy best component?",
        answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!"
      },
      {
        number:5,
        question:"What is Fancy best component?",
        answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!"
      },
      {
        number:6,
        question:"What is Fancy best component?",
        answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!"
      },
      {
        number:7,
        question:"What is Fancy best component?",
        answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!"
      },
      {
        number:8,
        question:"What is Fancy best component?",
        answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!"
      },
  ]

  return (
    <div className="relative py-10 w-full bg-black overflow-hidden h-screen my-[5vh] shadow-[0_35px_60px_15px_rgba(0,0,0,1)]">
      <div className="container mx-auto w-full md:max-h-screen grid grid-cols-2"> {/* Container */}

        {/* :IMAGE */}
        <div className="col-span-2 md:col-span-1 relative p-4 flex flex-col justify-center items-center">
          <div className="hidden md:block relative w-full h-full max-w-xl">
            <img src="https://fancytailwind.com/static/neon2-acb9ac107b3f843a5552c2603c29cd79.jpg" alt="" className="absolute w-full h-full object-cover object-center" />
          </div>
        </div>

        {/* :FAQ */}
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:max-h-screen text-center md:text-left">
          {/* ::Title */}
          <div className="text-4xl md:text-5xl lg:text-6xl">
           Frequently Asked Questions
          </div>
          {/* ::Accordion Panel */}
          <dl className="mx-auto my-10 p-3 max-w-2xl flex flex-col items-center md:overflow-y-scroll">
            {
              faq.map(faq => (
                <Disclosure key={faq.number} >
                  {({ open }) => (
                    <>
                      {/* Question */}
                      <dt className={`group mt-6 w-full border-b-2 border-gray-700 text-gray-400 hover:text-white ${open && "text-white"}`}>
                        <Disclosure.Button className="py-5 px-3 w-full flex justify-between items-center">
                          <QuestionMarkCircleIcon className={`${open && 'text-white'} flex-shrink-0 mr-2 w-5 h-5 text-gray-600 group-hover:text-white`} aria-hidden="true" />
                          <span className="mr-auto text-base text-left font-semibold transition duration-150 ease-in transform group-hover:translate-x-2">{faq.question}</span>
                          <ChevronDownIcon className={`${open && 'transform rotate-180 text-white'} flex-shrink-0 ml-2 w-5 h-5 text-gray-600 group-hover:text-white`} aria-hidden="true" />
                        </Disclosure.Button>
                      </dt>
                      {/* Answer */}
                      <dd className="w-full text-base text-gray-200">
                        <Disclosure.Panel className="px-4 pt-4 pb-2">
                          {faq.answer}
                        </Disclosure.Panel>
                      </dd>
                    </>
                  )}
                </Disclosure>
              ))
            }
          </dl>
        </div>

      </div>
    </div>
  )
}

export default Faq;
