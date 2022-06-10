import React from "react";

const Project = ({ project }) => {
  const { Name, Description, Image } = project;
  return (
    <div
      className="p-img-area"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div>
        <h1>{Name}</h1>
        <p>
          {Description.length <= 50
            ? Description
            : Description.slice(0, 50) + "..."}
        </p>
        <a href="/#">more ...</a>
      </div>
    </div>
  );
};

export default Project;
