// Dependencies
import React from 'react';

// Style
import './Home.css'

const Home = () => {

  return (
    <section id="home-page" className="page">
      <main>
        <h1><strong>Développeur full-stack JavaScript</strong><br />passioné par l’<strong>UX</strong> et l'<strong>UI</strong> Design</h1>
        <p>Je vous aide à dévelloper vos applications web</p>
      </main>
      <div className="btn-container">
        <button type="button" className="call-to-action">Voir mes projets</button>
        <button type="button">Expériences professionnelles</button>
      </div>
    </section>
  )
};

export default Home;
