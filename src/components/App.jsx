import React, { Component } from 'react';
import Searchbar from './SearchungBar';
import ImageGallery from './Gallery';
import * as API from '../servicies/api';
import { Container } from './App.styled';
import GlobalStyle from '../GlobalStyle';
import { Spinner } from './App.styled';
import Modal from './Modal';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    keyWord: '',
    loading: false,
    images: [],
    page: 1,
    showModal: false,
    currentImageUrl: null,
    currentImageDescription: null,
  };

  handleSearch = values => {
    this.setState({ loading: true, keyWord: values, page: 1 });
    API.getImages(values, 1).then(response => {
      this.setState({ loading: false, images: response.data.hits });
    });
  };

  loadMoreHandler = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.setState({ loading: true });
    API.getImages(this.state.keyWord, this.state.page + 1).then(response =>
      this.setState(prevState => ({
        loading: false,
        images: [...prevState.images, ...response.data.hits],
      }))
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  //Метод для открытия модалки
  openModal = (img) => {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
        currentImageUrl: img
      }));
    
  };

  

  render() {
    const {
      images,
      loading,
      showModal,
      currentImageUrl,
      currentImageDescription,
    } = this.state;


    return (
      <>
        <GlobalStyle />
        <Container>
          <Searchbar onSubmit={this.handleSearch} />
          {images.length > 0 && (
            <ImageGallery
              imagesForGallery={images}
              buttonHandler={this.loadMoreHandler}
              openModal={this.openModal}
            />
          )}
          {loading && (
            <Spinner size={125} thickness={100} speed={100} color="#3f51b5" />
          )}
          {showModal && (
            <Modal
              onClose={this.toggleModal}
              currentImageUrl={currentImageUrl}
              currentImageDescription={currentImageDescription}
            />
          )}
        </Container>
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
