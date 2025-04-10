import React from 'react';
import './Logo.scss'

export const Logo = ({onClick}) => {
  return (
    <div className="logo" onClick={onClick}>
      <h1 className="logoTitleText">Синергія Київ</h1>
      <h2 className="logoText">Житловий комплекс</h2>
    </div>
  );
};