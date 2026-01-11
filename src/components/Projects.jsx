import React from "react";
import Netflix from "/src/assets/netflix.png";
import amzn from "/src/assets/Amzn.png";
import JSU from "/src/assets/JSU.png";
import Paste from "/src/assets/Paste.png";

import { VscGithub } from "react-icons/vsc";
import { MdLaunch } from "react-icons/md";
import { forwardRef } from "react";

const Projects = forwardRef((props, proj) => {
  return (
    <div
      ref={proj}
      className=" p-10 pt-20 lg:pt-5 space-y-5 text-white lg:px-40"
    >
      <h1 className="font-bold text-2xl">Projects</h1>

      <div className=" w-full flex space-x-10">
        {/* CARD WRAPPER */}
        <div className=" pb-10 w-full flex flex-col lg:grid lg:grid-cols-2 gap-6 ">
          {/* CARD 1 */}
          <div
            className=" border border-purple-900  lg:w-[480px] w-full h-[250px] lg:h-[270px] rounded-xl bg-red-800 flex-shrink-0 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${Netflix})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-4 h-full flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent rounded-xl">
              {/* TEXT SECTION */}
              <div className="flex flex-col gap-3">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Netflix Clone
                </h1>

                <div className="flex gap-3 w-full flex-wrap">
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    React JS
                  </p>
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    CRUD
                  </p>
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    AUTH
                  </p>
                   <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    API
                  </p>
                </div>
              </div>

              {/* ICONS */}
              <div className="flex text-2xl sm:text-3xl lg:text-4xl gap-4">
                <a href="https://github.com/Samonline1/Netflix">
                  <VscGithub />
                </a>
                <a href="https://netiflux.netlify.app/">
                  <MdLaunch />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="border border-purple-900  lg:w-[480px] w-full h-[250px] lg:h-[270px] rounded-xl bg-red-800 flex-shrink-0 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${amzn})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-4 h-full flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent rounded-xl">
              <div className="flex flex-col gap-3">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Amazon Clone
                </h1>

                <div className="flex gap-3 w-full flex-wrap">
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    React JS
                  </p>
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    API
                  </p>
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    CRUD
                  </p>
                </div>
              </div>

              <div className="flex text-2xl sm:text-3xl lg:text-4xl gap-4">
                <a href="https://github.com/Samonline1/AmazonClone">
                  <VscGithub />
                </a>
                <a href="https://amazonon.netlify.app/">
                  <MdLaunch />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="border border-purple-900  lg:w-[480px] w-full h-[250px] lg:h-[270px] rounded-xl bg-red-800 flex-shrink-0 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${JSU})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-4 h-full flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent rounded-xl">
              <div className="flex flex-col gap-3">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Exam Timetable Live{" "}
                </h1>

                <div className="flex gap-3 w-full flex-wrap">
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    React JS
                  </p>
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    Tailwind
                  </p>
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    Framer
                  </p>
                </div>
              </div>

              <div className="flex text-2xl sm:text-3xl lg:text-4xl gap-4">
                <a href="https://github.com/Samonline1/TimeTable">
                  <VscGithub />
                </a>
                <a href="https://jsu-time-table.netlify.app/">
                  <MdLaunch />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="border border-purple-900  lg:w-[480px] w-full h-[250px] lg:h-[270px] rounded-xl bg-red-800 flex-shrink-0 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${Paste})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-4 h-full flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent rounded-xl">
              <div className="flex flex-col gap-3">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Paste App                </h1>

                <div className="flex gap-3 w-full flex-wrap">
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    React JS
                  </p>
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    Redux
                  </p>
                  <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    Routing
                  </p>
                   <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">
                    CRUD
                  </p>
                </div>
              </div>

              <div className="flex text-2xl sm:text-3xl lg:text-4xl gap-4">
                <a href="https://github.com/Samonline1/TPasteApp">
                  <VscGithub />
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
});

export default Projects;
