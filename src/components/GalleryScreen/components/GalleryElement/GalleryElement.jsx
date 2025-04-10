import React from 'react';
import './GalleryElement.scss'

export const GalleryElement = ({image, description}) => {
  return (
    <div className="imageOverlayWrapper">
      <img className="galleryImage" src={image} alt=""/>
      <p className="overlayText">{description}</p>
    </div>
  );
};