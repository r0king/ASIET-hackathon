import React from 'react'


const Team = () => {
  
  const people = [
    {
      name: "Anna Cole",
      role: "Fullstack developer",
      picture: "https://fancytailwind.com/static/profile15-668806ddc12287df30b7d994109d8d4d.jpg",
    },
    {
      name: "Eric Yeng",
      role: "Backend developer",
      picture: "https://fancytailwind.com/static/profile11-1fb6186c90e177fe59c5c85f946627d0.jpg",
    },
    {
      name: "Tarik Sliman",
      role: "CTO",
      picture: "https://fancytailwind.com/static/profile12-7637478ac2813cadaac205bbb4424261.jpg",
    },
    {
      name: "Anna Cole",
      role: "Frontend developer",
      picture: "https://fancytailwind.com/static/profile15-668806ddc12287df30b7d994109d8d4d.jpg",
    },
    {
      name: "Eric Yeng",
      role: "Backend developer",
      picture: "https://fancytailwind.com/static/profile11-1fb6186c90e177fe59c5c85f946627d0.jpg",
    },
    {
      name: "Tarik Sliman",
      role: "CTO",
      picture: "https://fancytailwind.com/static/profile12-7637478ac2813cadaac205bbb4424261.jpg",
    },
    {
      name: "Anna Cole",
      role: "Frontend developer",
      picture: "https://fancytailwind.com/static/profile15-668806ddc12287df30b7d994109d8d4d.jpg",
    },
    {
      name: "Eric Yeng",
      role: "Backend developer",
      picture: "https://fancytailwind.com/static/profile11-1fb6186c90e177fe59c5c85f946627d0.jpg",
    },
    {
      name: "Tarik Sliman",
      role: "CTO",
      picture: "https://fancytailwind.com/static/profile12-7637478ac2813cadaac205bbb4424261.jpg",
    },
  ]

  const CubeDots = () => (
    <svg width={200} height={600} fill="none" viewBox="0 0 200 600" aria-hidden="true">
      <defs>
        <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x={0} y={0} width={40} height={40} patternUnits="userSpaceOnUse">
          <rect x={0} y={0} width={5} height={5} className="text-[#0D6394]" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={200} height={600} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
    </svg>
  )

  return (
    <div className="relative mx-auto py-10 px-1 sm:px-4 w-full max-w-7xl bg-black shadow-inner">
      <div className="flex flex-col items-center">

        {/* :TITLE CONTAINER */}
        <h2 className="mb-6 text-lg text-white font-semibold uppercase tracking-widest">
          <span className="text-[#0D6394]">Who </span> are we?
        </h2>


        {/* :TEAM */}
        <div>
          <ul className="relative w-full grid items-center grid-cols-10 sm:gap-x-5">
            {people.map((person, index) => (
              <li key={index} className="col-span-5 md:col-span-3 lg:col-span-2 py-8 px-2">
                {/* ::Inner container */}
                <div className={`group z-10 relative ${index % 2 === 0 ? "bottom-3" : "top-3"} w-full h-full inline-flex flex-col justify-center transition-all duration-300 ease-in transform hover:translate-y-3`}>
                  {/* :::top selector line */}
                  <span className="z-20 absolute -top-16 left-1/2 w-0.5 h-10 bg-[#0D6394] bg-opacity-40 opacity-0 transition-all duration-150 ease-out transform -translate-x-1/2 group-hover:translate-y-10 group-hover:opacity-100" />
                  {/* :::picture */}
                  <div className="z-10 mb-1 w-full aspect-w-4 aspect-h-6">
                    <img className="object-cover rounded-sm shadow-md filter saturate-0 brightness-50 group-hover:brightness-100" src={person.picture} alt="" />
                  </div>
                  {/* :::name */}
                  <h3 className="text-sm text-[#0D6394] font-bold uppercase tracking-wider transition-all duration-300 transform -translate-y-20 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100">{person.name}</h3>
                  {/* :::role */}
                  <span className="text-xs text-white font-semibold transition-all duration-500 transform -translate-y-40 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100">{person.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>


        {/* :CUBE DOTS */}
        <div className="hidden sm:block">
          <span className="absolute top-0 left-0">
            <CubeDots />
          </span>
          <span className="absolute bottom-0 right-0">
            <CubeDots />
          </span>
        </div>

      </div>
    </div>
  )
}

export default Team
