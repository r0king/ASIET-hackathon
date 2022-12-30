import React, { useState } from 'react'

const Pagination7 = (props) => {
  const [current, setCurrent] = useState(1)
  const [effect, setEffect] = useState(null)
  const goToNext = () => {
    setEffect("next")
    setCurrent(current + 1)
  }
  const goToPrev = () => {
    setEffect("prev")
    setCurrent(current - 1)
  }
  let page = props.selected
  return (
    <nav className="text-lg text-gray-400 font-bold z-10 fixed rotate-90 top-[15%] md:ml-[-30vw] ml-[-55vw] h-[70vh]" aria-label="Pagination">
      <div className="sm:flex items-center space-x-3">
        <a href="#link" className={`inline-flex items-center text-[#E2DCC8]`}>
          <span className={`h-0.5 w-20 bg-[#E2DCC8] transition-all duration-300 ease-in`} />
        </a>
        <a href="#link" className={`inline-flex items-center ${current === 1 && "text-[#E2DCC8]"}`} onClick={() => setCurrent(1)} {...(page === 1 ? { className: 'inline-flex items-center active active:text-red-600' } : {})}>
          <span className={`rotate-[270deg] top-0 ${(page === 1 ? "pl-14 text-orange-300" : "pl-0")}`}>01 {page === 1 ? "Home" : ""}</span>
          <span className={`h-0.5 ${(page === 1 ? "w-20 bg-orange-300" : "w-0") || (current === 1 ? "w-20" : "w-0")} bg-[#E2DCC8] transition-all duration-300 ease-in`} />
        </a>
        <a href="#link1" className={`inline-flex items-center ${current === 2 && "text-[#E2DCC8]"}`} onClick={() => setCurrent(2)} {...(page === 2 ? { className: 'inline-flex items-center active active:text-red-600' } : {})}>
          <span className={`rotate-[270deg] ${(page === 2 ? "pl-20 text-orange-300 ml-[-3vw]" : "pl-0")}`}>02 {page === 2 ? 'About Us' : ''}</span>
          <span className={`h-0.5 ${(page === 2 ? "w-20 bg-orange-300" : "w-0") || (current === 2 ? "w-20" : "w-0")} bg-[#E2DCC8] transition-all duration-300 ease-in`} />
        </a>
        <a href="#link2" className={`inline-flex items-center ${current === 3 && "text-[#E2DCC8]"}`} onClick={() => setCurrent(3)} {...(page === 3 ? { className: 'inline-flex items-center active active:text-red-600' } : {})}>
          <span className={`rotate-[270deg] ${(page === 3 ? "pl-20 text-orange-300 ml-[-3vw]" : "pl-0")}`}>03 {page === 3 ? 'TagLine' : ''}</span>
          <span className={`h-0.5 ${(page === 3 ? "w-20 bg-orange-300" : "w-0") || (current === 3 ? "w-20" : "w-0")} bg-[#E2DCC8] transition-all duration-300 ease-in`} />
        </a>
        <a href="#link3" className={`inline-flex items-center ${current === 4 && "text-[#E2DCC8]"}`} onClick={() => setCurrent(4)} {...(page === 4 ? { className: 'inline-flex items-center active active:text-red-600' } : {})}>
          <span className={`rotate-[270deg] ${(page === 4 ? "pl-20 text-orange-300" : "pl-0")}`}>04 {page === 4 ? 'Sponsers' : ''}</span>
          <span className={`h-0.5 ${(page === 4 ? "w-20 bg-orange-300" : "w-0") || (current === 4 ? "w-20" : "w-0")} bg-[#E2DCC8] transition-all duration-300 ease-in`} />
        </a>
        <a href="#link" className={`inline-flex items-center text-[#E2DCC8]`}>
          <span className={`h-0.5 bottom-0  w-20 ${(page === 4 ? "w-0" : "w-20")} bg-[#E2DCC8]`} />
        </a>
      </div>
    </nav>
  )
}

export default Pagination7
