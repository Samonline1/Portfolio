"use client";
import React, { useState } from "react";
import { projects } from "@/lib/data";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaFolder, FaCheckCircle } from "react-icons/fa";

export const ProjectsApp = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  if (selectedProject) {
    return (
      <div className="h-full w-full bg-transparent text-white flex flex-wrap gap-6 p-4 md:p-6 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-full sm:w-80 flex-shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 shadow-2xl overflow-y-auto custom-scrollbar max-h-full">
          <button 
            onClick={() => setSelectedProject(null)}
            className="self-start text-xs text-gray-300 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest font-bold bg-white/10 px-4 py-2 rounded-full border border-white/5"
          >
            <FaArrowLeft /> Back
          </button>
          
          <div className="w-full aspect-video rounded-2xl bg-black/40 overflow-hidden flex items-center justify-center border border-white/10 relative">
            {selectedProject.image ? (
              <img 
                src={selectedProject.image.src} 
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded shadow-lg"
              />
            ) : (
              <h1 className="text-2xl font-bold text-gray-400 text-center px-4">{selectedProject.title}</h1>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <div className="flex gap-2 items-center text-xs">
              <span className="text-gray-400 bg-black/30 px-3 py-1 rounded-full border border-white/5">
                @{selectedProject.title.replace(/\s+/g, '').toLowerCase()}
              </span>
            </div>
          </div>
          
          <p className="text-sm text-gray-300 leading-relaxed bg-black/20 p-4 rounded-2xl border border-white/5">
            {selectedProject.subtitle}
          </p>
          
          <div className="flex flex-col gap-3 mt-auto pt-4">
            {selectedProject.live && (
              <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center justify-between px-6 py-3 rounded-full bg-blue-600/80 hover:bg-blue-500 transition-colors text-sm font-bold shadow-lg border border-white/20 uppercase tracking-wide">
                <span>Live Demo</span>
                <FaExternalLinkAlt />
              </a>
            )}
            {selectedProject.github && (
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-between px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-bold text-gray-200 border border-white/10 uppercase tracking-wide">
                <span>Source Code</span>
                <FaGithub size={16} />
              </a>
            )}
          </div>
        </div>
        
        {/* Right Content */}
        <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-auto custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-10">
            
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{selectedProject.title}</h1>
              <p className="text-xl font-medium text-blue-400">
                {selectedProject.subtitle}
              </p>
            </div>
            
            <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-400">The Problem & Solution</h3>
              <p className="text-gray-200 leading-relaxed">
                {selectedProject.overview || "This project was built to address core pain points observed in its domain. By streamlining user interactions and relying on modern architecture, it minimizes latency and provides an intuitive, friction-free experience for end-users. The solution bridges the gap between complex requirements and a seamless UI."}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-400 pl-2">Key Features</h3>
              <ul className="space-y-4 bg-black/20 rounded-2xl p-6 border border-white/5">
                {selectedProject.features ? (
                  selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <FaCheckCircle className="text-blue-500 mt-1 shrink-0" size={16} />
                      <span className="text-gray-200 leading-relaxed">{feature}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start gap-4">
                      <FaCheckCircle className="text-blue-500 mt-1 shrink-0" size={16} />
                      <span className="text-gray-200 leading-relaxed">Fully responsive design and seamless cross-platform performance.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <FaCheckCircle className="text-blue-500 mt-1 shrink-0" size={16} />
                      <span className="text-gray-200 leading-relaxed">Integrated authentication and secure user data management.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <FaCheckCircle className="text-blue-500 mt-1 shrink-0" size={16} />
                      <span className="text-gray-200 leading-relaxed">Optimized state management for dynamic content rendering.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-400 pl-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 bg-black/20 rounded-2xl p-6 border border-white/5">
                {selectedProject.stack.map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider text-gray-200 shadow-sm hover:bg-white/10 transition-colors">
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
    <div className="h-full w-full bg-transparent p-4 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
      <div className="  shadow-2xl flex-1">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h1>
        
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col items-center p-6 rounded-2xl hover:bg-white/10 cursor-pointer transition-all border border-white/5 hover:border-white/20 group shadow-lg"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform shadow-inner">
                <FaFolder className="w-8 h-8 text-blue-400 drop-shadow-md" />
              </div>
              <span className="text-sm text-gray-200 font-bold text-center line-clamp-2">
                {project.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
