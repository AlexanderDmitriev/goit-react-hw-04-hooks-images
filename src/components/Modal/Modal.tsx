import React, { useEffect } from 'react';
//import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { IModal } from '../../interfaces';

//Делаем портал для рендера модалки
const modalRoot = document.querySelector('#modal');

const Modal = ({
  onClose,
  currentImageUrl,
  currentImageDescription,
}: IModal) => {
  const handleEsc = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  //Вешаем/снимаем слушатель событий при нажатии клавиши Escape
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  const handleBackDrop = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.8)] z-1200"
      onClick={handleBackDrop}
    >
      {' '}
      {/* ModalOverlay */}
      <div className='max-w-[calc(100vw-48px)] max-h-[calc(100vh-24px)]'>  {/* ModalContent */}
        <img src={currentImageUrl} alt={currentImageDescription} />
      </div>
    </div>,
    modalRoot
  );
};

/* ModalContent.propTypes={
  img:PropTypes.string,
  alt:PropTypes.string,
}; */

export default Modal;
