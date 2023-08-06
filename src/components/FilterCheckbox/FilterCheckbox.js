import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isSwitch, handleSwitcher }) {
  function handleSwitch(e) {
    e.preventDefault();
    handleSwitcher();
  }

  return (
    <div className="filterCheckbox">
      <input className={`filterCheckbox__checkbox ${isSwitch ? 'filterCheckbox__checkbox_active' : ''}`} type="checkbox" onClick={handleSwitch}></input>
      <span className="filterCheckbox__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
