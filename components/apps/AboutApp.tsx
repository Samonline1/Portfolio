"use client";
import React, { useState } from "react";
import { FaUser, FaGraduationCap, FaCode } from "react-icons/fa";

export const AboutApp = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="h-full w-full bg-[#1e1e1e] text-white flex select-none">
      {/* Sidebar */}
      <div className="w-48 bg-[#2c2c2d] border-r border-black/20 flex flex-col">
        <div className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
          Settings
        </div>
        <div className="px-2 flex flex-col gap-1">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "profile" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
            }`}
          >
            <div className={`p-1 rounded ${activeTab === "profile" ? "bg-white/20" : "bg-gray-500/20"}`}>
              <FaUser size={12} />
            </div>
            Profile
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "education" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
            }`}
          >
            <div className={`p-1 rounded ${activeTab === "education" ? "bg-white/20" : "bg-gray-500/20"}`}>
              <FaGraduationCap size={12} />
            </div>
            Education
          </button>
          <button
            onClick={() => setActiveTab("hobbies")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "hobbies" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-white/10"
            }`}
          >
            <div className={`p-1 rounded ${activeTab === "hobbies" ? "bg-white/20" : "bg-gray-500/20"}`}>
              <FaCode size={12} />
            </div>
            Hobbies
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-[#1e1e1e] overflow-y-auto p-8 custom-scrollbar">
        {activeTab === "profile" && (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-4xl shadow-lg border-2 border-white/10">
                👨‍💻
              </div>
              <div>
                <h1 className="text-3xl font-bold">Sam Online</h1>
                <p className="text-gray-400 text-lg">Full Stack Developer</p>
              </div>
            </div>
            <div className="bg-[#2c2c2d] rounded-xl border border-white/10 overflow-hidden">
              <div className="p-4 border-b border-white/10 flex justify-between">
                <span className="text-gray-400">Name</span>
                <span className="font-medium">Sam Online</span>
              </div>
              <div className="p-4 border-b border-white/10 flex justify-between">
                <span className="text-gray-400">Location</span>
                <span className="font-medium">Remote</span>
              </div>
              <div className="p-4 border-b border-white/10 flex justify-between">
                <span className="text-gray-400">Bio</span>
                <span className="font-medium text-right max-w-sm">
                  Passionate developer specializing in React, Next.js, and scalable backends.
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
            <div className="bg-[#2c2c2d] rounded-xl border border-white/10 overflow-hidden">
              <div className="p-4 border-b border-white/10">
                <h3 className="font-bold text-lg">B.Tech in Computer Science</h3>
                <p className="text-sm text-gray-400 mt-1">University of Technology • 2020 - 2024</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Full Stack Web Development Bootcamp</h3>
                <p className="text-sm text-gray-400 mt-1">Online Certification • 2023</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "hobbies" && (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h2 className="text-2xl font-bold mb-6">Interests</h2>
            <div className="bg-[#2c2c2d] rounded-xl border border-white/10 overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center gap-4">
                <span className="text-2xl">🎮</span>
                <span className="font-medium">Game Development</span>
              </div>
              <div className="p-4 border-b border-white/10 flex items-center gap-4">
                <span className="text-2xl">📚</span>
                <span className="font-medium">Open Source Contributions</span>
              </div>
              <div className="p-4 flex items-center gap-4">
                <span className="text-2xl">🎵</span>
                <span className="font-medium">Music & Audio Production</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
