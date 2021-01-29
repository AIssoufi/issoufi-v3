// Dependencies
import React from 'react';
import {
  NavLink, Link
} from "react-router-dom";

// Styles
import './Header.css';

// SVG
import { ReactComponent as DownloadIcon } from './icons/download.svg'

const Header = () => {

  const links = [
    { name: 'Projets', url: '/projects' },
    { name: 'Expériences', url: '/experiences' },
    { name: 'Compétences', url: '/skills' }
  ];

  return (
    <header className="header-comp">
      <div className="logo"><Link to="/">AI</Link></div>
      <nav className="nav-menu">
        <ul>{links.map(item => (
            <li
              key={item.url}
              className="nav-item"
            ><NavLink to={item.url}>{item.name}</NavLink></li>
          ))}
          <button className="cta-btn"><DownloadIcon className="icon"/><span className="text">CV</span></button>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
