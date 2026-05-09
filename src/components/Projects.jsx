import React, { forwardRef } from "react";
import Netflix from "/src/assets/netflix.png";
import Cartify from "/src/assets/cartify.png";
import JSU from "/src/assets/JSU.png";
import Sympto from "/src/assets/Sympto.png";
import Dx from "/src/assets/dx.png";

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
    title: "Exam Timetable Live",
    subtitle: "Student Utility Platform",
    stack: ["React JS", "Tailwind", "Framer"],
    github: "https://github.com/Samonline1/TimeTable",
    live: "https://jsu-time-table.netlify.app/",
    image: JSU,
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
    title: "Netflix Clone",
    subtitle: "Frontend UI",
    stack: ["React JS", "CRUD", "AUTH", "API"],
    github: "https://github.com/Samonline1/Netflix",
    live: "https://netiflux.netlify.app/",
    image: Netflix,
  },
   {
    title: "DX ERP",
    subtitle: "Unified ERP Platform",
    stack: ["Firebase", "CRUD", "AUTH", "TypeScript"],
    live: "https://dxerp.netlify.app/",
    image: Dx,
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
      className="p-10 pt-20 lg:pt-5 space-y-5 text-white lg:px-40"
    >
      <h1 className="font-bold text-2xl">Projects</h1>

      <div className="w-full flex space-x-10">
        <div className="pb-10 w-full flex flex-col lg:grid lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-purple-900 lg:w-[480px] w-full h-[250px] lg:h-[270px] rounded-xl bg-red-800 flex-shrink-0 grayscale hover:grayscale-0 transition duration-300 hover:scale-105 relative overflow-hidden"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : null}
              <div
                className={`p-4 h-full flex justify-between items-end rounded-xl relative z-10 ${
                  project.image
                    ? "bg-gradient-to-t from-black/80 to-transparent"
                    : "bg-gradient-to-t from-black/90 via-black/60 to-black/30"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                      {project.title}
                    </h1>
                    <p className="text-sm text-gray-300 mt-1">{project.subtitle}</p>
                  </div>

                  <div className="flex gap-3 w-full flex-wrap">
                    {project.stack.map((item) => (
                      <p
                        key={item}
                        className="px-3 py-1 text-xs sm:text-sm lg:text-base bg-black/70 border border-gray-700 hover:border-gray-300 rounded-xl"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex text-2xl sm:text-3xl lg:text-4xl gap-4">
                  <a href={project.github}>
                    <VscGithub />
                  </a>
                  {project.live ? (
                    <a href={project.live}>
                      <MdLaunch />
                    </a>
                  ) : null}
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
