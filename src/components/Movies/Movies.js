// компонент страницы с поиском по фильмам. В нём пригодятся эти компоненты:
// + SearchForm — форма поиска, куда пользователь будет вводить запрос. Обратите внимание на фильтр с чекбоксом «Только короткометражки». Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.
// Preloader — отвечает за работу прелоадера.
// + MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
// + MoviesCard — компонент одной карточки фильма.
// + Header — компонент, который отрисовывает шапку сайта на страницу.
// + Navigation — компонент, который отвечает за меню навигации на сайте.
// + Footer — презентационный компонент, который отрисовывает подвал.

import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'
import Footer from '../Footer/Footer.js'
import './Movies.css'

function Movies() {
  const [short, isShort] = useState(false)
  const [onMovies, isOnMovies] = useState(false)

  useEffect(() => {
    isOnMovies(true)
    return () => {
      isOnMovies(false)
    }
  }, [])

  function shortMovies () {
    isShort(!short)
  }

  return (
    <>
      <Header />
        <main className="movies">
          <SearchForm short={shortMovies}/>
          <MoviesCardList 
            short={short}
            onMovies={onMovies}
            savedMoviesComponent={false}
          />
        </main>
      <Footer />
    </>
  )
};

export default Movies;