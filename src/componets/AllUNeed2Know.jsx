import React from "react";
import allUNeed2Know from "../assets/SamplePoster1.jpg";
import Tilt from "react-parallax-tilt";

const AllUNeed2Know = () => {
  return (
    <section
      className="text-gray-100 bg-[#171717]/50 md:bg-transparent"
      style={{
        backgroundColor: "rgba(0,0,0, 0.5)",
        boxShadow: "0 0px 5vh 10vh rgba(0,0,0, 0.5)",
      }}
    >
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-50">
            ALL{" "}
            <span className=" text-[var(--primary-color)]">U NEED 2 KNOW</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-2xl  text-center text-gray-50">
            Quando cetero his ne, eum admodum sapientem ut.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl  tracking-tight ">Ad vix debet docendi</h3>
            <p className="mt-3 text-xl text-gray-400">
              Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
              etiam regione ut, persius eripuit quo id. Sit te euismod
              tacimates.
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-4 lg:ml-14">
                  <h4 className="text-2xl font-medium leading-6 ">
                    Per ei quaeque sensibus
                  </h4>
                  <p className="mt-2 text-xl text-gray-400">
                    Ex usu illum iudico molestie. Pro ne agam facete
                    mediocritatem, ridens labore facete mea ei. Pro id apeirian
                    dignissim. Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-4 lg:ml-14">
                  <h4 className="text-2xl font-medium leading-6 ">
                    Cu imperdiet posidonium sed
                  </h4>
                  <p className="mt-2 text-xl text-gray-400">
                    Amet utinam aliquando ut mea, malis admodum ocurreret nec
                    et, elit tibique cu nec. Nec ex maluisset inciderint, ex
                    quis. lorum Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-4 lg:ml-14">
                  <h4 className="text-2xl font-medium leading-6 ">
                    Nulla omittam sadipscing mel ne
                  </h4>
                  <p className="mt-2 text-xl text-gray-400">
                    At sed possim oporteat probatus, justo graece ne nec, minim
                    commodo legimus ut vix. Ut eos iudico quando soleat, nam
                    modus. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quas ullam inventore ipsa ab consequuntur quibusdam
                    cupiditate!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0 p-5">
            <Tilt>
              <img
                src={allUNeed2Know}
                alt=""
                className="mx-auto shadow-[20px_20px_50px_rgba(0,0,0,0.5)] bg-white/10 border-t-[1px] border-l-[1px] rounded-xl border-white/20"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllUNeed2Know;
