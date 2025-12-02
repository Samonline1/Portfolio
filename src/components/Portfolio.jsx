import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Portfolio = () => {
  return (
    <div className=' w-full h-screen '>
        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
  )
}

export default Portfolio