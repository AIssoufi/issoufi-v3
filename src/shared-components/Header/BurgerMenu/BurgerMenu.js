// Dependencies
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-web';

// Styles
import './BurgerMenu.css';

// JSON
import burgerMenuData from './burger-menu.json';


const BurgerMenu = ({ isOpen, onOpen, onClose }) => {
  const menuBurgerEl = useRef(null);
  const [lottieInstance, setLottieInstance] = useState(null);

  useEffect(() => {
    if (menuBurgerEl.current) {
      setLottieInstance(Lottie.loadAnimation({
        container: menuBurgerEl.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: burgerMenuData
      }));

      return () => {
        if (lottieInstance) {
          lottieInstance.destroy();
        }
      }
    }
  }, [menuBurgerEl]);

  useEffect(() => {
    if (lottieInstance) {
      if (isOpen) {
        lottieInstance.setSpeed(1.5);
        lottieInstance.setDirection(1);
      } else {
        lottieInstance.setSpeed(4);
        lottieInstance.setDirection(-1);
      }
      lottieInstance.play();
    }
  }, [isOpen]);

  const handleBurgerMenuClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <div
      className={`burger-menu-comp ${isOpen ? 'is-open' : ''}`}
      ref={menuBurgerEl}
      onClick={handleBurgerMenuClick}
    />
  )
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BurgerMenu;
