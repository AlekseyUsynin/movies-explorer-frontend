// компонент страницы с сохранёнными карточками фильмов. Пригодятся эти компоненты:
// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
// MoviesCard — компонент одной карточки фильма.
// Header — компонент, который отрисовывает шапку сайта на страницу.
// Navigation — компонент, который отвечает за меню навигации на сайте.
// Footer — презентационный компонент, который отрисовывает подвал.

import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'
import Footer from '../Footer/Footer.js'
import Preloader from "../Preloader/Preloader";
import MainApi from "../../utils/MainApi";
import PopupTooltip from "../PopupTooltip/PopupTooltip";
import { Search } from '../../utils/searchMovie';

function SavedMovies(isLoggedIn) {
  const [movies, setMovies] = useState([]);
  // const [moviesAll, setMoviesAll] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  // const [isSwitch, setIsSwitch] = useState(JSON.parse(localStorage.getItem('isSwitchSaved')));
  const [isSwitch, setIsSwitch] = useState(false);
  // const [search, setSearch] = useState(localStorage.getItem('search') ? localStorage.getItem('searchSavedMovies') : '');
  const [search, setSearch] = useState('')
  const [isPopupTooltipOpen, setIsPopupTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [clearSearch, setClearSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleClick(search);
  }, [isSwitch]);

  // срабатывает ко кнопке найти из Формы поиска
  function handleClick (clearSearch) {
    setLoading(true);
    setClearSearch("");

    MainApi.getSavedMovies()
      .then((movies) => {
        if (!movies) {
          throw new Error("Error");
        }
        JSON.stringify(movies);
        setMovies(movies);
        return Search(movies, clearSearch.toLowerCase(), isSwitch, false, true);
      })
      .then((searchResult) => {
        if(searchResult) {
          saveSearchResults(searchResult);
          if (searchResult.length === 0) {
            setIsPopupTooltipOpen(true);
            setTooltipMessage("Ничего не найдено");
          }
          // localStorage.setItem('searchSavedMovies', clearSearch.toLowerCase());
          setSearch(clearSearch);
          // localStorage.setItem('isSwitchSaved', JSON.stringify(isSwitch));
          localStorage.setItem('searchResultSaved', JSON.stringify(movies));
        }
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function closeTooltip () {
    setIsPopupTooltipOpen(!isPopupTooltipOpen);
  }

  function handleSwitcher() {
    setIsSwitch(!isSwitch);
  }

  function handleMovieDelete (_id) {
    MainApi.deleteMovie(_id)
      .then((res) => {
        handleClick(search)

        if (!res) {
          throw new Error("Error");
        }
        setSavedMovies(savedMovies.filter((movie) => movie._id !== _id));

      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  function saveSearchResults (movies) {
    localStorage.setItem('searchResultSaved', JSON.stringify(movies));
    setMovies(movies);
  }

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <main className="movies">
        <SearchForm
          search={search}
          switcherHandler={handleSwitcher}
          isSwitch={isSwitch}
          setSearch={setSearch}
          value={clearSearch}
          clickHandler={(e) => handleClick(search, e)}
          onChange={(e) => setClearSearch(e.target.value)}
        />
        {(movies) &&
          <MoviesCardList
            movies={movies}
            savedMovies={movies}
            onMovieLike={handleMovieDelete}
            onMovieDelete={handleMovieDelete}
          />
        }
      </main>
      <Footer />
      {isPopupTooltipOpen && <PopupTooltip
        isOpen={isPopupTooltipOpen}
        tooltipMessage={tooltipMessage}
        onClick={closeTooltip}
      />}
    </>
  )
};

export default SavedMovies;
