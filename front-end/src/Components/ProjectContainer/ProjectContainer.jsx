import React from "react";
import { Link } from "react-router-dom";

const ProjectContainer = ({ title, description, image, link, codeLink }) => {
  return (
    <div className="projectsContainer">
      <Link to={link} className="projectLink">
        <div className="projectText">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={image} alt={title} className="projectImage" />
      </Link>
      {codeLink && (
        <a
          href={codeLink}
          className="view-code-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code
        </a>
      )}
    </div>
  );
};

export default ProjectContainer;
