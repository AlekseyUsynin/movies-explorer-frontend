// компонент одной карточки фильма.

import React, { useState, useEffect, useCallback } from 'react';
import './MoviesCard.css';

function MoviesCard({
  movie,
  savedMovies,
  onMovieLike,
  isMovies,
  onMovieDelete
 }) {
  const [isLiked, setisLiked] = useState(false);

  function handleDuration(minutes) {
    let mins = minutes % 60;
    let hours = Math.floor(minutes / 60);
    if (hours > 0) { return hours + ' h. ' + mins + ' min.'; }
    else { return minutes + ' min.'; }
  }

  useEffect(() => {
    checkLike();
  }, [movie, savedMovies]);

  const checkLike = useCallback(() => {
    let likedMovie = savedMovies.filter((savedMovie) => (savedMovie.nameRU === movie.nameRU) || (savedMovie.nameEN === movie.nameEN))
    if (likedMovie.length !== 0) {
      setisLiked(true);
      // setId(likedMovie[0]._id);
    }
  }, [movie.nameEN, movie.nameRU, savedMovies]);

  function handleCardLike () {
    if (isLiked && !isMovies) {
      try {
        onMovieDelete(movie._id);
        setisLiked(false);
      } catch (error) {
        console.error("Не получилось удалить фильм:", error);
      }
    } else if (isLiked && isMovies) {
      try {
        onMovieDelete(movie.id);
        setisLiked(false);
      } catch (error) {
        console.error("Не получилось удалить фильм:", error);
      }
    } else {
      try {
        onMovieLike(movie);
        setisLiked(true);
      } catch (error) {
        console.error("Не удалось поставить лайк:", error);
      }
    }
  };

  return (
    <article className="moviesCard">
      <a className='moviesCard__link' href={movie.trailerLink} target='_blank' rel="noreferrer">
        <img src={isMovies ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image} alt={`foto ${movie.nameEN}`} className='moviesCard__img'/>
      </a>
      <div className='moviesCard__interested'>
        <h2 className='moviesCard__title'>{movie.nameRU}</h2>

        <button className={
          `moviesCard__like-button ${isMovies
            ? `${isLiked
              ? 'moviesCard__like-button_active'
              : 'moviesCard__like-button_noActive'}`
            : 'moviesCard__like-button_delete'}`}
          type='button' onClick={handleCardLike}></button>
      </div>
        <span className='moviesCard__time'>{handleDuration(movie.duration)}</span>
    </article>
  )
};

export default MoviesCard;
