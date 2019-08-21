import React from "react";

export const CustomInputComponent = ({
  field,
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <div className={touched[field.name] && errors[field.name] ? "form-group has-danger" : "form-group"}>
      <fieldset disabled="">
        <input
          {...field} {...props}
          className={touched[field.name] && errors[field.name] ? "form-control is-invalid" : "form-control"}
          disabled="" />
        {touched[field.name] && errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
      </fieldset>
    </div>
  );
};