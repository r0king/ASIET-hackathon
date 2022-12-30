
import React from 'react'


const Poster = () => {

  const categories = [
    {
      id: 1,
      name: "Productathon",
      tagline: "#24Hrs #HackathonEvent",
      href: "#link",
      picture: "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg",
      pictureAlt: "Description of your picture"
    },
    {
      id: 2,
      name: "Gameathon",
      tagline: 159,
      href: "#link",
      picture: "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg",
      pictureAlt: "Description of your picture"
    },
    {
      id: 3,
      name: "Ideathon",
      tagline: 17,
      href: "#link",
      picture: "https://fancytailwind.com/static/lamp1-cd268fab2e874e2255fa2f8c4a9d9b93.jpg",
      pictureAlt: "Description of your picture"
    },
  ]

  return (
    <div className="mx-auto py-5 px-4 w-full max-w-7xl ">
      <div className="mx-auto max-w-md md:max-w-none flex flex-col md:flex-row items-center h-[100vh]">

        {/* :TITLE */}
        <h2 className="relative m-4 md:w-16 lg:w-24 flex justify-center text-xl lg:text-3xl text-gray-400 font-bold uppercase tracking-widest whitespace-nowrap origin-center transform md:-rotate-90 hover:text-gray-700">
          <a href="#allCategoryLink">All Category</a>
        </h2>


        {/* :NAVIGATION */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 rounded-sm overflow-hidden">
          {categories.map(category => (
            <a key={category.id} href={category.href} className="col-span-1 md:aspect-w-1 md:aspect-h-2 group relative w-full h-52 md:h-full overflow-hidden">
              {/* ::Background Image */}
              <img src={category.picture} alt={category.pictureAlt} className="absolute inset-0 w-full h-full object-cover object-center filter group-hover:brightness-110" />
              {/* ::Details */}
              <div className="relative py-10 px-5 h-full flex flex-col justify-end bg-gradient-to-r md:bg-gradient-to-t from-gray-700 md:via-transparent group-hover:from-transparent">
                {/* :::name */}
                <h3 className="text-lg lg:text-2xl text-white font-bold antialiased" style={{ textShadow: "1px 1px 1px gray" }}>{category.name}</h3>
                {/* :::product quantity */}
                <p className="text-xs lg:text-sm text-white text-opacity-80 font-medium" style={{ textShadow: "1px 1px 1px gray" }}>{`${category.tagline}`}</p>
              </div>
              {/* ::Hover Title */}
              <div className="absolute inset-0 flex justify-center items-center">
                <span className="text-4xl lg:text-6xl text-white text-opacity-30 font-extrabold uppercase tracking-widest opacity-0 transition-all duration-200 ease-linear transform md:-rotate-90 -translate-y-96 group-hover:translate-y-0 group-hover:opacity-100">{category.name}</span>
              </div>
            </a>
          ))
          }
        </div>

      </div>
    </div>
  )
}

export default Poster
