"use client";
import React, { useEffect, useState } from "react";
import { useWindowManager } from "./WindowManager";

export const HeroWidget = () => {
  const { openWindow } = useWindowManager();
  const roles = ["Codes", "Builds", "Designs", "Innovates"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-20">
      <h1 
        className="text-5xl md:text-7xl lg:text-9xl tracking-widest text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        style={{ fontFamily: "var(--font-pixel)" }}
      >
        sam
      </h1>
      <div className="text-xl md:text-2xl text-white/90 font-light mb-8 flex items-center gap-2 drop-shadow-md bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
        <span>Designer who</span>
        <span className="font-semibold text-white min-w-[100px] inline-block animate-pulse">{roles[roleIndex]}</span>
      </div>
      <button 
        className="pointer-events-auto px-8 py-3 bg-white text-black font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all active:scale-95"
        onClick={() => openWindow("about")}
      >
        More About Me
      </button>
    </div>
  );
};
