import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Profile(props) {
  const { avatar, name, about } = React.useContext(CurrentUserContext);
  const { onAddCardPopupOpen } = props;

  const Avatar = React.useMemo(
    () => (
      <div className = "profile__avatar">
        <button className = "button profile__button profile__button_type_edit-image" type = "button" />
        <img className = "profile__image" src = {avatar} alt = "Аватар" />
      </div>
    ),
    [avatar]
  );
  
  const ProfileInfo = React.useMemo(
    () => (
      <div className = "profile__info">
        <h1 className = "profile__title text-ellipsis">{name}</h1>
        <p className = "profile__subtitle text-ellipsis">{about}</p>
        <button 
          className = "button profile__button profile__button_type_edit" 
          type = "button"
        />
      </div>
    ),
    [name, about]
  );

  return (
    <section className = "profile page__section page__section_indent-size_m">
      {Avatar}
      {ProfileInfo}
      <button 
        className = "button profile__button profile__button_type_add" 
        type = "button"
        onClick = {onAddCardPopupOpen}
      />
    </section>
  );
}

export default Profile;