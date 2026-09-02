import React, { forwardRef } from "react";
import img from "@/src/assets/GeminiBannerUp.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = forwardRef<HTMLDivElement, {}>((props, home) => {
  return (
    <div
      ref={home}
      className="h-full lg:h-[100vh] bg-gradient-to-t from-purple-900/10 via-black to-black text-white border-b border-purple-800 relative overflow-hidden"
    >
      <div className="h-full flex flex-col justify-center items-center">
        <div className="text-scroll w-full h-32 overflow-hidden flex items-center">
          <div className="text-track text-purple-800 font-extrabold text-8xl uppercase">
            <p className="text-item">fullstack</p>
            <p className="text-item">fullstack </p>
            <p className="text-item">fullstack </p>
            <p className="text-item">fullstack </p>
          </div>
        </div>

        <div className="text-scroll w-full h-32 overflow-hidden flex items-center">
          <div className="text-trackreverse text-outline-purple font-extrabold text-8xl uppercase" style={{ fontFamily: "'Arial Black', Gadget, sans-serif" }}>
            <p className="text-item">developer. </p>
            <p className="text-item">developer. </p>
            <p className="text-item">developer. </p>
            <p className="text-item">developer. </p>
          </div>
        </div>
      </div>

      <img
        src={img.src}
        alt="Sameer Hussain hero banner"
        loading="lazy"
        decoding="async"
        className="flex justify-center items-center absolute inset-0 h-400 sm:mt-25 mt-36 lg:h-full lg:mt-20 w-full hover:cursor-none"
        style={{ objectFit: "contain", objectPosition: "center top" }}
      />

      <div className="absolute bottom-0 right-0 text-white w-full">
        <div className="flex justify-between m-10 lg:mx-20">
          <div>
            <h1 className="text-xl font-bold shine-text">Sameer Hussain</h1>
            <p className="text-gray-700">Full Stack Developer</p>
          </div>
          <div className="text-3xl flex gap-3">
            <a href="https://github.com/Samonline1" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sameer-hussain-6829222a6" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
