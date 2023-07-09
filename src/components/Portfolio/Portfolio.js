// компонент со ссылками на другие проекты.

import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <ul className='portfolio__main'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <li className='portfolio__list'>
          <a href='https://alekseyusynin.github.io/how-to-learn/' className='portfolio__project' target='_blank' rel="noreferrer">
            Статичный сайт
            <p className='portfolio__arrow'>&#8599;</p>
          </a>
        </li>
        <li className='portfolio__list'>
          <a href='https://alekseyusynin.github.io/russian-travel/' className='portfolio__project' target='_blank' rel="noreferrer">
            Адаптивный сайт
            <p className='portfolio__arrow'>&#8599;</p>
          </a>
        </li>
        <li className='portfolio__list'>
          <a href='https://alekseyusynin.github.io/mesto/' className='portfolio__project' target='_blank' rel="noreferrer">
            Одностраничное приложение
            <p className='portfolio__arrow'>&#8599;</p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
