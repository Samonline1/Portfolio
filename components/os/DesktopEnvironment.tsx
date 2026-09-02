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
import { ResumeApp } from "../apps/ResumeApp";
import { AnimatedCloudBackground } from "./AnimatedCloudBackground";
import { ProfileWidget } from "./ProfileWidget";
import { GithubWidget } from "./GithubWidget";
import { ExperienceWidget } from "./ExperienceWidget";
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
    case "resume": return <ResumeApp />;
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
      <AnimatedCloudBackground />

      {isLocked && <LockScreen onUnlock={() => setIsLocked(false)} />}

      <MenuBar />

      {/* Main Desktop Area */}
      <div className="absolute top-7 bottom-0 left-0 right-0 z-10 p-4 flex flex-col md:flex-row pointer-events-none">
        
        {/* Desktop Icons removed, Launchpad handles apps now */}
        <div className="flex flex-col flex-wrap md:flex-col gap-4 mt-2 mb-4 md:mb-0 w-full md:w-32 pointer-events-auto items-start">
        </div>

        {/* Desktop Widgets */}
        <div className="absolute top-7 bottom-24 sm:bottom-32 left-0 right-0 flex flex-col items-center sm:justify-center pointer-events-none z-0 px-4 overflow-y-auto sm:overflow-hidden custom-scrollbar">
          
          <div className="pointer-events-auto flex flex-col gap-4 sm:gap-8 w-full max-w-[624px] transition-transform items-center sm:justify-center h-auto sm:h-full py-4 sm:py-0">
            
            {/* Top Row: Profile & Experience */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-1 justify-center w-full sm:flex-[3] min-h-0">
              <ProfileWidget />
              <ExperienceWidget />
            </div>

            {/* Bottom Row: GitHub Widget */}
            <div className="w-full flex justify-center sm:flex-[2] min-h-0">
              <GithubWidget />
            </div>

          </div>
          
        </div>

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
