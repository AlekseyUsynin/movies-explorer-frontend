// компонент со ссылками на другие проекты.

import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className='portfolio__main'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <a href='/' className='portfolio__project'>
          Статичный сайт
          <cpan className='portfolio__arrow'>&#8599;</cpan>
        </a>
        <a href='/' className='portfolio__project'>
          Адаптивный сайт
          <cpan className='portfolio__arrow'>&#8599;</cpan>
        </a>
        <a href='/' className='portfolio__project'>
          Одностраничное приложение
          <cpan className='portfolio__arrow'>&#8599;</cpan>
        </a>
      </div>
    </div>
  )
}

export default Portfolio;
