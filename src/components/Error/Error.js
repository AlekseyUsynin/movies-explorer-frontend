import React from 'react';
import { useNavigate } from "react-router-dom";
import './Error.css'

function Error() {
  const navigate = useNavigate(); 

  function goBack() {
    navigate(-1);
  }

  return (
    <main className="error">
      <div className='error__container'>
        <h1 className='error__title'>404</h1>
        <p className='error__subtitle'>Страница не найдена</p>
      </div>
      <button className='error__back-button' onClick={goBack} type='button'>Назад</button>
    </main>
  )
};

export default Error;
