"use client";

import React from "react";
import { experiences } from "@/lib/data";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export const ExperienceApp = () => {
  return (
    <div className="h-full w-full bg-[#1e1e2e]/90 p-6 sm:p-10 overflow-y-auto custom-scrollbar text-white">
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">Experience</h1>
          <p className="text-gray-400">A timeline of my professional roles, internships, and technical contributions.</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-white">{exp.role}</h2>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-purple-400 mt-1 font-medium flex items-center gap-2">
                    <FaBriefcase className="text-sm" /> {exp.company}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-purple-400" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-purple-400" /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <span className="text-purple-400 mt-1">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
