
import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon } from "@heroicons/react/solid"


const Poster_carousel = () => {

  const categories = [
    { id: 1, 
      href: "#link",
      name:"Prodectathon", 
      image: "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg  "
    },

    { id: 2, href: "#link", name:"gameathon", collection: "Stargazers", image: "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg", price: "0.67 ETH", highestBid: "1.5 ETH", stock: "10", chain:"ethereum" },
    { id: 3, href: "#link", name:"ideathon", collection: "Boom Bears", image: "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg", price: "1.49 ETH", highestBid: "0.002 ETH", stock: "3k", chain:"ethereum" },
    { id: 4, href: "#link", name:"Mechathon", collection: "Psycho", image: "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg", price: "10 ETH", highestBid: "8.80 ETH", stock: "40", chain:"ethereum" },
    { id: 5, href: "#link", name:"Civiathon", collection: "Mutant Ape", image: "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg", price: "7.06 ETH", highestBid: "13 ETH", stock: "10k", chain:"ethereum" },
    { id: 6, href: "#link", name:"Bizthon", collection: "CryptoPunk", image: "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg", price: "5.20 ETH", highestBid: "3.50 ETH", stock: "10k", chain:"ethereum" },
  ]

  // Javascript for demonstration purpose of sliding effect. Keep it or implement your own custom solution. 
  const [position, setPosition] = useState(0)
  const previousSuggestion = () => position >= 1 && setPosition(position - 1)
  const nextSuggestion = () => {
    let viewport = window.innerWidth
    let maxSlide
    viewport < 640 ? maxSlide = categories.length - 1
      : viewport < 768 ? maxSlide = categories.length - 4 
      : viewport < 1024 ? maxSlide = categories.length - 3
      : maxSlide = categories.length - 4
    position < maxSlide && setPosition(position + 1)
  }
  useEffect(() => {
    const slide = document.getElementById('slider-w3c9')
    let start = position 
    const viewport = window.innerWidth
    let slideValue = 
      viewport < 640 ? -100 
      : viewport < 768 ? -100 
      : viewport < 1024 ? -33.33 
      : -25
    // On each state update it will slide to the current position 
    slide.style.transform = `translateX(${start * slideValue}%)`
  }, [position])
  // On resize set current position to zero to avoid unwanted effects
  useEffect(() => {
    window.addEventListener('resize', () => setPosition(0))
  })

  // Update dots number on resize
  const [numberSlides, setNumberSlides] = useState(Math.ceil(categories.length / 2))
  useEffect(() => {
    window.addEventListener('resize', () => {
      setPosition(0)
      const viewport = window.innerWidth
      if(viewport < 640) return setNumberSlides(categories.length)
      if(viewport < 768) return setNumberSlides(Math.ceil(categories.length / 2))
      if(viewport < 1024) return setNumberSlides(Math.ceil(categories.length / 1.5))
      if(viewport > 1024) return setNumberSlides(Math.ceil(categories.length / 2))
    })
  })

  return (
    <div className="mx-auto py-5 px-4 w-full max-w-7xl bg-transparent md:mt-56">
    <div className="mx-auto max-w-md md:max-w-none flex flex-col md:flex-row items-center ">

        {/* :TITLE CONTAINER */}
        <div className="px-5">
        <h2 className="relative m-4 md:w-16 lg:w-24 flex justify-center text-xl lg:text-3xl text-gray-400 font-bold uppercase tracking-widest whitespace-nowrap origin-center transform md:-rotate-90 hover:text-gray-700">
          <a href="#allCategoryLink">
            All <span className="text-[var(--primary-color)]">Categories</span>
          </a>
        </h2>
        </div>


        {/* :categories */}
        <div className="relative sm:mt-5 w-full overflow-hidden">
          {/* CARDS */}
          <ul id="slider-w3c9" className="w-full flex transition-all duration-500 ease-in">
            {categories.map(item => (
              <li key={item.id} className="flex-shrink-0 relative py-5 sm:px-2 min-h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden">
                
                <a href={item.href} className="group mx-auto p-2 max-w-xs sm:max-w-none h-full flex flex-col border border-gray-200 rounded-lg hover:shadow-md transition duration-150 ease-in transform hover:-translate-y-3">
                  {/* ::Image Container */}
                  <div className="relative overflow-hidden">
                    <span className="block aspect-w-3 aspect-h-3 w-full rounded-lg overflow-hidden">
                      {/* :::image nft */}
                      <img src={item.image} alt="" className="object-cover" />
                     
                    </span>
                    {/* :::stock */}
                    {/* <span className="absolute bottom-2 right-2 py-1 px-3 inline-flex justify-center items-center rounded-lg bg-gray-800 bg-opacity-50 text-sm text-white font-semibold">
                      <svg className="mr-2 w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4h-20v20h20v-20zm-4-4v2h-18v18h-2v-20h20z"/></svg>
                      {item.stock}
                    </span> */}
                    {/* :::favorite */}
                    {/* <span className="absolute  top-2 right-2 w-6 h-6 inline-flex justify-center items-center rounded-full bg-gray-800 bg-opacity-50 text-white opacity-0 -z-1 hover:text-red-500 transition duration-200 ease-in transform -translate-y-5 group-hover:z-50 group-hover:translate-y-0 group-hover:opacity-100">
                      <HeartIcon className="w-4 h-4" />
                    </span> */}
                    {/* :::chain */}
                    <span className="absolute top-2 left-2 py-1 px-2 inline-flex justify-center items-center rounded-full bg-gray-800 bg-opacity-50 text-sm text-white font-semibold capitalize opacity-0 -z-1 transition duration-200 ease-in transform -translate-y-5 group-hover:z-50 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.name}
                    </span>
                  </div>
                  {/* ::Details */}
                  <div className="mt-1 flex flex-col space-y-2">
                    {/* :::collection & name */}
                    <div className="space-y-0.5">
                       
                      <p className="text-base text-[var(--secondry-color)] font-bold">{item.name}</p>
                    </div>
                    {/* ::highest bid */}
                    {/* <div className="mt-3 p-3 grid grid-cols-2 gap-x-3 rounded-xl bg-gray-800 bg-opacity-50">
                      <p className="space-y-1 text-sm font-bold">
                         
                        <span className="block text-[var(--secondry-color)]">{item.name}</span>
                      
                      </p>
                       
                    </div> */}
                  </div>
                </a>
              </li>
              
            ))
            }
          </ul>
          {/* NAVIGATION BUTTONS */}
          <>
            <button 
              type="button" 
              onClick={previousSuggestion}
              className="absolute top-1/2 left-0 w-10 h-10 inline-flex justify-center items-center rounded-md shadow bg-white bg-opacity-80 text-gray-700 transform -translate-y-1/2 hover:bg-gray-700 hover:bg-opacity-80 hover:text-white"
            >
              <ChevronLeftIcon className="w-7 h-7" />
            </button>
            <button 
              type="button" 
              onClick={nextSuggestion}
              className="absolute top-1/2 right-0 w-10 h-10 inline-flex justify-center items-center rounded-md shadow bg-white bg-opacity-80 text-gray-700 transform -translate-y-1/2 hover:bg-gray-700 hover:bg-opacity-80 hover:text-white"
            >
              <ChevronRightIcon className="w-7 h-7" />
            </button>
          </>
        </div>


       

      </div> 
       {/* :DOTS PAGINATION */}
         <div className="my-5 flex justify-center items-center space-x-1">
          {[...Array(numberSlides)].map((_, index) => (
            <button key={index} className={`flex-shrink-0 w-6 h-6 inline-flex justify-center items-center rounded-full`} onClick={() => setPosition(index)}>
              <span className={`w-2.5 h-2.5 rounded-full ${index === position ? "bg-gray-600" : "shadow-inner bg-gray-300"}`} />
            </button>
          ))
          }
        </div>     
    </div>
  )
}

export default Poster_carousel
