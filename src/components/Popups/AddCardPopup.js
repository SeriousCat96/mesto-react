import React from 'react';
import FormPopup from '../FormPopup';

function AddCardpopup(props) {
  const { isActive, isProcessing, onCardAdding, onClose } = props;
  
  const inputs = React.useMemo(() => [
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
  ], []);

  console.debug("render add card popup");
  
  return (
    <FormPopup
      id = "add-card"
      name = "card"
      title = "Новое место"
      isActive = {isActive}
      isProcessing = {isProcessing}
      inputs = {inputs}
      onSubmit = {onCardAdding}
      onClose = {onClose}
    />
  );
}

export default AddCardpopup;