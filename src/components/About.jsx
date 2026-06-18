import React, { forwardRef } from "react";
import Skills from "./Skills";

const About = forwardRef((props, about) => {
  return (
    <div ref={about}>
      <Skills />
    </div>
  );
});

export default About;
