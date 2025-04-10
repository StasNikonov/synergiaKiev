import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import './Form.scss'

export const Form = ({children}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      telephone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required'),
      telephone: Yup.string()
        .matches(/^(\+380|0)\d{9}$/, 'Invalid phone number')
        .required('Telephone is required'),
    }),
    onSubmit: (values) => {
      alert(`${values.name}, ми скоро з вами зв'яжемось!`);
    }
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="formInputs">
        <div className="formName">
          <input
            type="text"
            name="name"
            placeholder="Ваше ім'я"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div style={{color: "red"}}>{formik.errors.name}</div>
          )}
        </div>
        <div className="formTelephone">
          <input
            type="text"
            name="telephone"
            placeholder="Ваш телефон"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.telephone}
          />
          {formik.errors.telephone && formik.touched.telephone && (
            <div style={{color: "red"}}>{formik.errors.telephone}</div>
          )}
        </div>
      </div>

      <div className="formSubmitButton">
        <p className="toast">*Ми нікому не передеєамо ваші дані.
          <br/>
          І не зберігаємо номер в базу
        </p>
        <button className="submitButton" type="submit">{children}</button>
      </div>
    </form>
  );
};
