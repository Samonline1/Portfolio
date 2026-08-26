"use client";

import React from "react";
import { useWindowManager, AppId } from "./WindowManager";
import { FaFolderOpen, FaTerminal, FaCode, FaFilePdf, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface DockItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const DockItem = ({ label, icon, isActive, onClick }: DockItemProps) => (
  <div className="relative group flex flex-col items-center">
    <button
      onClick={onClick}
      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 transform group-hover:-translate-y-3 group-hover:scale-125 shadow-lg active:scale-95 ${
        isActive ? "bg-gradient-to-b from-white/40 to-white/10 border border-white/50" : "bg-gradient-to-b from-white/20 to-white/5 border border-white/20 hover:from-white/30 hover:to-white/10"
      }`}
    >
      {icon}
    </button>
    {isActive && (
      <div className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
    )}
    <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded-md pointer-events-none whitespace-nowrap border border-white/10">
      {label}
    </div>
  </div>
);

export const Dock = () => {
  const { windows, openWindow } = useWindowManager();

  const isAppActive = (appId: AppId) => windows.some(w => w.appId === appId);

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-[9000]">
      <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl">
        <DockItem
          label="File Manager"
          icon={<FaFolderOpen className="text-blue-400" />}
          isActive={isAppActive("portfolio")}
          onClick={() => openWindow("portfolio")}
        />
        <DockItem
          label="Terminal"
          icon={<FaTerminal className="text-gray-300" />}
          isActive={isAppActive("terminal")}
          onClick={() => openWindow("terminal")}
        />
        <DockItem
          label="Projects"
          icon={<FaCode className="text-purple-400" />}
          isActive={isAppActive("projects")}
          onClick={() => openWindow("projects")}
        />
        <DockItem
          label="Resume"
          icon={<FaFilePdf className="text-red-400" />}
          isActive={false} // Resume is a file link
          onClick={() => openWindow("resume")}
        />
        
        <div className="w-px h-8 bg-white/10 mx-1" />

        <DockItem
          label="GitHub"
          icon={<FaGithub className="text-white" />}
          isActive={false}
          onClick={() => handleExternalLink("https://github.com/Samonline1")}
        />
        <DockItem
          label="LinkedIn"
          icon={<FaLinkedin className="text-blue-500" />}
          isActive={false}
          onClick={() => handleExternalLink("https://www.linkedin.com/in/sameer-hussain-6829222a6")}
        />
        <DockItem
          label="Contact"
          icon={<FaEnvelope className="text-green-400" />}
          isActive={isAppActive("contact")}
          onClick={() => openWindow("contact")}
        />
      </div>
    </div>
  );
};
