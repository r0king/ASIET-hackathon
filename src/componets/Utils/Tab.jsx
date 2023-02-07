import React, { useState } from "react";
import { useWindowSize } from "react-use";

function Tab({ tabs, eventName }) {
  const [currentTab, setCurrentTab] = useState("About");

  const translateValue =
    (tabs.findIndex((tab) => tab.name === currentTab) / tabs.length) * 100;

  const [selectedOption, setSelectedOption] = useState("About");
  // useEffect(()=>{
  // },[selectedOption])
  const { width } = useWindowSize();

  return (
    <>
      {width > 640 ? (
        <div className={`${eventName} relative my-10 mb-16`}>
          <div className=" py-2 sticky top-0 z-10">
            <div className="w-fit max-w-[90vw] mx-auto rounded-full border border-gray-200 bg-black/70 overflow-hidden">
              <div className="relative  sm:block overflow-hidden">
                {/* ::Navigation Tabs */}
                <nav aria-label="Tabs">
                  <ul className="grid bg-black/70 grid-flow-col auto-cols-fr">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <li
                          key={tab.name}
                          className={`relative z-10 flex justify-center rounded-full text-base ${
                            tab.name === currentTab
                              ? "transition duration-300 text-black"
                              : "text-gray-400 hover:text-gray-500"
                          }`}
                        >
                          <button
                            type="button"
                            className="md:p-4 p-2 w-full inline-flex justify-center items-center text-center md:text-sm text-[.6rem] font-semibold"
                            onClick={() => setCurrentTab(tab.name)}
                          >
                            {width > 640 ? (
                              <Icon className="mr-1.5 w-5 h-5" />
                            ) : (
                              ""
                            )}
                            {tab.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                {/* ::Sliding Background */}
                <div className="absolute inset-0 mx-auto w-full h-full rounded-full">
                  <div
                    className="relative h-full transition-all duration-300 ease-in"
                    style={{ transform: `translateX(${translateValue}%)` }}
                  >
                    <div
                      className="h-full rounded-full bg-[var(--secondary-color)]"
                      style={{ width: `${(1 / tabs.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {tabs.map((tab) => {
            return (
              <div
                key={tab.name}
                className="md:mx-16 mx-6 my-10 text-[var(--secondary-color)]"
              >
                {tab.name === currentTab ? tab.page : ""}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mx-auto w-5/6 max-w-md my-10 sm:hidden rounded-lg ">
          <select
            name="current-tab"
            id="current-tab"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="form-select w-full sm:w-auto pl-4 block text-sm text-[var(--secondary-color)] font-semibold cursor-pointer focus:ring-0 rounded-md pr-3 bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 mb-5 h-10"
          >
            {tabs.map((tab) => (
              <option
                key={tab.name}
                className="text-black w-full "
                value={tab.name}
                onSelectCapture={() => setCurrentTab(tab.name)}
              >
                {tab.name}
              </option>
            ))}
          </select>
          {tabs.map((tab) => {
            return (
              <div key={tab.name} className="text-[var(--secondary-color)]">
                {tab.name === selectedOption ? tab.page : ""}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Tab;
