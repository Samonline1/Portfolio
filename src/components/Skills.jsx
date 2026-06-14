import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNpm,
  SiRedux,
  SiVercel,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  const text = "I am a B.Tech CSE student focused on full-stack product engineering using the MERN stack. I build practical software that solves real problems, with an emphasis on clean architecture, responsive UI, backend systems, authentication, and production-ready workflows.";

  const focusAreas = [
    "Backend APIs and authentication systems",
    "Scalable MERN applications",
    "Real-world user workflows",
    "Performance and clean architecture",
    "Turning ideas into usable products",
  ];

  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { label: "HTML5", icon: <FaHtml5 /> },
        { label: "CSS3", icon: <FaCss3Alt /> },
        { label: "JavaScript", icon: <FaJsSquare /> },
        { label: "React.js", icon: <FaReact /> },
        { label: "Redux Toolkit", icon: <SiRedux /> },
        { label: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { label: "Node.js", icon: <FaNodeJs /> },
        { label: "Express.js", icon: <SiExpress /> },
        { label: "REST APIs", icon: <SiJsonwebtokens /> },
        { label: "JWT Authentication", icon: <SiJsonwebtokens /> },
        { label: "MongoDB", icon: <SiMongodb /> },
        { label: "Mongoose ODM", icon: <SiMongoose /> },
      ],
    },
    {
      title: "Tools",
      items: [
        { label: "Git", icon: <FaGitAlt /> },
        { label: "GitHub", icon: <FaGithub /> },
        { label: "NPM", icon: <SiNpm /> },
        { label: "Vite", icon: <SiVite /> },
        { label: "Vercel", icon: <SiVercel /> },
        { label: "Netlify", icon: <SiNetlify /> },
      ],
    },
  ];

  const exploring = [
    "Advanced backend architecture",
    "AI integration in web applications",
    "System design fundamentals",
    "Production-ready full-stack engineering",
  ];

  const openTo = [
    "Software Engineering Internships",
    "Frontend / Full-Stack Roles",
    "Freelance Development",
    "Open Source Collaboration",
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-32 xl:px-40 py-16 lg:py-20 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-sm"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-purple-300">
          About
        </p>
        <motion.p
          className="mt-4 max-w-4xl text-base sm:text-lg leading-8 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        >
          {text}
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["MERN", "CSE Student", "Full-Stack Product Engineering", "Responsive UI", "Backend Systems"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs sm:text-sm text-gray-100"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="w-full max-w-5xl space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-purple-300">
              I enjoy
            </h2>
            <div className="mt-4 space-y-3 text-gray-300">
              {focusAreas.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-purple-300">
              Exploring
            </h2>
            <div className="mt-4 space-y-3 text-gray-300">
              {exploring.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-purple-300">
              Open to
            </h2>
            <div className="mt-4 space-y-3 text-gray-300">
              {openTo.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5 pt-2">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
              Skills
            </p>
            <h2 className="text-2xl font-semibold">My stack</h2>
            <p className="max-w-2xl text-sm sm:text-base text-gray-400">
              Tools and technologies I use across frontend, backend, and deployment.
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
