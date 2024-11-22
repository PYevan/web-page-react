import React, { Component } from "react";
import "../assets/styles/Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <img src="/images/project1.jpg" alt="Project 1" />
            <h3>DublinBike App</h3>
            <p>
              A web app to visualize bike availability in Dublin using Flask and
              JavaScript.
            </p>
          </div>
          <div className="project-item">
            <img src="/images/project2.png" alt="Project 2" />
            <h3>Street Vendors App</h3>
            <p>
              Helps vendors find locations with the highest foot traffic using
              React and Django.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
