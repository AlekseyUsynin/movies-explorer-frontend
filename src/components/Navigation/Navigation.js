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
            <button className='navigation__close' onClick={isClosed} type='button'></button>
            <div className='navigation__links'>
              <Link to='/' className='navigation__title'>Главная</Link>
              <NavLink to='/movies' className={({ isActive }) => (
                `navigation__link ${isActive ? "link_active" : ""}`
              )}>Фильмы</NavLink>
              <NavLink to='/saved-movies' className={({ isActive }) => (
                `navigation__link ${isActive ? "link_active" : ""}`
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
