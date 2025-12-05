import React, { use, useRef } from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { motion, useScroll } from "motion/react"


const Portfolio = () => {
   
const { scrollYProgress } = useScroll()

const home = useRef(null);
const about = useRef(null);
const projects = useRef(null);
const contact = useRef(null);

const lightRef = useRef(null);  // Ref for the light element

  const handleMove = (e) => {
    if (!lightRef.current) return;
    lightRef.current.style.left = e.clientX + "px";
    lightRef.current.style.top = e.clientY + "px";
  };

  const showLight = () => {
    if (lightRef.current) lightRef.current.style.opacity = 1;
  };

  const hideLight = () => {
    if (lightRef.current) lightRef.current.style.opacity = 0;
  };


  return (
    
    
    // <div className="overflow-x-scroll overflow-y-hidden w-screen h-screen">
    //   <div className="w-max">
    //     <section className="w-screen h-screen"><Hero /></section>
    //     <section className="w-screen h-screen"><About /></section>
    //     <section className="w-screen h-screen"><Projects /></section>
    //     <section className="w-screen h-screen"><Contact /></section>
    //   </div>
    // </div>

     <div className=' h-screen w-full ' 
     onMouseMove={handleMove}
      onMouseEnter={showLight}
      onMouseLeave={hideLight}
    >
      {/* BACKGROUND LIGHT FOLLOWING CURSOR */}
      <div
        ref={lightRef}
        className="pointer-events-none fixed w-50 h-50 rounded-full bg-purple-600/30 blur-3xl opacity-0 transition-opacity duration-800 -translate-x-1/2 -translate-y-1/2"
      />
  


      <motion.div className='h-4 w-full origin-left bg-purple-800 fixed' style={{ scaleX: scrollYProgress }} />
      
      <div className='lg:w-100 w-80   h-12 bg-black/60 backdrop-blur-[1px] border border-gray-900 fixed top-14 left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-full shadow-md flex items-center justify-center  px-5'>
       <button className='hover:bg-purple-700 py-1 px-3 rounded-full' onClick={() => home.current.scrollIntoView({ behavior: "smooth" })}
        >
  Home
</button>
<button className='hover:bg-purple-700 py-1 px-3 rounded-full' onClick={() => about.current.scrollIntoView({ behavior: "smooth" })}>
  About
</button>
<button className='hover:bg-purple-700 py-1 px-3 rounded-full' onClick={() => projects.current.scrollIntoView({ behavior: "smooth" })}>
  Projects
</button>
<button className='hover:bg-purple-700 py-1 px-3 rounded-full' onClick={() => contact.current.scrollIntoView({ behavior: "smooth" })}>
  Contact
</button>
      </div>

        <Hero  ref={home} />
        <About ref={about} />
        <Projects ref={projects} />
        <Contact ref={contact} />
     </div>
  )
}

export default Portfolio