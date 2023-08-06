// компонент, который отрисовывает шапку сайта на страницу.

import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import './Header.css';


function Header({ isMain, isLoggedIn }) {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  function handleOpen() {
    setIsClick(true);
  }

  function handleClose() {
    setIsClick(false);
  }

  return (
    <header className={`header ${isMain ? 'header_blue' : ''}`}>
      <div className='header__head'>
        <Link to='/' className='header__logo'></Link>
          {!isLoggedIn ?
              <div className='header__auth-container'>
                <button className='header__register' type='button' onClick={() => handleButtonClick('/signup')}>Регистрация</button>
                <button className='header__login' type='button' onClick={() => handleButtonClick('/signin')}>Войти</button>
              </div>
            :
            <>
              <div className='header__links'>
                <NavLink to='/movies' className={({ isActive }) => (
                  `header__link ${isActive ? "header__link_active" : ""}`
                  )}>Фильмы</NavLink>
                <NavLink to='/saved-movies' className={({ isActive }) => (
                  `header__link ${isActive ? "header__link_active" : ""}`
                  )}>Сохранённые фильмы</NavLink>
              </div>
              <Link to='/profile'  className='header__profile'>
                <span className='header__account'>Аккаунт</span>
                <div className='header__icon'></div>
              </Link>
              <button className={`header__menu-button ${isMain && 'header__menu-button_blue'}`} onClick={handleOpen} type='button'></button>
            </>
          }
      </div>
      {isClick && <Navigation
        isLoggedIn={isLoggedIn}
        isClosed={handleClose}
      />}
    </header>
  )
}

export default Header;
