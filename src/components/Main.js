import React from 'react';
import Profile from './Profile';
import Cards from './Cards';

function Main(props) {
  const { 
    onAddCardPopupOpen,
    onEditAvatarPopupOpen, 
    onEditProfilePopupOpen, 
    onRemoveCardPopupOpen,
    onImagePreviewPopupOpen,
    onCardLike,
    cards } = props;

  return (
    <main className = "content">
      <Profile
        onAddCardPopupOpen = {onAddCardPopupOpen}
        onEditAvatarPopupOpen = {onEditAvatarPopupOpen}
        onEditProfilePopupOpen = {onEditProfilePopupOpen}
      />
      <Cards
        items = {cards}
        onRemoveCardPopupOpen = {onRemoveCardPopupOpen}
        onImagePreviewPopupOpen = {onImagePreviewPopupOpen}
        onCardLike = {onCardLike}
      />
    </main>
  );
}

export default Main;