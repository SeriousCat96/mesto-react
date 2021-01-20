import React from 'react';
import Profile from './Profile';
import Cards from './Cards';

function Main(props) {
  const { 
    userName,
    userDescription,
    userAvatar,
    onAddPlacePopupOpen,
    onEditAvatarPopupOpen, 
    onEditProfilePopupOpen, 
    onCardClick,
    cards } = props;

  return (
    <main className = "content">
      <Profile
        userName = {userName}
        userDescription = {userDescription}
        userAvatar = {userAvatar}
        onAddPlacePopupOpen = {onAddPlacePopupOpen}
        onEditAvatarPopupOpen = {onEditAvatarPopupOpen}
        onEditProfilePopupOpen = {onEditProfilePopupOpen}
      />
      <Cards
        items = {cards}
        onCardClick = {onCardClick}
      />
    </main>
  );
}

export default Main;