import React from 'react';
import Profile from './Profile';
import Cards from './Cards';

function Main(props) {
  const { onAddCardPopupOpen, onEditAvatarPopupOpen, onEditProfilePopupOpen, cards } = props;

  return (
    <main className = "content">
      <Profile
        onAddCardPopupOpen = {onAddCardPopupOpen}
        onEditAvatarPopupOpen = {onEditAvatarPopupOpen}
        onEditProfilePopupOpen = {onEditProfilePopupOpen}
      />
      <Cards
        items = {cards}
      />
    </main>
  );
}

export default Main;