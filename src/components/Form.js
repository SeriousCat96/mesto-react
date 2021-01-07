import React from 'react';
import Input from './Input';
import useFormValidation from '../hooks/useFormValidation';
import { formClass, submitClass, inactiveSubmitClass } from '../utils/constants';

function Form(props) {
  const {
    name,
    isActive,
    inputs,
    submitTitle,
    onSubmit,
  } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault(evt);
    onSubmit(values);
  }

  const {
    values,
    errors,
    isValid,
    handleChange
  } = useFormValidation(inputs, isActive);
  
  console.debug("rendering form");
  console.debug(submitTitle);
  
  return (
    <form
      name = {name}
      className = {formClass}
      onSubmit = {handleSubmit}
      noValidate
    >
      {inputs.map(
        (input) => (
          <Input 
            key = {input.id}
            id = {input.id}
            name = {input.name}
            type = {input.type}
            placeholder = {input.placeholder}
            minLength = {input.minLength}
            maxLength = {input.maxLength}
            value = {values[input.name] || ''}
            error = {errors[input.name]}
            isInvalid = {errors[input.name] !== undefined && errors[input.name] !== ''}
            onChange = {handleChange}
            required
          />
        )
      )}
      <button 
        type = "submit" 
        className = {`button ${submitClass}${!isValid ? ` ${inactiveSubmitClass}` : ''}`} 
        disabled = {!isValid}
      >
        {submitTitle}
      </button>
    </form>
  );
}

export default Form;