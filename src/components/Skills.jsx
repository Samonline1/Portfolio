import React from "react";
import { DiHtml5 } from "react-icons/di";
import {
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaReact,
  FaBootstrap,
  FaHtml5,
} from "react-icons/fa";
import { SiVercel, SiRedux, SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const Skills = () => {
  return (
    <div className="bg-black p-10 h-[60vh] space-y-6 ">
      <div>
        <h1 className="font-bold text-lg">About</h1>
        <p>
          I’m a frontend developer passionate about creating fast, dynamic, and
          user-focused applications. I enjoy building scalable React apps with
          clean UI, real-world functionality, and intuitive user experiences. My
          work includes large-scale clones like Netflix and Amazon and
          real-impact tools like a college exam timetable system used by over
          500 students.
        </p>
      </div>

 

      <div>
                <h1 className="font-bold text-lg">About</h1>

             <h1>Things I'm good at</h1>
        <div className="flex gap-6 text-8xl text-white">
          {/* <DiNodejs /> */}
          <FaReact />
          <FaHtml5 />
          <FaCss3Alt />
          <RiTailwindCssFill />
          <FaBootstrap />
          <FaJsSquare />
          <FaGithub />
          <SiVercel />
          <SiRedux />
          <SiReactrouter />
        </div>
      </div>
    </div>
  );
};

export default Skills;
