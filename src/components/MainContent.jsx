import React, { Component } from "react";
import Technologies from "./Technologies";
import Projects from "./Projects";
import About from "./About";
import "../styles/components/MainContent.css";

class MainContent extends Component {
  render() {
    return (
      <main className='main-content'>
      <About />
      <Technologies />
      <Projects />
    </main>
    )
  }
}

export default MainContent;