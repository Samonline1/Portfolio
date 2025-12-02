import React from "react";
import img from "/src/assets/netflix.png";

const Projects = () => {
  return (
    <div className="h-screen bg-black p-10 ">
      <h1 className="font-bold text-lg">Projects</h1>

      <div className="flex justify-center w-full">
        <div className=" w-screen bg-green-800 flex overflow-x-scroll space-x-10 scroll-smooth px-10">
          <div className="h-full w-500 flex gap-2">
            <div
              className="w-500 h-100 bg-red-800"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" p-3 h-full flex flex-col justify-end items-start">
                <h1>Netflix Clone</h1>
                <div className="flex gap-3">
                <p className="px-5 py-1 bg-black/70 backdrop-blue-lg  border rounded-xl">react</p> 
                                <p>react</p> 
                <p>react</p> 
</div>
              </div>
            </div>

            <div
              className="w-500 h-100 bg-red-800"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="w-500 h-100 bg-red-800"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* <div className=' gap-20'>
  <div className='w-full h-30 bg-red-800'>
        
      </div>
      <div className='w-full h-60 bg-red-800'>
        
      </div>
      <div className='w-full h-60 bg-red-800'>
        
      </div>
      </div> */}
    </div>
  );
};

export default Projects;
