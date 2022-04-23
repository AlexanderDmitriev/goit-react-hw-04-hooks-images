import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

const Modal = ({ onClose, currentImageUrl, currentImageDescription }) => {
  const handleEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleBackDrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleBackDrop}>
      <ModalContent>
        <img src={currentImageUrl} alt={currentImageDescription} />
      </ModalContent>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
