// форма поиска, куда пользователь будет вводить запрос. Обратите внимание на фильтр с чекбоксом «Только короткометражки». Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.

import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css'

function SearchForm({ short }) {
  return (
    <div className="searchForm">
      <div className='searchForm__container'>
        <div className='searchForm__search-container'>
          <input className='searchForm__search-input' type="text" name="search" placeholder='Фильм'/>
          <button className='searchForm__search-button'>Найти</button>
        </div>
        <FilterCheckbox short={short}/>
      </div>
    </div>
  )
};

export default SearchForm;