import { Link } from "react-router-dom";

import "./Home.css";

export const Home = () => {
  return (
    <section id="home-page" className="page">
      <main>
        <h1>
          <strong>Développeur full-stack JavaScript</strong>
          <br />
          passioné par l’<strong>UX</strong> et l'<strong>UI</strong> Design
        </h1>
        <p>Je vous aide à dévelloper vos applications web</p>
      </main>
      <div className="btn-container">
        <Link to="/projects" className="btn call-to-action">
          Voir mes projets
        </Link>
        <Link to="/experiences" className="btn">
          Expériences professionnelles
        </Link>
      </div>
    </section>
  );
};
