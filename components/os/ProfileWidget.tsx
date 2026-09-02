"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useWindowManager } from "./WindowManager";
import Image from "next/image";
import profile from "@/public/assets/Photo.jpg";

export const ProfileWidget = () => {
  const { openWindow } = useWindowManager();

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex-none sm:flex-1 w-full sm:max-w-[300px] min-h-[120px] sm:min-h-[300px] mx-auto bg-black/60 backdrop-blur-2xl rounded-3xl shadow-2xl pointer-events-auto transition-transform hover:scale-[1.02] border border-white/20 flex-shrink-0 relative overflow-hidden flex flex-col justify-center sm:justify-end p-5 sm:p-0 gap-3 sm:gap-0">
      
      {/* Desktop Background Image (Hidden on mobile) */}
      <Image
        src={profile}
        alt="Profile" 
        className="hidden sm:block absolute grayscale inset-0 w-full h-full object-cover opacity-90"
      />
      {/* Dark Gradient Overlay for text readability (Desktop only) */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
      {/* Mobile Top Row: Circular Avatar + About Button */}
      <div className="sm:hidden flex items-center justify-between w-full">
        <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 shadow-inner">
          <Image src={profile} alt="Profile" className="w-full h-full object-cover grayscale opacity-90" />
        </div>
        <button 
          onClick={() => openWindow("about")}
          className="bg-white/95 hover:bg-white text-black font-bold py-1.5 px-5 rounded-full text-xs shadow-xl transition-transform active:scale-95"
        >
          About
        </button>
      </div>
        
      {/* Content */}
      <div className="relative z-10 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:p-5 text-white flex flex-col justify-end w-full">
        <h1 className="text-xl font-bold flex items-center gap-2 drop-shadow-md">
          Sameer Hussain
          <MdVerified className="text-blue-400 sm:text-white text-xl drop-shadow-md" />
        </h1>
          
        <div className="flex items-center justify-between mt-2 sm:mt-4">
          {/* Socials & Resume */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleExternalLink("https://github.com/Samonline1")} 
              className="text-gray-200 hover:text-white hover:scale-110 transition-all drop-shadow-md"
              title="GitHub"
            >
              <FaGithub size={20} />
            </button>
            <button 
              onClick={() => handleExternalLink("https://www.linkedin.com/in/sameer-hussain-6829222a6")} 
              className="text-gray-200 hover:text-white hover:scale-110 transition-all drop-shadow-md"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </button>
            <button 
              onClick={() => handleExternalLink("https://drive.google.com/file/d/1fNSY0y7Swzt8BaTYrBM381HW3yCZHb6m/view?usp=sharing")} 
              className="text-gray-200 hover:text-white hover:scale-110 transition-all drop-shadow-md"
              title="Resume"
            >
              <FaFileAlt size={20} />
            </button>
          </div>
            
          {/* About Button (Desktop only, mobile is up top) */}
          <button 
            onClick={() => openWindow("about")}
            className="hidden sm:block bg-white/95 hover:bg-white text-black font-bold py-1.5 px-5 rounded-full text-xs shadow-xl transition-transform active:scale-95"
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
};
