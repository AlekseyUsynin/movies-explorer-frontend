// компонент страницы авторизации.

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <div className="auth">
      <div className='auth__container'>
        <Link to='/' className='auth__logo'></Link>
        <h2 className='auth__title'>Рады видеть!</h2>

        <form className='auth__form'>

          <label className='auth__label'>E-mail</label>
          <input className='auth__input' type="email" name='email'/>

          <label className='auth__label'>Пароль</label>
          <input className='auth__input' type="password" name='password' minlength="8" />
          <span className='auth__error'>Что-то пошло не так...</span>
        </form>

        <Link to='/profile' className='auth__submit-button login_margin'>Войти</Link>
        <div className='auth__auth'>
          <span className='auth__question'>Ещё не зарегистрированы?</span>
          <Link to='/signup' className='auth__link-auth'>Регистрация</Link>
        </div>
      </div>
    </div>
  )
};

export default Login;
