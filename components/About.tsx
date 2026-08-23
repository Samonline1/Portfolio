import React, { forwardRef } from "react";
import Skills from "./Skills";

const About = forwardRef<HTMLDivElement, {}>((props, about) => {
  return (
    <div ref={about}>
      <Skills />
    </div>
  );
});

About.displayName = "About";

export default About;
