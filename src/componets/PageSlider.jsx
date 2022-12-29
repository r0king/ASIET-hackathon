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
    <nav className="text-lg text-gray-400 font-bold z-10 fixed rotate-90 bottom-[50%] md:ml-[-5vw] ml-[-20vw]" aria-label="Pagination">

      {/* :PAGINATION - large devices */}
      <div className="sm:flex items-center space-x-3">
        {/* Page 1 */}
        <a href="#link" className={`inline-flex items-center ${current === 1 && "text-[#E2DCC8]"}`} onClick={() => setCurrent(1)}>
          <span className='rotate-[270deg]'>01 {page===1?'Home':''}</span>
          <span className={`ml-1 h-0.5 ${(page===1 ? "w-20" : "w-0") || (current === 1 ? "w-20" : "w-0")} bg-[#E2DCC8] transition-all duration-300 ease-in`} />
        </a>
        {/* Page 2 */}
        <a href="#link1" className={`inline-flex items-center ${current === 2 && "text-[#E2DCC8]"}`} onClick={() => setCurrent(2)} {...(page===2? {className: 'inline-flex items-center active active:text-red-600'} : {})}>
          <span className='rotate-[270deg]'>02 {page===2?'About':''}</span>
          <span className={` ml-1 h-0.5 ${(page===2 ? "w-20" : "w-0") || (current === 2 ? "w-20" : "w-0")} bg-[#E2DCC8] transition-all duration-300 ease-in`} />
        </a>
        {/* Page 3 */}
        <a href="#link2" className={`inline-flex items-center ${current === 3 && "text-[#E2DCC8]"}`} onClick={() => setCurrent(3)} {...(page===3? {className: 'inline-flex items-center active active:text-red-600'} : {})}>
          <span className='rotate-[270deg]'>03 {page===3?'TagLine':''}</span>
          <span className={`ml-1 h-0.5 ${(page===3 ? "w-20" : "w-0") || (current === 3 ? "w-20" : "w-0")} bg-[#E2DCC8] transition-all duration-300 ease-in`} />
        </a>
        {/* Page 4 */}
        <a href="#link3" className={`inline-flex items-center ${current === 4 && "text-[#E2DCC8]"}`} onClick={() => setCurrent(4)} {...(page===4? {className: 'inline-flex items-center active active:text-red-600'} : {})}>
          <span className='rotate-[270deg]'>04 {page===4?'Sponsers':''}</span>
          <span className={`ml-1 h-0.5 ${(page===4 ? "w-20" : "w-0") || (current === 4 ? "w-20" : "w-0")} bg-[#E2DCC8] transition-all duration-300 ease-in`} />
        </a>
      </div>


    </nav>
  )
}

export default Pagination7
