// компонент, который отрисовывает шапку сайта на страницу.

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <div className="header">
      <div className='header__head'>
        <div className='header__logo'></div>
        <div className='header__auth-container'>
          <Link to='/signup' className='header__register'>Регистрация</Link>
          <Link to='/signin' className='header__login'>Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
