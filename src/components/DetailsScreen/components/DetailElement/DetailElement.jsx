import React from 'react';
import "./DetailElement.scss"

export const DetailElement = ({image, description}) => {
  return (
    <div className="detailElement">
      <img className="detailElementImage" src={image} alt=""/>
      <p className="detailElementText">{description}</p>
    </div>
  );
};