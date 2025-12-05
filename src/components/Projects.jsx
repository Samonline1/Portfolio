import React from "react";
import img from "/src/assets/netflix.png";
import { VscGithub } from "react-icons/vsc";
import { MdLaunch } from "react-icons/md";
import { forwardRef } from "react";



const Projects = forwardRef((props, projects) => {

  return (
    <div ref={projects} className="lg:h-screen  lg:bg-black p-10 pt-20 space-y-5 text-white  bg-red-800 lg:mx-10">
      <h1 className="font-bold text-lg">Projects</h1>


      <div className="flex justify-center w-full">
        <div className="lg:w-screen w-full flex lg:overflow-x-scroll no-scrollbar space-x-10 scroll-smooth lg:px-10">
          
          {/* CARD WRAPPER */}
          <div className="h-full w-full flex flex-col lg:flex-row gap-6 ">

            {/* CARD 1 */}
            <div
              className="lg:w-[500px] w-full h-[250px] lg:h-[300px] rounded-xl bg-red-800 flex-shrink-0"
              style={{
                backgroundImage: `url(${img})`,
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

                  <div className="flex gap-3">
                    <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">react</p>
                    <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">redux</p>
                    <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">api</p>
                  </div>
                </div>

                {/* ICONS */}
                <div className="flex text-2xl sm:text-3xl lg:text-4xl gap-4">
                  <a href="#"><VscGithub /></a>
                  <a href="#"><MdLaunch /></a>
                </div>

              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="lg:w-[500px] w-full h-[250px] lg:h-[300px] rounded-xl bg-red-800 flex-shrink-0"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 h-full flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent rounded-xl">
                
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    Netflix Clone
                  </h1>

                  <div className="flex gap-3">
                    <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">react</p>
                    <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">redux</p>
                    <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">api</p>
                  </div>
                </div>

                <div className="flex text-2xl sm:text-3xl lg:text-4xl gap-4">
                  <a href="#"><VscGithub /></a>
                  <a href="#"><MdLaunch /></a>
                </div>

              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="lg:w-[500px] w-full h-[250px] lg:h-[300px] rounded-xl bg-red-800 flex-shrink-0"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 h-full flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent rounded-xl">
                
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    Netflix Clone
                  </h1>

                  <div className="flex gap-3">
                    <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">react</p>
                    <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">redux</p>
                    <p className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl">api</p>
                  </div>
                </div>

                <div className="flex text-2xl sm:text-3xl lg:text-4xl gap-4">
                  <a href="#"><VscGithub /></a>
                  <a href="#"><MdLaunch /></a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
