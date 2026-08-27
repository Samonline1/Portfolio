"use client";
import React from "react";

export const SkillsApp = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠",
      skills: ["Git", "GitHub", "Vercel", "Docker", "Figma"]
    }
  ];

  return (
    <div className="h-full w-full bg-[#1e1e1e] text-white flex flex-col">
      {/* Mac App Toolbar */}
      <div className="h-14 border-b border-black/20 bg-[#2c2c2d] flex items-center px-4 justify-center relative">
        <h1 className="font-bold text-sm tracking-wide">Developer Skills</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="bg-[#2c2c2d] border border-white/10 rounded-2xl p-6 shadow-lg hover:border-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl mb-4">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold mb-4">{category.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-black/30 rounded-lg text-sm text-gray-300 font-medium border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between border border-white/10 shadow-xl">
            <div>
              <h2 className="text-2xl font-bold mb-2">Always Learning</h2>
              <p className="text-blue-100 max-w-md">Currently exploring Web3 technologies, Rust, and advanced generative AI integrations to build the next generation of web applications.</p>
            </div>
            <div className="mt-6 md:mt-0 px-6 py-3 bg-white text-blue-900 font-bold rounded-full cursor-pointer hover:scale-105 transition-transform">
              View GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
