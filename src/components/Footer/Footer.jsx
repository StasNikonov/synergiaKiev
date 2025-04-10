import React from 'react';
import {Logo} from "../Logo/Logo.jsx";
import './Footer.scss'

export const Footer = ({onHomeClick, onDetailsClick, onViewClick, onGalleryClick, onQuestionClick, onMapClick}) => {
  return (
    <footer className="footer">
      <Logo onClick={onHomeClick}/>
      <nav className="footerNavigation">
        <a className="navElement" onClick={onDetailsClick}>Про комплекс</a>
        <a className="navElement" onClick={onGalleryClick}>Галерея</a>
        <a className="navElement" onClick={onViewClick}>Записатися на прийом</a>
        <a className="navElement" onClick={onMapClick}>Район</a>
        <a className="navElement" onClick={onQuestionClick}>Задати питання</a>
      </nav>
      <ol className="footerInformation">
        <li className="infElement">Адреса: Івана Кочерги, 17a, Київ</li>
        <li className="infElement">Номер телефону: +38 (099) 999-99-99</li>
        <li className="infElement">Відділ продажів: 8:30-20:00</li>
        <li className="infElement">E-mail: <p className='email'>synergiaKiev@gmail.com</p></li>
      </ol>
    </footer>
  );
};