// презентационный компонент, который отрисовывает подвал.

// компонент с использованными технологиями.

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__main'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
          <span className='footer__text footer__text_date'>&#169; 2023</span>
          <ul className='footer__tools'>
            <li className='footer__list'>
              <a href='https://practicum.yandex.ru/' className='footer__text footer__text_indent' target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className='footer__list'>
              <a href='https://github.com/AlekseyUsynin' className='footer__text' target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
