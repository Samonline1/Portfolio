import React from "react";
import {
  FaBootstrap,
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
  SiGithub,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNpm,
  SiRedux,
  SiVercel,
  SiVite,
} from "react-icons/si";
import {
  motion,
} from "framer-motion";

const Skills = () => {
  const text = "Full Stack Developer with hands-on experience building scalable MERN stack applications. Developed end-to-end features including REST APIs, JWT authentication, server-side cart systems, and real-time UI components. Built applications used by 200+ students concurrently, with a strong focus on performance, clean architecture, and intuitive user experience.";

  const skills = [
    { label: "JavaScript (ES6+)", icon: <FaJsSquare /> },
    { label: "HTML5", icon: <FaHtml5 /> },
    { label: "CSS3", icon: <FaCss3Alt /> },
    { label: "React.js", icon: <FaReact /> },
    { label: "Redux Toolkit", icon: <SiRedux /> },
    { label: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { label: "Bootstrap", icon: <FaBootstrap /> },
    { label: "Node.js", icon: <FaNodeJs /> },
    { label: "Express.js", icon: <SiExpress /> },
    { label: "JWT Authentication", icon: <SiJsonwebtokens /> },
    { label: "MongoDB", icon: <SiMongodb /> },
    { label: "Mongoose ODM", icon: <SiMongoose /> },
    { label: "Git", icon: <FaGitAlt /> },
    { label: "GitHub", icon: <SiGithub /> },
    { label: "NPM", icon: <SiNpm /> },
    { label: "Vite", icon: <SiVite /> },
    { label: "Vercel", icon: <SiVercel /> },
    { label: "Netlify", icon: <SiNetlify /> },
    { label: "Source Control", icon: <FaGithub /> },
  ];

  const skillGroups = [
    "Languages: JavaScript (ES6+), HTML5, CSS3",
    "Frontend: React.js, Redux Toolkit, Tailwind CSS, Bootstrap, Responsive Web Design",
    "Backend: Node.js, Express.js, REST API Design, JWT Authentication, Middleware Engineering",
    "Database: MongoDB, Mongoose ODM, Schema Design",
    "Tools & Platforms: Git, GitHub, NPM, Vite, Vercel, Netlify",
  ];

  return (
    <div className="p-10 lg:px-32 xl:px-40 lg:p-20 lg:pt-30 space-y-8 flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl min-h-[260px] sm:min-h-[280px] lg:min-h-[320px] rounded-3xl border border-purple-900/70 bg-gradient-to-br from-purple-950/20 via-black to-black/90 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 shadow-[0_0_40px_rgba(107,33,168,0.08)]"
      >
        <h1 className="font-bold text-2xl">About</h1>
        <motion.p
          className="text-gray-300 mt-5 text-base sm:text-lg leading-8 max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        >
          {text}
        </motion.p>
      </motion.div>

      <div className="overflow-hidden w-full pt-5">
        <h1 className="font-bold text-2xl">Skills</h1>
        <p className="text-gray-400 mt-4">
          Building complete products across frontend, backend, database, and deployment.
        </p>
        <div className="flex gap-10 w-max skill-scroll text-6xl lg:text-8xl pt-5">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.label}-${index}`}
              className="p-3 rounded-xl hover:scale-120 hover:text-purple-900 transition-transform duration-300 cursor-pointer"
              title={skill.label}
            >
              {skill.icon}
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3 text-gray-400">
          {skillGroups.map((group) => (
            <p key={group}>{group}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
