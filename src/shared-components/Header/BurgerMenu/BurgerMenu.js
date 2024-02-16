import Lottie from "lottie-web";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

import "./BurgerMenu.css";

import burgerMenuData from "./burger-menu.json";

const BurgerMenu = ({ isOpen, onOpen, onClose }) => {
  const menuBurgerEl = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const lottieInstance = Lottie.loadAnimation({
      container: menuBurgerEl.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: burgerMenuData,
    });

    lottieRef.current = lottieInstance;

    return () => {
      lottieInstance?.destroy?.();
    };
  }, []);

  const handleBurgerMenuClick = () => {
    const lottieInstance = lottieRef.current;
    if (isOpen) {
      onClose();
      lottieInstance.setSpeed(4);
      lottieInstance.setDirection(-1);
    } else {
      onOpen();
      lottieInstance.setSpeed(1.5);
      lottieInstance.setDirection(1);
    }
    lottieInstance.play();
  };

  return (
    <div
      className={`burger-menu-comp ${isOpen ? "is-open" : ""}`}
      ref={menuBurgerEl}
      onClick={handleBurgerMenuClick}
    />
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BurgerMenu;
