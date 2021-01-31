// Dependencies
import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

// Styles
import './NavMenu.css';

// SVG
import { ReactComponent as DownloadIcon } from './icons/download.svg';

const NavMenu = ({ items, onClick, mobileMenuIsOpen }) => {
  return (
    <nav className={`nav-menu-comp ${mobileMenuIsOpen ? 'mobile-menu-is-open' : ''}`}>
      <ul>{items.map(item => (
          <li
            key={item.url}
            className="nav-item"
          ><NavLink
            to={item.url}
            onClick={onClick}
            activeClassName="active"
          >{item.name}</NavLink></li>
        ))}
      </ul>
      <button className="cta-btn" onClick={onClick}><DownloadIcon className="icon"/><span className="text">CV</span></button>
    </nav>
  )
};

NavMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  })).isRequired,
  mobileMenuIsOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

NavMenu.defaultProps = {
  mobileMenuIsOpen: false
}

export default NavMenu;
