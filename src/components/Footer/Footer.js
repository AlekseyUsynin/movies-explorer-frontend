// презентационный компонент, который отрисовывает подвал.

// компонент с использованными технологиями.

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='footer__main'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
          <span className='footer__text'>&#169; 2023</span>
          <a href='/' className='footer__text footer_indent'>Яндекс.Практикум</a>
          <a href='/' className='footer__text'>Github</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
