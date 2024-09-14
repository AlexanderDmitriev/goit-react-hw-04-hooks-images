import { IImage } from '../../interfaces';

export const ImageGalleryItem: React.FC<IImage> = ({
  img,
  imgBig,
  openModal,
}) => {
  return (
    <li className="shadow-md">
      {' '}
      {/* GalleryItem */}
      <img /* GalleryImage */
        src={img}
        alt="oops"
        data-large={imgBig}
        onClick={openModal}
        className="hover:cursor-zoom-in hover:scale-105 
                  rounded w-full h-64 object-cover 
                  transition-transform"
      />
    </li>
  );
};
