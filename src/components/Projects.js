import React from "react";
import "./Projects.css";
import hakkani from "../images/Capture.PNG";
import Project from "./Project";
const arr = [
  {
    id: 1,
    Name: "Hakkani",
    Description: "this project is a manufacturer management system",
    Image: hakkani,
    Live: "https://hakkani-113a3.web.app/",
    ClientRip: "https://github.com/ismail-hossen/hakkani-client",
    ServerRip: "https://github.com/ismail-hossen/hakkani-server",
  },
  {
    id: 2,
    Name: "Hakkani",
    Description: "this project is a manufacturer management system",
    Image: hakkani,
    Live: "https://hakkani-113a3.web.app/",
    ClientRip: "https://github.com/ismail-hossen/hakkani-client",
    ServerRip: "https://github.com/ismail-hossen/hakkani-server",
  },
  {
    id: 3,
    Name: "Hakkani",
    Description: "this project is a manufacturer management system",
    Image: hakkani,
    Live: "https://hakkani-113a3.web.app/",
    ClientRip: "https://github.com/ismail-hossen/hakkani-client",
    ServerRip: "https://github.com/ismail-hossen/hakkani-server",
  },
  {
    id: 4,
    Name: "Hakkani",
    Description: "this project is a manufacturer management system",
    Image: hakkani,
    Live: "https://hakkani-113a3.web.app/",
    ClientRip: "https://github.com/ismail-hossen/hakkani-client",
    ServerRip: "https://github.com/ismail-hossen/hakkani-server",
  },
  {
    id: 5,
    Name: "Hakkani",
    Description: "this project is a manufacturer management system",
    Image: hakkani,
    Live: "https://hakkani-113a3.web.app/",
    ClientRip: "https://github.com/ismail-hossen/hakkani-client",
    ServerRip: "https://github.com/ismail-hossen/hakkani-server",
  },
  {
    id: 6,
    Name: "Hakkani",
    Description: "this project is a manufacturer management system",
    Image: hakkani,
    Live: "https://hakkani-113a3.web.app/",
    ClientRip: "https://github.com/ismail-hossen/hakkani-client",
    ServerRip: "https://github.com/ismail-hossen/hakkani-server",
  },
];
const Projects = () => {
  return (
    <section>
      <h1>Check out my latest web software development portfolio projects.</h1>
      <div className="projects-area">
        {arr.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
