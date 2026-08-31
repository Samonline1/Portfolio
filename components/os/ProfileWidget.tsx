"use client";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { useWindowManager } from "./WindowManager";

export const ProfileWidget = () => {
  const { openWindow } = useWindowManager();

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-[600px] bg-[#0a0a0a]/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-white shadow-2xl pointer-events-auto">
      {/* Top Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl shadow-inner border border-white/10">
          👨‍💻
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
            Samonline1
            {/* Theme toggle icon placeholder */}
            <span className="text-gray-500 text-sm ml-2 cursor-pointer hover:text-white transition-colors">⚙️</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
        </div>
      </div>

      <div className="border-t border-dashed border-white/20 my-4"></div>

      {/* Bio & Bullets */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-200">
          Engineer / Designer. I love building, breaking, and shipping things.
        </p>
        <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
          <li>React, modern web architecture, and developer tools excite me.</li>
          <li>I believe actions speak louder than words, so I put my code where my mouth is.</li>
          <li>Currently building interactive OS-like web experiences.</li>
        </ul>
      </div>

      <div className="border-t border-dashed border-white/20 my-6"></div>

      {/* Socials */}
      <div>
        <p className="text-sm text-gray-500 mb-3">
          Here are my <span className="font-bold text-gray-300">socials</span>
        </p>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => handleExternalLink("https://github.com/Samonline1")}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium transition-colors"
          >
            <FaGithub /> GitHub
          </button>
          <button 
            onClick={() => handleExternalLink("https://twitter.com/")}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium transition-colors"
          >
            <FaTwitter /> Twitter
          </button>
          <button 
            onClick={() => handleExternalLink("https://www.linkedin.com/in/sameer-hussain-6829222a6")}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium transition-colors"
          >
            <FaLinkedin /> LinkedIn
          </button>
          <button 
            onClick={() => openWindow("resume")}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium transition-colors"
          >
            <FaFileAlt /> Resume
          </button>
        </div>
      </div>
    </div>
  );
};
