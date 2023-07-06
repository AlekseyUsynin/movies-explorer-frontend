// компонент страницы изменения профиля.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
import Header from '../Header/Header'

function Profile() {
  const [isClick, setIsClick] = useState(false)

  function handleClick () {
    setIsClick(!isClick)
  }

  return (
    <div className="profile">
      <Header />
      <div className='profile__container'>
        <form className='profile__form'>
          <h2 className='profile__title'>Привет, Алексей!</h2>
          {isClick ? 
            <>
              <div className='profile__name-container'>
                <input className='profile__input' type='text' name='name' placeholder='Введите имя'/>
              </div>
              <div className='profile__email-container'>
                <input className='profile__input' type='email' name='email' placeholder='Введите почту'/>
              </div>
            </>
          : 
            <>
              <div className='profile__name-container'>
                <p className='profile__description'>Имя</p>
                <p className='profile__value'>Алексей</p>
              </div>
              <div className='profile__email-container'>
                <p className='profile__description'>E-mail</p>
                <p className='profile__value'>pochta@yandex.ru</p>
              </div>
            </>
          }
        </form>
        {isClick ? 
          <button className='profile__edit-button' onClick={handleClick}>Сохранить</button>
        : 
          <button className='profile__edit-button' onClick={handleClick}>Редактировать</button>
        }
        <Link to='/' className='profile__exit'>Выйти из аккаунта</Link>
      </div>
    </div>
  )
};

export default Profile;
