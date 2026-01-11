import React from "react";

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
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const text =
    " I’m a frontend developer passionate about creating fast, dynamic, and user-focused applications. I enjoy building scalable React apps with clean UI, real-world functionality, and intuitive user experiences. My work includes large-scale clones like Netflix and Amazon and real-impact tools like a college exam timetable system used by over 500 students.";
  const count = useMotionValue(0);
  const typed = useTransform(count, (v) => text.slice(0, v));

  useEffect(() => {
    if (isInView) {
      animate(count, text.length, {
        duration: 2.5,
        ease: "easeInOut",
      });
    }
  }, [isInView]);

  return (
    <div className=" p-10 lg:px-40 lg:p-20 lg:pt-30 space-y-6 flex flex-col gap-10 ">
      <div>
        <h1 className="font-bold text-2xl">About</h1>
        <motion.p className="text-gray-400 mt-4" ref={ref}>
          {typed}
        </motion.p>
      </div>

      <div className="overflow-hidden w-full pt-5">
        <h1 className="font-bold text-2xl">Skills</h1>
        <p className="text-gray-400 mt-4">Things I'm good at</p>
        <div className="flex gap-10 w-max skill-scroll text-6xl lg:text-8xl pt-5">
          {[
            <FaReact />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <RiTailwindCssFill />,
            <FaBootstrap />,
            <FaJsSquare />,
            <FaGithub />,
            <SiVercel />,
            <SiRedux />,
            <SiReactrouter />,

            // duplicate for infinite scroll
            <FaReact />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <RiTailwindCssFill />,
            <FaBootstrap />,
            <FaJsSquare />,
            <FaGithub />,
            <SiVercel />,
            <SiRedux />,
            <SiReactrouter />,
          ].map((Icon, i) => (
            <div
              key={i}
              className="p-3 rounded-xl hover:scale-120 hover:text-purple-900 transition-transform duration-300 cursor-pointer"
            >
              {Icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
