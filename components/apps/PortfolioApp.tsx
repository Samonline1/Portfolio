"use client";

import React from "react";
import { useWindowManager } from "../os/WindowManager";
import { FinderIcon, TerminalIcon, SettingsIcon, NotesIcon, FolderIcon, AppStoreIcon, MailIcon, PreviewIcon } from "../os/MacIcons";

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
    <div className="w-16 h-16 flex items-center justify-center text-3xl mb-2 group-hover:scale-105 transition-transform">
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
    <div className="h-full w-full bg-[#1e1e1e] text-white flex flex-col">
      {/* Finder Toolbar */}
      <div className="h-14 border-b border-black/20 bg-[#2c2c2d] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button className="p-1.5 hover:bg-white/10 rounded text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="p-1.5 hover:bg-white/10 rounded text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
          <span className="font-medium text-sm">Portfolio</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-black/20 rounded-md border border-white/5 p-0.5">
            <div className="px-2 py-1 bg-white/20 rounded shadow-sm text-xs cursor-default">Grid</div>
            <div className="px-2 py-1 text-gray-400 text-xs hover:text-white cursor-pointer">List</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-[#1e1e1e]">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          <FolderItem
            label="About"
            icon={<SettingsIcon />}
            onClick={() => openWindow("about")}
          />
          <FolderItem
            label="Experience"
            icon={<NotesIcon />}
            onClick={() => openWindow("experience")}
          />
          <FolderItem
            label="Projects"
            icon={<FolderIcon />}
            onClick={() => openWindow("projects")}
          />
          <FolderItem
            label="Contact"
            icon={<MailIcon />}
            onClick={() => openWindow("contact")}
          />
          <FolderItem
            label="Skills"
            icon={<AppStoreIcon />}
            onClick={() => openWindow("skills")}
          />
          <FolderItem
            label="Resume"
            icon={<PreviewIcon />}
            onClick={() => openWindow("resume")}
          />
        </div>
      </div>
    </div>
  );
};
