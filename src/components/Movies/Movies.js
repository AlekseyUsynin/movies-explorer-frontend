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
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import { Search } from '../../utils/searchMovie';
import PopupTooltip from "../PopupTooltip/PopupTooltip";
import {
  widthLarge,
  widthMiddle,
  widthSmall,
  additLinesLarge,
  additLinesMiddle,
  additLinesSmall,
  additLinesMinimum,
  moviesLarge,
  moviesMiddle,
  moviesSmall,
  moviesMinimum,
} from "../../utils/config";
import Preloader from '../Preloader/Preloader';
import './Movies.css'

function Movies(isLoggedIn) {
  const [movies, setMovies] = useState([])
  const [moviesAll, setMoviesAll] = useState([]);
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [loading, setLoading] = useState(false);
  const [isPopupTooltipOpen, setIsPopupTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [totalMovies, setTotalMovies] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSwitch, setIsSwitch] = useState(JSON.parse(localStorage.getItem('isSwitch')));

  // получаем список сохраненных фильмов, записываем в localStorage(нужно для поиска ID и удаления с этой страницы)
  useEffect(() => {
    MainApi.getSavedMovies()
      .then((movies) => {
        if (!movies) {
          throw new Error("Error");
        }
        localStorage.setItem('likeMovies', JSON.stringify(movies));
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      })
    updateWidth();
  }, []);

  useEffect(() => {
    handleClick(search);
  }, [isSwitch]);

  // определяем размер страницы и сколько карточек должно быть при закгрузке
  const updateWidth = () => {
    if (window.innerWidth >= widthLarge) {
      setTotalMovies(moviesLarge)
    }

    if (window.innerWidth >= widthMiddle && window.innerWidth < widthLarge) {
      setTotalMovies(moviesMiddle)
    }

    if (window.innerWidth >= widthSmall && window.innerWidth < widthMiddle) {
      setTotalMovies(moviesSmall)
    }

    if (window.innerWidth < widthSmall) {
      setTotalMovies(moviesMinimum)
    }
  };

  // определяем размер страницы и сколько картоцег будет дозагружено по кнопке Еще
  function handleMore() {
    let cardsToAdd = 0;
    if (window.innerWidth >= widthLarge) {
      cardsToAdd = additLinesLarge;
    } else if (window.innerWidth >= widthMiddle && window.innerWidth < widthLarge) {
      cardsToAdd = additLinesMiddle;
    } else if (window.innerWidth >= widthSmall && window.innerWidth < widthMiddle) {
      cardsToAdd = additLinesSmall;
    } else {
      cardsToAdd = additLinesMinimum;
    }

    setTotalMovies((totalMovies) => totalMovies + cardsToAdd);
  }

  // срабатывает ко кнопке найти из Формы поиска
  function handleClick (search) {
    updateWidth();
    setLoading(true);

    // находим все фильмы
    let moviesPromise = Promise.resolve(moviesAll);
    console.log('moviesPromise', moviesPromise)
    if (moviesAll.length === 0) {
      moviesPromise = MoviesApi.getMovies();
      console.log('moviesPromise if', moviesPromise)
    }
    moviesPromise
      .then((movies) => {
        console.log('movies', movies)
        if (!movies) {
          throw new Error("Error");
        }
        JSON.stringify(movies);
        setMoviesAll(movies);
        return Search(movies, search.toLowerCase(), isSwitch); // передаем текс поиска в Компонент Search для сортировки
      })
      .then((searchResult) => {
        console.log('searchResult', searchResult)
        if (searchResult) {
          setMovies(searchResult);
          if (searchResult.length === 0) {
            setIsPopupTooltipOpen(true);
            setTooltipMessage("Ничего не найдено");
          }
          return MainApi.getSavedMovies();
        }
      })
      .then((saved) => {
        console.log('saved', saved)
        if (saved) {
          setSavedMovies(saved);
          localStorage.setItem('search', search.toLowerCase());
          setSearch(search);
          localStorage.setItem('isSwitch', JSON.stringify(isSwitch));
          localStorage.setItem('searchResult', JSON.stringify(movies));
        }
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function closeTooltip () {
    setIsPopupTooltipOpen(!isPopupTooltipOpen);
  }

  // переключатель чекбокса
  function handleSwitcher() {
    setIsSwitch(!isSwitch);
  }

  // ставим лайк и сохраняем в localStorage(нужно для поиска ID и удаления с этой страницы)
  function handleMovieLike (card) {
    MainApi.handleLike(card)
      .then((res) => {
        card._id = res._id;
        if (!res) {
          throw new Error("Error");
        }
        return MainApi.getSavedMovies();
      })
      .then((saved) => {
        localStorage.setItem('likeMovies', JSON.stringify(saved));
        JSON.stringify(saved);
        setSavedMovies(saved);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
        if (error.status === 401) MainApi.signOut();
      });
  }

  // удаляем фильм
  async function handleMovieDelete (_id) {
    const likeMoviesAll = await JSON.parse(localStorage.getItem('likeMovies'));
    const movie = await likeMoviesAll.filter(function (elm) {
      const remainder = elm.movieId === _id
      return remainder
    })
    MainApi.deleteMovie(movie[0]._id)
      .then(() => {
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
        <main className="movies">
          <SearchForm
            clickHandler={(e) => handleClick(search, e)}
            switcherHandler={handleSwitcher}
            isSwitch={isSwitch}
            search={search}
            setSearch={setSearch}
          />
          {(movies.length !== 0) &&
            <MoviesCardList
              movies={movies.slice(0, totalMovies)}
              onMovieLike={handleMovieLike}
              isMovies={true}
              onMovieDelete={handleMovieDelete}
              savedMovies={savedMovies}
            />
          }
          {(movies.length > totalMovies) ?
            <button
              className='moviesCardList__more-button'
              type='button'
              onClick={handleMore}
            >Ещё</button>
            : <div className='moviesCardList__more-button-hidden'></div>}
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

export default Movies;
