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
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react";



const Skills = () => {

   const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const text =" I’m a frontend developer passionate about creating fast, dynamic, and user-focused applications. I enjoy building scalable React apps with clean UI, real-world functionality, and intuitive user experiences. My work includes large-scale clones like Netflix and Amazon and real-impact tools like a college exam timetable system used by over 500 students."
  const count = useMotionValue(0)
  const typed = useTransform(count, v => text.slice(0, v))

  useEffect(() => {
    if (isInView) {
      animate(count, text.length, {
        duration: 2.5,
        ease: "easeInOut",
      })
    }
  }, [isInView])
  
  return (
    <div className="bg-black p-10  lg:p-20 lg:pt-30 h-[80vh] space-y-6 flex flex-col gap-10 ">
      <div>
        <h1 className="font-bold text-lg">About</h1>
        <motion.p ref={ref}>
            {typed}

        </motion.p>
      </div>

      <div className="">
                <h1 className="font-bold text-lg">About</h1>

             <h1>Things I'm good at</h1>
        <div className=" h-full w-full overflow-x-auto  text-white pt-5">
          {/* <DiNodejs /> */}
          <div className="w-full lg:w-[80%] grid grid-cols-4 lg:grid-cols-5  lg:text-6xl gap-6 text-6xl">
          <FaReact className="hover:text-blue-900" />
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
      
    </div>
  );
};

export default Skills;
