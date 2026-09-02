"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type AppId = "portfolio" | "terminal" | "about" | "experience" | "projects" | "contact" | "resume" | "skills";

export interface WindowState {
  id: string; // Unique instance ID
  appId: AppId;
  title: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  width: string | number;
  height: string | number;
  x: number;
  y: number;
}

interface WindowContextType {
  windows: WindowState[];
  isLaunchpadOpen: boolean;
  toggleLaunchpad: () => void;
  openWindow: (appId: AppId) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  updateWindowSize: (id: string, width: string | number, height: string | number) => void;
  closeAll: () => void;
  minimizeAll: () => void;
  bringToFront: () => void;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

const getDefaultSize = (appId: AppId) => {
  switch (appId) {
    case "projects":
    case "portfolio":
      return { width: 800, height: 600 };
    case "terminal":
    case "experience":
    case "skills":
      return { width: 700, height: 500 };
    default:
      return { width: 600, height: 450 };
  }
};

const getTitle = (appId: AppId) => {
  switch (appId) {
    case "portfolio": return "File Manager";
    case "terminal": return "Terminal";
    case "about": return "About";
    case "experience": return "Experience";
    case "projects": return "Projects";
    case "contact": return "Contact";
    case "resume": return "Resume.pdf";
    case "skills": return "Skills";
  }
};

export const WindowProvider = ({ children }: { children: ReactNode }) => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(10);
  const [isLaunchpadOpen, setIsLaunchpadOpen] = useState(false);

  const toggleLaunchpad = () => {
    setIsLaunchpadOpen((prev) => !prev);
  };

  const focusWindow = (id: string) => {
    setHighestZIndex((prev) => prev + 1);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: highestZIndex + 1, isMinimized: false } : w))
    );
  };

  const openWindow = (appId: AppId) => {
    setIsLaunchpadOpen(false);

    if (appId === "resume") {
      // Direct action for resume, don't open a window unless you want to render PDF inside.
      // The user said: "Clicking it should use the existing resume behavior/link."
      // Since it's a file, we can either open in a new tab or treat as a window. Let's open in new tab.
      window.open("/Resume.pdf", "_blank"); // Assuming Resume is in public folder, or handle externally
      return;
    }

    const existingWindow = windows.find((w) => w.appId === appId);
    if (existingWindow) {
      focusWindow(existingWindow.id);
      return;
    }

    const { width, height } = getDefaultSize(appId);
    
    // Calculate centered position
    let initialX = 100;
    let initialY = 50;
    if (typeof window !== "undefined") {
      const wWidth = typeof width === "number" ? width : parseInt(width as string, 10) || 600;
      const wHeight = typeof height === "number" ? height : parseInt(height as string, 10) || 400;
      initialX = Math.max(0, (window.innerWidth - wWidth) / 2) + (windows.length * 20); // slight cascade from center
      initialY = Math.max(0, (window.innerHeight - wHeight) / 2) + (windows.length * 20);
    }
    
    const newWindow: WindowState = {
      id: `${appId}-${Date.now()}`,
      appId,
      title: getTitle(appId),
      isMinimized: false,
      isMaximized: false,
      zIndex: highestZIndex + 1,
      width,
      height,
      x: initialX,
      y: initialY,
    };

    setHighestZIndex((prev) => prev + 1);
    setWindows((prev) => [...prev, newWindow]);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)));
  };

  const maximizeWindow = (id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w)));
  };

  const updateWindowPosition = (id: string, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  };

  const updateWindowSize = (id: string, width: string | number, height: string | number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, width, height } : w)));
  };

  const closeAll = () => setWindows([]);
  const minimizeAll = () => setWindows((prev) => prev.map((w) => ({ ...w, isMinimized: true })));
  
  const bringToFront = () => {
    if (windows.length === 0) return;
    const sorted = [...windows].sort((a, b) => a.zIndex - b.zIndex);
    let newZ = highestZIndex;
    const updated = windows.map(w => {
      newZ++;
      return { ...w, zIndex: newZ, isMinimized: false };
    });
    setHighestZIndex(newZ);
    setWindows(updated);
  };

  return (
    <WindowContext.Provider
      value={{
        windows,
        isLaunchpadOpen,
        toggleLaunchpad,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        updateWindowPosition,
        updateWindowSize,
        closeAll,
        minimizeAll,
        bringToFront,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowContext);
  if (!context) throw new Error("useWindowManager must be used within WindowProvider");
  return context;
};
