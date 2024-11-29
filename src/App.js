import React, { useState } from "react";
import "./assets/styles/App.css";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebar = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  const mainContentStyle = {
    marginLeft: isSidebarCollapsed ? "0px" : "250px",
    transition: "margin 0.3s ease",
  };

  return (
    <div id="app-container">
      <Sidebar onToggle={handleToggleSidebar} />
      <div id="main-content" style={mainContentStyle}>
        <Introduction />
        <About />
        <Projects />
        <Timeline />
      </div>
    </div>
  );
};

export default App;
