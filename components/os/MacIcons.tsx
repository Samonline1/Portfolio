"use client";
import React from "react";

export const FinderIcon = () => (
  <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner bg-[#f0f0f0] flex">
    <div className="w-1/2 h-full bg-[#2888f4]" />
    <div className="w-1/2 h-full bg-[#52a6ff]" />
    {/* Finder Face Smile */}
    <svg className="absolute inset-0 w-full h-full text-[#113a69] drop-shadow-md" viewBox="0 0 100 100">
      <path d="M 25 35 Q 25 50 35 55 M 75 35 Q 75 50 65 55 M 35 70 Q 50 85 65 70 M 50 20 L 50 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

export const TerminalIcon = () => (
  <div className="w-full h-full rounded-2xl bg-gradient-to-b from-gray-700 to-black p-2 border border-white/20 shadow-inner relative overflow-hidden">
    <span className="text-white font-mono font-bold text-xs absolute top-1 left-2">_{">"}</span>
    <span className="text-green-400 font-mono font-bold text-sm absolute top-4 left-2">ls</span>
  </div>
);

export const MailIcon = () => (
  <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#60C3FF] to-[#0A84FF] flex items-center justify-center border border-white/20 shadow-inner">
    <svg viewBox="0 0 24 24" className="w-2/3 h-2/3 text-white drop-shadow-md" fill="currentColor">
      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
    </svg>
  </div>
);

export const NotesIcon = () => (
  <div className="w-full h-full rounded-2xl bg-white overflow-hidden border border-gray-300 shadow-inner flex flex-col">
    <div className="h-1/3 w-full bg-gradient-to-b from-yellow-300 to-yellow-500 border-b border-gray-200" />
    <div className="flex-1 flex flex-col justify-evenly py-1 px-2">
      <div className="w-full h-0.5 bg-gray-200 rounded-full" />
      <div className="w-4/5 h-0.5 bg-gray-200 rounded-full" />
      <div className="w-full h-0.5 bg-gray-200 rounded-full" />
    </div>
  </div>
);

export const AppStoreIcon = () => (
  <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#25B4FF] to-[#0060FF] flex items-center justify-center border border-white/20 shadow-inner">
    <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 text-white drop-shadow-md">
      <path d="M 50 15 L 20 80 L 32 80 L 41 60 L 73 60 L 80 80 L 92 80 L 62 15 Z M 46 50 L 57 25 L 68 50 Z" fill="currentColor" />
    </svg>
  </div>
);

export const SettingsIcon = () => (
  <div className="w-full h-full rounded-2xl bg-gradient-to-b from-gray-200 to-gray-400 flex items-center justify-center border border-white/40 shadow-inner">
    <svg viewBox="0 0 24 24" className="w-3/4 h-3/4 text-gray-700 drop-shadow-sm" fill="currentColor">
      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
    </svg>
  </div>
);

export const FolderIcon = () => (
  <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#40A8FF] to-[#0A84FF] flex flex-col border border-white/20 shadow-inner overflow-hidden">
    <div className="h-1/4 w-1/2 bg-[#89C7FF] rounded-br-lg" />
    <div className="flex-1 w-full flex items-center justify-center">
      <div className="w-1/2 h-1/2 bg-white/20 rounded shadow-sm" />
    </div>
  </div>
);

export const PreviewIcon = () => (
  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white to-gray-200 border border-gray-300 shadow-inner flex flex-col items-center justify-center relative overflow-hidden">
    <div className="w-2/3 h-3/4 bg-white border border-gray-300 shadow-sm rounded-sm" />
    <svg viewBox="0 0 24 24" className="w-1/2 h-1/2 text-blue-500 absolute drop-shadow-md" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  </div>
);
