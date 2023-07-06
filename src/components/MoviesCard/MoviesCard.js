// компонент одной карточки фильма.

import React from 'react';
import './MoviesCard.css';

function MoviesCard({ data, savedMoviesComponent, counter }) {
  counter++

  return (
    <div className="moviesCard">
      <img src={data.img} alt="фото" className='moviesCard__img'/>
      <div className='moviesCard__interested'>
        <h2 className='moviesCard__title'>{data.title}</h2>

        <button className={`moviesCard__like-button ${savedMoviesComponent ? 'button_delete' : `${data.like ? 'like_active' : ''}`}`}></button>

      </div>
        <span className='moviesCard__time'>{data.time}</span>
    </div>
  )
};

export default MoviesCard;