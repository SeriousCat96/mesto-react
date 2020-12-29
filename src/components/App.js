import React from 'react';
import Page from './Page';
import AddCardpopup from './Popups/AddCardPopup';
import EditAvatarPopup from './Popups/EditAvatarPopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [isAddCardPopupActive, setIsAddCardPopupActive] = React.useState(false);
  const [isEditAvatarPopupActive, setIsEditAvatarPopupActive] = React.useState(false);

  const [isAddCardProcessing, setAddCardProcessing] = React.useState(false);
  const [isEditAvatarProcessing, setEditAvatarProcessing] = React.useState(false);

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
  
  const fetchCards = () => {
    return api
      .getCards()
      .then((items) => Promise.resolve(items))
      .catch(() => Promise.reject("Failed to fetch cards."));
  }

  const fetchUserInfo = () => {
    return api
      .getUserInfo()
      .then((userInfo) => Promise.resolve(userInfo))
      .catch(() => Promise.reject("Failed to set user info."));
  };

  const handleAddCardPopupOpen = () => {
    setIsAddCardPopupActive(true);
  };

  const handleEditAvatarPopupOpen = () => {
    setIsEditAvatarPopupActive(true);
  };

  const handleCloseAllPopups = () => {
    setIsAddCardPopupActive(false);
    setIsEditAvatarPopupActive(false);
  };

  const handleAddCardSubmit = (values) => {
    setAddCardProcessing(true);

    api
      .addCard(values)
      .then(
        (newCard) => {
          setCards([newCard, ...cards]);
          handleCloseAllPopups();
        },
        (err) => console.log(err))
      .catch(() => console.error("Failed to add card."))
      .finally(() => setAddCardProcessing(false));
  };

  const handleEditAvatarSubmit = (avatar) => {
    setEditAvatarProcessing(true);

    api
      .setAvatar(avatar)
      .then(
        (userInfo) => {
          setCurrentUser(userInfo);
          handleCloseAllPopups();
        },
        (err) => console.log(err))
      .catch(() => console.error("Failed to edit avatar."))
      .finally(() => setEditAvatarProcessing(false));  
  };

  console.log("rendering app");
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Page
        onAddCardPopupOpen = {handleAddCardPopupOpen}
        onEditAvatarPopupOpen = {handleEditAvatarPopupOpen}
        cards = {cards}
      />
      <AddCardpopup
        isActive = {isAddCardPopupActive}
        isProcessing = {isAddCardProcessing}
        onClose = {handleCloseAllPopups}
        onCardAdding = {handleAddCardSubmit}
      />
      <EditAvatarPopup
        isActive = {isEditAvatarPopupActive}
        isProcessing = {isEditAvatarProcessing}
        onClose = {handleCloseAllPopups}
        onCardAdding = {handleEditAvatarSubmit}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
