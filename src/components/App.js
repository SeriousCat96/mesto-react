import React from 'react';
import Page from './Page';
import AddPlacePopup from './Popups/AddPlacePopup';
import EditAvatarPopup from './Popups/EditAvatarPopup';
import EditProfilePopup from './Popups/EditProfilePopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';

function App() {
  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);

  const [cards, setCards] = React.useState([]);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isImagePreviewPopupOpen, setIsImagePreviewPopupOpen] = React.useState(false);

  React.useEffect(
    () => {
      const handleEscKeyPressed = (evt) => {
        evt.preventDefault();
    
        if (evt.key === 'Escape') {
          handleCloseAllPopups();
        }
      };

      document.addEventListener('keyup', handleEscKeyPressed);

      return () => document.removeEventListener('keyup', handleEscKeyPressed);
    },
    []
  );

  React.useEffect(() => {
    console.debug("load initial data");
    Promise.all([fetchUserInfo(), fetchCards()])
      .then(
        (data) => {
          const [userInfo, cards] = data;
          setUserName(userInfo.name);
          setUserDescription(userInfo.about)
          setUserAvatar(userInfo.avatar);
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

  const handleAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setIsImagePreviewPopupOpen(true);
    setSelectedCard(card);
  };

  const handleCloseAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePreviewPopupOpen(false);

    setSelectedCard({});
  };

  console.debug("rendering app");
  return (
    <>
      <Page
        userName = {userName}
        userDescription = {userDescription}
        userAvatar = {userAvatar}
        onAddPlacePopupOpen = {handleAddPlace}
        onEditAvatarPopupOpen = {handleEditAvatar}
        onEditProfilePopupOpen = {handleEditProfile}
        onCardClick = {handleCardClick}
        cards = {cards}
      />
      <AddPlacePopup
        isOpen = {isAddPlacePopupOpen}
        onClose = {handleCloseAllPopups}
      />
      <EditAvatarPopup
        isOpen = {isEditAvatarPopupOpen}
        onClose = {handleCloseAllPopups}
      />
      <EditProfilePopup
        isOpen = {isEditProfilePopupOpen}
        onClose = {handleCloseAllPopups}
      />
      <ImagePopup
        isOpen = {isImagePreviewPopupOpen}
        selectedCard = {selectedCard}
        onClose = {handleCloseAllPopups}
      />
    </>
  );
}

export default App;
