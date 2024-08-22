import React from "react";
import "./LanguageExperience.css";
import { FaHtml5, FaCss3Alt, FaPython, FaJava, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const TechStackGrid = () => {
  const techStack = [
    {
      name: "HTML",
      logo: <FaHtml5 />,
      description:
        "Proficient in HTML, able to build semantic and accessible web pages.",
    },
    {
      name: "CSS",
      logo: <FaCss3Alt />,
      description:
        "Skilled in CSS, can create responsive and visually appealing designs.",
    },
    {
      name: "JavaScript",
      logo: <RiJavascriptFill />,
      description:
        "Experienced in JavaScript, adept at building dynamic and interactive web applications.",
    },
    {
      name: "React",
      logo: <FaReact />,
      description:
        "Proficient in React, can develop complex single-page applications with state management and component-based architecture.",
    },
    {
      name: "Java",
      logo: <FaJava />,
      description:
        "Knowledgeable in Java, able to build robust server-side applications and APIs.",
    },
    {
      name: "Python",
      logo: <FaPython />,
      description:
        "Skilled in Python, can create efficient and scalable data-driven applications.",
    },
  ];

  return (
    <div className="tech-stack-grid">
      {techStack.map((tech, index) => (
        <div key={index} className="tech-item" title={tech.description}>
          <div className="tech-logo">{tech.logo}</div>
          <p className="tech-name">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStackGrid;
