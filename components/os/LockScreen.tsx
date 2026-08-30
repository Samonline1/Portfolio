"use client";

import React, { useEffect, useState } from "react";

interface LockScreenProps {
  onUnlock: () => void;
}

export const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleAction = (e: Event) => {
      if (e.type === "keydown") {
        const keyEvent = e as KeyboardEvent;
        if (keyEvent.code !== "Space") return;
      }
      
      setIsVisible(false);
      setTimeout(() => {
        onUnlock();
      }, 500); // Wait for fade-out animation
    };

    window.addEventListener("keydown", handleAction);
    window.addEventListener("wheel", handleAction);
    window.addEventListener("click", handleAction);
    window.addEventListener("touchstart", handleAction);

    return () => {
      window.removeEventListener("keydown", handleAction);
      window.removeEventListener("wheel", handleAction);
      window.removeEventListener("click", handleAction);
      window.removeEventListener("touchstart", handleAction);
    };
  }, [onUnlock]);

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-opacity duration-500 bg-black/20 backdrop-blur-sm ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* Scanline overlay for that retro feel from the image */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"
        }}
      />
      
      <div className="z-10 text-center flex flex-col items-center justify-center h-full w-full relative">
        <h1 
          className="text-6xl md:text-8xl lg:text-[10rem] text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          sam
        </h1>
        
        <div className="absolute bottom-16 animate-pulse flex items-center gap-3">
          <span className="text-sm tracking-widest text-white/90 drop-shadow-md uppercase font-semibold">Press</span>
          <span className="px-3 py-1 bg-white/90 text-black text-xs font-bold rounded">space</span>
          <span className="text-sm tracking-widest text-white/90 drop-shadow-md uppercase font-semibold">Or Scroll To Continue</span>
        </div>
      </div>
    </div>
  );
};
