// компонент страницы регистрации.

import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
  return (
    <div className="auth">
      <div className='auth__container'>
        <Link to='/' className='auth__logo'></Link>
        <h2 className='auth__title'>Добро пожаловать!</h2>

        <form className='auth__form'>
          <label className='auth__label'>Имя</label>
          <input className='auth__input' type="text" name='login'/>

          <label className='auth__label'>E-mail</label>
          <input className='auth__input' type="email" name='email'/>

          <label className='auth__label'>Пароль</label>
          <input className='auth__input' type="password" name='password' minlength="8" />
          <span className='auth__error'>Что-то пошло не так...</span>
        </form>

        <Link to='/signin' className='auth__submit-button register_margin'>Зарегистрироваться</Link>
        <div className='auth__auth'>
          <span className='auth__question'>Уже зарегистрированы?</span>
          <Link to='/signin' className='auth__link-auth'>Войти</Link>
        </div>
      </div>
    </div>
  )
};

export default Register;
