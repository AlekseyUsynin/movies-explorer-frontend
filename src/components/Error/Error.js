import React from 'react';
import { useNavigate } from "react-router-dom";
import './Error.css'

function Error() {
  const navigate = useNavigate(); 

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="error">
      <div className='error__container'>
        <h2 className='error__title'>404</h2>
        <p className='error__subtitle'>Страница не найдена</p>
      </div>
      <button className='error__back-button' onClick={goBack}>Назад</button>
    </div>
  )
};

export default Error;
