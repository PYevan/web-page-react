import React, { useState } from "react";
import "../assets/styles/Sidebar.css";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div id="sidebar-container" className={isCollapsed ? "collapsed" : ""}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? (
          <FontAwesomeIcon icon={faBars} title="Expand Sidebar" />
        ) : (
          <FontAwesomeIcon icon={faTimes} title="Collapse Sidebar" />
        )}
      </button>
      <aside id="sidebar">
        <div className="profile">
          <div
            className="profile-picture"
            style={{ backgroundImage: "url(/images/about.jpg)" }}
          />
          <h1>Lian Yuhang</h1>
          <p className="email">
            <FontAwesomeIcon icon={faEnvelope} /> evan.ucd@gmail.com
          </p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Dublin, Ireland
          </p>
        </div>
        <nav className="social-links">
          <ul>
            <li>
              <a
                href="https://github.com/PYevan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yuhang594a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yuhang-lian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
          </ul>
        </nav>
        <nav className="page-links">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">My Projects</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
          </ul>
        </nav>
        <Carousel />
      </aside>
    </div>
  );
};

export default Sidebar;
