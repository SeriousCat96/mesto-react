import React from 'react';
import FormPopup from '../FormPopup';

function RemoveCardPopup(props) {
  const { isActive, isProcessing, onCardRemove, onClose } = props;
  
  console.log("render remove card popup");
  
  return (
    <FormPopup
      id = "remove-card"
      name = "removeCard"
      title = "Вы уверены?"
      isProcessing = {isProcessing}
      isActive = {isActive}
      onSubmit = {onCardRemove}
      onClose = {onClose}
    />
  );
}

export default RemoveCardPopup;