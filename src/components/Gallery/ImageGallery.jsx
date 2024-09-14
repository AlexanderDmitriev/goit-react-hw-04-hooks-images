//import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { ImageGalleryItem } from './ImageGalleryItem';

const ImageGallery = ({ imagesForGallery, buttonHandler, openModal }) => {

  return (
    <>
      <ul className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(320px,1fr))] max-w-[calc(100vw-48px)] p-0 list-none mx-auto my-0'>
        {imagesForGallery.map(image => (
          <ImageGalleryItem
            key={image.id}
            img={image.webformatURL}
            imgBig={image.largeImageURL}
            openModal={()=>{openModal(image.largeImageURL,image.tags)}}
          />
        ))}
      </ul>
      <Button onClick={buttonHandler} />
    </>
  );
};

ImageGalleryItem.propTypes={
  img:PropTypes.string,
  imgBig:PropTypes.string,
};

/* const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${props => props.theme.spacing(4)};
  margin: 0 auto;
  padding: 0;
  list-style: none;
`; */

export default ImageGallery;
