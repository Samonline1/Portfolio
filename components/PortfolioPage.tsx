"use client";

import React, { Suspense, lazy, useRef, useState, MouseEvent } from "react";
import Hero from "./Hero";
import Loading from "./Loading";

const About = lazy(() => import("./About"));
const Experience = lazy(() => import("./Experience"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));

const PortfolioPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const home = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const proj = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const lightRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!lightRef.current) return;
    lightRef.current.style.left = e.clientX + "px";
    lightRef.current.style.top = e.clientY + "px";
  };

  const showLight = () => {
    if (lightRef.current) lightRef.current.style.opacity = "1";
  };

  const hideLight = () => {
    if (lightRef.current) lightRef.current.style.opacity = "0";
  };

  return (
    <>
      {isLoading && <Loading onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <div
          className="h-screen w-full"
          onMouseMove={handleMove}
          onMouseEnter={showLight}
          onMouseLeave={hideLight}
        >
          <div
            ref={lightRef}
            className="pointer-events-none fixed w-50 h-50 rounded-full bg-purple-600/30 blur-3xl opacity-0 transition-opacity duration-800 -translate-x-1/2 -translate-y-1/2 z-3"
          />

          <div className="h-4 w-full origin-left bg-purple-800 fixed z-5" />

          <div className="max-w-fit w-[70vw] h-12 bg-black/60 backdrop-blur-[1px] border border-purple-800 fixed top-14 left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-full shadow-md flex items-center justify-center px-3 sm:px-5 gap-1 sm:gap-2 text-xs sm:text-sm text-gray-200">
            <button
              className="hover:bg-purple-700 active:bg-purple-700 hover:text-white py-1 px-2.5 sm:px-3 rounded-full transition-colors cursor-pointer"
              onClick={() => home.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Home
            </button>
            <button
              className="hover:bg-purple-700 active:bg-purple-700 hover:text-white py-1 px-2.5 sm:px-3 rounded-full transition-colors cursor-pointer"
              onClick={() => about.current?.scrollIntoView({ behavior: "smooth" })}
            >
              About
            </button>
            <button
              className="hover:bg-purple-700 active:bg-purple-700 hover:text-white py-1 px-2.5 sm:px-3 rounded-full transition-colors cursor-pointer"
              onClick={() => experience.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Experience
            </button>
            <button
              className="hover:bg-purple-700 active:bg-purple-700 hover:text-white py-1 px-2.5 sm:px-3 rounded-full transition-colors cursor-pointer"
              onClick={() => proj.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Projects
            </button>
            <button
              className="hover:bg-purple-700 active:bg-purple-700 hover:text-white py-1 px-2.5 sm:px-3 rounded-full transition-colors cursor-pointer"
              onClick={() => contact.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact
            </button>
          </div>
          <Hero ref={home} />
          <Suspense fallback={null}>
            <About ref={about} />
            <Experience ref={experience} />
            <Projects ref={proj} />
            <Contact ref={contact} />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default PortfolioPage;
