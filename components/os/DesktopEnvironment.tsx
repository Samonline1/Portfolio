"use client";

import React, { useEffect, useState } from "react";
import { useWindowManager, WindowState } from "./WindowManager";
import { MenuBar } from "./MenuBar";
import { Dock } from "./Dock";
import { WindowFrame } from "./WindowFrame";
import { LaunchpadApp } from "./LaunchpadApp";
import { PortfolioApp } from "../apps/PortfolioApp";
import { TerminalApp } from "../apps/TerminalApp";
import { AboutApp } from "../apps/AboutApp";
import { ExperienceApp } from "../apps/ExperienceApp";
import { ProjectsApp } from "../apps/ProjectsApp";
import { ContactApp } from "../apps/ContactApp";
import { SkillsApp } from "../apps/SkillsApp";
import { AnimatedCloudBackground } from "./AnimatedCloudBackground";
import { HeroWidget } from "./HeroWidget";
import { LockScreen } from "./LockScreen";
import { FaFolder, FaTerminal, FaUser, FaBriefcase, FaCode, FaEnvelope, FaFilePdf, FaStar } from "react-icons/fa";

const AppRenderer = ({ windowState }: { windowState: WindowState }) => {
  switch (windowState.appId) {
    case "portfolio": return <PortfolioApp />;
    case "terminal": return <TerminalApp />;
    case "about": return <AboutApp />;
    case "experience": return <ExperienceApp />;
    case "projects": return <ProjectsApp />;
    case "contact": return <ContactApp />;
    case "skills": return <SkillsApp />;
    default: return <div className="p-4 text-white">App not found</div>;
  }
};

export const DesktopEnvironment = () => {
  const { windows, openWindow } = useWindowManager();
  const [isMobile, setIsMobile] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden text-white select-none">
      {/* 
        We rely on globals.css or layout.tsx for the user's custom background image.
        Wait, I'll keep the AnimatedCloudBackground if they want it, or just let their custom CSS bg shine.
        The user said "as i ahev added new img as BG", so they might have added it in globals.css. 
        I'll wrap AnimatedCloudBackground in a container that allows the background behind it to show, 
        or we can just keep it but ensure it's not totally opaque. 
        Actually, let's keep AnimatedCloudBackground just in case they meant they updated that component, 
        or if it's placed behind. 
      */}
      <AnimatedCloudBackground />

      {isLocked && <LockScreen onUnlock={() => setIsLocked(false)} />}

      <MenuBar />

      {/* Main Desktop Area */}
      <div className="absolute top-7 bottom-0 left-0 right-0 z-10 p-4 flex flex-col md:flex-row pointer-events-none">
        
        {/* Desktop Icons removed, Launchpad handles apps now */}
        <div className="flex flex-row flex-wrap md:flex-col gap-4 mt-2 mb-4 md:mb-0 w-full md:w-32 pointer-events-auto items-start">
        </div>

        <HeroWidget />

        {/* Window Manager Layer */}
        <div className="absolute inset-0 pointer-events-none">
          {windows.map((w) => {
            const effectiveState = isMobile ? { ...w, isMaximized: true, zIndex: w.zIndex + 100 } : w;
            return (
              <div key={w.id} className="pointer-events-auto">
                <WindowFrame windowState={effectiveState}>
                  <AppRenderer windowState={w} />
                </WindowFrame>
              </div>
            );
          })}
        </div>
      </div>

      <LaunchpadApp />

      <div className="pointer-events-auto z-[9000] relative">
        <Dock />
      </div>
    </div>
  );
};
