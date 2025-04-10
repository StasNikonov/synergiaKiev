import React from 'react';
import {Form} from '../Form/Form.jsx';
import './ViewScreen.scss'

export const ViewScreen = ({innerRef}) => {
  return (
    <div ref={innerRef} className="sectionViewScreen">
      <div className="viewScreen">
        <div className="viewDescription">
          <h1 className="viewTitle">Хочете подивитися?</h1>
          <p className="viewText">
            Ваше життя у Синергія Київ завжди буде безпечним та безтурботним,
            <br/>адже ми гарантуємо високий рівень якості будівництва для своїх мешканців.
          </p>
        </div>
        <Form children="Переглянути район"/>
      </div>
    </div>
  );
};