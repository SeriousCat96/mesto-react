import React from 'react';
import Profile from './Profile';
import Cards from './Cards';

function Main(props) {
  const { onAddCardPopupOpen } = props;

  return (
    <main className = "content">
      <Profile
        onAddCardPopupOpen = {onAddCardPopupOpen}
      />
      <Cards
        items = {props.cards}
      />
    </main>
  );
}

export default Main;