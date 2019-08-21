import React from "react";
export const inputField = ({
  field, form: {
    touched,
    errors
  },
  ...props }) => {

  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <>
      <input {...field} {...props} />
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
    </>
  );
};