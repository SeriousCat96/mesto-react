import React from 'react';
import FormPopup from '../FormPopup';

function AddCardpopup(props) {
  const { isActive, onCardAdding, onClose } = props;
  
  console.log("render add card popup");
  
  return (
    <FormPopup
      id = "add-card"
      name = "card"
      title = "Новое место"
      submitTitle = "Создать"
      isActive = {isActive}
      inputs = {[
        {
            id: 'card-name',
            name: 'name',
            type: 'text',
            placeholder: 'Название',
            minLength: 2,
            maxLength: 30,
            required: true,
        },
        {
            id: 'card-link',
            name: 'link',
            type: 'url',
            placeholder: 'Ссылка на картинку',
            required: true,
        }
      ]}
      onSubmit = {onCardAdding}
      onClose = {onClose}
    >
    </FormPopup>
  );
}

export default AddCardpopup;