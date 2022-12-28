
import React from 'react'

const buttonEffect34 = ({ children }) => {
  return (
    <span className="mx-5 group relative inline-block px-5 py-2.5 text-teal-300 font-medium tracking-widest uppercase overflow-hidden transition-all duration-300 ease-in hover:text-white hover:bg-teal-300 hover:rounded hover:shadow-btn34">
      {/* left border */}
      <span className="absolute -left-full top-0 w-full h-0.5 block animate-btn34-left transition-all" style={{ background: 'linear-gradient(90deg, transparent, #5EEAD4)' }}/>
      {/* top border */}
      <span className="absolute -top-full right-0 w-0.5 h-full block animate-btn34-top transition-all" style={{ background: 'linear-gradient(180deg, transparent, #5EEAD4)', animationDelay: '.25s' }}/>
      {/* right border */}
      <span className="absolute -right-full bottom-0 w-full h-0.5 block animate-btn34-right transition-all" style={{ background: 'linear-gradient(270deg, transparent, #5EEAD4)', animationDelay: '.5s' }}/>
      {/* bottom border */}
      <span className="absolute -bottom-full left-0 w-0.5 h-full block animate-btn34-bottom transition-all" style={{ background: 'linear-gradient(360deg, transparent, #5EEAD4)', animationDelay: '.75s' }}/>
      {children}
    </span>
  )
}

export default buttonEffect34