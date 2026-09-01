"use client";
import React, { useEffect } from "react";
import { useWindowManager } from "../os/WindowManager";

export const ResumeApp = () => {
  const { closeWindow, windows } = useWindowManager();

  useEffect(() => {
    // Open the Google Drive link in a new tab
    window.open("https://drive.google.com/file/d/1fNSY0y7Swzt8BaTYrBM381HW3yCZHb6m/view?usp=sharing", "_blank");
    
    // Find and close this window immediately
    const termWin = windows.find(w => w.appId === "resume");
    if (termWin) {
      closeWindow(termWin.id);
    }
  }, [closeWindow, windows]);

  return (
    <div className="flex items-center justify-center h-full w-full bg-transparent text-white p-8 text-center">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
        <h2 className="text-xl font-bold mb-2">Redirecting to Resume...</h2>
        <p className="text-gray-400">If it didn't open automatically, please check your popup blocker.</p>
      </div>
    </div>
  );
};
