// компонент страницы регистрации.

import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormValidation } from '../../utils/useFormValidation';
import './Register.css'

function Register({ isLoggedIn, onRegister, registered }) {
  const {
    values,
    errors,
    reset,
    handleChange
  } = useFormValidation();
  const errorClassName = (name) => `auth__error ${errors[name] ? 'auth__error_visible' : ''}`
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleFormValid = useCallback((event) => {
    setIsFormValid(event.target.closest('form').checkValidity());
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/movies', { replace: true });
    }
  }, [isLoggedIn, navigate]);

//   useEffect(() => {
//     if (registered) {
//       navigate('/signin');
//     }
// }, [navigate, registered])

  useEffect(() => {
    reset({}, {}, false)
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values)
  }

  return (
    <main className="auth">
      <section className='auth__container'>
        <Link to='/' className='auth__logo'></Link>
        <h1 className='auth__title'>Добро пожаловать!</h1>

        <form className='auth__form' onSubmit={handleSubmit} onChange={handleFormValid}>
          <label className='auth__label'>Имя</label>
          <input
            className='auth__input'
            id='inputName'
            type="text"
            name='name'
            minLength='2'
            maxLength='30'
            placeholder='Введите логин'
            required
            onChange={handleChange}
          />
          <span className={errorClassName('name')} id="inputName-error">{errors['name']}</span>

          <label className='auth__label'>E-mail</label>
          <input
            className='auth__input'
            id='inputEmail'
            type="email"
            name='email'
            minLength='2'
            maxLength='30'
            placeholder='Введите почту'
            required
            onChange={handleChange}
          />
          <span className={errorClassName('email')} id="inputEmail-error">{errors['email']}</span>

          <label className='auth__label'>Пароль</label>
          <input
            className='auth__input'
            id='inputPassword'
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

          <button
            className={`auth__submit-button auth__submit-button_register_margin ${isFormValid ? '' : 'auth__submit-button_disabled'}`}
            type="submit"
            disabled={!isFormValid}
            >Зарегистрироваться</button>
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
