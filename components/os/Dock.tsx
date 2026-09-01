"use client";

import React from "react";
import { useWindowManager, AppId } from "./WindowManager";
import { FinderIcon, TerminalIcon, SettingsIcon, FolderIcon, MailIcon, PreviewIcon, AppStoreIcon } from "./MacIcons";
import { FaTh, FaGithub, FaLinkedin } from "react-icons/fa";

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
      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-3 group-hover:scale-125 shadow-xl bg-black/30 active:scale-95`}
    >
      {icon}
    </button>
    {isActive && (
      <div className="absolute -bottom-2 w-1.5 h-1.5 rounded-full " />
    )}
    <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded-md pointer-events-none whitespace-nowrap border border-white/10">
      {label}
    </div>
  </div>
);

export const Dock = () => {
  const { windows, openWindow, isLaunchpadOpen, toggleLaunchpad } = useWindowManager();

  const isAppActive = (appId: AppId) => windows.some(w => w.appId === appId);

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-[9000]">
      <div className="flex items-center gap-3 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/20 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl">
        <DockItem
          label="Launchpad"
          icon={<FaTh className="p-2 w-full h-full text-white transition-all hover:scale-105" />}
          isActive={isLaunchpadOpen}
          onClick={toggleLaunchpad}
        />
        <DockItem
          label="File Manager"
          icon={<FinderIcon />}
          isActive={isAppActive("portfolio")}
          onClick={() => openWindow("portfolio")}
        />
        <DockItem
          label="Terminal"
          icon={<TerminalIcon />}
          isActive={isAppActive("terminal")}
          onClick={() => openWindow("terminal")}
        />
        <DockItem
          label="Projects"
          icon={<FolderIcon />}
          isActive={isAppActive("projects")}
          onClick={() => openWindow("projects")}
        />
        <DockItem
          label="About"
          icon={<SettingsIcon />}
          isActive={isAppActive("about")}
          onClick={() => openWindow("about")}
        />
        <DockItem
          label="Resume"
          icon={<PreviewIcon />}
          isActive={false}
          onClick={() => handleExternalLink("https://drive.google.com/file/d/1fNSY0y7Swzt8BaTYrBM381HW3yCZHb6m/view?usp=sharing")}
        />
        
        <div className="w-px h-8 bg-white/10 mx-1" />

        <DockItem
          label="GitHub"
          icon={<FaGithub className="w-12 h-12 text-white transition-all hover:scale-105" />}
          isActive={false}
          onClick={() => handleExternalLink("https://github.com/Samonline1")}
        />
        <DockItem
          label="LinkedIn"
          icon={<FaLinkedin className="w-12 h-12 text-blue-500  transition-all hover:scale-105" />}
          isActive={false}
          onClick={() => handleExternalLink("https://www.linkedin.com/in/sameer-hussain-6829222a6")}
        />
        <DockItem
          label="Contact"
          icon={<MailIcon />}
          isActive={isAppActive("contact")}
          onClick={() => openWindow("contact")}
        />
      </div>
    </div>
  );
};
