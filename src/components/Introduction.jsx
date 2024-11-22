import React, { Component } from "react";
import "../assets/styles/Introduction.css";

export default class Introduction extends Component {
  render() {
    return (
      <section id="introduction" className="intro-section">
        <div className="content">
          <h1>Hi, I'm Yuhang Lian</h1>
          <p>
            A passionate software developer specializing in full-stack
            development, cloud computing, and data analytics.
          </p>
          <a
            href="/Yuhang_CV.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </section>
    );
  }
}
