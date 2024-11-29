import React from "react";
import "../assets/styles/Projects.css";

const projects = [
  {
    name: "DublinBike Web App",
    description: "A location-based web app to explore Dublin bike stations.",
    image: `${process.env.PUBLIC_URL}/images/project1.jpg`,
    github: "https://github.com/PYevan/DublinBike-evan",
    stack: ["Python", "Flask", "JavaScript", "HTML", "CSS", "ML"],
    details: "https://drive.google.com/file/d/1Mk7dxCJF2uP5htWG0pmQUQLaUSSz15lb/view?usp=sharing",
  },
  {
    name: "Street Vendor App",
    description: "A React & Django app to locate street vendors.",
    image: `${process.env.PUBLIC_URL}/images/project2.png`,
    github:
      "https://dev.azure.com/COMP47360/Research%20Practicum/_git/ResearchPracticum",
    stack: ["React", "Django", "GIS", "PostgreSQL", "Azure Dev", "AWS"],
    details: "https://drive.google.com/file/d/1oxuWif785XXxTJyaWZ0r2rCK7bIjhVaq/view?usp=sharing",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            {/* Project Image */}
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>

            {/* Project Content */}
            <div className="project-content">
              <h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <p>{project.description}</p>

              {/* Technology Stack */}
              <div className="tech-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className={`tech-badge ${tech.toLowerCase()}`}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Details Button */}
              <a
                href={project.details}
                className="details-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
