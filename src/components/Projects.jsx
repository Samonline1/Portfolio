import React, { forwardRef } from "react";
import Cartify from "/src/assets/cartify.png";
import JSU from "/src/assets/JSU.png";
import Sympto from "/src/assets/Sympto.png";
import Dx from "/src/assets/dx.png";
import CS from "/src/assets/CS.png";
import KYB from "/src/assets/KYB.png";

import { VscGithub } from "react-icons/vsc";
import { MdLaunch } from "react-icons/md";

const projects = [
  {
    title: "Cartify",
    subtitle: "Full Stack E-Commerce Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Samonline1/Cartify",
    live: "https://caartify.netlify.app/",
    image: Cartify,
  },
  {
    title: "CineScoop",
    subtitle: "Movie discovery app",
    stack: ["React JS", "Redux", "Catching", "API"],
    github: "https://github.com/Samonline1/CineScope",
    live: "https://cine-scoope.netlify.app/",
    image: CS,
  },
  {
    title: "DX ERP",
    subtitle: "Unified ERP Platform",
    stack: ["Firebase", "CRUD", "AUTH", "TypeScript"],
    live: "https://dxerp.netlify.app/",
    image: Dx,
  },

  {
    title: "KYB - Know Your Broker",
    subtitle: "Verified Brokers Platform",
    stack: ["Next JS", "TypeScript", "tailwind"],
    live: "https://knowyourbroker.site/",
    image: KYB,
  },
  {
    title: "Sympto API",
    subtitle: "RESTful Health Search API",
    stack: ["Node.js", "Express.js", "API Key Auth"],
    github: "https://github.com/Samonline1/SymptoAPI",
    live: "https://symptoapi-b6w8.onrender.com",
    image: Sympto,
  },
  {
    title: "Exam Timetable Live",
    subtitle: "Student Utility Platform",
    stack: ["React JS", "Tailwind", "Framer"],
    github: "https://github.com/Samonline1/TimeTable",
    live: "https://jsu-time-table.netlify.app/",
    image: JSU,
  },
  // {
  //   title: "Amazon Clone",
  //   subtitle: "Commerce Interface Build",
  //   stack: ["React JS", "API", "CRUD"],
  //   github: "https://github.com/example/amazon-clone",
  //   live: "https://amazon-clone-demo.vercel.app",
  //   image: amzn,
  // },
  // {
  //   title: "Paste App",
  //   subtitle: "Notes and Snippets Manager",
  //   stack: ["React JS", "Redux", "Routing", "CRUD"],
  //   github: "https://github.com/example/paste-app",
  //   live: "https://paste-app-demo.netlify.app",
  //   image: Paste,
  // },
];

const Projects = forwardRef((props, proj) => {
  return (
    <div
      ref={proj}
      className="px-4 sm:px-6 lg:px-40 py-16 lg:py-20 space-y-6 text-white"
    >
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-3xl sm:text-4xl">Projects</h1>
        <p className="max-w-2xl text-sm sm:text-base text-gray-300">
          A curated look at the work I have built, organized as full-width list
          items for easier scanning on every screen size.
        </p>
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group w-full overflow-hidden rounded-2xl border border-purple-900/70 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-purple-500/70"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-[28%] min-h-[220px] md:min-h-[260px]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/50 md:via-transparent md:to-transparent" />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6 md:p-7">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
                        Project {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-bold">
                        {project.title}
                      </h2>
                      <p className="max-w-3xl text-sm sm:text-base text-gray-300">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs sm:text-sm text-gray-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    {project.github ? (
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/40 hover:bg-white/10"
                      >
                        <VscGithub className="text-lg" />
                        GitHub
                      </a>
                    ) : null}
                    {project.live ? (
                      <a
                        href={project.live}
                        className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/15 px-4 py-2 transition hover:border-purple-300/70 hover:bg-purple-500/25"
                      >
                        <MdLaunch className="text-lg" />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;
