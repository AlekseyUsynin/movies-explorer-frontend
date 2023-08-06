// компонент страницы изменения профиля.

import React, { useState, useContext, useEffect }  from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../utils/useFormValidation';
import Header from '../Header/Header';
import './Profile.css'

function Profile({ isLoggedIn, logOut, changeProfile, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormModified, setIsFormModified] = useState(false);
  const { values, errors, setErrors, isValid, setValue, setIsValid } = useFormValidation();
  const errorClassName = (name) => `profile__error ${errors[name] ? 'profile__error_visible' : ''}`

  useEffect(() => {
    setIsFormModified(
      (currentUser.name !== values.userName || currentUser.email !== values.userEmail) &&
      isValid
    );
  }, [values, currentUser, isValid]);

  useEffect(() => {
    if (currentUser) {
      setValue("userName", currentUser.name);
      setValue("userEmail", currentUser.email);

    }
    if (currentUser.name && currentUser.email) {
      setIsValid(true);
    }
  }, [currentUser, setValue, setIsValid]);

  function handleClick(e) {
    e.preventDefault();
    if (isEditing && isValid) {
      handleSubmit(e);
    } else {
      setIsEditing(!isEditing);
      if (!isEditing) {
        setValue("userName", currentUser.name);
        setValue("userEmail", currentUser.email);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    changeProfile({
      name: values['userName'],
      email: values['userEmail']
    });
    setIsEditing(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsFormModified(value !== currentUser[name]);
  }

  function handleLogout(e) {
    e.preventDefault();
    logOut();
  }

  return (
    <>
    <Header isLoggedIn={isLoggedIn}/>
      <main className="profile">
        <section className='profile__container'>
          <form className='profile__form' onSubmit={handleSubmit} noValidate>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            {isEditing ?
              <>
                <div className='profile__name-container'>
                  <input
                    className='profile__input'
                    id='inputName'
                    type='text'
                    name='userName'
                    placeholder='Введите имя'
                    minLength='2'
                    maxLength='40'
                    disabled={!isEditing}
                    onChange={(e) => { handleChange(e) }}
                    required
                    method="get"
                    value={values['userName'] ?? ''}
                  />
                  <span className={errorClassName('userName')} id="inputName-error">{errors['userName']}</span>
                </div>
                <div className='profile__email-container'>
                  <input
                    className='profile__input'
                    id='inputEmail'
                    type='email'
                    name='userEmail'
                    placeholder='Введите почту'
                    minLength='2'
                    maxLength='30'
                    disabled={!isEditing}
                    onChange={(e) => { handleChange(e) }}
                    value={values['userEmail'] ?? ''}
                    required
                  />
                  <span className={errorClassName('userEmail')} id="inputEmail-error">{errors['userEmail']}</span>
                </div>
              </>
            :
              <>
                <div className='profile__name-container'>
                  <p className='profile__description'>Имя</p>
                  <p className='profile__value'>{values['userName'] ?? ''}</p>
                </div>
                <div className='profile__email-container'>
                  <p className='profile__description'>E-mail</p>
                  <p className='profile__value'>{values['userEmail'] ?? ''}</p>
                </div>
              </>
            }
            {isEditing ?
              <button
                className={`profile__edit-button ${isFormModified && isValid ? '' : "profile__button_not-editing"}`}
                type="submit"
                disabled={!isFormModified || !isValid}
                >Сохранить</button>
            :
              <button
                className='profile__edit-button'
                type="button"
                onClick={handleClick}
              >Редактировать</button>
            }
          </form>

          <button
            className='profile__exit'
            type="submit"
            onClick={handleLogout}
          >Выйти из аккаунта</button>
        </section>
      </main>
    </>
  )
};

export default Profile;
