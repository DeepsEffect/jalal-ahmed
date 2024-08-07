import React from "react";
import Introduction from "../Introduction/Introduction";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Homepage = () => {
  return (
    <div>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Homepage;
