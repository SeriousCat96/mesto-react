import React from 'react';
import FormPopup from '../FormPopup';

function EditAvatarPopup(props) {
  const { isActive, isProcessing, onCardAdding, onClose } = props;
  
  console.log("render add card popup");
  
  return (
    <FormPopup
      id = "edit-avatar"
      name = "avatar"
      title = "Обновить аватар"
      isProcessing = {isProcessing}
      isActive = {isActive}
      inputs = {[
        {
            id: 'avatar-link',
            name: 'avatar',
            type: 'url',
            placeholder: 'Ссылка на картинку',
            required: true,
        }
      ]}
      onSubmit = {onCardAdding}
      onClose = {onClose}
    />
  );
}

export default EditAvatarPopup;