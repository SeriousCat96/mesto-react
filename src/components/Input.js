import React from 'react';
import PropTypes from 'prop-types';
import { inputClass, labelClass } from '../utils/constants';

function Input(props) {
  const {
    id,
    name,
    type,
    minLength,
    maxLength,
    placeholder,
    value,
    required,
  } = props;
  
  console.debug("render input");

  return (
    <label className = {labelClass} htmlFor = {id}>
      <input
        className = {`${inputClass}`}
        id = {id}
        name = {name}
        type = {type}
        minLength = {minLength}
        maxLength = {maxLength}
        placeholder = {placeholder}
        value = {value}
        required = {required}
      />
    </label>
  );
}

Input.defaultProps = {
  type: 'text',
  value: '',
  required: true,
  autoComplete: 'off',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
};

export default Input;