"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const ContactApp = () => {
  return (
    <div className="h-full w-full bg-[#1e1e2e]/95 text-white flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-md w-full space-y-8 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-2xl">
        <div>
          <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
            <FaEnvelope className="text-2xl" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Get In Touch</h1>
          <p className="text-gray-400 text-sm">
            I'm currently available for full-time roles and freelance projects. Let's build something amazing together.
          </p>
        </div>

        <div className="space-y-4">
          <a 
            href="mailto:sameerhussain.1.sh@gmail.com"
            className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-purple-600 hover:bg-purple-500 transition-colors font-medium shadow-lg shadow-purple-900/50"
          >
            <FaEnvelope /> sameerhussain.1.sh@gmail.com
          </a>
          
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="https://github.com/Samonline1" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium border border-white/5"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/sameer-hussain-6829222a6" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 transition-colors text-sm font-medium border border-blue-500/30"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
