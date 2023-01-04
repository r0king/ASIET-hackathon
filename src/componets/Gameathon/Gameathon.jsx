import React, { useState,useCallback } from 'react'
import { CalendarIcon, HeartIcon, ShieldExclamationIcon, SearchIcon, CreditCardIcon, UserGroupIcon } from '@heroicons/react/outline'
import "./GG.css"
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useWindowSize } from "react-use";
const Gameathon = () => {
  const { width } = useWindowSize();
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);
  const features = [
    { name: "Register", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tempora eaque ipsa aut enim laudantium? Vitae amet labore, eveniet nulla qui quis veritatis quisquam quos neque nostrum in doloremque minus!",
      icon: CalendarIcon,
    },
    { name: "Primary Care", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet minima impedit odit nostrum magni alias ipsam in officia, temporibus asperiores ipsum ab qui facere et eaque voluptates repellendus voluptate?",
      icon: HeartIcon,
    },
    { name: "Insurance", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatem laborum sint nostrum maiores commodi fugiat minima exercitationem praesentium animi, ad, ducimus est eum porro voluptas consectetur fuga natus atque.",
      icon: ShieldExclamationIcon,
    },
    { name: "Speciality search", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum rerum nobis maxime, rem minus, architecto blanditiis totam, perspiciatis fuga beatae nisi temporibus eaque nulla doloremque hic dolorum? Itaque, quasi!",
      icon: SearchIcon,
    },
    { name: "Online Payment", 
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus suscipit maiores animi fugiat eveniet dolorem ipsam laudantium obcaecati, fugit explicabo amet perferendis! Deserunt vero officia iusto beatae consectetur debitis voluptates.",
      icon: CreditCardIcon,
    },
    { name: "24/7 Support", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus ipsa consequatur enim maiores? Dolor incidunt fugiat molestias reprehenderit pariatur ipsa labore maiores hic, eius dolorum. Quo nostrum ipsa explicabo?",
      icon: UserGroupIcon,
    },
  ]
  
  const getIcon = (icon) => {
    const Icon = icon
    return (
      <Icon className="w-5 sm:w-8 h-5 sm:h-8" />
    )
  }

  const [currentFeature, setCurrentFeature] = useState(0)

  return (
    <>
    
    <Particles
        className=""
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: width < 450 ? 2 : 12,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: width < 450 ? false : true,
                  force: 10,
                },
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              grab: {
                distance: 150,
                links: {
                  blink: true,
                  consent: false,
                  opacity: 0,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            number: {
              density: {
                enable: true,
                area: 100,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 0.3, max: 0.8 },
            },
          },
          detectRetina: true,
        }}
      />
    
    <div className="mx-auto w-full max-w-7xl">
      {/* CONTAINER */}
      <div className="py-16 px-5 flex flex-col justify-center items-center space-y-10">

        {/* :TITLE CONTAINER */}
        <div className="relative z-50 w-full text-center text-white">
          <h2 className="capitalize">
          <span className="block mt-2 text-3xl sm:text-4xl font-bold">Gameathon</span>
          </h2>
        </div>


        {/* :FEATURES CONTAINER */}
        <div className="mx-auto w-full max-w-5xl grid grid-cols-4 gap-y-5 sm:gap-x-5">

          {/* ::Device container */}
          <div className="order-3 sm:order-2 col-span-full sm:col-span-2 relative flex justify-center">
            <div className="relative z-10 w-60 lg:w-64 overflow-hidden">
              {/* :::smartphone frame */}
              <img src="https://fancytailwind.com/static/device-phone-white-fcfe0f4bbba2c26f3c420e89490ac2a5.png" alt="" className="relative z-10 w-full h-full" />
              {/* :::feature details displayed */}
              <dl className="absolute top-1/2 left-1/2 px-4 h-full flex flex-col justify-center items-center bg-white bg-opacity-90 text-center transform -translate-y-1/2 -translate-x-1/2" style={{ width: "85%", height: "92%" }}>
                {/* Background image */}
                <img src="https://fancytailwind.com/static/doctor1-c976c70d307506e76a6ed1bd0c592475.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover opacity-10" />
                {/* Icon */}
                <span className="relative w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white">
                  {getIcon(features[currentFeature].icon)}
                </span>
                {/* Feature name */}
                <dt className="relative mb-5 bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-xl text-transparent font-bold">{features[currentFeature].name}</dt>
                {/* Feature description */}
                <dd className="relative text-sm text-gray-700">{features[currentFeature].description}</dd>
                {currentFeature==0?<button id="register_btn" className='bg-gradient-to-br from-green-500 to-blue-500'>Register</button>:""}
              </dl>
            </div>
            {/* :::background circles */}
           
          </div>



          {/* ::Features container left  */}
          <div className="order-1 sm:order-1 col-span-full sm:col-span-1 z-20 w-full grid grid-cols-3">
            {/* :::feature 1 */}
            <div className="col-span-1 sm:col-span-full relative md:left-10 flex justify-center items-center">
              <button onClick={() => setCurrentFeature(0)}>
                <span className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${currentFeature === 0 ? "from-green-500 to-blue-500 text-white" : "from-gray-400 to-gray-400 text-black"}`}>
                  {getIcon(features[0].icon)}
                </span>
                <h3 className={`${currentFeature === 0 ? "bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent" : "text-gray-400"} text-xs sm:text-base uppercase`}>{features[0].name}</h3>
              </button>
            </div>
            {/* :::feature 2 */}
            <div className="col-span-1 sm:col-span-full relative flex justify-center items-center">
              <button onClick={() => setCurrentFeature(1)}>
                <span className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${currentFeature === 1 ? "from-green-500 to-blue-500 text-white" : "from-gray-400 to-gray-400 text-black"}`}>
                  {getIcon(features[1].icon)}
                </span>
                <h3 className={`${currentFeature === 1 ? "bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent" : "text-gray-400"} text-xs sm:text-base uppercase`}>{features[1].name}</h3>
              </button>
            </div>
            {/* :::feature 3 */}
            <div className="col-span-1 sm:col-span-full relative md:left-10 flex justify-center items-center">
              <button onClick={() => setCurrentFeature(2)}>
                <span className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${currentFeature === 2 ? "from-green-500 to-blue-500 text-white" : "from-gray-400 to-gray-400 text-black"}`}>
                  {getIcon(features[2].icon)}
                </span>
                <h3 className={`${currentFeature === 2 ? "bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent" : "text-gray-400"} text-xs sm:text-base uppercase`}>{features[2].name}</h3>
              </button>
            </div>
          </div>



          {/* ::Features container right  */}
          <div className="order-2 sm:order-3 col-span-full sm:col-span-1 z-20 w-full grid grid-cols-3">
            {/* :::feature 4 */}
            <div className="col-span-1 sm:col-span-full relative md:right-10 flex justify-center items-center">
              <button onClick={() => setCurrentFeature(3)}>
                <span className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${currentFeature === 3 ? "from-green-500 to-blue-500 text-white" : "from-gray-400 to-gray-400 text-black"}`}>
                  {getIcon(features[3].icon)}
                </span>
                <h3 className={`${currentFeature === 3 ? "bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent" : "text-gray-400"} text-xs sm:text-base uppercase`}>{features[3].name}</h3>
              </button>
            </div>
            {/* :::feature 5 */}
            <div className="col-span-1 sm:col-span-full relative flex justify-center items-center">
              <button onClick={() => setCurrentFeature(4)}>
                <span className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${currentFeature === 4 ? "from-[#0d6394] to-[#0d6394] text-white" : "from-gray-400 to-gray-400 text-black"}`}>
                  {getIcon(features[4].icon)}
                </span>
                <h3 className={`${currentFeature === 4 ? "bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent" : "text-gray-400"} text-xs sm:text-base uppercase`}>{features[4].name}</h3>
              </button>
            </div>
            {/* :::feature 6 */}
            <div className="col-span-1 sm:col-span-full relative md:right-10 flex justify-center items-center">
              <button onClick={() => setCurrentFeature(5)}>
                <span className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${currentFeature === 5 ? "from-[#0d6394] to-[#0d6394] text-white" : "from-gray-400 to-gray-400 text-black"}`}>
                  {getIcon(features[5].icon)}
                </span>
                <h3 className={`${currentFeature === 5 ? "bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent" : "text-gray-400"} text-xs sm:text-base uppercase`}>{features[5].name}</h3>
              </button>
            </div>
          </div>


        </div>

      </div>
    </div>
    </>
  )
}

export default Gameathon