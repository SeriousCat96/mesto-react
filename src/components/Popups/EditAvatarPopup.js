import React from 'react';
import PopupWithForm from '../PopupWithForm';

function EditAvatarPopup(props) {
  const { isOpen, onClose } = props;
  
  console.debug("render add card popup");
  
  return (
    <PopupWithForm
      id = "edit-avatar"
      name = "avatar"
      title = "Обновить аватар"
      isOpen = {isOpen}
      inputs = {[
        {
            id: 'avatar-link',
            name: 'avatar',
            type: 'url',
            placeholder: 'Ссылка на картинку',
            required: true,
        }
      ]}
      onClose = {onClose}
    />
  );
}

export default EditAvatarPopup;