import React from 'react';
import Popup from './Popup';
import Form from './Form';

function FormPopup(props) {
  const { 
    id, 
    name, 
    title, 
    isActive,
    isProcessing,
    submitTitle,
    processingTitle,
    onSubmit,
    onClose,
    inputs } = props;
  
  console.log("Rendering Form Popup");

  return (
    <Popup
      id = {id}
      isActive = {isActive}
      viewClass = "form-view"
    >
      <button 
        className = "button popup__close-button" 
        type="button"
        onClick = {onClose}
      />
      <h2 className="form-view__title">{title}</h2>
      <Form
        name = {name}
        submitTitle = {isProcessing ? processingTitle : submitTitle}
        inputs = {inputs}
        onSubmit = {onSubmit}
      />
    </Popup>
  );
}

FormPopup.defaultProps = {
  submitTitle: 'Сохранить',
  processingTitle: 'Сохранение...',
  inputs: [],
};

export default FormPopup;