"use client";
import React from "react";
import { FaLaptopCode, FaServer, FaCode, FaWrench, FaTools, FaLayerGroup } from "react-icons/fa";

export const SkillsApp = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode size={24} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/20",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"]
    },
    {
      title: "Frontend",
      icon: <FaLaptopCode size={24} />,
      color: "text-blue-400",
      bg: "bg-blue-500/20",
      skills: ["React.js", "Next.js", "React Query", "Redux Toolkit", "React Router", "Tailwind CSS", "Responsive UI"]
    },
    {
      title: "Backend & Database",
      icon: <FaServer size={24} />,
      color: "text-green-400",
      bg: "bg-green-500/20",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "MongoDB", "Mongoose"]
    },
    {
      title: "Development & Architecture",
      icon: <FaLayerGroup size={24} />,
      color: "text-purple-400",
      bg: "bg-purple-500/20",
      skills: ["API Integration", "State Management", "Authentication", "Debugging", "Performance Optimization"]
    },
    {
      title: "Tools & Deployments",
      icon: <FaWrench size={24} />,
      color: "text-pink-400",
      bg: "bg-pink-500/20",
      skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Postman", "Vercel", "Render", "Netlify"]
    }
  ];

  return (
    <div className="h-full w-full bg-transparent text-white overflow-y-auto custom-scrollbar p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-4 border border-blue-500/30">
            <FaTools size={32} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Technical Arsenal</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A comprehensive overview of the technologies, languages, and tools I use to build robust, scalable, and responsive web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col hover:bg-white/10 transition-colors duration-300"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-4">
                <div className={`p-3 rounded-xl ${category.bg} ${category.color} border border-white/5 shadow-inner`}>
                  {category.icon}
                </div>
                {category.title}
              </h2>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-black/40 rounded-full text-sm text-gray-200 font-medium border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
