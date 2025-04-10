import './App.css'
import 'leaflet/dist/leaflet.css';
import {Header} from "./components/Header/Header.jsx";
import {HomeScreen} from "./components/HomeScreen/HomeScreen.jsx";
import {DetailsScreen} from "./components/DetailsScreen/DetailsScreen.jsx";
import {GalleryScreen} from "./components/GalleryScreen/GalleryScreen.jsx";
import {ViewScreen} from "./components/ViewScreen/ViewScreen.jsx";
import {MapComponent} from "./components/MapComponent/MapComponent.jsx";
import {QuestionScreen} from "./components/QuestionScreen/QuestionScreen.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {useRef} from "react";

function App() {
  const homeRef = useRef(null)
  const detailsRef = useRef(null);
  const viewRef = useRef(null);
  const galleryRef = useRef(null);
  const questionRef = useRef(null);
  const mapRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        onHomeClick={() => scrollToSection(homeRef)}
        onDetailsClick={() => scrollToSection(detailsRef)}
        onViewClick={() => scrollToSection(viewRef)}
        onGalleryClick={() => scrollToSection(galleryRef)}
        onQuestionClick={() => scrollToSection(questionRef)}
        onMapClick={() => scrollToSection(mapRef)}
      />
      <HomeScreen innerRef={homeRef}/>
      <DetailsScreen innerRef={detailsRef}/>
      <GalleryScreen innerRef={galleryRef}/>
      <ViewScreen innerRef={viewRef}/>
      <MapComponent innerRef={mapRef}/>
      <QuestionScreen innerRef={questionRef}/>
      <Footer
        onHomeClick={() => scrollToSection(homeRef)}
        onDetailsClick={() => scrollToSection(detailsRef)}
        onViewClick={() => scrollToSection(viewRef)}
        onGalleryClick={() => scrollToSection(galleryRef)}
        onQuestionClick={() => scrollToSection(questionRef)}
        onMapClick={() => scrollToSection(mapRef)}
      />
    </>
  )
}

export default App
