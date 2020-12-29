import React from 'react';

export default function useFormValidation(formClass) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt
      .target
      .closest(`.${formClass}`)
      .checkValidity());    
  }

  const handeResetValidation = React.useCallback(
    (values = {}, errors = {}, isValid = false) => {
      console.warn("reset validation");
      setValues(values);
      setErrors(errors);
      setIsValid(isValid);
    },
    [setValues, setErrors, setIsValid]);
  
  return {
    values,
    errors,
    isValid,
    handleChange,
    handeResetValidation
  }
}