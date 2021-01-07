import React from 'react';
import Page from './Page';
import AddCardpopup from './Popups/AddCardPopup';
import EditAvatarPopup from './Popups/EditAvatarPopup';
import EditProfilePopup from './Popups/EditProfilePopup';
import RemoveCardPopup from './Popups/RemoveCardPopup';
import ImagePreviewPopup from './ImagePreviewPopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [cardToRemove, setCardToRemove] = React.useState({});
  const [selectedCard, setSelectedCard] = React.useState({});

  const [isAddCardPopupActive, setIsAddCardPopupActive] = React.useState(false);
  const [isEditAvatarPopupActive, setIsEditAvatarPopupActive] = React.useState(false);
  const [isEditProfilePopupActive, setIsEditProfilePopupActive] = React.useState(false);
  const [isRemoveCardPopupActive, setIsRemoveCardPopupActive] = React.useState(false);
  const [isImagePreviewPopupActive, setIsImagePreviewPopupActive] = React.useState(false);

  const [isAddCardProcessing, setAddCardProcessing] = React.useState(false);
  const [isEditAvatarProcessing, setEditAvatarProcessing] = React.useState(false);
  const [isEditProfileProcessing, setEditProfileProcessing] = React.useState(false);
  const [isRemoveCardProcessing, setRemoveCardProcessing] = React.useState(false);

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

  const handleCardLike = (card) => {
    const isLiked = card.isUserLiked;
    const setLike = isLiked ? api.unlike : api.like;

    setLike
      .call(api, card._id)
      .then(
        (newCard) => {
          setCards(c => c.map((item) => item._id === card._id ? newCard : item));
        }
      )
      .catch((err) => console.error(err));
  };

  const handleAddCardPopupOpen = () => {
    setIsAddCardPopupActive(true);
  };

  const handleEditAvatarPopupOpen = () => {
    setIsEditAvatarPopupActive(true);
  };

  const handleEditProfilePopupOpen = () => {
    setIsEditProfilePopupActive(true);
  };

  const handleRemoveCardPopupOpen = (cardToRemove) => {
    setIsRemoveCardPopupActive(true);
    setCardToRemove(cardToRemove);
  };

  const handleImagePreviewPopupOpen = (card) => {
    setIsImagePreviewPopupActive(true);
    setSelectedCard(card);
  };

  const handleCloseAllPopups = () => {
    setIsAddCardPopupActive(false);
    setIsEditAvatarPopupActive(false);
    setIsEditProfilePopupActive(false);
    setIsRemoveCardPopupActive(false);
    setIsImagePreviewPopupActive(false);

    setCardToRemove({});
    setSelectedCard({});
  };

  const handleAddCardSubmit = (values) => {
    setAddCardProcessing(true);

    api
      .addCard(values)
      .then(
        (newCard) => {
          setCards(c => [newCard, ...c]);
          handleCloseAllPopups();
        })
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
        })
      .catch(() => console.error("Failed to edit avatar."))
      .finally(() => setEditAvatarProcessing(false));  
  };

  const handleEditProfileSubmit = (userInfo) => {
    setEditProfileProcessing(true);

    api
      .setUserInfo(userInfo)
      .then(
        (userInfo) => {
          setCurrentUser(userInfo);
          handleCloseAllPopups();
        })
      .catch(() => console.error("Failed to edit profile."))
      .finally(() => setEditProfileProcessing(false));  
  };

  const handleRemoveCardSubmit = () => {
    if(cardToRemove) {
      setRemoveCardProcessing(true);

      api
        .deleteCard(cardToRemove._id)
        .then(
          () => {
            setCards(c => c.filter((item) => item._id !== cardToRemove._id));
            handleCloseAllPopups();
          })
        .catch(() => console.error("Failed to remove card."))
        .finally(() => setRemoveCardProcessing(false));  
    }
  };

  console.debug("rendering app");
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Page
        onAddCardPopupOpen = {handleAddCardPopupOpen}
        onEditAvatarPopupOpen = {handleEditAvatarPopupOpen}
        onEditProfilePopupOpen = {handleEditProfilePopupOpen}
        onRemoveCardPopupOpen = {handleRemoveCardPopupOpen}
        onImagePreviewPopupOpen = {handleImagePreviewPopupOpen}
        onCardLike = {handleCardLike}
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
      <EditProfilePopup
        isActive = {isEditProfilePopupActive}
        isProcessing = {isEditProfileProcessing}
        onClose = {handleCloseAllPopups}
        onProfileEdit = {handleEditProfileSubmit}
      />
      <RemoveCardPopup
        isActive = {isRemoveCardPopupActive}
        isProcessing = {isRemoveCardProcessing}
        onClose = {handleCloseAllPopups}
        onCardRemove = {handleRemoveCardSubmit}
      />
      <ImagePreviewPopup
        isActive = {isImagePreviewPopupActive}
        selectedCard = {selectedCard}
        onClose = {handleCloseAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
