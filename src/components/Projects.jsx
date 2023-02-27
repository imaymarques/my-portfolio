import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section className="projects-container">
        <h2>Projetos</h2>
        <p>
          Durante o meu tempo estudando na Trybe, pude desenvolver diversos projetos Front-End e Back-End e pude aperfeiçoar meu conhecimentos técnicos, além de projetos em grupo onde pude também desenvolver habilidades de soft-skills como trabalho em equipe.
        </p>
        <a href="https://github.com/imaymarques?tab=repositories" className="btn">
          Ver Projetos
        </a>
      </section>
    )
  }
}

export default Projects;