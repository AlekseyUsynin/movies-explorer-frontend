// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js'
import './MoviesCardList.css'
import cards from '../../vendor/cadrs.js'

function MoviesCardList({ short, savedMoviesComponent }) {

  return (
    <div className="moviesCardList">
      <ul className='moviesCardList__container' >
        {cards.map((card, i) => {
          if (short && card.short && !savedMoviesComponent) {
            return (
              <li key={i} className='moviesCardList__card'>
                <MoviesCard 
                  data={card} 
                  savedMoviesComponent={false}
                />
              </li>
            )
          }
          else if (short && card.short && savedMoviesComponent && card.like) {
            return (
              <li key={i} className='moviesCardList__card'>
                <MoviesCard 
                  data={card} 
                  savedMoviesComponent={savedMoviesComponent}
                />
              </li>
            )
          }
          else if (!short && !savedMoviesComponent) {
            return (
              <li key={i} className='moviesCardList__card'>
                <MoviesCard 
                  data={card}
                  savedMoviesComponent={false}
                />
              </li>
            )
          } 
          else if (!short && savedMoviesComponent && card.like) {
            return (
              <li key={i} className='moviesCardList__card'>
                <MoviesCard 
                  data={card} 
                  savedMoviesComponent={savedMoviesComponent}
                />
              </li>
            )
          }
          else {return null}
        })}
      </ul>
      <button className='moviesCardList__more-button'>Ещё</button> 
    </div>
  )
}

export default MoviesCardList;