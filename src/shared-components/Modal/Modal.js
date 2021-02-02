// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Style
import './Modal.css';

const Modal = ({ displayModal, onClose }) => {
  if (!displayModal) return null;
  return ReactDOM.createPortal(
    <div
      className="modal-comp"
    >
      <div className="container">
        <header>
          <button onClick={onClose}>&times;</button>
        </header>
        <main>
          <p>Ce site est en développement et n'est pas encore optimisé pour les utilisateurs mobile !</p>
          <button
            type="button"
            onClick={onClose}
          >J'ai compris</button>
        </main>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default Modal;
