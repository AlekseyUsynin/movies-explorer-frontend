// компонент страницы изменения профиля.

import React, { useState } from 'react';
import './Profile.css'
import Header from '../Header/Header'

function Profile() {
  const [isClick, setIsClick] = useState(false)

  function handleClick () {
    setIsClick(!isClick)
  }

  return (
    <>
    <Header />
      <main className="profile">
        <section className='profile__container'>
          <form className='profile__form'>
            <h1 className='profile__title'>Привет, Алексей!</h1>
            {isClick ? 
              <>
                <div className='profile__name-container'>
                  <input className='profile__input' type='text' name='name' placeholder='Введите имя' minLength='2' maxLength='30'/>
                </div>
                <div className='profile__email-container'>
                  <input className='profile__input' type='email' name='email' placeholder='Введите почту' minLength='2' maxLength='30'/>
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
            {isClick ? 
              <button className='profile__edit-button' onClick={handleClick} type="submit">Сохранить</button>
            : 
              <button className='profile__edit-button' onClick={handleClick} type="button">Редактировать</button>
            }
          </form>

          <button className='profile__exit' type="button">Выйти из аккаунта</button>
        </section>
      </main>
    </>
  )
};

export default Profile;
