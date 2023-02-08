import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { useWindowSize } from "react-use";
import { Parallax } from "react-scroll-parallax";
import LazyLoad from "react-lazy-load";

const AllUNeed2Know = () => {
  const { width } = useWindowSize();
  const targetRef = React.useRef(null);

  const [targetElement, setElement] = useState();
  useEffect(() => {
    setElement(targetRef.current);
  }, []);

  return (
    <>
      <div ref={targetRef}></div>
      <section className="text-gray-100 bg-gradient-to-b from-black via-transparent to-transparent mt-[40vh]">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-center text-gray-50">
              About Adishankara{" "}
              <span className=" text-[var(--primary-color)]">
                Hackathon 2K23
              </span>
            </h2>
            {/* 
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              targetElement={targetElement}
              scale={[0.6, 1]}
              opacity={[0.5, 1.3]}
            >
              <h3 className="max-w-3xl mx-auto mt-4 text-lg  text-center text-gray-50">
                All you need to know about the HACKATHON 2023 event
              </h3>
            </Parallax> */}
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-2/3">
              <Parallax
                scale={[0.6, 1]}
                opacity={[0.5, 1.3]}
                targetElement={targetElement}
              >
                <h3 className="text-lg  tracking-tight text-center md:text-left">
                  Adi Shankara Hackathon 2023
                </h3>
                <p className="mt-3 text-base text-gray-400 text-center md:text-left">
                  Transformative initiative launched by Adi Shankara Institute
                  of Engineering and Technology (ASIET) in Kalady, Kerala. The
                  goal is to cultivate the 21st century skills needed for the
                  new generation and provide a platform for them to showcase
                  their skills and bring their ideas to life.
                </p>
              </Parallax>
              <div className="mt-12 space-y-12">
                <Parallax
                  scale={[0.6, 1]}
                  opacity={[0.5, 1.3]}
                  targetElement={targetElement}
                >
                  <div className="flex">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-4 lg:ml-14">
                      <h4 className="text-lg font-medium leading-6 text-center md:text-left">
                        Series of Events
                      </h4>
                      <p className="mt-2 text-base text-gray-400 text-center md:text-left">
                        This year-long hackathon series, in partnership with
                        TiltLabs, CIIRC Bangalore, and Devfolio, includes events
                        such as Codathon, Gameathon, Techathon, Bizthon,
                        Mechathon, Civiathon, and Young Scientists Award. The
                        series begins on March 29th, 2023 with Codathon and
                        Gameathon, followed by other events in April, May, and
                        June 2023. The hackathon series culminates with the Adi
                        Shankara Young Scientists Award in December 2023.
                      </p>
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  scale={[0.6, 1]}
                  opacity={[0.5, 1.3]}
                  targetElement={targetElement}
                >
                  <div className="flex">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-4 lg:ml-14">
                      <h4 className="text-lg font-medium leading-6 text-center md:text-left">
                        Incubation Support
                      </h4>
                      <p className="mt-2 text-base text-gray-400 text-center md:text-left">
                        The winners will have the chance to incubate their ideas
                        at ASIET TBI, a well-known technology business incubator
                        supported by KSIDC, KSUM, and MSME with funding from the
                        Government of Kerala and India.
                      </p>
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  scale={[0.6, 1]}
                  opacity={[0.5, 1.3]}
                  targetElement={targetElement}
                >
                  <div className="flex">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-4 lg:ml-14">
                      <h4 className="text-lg font-medium leading-6 text-center md:text-left">
                        1.5 Million Grand Prize
                      </h4>
                      <p className="mt-2 text-base text-gray-400 text-center md:text-left">
                        Adi Shankara Hackathon 2023 series is set to attract
                        over 1000 teams to our campus where they will have the
                        opportunity to turn their dreams into reality with our
                        mentoring support. This is the first time in India that
                        a hackathon is offering a grand prize of 1.5 million,
                        raising the bar for hackathon events and demonstrating a
                        commitment to supporting innovation and development in
                        the tech industry.
                      </p>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="mt-10 lg:mt-0 p-5 flex flex-col justify-center md:w-1/3"
            >
              <LazyLoad offset={300}>
                {width > 640 ? (
                  <Tilt>
                    <div className="mx-auto shadow-[20px_20px_50px_rgba(0,0,0,0.15)] bg-white/10 rounded-xl border-white/20">
                      <iframe
                        height="315"
                        src="https://www.youtube.com/embed/iSKYwo7CQOg"
                        title="Adi Shankara Hackathon 2023"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full"
                      ></iframe>
                    </div>
                  </Tilt>
                ) : (
                  <div className="mx-auto shadow-[20px_20px_50px_rgba(0,0,0,0.15)] bg-white/10 rounded-xl border-white/20">
                    <iframe
                      height="315"
                      src="https://www.youtube.com/embed/iSKYwo7CQOg"
                      title="Promo Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full"
                    ></iframe>
                  </div>
                )}
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AllUNeed2Know;
