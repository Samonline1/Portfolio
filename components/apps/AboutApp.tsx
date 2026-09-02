"use client";
import React from "react";
import { FaGraduationCap, FaLaptopCode, FaServer, FaCodeBranch, FaCogs, FaGamepad, FaHeadphones, FaCode } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Image from "next/image";
import profile from "@/public/assets/Photo.jpg";

export const AboutApp = () => {
  return (
    <div className="h-full w-full bg-transparent text-white overflow-y-auto custom-scrollbar p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Top Header / Summary Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl flex flex-wrap items-center justify-center sm:justify-start gap-8">
          <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-2 border-white/20 shadow-xl bg-black">
            <Image
              src={profile} alt="Samonline1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left min-w-[280px]">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Sameer Hussain</h1>
            <h2 className="text-blue-400 font-medium text-lg mb-4">Full Stack Developer</h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Computer Science undergraduate (Expected 2027) with hands-on experience building and deploying web applications using
              React, Next.js, JavaScript, TypeScript, Node.js, and REST APIs. Experienced in API integration,
              state management, authentication, debugging, performance improvements, and production deployments.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-6">
              {/* <div className="flex items-center gap-2 text-sm text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                <MdLocationOn className="text-blue-400" /> Remote
              </div> */}
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                <FaCodeBranch className="text-blue-400" /> Open to Opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid layout for secondary info */}
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

          {/* Education Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <FaGraduationCap size={20} />
              </div>
              Education
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white">B.Tech, Computer Science Engineering</h4>
                <p className="text-sm text-blue-400 mt-1">Expected Graduation: 2027</p>
              </div>
              <div className="h-px w-full bg-white/10 my-2"></div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Current CGPA</span>
                <span className="font-bold text-lg bg-white/10 px-3 py-1 rounded-lg">8.2 / 10</span>
              </div>
            </div>
          </div>

          {/* Interests / Focus Areas */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
                <FaCogs size={20} />
              </div>
              Core Focus
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4 bg-black/30 p-3 rounded-xl border border-white/5">
                <FaLaptopCode className="text-blue-400 text-xl" />
                <div>
                  <h4 className="font-medium text-gray-200">Frontend Architecture</h4>
                  <p className="text-xs text-gray-400">Next.js, React, Responsive UI</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black/30 p-3 rounded-xl border border-white/5">
                <FaServer className="text-green-400 text-xl" />
                <div>
                  <h4 className="font-medium text-gray-200">Backend Systems</h4>
                  <p className="text-xs text-gray-400">Node.js, Express, MongoDB</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black/30 p-3 rounded-xl border border-white/5">
                <FaCode className="text-pink-400 text-xl" />
                <div>
                  <h4 className="font-medium text-gray-200">API Integration</h4>
                  <p className="text-xs text-gray-400">REST APIs, Auth, State Management</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
