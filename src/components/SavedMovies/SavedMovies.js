// компонент страницы с сохранёнными карточками фильмов. Пригодятся эти компоненты:
// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
// MoviesCard — компонент одной карточки фильма.
// Header — компонент, который отрисовывает шапку сайта на страницу.
// Navigation — компонент, который отвечает за меню навигации на сайте.
// Footer — презентационный компонент, который отрисовывает подвал.

import React, { useState } from 'react';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'
import Footer from '../Footer/Footer.js'
// import './Movies.css'

function SavedMovies() {
  const [short, isShort] = useState(false)

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
          savedMoviesComponent={true}
          />
      </main>
      <Footer />
    </>
  )
};

export default SavedMovies;