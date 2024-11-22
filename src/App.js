import React, { Component } from "react";
import "./assets/styles/App.css";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Sidebar />
        <div id="main-content">
          <Introduction />
          <About />
          <Projects />
          <Timeline />
        </div>
      </div>
    );
  }
}

export default App;
