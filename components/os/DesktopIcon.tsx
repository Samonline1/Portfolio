"use client";

import React, { useState } from "react";
import { AppId, useWindowManager } from "./WindowManager";

interface DesktopIconProps {
  appId: AppId;
  label: string;
  icon: React.ReactNode;
}

export const DesktopIcon = ({ appId, label, icon }: DesktopIconProps) => {
  const { openWindow } = useWindowManager();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsSelected(true);
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        openWindow(appId);
        setIsSelected(false);
      }}
      className={`flex flex-col items-center justify-start w-20 md:w-24 gap-1 p-2 rounded-xl cursor-pointer transition-colors ${
        isSelected ? "bg-white/20 border-white/10" : "hover:bg-white/10 border-transparent"
      } border`}
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-lg backdrop-blur-md flex items-center justify-center text-2xl md:text-3xl transition-transform active:scale-95">
        {icon}
      </div>
      <span className="text-[11px] md:text-xs text-white font-medium drop-shadow-md text-center leading-tight px-1 rounded backdrop-blur-sm shadow-black/50">
        {label}
      </span>
    </div>
  );
};
