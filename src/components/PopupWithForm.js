import React from 'react';
import Popup from './Popup';
import Form from './Form';

function PopupWithForm(props) {
  const { 
    id, 
    name, 
    title, 
    isOpen,
    submitTitle,
    onSubmit,
    onClose,
    inputs } = props;
  
  console.debug("Rendering Form Popup");

  return (
    <Popup
      id = {id}
      isOpen = {isOpen}
      onClose = {onClose}
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
        isOpen = {isOpen}
        submitTitle = {submitTitle}
        inputs = {inputs}
        onSubmit = {onSubmit}
      />
    </Popup>
  );
}

PopupWithForm.defaultProps = {
  submitTitle: 'Сохранить',
  inputs: [],
};

function propsAreEqual(props, nextProps) {
  return props.isOpen === nextProps.isOpen && props.isProcessing === nextProps.isProcessing;
}

export default React.memo(PopupWithForm, propsAreEqual);
