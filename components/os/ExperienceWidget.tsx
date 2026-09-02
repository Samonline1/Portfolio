"use client";
import React from "react";
import { experiences } from "@/lib/data";

export const ExperienceWidget = () => {
  return (
    <div className="flex-none sm:flex-1 w-full sm:max-w-[300px] min-h-[250px] sm:min-h-[300px] mx-auto bg-black/40 backdrop-blur-xl p-5 rounded-3xl shadow-2xl pointer-events-auto transition-transform hover:scale-[1.02] border border-white/20 text-white flex flex-col relative overflow-hidden flex-shrink-0">
      
      {/* Soft gradient blob in the background for that premium OS feel */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/30 blur-[50px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/20 blur-[50px] rounded-full pointer-events-none"></div>

      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 drop-shadow-md z-10">
        Timeline
      </h2>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 z-10">
        <div className="relative border-l-2 border-white/10 ml-2 space-y-6 pb-2">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-5">
              {/* Timeline Dot */}
              <div className="absolute w-2.5 h-2.5 bg-white/20 border-2 border-blue-400 rounded-full -left-[6px] top-1.5 shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
              
              <h3 className="text-sm font-bold text-gray-100 leading-tight">
                {exp.company}
              </h3>
              <p className="text-xs text-blue-200 font-medium mt-1">
                {exp.role}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-200 font-semibold bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
          
          {/* Timeline cap */}
          {/* <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-white/10 border-2 border-gray-500 rounded-full -left-[7px] top-1.5"></div>
            <h3 className="text-sm font-semibold text-gray-400">Journey Began</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
};
