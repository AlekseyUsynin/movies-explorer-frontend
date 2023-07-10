import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ short }) {
  return (
    <div className="filterCheckbox">
      <input className="filterCheckbox__checkbox" type="checkbox" onClick={short}></input>
      <span className="filterCheckbox__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;