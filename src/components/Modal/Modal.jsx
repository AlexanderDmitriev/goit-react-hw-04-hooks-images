import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { currentImageUrl, currentImageDescription } = this.props;
    return createPortal(
      <ModalOverlay onClick={this.handleBackDrop}>
        <ModalContent>
          <img src={currentImageUrl} alt={currentImageDescription} />
        </ModalContent>
      </ModalOverlay>,
      modalRoot
    );
  }
}

export default Modal;
