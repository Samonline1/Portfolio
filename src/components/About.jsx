import React, { forwardRef } from 'react'
import Skills from './Skills'
import { motion } from 'motion/react'

const About = forwardRef((props, about) => {
  return (
    <motion.div ref={about}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}>
    <Skills/>
    </motion.div>
  )
})

export default About