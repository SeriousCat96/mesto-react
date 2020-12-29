import React from 'react';
import PropTypes from 'prop-types';
import { inputClass, labelClass, errorClass, inputErrorClass, errorActiveClass } from '../utils/constants';

class Input extends React.PureComponent {
  render() {
    const {
      id,
      name,
      type,
      error,
      minLength,
      maxLength,
      placeholder,
      value,
      isInvalid,
      required,
      onChange,
    } = this.props;
    
    console.log("render input");
  
    return (
      <label className = {labelClass} htmlFor = {id}>
        <input
          className = {`${inputClass} ${isInvalid ? ` ${inputErrorClass}` : ''}`}
          id = {id}
          name = {name}
          type = {type}
          minLength = {minLength}
          maxLength = {maxLength}
          placeholder = {placeholder}
          value = {value}
          onChange = {onChange}
          required = {required}
        />
        {isInvalid && 
          <span 
            className = {`${errorClass}${isInvalid ? ` ${errorActiveClass}` : ''}`}
            id = {`${id}-error`}
          >
            {error}
          </span>
        }
      </label>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  value: '',
  error: '',
  required: true,
  autoComplete: 'off',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  error: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;