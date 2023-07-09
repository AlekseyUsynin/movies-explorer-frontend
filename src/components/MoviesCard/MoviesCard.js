// компонент одной карточки фильма.

import React from 'react';
import './MoviesCard.css';

function MoviesCard({ data, savedMoviesComponent, counter }) {
  counter++

  return (
    <article className="moviesCard">
      <a className='movies__link' href="/movies" target='_blank'>
        <img src={data.img} alt={data.title} className='moviesCard__img'/>
      </a>
      <div className='moviesCard__interested'>
        <h2 className='moviesCard__title'>{data.title}</h2>

        <button className={`moviesCard__like-button ${savedMoviesComponent ? 'button_delete' : `${data.like ? 'like_active' : ''}`}`} type='button'></button>

      </div>
        <span className='moviesCard__time'>{data.time}</span>
    </article>
  )
};

export default MoviesCard;