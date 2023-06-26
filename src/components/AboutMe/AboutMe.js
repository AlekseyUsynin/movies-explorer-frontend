// компонент с информацией о студенте.

import React from 'react';
import './AboutMe.css';
import foto from '../../images/aboutMeFoto.jpg'

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className='aboutMe__main'>
        <h2 className='main__section-title'>Студент</h2>
        <div className='aboutMe__container'>
          <div className='aboutMe__container-info'>
            <h3 className='aboutMe__title'>Алексей</h3>
            <p className='aboutMe__subtitle'>Фронтенд-разработчик, 35 лет</p>
            <p className='aboutMe__short'>Я родился и живу в Ижевске, закончил АНО Гуманитарно-инженерный колледж. У меня есть жена и двое детей. Свободное время посвящаю детям, компьютерным играм, просмотру комедий и изучаю материалы по теме frontend разработки. До курсов в Яндекс Практикум разработкой не занимался, но уже на 6 месяце учебы нащел работу в IT по специальности.</p>
            <a href='https://github.com/AlekseyUsynin' className='aboutMe__git' target="_blank" rel="noreferrer" >Github</a>
          </div>
          <img className='aboutMe__foto' src={foto} alt="Фото" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
