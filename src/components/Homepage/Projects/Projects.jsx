"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../../data/projects.json";

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-4xl font-bold text-center mt-20">My Projects</h2>
      {/* projects showcase */}
      <section className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
