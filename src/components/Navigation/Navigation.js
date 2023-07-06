// компонент, который отвечает за меню навигации на сайте.

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isMain, isMobile, isClosed }) {
  return (
    <>
      {!isMain &&
        <>
          <div className='overlay'></div>
          <div className='navigation'>
            <button className='navigation__close navigation_open' onClick={isClosed}></button>
            <div className='navigation-container-movies'>
              <h2 className='navigation__title'>Главная</h2>
              <NavLink to='/movies' className={({ isActive }) => (
                `navigation__movies ${isActive ? "movies_active" : ""}`
              )}>Фильмы</NavLink>
              <NavLink to='/saved-movies' className={({ isActive }) => (
                `navigation__movies ${isActive ? "movies_active" : ""}`
              )}>Сохранённые фильмы</NavLink>
            </div> 
            <Link to='/profile'  className='navigation__profile'>
              <span className='navigation__account'>Аккаунт</span>
              <div className='navigation__icon'></div>
            </Link> 
          </div>
        </>
      }
    </>
  )
}

export default Navigation;
