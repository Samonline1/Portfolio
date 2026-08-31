"use client";

import React, { useState } from "react";
import { projects } from "@/lib/data";
import { FaCode, FaArrowLeft, FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

export const ProjectsApp = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  if (selectedProject) {
    return (
      <div className="h-full w-full bg-[#111111]/95 text-white flex flex-col md:flex-row">
        {/* Left Sidebar (Otherlife style) */}
        <div className="w-full md:w-80 border-r border-white/10 p-6 flex flex-col gap-6 bg-[#0a0a0a]">
          <button 
            onClick={() => setSelectedProject(null)}
            className="self-start text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2 mb-2 uppercase tracking-widest font-bold"
          >
            ← Back
          </button>
          
          <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-green-900 to-black overflow-hidden flex items-center justify-center p-4">
            {selectedProject.image ? (
              <img 
                src={selectedProject.image.src} 
                alt={selectedProject.title}
                className="w-full h-auto object-cover rounded shadow-lg"
              />
            ) : (
              <h1 className="text-3xl font-black text-green-400 font-serif text-center">{selectedProject.title}</h1>
            )}
          </div>
          
          <div>
            <h2 className="text-2xl font-black mb-1">{selectedProject.title}</h2>
            <div className="flex gap-2 items-center text-xs">
              <span className="text-gray-400">@{selectedProject.title.replace(/\s+/g, '').toLowerCase()}</span>
              <span className="px-2 py-0.5 rounded bg-white/10 font-bold border border-white/20">PRO</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-300 leading-relaxed">
            {selectedProject.subtitle}
          </p>
          
          <div className="flex flex-col gap-3 mt-auto">
            {selectedProject.live && (
              <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-bold border border-white/20 uppercase">
                Website ↗
              </a>
            )}
            {selectedProject.github && (
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-bold text-gray-400 uppercase">
                GitHub
              </a>
            )}
          </div>
        </div>
        
        {/* Right Content */}
        <div className="flex-1 overflow-auto p-6 sm:p-12 custom-scrollbar bg-[#111111]">
          <div className="max-w-3xl space-y-12">
            
            <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-white/10 pb-4">
              <span className="text-white">Overview</span>
              <span>Features</span>
            </div>

            <p className="text-xl sm:text-2xl font-medium leading-relaxed">
              {selectedProject.subtitle}
            </p>
            
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold mb-6">The Problem & Solution</h3>
              <p className="text-gray-300 leading-relaxed">
                This project was built to address core pain points observed in its domain. By streamlining user interactions and relying on modern architecture, it minimizes latency and provides an intuitive, friction-free experience for end-users. The solution bridges the gap between complex requirements and a seamless UI.
              </p>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3"><span className="text-green-400">●</span> Fully responsive design and seamless cross-platform performance.</li>
                <li className="flex items-center gap-3"><span className="text-green-400">●</span> Integrated authentication and secure user data management.</li>
                <li className="flex items-center gap-3"><span className="text-green-400">●</span> Optimized state management for dynamic content rendering.</li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map(tech => (
                  <span key={tech} className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-[#181825]/95 p-6 flex flex-col">
      <div className="text-xs text-gray-400 mb-6 font-medium uppercase tracking-wider">
        /home/sam/Portfolio/Projects
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 cursor-pointer transition-colors border border-transparent hover:border-white/5 group"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-3">
              <FaFolder className="w-full h-full text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-sm text-gray-200 font-medium text-center line-clamp-1">
              {project.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
