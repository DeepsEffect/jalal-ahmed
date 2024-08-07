import React from "react";
import Introduction from "../Introduction/Introduction";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

const Homepage = () => {
  return (
    <div>
      <Introduction />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Homepage;
