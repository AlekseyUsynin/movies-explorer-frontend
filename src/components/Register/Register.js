// компонент страницы регистрации.

import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
  return (
    <main className="auth">
      <section className='auth__container'>
        <Link to='/' className='auth__logo'></Link>
        <h1 className='auth__title'>Добро пожаловать!</h1>

        <form className='auth__form'>
          <label className='auth__label'>Имя</label>
          <input className='auth__input' type="text" name='login' minLength='2' maxLength='30' placeholder='Введите логин' required/>

          <label className='auth__label'>E-mail</label>
          <input className='auth__input' type="email" name='email' minLength='2' maxLength='30' placeholder='Введите почту' required/>

          <label className='auth__label'>Пароль</label>
          <input className='auth__input' type="password" name='password' minLength="8" maxLength='20' placeholder='Введите пароль' required/>
          <span className='auth__error'>Что-то пошло не так...</span>
          <button className='auth__submit-button auth__submit-button_register_margin' type="submit">Зарегистрироваться</button>
        </form>
        <div className='auth__auth'>
          <span className='auth__question'>Уже зарегистрированы?</span>
          <Link to='/signin' className='auth__link-auth'>Войти</Link>
        </div>
      </section>
    </main>
  )
};

export default Register;
