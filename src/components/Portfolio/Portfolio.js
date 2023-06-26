// компонент со ссылками на другие проекты.

import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className='portfolio__main'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <a href='https://alekseyusynin.github.io/how-to-learn/' className='portfolio__project' target='_blank' rel="noreferrer">
          Статичный сайт
          <cpan className='portfolio__arrow'>&#8599;</cpan>
        </a>
        <a href='https://alekseyusynin.github.io/russian-travel/' className='portfolio__project' target='_blank' rel="noreferrer">
          Адаптивный сайт
          <cpan className='portfolio__arrow'>&#8599;</cpan>
        </a>
        <a href='https://alekseyusynin.github.io/mesto/' className='portfolio__project' target='_blank' rel="noreferrer">
          Одностраничное приложение
          <cpan className='portfolio__arrow'>&#8599;</cpan>
        </a>
      </div>
    </div>
  )
}

export default Portfolio;
