import React, { useEffect, useState } from "react";
import "../assets/styles/Sidebar.css";
import Carousel from "./Carousel";
import { QRCodeCanvas } from "qrcode.react";
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

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isCollapsed ? faBars : faTimes} />
      </button>
      <div id="sidebar-container" className={isCollapsed ? "hidden" : "visible"}>
        <aside id="sidebar">
          {/* Profile Carousel */}
          <div className="profile">
            <Carousel />
            <h1>Lian Yuhang</h1>
            <p className="email">
              <FontAwesomeIcon icon={faEnvelope} /> evan.ucd@gmail.com
            </p>
            <p className="location">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Dublin, Ireland
            </p>
          </div>


          {/* Developer Status */}
          <div className="status-section">
            <a
              href="https://leetcode.com/submissions/#/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My LeetCode Progress
            </a>
          </div>

          {/* Social Links */}
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

          {/* QR Code Section */}
          <div className="qr-section">
            <h3>Contact Me</h3>
            <QRCodeCanvas value="mailto:evan.ucd@gmail.com" size={150} />
            <p>Scan to email me!</p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
