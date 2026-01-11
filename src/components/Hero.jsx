import React, { forwardRef } from "react";
import img from "/src/assets/GeminiBannerUp.png";
import { motion, useMotionValue, useTransform } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Hero = forwardRef((props, home) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // subtle movement (important)
  const moveX = useTransform(x, [-0.5, 0.5], [-20, 0]);
  const moveY = useTransform(y, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    x.set(e.clientX / innerWidth - 0.5);
    y.set(e.clientY / innerHeight - 0.5);
  };

  return (
    <div
      ref={home}
      className="h-full lg:h-[100vh] bg-gradient-to-t from-purple-900/10 via-black to-black text-white border-b border-purple-800 relative overflow-hidden"
    >
      <div className="h-full flex flex-col justify-center items-center ">
        <div className="text-scroll w-full h-32 overflow-hidden flex items-center">
          <div className="text-track text-purple-800 font-extrabold text-8xl uppercase">
            <p className="text-item ">frontend</p>
            <p className="text-item ">frontend </p>
            <p className="text-item ">frontend </p>
            <p className="text-item ">frontend </p>
          </div>
        </div>

        <div className="text-scroll w-full h-32 overflow-hidden flex items-center">
          <div className="text-trackreverse text-outline-purple font-extrabold text-8xl uppercase font-family: 'Arial Black', Gadget, sans-serif;">
            <p className="text-item">developer. </p>
            <p className="text-item ">developer. </p>
            <p className="text-item ">developer. </p>
            <p className="text-item ">developer. </p>
          </div>
        </div>
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        ref={home}
        className="flex justify-center items-center absolute inset-0 h-400 sm:mt-25 mt-36 h-full lg:h-full lg:mt-20 w-full hover:cursor-none"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          x: moveX,
          y: moveY,
        }}
      />

      <div className="absolute bottom-0 right-0  text-white w-full  ">
        <div className="flex  flex justify-between m-10 lg:mx-20 ">
          <div>
            <h1 className="text-xl font-bold shine-text ">Sameer Hussain</h1>
            <p className="text-gray-700">Designer & Developer</p>
          </div>
          <div className="text-3xl flex gap-3">
            <a href="https://github.com/Samonline1">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sameer-hussain-6829222a6">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
