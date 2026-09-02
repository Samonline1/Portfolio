"use client";

import React, { useState } from "react";
import { useWindowManager } from "./WindowManager";
import { FinderIcon, TerminalIcon, SettingsIcon, NotesIcon, FolderIcon, AppStoreIcon, MailIcon, PreviewIcon } from "./MacIcons";

export const LaunchpadApp = () => {
  const { isLaunchpadOpen, toggleLaunchpad, openWindow } = useWindowManager();
  const [search, setSearch] = useState("");

  if (!isLaunchpadOpen) return null;

  const apps = [
    { id: "portfolio", label: "File Manager", icon: <FinderIcon /> },
    { id: "terminal", label: "Terminal", icon: <TerminalIcon /> },
    { id: "about", label: "About", icon: <SettingsIcon /> },
    { id: "experience", label: "Experience", icon: <NotesIcon /> },
    { id: "projects", label: "Projects", icon: <FolderIcon /> },
    { id: "skills", label: "Skills", icon: <AppStoreIcon /> },
    { id: "contact", label: "Contact", icon: <MailIcon /> },
    { id: "resume", label: "Resume", icon: <PreviewIcon /> },
  ];

  const filteredApps = apps.filter(app => app.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div 
      className="fixed inset-0 z-[8500] bg-black/40 backdrop-blur-3xl flex flex-col items-center pt-16 sm:pt-24 transition-opacity duration-300 animate-in fade-in"
      onClick={toggleLaunchpad}
    >
      <div 
        className="w-full max-w-5xl flex flex-col items-center px-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Search" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xs mb-16 bg-white/10 border border-white/20 rounded-md text-center py-1.5 text-sm text-white outline-none focus:bg-white/20 focus:border-white/40 transition-colors shadow-lg placeholder-white/50 backdrop-blur-md"
          autoFocus
        />

        {/* Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-y-12 gap-x-6 sm:gap-x-10">
          {filteredApps.map((app) => (
            <div 
              key={app.id} 
              onClick={() => {
                if (app.id === "resume") {
                  window.open("https://drive.google.com/file/d/1fNSY0y7Swzt8BaTYrBM381HW3yCZHb6m/view?usp=sharing", "_blank");
                  toggleLaunchpad();
                } else {
                  openWindow(app.id as any);
                }
              }} 
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                {app.icon}
              </div>
              <span className="text-white text-[11px] md:text-xs font-medium text-center shadow-black/50 drop-shadow-md tracking-wide">
                {app.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
