import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const { item, onRemoveButtonClick, onCardLike } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwned = item.owner._id === currentUser._id;
  const isUserLiked = item.likes.some((like) => like._id === currentUser._id);

  const animateLike = (evt) => evt.target.classList.remove('scaling');

  return (
    <article key = {item.id} className = "card">
      {
        isOwned && 
        <button 
          className = "button card__remove-button" 
          type = "button"
          onClick = {onRemoveButtonClick.bind(undefined, item)}
        />
      }
      <img className = "card__image" src={item.link} alt={`Изображение карточки ${item.name}`} />
      <h2 className = "card__caption text-ellipsis">{item.name}</h2>
      <div className = "card__like">
        <button 
          className = {`button scaling card__like-button${isUserLiked ? ' card__like-button_checked' : ''}`}
          type = "button"
          onClick = {onCardLike.bind(undefined, item)}
          onAnimationEnd = {animateLike}
        />
        <span className = "card__like-count">{item.likes.length}</span>
      </div>
    </article>
  );
}

export default Card;
