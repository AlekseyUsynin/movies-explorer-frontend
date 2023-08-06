// форма поиска, куда пользователь будет вводить запрос. Обратите внимание на фильтр с чекбоксом «Только короткометражки». Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.

import React, { useState, useRef, useEffect } from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css'

function SearchForm({
  clickHandler,
  switcherHandler,
  isSwitch,
  search,
  setSearch
}) {
  const [state, setState] = useState(search);
  const [isActive, setIsActive] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const timerRef = useRef(null);
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    setState(search);
  }, [search])


  useEffect(() => {
    if (!state) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [state])

  useEffect(() => {
    if (!isInputFocused && timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, [isInputFocused]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isInputValid) {
      clickHandler(state);
    }
  }

  function onChange(e) {
    const value = e.target.value;
    setState(value)
    setSearch(value)
    if (!value.trim()) {
      setIsInputValid(false);
    }
    else {
      setIsInputValid(true);
    }
  }

  return (
    <section className="searchForm">
      <form className='searchForm__container' onSubmit={handleSubmit}>
        <div className='searchForm__search-container'>
          <input className='searchForm__search-input' type="text" name="search"
            id="inputSearch"
            placeholder='Фильм'
            value={state}
            onChange={e => onChange(e)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            required />
          <button
            className={`searchForm__search-button ${isActive ? '' : 'searchForm__search-button_disabled'}`}
            disabled={!isActive}
            type='submit'
          >Найти</button>
        </div>
        <FilterCheckbox
          isSwitch={isSwitch}
          handleSwitcher={switcherHandler}
        />
      {(!isInputValid && !isActive) && <p className="search__error">Нужно ввести ключевое слово</p>}
      </form>
    </section>
  )
};

export default SearchForm;
