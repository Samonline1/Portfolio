import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiNetlify,
  SiRender,
  SiVercel,
  SiNpm,
} from "react-icons/si";

const Skills = () => {
  const focusAreas = [
    {
      title: "Frontend Engineering",
      desc: "Building responsive, accessible, and performant user interfaces with modern React, Tailwind CSS, and precise animations.",
    },
    {
      title: "Backend Development",
      desc: "Designing RESTful APIs, managing database schemas, and building secure, scalable server-side architectures.",
    },
    {
      title: "Full Stack Integration",
      desc: "Connecting the dots across the stack—from database design to client-side state management and seamless deployments.",
    },
  ];

  const skillGroups = [
    {
      title: "Core Stack",
      items: [
        { label: "JavaScript", icon: <SiJavascript /> },
        { label: "React.js", icon: <FaReact /> },
        { label: "Node.js", icon: <FaNodeJs /> },
        { label: "Express.js", icon: <SiExpress /> },
        { label: "MongoDB", icon: <FaDatabase /> },
        { label: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Tools & Ecosystem",
      items: [
        { label: "Git", icon: <FaGitAlt /> },
        { label: "GitHub", icon: <FaGithub /> },
        { label: "Postman", icon: <SiPostman /> },
        { label: "npm", icon: <SiNpm /> },
        { label: "Figma", icon: <FaFigma /> },
      ],
    },
    {
      title: "Deployment & Hosting",
      items: [
        { label: "Vercel", icon: <SiVercel /> },
        { label: "Netlify", icon: <SiNetlify /> },
        { label: "Render", icon: <SiRender /> },
      ],
    },
  ];

  const exploring = [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Redis",
  ];

  const openTo = [
    "Full-time roles",
    "Freelance projects",
    "Open source collaboration",
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-40 py-16 lg:py-20 space-y-12 lg:space-y-16 text-white border-b border-purple-900/40">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1 space-y-6 lg:space-y-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
              Introduction
            </p>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              About Me.
            </h1>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
            <p>
              I am a passionate Full Stack Developer with a strong foundation in
              modern web technologies. I specialize in the MERN stack (MongoDB,
              Express.js, React.js, Node.js) and focus on building intuitive,
              dynamic, and scalable applications.
            </p>
            <p>
              My journey in software development is driven by a constant desire
              to learn and solve complex problems. Whether I'm designing a sleek
              user interface or architecting a robust backend API, I aim for
              clean code and an exceptional user experience.
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition hover:border-purple-500/50 hover:bg-white/10"
            >
              <h2 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                {String(index + 1).padStart(2, "0")}. {area.title}
              </h2>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/4">
            <h2 className="font-bold text-2xl">Technical Arsenal</h2>
            <p className="mt-2 text-sm text-gray-400">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-sm uppercase tracking-[0.25em] text-gray-300">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs sm:text-sm text-gray-100"
                    >
                      <span className="text-purple-300">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
