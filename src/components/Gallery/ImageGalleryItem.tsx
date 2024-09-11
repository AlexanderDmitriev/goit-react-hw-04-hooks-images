import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { IImage } from '../../interfaces';

export const ImageGalleryItem: React.FC<IImage> = ({
  img,
  imgBig,
  openModal,
}) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={img}
        alt="oops"
        data-large={imgBig}
        onClick={openModal}
        className="hover:cursor-zoom-in hover:scale-105"
      />
    </GalleryItem>
  );
};
