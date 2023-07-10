// компонент, который отрисовывает шапку сайта на страницу.

import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';


function Header({ isMain }) {

  const [isClick, setIsClick] = useState(false);

  function handleOpen() {
    setIsClick(true);
  }

  function handleClose() {
    setIsClick(false);
  }

  function onRegister() {
    window.location.assign('http://localhost:3000/signup');
  }

  function onLogin() {
    window.location.assign('http://localhost:3000/signin');
  }

  return (
    <header className={`header ${isMain ? 'header_blue' : ''}`}>
      <div className='header__head'>
        <Link to='/' className='header__logo'></Link>
          {isMain ?
              <div className='header__auth-container'>
                <button className='header__register' type='button' onClick={onRegister}>Регистрация</button>
                <button className='header__login' type='button' onClick={onLogin}>Войти</button>
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
              <button className='header__menu-button' onClick={handleOpen} type='button'></button>
            </>
          }
      </div>
      {isClick && <Navigation
        isMain={isMain}
        isClosed={handleClose}
      />}
    </header>
  )
}

export default Header;
