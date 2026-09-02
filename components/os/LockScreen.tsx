"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "@/public/assets/Photo.jpg";

interface LockScreenProps {
  onUnlock: () => void;
}

export const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState<Date>(new Date()); // Initialize instantly

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleUnlock = () => {
    if (!isVisible) return;
    setIsVisible(false);
    setTimeout(() => {
      onUnlock();
    }, 500);
  };

  useEffect(() => {
    const handleKeyOrScroll = (e: Event) => {
      if (e.type === "keydown") {
        const keyEvent = e as KeyboardEvent;
        if (keyEvent.code !== "Space" && keyEvent.code !== "Enter") return;
      }
      handleUnlock();
    };

    window.addEventListener("keydown", handleKeyOrScroll);
    window.addEventListener("wheel", handleKeyOrScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyOrScroll);
      window.removeEventListener("wheel", handleKeyOrScroll);
    };
  }, [isVisible]);

  return (
    <div 
      onClick={handleUnlock}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-between transition-opacity duration-500 bg-black/40 backdrop-blur-xl cursor-pointer select-none ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Top Clock Section */}
      <div className="mt-12 sm:mt-24 flex flex-col items-center pointer-events-none animate-in slide-in-from-top-10 duration-700">
        <h1 suppressHydrationWarning className="text-7xl sm:text-[6rem] md:text-[7rem] font-semibold sm:font-medium text-white tracking-tighter sm:tracking-tight drop-shadow-lg flex items-baseline gap-2">
          <span suppressHydrationWarning>{currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }).split(' ')[0]}</span>
          <span suppressHydrationWarning className="text-3xl sm:text-5xl md:text-6xl font-light opacity-80 uppercase tracking-widest">
            {currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }).split(' ')[1] || ''}
          </span>
        </h1>
        <p suppressHydrationWarning className="text-base sm:text-xl md:text-2xl font-medium text-white/90 tracking-wide mt-1 sm:mt-2 drop-shadow-md">
          {currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>
      
      {/* User Profile Section */}
      <div className="flex flex-col items-center mb-auto mt-20 pointer-events-none animate-in fade-in zoom-in duration-700 delay-150">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl mb-4 bg-black">
          <Image 
            src={profile} 
            alt="User"
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
          Sameer Hussain
        </h2>
        <div className="mt-4 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/10 animate-pulse">
          Click or Press Space to unlock
        </div>
      </div>
      
      {/* Bottom spacer */}
      <div className="h-24"></div>
    </div>
  );
};
