"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../../data/projects.json";

const Projects = () => {
  return (
    <div id="projects" className="mt-10 lg:mt-20 px-4">
      <h2 className="text-4xl font-bold text-center text-primaryText uppercase mb-10">
        My Projects
      </h2>
      {/* projects showcase */}
      <section className="lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
