"use client";

import React from "react";
import { useWindowManager, AppId } from "../os/WindowManager";
import { FaUser, FaBriefcase, FaCode, FaEnvelope, FaFilePdf } from "react-icons/fa";

interface FolderItemProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const FolderItem = ({ label, icon, onClick }: FolderItemProps) => (
  <div
    onClick={onClick}
    className="flex flex-col items-center justify-start p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-colors border border-transparent hover:border-white/20 group"
  >
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-600 shadow-lg flex items-center justify-center text-3xl text-white mb-2 group-hover:scale-105 transition-transform">
      {icon}
    </div>
    <span className="text-xs text-gray-200 font-medium text-center">
      {label}
    </span>
  </div>
);

export const PortfolioApp = () => {
  const { openWindow } = useWindowManager();

  return (
    <div className="h-full w-full bg-[#111111]/80 backdrop-blur-2xl p-6 flex flex-col">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-medium tracking-wide">
        <span className="px-2 py-1 bg-white/10 rounded-md">/home</span> 
        <span>›</span>
        <span className="px-2 py-1 bg-white/10 rounded-md">sam</span>
        <span>›</span>
        <span className="px-2 py-1 bg-white/20 rounded-md text-white">Portfolio</span>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        <FolderItem
          label="About"
          icon={<FaUser className="text-white" />}
          onClick={() => openWindow("about")}
        />
        <FolderItem
          label="Experience"
          icon={<FaBriefcase className="text-white" />}
          onClick={() => openWindow("experience")}
        />
        <FolderItem
          label="Projects"
          icon={<FaCode className="text-white" />}
          onClick={() => openWindow("projects")}
        />
        <FolderItem
          label="Contact"
          icon={<FaEnvelope className="text-white" />}
          onClick={() => openWindow("contact")}
        />
        <FolderItem
          label="Skills"
          icon={<FaCode className="text-white" />}
          onClick={() => openWindow("skills")}
        />
        <FolderItem
          label="Resume.pdf"
          icon={<FaFilePdf className="text-white" />}
          onClick={() => openWindow("resume")}
        />
      </div>
    </div>
  );
};
