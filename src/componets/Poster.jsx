import React from "react";
import SamPos1 from "../assets/SamplePoster1.jpg";
import PosterCard from "./PosterCard";
import xbox from "../assets/Poster/xbox.png";
import Ps from "../assets/Poster/ps5.png";
import superM from   "../assets/Poster/supermario.png";
import mcSteeve from "../assets/Poster/minecraft.png";
import rocket from "../assets/Poster/rocket.png"
import drone from "../assets/Poster/drone2.png"
import idea from "../assets/Poster/Idea.png"
import vr from "../assets/Poster/ARVR.png"

const Poster = () => {
  const categories = [
    {
      id: 0,
      name: "Productathon",
      tagline:
        "Productathon is a 24hrs Hackathon event, where aspiring student entrepreneurs can come collaborate and build their startup ideas to a minimum viable product (MVP) with the support of Nasscom 10k Startups , MakerGram and Google Cloud.",
      href: "#link",
      picture: SamPos1,
      pictureAlt: "Description of your picture",
      front1:vr,
      front2:drone,
      back1:"",
      back2:"",
      price:"7.5 Lakhs"

    },
    {
      id: 1,
      name: "Gameathon",
      tagline: 159,
      href: "#link",
      picture:
        "https://fancytailwind.com/static/furniture1-cc3771ea8f6070740dda23b432a8e5c3.jpg",
      pictureAlt: "Description of your picture",
      front1:superM,
      front2:xbox,
      back1:mcSteeve,
      back2:Ps,
      price:"7.5 Lakhs"

    },
    {
      id: 2,
      name: "Ideathon",
      tagline: 17,
      href: "#link",
      picture:
        "https://fancytailwind.com/static/lamp1-cd268fab2e874e2255fa2f8c4a9d9b93.jpg",
      pictureAlt: "Description of your picture",
      front1:idea,
      front2:"",
      back1:"",
      back2:"",
      price:"7.5 Lakhs"

    },
  ];

  return (
    <div className="mx-auto py-5 px-4 w-full max-w-7xl bg-transparent md:mt-56">
      <div className="mx-auto max-w-md md:max-w-none flex flex-col md:flex-row items-center ">
        {/* :TITLE */}
        <h2 className="relative m-4 md:w-16 lg:w-24 flex justify-center text-xl lg:text-3xl text-gray-400 font-bold uppercase tracking-widest whitespace-nowrap origin-center transform md:-rotate-90 hover:text-gray-700">
          <a href="#allCategoryLink">
            All <span className="text-[var(--primary-color)]">Categories</span>
          </a>
        </h2>

        {/* :NAVIGATION */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 rounded-sm">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="col-span-1 md:aspect-w-1 md:aspect-h-2 group relative w-full h-[40rem] md:h-full"
            >
              <PosterCard id={category.id} front1={category.front1} front2={category.front2} back1={category.back1} back2={category.back2} name={category.name} tagline={category.tagline} picture={category.picture} pictureAlt={category.pictureAlt} price={category.price} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Poster;
