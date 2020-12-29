import React from 'react';
import Page from './Page';
import AddCardpopup from './Popups/AddCardPopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';

function App(props) {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [isAddCardPopupActive, setIsAddCardPopupActive] = React.useState(false);

  React.useEffect(() => {
    console.log("load initial data");
    Promise.all([fetchUserInfo(), fetchCards()])
      .then(
        (data) => {
          const [userInfo, cards] = data;
          setCurrentUser(userInfo);
          setCards(cards);
        })
      .catch((err) => console.error(err));
  }, []);
  
  function fetchCards() {
    return api
      .getCards()
      .then((items) => Promise.resolve(items))
      .catch(() => Promise.reject("Failed to fetch cards."));
  }

  function fetchUserInfo() {
    return api
      .getUserInfo()
      .then((userInfo) => Promise.resolve(userInfo))
      .catch(() => Promise.reject("Failed to set user info."));
  }

  function handleEditAvatar(avatar) {
    api
      .setAvatar(avatar)
      .then(
        (userInfo) => setCurrentUser(userInfo),
        (err) => console.log(err))
      .catch(() => console.error("Failed to edit avatar."));
  }

  function handleAddCardPopupOpen() {
    setIsAddCardPopupActive(true);
  }

  function handleCloseAllPopups() {
    setIsAddCardPopupActive(false);
  }

  function handleAddCardSubmit(values) {
    api
      .addCard(values)
      .then(
        (newCard) => setCards([newCard, ...cards]),
        (err) => console.log(err))
      .catch(() => console.error("Failed to add card."));
  }

  console.log("rendering app");
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Page
        onAddCardPopupOpen = {handleAddCardPopupOpen}
        cards = {cards}
      />
      <AddCardpopup
        isActive = {isAddCardPopupActive}
        onClose = {handleCloseAllPopups}
        onCardAdding = {handleAddCardSubmit}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
