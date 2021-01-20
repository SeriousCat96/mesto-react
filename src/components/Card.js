import React from 'react';

function Card(props) {
  const { item, onCardClick } = props;  

  return (
    <article className = "card">
      <button 
          className = "button card__remove-button" 
          type = "button"
      />
      <img 
        className = "card__image" 
        src = {item.link} 
        alt = {`Изображение карточки ${item.name}`}
        onClick = {onCardClick.bind(undefined, item)} 
      />
      <h2 className = "card__caption text-ellipsis">{item.name}</h2>
      <div 
        className = "card__like"
      >
        <button 
          className = {`button scaling card__like-button`}
          type = "button"
        />
        <span className = "card__like-count">{item.likes.length}</span>
      </div>
    </article>
  );
}

export default Card;
