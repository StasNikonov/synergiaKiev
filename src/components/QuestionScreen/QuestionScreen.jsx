import React from 'react';
import {Form} from "../Form/Form.jsx";
import './QuestionScreen.scss'

export const QuestionScreen = ({innerRef}) => {
  return (
    <div ref={innerRef} className="sectionQuestionScreen">
      <div className="questionScreen">
        <h1 className="questionScreenTitle">Є питання?</h1>
        <div className="questionForm">
          <Form children="Задати питання"/>
        </div>
      </div>
    </div>
  );
};