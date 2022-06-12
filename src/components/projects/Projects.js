import React from "react";
import "./Projects.css";
import Project from "./Project";
import data from "../../data/projects";

const Projects = () => {
  return (
    <section>
      <h1>Check out my latest web software development portfolio projects.</h1>
      <div className="projects-area">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
