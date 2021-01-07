import React from 'react';
import Card from './Card';

function Cards(props) {
  const { items, onRemoveCardPopupOpen, onImagePreviewPopupOpen, onCardLike } = props;
  
  return (
    <section className="cards-grid page__section page__section_indent-size_m">
      <ul className="list cards-grid__items">
        {items.map(item => (
        <li key={item._id}>
          <Card 
            item = {item} 
            onRemoveButtonClick = {onRemoveCardPopupOpen}
            onCardClick = {onImagePreviewPopupOpen}
            onCardLike = {onCardLike}
          />
        </li>
      ))}
      </ul>
    </section>
  );
}

export default Cards;
