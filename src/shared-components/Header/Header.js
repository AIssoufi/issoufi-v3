// Dependencies
import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Styles
import './Header.css';

// Child components
import NavMenu from './NavMenu';
import BurgerMenu from './BurgerMenu';

const items = [
  { name: 'Projets', url: '/projects' },
  { name: 'Expériences', url: '/experiences' },
  { name: 'Compétences', url: '/skills' }
];

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="header-comp">
      <div className="logo"><Link to="/">AI</Link></div>
      <div className={`menu ${mobileMenuIsOpen ? 'is-stiky' : ''}`}>
        <NavMenu
          items={items}
          mobileMenuIsOpen={mobileMenuIsOpen}
          onClick={() => setMobileMenuIsOpen(false)}
        />
        <BurgerMenu
          isOpen={mobileMenuIsOpen}
          onOpen={() => setMobileMenuIsOpen(true)}
          onClose={() => setMobileMenuIsOpen(false)}
        />
      </div>
    </header>
  )
}

export default Header;
