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
      <a
        target="_blank"
        className="cta-btn"
        onClick={onClick}
        href="https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/CV%20-%20Adam%20Issoufi.pdf?alt=media&token=f8a8ba99-9228-40c4-aaa1-77954c8b815a"
      ><DownloadIcon className="icon"/><span className="text">CV</span>
      </a>
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
