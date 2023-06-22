// компонент с использованными технологиями.

import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <div className="techs">
      <div className='techs__main'>
        <h2 className='main__section-title'>Технологии</h2>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__list'>
          <span className='techs__list-item'>HTML</span>
          <span className='techs__list-item'>CSS</span>
          <span className='techs__list-item'>JS</span>
          <span className='techs__list-item'>React</span>
          <span className='techs__list-item'>Git</span>
          <span className='techs__list-item'>Express.js</span>
          <span className='techs__list-item'>mongoDB</span>
        </div>
      </div>
    </div>
  )
}

export default Techs;
