// форма поиска, куда пользователь будет вводить запрос. Обратите внимание на фильтр с чекбоксом «Только короткометражки». Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.

import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css'

function SearchForm({ short }) {
  return (
    <section className="searchForm">
      <form className='searchForm__container'>
        <div className='searchForm__search-container'>
          <input className='searchForm__search-input' type="text" name="search" placeholder='Фильм' required/>
          <button className='searchForm__search-button' type='button'>Найти</button>
        </div>
        <FilterCheckbox short={short}/>
      </form>
    </section>
  )
};

export default SearchForm;