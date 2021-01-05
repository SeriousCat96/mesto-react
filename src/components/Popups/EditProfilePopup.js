import React from 'react';
import FormPopup from '../FormPopup';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const { isActive, isProcessing, onProfileEdit, onClose } = props;
  const { name, about } = React.useContext(CurrentUserContext);
  const inputs = React.useMemo(() => [
    {
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Имя',
      minLength: 2,
      maxLength: 30,
      value: name,
      required: true,
    },
    {
      id: 'about',
      name: 'about',
      type: 'text',
      placeholder: 'О себе',
      minLength: 2,
      maxLength: 30,
      value: about,
      required: true,
    }
  ], [about, name]);

  console.log("render edit profile popup");
  
  return (
    <FormPopup
      id = "edit-profile"
      name = "profile"
      title = "Редактировать профиль"
      isProcessing = {isProcessing}
      isActive = {isActive}
      inputs = {inputs}
      onSubmit = {onProfileEdit}
      onClose = {onClose}
    >
    </FormPopup>
  );
}

export default EditProfilePopup;