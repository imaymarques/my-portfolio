import React, { Component } from "react";
import Avatar from '../img/mayara.jpg';
import Informations from "./Informations";
import Socials from "./Socials";
import "../styles/components/Sidebar.css";
import Curriculum from "../curriculum/mayara.pdf";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <aside>
          <img src={Avatar} alt="Mayara Marques" />
          <p className="title">Desenvolvedora Web</p>
          <Socials />
          <Informations />
          <a href={Curriculum} className="btn">Download Currículo</a>
        </aside>
  </div>
    )
  }
}

export default Sidebar;