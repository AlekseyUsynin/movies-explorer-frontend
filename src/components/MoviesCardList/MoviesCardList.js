// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js'
import './MoviesCardList.css'

function MoviesCardList({
  movies,
  savedMovies,
  isMovies,
  onMovieDelete,
  onMovieLike,
 }) {
  console.log('movies', savedMovies)
  return (
    <section className="moviesCardList">
      <ul className='moviesCardList__container' >
        {movies.map((movie) =>
          <li className='moviesCardList__card' key={movie.id ? movie.id : movie._id}>
            <MoviesCard
              movie={movie}
              isMovies={isMovies}
              savedMovies={savedMovies}
              onMovieLike={(movie) => { onMovieLike(movie); }}
              onMovieDelete={(movie) => { onMovieDelete(movie); }}
            />
          </li>
        )}
      </ul>
    </section>
  )
}

export default MoviesCardList;
