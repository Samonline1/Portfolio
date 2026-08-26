"use client";

import React, { useEffect, useState } from "react";
import { useWindowManager, WindowState } from "./WindowManager";
import { MenuBar } from "./MenuBar";
import { Dock } from "./Dock";
import { DesktopIcon } from "./DesktopIcon";
import { WindowFrame } from "./WindowFrame";
import { PortfolioApp } from "../apps/PortfolioApp";
import { TerminalApp } from "../apps/TerminalApp";
import { AboutApp } from "../apps/AboutApp";
import { ExperienceApp } from "../apps/ExperienceApp";
import { ProjectsApp } from "../apps/ProjectsApp";
import { ContactApp } from "../apps/ContactApp";
import { SkillsApp } from "../apps/SkillsApp";
import { AnimatedCloudBackground } from "./AnimatedCloudBackground";
import { HeroWidget } from "./HeroWidget";
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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0f0f13] text-white select-none">
      <AnimatedCloudBackground />

      <MenuBar />

      {/* Main Desktop Area */}
      <div className="absolute top-7 bottom-0 left-0 right-0 z-10 p-4 flex flex-col md:flex-row pointer-events-none">
        
        {/* Desktop Icons (Left) */}
        <div className="flex flex-row flex-wrap md:flex-col gap-4 mt-2 mb-4 md:mb-0 w-full md:w-32 pointer-events-auto items-start">
          <DesktopIcon
            appId="portfolio"
            label="File Manager"
            icon={<FaFolder className="text-blue-400" />}
          />
          <DesktopIcon
            appId="terminal"
            label="Terminal"
            icon={<FaTerminal className="text-gray-300" />}
          />
          <DesktopIcon
            appId="about"
            label="About"
            icon={<FaUser className="text-indigo-400" />}
          />
          <DesktopIcon
            appId="experience"
            label="Experience"
            icon={<FaBriefcase className="text-emerald-400" />}
          />
          <DesktopIcon
            appId="projects"
            label="Projects"
            icon={<FaCode className="text-purple-400" />}
          />
          <DesktopIcon
            appId="skills"
            label="Skills"
            icon={<FaStar className="text-pink-400" />}
          />
          <DesktopIcon
            appId="contact"
            label="Contact"
            icon={<FaEnvelope className="text-rose-400" />}
          />
          <DesktopIcon
            appId="resume"
            label="Resume"
            icon={<FaFilePdf className="text-red-500" />}
          />
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

      <div className="pointer-events-auto z-[9000] relative">
        <Dock />
      </div>
    </div>
  );
};
