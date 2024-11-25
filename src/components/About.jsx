import React, { Component } from "react";
import "../assets/styles/About.css";

export default class About extends Component {
  render() {
    return (
      <section id="about" className="about-section">
        <div className="background-icons">
          <i className="fab fa-python"></i>
          <i className="fab fa-java"></i>
          <i className="fab fa-react"></i>
          <i className="fab fa-docker"></i>
          <i className="fab fa-aws"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-node-js"></i>
        </div>
        <h2>My Skills</h2>
        <p className="intro">
          I transitioned from marketing to computer science, driven by a passion
          for innovation and technology. My skills include full-stack
          development, cloud computing, and data analytics.
        </p>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fab fa-python"></i>
            <h3>Backend Development</h3>
            <p>Python, Java, SQL, PostgreSQL, MySQL</p>
          </div>
          <div className="skill-card">
            <i className="fab fa-react"></i>
            <h3>Frontend Development</h3>
            <p>JavaScript (React), HTML, CSS, UI/UX</p>
          </div>
          <div className="skill-card">
            <i className="fab fa-aws"></i>
            <h3>Cloud & Infrastructure</h3>
            <p>
              AWS (EC2, RDS), Azure, Docker, Kubernetes, CI/CD Pipelines
            </p>
          </div>
          <div className="skill-card">
            <i className="fab fa-github"></i>
            <h3>DevOps & Tools</h3>
            <p>Git, GitHub, Agile (Scrum), IDEs</p>
          </div>
        </div>
      </section>
    );
  }
}
