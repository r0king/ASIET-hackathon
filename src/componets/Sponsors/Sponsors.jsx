import React from 'react'
import logo1 from "../../assets/Sponsors/cloud.png"
import logo2 from "../../assets/Sponsors/kerala.png"
import logo3 from "../../assets/Sponsors/maker.png"
import logo4 from "../../assets/Sponsors/nascom1.png"
import logo5 from "../../assets/Sponsors/titlab.png"
import "./Sponsors.css"
export default function Sponsors() {
  return (
    <div className="md:mx-auto py-10 px-4 w-full max-w-7xl text-white-800 my-32">
      <div className="flex flex-col items-center space-y-12">

        {/* :TITLE CONTAINER */}
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          {/* ::Title */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">Our Trusted Partners</h2>
          {/* ::Text */}
          <p className="text-sm sm:text-base text-white-700">Eaque totam placeat fuga neque quam vero. Harum nesciunt voluptate quidem, repudiandae nihil repellendus praesentium impedit sequi non modi ipsa! Libero, nostrum?</p>
        </div>


        {/* :PARTNERS LOGOS */}
        <div className="grid grid-cols-6 gap-6">

          {/* ::Partner 1 -> ALL */}
          <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 logo_bg">
            <div className="lines"></div>
            <div className="angles"></div>
            <img src={logo1} alt="" className="max-h-6 opacity-80 spo_img" />
          </div>

          {/* ::Partner 2 -> Stellantis */}
          <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 logo_bg">
            <div className="lines"></div>
            <div className="angles"></div>
            <img src={logo2} alt="" className="  opacity-80 spo_img" />
          </div>
          
          {/* ::Partner 3 -> Blablacar */}
          <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 logo_bg">
            <div className="lines"></div>
            <div className="angles"></div>
            <img src={logo3} alt="" className="  opacity-80 spo_img" />
          </div>
          
          {/* ::Partner 4 -> Boursorama */}
          <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 logo_bg">
            <div className="lines"></div>
            <div className="angles"></div>
            <img src={logo4} alt="" className="  opacity-80 spo_img" />
          </div>
          
          {/* ::Partner 5 -> Google */}
          <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 logo_bg">
            <div className="lines"></div>
            <div className="angles"></div>
            <img src="https://fancytailwind.com/static/blablacar-logo-black-d14f356f24cf3b23017d777b9909293c.svg" alt="" className="  opacity-50 spo_img" />
          </div>

          {/* ::Partner 6 -> Microsoft */}
          <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100 logo_bg">
            <div className="lines"></div>
            <div className="angles"></div>
            <img src="https://fancytailwind.com/static/microsoft-logo-29676a36b829016b82e0d8d1865c842b.svg" alt="" className="max-h- opacity-50 spo_img" />
          </div>

        </div>


      </div>
    </div>
  )
}
