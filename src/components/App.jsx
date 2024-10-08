import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './SearchungBar';
import ImageGallery from './Gallery';
import * as API from '../servicies/api';
import GlobalStyle from '../GlobalStyle';
import Modal from './Modal';
import { ToastContainer } from 'react-toastify';
import { SpinnerRoundFilled } from 'spinners-react';

export const App = () => {
  const [keyWord, setKeyWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [currentImageDescription, setCurrentImageDescription] = useState(null);

  const handleSearch = values => {
    setLoading(true);
    setImages([]);
    setKeyWord(values);
    setPage(1);
  };

  useEffect(() => {
    if (keyWord === '') return; //Не вызываем при первом рендере
    API.getImages(keyWord, page).then(response => {
      setLoading(false);
      if (response != null) {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } else {
        return;
      }
    });
  }, [keyWord, page]);

  const loadMoreHandler = () => {
    setPage(prevPage => prevPage + 1);

    //this.setState({ loading: true });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  //Метод для открытия модалки
  const openModal = (img, description) => {
    setShowModal(!showModal);
    setCurrentImageUrl(img);
    setCurrentImageDescription(description);
  };

  return (
    <>
      <GlobalStyle />
      <div className='grid gap-4 grid-cols-[1fr] pb-6 '>  
        <Searchbar onSubmit={handleSearch} />
        {images.length > 0 && (
          <ImageGallery
            imagesForGallery={images}
            buttonHandler={loadMoreHandler}
            openModal={openModal}
          />
        )}
        {loading && (
          <SpinnerRoundFilled className='mx-auto my-0' size={125} thickness={100} speed={100} color="#3f51b5" />
        )}
        {showModal && (
          <Modal
            onClose={toggleModal}
            currentImageUrl={currentImageUrl}
            currentImageDescription={currentImageDescription}
          />
        )}
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
};

ImageGallery.propTypes = {
  imagesForGallery: PropTypes.array,
};

Modal.propTypes = {
  currentImageUrl: PropTypes.string,
  currentImageDescription: PropTypes.string,
};
