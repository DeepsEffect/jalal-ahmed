"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="h-screen">
      <h2 className="text-4xl font-bold text-center">My Projects</h2>
      {/* projects showcase */}
      <section className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </div>
  );
};

export default Projects;
