// компонент страницы авторизации.

import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormValidation } from '../../utils/useFormValidation';
import './Login.css'

function Login({ isLoggedIn, onLogin, isLoading }) {
  const {
    values,
    errors,
    reset,
    handleChange
  } = useFormValidation();
  const errorClassName = (name) => `auth__error ${errors[name] ? 'auth__error_visible' : ''}`
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/movies', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    reset({}, {}, false)}
    , []);

  const handleFormValid = useCallback((event) => {
    setIsFormValid(event.target.closest('form').checkValidity());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values)
  }

  return (
    <main className="auth">
      <section className='auth__container'>
        <Link to='/' className='auth__logo'></Link>
        <h1 className='auth__title'>Рады видеть!</h1>

        <form className='auth__form' onSubmit={handleSubmit}
        onChange={handleFormValid} isloading={isLoading.toString()}>

          <label className='auth__label'>E-mail</label>
          <input
            className='auth__input'
            id='inputEmail'
            type='email'
            name='email'
            minLength='2'
            maxLength='30'
            placeholder='Введите почу'
            required
            onChange={handleChange}
          />
          <span className={errorClassName('email')} id="inputEmail-error">{errors['email']}</span>

          <label className='auth__label'>Пароль</label>
          <input
            className='auth__input'
            type="password"
            name='password'
            minLength="8"
            maxLength='20'
            placeholder='Введите пароль'
            required
            onChange={handleChange}
            autoComplete='on'
          />
          <span className={errorClassName('password')} id="inputPassword-error">{errors['password']}</span>

          <button className={`auth__submit-button auth__submit-button_login_margin ${isFormValid ? '' : 'auth__submit-button_disabled'}`} type="submit" disabled={!isFormValid}>Войти</button>
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
