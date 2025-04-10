import "./GalleryScreen.scss"
import {GalleryElement} from "./components/GalleryElement/GalleryElement.jsx";
import apartmentImage from '../../assets/apartmentImage.png'

export const GalleryScreen = ({innerRef}) => {
  return (
    <div ref={innerRef} className="section">
      <div className="galleryScreen">
        <h1 className="galleryTitle">Наші квартири</h1>
        <div className="galleryImages">
          <div className="imagesRow1">
            <GalleryElement image={apartmentImage} description="Лофт - 3 поверхи"/>
            <GalleryElement image={apartmentImage} description="Лофт - 2 поверхи"/>
          </div>
          <div className="imagesRow1">
            <GalleryElement image={apartmentImage} description="Лофт - 3 поверхи"/>
            <GalleryElement image={apartmentImage} description="Лофт - 2 поверхи"/>
          </div>
        </div>
      </div>
    </div>
  );
};