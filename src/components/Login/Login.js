// компонент страницы авторизации.

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <main className="auth">
      <section className='auth__container'>
        <Link to='/' className='auth__logo'></Link>
        <h1 className='auth__title'>Рады видеть!</h1>

        <form className='auth__form'>

          <label className='auth__label'>E-mail</label>
          <input className='auth__input' type="email" name='email' minLength='2' maxLength='30' placeholder='Введите почу' required/>

          <label className='auth__label'>Пароль</label>
          <input className='auth__input' type="password" name='password' minLength="8" maxLength='20' placeholder='Введите пароль' required/>
          <span className='auth__error'>Что-то пошло не так...</span>
          <button className='auth__submit-button auth__submit-button_login_margin' type="submit">Войти</button>
        </form>
        <div className='auth__auth'>
          <span className='auth__question'>Ещё не зарегистрированы?</span>
          <Link to='/signup' className='auth__link-auth'>Регистрация</Link>
        </div>
      </section>
    </main>
  )
};

export default Login;
