// компонент с вёрсткой баннера страницы «О проекте».

import React from 'react';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__main'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <div className='promo__main-logo'></div>
      </div>
    </section>
  )
}

export default Promo;
