"use client";
import React, { useState } from "react";
import { experiences } from "@/lib/data";

export const ExperienceApp = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExp = experiences[selectedIndex];

  return (
    <div className="h-full w-full flex bg-[#1e1e1e] text-white">
      {/* Sidebar - List View */}
      <div className="w-1/3 min-w-[250px] max-w-[350px] bg-[#252526] border-r border-black/20 flex flex-col h-full">
        <div className="h-12 border-b border-black/20 flex items-center px-4 shrink-0">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Experience</span>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`w-full text-left p-3 rounded-xl transition-all ${
                selectedIndex === idx 
                  ? "bg-blue-500 text-white shadow-md" 
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              <div className="font-bold truncate">{exp.role}</div>
              <div className={`text-sm mt-1 truncate ${selectedIndex === idx ? "text-blue-100" : "text-gray-400"}`}>
                {exp.company}
              </div>
              <div className={`text-xs mt-2 ${selectedIndex === idx ? "text-blue-200" : "text-gray-500"}`}>
                {exp.period}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - Detail View */}
      <div className="flex-1 flex flex-col h-full bg-[#1e1e1e]">
        <div className="h-12 border-b border-white/5 flex items-center px-6 shrink-0 bg-[#252526]">
          <span className="text-sm font-medium text-gray-300">{selectedExp.company}</span>
        </div>
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-2">{selectedExp.role}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-white/10">
              <span className="flex items-center gap-1">🏢 {selectedExp.company}</span>
              <span>•</span>
              <span className="flex items-center gap-1">📅 {selectedExp.period}</span>
              <span>•</span>
              <span className="flex items-center gap-1">📍 {selectedExp.location}</span>
            </div>

            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              {selectedExp.description}
            </p>

            <h3 className="text-xl font-bold mb-4">Responsibilities</h3>
            <ul className="space-y-3 mb-8">
              {selectedExp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-3 text-gray-300 leading-relaxed">
                  <span className="text-blue-400 mt-1">•</span>
                  {resp}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {selectedExp.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-black/40 border border-white/10 rounded-md text-sm text-gray-300 font-medium">
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
