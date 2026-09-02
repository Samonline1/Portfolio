"use client";

import React, { useEffect, useState } from "react";
import { useWindowManager } from "./WindowManager";
import { FaApple } from "react-icons/fa"; // Maybe use a generic icon or custom SamOS icon

export const MenuBar = () => {
  const { openWindow, minimizeAll, closeAll, bringToFront } = useWindowManager();
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDateStr(now.toLocaleDateString([], { month: 'short', day: 'numeric' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-7 bg-black/40 backdrop-blur-md border-b border-white/10 z-[9999] flex items-center justify-between px-3 text-xs text-white select-none">
      <div className="flex items-center space-x-4">
        <div className="font-bold text-sm px-1 cursor-default tracking-wide text-purple-100">
          SamOS
        </div>
        
        <div className="group relative">
          <button className="px-2 py-0.5 rounded hover:bg-white/20 transition-colors">File</button>
          <div className="absolute top-full left-0 mt-1 w-48 bg-black/80 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <button onClick={() => openWindow("portfolio")} className="w-full text-left px-4 py-1.5 hover:bg-blue-600">Open Portfolio</button>
            <button onClick={() => openWindow("terminal")} className="w-full text-left px-4 py-1.5 hover:bg-blue-600">Open Terminal</button>
          </div>
        </div>

        <div className="group relative hidden sm:block">
          <button className="px-2 py-0.5 rounded hover:bg-white/20 transition-colors">View</button>
          <div className="absolute top-full left-0 mt-1 w-48 bg-black/80 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <button onClick={bringToFront} className="w-full text-left px-4 py-1.5 hover:bg-blue-600">Reset Windows</button>
          </div>
        </div>

        <div className="group relative hidden sm:block">
          <button className="px-2 py-0.5 rounded hover:bg-white/20 transition-colors">Window</button>
          <div className="absolute top-full left-0 mt-1 w-48 bg-black/80 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <button onClick={minimizeAll} className="w-full text-left px-4 py-1.5 hover:bg-blue-600">Minimize All</button>
            <button onClick={closeAll} className="w-full text-left px-4 py-1.5 hover:bg-blue-600">Close All</button>
            <button onClick={bringToFront} className="w-full text-left px-4 py-1.5 hover:bg-blue-600">Bring All to Front</button>
          </div>
        </div>

        <div className="group relative hidden sm:block">
          <button className="px-2 py-0.5 rounded hover:bg-white/20 transition-colors">Help</button>
          <div className="absolute top-full left-0 mt-1 w-48 bg-black/80 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <button onClick={() => openWindow("about")} className="w-full text-left px-4 py-1.5 hover:bg-blue-600">About SamOS</button>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span>{dateStr}</span>
        <span>{timeStr}</span>
      </div>
    </div>
  );
};
