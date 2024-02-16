import { Project } from "../shared-components";

import "./Projects.css";

import freelanceProjectsData from "./data/freelance-projects.json";
import personnalProjectsData from "./data/personnal-projects.json";

const Projects = () => {
  return (
    <section id="projects-page" className="page">
      <Project
        title="Projets personnels"
        projects={personnalProjectsData.projects}
      />
      <Project
        title="Projets freelance"
        projects={freelanceProjectsData.projects}
      />
    </section>
  );
};

export default Projects;
