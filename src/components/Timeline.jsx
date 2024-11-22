import React, { Component } from "react";
import "../assets/styles/Timeline.css";

export default class Timeline extends Component {
  render() {
    return (
      <section id="timeline" className="timeline-section">
        <h2>Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>2022-2023: Front-End Intern at NIO</h3>
            <p>
              Developed a CI/CD project dashboard using Vue and Ant Design Vue,
              improving team efficiency.
            </p>
          </div>
          <div className="timeline-item">
            <h3>2023-Present: Master’s at UCD</h3>
            <p>
              Focused on cloud computing and software engineering, with hands-on
              experience in microservices.
            </p>
          </div>
          <div className="timeline-item">
            <h3>2018-2022: Undergraduate at JSU</h3>
            <p>Marketing.</p>
          </div>
        </div>
      </section>
    );
  }
}
