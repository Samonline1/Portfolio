"use client";

import React, { useState, useEffect } from "react";
import { useWindowManager } from "./WindowManager";

const words = ["Codes", "Designs", "Builds", "Innovates"];

export const HeroWidget = () => {
  const { openWindow } = useWindowManager();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div className="pointer-events-auto flex flex-col items-center justify-center text-center -mt-16">
        <div className="text-yellow-300 text-xs tracking-[0.2em] uppercase font-bold mb-4 flex items-center gap-2 drop-shadow-md">
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span> 
          HELLO, I'M SAM ONLINE
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white drop-shadow-lg mb-8" style={{ fontFamily: "serif" }}>
          Designer who <br/>
          <span className="text-white relative inline-block">
            {words[wordIndex]}
          </span>
        </h1>

        <button 
          onClick={() => openWindow("about")}
          className="flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white transition-all shadow-xl active:scale-95"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black/40 text-xs">
            ▶
          </div>
          <span className="font-medium text-sm tracking-wide">Read more about me</span>
          <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
             <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          </div>
        </button>
      </div>
    </div>
  );
};
