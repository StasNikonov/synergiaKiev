import './Header.scss'
import {Logo} from "../Logo/Logo.jsx";

export const Header = ({onHomeClick, onDetailsClick, onViewClick, onGalleryClick, onQuestionClick, onMapClick}) => {
  return (
    <header className="header">
      <Logo onClick={onHomeClick}/>
      <nav className="navigation">
        <a className="navElement" onClick={onDetailsClick}>Про комплекс</a>
        <a className="navElement" onClick={onGalleryClick}>Галерея</a>
        <a className="navElement" onClick={onViewClick}>Записатися на прийом</a>
        <a className="navElement" onClick={onMapClick}>Район</a>
        <a className="navElement" onClick={onQuestionClick}>Задати питання</a>
      </nav>
    </header>
  );
};
