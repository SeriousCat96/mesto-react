import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const { item, onRemoveButtonClick } = props;
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <article key = {item.id} className = "card">
      {
        item.owner._id === currentUser._id && 
        <button 
          className = "button card__remove-button" 
          type = "button"
          onClick = {onRemoveButtonClick.bind(undefined, item)}
        />
      }
      <img className = "card__image" src={item.link} alt={`Изображение карточки ${item.name}`} />
      <h2 className = "card__caption text-ellipsis">{item.name}</h2>
      <div className = "card__like">
        <button className = "button card__like-button" type="button"></button>
        <span className = "card__like-count">{item.likes.length}</span>
      </div>
    </article>
  );
}

export default Card;
