"use client";
import React, { useState } from "react";
import { experiences } from "@/lib/data";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

export const ExperienceApp = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExp = experiences[selectedIndex];

  return (
    <div className="h-full w-full flex flex-col sm:flex-row bg-transparent text-white p-4 md:p-6 gap-4 md:gap-6 overflow-hidden">
      {/* Sidebar - List View */}
      <div className="w-full sm:w-1/3 sm:min-w-[250px] sm:max-w-[320px] shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col sm:h-full max-h-[40%] sm:max-h-full overflow-hidden shadow-2xl">
        <div className="h-16 border-b border-white/10 flex items-center px-6 shrink-0 bg-black/20">
          <span className="text-sm font-bold text-gray-200 uppercase tracking-widest">Career Timeline</span>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`w-full text-left p-4 rounded-2xl transition-all ${
                selectedIndex === idx 
                  ? "bg-blue-600/80 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] border border-white/20" 
                  : "hover:bg-white/10 text-gray-300 border border-transparent"
              }`}
            >
              <div className="font-bold truncate text-base">{exp.role}</div>
              <div className={`text-sm mt-1 truncate ${selectedIndex === idx ? "text-blue-100" : "text-gray-400"}`}>
                {exp.company}
              </div>
              <div className={`text-xs mt-2 font-medium ${selectedIndex === idx ? "text-blue-200" : "text-gray-500"}`}>
                {exp.period}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - Detail View */}
      <div className="flex-1 flex flex-col h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="h-16 border-b border-white/10 flex items-center px-8 shrink-0 bg-black/20">
          <span className="text-sm font-bold text-gray-200 tracking-wide">Role Details</span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">{selectedExp.role}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-8 pb-6 border-b border-white/10">
              <span className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full border border-white/5">
                <FaBuilding className="text-blue-400" /> {selectedExp.company}
              </span>
              <span className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full border border-white/5">
                <FaCalendarAlt className="text-green-400" /> {selectedExp.period}
              </span>
              <span className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full border border-white/5">
                <FaMapMarkerAlt className="text-red-400" /> {selectedExp.location}
              </span>
            </div>

            <div className="bg-black/20 rounded-2xl p-6 border border-white/5 mb-8">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Overview</h3>
              <p className="text-base leading-relaxed text-gray-200">
                {selectedExp.description}
              </p>
            </div>

            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Key Responsibilities</h3>
            <ul className="space-y-4 mb-8 bg-black/20 rounded-2xl p-6 border border-white/5">
              {selectedExp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-4 text-gray-200 leading-relaxed items-start">
                  <FaCheckCircle className="text-blue-500 mt-1 shrink-0" size={16} />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Core Technologies</h3>
            <div className="flex flex-wrap gap-2 bg-black/20 rounded-2xl p-6 border border-white/5">
              {selectedExp.skills.map(skill => (
                <span key={skill} className="px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-sm text-gray-200 font-medium hover:bg-white/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
