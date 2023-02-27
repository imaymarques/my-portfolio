import React, { Component } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/Socials.css";

const socialNetworks = [
  { name: "linkedin", link: "https://www.linkedin.com/in/mayaramarquescosta/", icon: <FaLinkedinIn /> },
  { name: "github", link: "https://github.com/imaymarques", icon: <FaGithub /> },
  { name: "instagram", link: "https://www.instagram.com/maymarquesdev/", icon: <FaInstagram /> },
]

class Socials extends Component {
  render() {
    return (
      <section className="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
    )
  }
}

export default Socials;