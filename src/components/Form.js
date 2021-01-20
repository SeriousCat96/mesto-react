import React from 'react';
import Input from './Input';
import { formClass, submitClass } from '../utils/constants';

function Form(props) {
  const {
    name,
    inputs,
    submitTitle,
  } = props;

  return (
    <form
      name = {name}
      className = {formClass}
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
            required
          />
        )
      )}
      <button 
        type = "submit" 
        className = {`button ${submitClass}`}
      >
        {submitTitle}
      </button>
    </form>
  );
}

export default Form;