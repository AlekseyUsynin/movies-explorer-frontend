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

  return (
    <header className={`header ${isMain ? 'header_blue' : ''}`}>
      <div className='header__head'>
        <Link to='/' className='header__logo'></Link>
          {isMain ?
              <div className='header__auth-container'>
                <Link to='/signup' className='navigation__register'>Регистрация</Link>
                <Link to='/signin' className='navigation__login'>Войти</Link>
              </div> 
            :
            <>
              <div className='header-container-movies'>
                <NavLink to='/movies' className={({ isActive }) => (
                  `navigation__link ${isActive ? "movies_active" : ""}`
                  )}>Фильмы</NavLink>
                <NavLink to='/saved-movies' className={({ isActive }) => (
                  `navigation__link ${isActive ? "movies_active" : ""}`
                  )}>Сохранённые фильмы</NavLink>
              </div> 
              <Link to='/profile'  className='header__profile'>
                <span className='navigation__account'>Аккаунт</span>
                <div className='navigation__icon'></div>
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
