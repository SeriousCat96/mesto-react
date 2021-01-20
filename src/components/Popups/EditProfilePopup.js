import React from 'react';
import PopupWithForm from '../PopupWithForm';

function EditProfilePopup(props) {
  const { isOpen, onClose } = props;
  const inputs =  [
    {
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Имя',
      minLength: 2,
      maxLength: 40,
      required: true,
    },
    {
      id: 'about',
      name: 'about',
      type: 'text',
      placeholder: 'О себе',
      minLength: 2,
      maxLength: 200,
      required: true,
    }
  ];

  console.debug("render edit profile popup");
  
  return (
    <PopupWithForm
      id = "edit-profile"
      name = "profile"
      title = "Редактировать профиль"
      isOpen = {isOpen}
      inputs = {inputs}
      onClose = {onClose}
    />
  );
}

export default EditProfilePopup;