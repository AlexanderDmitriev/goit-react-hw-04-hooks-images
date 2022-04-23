import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img, imgBig, openModal }) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={img}
        alt="oops"
        data-large={imgBig}
        onClick={openModal}
      />
    </GalleryItem>
  );
};
