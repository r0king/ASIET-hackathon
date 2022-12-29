
import React, { useState } from 'react'


const Pagination7 = () => {

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

  return (
    <nav className="text-lg text-gray-400 font-bold" aria-label="Pagination">
      
      {/* :PAGINATION - large devices */}
      <div className="hidden sm:flex items-center space-x-3">
        {/* Page 1 */}
        <a href="#link" className={`inline-flex items-center ${current === 1 && "text-red-700"}`} onClick={() => setCurrent(1)}>
          01
          <span className={`ml-1 h-0.5 ${current === 1 ? "w-20" : "w-0"} bg-red-700 transition-all duration-300 ease-in`} />
        </a>
        {/* Page 2 */}
        <a href="#link" className={`inline-flex items-center ${current === 2 && "text-red-700"}`} onClick={() => setCurrent(2)}>
          02
          <span className={`ml-1 h-0.5 ${current === 2 ? "w-20" : "w-0"} bg-red-700 transition-all duration-300 ease-in`} />
        </a>
        {/* Page 3 */}
        <a href="#link" className={`inline-flex items-center ${current === 3 && "text-red-700"}`} onClick={() => setCurrent(3)}>
          03
          <span className={`ml-1 h-0.5 ${current === 3 ? "w-20" : "w-0"} bg-red-700 transition-all duration-300 ease-in`} />
        </a>
        {/* Page 4 */}
        <a href="#link" className={`inline-flex items-center ${current === 4 && "text-red-700"}`} onClick={() => setCurrent(4)}>
          04
          <span className={`ml-1 h-0.5 ${current === 4 ? "w-20" : "w-0"} bg-red-700 transition-all duration-300 ease-in`} />
        </a>
      </div>

      {/* :PAGINATION - small devices */}
      <div className="sm:hidden flex items-center">
        {/* Previous line */}
        <button className={`mr-2 w-16 h-6 inline-flex items-center `} onClick={goToPrev} onAnimationEnd={() => setEffect(null)} >
          <span className={`w-full h-0.5 bg-red-700 ${effect === "prev" && "animate-linesquiz"}`} />
        </button>
        {/* Page */}
        <a href="#link" className="px-1">{current}</a>
        {/* Next line */}
        <button className={`ml-2 w-16 h-6 inline-flex items-center ${effect && "animate-linesquiz"}`} onClick={goToNext} onAnimationEnd={() => setEffect(null)}>
          <span className={`w-full h-0.5 bg-red-700 ${effect === "next" && "animate-linesquiz"}`} />
        </button>
      </div>

    </nav>
  )
}

export default Pagination7
