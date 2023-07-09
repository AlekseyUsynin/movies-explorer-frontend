// компонент с описанием дипломного проекта.

import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject">
      <div className='aboutProject__main'>
        <h2 className='main__section-title'>О проекте</h2>
        <div className='aboutProject__info-container'>
          <div className='aboutProject__info'>
            <h3 className='aboutProject__info-title'>Дипломный проект включал 5 этапов</h3>
            <p className='aboutProject__info-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='aboutProject__info'>
            <h3 className='aboutProject__info-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='aboutProject__info-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='aboutProject__stages'>
          <span className='aboutProject__stages-title background_green'>1 неделя</span>
          <span className='aboutProject__stages-title background_grey'>4 недели</span>
          <span className='aboutProject__stages-title'>Back-end</span>
          <span className='aboutProject__stages-title'>Front-end</span>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
