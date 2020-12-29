import React from 'react';
import Input from './Input';
import { formClass, submitClass, inactiveSubmitClass } from '../utils/constants';
import useFormValidation from '../hooks/useFormValidation';

function Form(props) {
  const { 
    name,
    inputs,
    submitTitle,
    isActive,
    onSubmit,
    onClose,
  } = props;

  const {
    values,
    errors,
    isValid,
    handleChange,
    handeResetValidation,
  } = useFormValidation(formClass);
  
  const handleSubmit = (evt) => {
    evt.preventDefault(evt);
    onSubmit(values);
    onClose();
  }
  
  const defaultValues = {};
  Object.assign(defaultValues, ...inputs.map((i) => {
    return {[i.name] : i.value};
  }));
  const [defaults] = React.useState(defaultValues)

  React.useEffect(() => {
    return () => handeResetValidation(defaults);
  }, [isActive, defaults, handeResetValidation]);

  const Submit = React.useMemo(
    () => (
      <button 
        type = "submit" 
        className = {`button ${submitClass}${!isValid ? ` ${inactiveSubmitClass}` : ''}`} 
        disabled = {!isValid}
      >
        {submitTitle}
      </button>
    ),
    [isValid, submitTitle]
  );

  console.log("rendering form");
  
  return (
    <form
      name = {name}
      className = {formClass}
      onSubmit = {handleSubmit}
      noValidate>
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
      {Submit}
    </form>
  );
}

export default Form;